<template>
  <div class="cart">
    <div class="container">
      <div class="text-center">
        <h2 class="sec-header"> Your Cart </h2>
      </div>

      <div class="impty_cart_message" v-if="cartData.length == 0">
        <h2> 
          Your Cart Is Empty! Add Some courses 
        </h2>
      </div>
      
      <div class="cart_content" v-else>
        <table class="table table-hover">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col"> Image </th>
              <th scope="col"> Course Name </th>
              <th scope="col"> Price </th>
              <th scope="col"> Action </th>
            </tr>
          </thead>

          <tbody>
            <tr 
              v-for="(single_course, index) in cartData" 
              :key="single_course.id"
            >
              <th scope="row"> {{index+1}} </th>
              <td> 
                <img :src="single_course.imgSrc">
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
            <span> Total Price: </span>
            {{clcTotal}}
          </div>
          <button class="btn btn-danger mt-3" @click="clearCart"> Clear </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    clearCart() {
      this.$store.state.cart = []
    },

    deleteItem(courseId) {
      var newCart = this.$store.state.cart;
      newCart = newCart.filter( function ( course ) {
        return course.id != courseId;
      });
      this.$store.state.cart = newCart;
    }
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