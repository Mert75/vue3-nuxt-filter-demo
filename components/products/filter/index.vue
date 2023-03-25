<script setup lang="ts">
const filterStore = useFilter()

const filterComponent = (key: string) => {
  switch (key) {
    case 'manufacturer':
      return resolveComponent('ProductsFilterSectionManufacture')
    case 'color':
      return resolveComponent('ProductsFilterSectionColor')
    case '5G':
      return resolveComponent('ProductsFilterSectionFiveG')
    case 'E-SIM':
      return resolveComponent('ProductsFilterSectionESim')
  }
}
</script>

<template>
  <div class="font-bold">
    Featured Models
  </div>

  <component
    :is="filterComponent(key)"
    v-for="key in Object.keys(filterStore.filterValues)"
    :key="key"
  />
</template>
