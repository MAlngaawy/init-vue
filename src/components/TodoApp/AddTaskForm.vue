<template>
  <form @submit.prevent="onSubmitFunc" class="flex flex-col gap-4 my-10">
    <input class="text-black p-2 border" name="note" type="text" />
    <button class="p-2 bg-green-500 text-white text-xl" type="submit">
      Submit
    </button>
  </form>
</template>

<script setup>
  const props = defineProps(['list']);

  function onSubmitFunc(e) {
    // console.log('reeeeeeeeee', e.target.note.value);
    props.list.push({ message: e.target.note.value, completed: false, id: 55 });
    e.target.note.value = '';
  }
</script>
