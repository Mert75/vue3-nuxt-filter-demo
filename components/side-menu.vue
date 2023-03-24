<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  menuOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['close'])
</script>

<template>
  <TransitionRoot
    as="template"
    :show="menuOpen"
  >
    <Dialog
      as="div"
      class="relative z-40 md:hidden"
      @close="emit('close')"
    >
      <TransitionChild
        as="template"
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="hidden sm:fixed sm:inset-0 sm:block sm:bg-gray-600/75 dark:sm:bg-zinc-600/75" />
      </TransitionChild>

      <div class="fixed inset-0 z-40">
        <TransitionChild
          as="template"
          enter="transition ease-out duration-150 sm:ease-in-out sm:duration-300"
          enter-from="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
          enter-to="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
          leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300"
          leave-from="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
          leave-to="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
        >
          <DialogPanel
            class="fixed inset-0 z-40 h-full w-full sm:inset-y-0 sm:left-auto sm:right-0 sm:w-full sm:max-w-sm sm:shadow-lg dark:bg-dark bg-light"
          >
            <div class="flex h-16 items-center justify-between px-4 sm:px-6 border-b">
              <h1 class="font-bold text-2xl">
                {{ title }}
              </h1>

              <button
                type="button"
                class="-mr-2 inline-flex items-center justify-center rounded-full p-2 text-gray-400  hover:text-gray-500 dark:hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600"
                @click="emit('close')"
              >
                <span class="sr-only">Close menu</span>

                <Icon
                  name="XMarkIcon"
                  class="block"
                  aria-hidden="true"
                />
              </button>
            </div>

            <div class="max-w-8xl mx-auto mt-2 px-4 sm:px-6 prose dark:prose-invert">
              <div class="relative text-gray-400 focus-within:text-gray-500">
                <slot />
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
