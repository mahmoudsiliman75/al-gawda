<template>
  <div class="instructor_profile">
    <!-- START:: PRELOADER COMPONENT -->
    <pre-loader></pre-loader>
    <!-- END:: PRELOADER COMPONENT -->

    <div class="container">
      <div class="row justify-content-center">
        
        <!-- START:: PROFILE HEADER SECTION -->
        <div class="col-12 col-md-6">
          <div class="profile_header">
            <img :src="instructor.image_path">
            <h3> {{ instructor.name }} </h3>
            <h5> {{ instructor.role }} </h5>
            <p class="lead"> {{ instructor.bio }} </p>
          </div>
        </div>
        <!-- END:: PROFILE HEADER SECTION -->

        <!-- START:: PROFILE BODY SECTION -->
        <div class="col-8">
          <div class="profile_body">
            <div class="text-center">
              <h2 class="sec-header"> Courses </h2>
            </div>
            <div class="row">
              <div class="col-12 col-md-6 my-2"
                v-for="course in instructor.courses"
                :key="course.id"
              >
                <router-link 
                  :to="{ name: 'CourseContent', params: { course_id: course.id } }"
                >
                  <div class="card" :class="course.badges">
                    <img :src="course.image_path" class="card-img-top" alt="Course Img" />
                    <div class="card-body">
                      <h4 class="card-title">{{course.name}}</h4>
                      <p class="instructor mb-1">{{ instructor.name }}</p>

                      <!-- START:: THE RATING -->
                      <rating-starts :rate="course.rate"></rating-starts>
                      <!-- START:: THE RATING -->

                      <div class="d-flex justify-content-between">
                        <span class="badge" :class="course.badges">{{course.badges}}</span>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- END:: PROFILE BODY SECTION -->

      </div>
    </div>
  </div>
</template>

<script>
import PreLoader from "../components/ui/PreLoader.vue";
import RatingStars from "./ui/RatingStars.vue";
import axios from "axios";

export default {
  components: {
    "pre-loader": PreLoader,
    "rating-starts": RatingStars,
  },

  data() {
    return {
      // members: this.$store.state.members,
      instructor: {},
      theId: this.$route.params.instructor_id,
    };
  },

  methods: {
    getSingleInstructor() {
      axios.get("http://jawda-academy.com/api/instructors/"+this.theId )
      .then( res => this.instructor = res.data.data);
    }
  },

  mounted() {
    this.getSingleInstructor();
  }
}
</script>

<style lang="scss" scoped>
// START:: INPORTING MAIN FILE
@import "../assets/sass/main.scss";
// END:: INPORTING MAIN FILE

.instructor_profile {
  padding-top: 50px;
  padding-bottom: 50px;
  min-height: 80vh;
  .profile_header {
    text-align: center;
    img {
      min-width: 250px;
      max-width: 250px;
      min-height: 250px;
      max-height: 250px;
      border: 3px solid $mainColor;
      @include borderRadius(50%);
    }
    h3 {
      margin-top: 8px;
      font-weight: 600;
      color: $mainColor;
    }
    h5 {
      font-size: 16px;
      color: $secondryColor;
    }
  }

  .profile_body {
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
}
</style>