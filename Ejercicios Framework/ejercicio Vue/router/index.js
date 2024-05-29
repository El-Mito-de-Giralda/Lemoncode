// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import MemberDetail from '../views/MemberDetail.vue';

const routes = [
  // Otras rutas...
  {
    path: '/detail/:login',
    name: 'MemberDetail',
    component: MemberDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;