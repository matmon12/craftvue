<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-hidden="true"
    v-bind="$attrs"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 5v14m-7-7h14"
    />
  </svg>
</template>

<script setup lang="ts">
import { defineOptions } from 'vue'

defineOptions({ name: 'AddIcon' })
</script>
