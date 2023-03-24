<script lang="ts">
export const buttonVariants = ['primary', 'secondary', 'outlined', 'text'] as const
</script>

<script setup lang="ts">
// eslint-disable-next-line import/first
import { PropType } from 'vue'

const props = defineProps({
  to: String,
  large: Boolean,
  icon: String,
  iconClass: String,
  rounded: Boolean,
  variant: {
    type: String as PropType<ButtonVariant>,
    default: 'primary',
  },
  content: {
    type: Boolean,
    required: false,
    default: true,
  },
})

type ButtonVariant = typeof buttonVariants[number]

const excludeVariants = (variants: ButtonVariant[]) => ![...variants].includes(props.variant)

const classes = computed(() => {
  return {
    'btn': true,
    'rounded': props.rounded && excludeVariants(['text']),
    'btn-primary': props.variant === 'primary',
    'btn-secondary': props.variant === 'secondary',
    'btn-outlined': props.variant === 'outlined',
    'btn-text': props.variant === 'text',
    'btn--content': props.content,
    'btn--block': !props.content,
    'btn--large': props.large,
  }
})

const onClick = () => props.to && navigateTo(props.to)
</script>

<template>
  <button
    v-bind="$attrs"
    :class="classes"
    @click="onClick"
  >
    <slot />

    <template v-if="props.icon">
      <Icon
        :name="props.icon"
        size="17"
        :class="iconClass"
      />
    </template>
  </button>
</template>

<style>
.btn {
  @apply border px-4 py-1 text-sm font-medium shadow-sm text-center uppercase relative flex items-center justify-center transition rounded-md;
  @apply disabled:pointer-events-none disabled:opacity-20;
  @apply active:ring-2 active:ring-zinc-600 active:bg-opacity-50;
}

.btn-primary {
  @apply bg-primary text-white border border-primary-active active:bg-primary-active active:ring-primary;
}

.btn-text {
  @apply bg-transparent border-0 shadow-none;
}

.btn-outlined {
  @apply bg-transparent border-zinc-800;
}

.btn-secondary {
  @apply bg-zinc-800 text-white border border-zinc-700;
}

.btn--block {
  @apply w-full;
}
.btn--content {
  @apply w-fit flex-shrink-0;
}

.btn--large {
  @apply md:px-16 xl:px-24 lg:py-2;
}

.btn--rounded {
  @apply rounded-full;
}
</style>
