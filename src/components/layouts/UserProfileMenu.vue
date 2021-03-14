<template>
  <div class="col-12 user_menu_wraper p-0">
    <div class="user_profile_menu">
      <ul class="list-unstyled">
        <li class="my-2"> 
          <router-link to="/profile">
            <icon name="pencil-alt" size="20px"/>
            {{ $t('my_courses') }}
            <span></span>
            <span></span>
          </router-link>
        </li>

        <li class="my-2"> 
          <router-link to="/payments">
            <icon name="dollar-sign" size="20px"/>
            {{ $t('my_payments') }}
            <span></span>
            <span></span>
          </router-link>
        </li>

        <li class="my-2"> 
          <router-link to="/edit_user">
            <icon name="user-cog" size="20px"/>
            {{ $t('edit_info') }}
            <span></span>
            <span></span>
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
      margin: 0 10px;
      padding: 5px 10px;
      text-decoration: none;
      color: $mainColor;
      text-transform: uppercase;
      position: relative;
      @include transitioning();

      span {
        &:first-child {
          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 12px;
            height: 12px;
            background-color: transparent;
            border-top: 2px solid $secondryColor;
            border-left: 2px solid $secondryColor;
            border-top-left-radius: 5px;
            opacity: 0;
            @include transitioning();
          }

          &::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 12px;
            height: 12px;
            background-color: transparent;
            border-top: 2px solid $secondryColor;
            border-right: 2px solid $secondryColor;
            border-top-right-radius: 5px;
            opacity: 0;
            @include transitioning();
          }
        }

        &:last-child {
          &::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 12px;
            height: 12px;
            background-color: transparent;
            border-bottom: 2px solid $secondryColor;
            border-left: 2px solid $secondryColor;
            border-bottom-left-radius: 5px;
            opacity: 0;
            @include transitioning();
          }

          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            right: 0;
            width: 12px;
            height: 12px;
            background-color: transparent;
            border-bottom: 2px solid $secondryColor;
            border-right: 2px solid $secondryColor;
            border-bottom-right-radius: 5px;
            opacity: 0;
            @include transitioning();
          }
        }
      }

      &:hover span:first-child::before,
      &:hover span:first-child::after,
      &:hover span:last-child::before,
      &:hover span:last-child::after,
      &.router-link-exact-active span:first-child::before,
      &.router-link-exact-active span:first-child::after,
      &.router-link-exact-active span:last-child::before,
      &.router-link-exact-active span:last-child::after {
        color: $secondryColor;
        opacity: 1;
      }

      &:hover,
      &.router-link-exact-active {
        color: $secondryColor;
      }
      }
    }
  }
}

@media ( max-width: 767px) {
  .user_menu_wraper {
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