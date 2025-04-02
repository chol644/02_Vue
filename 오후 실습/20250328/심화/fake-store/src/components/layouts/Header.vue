<template>
  <div class="container">
    <div class="mt-4 p-5 bg-primary text-white jumbotron header">
      <h1>Fake Store</h1>
      <p>Vue3 연습 사이트</p>
    </div>
    <div>
      <NavBar />
      <router-view></router-view>
    </div>

    <div class="d-flex my-5">
      <div class="flex-grow-1"></div>
    </div>
  </div>
  <Footer />
</template>

<script>
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';

export default {
  components: {
    NavBar,
    Footer, // NavBar를 components에 등록
  },
};
</script>
