<script setup lang="ts">
const { toggleDarkMode, getIcon } = useTheme()
</script>

<template>
  <Html>
    <Body>
      <NuxtLayout>
        <NuxtPage />

        <UiButton
          :icon="getIcon"
          class="!fixed bottom-4 right-4 h-12 w-12 !rounded-full"
          variant="secondary"
          @click="toggleDarkMode"
        />
      </NuxtLayout>
    </Body>
  </Html>
</template>
