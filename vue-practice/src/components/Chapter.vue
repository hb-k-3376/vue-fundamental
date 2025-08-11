<script setup lang="ts">
import { inject } from 'vue';
import ChildComp from './ChildComp.vue';
import { SCORE_KEY, type ScoreContext } from '../store/score';

const ctx = inject(SCORE_KEY);

const { score, comment } = ctx as ScoreContext;
</script>

<template>
  <ChildComp />
  <p>score : {{ score }}</p>
  <p>comment : {{ comment }}</p>
</template>

<style scoped></style>
