<template>
  <div class="mt-10">
    <h1 class="text-2xl text-white font-bold">Test Primevue Components</h1>

    <!-- Slider -->
    <ComponentBox title="Slide">
      <Slider v-model="value" class="w-56" />
      <h2>{{ value }}</h2>
    </ComponentBox>
    <!-- Checkbox -->
    <ComponentBox title="Checkbox">
      <Checkbox v-model="checked" :binary="true" />
    </ComponentBox>
  </div>
</template>

<script setup>
  import Slider from 'primevue/slider';
  import Checkbox from 'primevue/Checkbox';
  import { ref } from 'vue';
  import ComponentBox from './ComponentBox.vue';

  const value = ref(10);
  const checked = ref(false);
</script>
