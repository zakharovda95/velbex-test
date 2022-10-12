import { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'TablePage',
    component: () => import('@/views/TablePage.vue'),
  },
];
