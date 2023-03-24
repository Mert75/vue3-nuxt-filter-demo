<script setup lang="ts">
import { Switch } from '@headlessui/vue'

const emit = defineEmits(['update:modelValue'])

const checked = ref(false)

watchEffect(() => {
  emit('update:modelValue', checked.value)
})
</script>

<template>
  <Switch
    v-model="checked"
    :class="checked ? 'bg-blue-600' : 'bg-gray-200 dark:bg-zinc-600'"
    class="relative inline-flex h-6 w-11 items-center rounded-full"
  >
    <span class="sr-only">Enable</span>
    <span
      :class="checked ? 'translate-x-6' : 'translate-x-1'"
      class="inline-block h-4 w-4 transform rounded-full bg-white transition"
    />
  </Switch>
</template>

<style scoped>

</style>
