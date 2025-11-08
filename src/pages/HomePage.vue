<script setup>
import LatestTransactionsCard from '@/components/LatestTransactionsCard.vue';
import NewTransactionCard from '@/components/NewTransactionCard.vue';
import SideMenu from '@/components/SideMenu.vue';
import StatisticsCard from '@/components/StatisticsCard.vue';
import TopHomeBar from '@/components/TopHomeBar.vue';


</script>

<template>
    <div class="flex flex-col w-full h-screen bg-[#F6F6F6]">
        <TopHomeBar />
        <div class="flex justify-center items-center flex-wrap mx-[50px] mb-[50px]">
            <div class=" flex flex-row gap-25 justify-between items-center mx-[40px] my-[40px]">
            <NewTransactionCard />
            <LatestTransactionsCard />

            </div>
            <StatisticsCard />
        </div>
    </div>

</template>