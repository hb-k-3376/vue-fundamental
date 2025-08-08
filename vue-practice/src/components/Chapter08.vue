<!-- 
 
리액트는 useEffect 하나로 대부분을 처리한다. cleanup도 포함하여

vue는 목적에 따라서 watchEffect, watch, onMount를 사용할 수 도 있다.
상태 추적은 watchEffect, watch
DOM의 추적은 onMount, onUpdated

vue는 프레임 워크이기 떄문에 원만한 건 전부 처리해줌

vue는 성능과 개발 편의성 좋음
react는 에코 시스템이 vue보다 비교도 되지 않게 크다
-->

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { updateElementText } from '../utils/updateElementText';

const pElementRef = ref<HTMLParagraphElement | null>(null);

const isHTMLElement = (el: unknown): el is HTMLElement => {
  return el instanceof HTMLElement;
};

// p 태그를 감지할 수 없다
// console.log(pElementRef.value);
// 컴포넌트가 mount 된 이후의 시점에 p태그를 확인할 수 있다.
onMounted(() => {
  if (isHTMLElement(pElementRef.value)) {
    pElementRef.value.textContent = '마운트된거같은데?';
  }

  updateElementText(pElementRef, 'hola');
});
</script>

<template>
  <div>
    <p ref="pElementRef">헬로우 월드</p>
  </div>
</template>

<style scoped></style>
