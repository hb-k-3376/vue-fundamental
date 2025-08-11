<script setup lang="ts">
import { computed, ref } from 'vue';
import TodoList from './TodoList.vue';
import TodoState from './TodoState.vue';
import TodoForm from './TodoForm.vue';
import TodoFilter from './TodoFilter.vue';

const todos = ref<TodoType[]>([
  {
    id: 1,
    text: 'Vue 학습하기',
    completed: false,
  },
  {
    id: 2,
    text: '컴포넌트 분리하기',
    completed: true,
  },
  {
    id: 3,
    text: 'emit 이해하기',
    completed: false,
  },
]);

const filtered = ref(false);

function handleDeleteTodo(id: number) {
  const index = todos.value.findIndex((t) => t.id === id);
  if (index > -1) {
    todos.value.splice(index, 1);
  }
}

function handleToggleTodo(id: number) {
  const todo = todos.value.find((t) => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
}

const completedCount = computed(
  () => todos.value.filter((t) => t.completed).length
);

const filteredTodo = computed(() =>
  filtered.value ? todos.value.filter((t) => !t.completed) : todos.value
);

const handleAddTodo = (text: string) => {
  todos.value = [
    ...todos.value,
    { id: +new Date(), text: text, completed: false },
  ];
};
</script>

<template>
  <div class="todo-app">
    <h1>할 일 목록</h1>

    <TodoForm @add="handleAddTodo" />

    <TodoState :total="filteredTodo.length" :completed="completedCount" />

    <!-- todo list 컴포넌트를 사용해서 todos 데이터 리스트 렌더링-->
    <TodoList
      :todos="filteredTodo"
      @toggle-todo="handleToggleTodo"
      @delete-todo="handleDeleteTodo"
    />

    <TodoFilter
      :active="filtered"
      :remainder="todos.length - completedCount"
      @toggle="filtered = !filtered"
    />
  </div>
</template>

<style scoped>
.todo-app {
  max-width: 600px;
  padding: 20px;
  border: 1px solid #000;
  border-radius: 1rem;
}
</style>
