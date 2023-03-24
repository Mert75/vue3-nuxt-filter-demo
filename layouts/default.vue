<script lang="ts" setup>
const menuOpen = ref(false)
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <!-- Top nav -->
    <header class="relative flex navigation-header--height flex-shrink-0 items-center border-b">
      <NuxtLink
        to="/"
        class="md:flex-shrink-0 flex items-center h-full"
      >
        <Logo
          class="w-full h-7 px-4"
        />
      </NuxtLink>

      <!-- Menu button area -->
      <div class="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 md:hidden">
        <!-- Mobile menu button -->
        <button
          type="button"
          class="-mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600"
          @click="menuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Icon
            name="MenuIcon"
            class="block h-6 w-6"
            aria-hidden="true"
          />
        </button>
      </div>

      <!-- Desktop nav area -->
      <div class="hidden md:flex md:min-w-0 md:flex-1 md:items-center md:justify-between h-full">
        <div class="w-96 p-4" />

        <div class="min-w-0 flex-1 max-w-md">
          <div class="relative max-w-2xl text-gray-400 focus-within:text-gray-500 dark:focus-within:text-zinc-300 ml-2">
            <label
              for="desktop-search"
              class="sr-only"
            >
              Search
            </label>

            <UiFormsInput
              id="desktop-search"
              type="search"
              placeholder="Search..."
              class="block w-full border-transparent !pl-12"
              onfocus="this.placeholder = 'Not implemented ;)'"
            />

            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4">
              <Icon
                name="mdi:magnify"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        <div class="flex-1" />
      </div>

      <SideMenu
        title="Filter"
        :menu-open="menuOpen"
        @close="menuOpen = false"
      />
    </header>

    <!-- Main area -->
    <main class="min-w-0 flex-1 lg:flex">
      <section
        aria-labelledby="primary-heading"
        class="flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last"
      >
        <slot />
      </section>
    </main>
  </div>
</template>
