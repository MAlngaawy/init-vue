import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // state (data)
  const count = ref(0)
  
  // getters (computed properties)
  const doubleCount = computed(() => count.value * 2)

  // actions (methods)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})



/**
 
it also can be like that 


export const useCounterStore = defineStore('counter', {

  state: () => ({ count: 0, name: 'Eduardo' }),

  getters: {
    doubleCount: (state) => state.count * 2,
  },
  
  actions: {
    increment() {
      this.count++
    },
  },

})


*/