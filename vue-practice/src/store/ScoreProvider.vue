<script setup lang="ts">
import { provide, ref } from 'vue';
import { SCORE_KEY } from './score';

const score = ref(1);
const comment = ref('');

const updateScore = (v: number): void => {
  score.value = v;
};
const updateComment = (v: string): void => {
  console.log(v);
  comment.value = v;
};

provide(SCORE_KEY, { score, comment, updateComment, updateScore });
</script>

<template>
  <slot></slot>
</template>
