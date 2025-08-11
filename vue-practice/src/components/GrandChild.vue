<script setup lang="ts">
import { inject } from 'vue';
import { SCORE_KEY, type ScoreContext } from '../store/score';

const ctx = inject(SCORE_KEY);

if (!ctx) {
  throw new Error('....');
}

const { score, comment, updateComment, updateScore } = ctx as ScoreContext;
</script>

<template>
  <h4>Grand Child component</h4>
  <input
    type="range"
    :value="score"
    @input="updateScore(+($event.target as HTMLInputElement).value)"
  />
  <textarea
    :value="comment"
    @change="updateComment(($event.target as HTMLTextAreaElement).value)"
  ></textarea>
</template>

<style scoped></style>
