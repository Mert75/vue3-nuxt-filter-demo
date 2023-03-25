<template>
  <div class="flex items-center justify-center w-full h-64">
    <svg
      class="animate-spin -ml-1 mr-3 h-5 w-5 text-green-600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1z"
      ></path>
    </svg>
    <span class="text-green-600">Loading...</span>
  </div>
</template>

<style>
    .animate-spin {
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% {
        transform: rotate(0deg);
        }
        100% {
        transform: rotate(360deg);
        }
    }
</style>
