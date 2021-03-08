import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "AboutUs",
    component: () =>
      import(/*webpackChunkName: 'about'*/ "../views/AboutUs.vue")
  },
  {
    path: "/courses_cats",
    name: "Courses",
    component: () =>
      import(
        /*webpackChunkName: 'coursesCats'*/ "../views/CoursesCategories.vue"
      )
  },
  {
    path: "/cat_content/:id",
    name: "CategoryContent",
    component: () =>
      import(
        /*webpackChunkName: 'cat_content'*/ "../components/CategoryContent.vue"
      )
  },
  {
    path: "/single_course/:id/:course_id",
    name: "CourseContent",
    component: () =>
      import(
        /*webpackChunkName: 'course_content'*/ "../components/CourseContent.vue"
      )
  },
  {
    path: "/team",
    name: "OurTeam",
    component: () =>
      import(/*webpackChunkName: 'ourTeam'*/ "../views/OurTeam.vue")
  },
  {
    path: "/team/:instructor_id",
    name: "InstructorProfile",
    component: () =>
      import(/*webpackChunkName: 'instructor'*/ "../components/InstructorProfile.vue")
  },
  {
    path: "/blog",
    name: "Blog",
    component: () =>
      import(/*webpackChunkName: 'blog'*/ "../views/CenterBlog.vue")
  },
  {
    path: "/article/:articleId",
    name: "BlogArticle",
    component: () =>
      import(/*webpackChunkName: 'article'*/ "../components/BlogArticle.vue")
  },
  {
    path: "/contact",
    name: "ContactUs",
    component: () =>
      import(/*webpackChunkName: 'contact'*/ "../components/ContactUs.vue")
  },
  {
    path: "/login",
    name: "LoginForm",
    component: () =>
      import(/*webpackChunkName: 'login'*/ "../views/LoginForm.vue")
  },
  {
    path: "/sign_up",
    name: "SignUpForm",
    component: () =>
      import(/*webpackChunkName: 'signUp'*/ "../views/SignUpForm.vue")
  },
  {
    path: "/reset",
    name: "ResetPasswordForm",
    component: () =>
      import(/*webpackChunkName: 'reset'*/ "../views/ResetPasswordForm.vue")
  },
  {
    path: "/cart",
    name: "CoursesCart",
    component: () =>
      import(/*webpackChunkName: 'cart'*/ "../views/CoursesCart.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
