<script setup lang="ts">
const { filterValues } = useFilter()
</script>

<template>
  <div>
    <div>
      <h2>Filter phones:</h2>
      <label>
        Manufacturer:
        <input
          v-model="filterValues.manufacturer"
          type="text"
        >
      </label>
      <br>
      <label>
        Color:
        <select v-model="filterValues.color">
          <option value="">-- Select color --</option>
          <option
            v-for="color in useProduct().getUniqueColors()"
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
          v-model="filterValues['5G']"
          type="checkbox"
        >
      </label>
      <br>
      <label>
        E-SIM support:
        <input
          v-model="filterValues['E-SIM']"
          type="checkbox"
        >
      </label>
    </div>
  </div>
</template>

<style scoped>

</style>
