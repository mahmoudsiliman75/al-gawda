<template>
  <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-ride="carousel">
    <div class="carousel-inner">

      <!-- START:: SLIDE CONTENT -->
      <div class="carousel-item d-flex justfy-content-center align-items-center" :class=" index == 0 ? 'active' : '' " v-for="(slide, index) in slides" :key="slide.id">
        <img :src="slide.imgUrl" alt="Slide Img">
        <div class="carousel-caption d-block">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <p class="text-justify text-md-center"> {{slide.upperDesc}} </p>
            <h2 class="mb-4"> {{slide.title}} </h2>
            <p class="text-justify text-md-center"> {{slide.desc}} </p>
            <div class="btns-box">
              <router-link to="/"> Get Started </router-link>
              <router-link to="/"> Courses </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- START:: SLIDE CONTENT -->

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          id: "1",
          imgUrl: "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          title: "Slide One Title",
          upperDesc: "Help Shape the Future of Education.",
          desc: "New Skills And Knowledge Can Spark A Lifetime Of Change. Algawda Training Center, has designed and delivered programs in education, health",
        },
        {
          id: "2",
          imgUrl: "https://images.pexels.com/photos/6517233/pexels-photo-6517233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          title: "Slide One Title",
          upperDesc: "Help Shape the Future of Education.",
          desc: "New Skills And Knowledge Can Spark A Lifetime Of Change. Algawda Training Center, has designed and delivered programs in education, health",
        },
        {
          id: "3",
          imgUrl: "https://images.pexels.com/photos/6517081/pexels-photo-6517081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          title: "Slide One Title",
          upperDesc: "Help Shape the Future of Education.",
          desc: "New Skills And Knowledge Can Spark A Lifetime Of Change. Algawda Training Center, has designed and delivered programs in education, health",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
// START:: IMPORT MAIN FILE
@import "../../assets/sass/main.scss";
// END:: IMPORT MAIN FILE

.carousel {
  .carousel-inner {
    min-height: 500px;
    max-height: 500px;
    .carousel-item {
      min-height: 500px;
      max-height: 500px;
      position: relative;
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
      .carousel-caption {
        h2 {
          font-size: 3.5rem;
          font-weight: 600;
          color: $mainColor;
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
        background-color: rgba(0, 0, 0, 0.4);
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
            @include borderRadius(25px);
            @include transitioning();
            &:first-child {
              background-color: $mainColor;
              color: #fff;
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
  }
}
</style>