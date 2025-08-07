<!-- 
디렉티브 v- 접두사로 시작하는 특별한 속성입니다.
디렉티브의 값은 컴포넌트에 상태에 접근할 수 있는 JS 표현식입니다. 
-->

<script setup lang="ts">
import { ref } from 'vue';

const titleClass = ref('title');

const toggle = () => {
  titleClass.value = titleClass.value === 'title' ? '' : 'title';
};
</script>

<template>
  <div>
    <h1 :class="titleClass" :id="titleClass">나는 빨강!</h1>
    <button type="button" @click="toggle">click</button>
  </div>
</template>

<style scoped>
.title {
  color: red;
}
</style>
