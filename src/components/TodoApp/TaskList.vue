<template>
  <div class="border border-gray-400 rounded-lg p-6">
    <h2 class="text-xl text-white m-5">This is tasks list</h2>

    <AddTaskForm :list="list" />

    <div class="flex flex-col-reverse">
      <TaskItem v-for="item in list" :item="item" />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import TaskItem from './TaskItem.vue';
  import AddTaskForm from './AddTaskForm.vue';

  const list = ref([
    { message: 'task One', completed: false, id: 1 },
    { message: 'task Two', completed: false, id: 2 },
    { message: 'task Three', completed: true, id: 3 },
  ]);
</script>
