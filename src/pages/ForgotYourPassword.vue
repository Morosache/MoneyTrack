<script setup>
import { ref } from 'vue'
import GoBackButton from '@/components/GoBackButton.vue';
import GenericButton from '@/components/GenericButton.vue';

const email = '';

const handleClick = () => {
    alert('code sent')
}
</script>

<template>
    <GoBackButton />

    <div class="flex flex-col justify-center items-center mt-[150px] h-full w-full ">
        <div class="mb-[15px]">
            <h1 class="text-[40px] font-semibold">Forgot your Password?</h1>
        </div>
        <form @submit.prevent='handleClick' class="flex flex-col">
            <div>
                <label for="email" class="block font-medium mb-2">Enter your email</label>
                <input type="email" id="email" v-model="email" placeholder="Email"
                    class="w-[400px] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
            </div>
            <p class="text-[12px] ml-[2px] ">We will send you a code to reset your password.</p>
            <GenericButton title="Send Code" />
        </form>

    </div>

</template>
