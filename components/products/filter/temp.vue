<script setup lang="ts">
const product = useProduct()
</script>

<template>
  <div>
    <div>
      <h2>Filter phones:</h2>
      <label>
        Manufacturer:
        <input
          v-model="product.filters.filterValues.manufacturer"
          type="text"
        >
      </label>
      <br>
      <label>
        Color:
        <select v-model="product.filters.filterValues.color">
          <option value="">-- Select color --</option>
          <option
            v-for="color in product.colors.getUniqueColors.value"
            :key="color"
            :value="color"
          >
            {{ color }}
          </option>
        </select>
      </label>
      <br>
      <label>
        5G support:
        <input
          v-model="product.filters.filterValues['5G']"
          type="checkbox"
        >
      </label>
      <br>
      <label>
        E-SIM support:
        <input
          v-model="product.filters.filterValues['E-SIM']"
          type="checkbox"
        >
      </label>

      <ul>
        <li
          v-for="phone in product.filteredPhones.value"
          :key="phone.id"
        >
          {{ phone.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
