import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "AboutUs",
    component: () => import(/*webpackChunkName: 'about'*/ '../views/AboutUs.vue'),
  },
  {
    path: "/courses_cats",
    name: "Courses",
    component: () => import(/*webpackChunkName: 'coursesCats'*/ '../views/CoursesCategories.vue'),
  },
  {
    path: "/team",
    name: "OurTeam",
    component: () => import(/*webpackChunkName: 'ourTeam'*/ '../views/OurTeam.vue'),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import(/*webpackChunkName: 'blog'*/ '../views/CenterBlog.vue'),
  },
  {
    path: "/contact",
    name: "ContactUs",
    component: () => import(/*webpackChunkName: 'contact'*/ '../components/ContactUs.vue'),
  },
  {
    path: "/cat_content/:id",
    name: "CategoryContent",
    component: () => import(/*webpackChunkName: 'cat_content'*/ '../components/CategoryContent.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
