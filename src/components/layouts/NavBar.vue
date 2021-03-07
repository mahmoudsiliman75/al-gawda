<template>
  <div>
    <!-- START:: INTRO BAR -->
    <div class="intro-bar">
      <div class="container-fluid">
        <div class="row d-flex justify-content-between">
          <div class="btns-box col-6 d-flex justify-content-start align-items-center">
            <button>
              <router-link to="/">
                {{ $t('login') }}
              </router-link>
            </button>

            <button @click="changelang('en')" v-if="this.$i18n.locale == 'ar' ">
              <img src="../../assets/media/translate.png" alt="" width="40" height="40">
            </button>

            <button @click="changelang('ar')" v-if="this.$i18n.locale == 'en' ">
              <img src="../../assets/media/translate.png" alt="" width="40" height="40">
            </button>

            <!-- <button>
              <icon name="shopping-cart"  />
            </button> -->
          </div>

          <div class="links-menu-box col-6">
            <ul class="list-unstyled d-flex justify-content-end m-0">
              <li>
                <a href="#"> <icon name="facebook-square" color="#fff" /> </a>
              </li>

              <li>
                <a href="#"> <icon name="twitter-square" color="#fff" /> </a>
              </li>

              <li>
                <a href="#"> <icon name="linkedin" color="#fff" /> </a>
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

      <!-- START:: LARGE SCREENS NAVIGATION BAR -->
      <div class="nav-bar-links">
        <router-link to="/">
          {{ $t('home') }}
          <span></span>
          <span></span>
        </router-link>

        <router-link to="/about">
          {{ $t('about_us') }}
          <span></span>
          <span></span>
        </router-link>

        <!-- <div class="courses-menu-box d-flex">
          <a href="#">
            Courses
            <span></span> 
            <span></span>
          </a>

          <ul class="courses-dd-menu list-unstyled">
            <li class="menu-item my-2" v-for="tab in tabInfo" :key="tab.tadId">
              <router-link :to="'/courses/' + tab.tadId "> {{tab.tabText}} Courses </router-link> 
            </li>
          </ul>
        </div> -->

        <router-link to="/courses_cats">
          {{ $t('courses') }}
          <span></span>
          <span></span>
        </router-link>

        <router-link to="/team">
          {{ $t('team') }}
          <span></span>
          <span></span>
        </router-link>

        <router-link to="/blog">
          {{ $t('blog') }}
          <span></span>
          <span></span>
        </router-link>

        <router-link to="/contact">
          {{ $t('contact_us') }}
          <span></span>
          <span></span>
        </router-link>
      </div>
      <!-- END:: LARGE SCREENS NAVIGATION BAR -->

      <!-- START:: SMALL SCREENS NAVIGATION MENU BUTTON -->
      <div class="mobile-menu-btn">
        <button class="btn" @click="toggleMobileMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>
      <!-- END:: SMALL SCREENS NAVIGATION MENU BUTTON -->
    </div>
    <!-- END:: NAVIGATION BAR -->

    <!-- START:: SMALL SCREENS NAVIGATION MENU -->
    <div class="mobile-menu" v-if="menuIsVisible">
      <ul class="list-unstyled">
        <li>
          <router-link to="/"> {{ $t("home") }} </router-link>
        </li>

        <li>
          <router-link to="/about"> {{ $t("about_us") }} </router-link>
        </li>

        <li>
          <router-link to="/courses_cats"> {{ $t("courses") }} </router-link>
        </li>

        <li>
          <router-link to="/team"> {{ $t("team") }} </router-link>
        </li>

        <li>
          <router-link to="/blog"> {{ $t("blog") }} </router-link>
        </li>

        <li>
          <router-link to="/contact"> {{ $t("contact_us") }} </router-link>
        </li>
      </ul>
    </div>
    <!-- END:: SMALL SCREENS NAVIGATION MENU -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuIsVisible: false
    };
  },

  methods: {
    toggleMobileMenu() {
      this.menuIsVisible = !this.menuIsVisible;
    },

    changelang(locale) {
      this.$i18n.locale = locale;

      if ( locale == 'en' ) {
        document.querySelector('body').style.direction = "ltr";
      } else if ( locale == 'ar' ) {
        document.querySelector("body").style.direction = "rtl";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// START:: INCLUDING MAIN STYLE FILE
@import "../../assets/sass/main.scss";
// END:: INCLUDING MAIN STYLE FILE

// START:: INTRO BAR STYLES
.intro-bar {
  background-color: $mainColor;
  padding: 15px 5px;
  .btns-box {
    button {
      color: #fff;
      margin: 0 8px;
      padding: 5px 10px;
      background-color: transparent;
      border: none;
      @include transitioning();
      &:hover {
        background-color: rgba(225, 225, 225, 0.2);
      }
      a {
        text-decoration: none;
        color: #fff;
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
          svg {
            path {
              fill: #fff !important;
            }
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
  padding: 15px 30px;
  .site-logo {
    img {
      min-height: 80px;
      max-height: 80px;
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

    .courses-menu-box {
      position: relative;
      .courses-dd-menu {
        display: none;
        opacity: 0;
        margin: 0;
        position: absolute;
        top: 110%;
        left: 0;
        width: 150%;
        z-index: 999;
        background-color: #f1f1f1;
        border-top: 2px solid $mainColor;
        box-shadow: 0 0 15px 1px $mainColor;
        @include borderRadius(5px);
        .menu-item {
          padding: 5px;
        }
      }
      &:hover {
        @include transitioning();
        .courses-dd-menu {
          display: block;
          opacity: 1;
        }
        .menu-item {
          @include transitioning();
          &:hover {
            a {
              background-color: $mainColor;
              color: #fff;
            }
          }
        }
      }
    }
  }

  .mobile-menu-btn {
    .btn {
      padding: 0;
      svg {
        color: $secondryColor;
      }
      &:focus {
        outline: none;
      }
    }
  }
}

@media (max-width: 850px) {
  .nav-bar {
    .nav-bar-links {
      display: none;
    }
  }
}

@media (min-width: 850px) {
  .nav-bar {
    .mobile-menu-btn {
      display: none;
    }
  }
}
// END:: NAVIGATION BAR STYLES

// START:: MOBILE MENU STYLES
.mobile-menu {
  box-shadow: 0 15px 19px -15px $secondryColor;
  ul {
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    li {
      padding: 8px 0;
      margin-bottom: 8px;
      text-align: center;
      position: relative;
      overflow: hidden;
      a {
        text-transform: uppercase;
        color: $mainColor;
        &:hover {
          text-decoration: none;
        }
        &.router-link-exact-active {
          color: $secondryColor;
          &::before {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            display: block;
            width: 100%;
            height: 2px;
            background-color: $secondryColor;
            @include transitioning();
          }
        }
        &::before {
          content: "";
          position: absolute;
          left: -100%;
          bottom: 0;
          display: block;
          width: 100%;
          height: 2px;
          background-color: $secondryColor;
          @include transitioning();
        }
        &:hover::before {
          left: 0 !important;
        }
      }
    }
  }
}
// END:: MOBILE MENU STYLES
</style>
