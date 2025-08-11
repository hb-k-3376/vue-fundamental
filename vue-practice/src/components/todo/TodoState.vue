<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ total: number; completed: number }>();

const remainder = computed(() => props.total - props.completed);
</script>

<template>
  <div class="states">
    전체 : {{ total }} | 완료 : {{ completed }} | 남은 할일 {{ remainder }}
  </div>
</template>

<style scoped>
.states {
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #a2a2a2;
  color: #fff;
  border-radius: 4px;
}
</style>
