<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  rows: {
    type: Number,
    default: 3,
  },
})

const emits = defineEmits(['update:modelValue'])

const value = computed({
  get: () => props.modelValue,
  set: (value: string) => emits('update:modelValue', value),
})
</script>

<template>
  <textarea
    v-model="value"
    :rows="props.rows"
    placeholder="Enter your message"
    class="input--outlined"
  />
</template>
