<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
})
</script>

<template>
  <div>
    <div class="flex items-center gap-4">
      <label
        v-if="label"
        class="text-zinc-300 sr-only"
        :for="props.id"
      >
        {{ label }}
      </label>

      <div class="relative rounded-md shadow-sm flex-1 w-full">
        <input
          v-bind="$attrs"
          :id="props.id"
          v-model="value"
          class="input--outlined"
          :name="props.id"
        />
      </div>
    </div>
  </div>
</template>
