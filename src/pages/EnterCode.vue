<script setup>
import GenericButton from '@/components/GenericButton.vue';
import GoBackButton from '@/components/GoBackButton.vue';
import PageTitle from '@/components/PageTitle.vue';

import { ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'


const hardCode = ['0', '0', '0', '0', '0', '0']
const code = ref(['', '', '', '', '', ''])

const router = useRouter();


function onInput(index, event) {
    const val = event.target.value
    if (/^\d$/.test(val)) {
        code.value[index] = val
        if (index < code.value.length - 1) {
            nextTick(() => {
                document.getElementById(`code-${index + 1}`).focus()
            })
        }
    } else {
        code.value[index] = ''
    }
}

const validateCode = () => {
    if (code.value.join('') === hardCode.join('')) {
        router.push({ name: 'reset-succesful' })
    } else {
        alert("invalid code")
    }
}

</script>

<template>
    <GoBackButton to="/login" title="Go Back to Log In" />
    <div class="flex flex-col justify-center items-center mt-[150px] h-full w-full ">

        <div class="mb-[15px]">
            <PageTitle title="Enter Code" />
        </div>

        <div class="flex gap-2">
            <input v-for="(c, i) in code" :key="i" :id="`code-${i}`" type="text" maxlength="1"
                class="w-12 h-12 text-center border border-gray-300 rounded" :value="c" @input="onInput(i, $event)" />
        </div>

        <form @submit.prevent='validateCode'>
            <GenericButton title="Validate code" />
        </form>
        <router-link to='login' class=" font-medium text-[12px]">Did not recieve the code? Send again.</router-link>

    </div>


</template>