<script setup>
import { useCounterStore } from './stores/counter';
import { computed } from 'vue';

const store = useCounterStore();
const { increment } = store;
const count = computed(() => store.count);

increment();
console.log(store);
</script>

<template>
  {{ store.count }}/{{ store.doubleCount }}
  <br />
  {{ count }}
</template>
