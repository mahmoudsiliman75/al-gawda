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
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td> 200 KWD </td>
                <td> 21 - 3 -2021 </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserMenu from "../components/layouts/UserProfileMenu";

export default {
  components: {
    "user-menu": UserMenu,
  }
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
  }
}
</style>