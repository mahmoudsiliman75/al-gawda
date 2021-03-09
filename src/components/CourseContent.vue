<template>
  <div dir="ltr">
    <!-- START:: HEADER PIC -->
    <div class="header-pic">
      <img :src="courseData.imgSrc" alt="Course Image" />
      <div class="course-demo">
        <iframe
          class="main-video"
          src="https://www.youtube.com/embed/6sJPb5tIyt4"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <!-- END:: HEADER PIC -->

    <div
      class="course-content d-flex flex-column align-items-center justify-content-center"
    >
      <h2 class="sec-header">{{ courseData.name }}</h2>
      <div class="container">
        <div class="row">
          <div class="course-details col-12">
            <h3>
              <span> By: </span>
              {{ courseData.instructor }}
              <span class="badge" :class="courseData.status">
                {{ courseData.status }}
              </span>
            </h3>
            <h4 class="lead">{{ courseData.desc }}</h4>
            <h5>
              <span> Price: </span>
              <span
                class="price mx-2"
                :class="parseInt(courseData.saleAmount) > 0 ? 'sale-price' : ''"
              >
                {{ courseData.price }}
              </span>
              <span
                class="price mx-2"
                v-if="parseInt(courseData.saleAmount) > 0"
              >
                {{ calcSale(courseData.price, courseData.saleAmount) }}$
              </span>
            </h5>

            <!-- START:: THE RATING -->
            <rating-stars :rate="courseData.rate"></rating-stars>
            <!-- START:: THE RATING -->
          </div>

          <pop-up v-if="wantToWatsh" dir="ltr">
            <template #default>
              <diV class="d-flex justify-content-center my-4">
                <button class="close-popup mx-2" @click="watchVideo">
                  {{ $t('okay') }}
                </button>
                <a href="#" class="close-popup" @click="watchVideo">
                  {{ $t('download') }}
                </a>
              </diV>
            </template>
          </pop-up>

          <div class="accordion col-12" id="accordionExample" v-if=" courseData.paymentStat == 'paied' ">
            <div class="card">

              <div 
                v-for="section in courseData.videosSection"
                :key="section.id"
              >

                <div class="card-header" id="headingOne">
                  <h4 class="mb-0">
                    <button class="btn-link btn-block text-left" type="button" data-toggle="collapse" :data-target="'#'+section.id" aria-expanded="true" aria-controls="collapseOne">
                      <icon name="play" color="#9B7C29" size="20px" class="mx-2" />
                      {{ courseData.name }} {{ section.title }}
                    </button>
                  </h4>
                </div>

                <div :id="section.id" class="collapse" aria-labelledby="headingOne">
                  <div class="card-body">
                    <ul class="list-unstyled">
                      <li                 
                        v-for="video in section.videos"
                        :key="video.id" 
                        @click="watchVideo"
                      > 
                        {{ video.name }} 
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            <div class="enroll-btn my-3">
              <button @click="addToCart"> {{ $t('add_to_cart') }} </button>
            </div>
          </div>

          <div class="accordion col-12" id="accordionExample" v-if=" courseData.paymentStat == 'free' ">
            <div class="card">

              <div 
                v-for="section in courseData.videosSection"
                :key="section.id"
              >

                <div class="card-header" id="headingOne">
                  <h4 class="mb-0">
                    <button class="btn-link btn-block text-left" type="button" data-toggle="collapse" :data-target="'#'+section.id" aria-expanded="true" aria-controls="collapseOne">
                      <icon name="play" color="#9B7C29" size="20px" class="mx-2" />
                      {{ courseData.name }} {{ section.title }}
                    </button>
                  </h4>
                </div>

                <div :id="section.id" class="collapse" aria-labelledby="headingOne">
                  <div class="card-body">
                    <ul class="list-unstyled">
                      <li                 
                        v-for="video in section.videos"
                        :key="video.id" 
                      > 
                        <h4 :id="'videos-'+video.id" @click="changeVideoSrc(video.link,'videos-'+video.id )">{{ video.name }}</h4> 
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasePopUp from "../components/ui/BasePopUp.vue";
import RatingStars from './ui/RatingStars.vue';

