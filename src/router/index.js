import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AboutUs from "../views/AboutUs.vue";
import Courses from "../views/Courses.vue";
import OurTeam from "../views/OurTeam.vue";
import Blog from "../views/CenterBlog.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "AboutUs",
    component: AboutUs
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses,
  },
  {
    path: "/team",
    name: "OurTeam",
    component: OurTeam,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
