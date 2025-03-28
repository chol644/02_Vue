<template>
  <div class="container">
    <div class="mt-4 p-5 bg-primary text-white jumbotron">
      <h1>Fake Store</h1>
      <p>Vue3 연습 사이트</p>
    </div>
    <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><i class="fa-solid fa-home"></i> Fake Store</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">가전</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">주얼리</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">남성의류</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">여성의류</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <h1 class="mt-5"><i class="fa-solid fa-list"></i> 글 목록</h1>
    <div class="d-flex my-5">
      <div class="flex-grow-1"></div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
export default {
  setup() {
    const state = reactive({ isNavShow: false });
    const navClass = computed(() =>
      state.isNavShow
        ? 'collapse navbar-collapse show'
        : 'collapse navbar-collapse'
    );
    const changeIsNavShow = () => {
      state.isNavShow = !state.isNavShow;
    };
    return { state, changeIsNavShow, navClass };
  },
};
</script>
