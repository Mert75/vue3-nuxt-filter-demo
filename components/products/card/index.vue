<script setup lang="ts">
import { Phone } from '~~/types'

defineProps<{
  phone: Phone
}>()

const { colors: { getColorMapping } } = useProduct()
</script>

<template>
  <UiCard
    :title="phone.name"
    class="group relative cursor-pointer -mt-4"
  >
    <img
      :src="phone.imageSrc"
      class="w-full h-40 object-contain mb-2"
    />

    <h3 class="text-gray-600 dark:text-zinc-400 text-sm">
      {{ phone.manufacturer }}
    </h3>

    <h2 class="font-bold md:text-base text-lg py-0">
      {{ phone.name }}
    </h2>

    <p class="text-sm text-gray-500 dark:text-zinc-300">
      {{ phone.variants[0].attributes.color }}
    </p>

    <ul class="mt-4 flex space-x-2">
      <li
        v-for="(color, index) in getColorMapping(phone.colors)"
        :key="index"
        class="w-4 h-4 border rounded-full"
        :style="{ backgroundColor: color }"
      />
    </ul>

    <Icon
      name="mdi:arrow-right-circle"
      size="20"
      class="hidden opacity-0 group-hover:opacity-100 transition duration-200 text-green-600 dark:text-green-500 absolute bottom-4 right-4 hover:scale-[140%]"
    />
  </UiCard>
</template>
