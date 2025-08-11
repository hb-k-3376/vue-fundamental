/*
option 
*/

import { defineStore } from 'pinia';

// 1 단계 : 카운터 스토어 정의
export const useCounterStore = defineStore('counter', {
  // state 데이터 저장소 반드시 함수로 반환
  state: () => ({ count: 0 }),

  getters: {
    doubleCount: (state) => state.count * 2,
  },
  // 내가 정의하 고 싶은 함수
  // this를 통해서 값을 반환할때는 반환값 명시를 해주는 것이 좋다
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    radomCount() {
      this.count = Math.round(100 * Math.random());
    },
    reset() {
      this.count = 0;
    },
  },
});
