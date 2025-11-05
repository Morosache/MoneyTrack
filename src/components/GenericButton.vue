<script setup>
defineProps({
    title: {
        type:String,
        required: true
    }
})
</script>

<template>
    <button type="submit"
        class="px-[100px] py-[10px] my-[30px] bg-[#56d788] rounded-[7px] font-medium hover:bg-[#4cc179]">
        {{ title}}
        </button>
</template>