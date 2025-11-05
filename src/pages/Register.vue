<script setup>
import { ref } from 'vue'
import GoBackButton from '@/components/GoBackButton.vue';
import GenericButton from '@/components/GenericButton.vue';

const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const hardEmail = 'elisei.morosan@emanuel.ro'
const hardPass = 'salut'

const handleLogIn = () => {
    if (email.value === hardEmail && password.value === hardPass && confirmPassword.value === hardPass) {
        alert('Registration succesful')
    } else if (password.value !== confirmPassword.value) {
        alert('Passwords not matching')
    }
}
</script>

<template>
    <GoBackButton />
    <div class="flex flex-col items-center mt-[150px] h-full w-full ">
        <h1 class="text-[40px] font-semibold mb-[20px]">Register New User</h1>
        <form @submit.pervent="handleLogIn" class="flex flex-col">
            <div>
                <label for="email" class="block font-medium mb-2">Email</label>
                <input type="email" id="email" v-model="email" placeholder="Email"
                    class="w-[400px] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
            </div>
            <div>
                <label for="password" class="block font-medium mb-2">Password</label>
                <input type="password" id="password" v-model="password" placeholder="Password"
                    class="w-[400px] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
            </div>
            <div>
                <label for="password" class="block font-medium mb-2">Confirm your password</label>
                <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="Enter your password again"
                    class="w-[400px] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
            </div>
            <div class="flex justify-end mt-[5px]">
                <a href="#" class="text-[12px] text-[#56d788]">Already have an account? Log in</a>
            </div>
            <GenericButton title="Register" />
        </form>

    </div>
</template>

<style scoped></style>