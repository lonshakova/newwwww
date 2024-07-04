import { createWebHistory, createRouter } from "vue-router";
import main from "../pages/main.vue";
import one from "../pages/one.vue";
import two_1 from "../pages/two_1.vue";
import two_2 from "../pages/two_2.vue";
import three_1 from "../pages/three_1.vue";
import three_2 from "../pages/three_2.vue";
import four from "../pages/four.vue";
import five from "../pages/five.vue";
import six from "../pages/six.vue";
import seven from "../pages/seven.vue";

const routes = [
  {
    path: '/',
    component: main
  },
  {
    path: '/1',
    component: one
  },
  {
    path: '/2_1',
    component: two_1
  },
  {
    path: '/2_2',
    component: two_2
  },
  {
    path: '/3_1',
    component: three_1
  },
  {
    path: '/3_2',
    component: three_2
  },
  {
    path: '/4',
    component: four
  },
  {
    path: '/5',
    component: five
  },
  {
    path: '/6',
    component: six
  },
  {
    path: '/7',
    component: seven
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;