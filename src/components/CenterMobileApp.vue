<template>
  <div class="mobile-app-sec">
    <!-- START:: OVERLAY -->
    <div class="overlay">
      <!-- START:: SECTION SVG -->
      <div class="section-svg">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <!-- END:: SECTION SVG -->

      <div class="container">
        <div class="row">
          <div
            class="col-12 col-md-4 mobile-app-img d-flex justify-content-center align-items-start"
          >
            <img src="../assets/media/svg/mobile.svg" alt="" />
          </div>

          <div class="col-12 col-md-8 mobile-app-info">
            <h2> {{ $t('download_app') }} </h2>
            <div class="links-box d-flex justify-content-between">
              <a href="#">
                <img src="../assets/media/google-play.png" />
              </a>

              <a href="#">
                <img src="../assets/media/app-store.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END:: OVERLAY -->
  </div>
</template>

<style lang="scss" scoped>
// START:: IMPORT MAIN FILE
@import "../assets/sass/main.scss";
// END:: IMPORT MAIN FILE

.mobile-app-sec {
  overflow: hidden;
  background-image: url("../assets/media/bg.png");
  background-size: cover;
  padding: $sectionPadding;
  min-height: 500px;
  max-height: 500px;
  position: relative;
  .overlay {
    display: flex !important;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: block;
    min-height: 500px;
    max-height: 500px;
    background-color: rgba(0, 9, 56, 0.7);
    z-index: 1;
    color: #fff;
  }
  .section-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotateY(180deg);
    z-index: 2;
    path {
      fill: #fff;
    }
  }
  .mobile-app-img,
  .mobile-app-info {
    z-index: 999;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .mobile-app-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .links-box {
      a {
        margin: 10px;
        img {
          height: 60px;
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .mobile-app-sec {
    min-height: 700px;
    max-height: 700px;
    .overlay {
      min-height: 700px;
      max-height: 700px;
    }
    .mobile-app-img {
      z-index: 999;
      img {
        max-width: 70%;
        height: auto;
      }
    }
  }
}
</style>
