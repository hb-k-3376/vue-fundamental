/**
Composition API : Vue3

트리 쉐이킹, 가상 돔, 정적 트리 호이스팅(SSG), IE 지원 x

 */

import { defineStore } from 'pinia';
import { computed, reactive, toRefs } from 'vue';

export const useCounterComposition = defineStore('counter', () => {
  // const count = ref(0);
  // const name = ref('hyun');
  // const doubleCount = computed(() => count.value * 2);
  // const increment = () => {
  //   count.value++;
  // };
  // const decrement = () => {
  //   count.value--;
  // };
  // const reset = () => {
  //   count.value = 0;
  // };
  // return {
  //   count,
  //   name,
  //   doubleCount,
  //   increment,
  //   decrement,
  //   reset,
  // };

  // const store = reactive({
  //   count: 0,
  //   name: 'hyun',
  //   get doubleCount() {
  //     return this.count * 2;
  //   },
  // increment() {
  //   this.count++;
  // },
  // decrement() {
  //   this.count--;
  // },
  // reset() {
  //   this.count = 0;
  // },
  // });

  // return store;

  // 반응성 상태 끼리
  const state = reactive({
    count: 0,
    name: 'hyun',
  });

  // actions 끼리
  const actions = {
    increment() {
      state.count++;
    },
    decrement() {
      state.count--;
    },
    reset() {
      state.count = 0;
    },
  };

  // getter 까리
  const getters = {
    doubleCount: computed(() => state.count * 2),
  };

  return {
    ...toRefs(state), // 반응성 데이터는 구조를 분해해서 내보낼때 toRefs로 감싸서 내보낸다
    ...getters,
    ...actions,
  };
});
