<script setup>
defineProps({
    title: String,
    category: String,
    date: Date,
    price: Number,
    wish: String

})

import { Pencil } from 'lucide-vue-next';

</script>

<template>
    <div class="grid grid-cols-6 px-8 py-4 gap-3" id="card">
                <p class="text-[12px]">{{ date.toLocaleDateString()}}</p>
                <p class="text-[13px]">{{ title }}</p>
                <p class="text-[13px]">${{ price }}</p>
                <p class="text-[13px]">{{ category }} </p>
                <p class="text-[13px]">{{ wish }}</p>
                <Pencil  class="w-[15px] h-[15px] justify-self-end"/>
     </div>
</template>

<style scoped>
#card {
    border-top: 1px solid rgb(219, 216, 216);
}

p {
    font-weight: 600;
}


</style>