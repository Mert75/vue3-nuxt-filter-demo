<script setup lang="ts">
import { Phone } from '~~/types'

defineProps({
  filteredPhones: {
    type: Array as PropType<Phone[]>,
    required: true,
  },
})
</script>

<template>
  <div class="relative">
    <div class="relative w-full overflow-x-auto pb-6">
      <ul
        role="list"
        class="mx-4 sm:mx-6 lg:mx-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 sm:gap-x-8 lg:space-x-0 not-prose gap-y-4"
      >
        <div v-if="filteredPhones.length === 0">
          No products found.
        </div>

        <ProductsCard
          v-for="(product, ix) in filteredPhones"
          :key="ix"
          :phone="product"
        />
      </ul>
    </div>
  </div>

  <div class="mt-12 flex px-4 sm:hidden">
    <a
      href="#"
      class="text-sm font-semibold text-green-600 hover:text-green-500"
    >
      See everything
      <span aria-hidden="true"> &rarr;</span>
    </a>
  </div>
</template>
