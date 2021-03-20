<template>
  <div dir="ltr">
    <!-- START:: PRELOADER COMPONENT -->
    <pre-loader></pre-loader>
    <!-- END:: PRELOADER COMPONENT -->

    <!-- START:: HEADER PIC -->
    <div class="header-pic">
      <img :src="singleCourseData.image_path" alt="Course Image" />
      <div class="course-demo">
        <iframe
          class="main-video"
          :src="singleCourseData.video_embeded"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <!-- END:: HEADER PIC -->

    <div
      class="course-content d-flex flex-column align-items-center justify-content-center"
    >
      <h2 class="sec-header">
        {{ singleCourseData.name }}
        <span class="badge" :class="singleCourseData.badges">
          {{ singleCourseData.badges }}
        </span>
      </h2>
      <div class="container">
        <div class="row">
          <div class="course-details col-12">
            <h3 
              v-if="singleCourseData.instructor.name != null"
            >
              <span> By: </span>
              <router-link
                :to="{
                  name: 'InstructorProfile',
                  params: { instructor_id: singleCourseData.instructor.id },
                }"
              >
                {{ singleCourseData.instructor.name }}
              </router-link>

            </h3>
            <!-- <h4 class="lead">{{ singleCourseData.desc }}</h4> -->
            <h5>
              <span> Price: </span>
              <span
                class="price mx-2"
                :class="
                  parseInt(singleCourseData.discount) > 0 ? 'sale-price' : ''
                "
              >
                {{ singleCourseData.price }} KWD
              </span>
              <span
                class="price mx-2"
                v-if="parseInt(singleCourseData.discount) > 0"
              >
                {{
                  calcSale(singleCourseData.price, singleCourseData.discount)
                }}
                KWD
              </span>
            </h5>

            <!-- START:: THE RATING -->
            <rating-stars :rate="singleCourseData.rate"></rating-stars>
            <!-- START:: THE RATING -->
          </div>

          <div
            class="accordion col-12"
            id="accordionExample"
            v-if="singleCourseData.paymentStat == 'paid'"
          >
            <div class="card">
              <div
                v-for="section in singleCourseData.sections"
                :key="section.id"
              >
                <div class="card-header" id="headingOne">
                  <h4 class="mb-0">
                    <button
                      class="btn-link btn-block text-left"
                      type="button"
                      data-toggle="collapse"
                      :data-target="'#sec' + section.id"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <icon
                        name="play"
                        color="#9B7C29"
                        size="20px"
                        class="mx-2"
                      />
                      {{ section.name }}
                    </button>
                  </h4>
                </div>

                <div
                  :id="'sec' + section.id"
                  class="collapse"
                  aria-labelledby="headingOne"
                >
                  <div class="card-body">
                    <ul class="list-unstyled">
                      <li
                        v-for="lesson in section.lessons"
                        :key="lesson.id"
                        @click="
                          sweetAlert(
                            $t('preven_message'),
                            $t('android_download'),
                            singleCourseData.download.google_play,
                            $t('ios_download'),
                            singleCourseData.download.app_store,
                            $t('okay'),
                          )
                        "
                      >
                        <h4>{{ lesson.name }}</h4>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="enroll-btn my-3">
              <button @click="addToCart">{{ $t("add_to_cart") }}</button>
            </div>
          </div>

          <div
            class="accordion col-12"
            id="accordionExample"
            v-if="singleCourseData.paymentStat == 'free'"
          >
            <div class="card">
              <div
                v-for="section in singleCourseData.sections"
                :key="section.id"
              >
                <div class="card-header" id="headingOne">
                  <h4 class="mb-0">
                    <button
                      class="btn-link btn-block text-left"
                      type="button"
                      data-toggle="collapse"
                      :data-target="'#sec' + section.id"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <icon
                        name="play"
                        color="#9B7C29"
                        size="20px"
                        class="mx-2"
                      />
                      {{ section.name }}
                    </button>
                  </h4>
                </div>

                <div
                  :id="'sec' + section.id"
                  class="collapse"
                  aria-labelledby="headingOne"
                >
                  <div class="card-body">
                    <ul class="list-unstyled">
                      <li v-for="video in section.lessons" :key="video.id">
                        <h4
                          :id="'videos-' + video.id"
                          @click="
                            changeVideoSrc(video.url, 'videos-' + video.id)
                          "
                        >
                          {{ video.name }}
                        </h4>
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
import axios from "axios";
import PreLoader from "../components/ui/PreLoader.vue";
import RatingStars from "./ui/RatingStars.vue";

export default {
  components: {
    "pre-loader": PreLoader,
    RatingStars
  },

  data() {
    return {
      wantToWatsh: false,
      theCatId: this.$route.params.id,
      theCourse: this.$route.params.course_id,
      singleCourseData: {}
    };
  },

  methods: {
    setSwalWidth() {
      document.querySelector('.swal-modal').style.width = 'auto';
    },

    sweetAlert(message, anroidBtnText, anroidDownloadLink, iosBtnText, iosDownloadLink, cancleBtnText) {
      this.$swal({
        title: message,
        text: "",
        icon: "warning",
        customClass: 'swal-wide',
        buttons: {
          cancel: cancleBtnText,
          catch: {
            text: anroidBtnText,
            value: "android download",
          },
          catch2: {
            text: iosBtnText,
            value: "ios download",
          },
        },
      })
        .then((value) => {
          switch (value) {
            case "android download":
              window.location.href = anroidDownloadLink;
              break;

            case "ios download":
              window.location.href = iosDownloadLink;
              break;
          }
      });
      this.setSwalWidth();
    },

    getCourseData() {
      axios
        .get(this.$store.state.api_link+"api/courses/" + this.theCourse,{
          headers: {
            lang: localStorage.getItem('site_locale')
          }
        })
        .then(res => (this.singleCourseData = res.data.data));
    },

    addToCart() {
      var localStorageArr = JSON.parse(localStorage.getItem("cart"));
      localStorageArr.push(this.singleCourseData);
      localStorage.setItem("cart", JSON.stringify(localStorageArr));
      this.$store.state.cart = localStorageArr;
    },

    changeVideoSrc(url, btnId) {
      this.deleteActiveClass("active-video");

      document.querySelector("#" + btnId).classList.add("active-video");

      document.querySelector(".main-video").setAttribute("src", url);
      setTimeout(() => {
        document.querySelector(".header-pic").scrollIntoView();
      }, 0);
    },

    deleteActiveClass(className) {
      var lights = document.getElementsByClassName("." + className);
      while (lights.length) lights[0].classList.remove("." + className);
    },

    watchVideo() {
      this.wantToWatsh = !this.wantToWatsh;
    },

    calcSale(price, discount) {
      return parseInt(price) - (parseInt(price) * parseInt(discount)) / 100;
    }
  },

  mounted() {
    this.getCourseData();
  }
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
  .sec-header {
    span {
      color: $secondryColor;
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
      a {
        text-decoration: none;
        color: $mainColor;
      }
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
              a {
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
