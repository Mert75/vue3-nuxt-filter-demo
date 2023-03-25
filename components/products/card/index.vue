<script setup lang="ts">
import { Phone } from '~~/types'

const props = defineProps({
  phone: {
    type: Object as PropType<Phone>,
    required: true,
  },
})

const { mapColors } = useProduct()
</script>

<template>
  <UiCard
    :title="props.phone.name"
    class="group relative cursor-pointer -mt-4 transition-transform duration-500 ease-in-out transform scale-95 hover:scale-100"
  >
    <img
      :src="props.phone.imageSrc"
      class="w-full h-40 object-contain mb-2"
    />

    <h3 class="text-gray-600 dark:text-zinc-400 text-sm">
      {{ props.phone.manufacturer }}
    </h3>

    <h2 class="font-bold md:text-base text-lg py-0">
      {{ props.phone.name }}
    </h2>

    <p class="text-sm text-gray-500 dark:text-zinc-300">
      {{ props.phone.variants[0].attributes.color }}
    </p>

    <ul class="mt-4 flex space-x-2">
      <li
        v-for="(color, index) in mapColors(props.phone.colors)"
        :key="index"
        class="w-4 h-4 border rounded-full"
        :style="{ backgroundColor: color }"
      />
    </ul>

    <div
      class="pt-2 group-hover:block hidden absolute top-0 left-2"
    >
      <div class="flex flex-col space-y-4">
        <Icon
          v-if="phone.has_5g"
          name="mdi:signal-5g"
          size="14"
          class="text-green-600 dark:text-green-500"
        />

        <Icon
          v-if="phone.has_esim"
          name="mdi:sim"
          size="14"
          class="text-yellow-600 dark:text-yellow-500"
        />
      </div>
    </div>

    <Icon
      name="mdi:arrow-right-circle"
      size="20"
      class="hidden opacity-0 group-hover:opacity-100 transition duration-200 text-green-600 dark:text-green-500 absolute bottom-4 right-4 hover:scale-[140%]"
    />
  </UiCard>
</template>
