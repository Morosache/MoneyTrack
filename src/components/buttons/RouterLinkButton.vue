<script setup>
defineProps(
    ['title'],
    ['route']
)

</script>

<template>
     <router-link to="{{ route }}"
                class="px-[20px] py-[3px] text-[16px] bg-[#56D788] rounded-[10px] font-semibold hover:bg-[#4cc179] cursor-pointer">{{ title }}
            </router-link>
</template>