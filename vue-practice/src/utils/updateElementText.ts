import type { Ref } from 'vue';

export const updateElementText = (
  elRef: Ref<HTMLElement | null>,
  text: string
): void => {
  if (elRef.value) {
    elRef.value.textContent = text;
  } else {
    console.warn('element가 올바르지 않습니다.');
  }
};
