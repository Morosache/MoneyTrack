<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const hardEmail = 'elisei.morosan@emanuel.ro'
const hardPass =  'salut'
const handleLogIn = () => {
    if(email.value === hardEmail && password.value === hardPass) {
        alert('Login reusit')
    } else {
        alert('Email sau parola incorecta!')
    }
}

</script>

<template>
    
    <div class="flex flex-col items-center mt-[30px] h-screen w-screen ">
        <img src="/public/logo.png" alt="logo" class="w-[250px] h-[175px]"></img>
        <h1 class="text-[40px] font-semibold mb-[20px]">Log in</h1>
        <form @submit.pervent="handleLogIn" class="flex flex-col">
            <div>
                <label for="email" class="block font-medium mb-2">Email</label>
                <input type="email" id="email" v-model="email" class="w-[400px] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
            </div>
            <div>
                <label for="password" class="block font-medium mb-2">Password</label>
                <input type="password" id="password" v-model="password" class="w-[400px] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
            </div>
            <div class="flex justify-between mt-[5px]">
                 <a href="#" class="text-[12px] text-[#56d788]">New user? Create an account</a>
                 <a href="#" class="text-[12px] text-[#56d788]">Forgot yor Password? Reset it</a>
            </div>
            <button type="submit" class="py-[5px] my-[30px] bg-[#56d788] rounded-[7px] font-medium">Log In</button>
           
        </form>
       
    </div>
</template>

<style scoped>
 </style>