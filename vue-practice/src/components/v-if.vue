<script setup lang="ts">
import { ref, watch } from 'vue';

const sunnyIcon = 'https://cdn-icons-png.flaticon.com/512/869/869869.png';
const cloudyIcon = 'https://cdn-icons-png.flaticon.com/512/1163/1163624.png';
const rainyIcon = 'https://cdn-icons-png.flaticon.com/512/1163/1163620.png';

/**
 * select의 선택에 따라 이미지가 조건부 렌더링이 될수 있도록
 * p 태그도 조건부 렌더링이 되도록
 */

const weather = ref('');
const weatherImage = ref('');

watch(weather, (weather) => {
  if (weather === 'sunny') {
    weatherImage.value = sunnyIcon;
    return;
  }

  if (weather === 'cloudy') {
    weatherImage.value = cloudyIcon;
    return;
  }
  if (weather === 'rainy') {
    weatherImage.value = rainyIcon;
    return;
  }
});
</script>

<template>
  <div>
    <h2>오늘 날씨는 어떤가요?</h2>

    <select v-model="weather">
      <option value="sunny">🌞맑음</option>
      <option value="cloudy">🌥️흐림</option>
      <option value="rainy">🌧️비</option>
    </select>

    <div style="margin-top: 20px">
      <!-- 이미지 렌더링 -->
      <img v-show="weatherImage" :src="weatherImage" alt="" width="100" />

      <p v-if="weather === 'sunny'">맑은 날씨 입니다. 산책 어떠세요?</p>
      <p v-else-if="weather === 'cloudy'">구름이 많네요, 비가 올까요?</p>
      <p v-else-if="weather === 'rainy'">비가 오고 있어요. 우산 챙기셨나요?</p>
      <p v-else="weather === ''">날씨를 선택해주세요!</p>
    </div>
  </div>
</template>

<style scoped></style>
