<script setup>
import { Wallet } from 'lucide-vue-next';
import { ref } from 'vue'
import GenericButton from './GenericButton.vue';
import router from '@/router/router';

const budget = ref('$0,00');


</script>

<template>
    <div class="flex-1 ml-[200px] p-[30px] h-[100px] bg-[#FFFFFF]" id="top-bar">
        <div class="flex justify-between items-center mx-[20px]">
            <div class="flex flex-row gap-1">
                <Wallet />
                <p class="font-semibold"> Your Budget: {{ budget }} </p>
            </div>
            <router-link to="/budget-page"
                class="px-[20px] py-[3px] text-[16px] bg-[#56D788] rounded-[10px] font-semibold hover:bg-[#4cc179] cursor-pointer">Manage
                your budget
            </router-link>
        </div>

    </div>

</template>

<style scoped>
#top-bar {
    border-bottom: 1px solid rgb(219, 216, 216);
}
</style>