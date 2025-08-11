<script setup lang="ts">
import { ref } from 'vue';
import ChildComp from './ChildComp.vue';

const score = ref(1);
const comment = ref('');
</script>

<template>
  <ChildComp v-model:score="score" v-model:comment="comment"
    >hello world

    <template #extra> named slot </template>
  </ChildComp>
  <p>score : {{ score }}</p>
  <p>comment: {{ comment }}</p>
</template>

<style scoped></style>
