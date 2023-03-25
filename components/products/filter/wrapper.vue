<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { SORT_OPTIONS } from '../constants'

const products = useProduct()
const totalProducts = computed(() => products.filteredPhones.length)

const mobileFiltersOpen = ref(false)
</script>

<template>
  <div>
    <div>
      <!-- Mobile filter dialog -->
      <TransitionRoot
        as="template"
        :show="mobileFiltersOpen"
      >
        <Dialog
          as="div"
          class="relative z-40 lg:hidden"
          @close="mobileFiltersOpen = false"
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
            <div class="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div class="fixed inset-0 z-40 flex">
            <TransitionChild
              as="template"
              enter="transition ease-in-out duration-300 transform"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel
                class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white dark:bg-dark py-4 pb-12 shadow-xl"
              >
                <div class="flex items-center justify-between px-4">
                  <h2 class="text-lg font-medium text-gray-900">
                    Filters
                  </h2>

                  <button
                    type="button"
                    class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    @click="mobileFiltersOpen = false"
                  >
                    <span class="sr-only">Close menu</span>
                    <Icon
                      name="mdi:close"
                      aria-hidden="true"
                    />
                  </button>
                </div>

                <div class="px-4">
                  <ProductsFilter :show-header="false" />
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>

      <section>
        <div class="flex lg:flex-row flex-col items-baseline justify-between border-b border-gray-200 pb-6 lg:pb-0">
          <h1 class="text-primary">
            <span class="font-normal">
              Choose from
            </span>
            {{ totalProducts }}+ phones
          </h1>

          <div class="flex items-center">
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
              @click="mobileFiltersOpen = true"
            >
              Filter
            </UiButton>
          </div>
        </div>

        <section
          aria-labelledby="products-heading"
          class="pt-6 pb-24"
        >
          <h2
            id="products-heading"
            class="sr-only"
          >
            Products
          </h2>

          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <!-- Filters -->
            <aside class="hidden lg:block">
              <ProductsFilter />
            </aside>

            <!-- Product grid -->
            <div class="lg:col-span-3">
              <ProductsList :filtered-phones="products.filteredPhones" />
            </div>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>
