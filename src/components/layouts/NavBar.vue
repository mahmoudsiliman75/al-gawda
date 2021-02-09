<template>
  <!-- START:: INTRO BAR -->
  <div class="intro-bar">
    <div class="container-fluid">
      <div class="row d-flex justify-content-between">

        <div class="btns-box col-6 d-flex justify-content-start align-items-center">
          <router-link to="/"> Register </router-link>
          <router-link to="/"> Login </router-link>
        </div>

        <div class="links-menu-box col-6">
          <ul class="list-unstyled d-flex justify-content-end m-0">
            <li>
              <a href="#"> <b-icon-facebook /> </a>
            </li>

            <li>
              <a href="#"> <b-icon-twitter /> </a>
            </li>

            <li>
              <a href="#"> <b-icon-linkedin /> </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- END:: INTRO BAR -->

  <!-- START:: NAVIGATION BAR -->
  <div class="nav-bar d-flex align-items-center justify-content-between">
    <div class="site-logo">
      <img alt="logo" src="../../assets/media/logo.png" />
    </div>

    <div class="nav-bar-links">
      <router-link to="/home">Home</router-link> 
      <router-link to="/about">About</router-link>
      <router-link to="/">Join</router-link>
    </div>
  </div>
  <!-- END:: NAVIGATION BAR -->
</template>

<style lang="scss" scoped>
// START:: INCLUDING MAIN STYLE FILE
@import "../../assets/sass/main.scss";
// END:: INCLUDING MAIN STYLE FILE

// START:: INTRO BAR STYLES
.intro-bar {
  background-color: $mainColor;
  padding: 15px 5px;
  .btns-box {
    a {
      text-decoration: none;
      color: #fff;
      margin: 0 8px;
      padding: 5px 10px;
      @include transitioning();
      &:hover {
        background-color: rgba(225, 225, 225, 0.2);
      }
    }
  }

  .links-menu-box {
    ul {
      li {
        font-size: 22px;
        display: inline-block;
        margin: 0 8px;
        transform-origin: bottom;
        @include transitioning();
        &:hover {
          @include scaleAndRotate(1.1, -20deg);
        }
        a {
          color: #fff;
          &:hover {
            color: $secondryColor;
          }
        }
      }
    }
  }
}
// END:: INTRO BAR STYLES

// START:: NAVIGATION BAR STYLES
.nav-bar {
  background-color: #f1f1f1;
  padding: 15px 5px;
  .site-logo {
    img {
      min-height: 65px;
      max-height: 65px;
    }
  }

  .nav-bar-links {
    a {
      margin: 0 8px;
      text-decoration: none;
      font-size: 18px;
      font-weight: 600;
      color: $mainColor;
      border-bottom: 2px solid transparent;
      @include transitioning();
      &.router-link-active, 
      &:hover {
        color: $secondryColor;
        border-bottom: 2px solid $secondryColor;
      }
    }
  }
}
// END:: NAVIGATION BAR STYLES

</style>