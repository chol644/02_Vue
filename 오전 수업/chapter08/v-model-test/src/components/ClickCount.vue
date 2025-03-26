<template>
  <div>
    <!-- cnt => App.vue에 있는 count -->
    <h1>자식 click count :{{ cnt }}</h1>
  </div>

  <ChildClickCoiunt />
</template>

<script>
import ChildClickCoiunt from './ChildClickCount.vue';
export default {
  name: 'Click Count',

  // inject로 제공된 정보 삽입하기
  inject: ['cnt', 'increment'],
};
</script>
