import { createWebHistory, createRouter } from "vue-router";
import main from "../pages/main.vue";
import one from "../pages/one.vue";
import two from "../pages/two.vue";
import three from "../pages/three.vue";
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
    path: '/2',
    component: two
  },
  {
    path: '/3',
    component: three
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