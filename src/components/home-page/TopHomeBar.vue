<script setup>
import { Wallet } from 'lucide-vue-next';
import { Banknote } from 'lucide-vue-next';
import { CreditCard } from 'lucide-vue-next';
import { PiggyBank } from 'lucide-vue-next';
import { ref } from 'vue'
import RouterLinkButton from '../buttons/RouterLinkButton.vue';

const budget = ref('$0,00');
const budgetCash = ref('$92,30');
const budgetCard = ref('$1283,23')
const economiesBudget = ref('$28,543.92')



</script>

<template>
  <div
    id="top-bar"
    class="ml-[200px] p-[30px] bg-[#FFFFFF]"
  >
    <div
      v-if="$route.path === '/home-page'"
      class="flex justify-between items-center mx-[20px]"
    >
      <div class="flex flex-row gap-1">
        <Wallet />
        <p class="font-semibold">
          Your Budget: {{ budget }}
        </p>
      </div>
      <RouterLinkButton
        to="/budget-page"
        title="Manage your budget"
      />
    </div>

    <div
      v-if="$route.path === '/budget-page'"
      class="flex justify-between items-center mx-[20px]"
    >
      <div class="flex flex-row gap-1">
        <Banknote />
        <p class="font-semibold text-[16px]">
          Cash: {{ budgetCash }}
        </p>
      </div>
      <div class=" flex flex-row gap-1">
        <CreditCard />
        <p class="font-semibold">
          Card: {{ budgetCard }}
        </p>
      </div>
      <div class="flex flex-row gap-1">
        <PiggyBank />
        <p class="font-semibold">
          Economies: {{ economiesBudget }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#top-bar {
    border-bottom: 1px solid rgb(219, 216, 216);
}
</style>