export default {
  components: {
    "pop-up": BasePopUp,
    RatingStars
  },

  data() {
    return {
      wantToWatsh: false,
      theCatId: this.$route.params.id,
      theCourse: this.$route.params.course_id
    };
  },

  computed: {
    selectedCat() {
      return this.$store.state.coursesCategories.find(
        theCaat => theCaat.id == this.theCatId
      );
    },
    courseData() {
      return this.selectedCat.courses.find(
        singleCourse => singleCourse.id == this.theCourse
      );
    }
  },

  methods: {
    addToCart() {
      var localStorageArr = JSON.parse(localStorage.getItem('cart'));
      localStorageArr.push(this.courseData);
      localStorage.setItem('cart', JSON.stringify(localStorageArr));
      this.$store.state.cart = localStorageArr;
    },

    changeVideoSrc(url , btnId){
      
      this.deleteActiveClass("active-video");


      document.querySelector("#"+btnId).classList.add("active-video");
      

      document.querySelector(".main-video").setAttribute("src",url);
      setTimeout(() => {
        document.querySelector(".header-pic").scrollIntoView();
      }, 0);

    },

    deleteActiveClass(className){
      var lights = document.getElementsByClassName("."+className);
      while (lights.length)
          lights[0].classList.remove("."+className);
    },

    watchVideo() {
      this.wantToWatsh = !this.wantToWatsh;
    },

    calcSale(price, discount) {
      return parseInt(price) - (parseInt(price) * parseInt(discount)) / 100;
    }
  },
};
</script>

<style lang="scss" scoped>
// START:: IMPORTING MAIN FILE
@import "../assets/sass/main.scss";
// END:: IMPORTING MAIN FILE

.header-pic {
  background-size: cover;
  min-height: 350px;
  max-height: 350px;
  position: relative;
  img {
    width: 100%;
    min-height: 400px;
    max-height: 400px;
  }
  .course-demo {
    width: 85%;
    height: 450px;
    position: relative;
    bottom: 185px;
    left: 50%;
    transform: translateX(-50%);
    @include borderRadius(15px);
    iframe {
      width: 100%;
      height: 100%;
      @include borderRadius(15px);
    }
  }
}

.course-content {
  min-height: 80vh;
  margin-top: 300px;
  padding: $sectionPadding;
  .close-popup {
    border: 2px solid $mainColor;
    @include borderRadius(25px);
    background-color: transparent;
    color: $mainColor;
    font-weight: bold;
    padding: 10px 15px;
    @include transitioning();
    &:hover {
      text-decoration: none;
      color: #fff;
      background-color: $mainColor;
    }
  }

  .course-details {
    text-align: start;
    h3,
    h4,
    h5 {
      color: $mainColor;
      span {
        color: $secondryColor;
        &.price {
          color: $mainColor;
          &.sale-price {
            color: #888;
            text-decoration: line-through;
          }
        }
        &.badge {
          color: #fff;
          &.Recent {
            background-color: $secondryColor;
          }
          &.Bestseller {
            background-color: $bestSellerCourse;
          }
          &.Sale {
            background-color: $saleCourse;
          }
        }
      }
    }

    .rating {
      span {
        svg {
          margin: 5px;
          color: #ffbe0f;
        }
      }
    }
  }

  .accordion {
    .card {
      border: none;
      .card-header {
        padding: 25px 0;
        border: none;
        border-bottom: 1px solid $secondryColor;
        background-color: #ececec;
        h4 {
          button {
            text-decoration: none;
            border: none;
            background-color: transparent;
            color: $mainColor;
          }
        }
      }

      .collapse {
        .card-body {
          border: none;
          ul {
            li {
              a{
                text-decoration: none;
                color: #555;
              }
              button {
                border: none;
                background-color: transparent;
                color: #555;
                font-size: 20px;
              }
              color: #555;
              font-size: 20px;
              cursor: pointer;
            }
          }
        }
      }
    }

    .enroll-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        border: 2px solid $mainColor;
        @include borderRadius(25px);
        background-color: transparent;
        color: $mainColor;
        font-weight: bold;
        padding: 10px 15px;
        @include transitioning();
        &:hover {
          text-decoration: none;
          color: #fff;
          background-color: $mainColor;
        }
      }
    }
  }
}
</style>
