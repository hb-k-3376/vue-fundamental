<!-- 

컴포넌트를 props를 통해서 부모로부터 값을 입력받을 수 있습니다.
defineProps를 사용해 전달받은 props의 타입을 정의할 수 있습니다.
props의 기본값이 필요한 경우 withDefaults를 사용해 기본값을 정의할 수 있습니다.

자식 컴포넌트에서 부모 컴포넌트로 데이터를 전달하기 위해선 defineEmit 함수를 사용할 수 있습니다.
defineEmit으로 정의된 이벤트의 값으로 전달하여 부모 컴포넌트가 해당 이벤트를 사용할 수 있습니다.

-->

<script setup lang="ts">
// 컴파일 타임 메크로

// const props = withDefaults(
//   defineProps<{ msg: string; onHandle: () => void; size?: string }>(),
//   { size: 'md' }
// );

const props = defineProps<{ msg: string }>();

// 방출할 이름을 정의
const emit = defineEmits(['response']);
// 정의한 이름을 key 값으로 value 설정
emit('response', '자식으로부터 전달 받은 데이터');
// 부모 컴포넌트에서 @"key" ( @response )로 값을 불러올 수 있다.

const handleClick = () => {
  emit('response', '클릭크');
};
</script>

<template>
  <div>{{ msg }}</div>
  <button type="button" @click="handleClick">클릭</button>
</template>

<style scoped></style>
