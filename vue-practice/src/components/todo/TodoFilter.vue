<script setup lang="ts">
const props = defineProps<{
  active: boolean;
  remainder: number;
}>();

const emit = defineEmits<{ (e: 'toggle'): void }>();
</script>

<template>
  <span>{{ remainder }}개</span>
  <button type="button" @click="emit('toggle')">
    {{ props.active ? '전체 보기' : '남은 항목 보기' }}
  </button>
</template>

<style scoped></style>
