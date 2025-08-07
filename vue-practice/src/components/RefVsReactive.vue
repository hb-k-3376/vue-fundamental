<script setup lang="ts">
import { reactive, ref, watchEffect, watch } from 'vue';

const objRef = ref({ name: 'seon' });

const objReactive = reactive({ inner: { name: 'seon' } });

// ref의 변화 감지
watchEffect(() => {
  // console.log(objRef.value);
});
// reactive의 변화 감지
watchEffect(() => {
  // console.log(objReactive.inner);
});
// objRef가 변경됨을 감지하고 새로운 값을 Param으로 받는다.
watch(objRef, (newValue) => {
  console.log(objRef.value);
  console.log(objReactive.inner);
});

// 업데이트 함수
const updateObj = () => {
  const newObj = { name: 'hyun' };
  // objRef.value = { ...newObj };
  objReactive.inner = { ...newObj };
};
</script>

<template>
  <h2>반응성 테스트</h2>
  <div>
    <p>ref: {{ objRef }}</p>
    <p>reactive: {{ objReactive.inner }}</p>
    <button type="button" @click="updateObj">새 객체로 재할당!</button>
  </div>
</template>

<style scoped></style>
