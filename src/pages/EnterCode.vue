<script setup>
import GenericButton from '@/components/GenericButton.vue';
import GoBackButton from '@/components/GoBackButton.vue';
import { ref, nextTick } from 'vue'

const code = ref(['', '', '', '', '', ''])

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

</script>

<template>
    <GoBackButton to="/login" title="Go Back to Log In" />
    <div class="flex flex-col justify-center items-center mt-[150px] h-full w-full ">

        <div class="mb-[15px]">
            <h1 class="text-[40px] font-semibold">Enter the code</h1>
        </div>

        <div class="flex gap-2">
            <input v-for="(c, i) in code" :key="i" :id="`code-${i}`" type="text" maxlength="1"
                class="w-12 h-12 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                :value="c" @input="onInput(i, $event)" />
        </div>

        <GenericButton title="Validate code" />

        <a href="#" class=" font-medium text-[12px]">Did not recieve the code? Send again.</a>

    </div>


</template>