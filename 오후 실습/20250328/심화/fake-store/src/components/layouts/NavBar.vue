<template>
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
        @click="changeIsNavShow"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/electronics">가전</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/jewelery">쥬얼리</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/MensClothing"
              >남성의류</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/WomensClothing"
              >여성의류</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { reactive, computed } from 'vue';
export default {
  name: 'NavBar',
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
