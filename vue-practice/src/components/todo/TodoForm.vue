<script setup lang="ts">
import { ref, useId } from 'vue';

const inputId = useId();
const text = ref('');

const emit = defineEmits<{ add: [text: string] }>();

const handleAddTodo = () => {
  if (text.value.trim()) {
    emit('add', text.value);
  }

  text.value = '';
};
</script>

<template>
  <form class="todo-form" @submit.prevent="handleAddTodo">
    <label :for="inputId">
      할일:
      <input type="text" name="" :id="inputId" v-model="text" />
    </label>
    <button type="submit" class="add-btn">추가</button>
  </form>
</template>

<style scoped>
.todo-form {
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
}

.add-btn {
  padding: 5px 10px;
  color: #fff;
  background-color: #a2a2a2;
}
</style>
