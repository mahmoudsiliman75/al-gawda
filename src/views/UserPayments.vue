<template>
  <div class="profile">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <!-- START:: INCLUDING USER MENU -->
        <user-menu></user-menu>
        <!-- END:: INCLUDING USER MENU -->

        <div class="col-11 content_wraper">
          <div class="header_wraper">
            <h2 class="sec-header"> {{ $t('my_payments') }} </h2>
          </div>

          <table class="table text-center">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col"> {{ $t('payment_amount') }} </th>
                <th scope="col"> {{ $t('date') }} </th>
                <th scope="col"> {{ $t('payment_method') }} </th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="(order, index) in ordersList" 
                :key="order.id"
              >
                <th scope="row"> {{index+1}} </th>
                <td> {{ order.total }} KWD </td>
                <td> {{ order.created_at }} </td>
                <td> {{ order.payment_method }} </td>
              </tr>
            </tbody>
          </table>

          <div class="total_wraper d-flex justify-content-center mt-3">
            <h4> {{$t('total')}}: <span> {{clcTotal}} KWD </span> </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import UserMenu from "../components/layouts/UserProfileMenu";

export default {
  components: {
    "user-menu": UserMenu,
  },

  data() {
    return {
      ordersList: [],
    }
  },

  computed: {
    clcTotal() {
      var total = 0;
      this.ordersList.forEach(order => {
        total += parseInt(order.total)
      });
      return total
    }
  },

  methods: {
    getOrderData() {
      var theToken = localStorage.getItem('user_token');
      axios.get(this.$store.state.api_link+'api/orders', {
        headers: {
          "x-api-key": theToken,
        }
      })
      .then( res => this.ordersList = res.data.data );
    }
  },

  mounted() {
    this.getOrderData();
  },
}
</script>

<style lang="scss" scoped>
// START:: IMPORTING MAIN FILE
@import "../assets/sass/main.scss";
// END:: IMPORTING MAIN FILE

.profile {
  .content_wraper {
    padding: $sectionPadding;
    min-height: 70vh;
    .header_wraper {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    table {
      td, 
      th {
        img {
          min-width: 100px;
          max-width: 100px;
          min-height: 80px;
          max-height: 80px;
          }
        a {
          color: $secondryColor;
          text-decoration: none;
        }
      }

      td {
        color: $mainColor;
        font-weight: 600;
      }

    }

    .total_wraper {
      h4 {
        color: $secondryColor;
        font-weight: 700;
        span {
          color: $mainColor;
          font-weight: 500;
          font-size: 18px;
        }
      }
    }
  }
}
</style>