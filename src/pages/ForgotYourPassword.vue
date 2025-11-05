<script setup>
import { ref } from 'vue'
import GoBackButton from '@/components/GoBackButton.vue';
import GenericButton from '@/components/GenericButton.vue';
import EmailInput from '@/components/EmailInput.vue';

const email = '';

const handleClick = () => {
    alert('code sent')
}
</script>

<template>
    <GoBackButton to="/login" title="Go back to Log In"/>

    <div class="flex flex-col justify-center items-center mt-[150px] h-full w-full ">
        <div class="mb-[15px]">
            <h1 class="text-[40px] font-semibold">Forgot your Password?</h1>
        </div>
        <form @submit.prevent='handleClick' class="flex flex-col">

            <div>
                <label for="email" class="block font-medium mb-2">Enter your email</label>
                <EmailInput />
            </div>
            
            <p class="text-[12px] ml-[2px] ">We will send you a code to reset your password.</p>
            <GenericButton title="Send Code" />

        </form>

    </div>

</template>
