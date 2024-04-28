<script setup lang="ts"></script>

<template>
  <div class="w-full h-full max-w-[var(--max-width)] flex flex-col justify-items-center bg-base-100">

    <header
      aria-label="Site Header"
      class="bg-base-100"
    >
      Side Panel Header
    </header>
  
    <main class="flex w-full h-full bg-base-100">
      <RouterView></RouterView>
    </main>
  
    <navbar-bottom />
  </div>
</template>

<style scoped></style>
