<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'

const filterStore = useFilter()
</script>

<template>
  <Disclosure
    v-slot="{ open }"
    as="div"
    class="border-b border-gray-200 py-6"
  >
    <h3 class="-my-3 flow-root">
      <DisclosureButton class="flex w-full items-center justify-between bg-light dark:bg-dark py-3 text-sm text-gray-400 hover:text-gray-500">
        <span class="font-medium text-gray-900 dark:text-zinc-200">
          E-SIM
        </span>

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
          class="flex items-center"
        >
          <input
            v-model="filterStore.filterValues['E-SIM']"
            type="checkbox"
            class="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
          />

          <label
            class="ml-3 text-sm text-gray-600 dark:text-zinc-400 capitalize"
          >
            {{ filterStore.filterValues['E-SIM'] ? 'Yes' : 'No' }}
          </label>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<style scoped>

</style>
