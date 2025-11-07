<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import GenericButton from '@/components/GenericButton.vue';
import PasswordInput from '@/components/PasswordInput.vue';
import PageTitle from '@/components/PageTitle.vue';

const newPassword = ref('')
const confirmNewPassword = ref('')
const errorMessage = ref('')

const router = useRouter();

const handleReset = () => {
    if (newPassword.value === confirmNewPassword.value && newPassword.value !== '' && confirmNewPassword.value !== '') router.push({ name: 'enter-code' })
    else if (!newPassword.value || !confirmNewPassword.value) errorMessage.value = 'Password field cannnot be empty'
    else errorMessage.value = 'Passwords not matching'
}
</script>

<template>
    <div class="w-screen h-screen flex flex-col items-center justify-center">
        <PageTitle title="Enter new password" />
        <form @submit.prevent="handleReset" class="flex flex-col">

            <div>
                <div class="flex flex-row justify-between">
                    <label for="newPassword" class="block font-medium mb-2">New Password</label>
                    <div v-if="errorMessage" class="text-[12px] text-red-500 ">
                        {{ errorMessage }}
                    </div>
                </div>
                <PasswordInput placeholder="New Password" id="newPassword" v-model="newPassword" />
            </div>

            <div>
                <label for="confirmNewPassword" class="block font-medium mb-2">Confirm new password</label>
                <PasswordInput placeholder="Confirm New Password" id="confirmNewPassword"
                    v-model="confirmNewPassword" />
            </div>

            <GenericButton title="Reset Password" class="px-[20px]" />

        </form>
    </div>
</template>