<script setup lang="ts">
const props = defineProps({
  showHeader: {
    type: Boolean,
    default: true,
  },
})
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
  <div
    v-if="props.showHeader"
    class="font-bold"
  >
    Featured Models
  </div>

  <component
    :is="filterComponent(key)"
    v-for="key in Object.keys(filterStore.filterValues)"
    :key="key"
  />
</template>
