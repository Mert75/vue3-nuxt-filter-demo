<script setup lang="ts">
const props = defineProps({
  pages: {
    type: Array as PropType<Array<string>>,
  },
  activeIndex: {
    type: Number as PropType<number>,
    required: true,
  },
})
</script>

<template>
  <nav
    class="flex"
    aria-label="Breadcrumb"
  >
    <ol
      role="list"
      class="flex items-center space-x-4 list-none mx-auto"
    >
      <li>
        <a class="text-gray-400 hover:text-gray-600 transition-colors dark:hover:text-zinc-200">
          <Icon
            name="mdi:home"
            class="flex-shrink-0"
            aria-hidden="true"
            size="19"
          />
        </a>
      </li>

      <li
        v-for="(page, index) in props.pages"
        :key="index"
      >
        <div class="flex items-center">
          <svg
            class="h-5 w-5 flex-shrink-0 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
          </svg>

          <span
            class="text-sm pl-4 no-underline"
            :class="{ 'text-primary': index === props.activeIndex }"
          >
            {{ page }}
          </span>
        </div>
      </li>
    </ol>
  </nav>
</template>
