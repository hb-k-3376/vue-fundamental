<script setup lang="ts">
import { ref } from 'vue';
import ChildComp from './ChildComp.vue';

const message = ref('hello world');
const msgFromChild = ref('');

const handler = () => console.log('clicked');
</script>

<template>
  <!--  v-bind를 이용해서 props를 전달 할 수 있다. -->
  <!-- string을 전달할 때는 `로 string으로 변경 후 전달 -->
  <ChildComp :msg="message" @response="(msg) => (msgFromChild = msg)" />
  {{ msgFromChild }}
</template>

<style scoped></style>
