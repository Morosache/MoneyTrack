<script setup>
import { useRouter } from 'vue-router'
import GenericButton from '@/components/GenericButton.vue';
import PageTitle from '@/components/PageTitle.vue';

const router = useRouter()
const returnToLog = () => {
    router.push({ name: 'login' })
}

</script>

<template>
    <div class="w-screen h-screen flex flex-col justify-center items-center">
        <PageTitle title="The Password has been reset" />
        <GenericButton @click="returnToLog" title="Go back to Log In" />
    </div>
</template>