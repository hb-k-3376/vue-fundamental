<script setup lang="ts">
import Chapter from './components/Chapter.vue';
import ScoreProvider from './store/ScoreProvider.vue';
// import TodoApp from './components/todo/TodoApp.vue';
// import VIfFor from './components/v-if-for.vue';
// import VIf from './components/v-if.vue';
</script>

<template>
  <!-- <TodoApp /> -->
  <ScoreProvider>
    <Chapter />
  </ScoreProvider>

  <!-- <hr /> -->
  <!-- <v-if /> -->
  <!-- <v-if-for /> -->
</template>

<style scoped></style>
