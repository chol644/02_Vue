import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router;

// { path: '/', name: 'home', component: HomePage },
// { path: '/about', name: 'about', component: About },
// { path: '/todos', name: 'todos', component: TodoList },
// { path: '/todos/add', name: 'AddTodo', component: AddTodo },
// { path: '/todos/edit/:id', name: 'EditTodo', component: EditTodo },
// { path: '/???', name: 'notfound', component: NotFound },
