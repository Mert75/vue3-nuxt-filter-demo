<script setup lang="ts">
import { PropType } from 'vue'

type Position = 'horizontal' | 'vertical'

const props = defineProps({
  position: {
    type: String as PropType<Position>,
    default: 'horizontal',
    required: false,
  },
})

const icons: Record<Position, string> = {
  horizontal: 'mdi:arrow-split-vertical',
  vertical: 'mdi:arrow-split-horizontal',
}

const getIcon = computed(() => icons[props.position])
</script>

<template>
  <div class="absolute top-1/2 right-0 transform -translate-y-1/2 group">
    <div class="bg-zinc-400/20 rounded-full w-9 h-9 flex items-center justify-center -mr-4 opacity-70 group-hover:opacity-100 group-hover:bg-zinc/30 active:bg-zinc-400/80 transition">
      <Icon
        :name="getIcon"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
