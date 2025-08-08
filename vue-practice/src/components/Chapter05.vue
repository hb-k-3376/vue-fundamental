<!-- 

조건부 표시 / 조건부 렌더링

v-if 조건부 렌더링
v-else
v-else-if
v-show 조건부 표시

-->

<script setup lang="ts">
import { ref } from 'vue';

const awesome = ref(true);
const type = ref('active');

const toggle = () => {
  awesome.value = !awesome.value;
};
</script>

<template>
  <button type="button" @click="toggle">토글 버튼</button>
  <h1 v-if="awesome">Programmers 친구들은 정말 대단해!</h1>
  <h1 v-else>너무 멋진 친구들이야!</h1>
</template>

<style scoped></style>
