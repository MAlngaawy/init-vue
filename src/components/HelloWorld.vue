<script setup>
  import Slider from 'primevue/slider';
  import { ref } from 'vue';

  const value = ref(10);
  defineProps({
    msg: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <Slider v-model="value" class="w-56" />
    <h2>{{ value }}</h2>
    <!-- <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3> -->
  </div>
</template>

<style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
  }

  h3 {
    font-size: 1.2rem;
  }

  .greetings h1,
  .greetings h3 {
    text-align: center;
  }

  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
</style>
