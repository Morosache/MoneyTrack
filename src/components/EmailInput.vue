<script setup>
const email = defineModel()
</script>

<template>
    <input placeholder='Email' type='email' v-model=email id="email" value='' class='w-[400px] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none'></input>
</template>