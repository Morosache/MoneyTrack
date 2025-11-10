<script setup>
import RouterLinkButton from '../buttons/RouterLinkButton.vue';


</script>

<template>
    <div class="bg-white w-[650px] h-[275px] rounded-[10px]" id="new-transaction">
        <div class="flex justify-center items-center flex-col gap-5 h-full">
            <h1 class="text-[25px] font-medium ">Register new transaction</h1>
            <RouterLinkButton to="/transactions-page" title="Register new transaction" />
        </div>
    </div>

</template>

<style scoped>
#new-transaction {
    border: 1px solid rgb(219, 216, 216);
}
</style>