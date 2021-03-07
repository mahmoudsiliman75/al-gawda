<template>
  <div class="cat-content">
    <div class="container d-flex flex-column align-items-center justify-content-center">
      <h2 class="sec-header">{{ catContent.name }}</h2>
      <div class="row justify-content-center">
        <!-- <div class="col-4" v-for="course in catContent.courses" :key="course.id">
          <h2> {{course.id}} </h2>
          <h2> {{course.name}} </h2>
        </div> -->

        <!-- START:: CARD MARKUP -->
        <div
          class="col-12 col-md-4 px-2 mb-3"
          v-for="course in catContent.courses"
          :key="course.id"
        >
          <router-link
            :to="{ name: 'CourseContent', params: { course_id: course.id } }"
          >
            <div class="card" :class="course.status">
              <img :src="course.imgSrc" class="card-img-top" alt="Course Img" />
              <div class="card-body">
                <h4 class="card-title">{{ course.name }}</h4>
                <p class="instructor mb-1">{{ course.instructor }}</p>

                <!-- START:: THE RATING -->
                <rating-stars :rate="course.rate"></rating-stars>
                <!-- END:: THE RATING -->

                <div class="d-flex justify-content-between">
                  <span class="badge" :class="course.status">{{
                    course.status
                  }}</span>

                  <div class="price-box">
                    <span
                      class="price mx-2"
                      :class="
                        parseInt(course.saleAmount) > 0 ? 'sale-price' : ''
                      "
                    >
                      {{ course.price }}
                    </span>
                    <span class="mx-2" v-if="parseInt(course.saleAmount) > 0">
                      {{ calcSale(course.price, course.saleAmount) }}$
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
  </div>
</template>

<script>
import RatingStars from "./ui/RatingStars.vue";

export default {
  components: {
    "rating-stars": RatingStars,
  },

  data() {
    return {
      categoryId: this.$route.params.id
    };
  },

  provide() {
    return {
      catId: this.categoryId
    };
  },

  computed: {
    catContent() {
      return this.$store.state.coursesCategories.find(
        category => category.id == this.categoryId
      );
    },

    categoryCourses() {
      return this.$store.state.coursesCategories;
    }
  },

  methods: {
    calcSale(price, discount) {
      return parseInt(price) - (parseInt(price) * parseInt(discount)) / 100;
    }
  }
};
</script>

<style lang="scss" scoped>
// START:: INCLUDING MAIN FILE
@import "../assets/sass/main.scss";
// END:: INCLUDING MAIN FILE

.cat-content {
  min-height: 80vh;
  padding: $sectionPadding;
  padding-bottom: 50px;

  a {
    text-decoration: none;
    color: $darkColor;
    .card {
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
</style>
