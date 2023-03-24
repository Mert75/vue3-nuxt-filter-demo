<script setup lang="ts">
const { startResize, resizable } = useResizable()
</script>

<template>
  <div
    ref="resizable"
    class="resizable"
  >
    <div class="content">
      <slot />
    </div>

    <div
      class="resize-handle "
      @mousedown="startResize"
    >
      <slot name="resize-handle" />
    </div>
  </div>
</template>

<style scoped>
.resizable {
  @apply relative overflow-hidden select-none;
}

.resizable .content {
  @apply absolute top-0 bottom-0 left-0 right-2 overflow-y-auto;
}

.resize-handle {
  @apply top-0 right-0 bottom-0 absolute w-2 cursor-col-resize;
}
</style>
