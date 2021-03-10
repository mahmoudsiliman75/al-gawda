<template>
  <div class="col-12 col-md-2 user_menu_wraper p-0">
    <div class="user_profile_menu">
      <ul class="list-unstyled">
        <li class="active"> 
          <a href="UserProfile.php"> My Books </a>
        </li>

        <li> 
          <a href="UserPayments.php"> My Payments </a>
        </li>

        <li> 
          <a href="UserCart.php"> My Cart </a>
        </li>

        <li> 
          <a href="EditUserInfo.php"> Edit Your Info </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// START:: IMPORTING MAIN FILE
@import "../../assets/sass/main.scss";
// END:: IMPORTING MAIN FILE

.user_profile_menu {
  padding: 30px;
  padding-inline-end: 0;
  border-left: 2px solid $mainColor;
  background-color: #1f8dff14;
  height: 100%;
  min-height: 80vh;
  ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    li {
      font-size: 18px;
      margin: 8px 0;
      color: #555;
      border-bottom: 2px solid transparent;
      &.active,
      &:hover {
        a {
          border-bottom: 2px solid $secondryColor;
          color: $secondryColor;
        }
      }
      a {
        text-decoration: none;
        color: #555;
      }
      button {
        color: #555;
      }
    }
  }
}

@media ( max-width: 767px) {
  .page_content_wraper {
    order: 2;
  }

  .user_menu_wraper {
    order: 1;
    .user_profile_menu {
      min-height: auto !important;
      padding-top: 20px;
      padding-bottom: 20px;
      padding-inline-start: 0;
      ul {
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        li {
          font-size: 13px;
        }
      }
    }
  }
}
</style>