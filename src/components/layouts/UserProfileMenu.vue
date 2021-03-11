<template>
  <div class="col-12 user_menu_wraper p-0">
    <div class="user_profile_menu">
      <ul class="list-unstyled">
        <li class="active"> 
          <router-link to="/profile"> 
            <icon name="pencil-alt" size="20px"/>
            My Courses 
          </router-link>
        </li>

        <li> 
          <router-link to="/payments"> 
            <icon name="dollar-sign" size="20px"/>
            My Payments 
          </router-link>
        </li>

        <li> 
          <router-link to="/">
            <icon name="user-cog" size="20px"/> 
            Edit My Info 
          </router-link>
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
  padding: 20px;
  padding-inline-end: 0;
  border-bottom: 2px solid $mainColor;
  background-color: #1f8dff14;
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      font-size: 18px;
      margin: 0 15px;
      color: #555;
      border-bottom: 2px solid transparent;
      a {
        text-decoration: none;
        color: #555;
        &.router-link-exact-active,
        &:hover {
          border-bottom: 2px solid $secondryColor;
          color: $secondryColor;
        }
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