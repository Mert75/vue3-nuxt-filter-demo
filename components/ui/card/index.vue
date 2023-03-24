<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  @apply bg-light dark:bg-dark border border-light dark:border-dark rounded mb-4 p-4 hover:shadow-md transition hover:border-zinc-300 dark:hover:border-zinc-700 border-opacity-30 active:bg-dark/5 active:dark:bg-zinc-800;
}
</style>
