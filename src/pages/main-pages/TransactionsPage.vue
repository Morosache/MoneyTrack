<script setup>
import TopBudgetBar from '@/components/budget-page/TopBudgetBar.vue';
import LatestTransactionsCard from '@/components/home-page/LatestTransactionsCard.vue'
import NewTransactionCard from '@/components/home-page/NewTransactionCard.vue'

</script>

<template> 
  <div class="bg-[#F6F6F6] flex flex-col w-full h-screen">
    <TopBudgetBar />
    <div class="ml-[185px] flex flex-row gap-[70px] justify-center mt-[40px]"> 
      <NewTransactionCard />
      <LatestTransactionsCard />
    </div>
  </div>
</template>