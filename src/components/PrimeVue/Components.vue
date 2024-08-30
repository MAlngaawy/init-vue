<template>
  <div class="mt-10">
    <h1 class="text-2xl text-white font-bold">Playground</h1>

    <h1>UI Library</h1>
    <!-- Slider -->
    <ComponentBox title="Slide">
      <Slider v-model="value" class="w-56" />
      <h2>{{ value }}</h2>
    </ComponentBox>
    <!-- Checkbox -->
    <ComponentBox title="Checkbox">
      <Checkbox v-model="checked" :binary="true" />
    </ComponentBox>

    <ComponentBox title="Pinia State Management">
      <div>
        <p>Count: {{ count }}</p>
        <p>Double Count: {{ doubleCount }}</p>
        <Button @click="increment">Increment</Button>
      </div>
    </ComponentBox>
  </div>
</template>

<script setup>
  import Slider from 'primevue/slider';
  import Checkbox from 'primevue/Checkbox';
  import Button from 'primevue/button';
  import { ref } from 'vue';
  import ComponentBox from './ComponentBox.vue';
  import { useCounterStore } from '@/stores/counter';
  import { storeToRefs } from 'pinia';

  const store = useCounterStore();

  const { count, doubleCount } = storeToRefs(store);

  const { increment } = store;

  const value = ref(10);
  const checked = ref(false);
</script>
