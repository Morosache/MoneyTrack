<script setup>
import { Wallet } from 'lucide-vue-next';
import { ref } from 'vue'
import RouterLinkButton from '../buttons/RouterLinkButton.vue';

const budget = ref('$0,00');


</script>

<template>
    <div class="ml-[200px] p-[30px] h-[100px] bg-[#FFFFFF]" id="top-bar">
        <div class="flex justify-between items-center mx-[20px]">
            <div class="flex flex-row gap-1">
                <Wallet />
                <p class="font-semibold"> Your Budget: {{ budget }} </p>
            </div>
            <RouterLinkButton to="/budget-page" title="Manage your budget"/>
        </div>

    </div>

</template>

<style scoped>
#top-bar {
    border-bottom: 1px solid rgb(219, 216, 216);
}
</style>