<template>
  <div
    id="home_slider"
    class="carousel slide carousel-fade"
    data-ride="carousel"
    dir="ltr"
  >
    <div class="carousel-inner">
      <!-- START:: SLIDE CONTENT -->
      <div
        class="carousel-item d-flex justfy-content-center align-items-center"
        :class="index == 0 ? 'active' : ''"
        v-for="(slide, index) in data.slider"
        :key="slide.id"
      >
        <img :src="slide.image_path" alt="Slide Img" />
        <div class="carousel-caption d-block">
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <h3 class="mb-4">{{ slide.title }}</h3>
            <p class="text-justify text-md-center" v-html="slide.body"></p>
          </div>
        </div>
      </div>

        <a class="carousel-control-prev" href="#home_slider" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#home_slider" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      <!-- START:: SLIDE CONTENT -->

      <!-- START:: SLIDER CURVE -->
      <div class="slider-curve">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <!-- END:: SLIDER CURVE -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
};
</script>

<style lang="scss" scoped>
// START:: IMPORT MAIN FILE
@import "../../assets/sass/main.scss";
// END:: IMPORT MAIN FILE

.carousel {
  .carousel-inner {
    min-height: 600px;
    max-height: 600px;
    .carousel-item {
      min-height: 600px;
      max-height: 600px;
      position: relative;
      img {
        width: 100%;
        min-height: 600px;
        max-height: 600px;
        object-fit: cover;
      }
      .carousel-caption {
        h3 {
          font-size: 2.5rem;
          font-weight: 600;
          color: $secondryColor;
          text-shadow: 0 0 10px $secondryColor;
        }
        p {
          width: 70%;
          color: $textColor;
          font-size: 20px;
        }
        position: absolute;
        top: 0;
        left: 0;
        display: flex !important;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        .btns-box {
          display: flex;
          flex-wrap: wrap;
          margin-top: 15px;
          a {
            text-decoration: none;
            padding: 10px 20px;
            margin: 0 10px;
            border: 2px solid $mainColor;
            color: $mainColor;
            font-weight: bold;
            @include borderRadius(25px);
            @include transitioning();
            &:first-child {
              background-color: $mainColor;
              color: #fff;
              &:hover {
                background-color: #fff;
                color: $mainColor;
              }
            }
            &:last-child {
              &:hover {
                background-color: $mainColor;
                color: #fff;
              }
            }
          }
        }
      }
    }

    .slider-curve {
      position: absolute;
      bottom: -9px;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
      z-index: 9999;
      path {
        fill: #fff;
      }
    }

    @media (max-width: 900px) {
      .slider-curve {
        bottom: 0;
      }
    }
  }
}
</style>
