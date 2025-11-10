<script setup>
import { Banknote } from 'lucide-vue-next';
import { CreditCard } from 'lucide-vue-next';
import { PiggyBank } from 'lucide-vue-next';
import { ref } from 'vue'
import RouterLinkButton from '../buttons/RouterLinkButton.vue';

const budgetCash = ref('$92,30');
const budgetCard = ref('$1283,23')
const economiesBudget = ref('$28,543.92')


</script>

<template>
    <div class="ml-[200px] p-[36px] bg-[#FFFFFF]" id="top-budget-bar">
        <div class="flex justify-between items-center mx-[20px]">
            <div class="flex flex-row gap-1">
                <Banknote />
                <p class="font-semibold text-[16px]"> Cash: {{ budgetCash }} </p>
            </div>
            <div class=" flex flex-row gap-1">
                <CreditCard />
                <p class="font-semibold"> Card: {{ budgetCard }} </p>
            </div>
            <div class="flex flex-row gap-1">
                <PiggyBank />
                <p class="font-semibold"> Economies: {{ economiesBudget }}</p>
            </div>
        </div>

    </div>

</template>

<style scoped>
#top-budget-bar {
    border-bottom: 1px solid rgb(219, 216, 216);
}
</style>