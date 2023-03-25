<script setup lang="ts">
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'

import { SORT_OPTIONS } from '../constants'

const emit = defineEmits(['open-filter'])
</script>

<template>
  <Menu
    as="div"
    class="relative inline-block text-left"
  >
    <div>
      <MenuButton class="group inline-flex justify-center text-sm font-medium">
        Sort

        <Icon
          name="mdi:chevron-down"
          size="18"
          class="mt-0.5 ml-1 flex-shrink-0 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-zinc-200"
          aria-hidden="true"
        />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white dark:bg-zinc-800 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="py-1">
          <MenuItem
            v-for="option in SORT_OPTIONS"
            :key="option.name"
            v-slot="{ active }"
          >
            <div
              class="block px-4 py-2 text-sm cursor-pointer"
              :class="{ 'text-primary': active }"
            >
              {{ option.name }}
            </div>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>

  <UiButton
    variant="primary"
    icon="mdi:filter-variant"
    icon-class="ml-2"
    class="w-7 h-7 mx-4 rounded-full lg:!hidden"
    @click="emit('open-filter')"
  >
    Filter
  </UiButton>
</template>

<style scoped>

</style>
