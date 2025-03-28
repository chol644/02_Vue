import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import ElectronicsPage from '@/pages/ElectronicsPage.vue';
import JeweleryPage from '@/pages/JeweleryPage.vue';
import MensClothingPage from '@/pages/MensClothingPage.vue';
import WomensClothingPage from '@/pages/WomensClothingPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/electronics', name: 'electronics', component: ElectronicsPage },
    { path: '/jewelery', name: 'jewelery', component: JeweleryPage },
    {
      path: '/mensclothing',
      name: 'mensclothing',
      component: MensClothingPage,
    },
    {
      path: '/womenclothing',
      name: 'womenclothing',
      component: WomensClothingPage,
    },
  ],
});

export default {
  title: 'Fake Store', // 메인타이틀
  subtitle: 'Vue3 연습사이트', // 서브타이틀
  menus: [
    // 메인메뉴구성정보
    {
      title: '가전',
      url: '/electronics',
      icon: 'fa-solid fa-tv',
      backgroundImage: '',
    },
    {
      title: '주얼리',
      url: '/jewelery',
      icon: 'fa-solid fa-gem',
    },
    {
      title: '남성의류',
      url: '/mensclothing',
      icon: 'fa-solid fa-user-tie',
    },
    {
      title: '여성의류',
      url: '/womenclothing',
      icon: 'fa-solid fa-person-dress',
    },
  ],
};
