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

    <ComponentBox title="Vuex">
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
  import { computed, ref } from 'vue';
  import ComponentBox from './ComponentBox.vue';
  import { useCounterStore } from '@/stores/counter';
  import { storeToRefs } from 'pinia';

  const store = useCounterStore();

  const { count, doubleCount } = storeToRefs(store);

  const { increment } = store;

  // store.count++

  const value = ref(10);
  const checked = ref(false);
</script>
