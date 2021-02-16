<template>
  <!-- START:: INTRO BAR -->
  <div class="intro-bar">
    <div class="container-fluid">
      <div class="row d-flex justify-content-between">

        <div class="btns-box col-6 d-flex justify-content-start align-items-center">
          <router-link to="/"> Register </router-link>
          <router-link to="/"> Login </router-link>
          <a href="#"> 
            <img src="../../assets/media/translate.png" alt="" width="25" height="25">
          </a>
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
      <router-link to="/">
        Home 
        <span></span> 
        <span></span>
      </router-link>

      <router-link to="/about">
        About
        <span></span> 
        <span></span>
      </router-link>

      <router-link to="/courses">
        Courses
        <span></span> 
        <span></span>
      </router-link>

      <router-link to="/team">
        Our Team
        <span></span> 
        <span></span>
      </router-link>

      <router-link to="/blog">
        Blog
        <span></span> 
        <span></span>
      </router-link>

      <router-link to="/contact">
        Contact Us
        <span></span> 
        <span></span>
      </router-link>
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
    display: flex;
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
      &.router-link-active span:first-child::before,
      &.router-link-active span:first-child::after,
      &.router-link-active span:last-child::before,
      &.router-link-active span:last-child::after
      {
        color: $secondryColor;
        opacity: 1;
      }

      &:hover,
      &.router-link-active {
        color: $secondryColor;
      }
    }
  }
}
// END:: NAVIGATION BAR STYLES

</style>