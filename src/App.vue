<template>
  <nav-bar></nav-bar>
  <router-view />
  <the-footer></the-footer>

</template>

<script>
import NavBar from "./components/layouts/NavBar.vue";
import TheFooter from "./components/layouts/TheFooter";

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

  created() {
    const Id = this.$route.params.id;

    console.log(Id);

    const selectedTab = this.tabInfo.find( tab => tab.tabId == Id );

    console.log(selectedTab)

    // const courses = selectedTab.courseDetails;
    // console.log (courses);
  },

  components: {
    "nav-bar": NavBar,
    "the-footer": TheFooter,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
