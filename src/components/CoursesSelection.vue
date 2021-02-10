<template>
  <div class="our-courses">
      <div class="container">
        <h2 class="sec-header"> 
          The Selection Of Our Courses
          <span></span>
          <span></span>
        </h2>
        <!-- START:: TABS -->
        <ul class="nav nav-pills d-flex justify-content-center mb-3" id="pills-tab" role="tablist">

          <li class="nav-item mx-3" role="presentation" v-for="(tab, index) in tabInfo" :key="tab.tadId">
            <a class="nav-link" :class="index == 0 ? 'active ' : ''" :id="tab.tabId" data-toggle="pill" :href="`${tab.tabHref}`" role="tab" :aria-controls="`${tab.tabAriaControls}`" aria-selected="true">
              {{tab.tabText}}
            </a>
          </li>

        </ul>
        <!-- END:: TABS -->
      </div>

      <!-- START:: TABS SHEET -->
      <div class="tab-content" id="pills-tabContent">
        <div v-for="(tab, index) in tabInfo" :key="tab.tadId" class="tab-pane fade" :class="index == 0 ? 'show active' : ''" :id="`${tab.sheet.sheetId}`" :role="`${tab.sheet.sheetRole}`" :aria-labelledby="`${tab.sheet.sheetAriaLabelledby}`">
          <div class="container">
            <div class="row justify-content-center">

              <!-- START:: CARD MARKUP -->
              <div class="col-12 col-md-4 px-2 mb-3" v-for="course in tab.courseDetails" :key="course.courseId">
                <router-link to="/">
                  <div class="card" :class="course.status">
                    <img :src="course.courseImgSrc" class="card-img-top" alt="Course Img">
                    <div class="card-body">
                      <h4 class="card-title"> {{course.courseTitle}} </h4>
                      <p class="instructor"> {{course.instructor}} </p>
                      <div class="d-flex justify-content-between">
                        <span class="badge" :class="course.status">{{course.status}}</span>

                        <div class="price-box">
                          <span class="price mx-2" :class=" parseInt(course.saleAmount) > 0 ? 'sale-price' : '' " > {{course.coursePrice}} </span>
                          <span class="mx-2" v-if="parseInt(course.saleAmount) > 0"> {{calcSale( course.coursePrice, course.saleAmount )}}$ </span>
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
      </div>
      <!-- END:: TABS SHEET -->
    </div>
</template>

<script>
export default {
  data() {
    return{
      tabInfo: [
        {
          tadId: "pills-course-1-tab",
          tabHref: "#pills-course-1",
          tabAriaControls: "pills-course-1",
          tabText: "Java",
          sheet: {
            sheetId: "pills-course-1",
            sheetRole: "tabpane1",
            sheetAriaLabelledby: "pills-course-1-tab",
          },
          courseDetails: [
            {
              courseId: "1",
              categoryUrl: "",
              status: "Sale",
              saleAmount: "10",
              courseImgSrc: "https://www.anbilarabi.com/wp-content/uploads/2018/03/Java-Logo.jpg",
              courseTitle: "Learn Java",
              instructor: "Eng. Mohamed Eid",
              coursePrice: "90$"
            },
            {
              courseId: "4",
              categoryUrl: "",
              status: "Bestseller",
              saleAmount: "0",
              courseImgSrc: "https://gorillalogic.com/wp-content/uploads/2018/02/Java-9-Modules-1024x640.gif",
              courseTitle: "Master Java",
              instructor: "Eng. Mohamed Eid",
              coursePrice: "200$"
            },
          ],
        },

        {
          tadId: "pills-course-2-tab",
          tabHref: "#pills-course-2",
          tabAriaControls: "pills-course-2",
          tabText: "C",
          sheet: {
            sheetId: "pills-course-2",
            sheetRole: "tabpane2",
            sheetAriaLabelledby: "pills-course-2-tab",
            
          },
          courseDetails: [
            {
              courseId: "1",
              categoryUrl: "",
              status: "Recent",
              saleAmount: "0",
              courseImgSrc: "https://nareshit.com/wp-content/uploads/2018/08/C-Programming-online-training-nareshit.jpg",
              courseTitle: "Master C Language",
              instructor: "Eng. Mohamed Eid",
              coursePrice: "180$"
            },
          ],
        },

        {
          tadId: "pills-course-3-tab",
          tabHref: "#pills-course-3",
          tabAriaControls: "pills-course-3",
          tabText: "C++",
          sheet: {
            sheetId: "pills-course-3",
            sheetRole: "tabpane3",
            sheetAriaLabelledby: "pills-course-3-tab",
          },
          courseDetails: [
            {
              courseId: "2",
              categoryUrl: "",
              status: "Bestseller",
              saleAmount: "0",
              courseImgSrc: "https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648",
              courseTitle: "The Full C++ Guide",
              instructor: "Eng. Mohamed Eid",
              coursePrice: "300$"
            },
          ],
        },

        {
          tadId: "pills-course-4-tab",
          tabHref: "#pills-course-4",
          tabAriaControls: "pills-course-4",
          tabText: "C#",
          sheet: {
            sheetId: "pills-course-4",
            sheetRole: "tabpane4",
            sheetAriaLabelledby: "pills-course-4-tab",
          },
          courseDetails: [
            {
              courseId: "5",
              categoryUrl: "",
              status: "Recent",
              saleAmount: "0",
              courseImgSrc: "https://res.cloudinary.com/dz5ppacuo/image/upload/v1466341001/csharp-min_buiizq.png",
              courseTitle: "Master C#",
              instructor: "Eng. Mohamed Eid",
              coursePrice: "70$"
            },
          ],
        },
      ],
    }
  },

  methods: {
    calcSale( price, discount ) {
      return parseInt(price) - (parseInt(price) * parseInt(discount) / 100);
    }
  }
}
</script>

<style lang="scss" scoped>
// START:: INCLUDING MAIN FILE
@import "../assets/sass/main.scss";
// END:: INCLUDING MAIN FILE

.our-courses {
  padding: $sectionPadding;
  .nav-pills {
    .nav-link {
      color: $mainColor;
      padding: 5px 10px;
      @include borderRadius(20px);
      &.active {
        color: #fff;
        background-color: $mainColor;
      }
    }
  } 

  .tab-content {
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