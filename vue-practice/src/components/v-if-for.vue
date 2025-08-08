<script setup lang="ts">
import { ref } from 'vue';

const weather = ref('');

const weatherOptions = ref([
  {
    value: 'sunny',
    emoji: '🌞',
    label: '맑음',
    icon: 'https://cdn-icons-png.flaticon.com/512/869/869869.png',
    message: '맑은 날씨 입니다. 산책 어떠세요?',
  },
  {
    value: 'cloudy',
    emoji: '🌥️',
    label: '흐림',
    icon: 'https://cdn-icons-png.flaticon.com/512/1163/1163624.png',
    message: '구름이 많네요, 비가 올까요?',
  },
  {
    value: 'rainy',
    emoji: '🌧️',
    label: '비',
    icon: 'https://cdn-icons-png.flaticon.com/512/1163/1163620.png',
    message: '비가 오고 있어요. 우산 챙기셨나요?',
  },
]);
</script>

<template>
  <div>
    <h2>오늘 날씨는 어떤가요?</h2>

    <select v-model="weather">
      <option value="">선택하세요</option>
      <option
        v-for="{ value, label, emoji } in weatherOptions"
        :value="value"
        :key="value"
      >
        {{ emoji }} {{ label }}
      </option>
    </select>

    <div
      v-for="option in weatherOptions"
      style="margin-top: 20px"
      :key="option.value"
    >
      <!-- <template />은 리액트의 <Fragment> -->
      <template v-if="weather === option.value">
        <img :src="option.icon" :alt="option.label" width="100" />
        <p>{{ option.message }}</p>
      </template>
    </div>
    <p v-if="weather === ''">날씨를 선택해주세요.</p>
  </div>
</template>

<style scoped></style>
