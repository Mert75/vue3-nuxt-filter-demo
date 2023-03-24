<script setup lang="ts">
const breadcrumbs = [
  'Shop',
  'Mobile',
  'Phones',
]
</script>

<template>
  <div>
    <Breadcrumbs
      :pages="breadcrumbs"
      :active-index="breadcrumbs.length - 1"
      class="py-4 bg-zinc-100 dark:bg-zinc-800"
    />

    <div class="prose dark:prose-invert mx-auto max-w-4xl px-4 py-8">
      <ProductsFilterWrapper />
    </div>
  </div>
</template>

<style scoped>

</style>
