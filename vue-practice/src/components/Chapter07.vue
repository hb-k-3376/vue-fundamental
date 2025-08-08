<!-- 
 vue에서의 리스트 렌더링은 v-for 디렉티브를 사용하여 만들 수 있다.
 vue는 내부적으로 proxy를 사용하기 때문에 immutable 데이터를 감지하지 않는다.

 vue에서 다른 반응형 데이터 소스를 기반으로 .value를 계산할 때 computed를 사용할 수 있다.
 computed는 결과를 캐시하고 의존성이 변경될 때 자동으로 업데이트 된다. 
 의존성 : computed 콜백함수에서 사용되는 ref 값들을 자동으로 인지하고 있음 ( 필요할 때만 업데이트 됨으로 성능 낭비가 없음 )

  - 계산된 결과를 여러곳에서 사용할 때
  - 무거운 연산 ( 정렬, 필터링 .. )
  - 반응형 데이터에 의존하는 계산

  react의 useMemo 훅과 비슷하다.
  useMemo를 남발하면 오히려 가독성이 떨어지고 의존성 배열 관리가 더 복잡하다.
  vue의 computed는 자동 추적이하 side Effect( 부수효과 )가 적다.

  vue는 기본 데이터는 ref, reactive로 관리를 하고 
  거의 대부분의 값들은 computed를 사용해서 관리한다.
  하나의 computed에 너무 많은 책임이 부여되면 또 이 compted를 쪼개서 사용한다.

-->

<script setup lang="ts">
import { computed, ref } from 'vue';

let id = 0;

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const text = ref<string>('');
const hideCompleted = ref(false);

const todos = ref<Todo[]>([
  { id: id++, text: 'HTML 배우기', done: false },
  { id: id++, text: 'CSS 배우기', done: false },
  { id: id++, text: 'JS 배우기', done: false },
  { id: id++, text: 'Vue 배우기', done: false },
]);

const onDelete = (id: number) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
};

const onAdd = () => {
  if (text.value.trim()) {
    todos.value = [
      ...todos.value,
      { id: id++, text: text.value.trim(), done: false },
    ];
  }

  text.value = '';
};

// 파생 상태 하지만 vue의 방식이 아님
// normal 파생 상태는 렌더링이 될 때 마다 실행된다.
// 호출되는 족족 실행이 된다.
const filteredTodos_ = () => {
  console.log('normal 파생 상태');
  return hideCompleted.value
    ? todos.value.filter((todo) => !todo.done)
    : todos.value;
};

// 계산된 파생 상태
// computed 파생 상태는 한번 실행되며 값이 변경되면 다시 계산을 한다.
// react의 memo 와 비슷하다.
const filteredTodos = computed(() => {
  console.log('computed 파생 상태');

  return hideCompleted.value
    ? todos.value.filter((todo) => !todo.done)
    : todos.value;
});
</script>

<template>
  <form @submit.prevent="onAdd">
    <input type="text" v-model="text" />
    <button type="submit">추가</button>
  </form>

  <div v-if="todos.length > 0">총 할일 : {{ filteredTodos.length }} 개</div>
  <div v-else>할일 끝</div>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" :id="`${todo.id}`" v-model="todo.done" />
      <label :for="`${todo.id}`">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </label>

      <button type="button" @click="() => onDelete(todo.id)">❌</button>
    </li>
  </ul>

  <button type="button" @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'show all' : 'hide completed' }}
  </button>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}

ul {
  li {
    margin-bottom: 1rem;
  }
}

button {
  margin-left: 2rem;
}
</style>
