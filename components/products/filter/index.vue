<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'
import { DEFAULT_OPTIONS } from '../constants'
import { Filter } from '../types'

const productFeed = useProduct()

const filters: ComputedRef<Filter[]> = computed(() => [
  {
    id: 'color',
    name: 'Color',
    options: productFeed.colors.getUniqueColors.value.map(color => ({
      name: color,
      value: color,
    })),
  },
  {
    id: 'manifacturer',
    name: 'Manifacturer',
    options: productFeed.uniqueManufacturers.value.map(manifacturer => ({
      name: manifacturer,
      value: manifacturer,
    })),
  },
  {
    id: 'e-sim',
    name: 'E-SIM',
    options: DEFAULT_OPTIONS,
  },
  {
    id: '5G',
    name: '5G',
    options: DEFAULT_OPTIONS,
  },
])
</script>

<template>
  <div class="font-bold">
    Featured Models
  </div>

  <ul
    role="list"
    class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900 dark:text-zinc-200 list-none"
  >
    <li
      v-for="category in productFeed.uniqueManufacturers.value.slice(0, 4)"
      :key="category"
    >
      <div
        :to="category"
        class="no-underline hover:underline cursor-pointer"
      >
        {{ category }}
      </div>
    </li>
  </ul>

  <Disclosure
    v-for="section in filters"
    :key="section.id"
    v-slot="{ open }"
    as="div"
    class="border-b border-gray-200 py-6"
  >
    <h3 class="-my-3 flow-root">
      <DisclosureButton class="flex w-full items-center justify-between bg-light dark:bg-dark py-3 text-sm text-gray-400 hover:text-gray-500">
        <span class="font-medium text-gray-900 dark:text-zinc-200">{{ section.name }}</span>
        <span class="ml-6 flex items-center">
          <Icon
            v-if="!open"
            name="mdi:plus"
            class="h-5 w-5"
            aria-hidden="true"
          />

          <Icon
            v-else
            name="mdi:minus"
            class="h-5 w-5"
            aria-hidden="true"
          />
        </span>
      </DisclosureButton>
    </h3>

    <DisclosurePanel class="pt-6">
      <div class="space-y-4">
        <div
          v-for="(option, optionIdx) in section.options"
          :key="option.value"
          class="flex items-center"
        >
          <input
            :id="`filter-${section.id}-${optionIdx}`"
            :name="`${section.id}[]`"
            :value="option.value"
            type="checkbox"
            class="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
          />

          <label
            :for="`filter-${section.id}-${optionIdx}`"
            class="ml-3 text-sm text-gray-600 dark:text-zinc-400 capitalize"
          >
            {{ option.name }}
          </label>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<style scoped>

</style>
