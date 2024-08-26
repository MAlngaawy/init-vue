<template>
  <div
    @click="changeStatus"
    :class="[
      'rounded-xl w-full bg-gray-100 my-2 border-gray-500 text-black p-2 font-medium text-xl cursor-pointer',
      { 'line-through opacity-30': props?.item?.completed },
      // { 'hover:scale-105 transition-all transform': !props?.item?.completed },
    ]"
  >
    {{ props?.item?.message }}
  </div>
</template>

<script setup>
  const props = defineProps(['item']);

  function changeStatus() {
    props.item.completed = !props.item.completed;
  }
</script>
