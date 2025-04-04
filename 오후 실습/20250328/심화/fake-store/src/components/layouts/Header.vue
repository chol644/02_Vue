<!-- 헤더 컴포넌트 -->
<template>
  <div class="container">
    <div class="mt-4 p-5 bg-primary text-white jumbotron header">
      <h1>Fake Store</h1>
      <p>Vue3 연습 사이트</p>
    </div>
    <div>
      <NavBar />
    </div>

    <div class="d-flex my-5">
      <div class="flex-grow-1"></div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
  components: {
    NavBar,
    // NavBar를 components에 등록
  },
};
</script>
