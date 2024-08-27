<template>
  <form
    @submit.prevent="onSubmitFunc"
    class="flex flex-col sm:flex-row gap-4 my-10"
  >
    <input
      class="text-white p-2 border sm:w-3/4 rounded-md"
      name="note"
      type="text"
    />
    <button
      class="p-2 bg-green-500 text-white text-xl sm:w-1/4 rounded-md"
      type="submit"
    >
      Submit
    </button>
  </form>
</template>

<script setup>
  const props = defineProps(['list']);
  import { v4 as uuidv4 } from 'uuid';

  function onSubmitFunc(e) {
    // console.log('reeeeeeeeee', e.target.note.value);
    props.list.push({
      message: e.target.note.value,
      completed: false,
      id: uuidv4(),
    });
    e.target.note.value = '';
  }
</script>
