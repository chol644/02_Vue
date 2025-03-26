<template>
  <div>
    <!-- cnt => App.vue에 있는 count -->
    <h1>자식의 자식 click count :{{ cnt }}</h1>
  </div>
  <button @click="increment">클릭 시 1 증가</button>
</template>

<script>
export default {
  name: 'Click Count',

  // inject로 제공된 정보 삽입하기
  inject: ['cnt', 'increment'],
};
</script>
