<!-- 
v-bind 와 v-on을 합칠 수 있는 v-model을 사용해서 반응형 데이터를 렌더링
모든 항복을 ref로 관리할 경우 중복이 많아지고 관리가 불편해짐
이를 해결하기 위해 반응성 데이터를 객체로 만들어 관리한다. ( reactive )

반응성 데이터인 객체를 구조분해를 할 경우 반응성을 상실한다.
vue는 이때 사용할 toRef , toRefs로 객체를 감싸서 이를 해결할 수 있다.

-->

<script setup lang="ts">
import { reactive, ref, toRefs, watchEffect } from 'vue';

const form = reactive({
  name: '',
  agree: false,
  gender: 'male',
  language: '',
});

watchEffect(() => {
  // console.log(name.value);
  // console.log(isAccepted.value);
  // console.log(gender.value);
  // console.log(language.value);
});

// vue는 반응형 데이터를 구조분해 할당을 하게 되면 반응성일 상실
// toRef <- 단일 , toRefs <- 복수 를 사용하면 구조분해를 해도 반응성을 유지
const { agree, gender, language, name } = toRefs(form);
</script>

<template>
  <div>
    <label
      ><p>이름 : {{ name }}</p>
      <input type="text" v-model="name" placeholder="이름 입력" />
    </label>

    <hr />
    <label
      ><p>동의 여부 : {{ agree }}</p>
      <input type="checkbox" v-model="agree" />
    </label>

    <hr />
    <label
      ><span>남자</span>
      <input type="radio" name="gender" v-model="gender" value="male" />
    </label>
    <label
      ><span>여자</span>
      <input type="radio" name="gender" v-model="gender" value="female" />
    </label>
    <p>성별 : {{ gender }}</p>

    <hr />

    <select v-model="language">
      <option disabled value="">언어 선택</option>
      <option>javascript</option>
      <option>typescript</option>
      <option>react</option>
      <option>vue</option>
    </select>
    <p>선택 언어 : {{ language }}</p>
  </div>
</template>

<style scoped>
label {
  display: flex;
  gap: 2rem;
}
</style>
