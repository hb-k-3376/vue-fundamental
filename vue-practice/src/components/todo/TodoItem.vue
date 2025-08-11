<script setup lang="ts">
import { useId } from 'vue';

const props = defineProps<{ todo: TodoType }>();

const emit = defineEmits<{ toggle: [id: number]; delete: [id: number] }>();

const checkboxId = useId();

const toggleTodo = () => {
  emit('toggle', props.todo.id);
};

const deleteTodo = () => {
  emit('delete', props.todo.id);
};
</script>

<template>
  <li class="todo-item" :class="{ completed: todo.completed }">
    <input
      :id="checkboxId"
      type="checkbox"
      class="todo-checkbox"
      :checked="todo.completed"
      @change="toggleTodo"
    />
    <label :for="checkboxId">
      <span class="todo-text">{{ todo.text }}</span>
    </label>

    <button type="button" class="delete-btn" @click="deleteTodo">삭제</button>
  </li>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #000;
  transition: all 0.2s;

  > label {
    margin: 0 1rem;
    flex: 1;
  }
}

.todo-item:hover {
  background-color: #000;
  color: #fff;
}
.todo-item.completed {
  background-color: #8d8b8b;
  color: #fff;
}
.todo-item.completed .todo-text {
  text-decoration: line-through;
}

.delete-btn {
  padding: 5px 10px;
  background-color: rgb(255, 54, 54);
  font-size: 14px;
  color: #fff;

  &:hover {
    background-color: red;
  }
}
</style>
