import Vue from "vue";
import Router from "vue-router";
import Profile from "./views/Profile.vue";
import Resume from "./views/Resume.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "profile",
      components: {
        default: Profile,
      }
    },
    {
      path: "/resume",
      name: "resume",
      components: {
        default: Resume,
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
