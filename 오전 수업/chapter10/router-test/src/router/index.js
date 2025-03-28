import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Members from '@/views/Members.vue';
import Videos from '@/views/Videos.vue';
import MemberInfo from '@/views/MemberInfo.vue';
import Test from '@/views/Test.vue';
import TestChild from '@/views/TestChild.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/members', component: Members },
    //명명된 라우트
    { path: '/videos', component: Videos, name: 'vi' },

    // 동적 라우트
    { path: '/members/:id', component: MemberInfo },
    { path: '/test', component: Test },

    // 중첩 라우트
    {
      path: '/test',
      component: Test,
      children: [
        {
          path: ':num',
          component: TestChild,
          name: 'test/num',
        },
      ],
    },
  ],
});

export default router;
