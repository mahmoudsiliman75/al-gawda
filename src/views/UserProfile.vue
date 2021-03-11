<template>
  <div class="profile">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <!-- START:: INCLUDING USER MENU -->
        <user-menu></user-menu>
        <!-- END:: INCLUDING USER MENU -->

        <div class="col-11 content_wraper">
          <div class="header_wraper">
            <h2 class="sec-header"> {{ $t('my_courses') }} </h2>
          </div>

          <table class="table text-center">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col"> {{ $t('course_img') }} </th>
                <th scope="col"> {{ $t('course_name') }} </th>
                <th scope="col"> {{ $t('course_link') }} </th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for=" (course, index) in myCourses "
                :key="course.id"
              >
                <th scope="row"> {{ index+1 }} </th>
                <td>
                  <img :src="course.image_path">
                </td>
                <td> {{ course.name }} </td>
                <td>
                  <router-link 
                    :to="{ name: 'CourseContent', params: { id: course.category_id, course_id: course.id } }"
                  > {{ $t('go_to_course') }} </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import UserMenu from "../components/layouts/UserProfileMenu";

export default {
  components: {
    "user-menu": UserMenu,
  },

  data() {
    return {
      myCourses: [],
    }
  },

  methods: {
    getCoursesData() {
      var theToken = localStorage.getItem('user_token');
      axios.get('http://jawda-academy.com/api/clients/courses', {
        headers:{
          "x-api-key": theToken,
        }
      })
      .then( res => this.myCourses = res.data.data );
    },
  },

  mounted() {
    this.getCoursesData();
  }
}
</script>

<style lang="scss" scoped>
// START:: IMPORTING MAIN FILE
@import "../assets/sass/main.scss";
// END:: IMPORTING MAIN FILE

.profile {
  .content_wraper {
    padding: $sectionPadding;
    min-height: 70vh;
    .header_wraper {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    table {
      td, 
      th {
      img {
        min-width: 100px;
        max-width: 100px;
        min-height: 80px;
        max-height: 80px;
        }
        a {
          color: $secondryColor;
          text-decoration: none;
        }
      }

      td {
        color: $mainColor;
        font-weight: 600;
      }

    }
  }
}
</style>