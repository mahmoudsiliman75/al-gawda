<template>
    <div class="subcat_content">
    <!-- START:: PRELOADER COMPONENT -->
    <pre-loader></pre-loader>
    <!-- END:: PRELOADER COMPONENT -->

    <!-- START:: CATEGORY COURSES -->
    <div 
      class="container d-flex flex-column align-items-center justify-content-center subcat_courses"

    >
      <h2 class="sec-header"> {{ categoryContent.name }} </h2>
      <div class="row justify-content-center">

        <!-- START:: CARD MARKUP -->
        <div
          class="col-12 col-md-4 px-2 mb-3"
          v-for="course in categoryContent.courses"
          :key="course.id"
        >
          <router-link
            :to="{ name: 'CourseContent', params: { course_id: course.id } }"
          >
            <div class="card" :class="course.badges">
              <img :src="course.image_path" class="card-img-top" alt="Course Img" />
              <div class="card-body">
                <h4 class="card-title">{{ course.name }}</h4>
                <p class="instructor mb-1">{{ course.instructor.name }}</p>

                <!-- START:: THE RATING -->
                <rating-stars :rate="course.rate"></rating-stars>
                <!-- END:: THE RATING -->

                <div class="d-flex justify-content-between">
                  <span class="badge" :class="course.badges">{{
                    course.badges
                  }}</span>

                  <div class="price-box">
                    <span
                      class="price mx-2"
                      :class="
                        parseInt(course.saleAmount) > 0 ? 'sale-price' : ''
                      "
                    >
                      {{ course.price }} KWD
                    </span>
                    <span class="mx-2" v-if="parseInt(course.saleAmount) > 0">
                      {{ calcSale(course.price, course.saleAmount) }} KWD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <!-- END:: CARD MARKUP -->
      </div>
    </div>
    <!-- START:: CATEGORY COURSES -->
  </div>
</template>

<script>
import axios from 'axios';
import PreLoader from "../components/ui/PreLoader.vue";
import RatingStars from "./ui/RatingStars.vue";

export default {
  components: {
    "pre-loader": PreLoader,
    "rating-stars": RatingStars,
  },

  data() {
    return {
      subCategoryId: this.$route.params.sub_id,
      categoryContent: []
    };
  },

  provide() {
    return {
      catId: this.subCategoryId
    };
  },

  methods: {
    getCatContent() {
      axios.get(this.$store.state.api_link+'api/categories/'+this.subCategoryId, {
        headers: {
          lang: localStorage.getItem('site_locale')
        }
      })
      // .then( res => console.log(res.data.data.courses))
      .then( res => this.categoryContent = res.data.data )
    },

    calcSale(price, discount) {
      return parseInt(price) - (parseInt(price) * parseInt(discount)) / 100;
    },
  },

  mounted() {
    this.getCatContent();
  },
};
</script>

<style lang="scss" scoped>
// START:: INCLUDING MAIN FILE
@import "../assets/sass/main.scss";
// END:: INCLUDING MAIN FILE


.subcat_content {
  min-height: calc(100vh - (80px + 112px + 34px));
  padding: $sectionPadding;
  padding-bottom: 50px;

  .subcat_courses{
    a {
      text-decoration: none;
      color: $darkColor;
      .card {
        min-width: 200px;
        &.Bestseller {
          border-bottom: 2px solid $bestSellerCourse;
        }
        &.Sale {
          border-bottom: 2px solid $saleCourse;
        }
        &.Recent {
          border-bottom: 2px solid $secondryColor;
        }
        @include borderRadius(10px);

        img {
          border-radius: 10px 10px 0 0;
          width: 100%;
          min-height: 200px;
          max-height: 200px;
        }

        .card-body {
          text-align: start;
          h4 {
            font-weight: 600;
          }
          p,
          span {
            color: #666;
          }
          span {
            &.sale-price {
              text-decoration: line-through;
              color: #888;
            }
          }
          .rating {
            svg {
              margin: 3px;
              color: #ffbe0f;
            }
          }
          .badge {
            color: #fff;
            font-size: 15px;
            padding: 8px 15px;
            @include borderRadius(20px);
            &.Bestseller {
              background-color: $bestSellerCourse;
            }
            &.Sale {
              background-color: $saleCourse;
            }
            &.Recent {
              background-color: $secondryColor;
            }
          }
        }
      }
    }
  }

}
</style>
