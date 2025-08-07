<script setup lang="ts">
// props를 받는 방법
defineProps<{ msg: string }>();
</script>

<template>
  <div>{{ msg }}</div>
</template>

<style scoped></style>
