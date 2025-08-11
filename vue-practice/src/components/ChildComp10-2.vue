<script setup lang="ts">
defineProps<{ score: number; comment: string }>();

const emit = defineEmits<{
  (e: 'update:score', value: number): void;
  (e: 'update:comment', value: string): void;
}>();
</script>

<template>
  <div>
    <input
      type="range"
      min="0"
      max="5"
      :value="score"
      @input="emit('update:score', +($event.target as HTMLInputElement).value)"
    />

    <textarea
      :value="comment"
      @input="
        emit('update:comment', ($event.target as HTMLTextAreaElement).value)
      "
    ></textarea>
  </div>

  <div>
    <p>anoymity slot: <slot></slot></p>
    <p>named slot : <slot name="extra"></slot></p>
  </div>
</template>

<style scoped></style>
