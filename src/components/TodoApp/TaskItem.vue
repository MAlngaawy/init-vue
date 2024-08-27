<template>
  <div
    @click="changeStatus"
    :class="[
      'rounded-full flex justify-between w-full bg-gray-100 my-2 border-gray-500 text-black p-2 font-medium text-xl cursor-pointer',
      { 'line-through opacity-30': props?.item?.completed },
      // { 'hover:scale-105 transition-all transform': !props?.item?.completed },
    ]"
  >
    <div>
      {{ props?.item?.message }}
    </div>
    <!-- <i
      @click="
        (event) => {
          event.stopPropagation();
          props.deleteItem(props?.item?.id);
          console.log('Clicked');
        }
      "
      class="pi pi-trash text-xl text-red-500 mx-2 transform hover:scale-110"
      style="font-size: large"
    ></i> -->
    <TrashIcon
      @click="
        (event) => {
          event.stopPropagation();
          props.deleteItem(props?.item?.id);
          console.log('Clicked');
        }
      "
      class="w-5 h-5 text-red-500 mx-2 transform hover:scale-110"
    />
  </div>
</template>

<script setup>
  import { TrashIcon } from '@heroicons/vue/24/solid';

  const props = defineProps(['item', 'deleteItem']);

  const changeStatus = () => {
    props.item.completed = !props.item.completed;
  };
</script>
