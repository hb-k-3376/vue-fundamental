<script setup lang="ts">
import { ref, watch } from 'vue';
import LoadingSpinner from './LoadingSpinner.vue';

const todoId = ref(1);
const todoData = ref();
const isLoading = ref(false);

async function fetchData() {
  isLoading.value = true;
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
    );

    todoData.value = await res.json();
  } catch (error) {
    // ... error handle
  } finally {
    isLoading.value = false;
  }
}

fetchData();

watch(todoId, fetchData);
// watch(todoId, fetchData, {
//   once: true,
// });
</script>

<template>
  <div class="container">
    <p>할 일 ID :</p>
    <button type="button" @click="todoId++">다음 할 일 가져오기</button>
    <p v-if="isLoading">로딩 중....</p>

    <hr />
    <!-- suspense라는 컴포넌트가 생겨서 이런 작업이 필요 없다. -->
    <!-- 
    
      <Suspense>
        <template></template>
      </Suspense>
     -->
    <LoadingSpinner v-if="isLoading" />
    <pre v-else>
      <code>{{ todoData }}</code>
    </pre>
  </div>
</template>

<style scoped>
.container {
  width: 500px;
  height: 500px;
}

pre {
  background-color: rgb(22, 22, 22);
  border-radius: 0.3rem;
  color: #fff;
}
</style>
