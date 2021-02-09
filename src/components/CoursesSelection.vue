<template>
  <div class="our-courses">
      <div class="container">
        <!-- START:: TABS -->
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">

          <li class="nav-item" role="presentation" v-for="(tab, index) in tabInfo" :key="tab.tadId">
            <a class="nav-link" :class="index == 0 ? 'active ' : ''" :id="tab.tabId" data-toggle="pill" :href="`${tab.tabHref}`" role="tab" :aria-controls="`${tab.tabAriaControls}`" aria-selected="true">
              {{tab.tabText}}
            </a>
          </li>

        </ul>
        <!-- END:: TABS -->
      </div>

      <!-- START:: TABS SHEET -->
      <div class="tab-content" id="pills-tabContent">
        <div v-for="(tab, index) in tabInfo" :key="tab.tadId" class="tab-pane fade active" :class="index == 0 ? 'show ' : ''" :id="`${tab.sheet.sheetId}`" :role="`${tab.sheet.sheetRole}`" :aria-labelledby="`${tab.sheet.sheetAriaLabelledby}`">
          <div class="container">
            <div class="row">

              <div class="col-12 col-md-4 px-2" v-for="course in tab.courseDetails" :key="course.courseId">
                <div class="card">
                  <img :src="course.courseImgSrc" class="card-img-top" alt="Course Img">
                  <div class="card-body">
                    <h4 class="card-title">{{course.courseTitle}}</h4>
                    <h6> {{course.instructor}} </h6>
                    <span class="badge badge-primary">{{course.status}}</span>
                    <p> {{course.coursePrice}} </p>
                  </div>
                </div>
              </div>

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
          tabText: "Course 1",
          sheet: {
            sheetId: "pills-course-1",
            sheetRole: "tabpane1",
            sheetAriaLabelledby: "pills-course-1-tab",
          },
          courseDetails: [
            {
              courseId: "1",
              status: "Sale",
              courseImgSrc: "http://placekitten.com/150/150",
              courseTitle: "Master java",
              instructor: "Eng. Mohamed Eid",
              coursePrice: "180$"
            },
            {
              courseId: "4",
              status: "Bestseller",
              courseImgSrc: "",
              courseTitle: "Master java",
              instructor: "Eng. Mohamed Eid",
              coursePrice: "180$"
            },
          ],
        },
        {
          tadId: "pills-course-2-tab",
          tabHref: "#pills-course-2",
          tabAriaControls: "pills-course-2",
          tabText: "Course 2",
          sheet: {
            courseId: "2",
            sheetId: "pills-course-2",
            sheetRole: "tabpane2",
            sheetAriaLabelledby: "pills-course-2-tab",
            
          },
          courseDetails: [
            {
              status: "Bestseller",
              courseImgSrc: "",
              courseTitle: "Master java",
              instructor: "Eng. Mohamed Eid",
              coursePrice: "180$"
            },
          ],
        },
        {
          tadId: "pills-course-3-tab",
          tabHref: "#pills-course-3",
          tabAriaControls: "pills-course-3",
          tabText: "Course 3",
          sheet: {
            sheetId: "pills-course-3",
            sheetRole: "tabpane3",
            sheetAriaLabelledby: "pills-course-3-tab",
          },
          courseDetails: [
            {
              courseId: "2",
              status: "Bestseller",
              courseImgSrc: "",
              courseTitle: "Master java",
              instructor: "Eng. Mohamed Eid",
              coursePrice: "180$"
            },
          ],
        },
      ],
    }
  }
}
</script>