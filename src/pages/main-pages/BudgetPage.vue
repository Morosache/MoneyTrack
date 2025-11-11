<script setup>
import { ref } from 'vue'
import AddBudgetCard from '@/components/budget-page/AddBudgetCard.vue';
import BudgetStatisticsCard from '@/components/budget-page/BudgetStatisticsCard.vue';
import LatestBudgetCard from '@/components/budget-page/LatestBudgetCard.vue';
import TopHomeBar from '@/components/home-page/TopHomeBar.vue';

const incomes = ref([])

function handleSubmit(data) {
    incomes.value.unshift(data)
}
</script>

<template>
    <div class="bg-[#F6F6F6] flex flex-col w-full h-screen">
                <TopHomeBar />
            <div class="flex flex-row ml-[185px] justify-center items-center flex-wrap mt-[10px]">
                <div class=" flex flex-col justify-between items-center">
                <AddBudgetCard @submitForm="handleSubmit"/>
                <LatestBudgetCard :incomes="incomes"/>
                </div>
                <BudgetStatisticsCard />
            </div>

    </div>
</template>