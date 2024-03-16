import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachRegistation from './pages/coaches/CoachRegistration.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactCoach }, // /coaches/c1/contact
      ],
    },
    { path: '/register', component: CoachRegistation },
    { path: '/requests', component: RequestsReceived },
    { path: '/auth', component: UserAuth },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
