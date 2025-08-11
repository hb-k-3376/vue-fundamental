<!-- 
  pinia는 vue에서 사용할 수 있는 전역 상태 관리 도구
  pinia는 options syntax와 composition syntax 2가지를 사용할 수 있다.

  store 구조 분해는 storeToRefs 함수가 필요하다.
  단, actions는 구조분해가 안됨

-->

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterComposition } from '../store/counter-composition';
// import { useCounterStore } from '../store/counter-option';

const counter = useCounterComposition();
const { count } = storeToRefs(useCounterComposition());
</script>

<template>
  <div>
    <h2>카운터 앱</h2>
    <button type:button @click="counter.increment">+</button>
    <div>{{ count }}</div>
    <button type="button" @click="counter.decrement">-</button>
    <hr />
    <button type="button" @click="counter.reset">Reset</button>
  </div>
</template>

<style scoped></style>
