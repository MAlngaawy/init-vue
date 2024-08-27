<template>
  <div class="flex flex-col gap-2 my-5">
    <h1 class="text-xl text-white italic">{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      required: true,
    },
  });
</script>
