<!-- 
 
v-bind, v-on을 함께 사용하면 폼 입력 요소에 양방향 데이터 바인딩이 가능하다.
vue는 브라우저의 Event를 그대로 사용한다.

v-model은 input값을 바인딩된 상태와 자동으로 동기화된다. 이벤트 헨들러 x

v-model은 텍스트만 아니라 체크박스, 라디오, 드롭다운등 다양한 type 전부 가능

-->

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('');

// const onChange = (e: Event) => {
//   const target = e.target as HTMLInputElement;
//   text.value = target.value;
// };
</script>

<template>
  <!-- <input type="text" @input="onChange" /> -->
  <!--  v-model을 사용하면 양방향 바인딩이 바로 적용 된다. -->
  <input type="text" v-model="text" />
  <p>{{ text }}</p>
</template>

<style scoped></style>
