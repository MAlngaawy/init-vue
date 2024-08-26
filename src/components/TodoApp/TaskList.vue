<template>
  <div class="border border-gray-400 rounded-lg p-3 sm:p-6">
    <h2 class="text-xl text-white m-5">This is tasks list</h2>

    <AddTaskForm :list="list" />

    <div class="flex flex-col-reverse">
      <TaskItem v-for="item in list" :item="item" :deleteItem="deleteItem" />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import TaskItem from './TaskItem.vue';
  import AddTaskForm from './AddTaskForm.vue';

  let list = ref([]);

  const deleteItem = (itemId) => {
    list.value = list.value.filter((item) => item.id !== itemId);
  };
</script>
