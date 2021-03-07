<template>
  <div class="instructor_profile">
    <div class="container">
      <div class="row justify-content-center">
        
        <!-- START:: PROFILE HEADER SECTION -->
        <div class="col-12 col-md-6">
          <div class="profile_header">
            <img :src="selectedMember.imgUrl">
            <h3> {{ selectedMember.name }} </h3>
            <h5> {{ selectedMember.role }} </h5>
            <p class="lead"> {{ selectedMember.bio }} </p>
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
              <div class="col-12 col-md-6 my-2">
                <router-link to="/">
                  <div class="card Recent">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Fs_f3agjurjdvTra8sPiiNyjoq84_iL9kA&usqp=CAU" class="card-img-top" alt="Course Img" />
                    <div class="card-body">
                      <h4 class="card-title">Learn Java</h4>
                      <p class="instructor mb-1">Mohamed Eid</p>

                      <!-- START:: THE RATING -->
                      <rating-starts rate="2"></rating-starts>
                      <!-- START:: THE RATING -->

                      <div class="d-flex justify-content-between">
                        <span class="badge Recent">Recent</span>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>

              <div class="col-12 col-md-6 my-2">
                <router-link to="/">
                  <div class="card Bestseller">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Fs_f3agjurjdvTra8sPiiNyjoq84_iL9kA&usqp=CAU" class="card-img-top" alt="Course Img" />
                    <div class="card-body">
                      <h4 class="card-title">Master Java</h4>
                      <p class="instructor mb-1">Mohamed Eid</p>

                      <!-- START:: THE RATING -->
                      <rating-starts rate="4"></rating-starts>
                      <!-- START:: THE RATING -->

                      <div class="d-flex justify-content-between">
                        <span class="badge Bestseller">Bestseller</span>
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
import RatingStars from "./ui/RatingStars.vue";

export default {
  components: {
    "rating-starts": RatingStars,
  },

  data() {
    return {
      theId: this.$route.params.instructor_id,
      members: this.$store.state.members,
    }
  },

  computed: {
    selectedMember() {
      var theMember
      theMember = this.$store.state.members.find( 
        member => member.id == this.theId 
      );
      return theMember
    },
  },
}
</script>

<style lang="scss" scoped>
// START:: INPORTING MAIN FILE
@import "../assets/sass/main.scss";
// END:: INPORTING MAIN FILE

.instructor_profile {
  padding-top: 50px;
  padding-bottom: 50px;
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