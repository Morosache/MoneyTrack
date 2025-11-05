<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import GenericButton from '@/components/GenericButton.vue'
import PasswordInput from '@/components/PasswordInput.vue'
import EmailInput from '@/components/EmailInput.vue'

const email = ref('')
const password = ref('')
const errorMessage = ref('')

const hardEmail = 'elisei.morosan@emanuel.ro'
const hardPass = 'salut'

const router = useRouter();


const handleLogIn = () => {
    if (email.value === hardEmail && password.value === hardPass) {
        router.push({ name: 'register' })
    } else if (!email.value || !password.value) {
        errorMessage.value = 'Email and password cannot be empty'
    }
    else {
        errorMessage.value = 'Incorrect email or password'
    }
}
</script>

<template>

    <div class="flex flex-col items-center mt-[30px] h-full w-full ">
        <img src="/public/logo.png" alt="logo" class="w-[250px] h-[175px]"></img>
        <h1 class="text-[40px] font-semibold mb-[20px]">Log in</h1>

        <form @submit.prevent="handleLogIn" class="flex flex-col">

            <div>
                <div class="flex justify-between">
                    <label for="email" class="block font-medium mb-2">Email</label>
                    <div v-if="errorMessage" class="text-[12px] text-red-500 ">
                        {{ errorMessage }}
                    </div>
                </div>
                <EmailInput v-model="email" />
            </div>

            <div>
                <label for="password" class="block font-medium mb-2">Password</label>
                <PasswordInput v-model="password" />
            </div>

            <div class="flex justify-between mt-[5px]">
                <router-link to="register" class="text-[12px] font-medium">New user? Create an account</router-link>
                <router-link to="forgot-your-password" class="text-[12px] font-medium">Forgot yor Password? Reset it</router-link>
            </div>

            <GenericButton title="Log In" />

        </form>

    </div>

</template>

<style scoped></style>