<!-- 
 vue에서의 리스트 렌더링은 v-for 디렉티브를 사용하여 만들 수 있다.
 vue는 내부적으로 proxy를 사용하기 때문에 immutable 데이터를 감지하지 않는다.
-->

<script setup lang="ts">
import { ref } from 'vue';

let id = 0;

interface Todo {
  id: number;
  text: string;
}

const text = ref<string>('');

const todos = ref<Todo[]>([
  { id: id++, text: 'HTML 배우기' },
  { id: id++, text: 'CSS 배우기' },
  { id: id++, text: 'JS 배우기' },
  { id: id++, text: 'Vue 배우기' },
]);

const onDelete = (id: number) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
};

const onAdd = () => {
  if (text.value.trim()) {
    todos.value = [...todos.value, { id: id++, text: text.value.trim() }];
  }

  text.value = '';
};
</script>

<template>
  <form @submit.prevent="onAdd">
    <input type="text" v-model="text" />
    <button type="submit">추가</button>
  </form>

  <div v-if="todos.length > 0">총 할일 : {{ todos.length }} 개</div>
  <div v-else>할일 끝</div>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button type="button" @click="() => onDelete(todo.id)">❌</button>
    </li>
  </ul>
</template>

<style scoped>
ul {
  li {
    margin-bottom: 1rem;
  }
}

button {
  margin-left: 2rem;
}
</style>
