<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <div>
    Hi This is {{ testVar }} test
  </div>
  <button class="py-2 px-10 bg-blue-600 text-white rounded-sm" @click="changetext">
    Change Tset
  </button>
</template>

<script setup>

import { ref } from 'vue';

  let testVar = ref("LOL")

  const changetext = () => {
    console.log("first Clicked")
    testVar.value = "Changed"
  }
</script>