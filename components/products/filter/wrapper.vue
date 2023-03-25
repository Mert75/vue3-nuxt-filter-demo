<script setup lang="ts">
const products = useProduct()
const totalProducts = computed(() => products.filteredPhones.length)

const mobileFilterMenu = useFilterMobileMenu()
</script>

<template>
  <div>
    <SideMenu
      title="Filters"
      :menu-open="mobileFilterMenu"
      @close="mobileFilterMenu = false"
    >
      <ProductsFilter :show-header="false" />
    </SideMenu>

    <section>
      <div class="flex lg:flex-row flex-col items-baseline justify-between border-b border-gray-200 pb-6 lg:pb-0">
        <h1 class="text-primary">
          <span class="font-normal">
            Choose from
          </span>
          {{ totalProducts }}+ phones
        </h1>

        <div class="flex items-center">
          <ProductsFilterSortButton
            @open-filter="mobileFilterMenu = true"
          />
        </div>
      </div>

      <section
        aria-labelledby="products-heading"
        class="pt-6 pb-24"
      >
        <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <!-- Filters -->
          <aside class="hidden lg:block">
            <ProductsFilter />
          </aside>

          <!-- Product grid -->
          <div class="lg:col-span-3">
            <LoadingSpinner v-if="products.isLoading" />

            <ProductsList
              v-else
              :filtered-phones="products.filteredPhones"
            />
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
