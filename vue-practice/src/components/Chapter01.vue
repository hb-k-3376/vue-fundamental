<!-- 
    ref: 
    원시 값  ( string, number, boolean )등을 반응성으로 만들기 위해 사용
    객체도 사용할 수 있음. .value로 접근해여한다.
    내부적으로 proxy를 사용하여 속성 접근을 감시한다.
    shallow copy

    reactive:
    객체 타입 ( Object, Array, Function )을 깊은 반응성으로 만들기 위한 방법
    내부적으로 proxy를 사용하여 속성 접근을 감시한다.
    deep copy

-->

<!-- setup은 내보내기 코드를 간소화 시킨 키워드 이다. -->
<script setup lang="ts">
import { reactive, ref } from 'vue';
// react의 state같은 문법
// 보통은 ref로는 원시값을 많이 사용한다.
// 객체도 물론 사용이 가능하다. <- 하지만 객체는 언랩핑이 불가능
const message = ref('hello world');
// reactive에는 원시 데이터를 넣지말고 참조 데이터만 넣자
// const messageObj = reactive([123]);
// const messageObj = reactive({
//   message: 'hello world',
// });
// script에서는 랩핑된 상태로 사용
// console.log(message.value);
// console.log(messageObj);
</script>

<template>
  <!-- template 에서는 언랩핑되어 바로 사용 가능 {{ message }} -->
  <h1>{{ message }}</h1>
  <!-- reactive는 언랩핑이 안됨 -->
  <!-- <h1>{{ messageObj.message }}</h1> -->
</template>

<style scoped></style>
