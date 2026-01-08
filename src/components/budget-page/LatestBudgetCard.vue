<script setup>
import { Pencil } from 'lucide-vue-next'
import { Trash } from 'lucide-vue-next'
import { computed } from 'vue'
import { useIncome } from '@/stores/incomeStore.js'

const incomeStore = useIncome();

const props = defineProps({
    incomes: {
        type: Array,
        required: true
    }
})

const latestIncome = computed(() => {
  return[...props.incomes].reverse()
})
</script>

<template>
  <div class="flex justify-center">
    <div
      id="latest-budget-card"
      class="w-[650px] bg-white mx-[30px] mb-[30px] rounded-[10px]"
    >
      <h1 class="text-[18px] font-semibold text-center mt-3">
        Latest Income
      </h1>

      <div class="grid grid-cols-1 mt-2 max-h-[250px] overflow-y-auto ">
        <div class="grid grid-cols-6 border-b border-t border-gray-300 p-3 text-center items-center">
          <p class="text-[14px] font-semibold">
            Source
          </p>
          <p class="text-[14px] font-semibold">
            Amount
          </p>
          <p class="text-[14px] font-semibold">
            Account
          </p>
          <p class="text-[14px] font-semibold">
            Observations
          </p>
        </div>
        <div
          v-for="income in latestIncome"
          :key="income.id"
          class="grid grid-cols-6 border-b border-gray-300 p-3 text-center items-center"
        >
          <p>{{ income.source }}</p>
          <p class="font-semibold">
            {{ income.amount }}
          </p>
          <p>{{ income.category }}</p>
          <p>{{ income.observation }}</p>
          <Pencil class="w-[15px] h-[15px] justify-self-end" />
          <button @click="incomeStore.removeIncome(income.id)">
          <Trash class="w-[15px] h-[15px] justify-self-end mr-[20px]" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#latest-budget-card {
    border: 1px solid rgb(219, 216, 216);
}

</style>



<style scoped>
#latest-budget-card {
    border: 1px solid rgb(219, 216, 216);
}

</style>