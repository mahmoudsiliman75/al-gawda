<template>
  <div class="cart">
    <div class="container">
      <div class="text-center">
        <h2 class="sec-header"> {{ $t('cart') }} </h2>
      </div>

      <div class="impty_cart_message" v-if="cartData.length == 0">
        <h2> 
          {{ $t('cart_message') }}
        </h2>
      </div>
      
      <div class="cart_content" v-else>
        <table class="table table-hover">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col"> {{ $t('course_img') }} </th>
              <th scope="col"> {{ $t('course_name') }} </th>
              <th scope="col"> {{ $t('course_price') }} </th>
              <th scope="col"> {{ $t('action') }} </th>
            </tr>
          </thead>

          <tbody>
            <tr 
              v-for="(single_course, index) in cartData" 
              :key="single_course.id"
            >
              <th scope="row"> {{index+1}} </th>
              <td> 
                <img :src="single_course.image_path">
              </td>
              <td> {{ single_course.name }} </td>
              <td> {{ single_course.price }} </td>
              <td> 
                <button class="btn" @click="deleteItem(single_course.id)">
                  <icon name="trash-alt" size="20px" color="#F00"/>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="btn_box">
          <div class="total">
            <span> {{ $t('total') }} : </span>
            {{clcTotal}} KWD
          </div>

          <div class="d-flex align-items-center">
            <button 
              class="btn btn-danger mx-2" 
              @click="clearCart(); sweetAlert( $t('clear_cart') );"
            > 
              {{ $t('clear') }}
            </button>

            <div class="form-group mt-3">
              <select class="form-control" v-model="payment_method">
                <option value="cash"> {{ $t('cash') }} </option>
                <option value="credit"> {{ $t('credit') }} </option>
              </select>
            </div>

            <button 
              class="btn btn-success mx-2" 
              @click="checkOut()"
            > 
              {{ $t('check_out') }}
            </button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {

  data() {
    return {
      payment_method: '',
    }
  },

  computed: {
    cartData() {
      return this.$store.state.cart;
    },

    clcTotal() {
      var total = 0;
      this.cartData.forEach(course => {
        total += parseInt(course.price)
      });
      return total
    }
  },

  methods: {
    sweetAlert(messsage) {
      this.$swal( "", messsage, "success" );
    },

    clearCart() {
      this.$store.state.cart = [];
      localStorage.setItem('cart', JSON.stringify( [] ));
    },

    deleteItem(courseId) {
      var newCart = this.$store.state.cart;
      newCart = newCart.filter( function ( course ) {
        return course.id != courseId;
      });
      this.$store.state.cart = newCart;

      this.deleteItemFromLocalStorage(courseId);
    },

    deleteItemFromLocalStorage(courseId) {
      var newCart = JSON.parse(localStorage.getItem('cart'));
      newCart = newCart.filter( function ( course ) {
        return course.id != courseId;
      });
      localStorage.setItem('cart', JSON.stringify(newCart));
    },

    getCartCourses() {
      var coursesIds = [];
      var localStorageCart = JSON.parse(localStorage.getItem('cart'));
      
      localStorageCart.forEach(el => {
        coursesIds.push(el.id);
      });

      return coursesIds
    },

    checkOut() {

      // var pay_method = this.payment_method;

      var localStorageToken = localStorage.getItem('user_token');
      var data = {
        courses: this.getCartCourses(),
        // payment_method: 'cash',
        payment_method: this.payment_method,
      };
      axios.post(this.$store.state.api_link+'api/orders/checkout', data, {
        headers: {
          'x-api-key': localStorageToken,
        }
      })
      .then( res => {
        if ( data.payment_method == 'credit' ) {
          window.location.href = res.data.data.payment_url
        }
        this.clearCart();
        this.sweetAlert( this.$t('paid') );
      });

    },
  },
}
</script>

<style lang="scss" scoped>
// START:: IMPORTING MAIN FILE
@import '../assets/sass/main.scss';
// END:: IMPORTING MAIN FILE

.cart {
  padding: 50px 0;
  min-height: 75vh;
  .impty_cart_message {
    margin-top: 70px;
    h2 {
      text-align: center;
      color: $mainColor;
    }
  }
  .cart_content {
    table {
      td, 
      th {
      img {
        min-width: 100px;
        max-width: 100px;
        min-height: 80px;
        max-height: 80px;
        }
        button {
          @include borderRadius(50%);
        }
      }

    }

    .btn_box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .total {
        color: #666;
        span {
          font-weight: bold;
          font-size: 18px;
          color: $mainColor;
        }
      }
    }
  }
}
</style>