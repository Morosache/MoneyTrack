<script setup>
import { ref } from 'vue'
import GenericButton from '../buttons/GenericButton.vue';

const emit = defineEmits(['submitForm'])

const incomeAmount = ref('')
const incomeCategory = ref('')
const incomeSource = ref('')
const incomeObservations = ref('')

const handleNewIncome = () => {
    if (!incomeAmount.value || !incomeCategory.value || !incomeSource.value) {
        alert("Fields cannot be empty!")
        return
    }

    emit('submitForm' , {
        id: Date.now(),
        amount: parseFloat(incomeAmount.value),
        category: incomeCategory.value,
        source: incomeSource.value,
        observations: incomeObservations.value,
    })

    incomeAmount.value = ''
    incomeCategory.value = ''
    incomeSource.value = ''
    incomeObservations.value = ''
}
</script>

<template>
    <div class="flex justify-center">
        <div class="w-[650px] h-[275px] bg-white mx-[30px] my-[30px] rounded-[10px]" id="add-budget-card">
            <h1 class="text-center text-[18px] font-semibold mt-3">New Income</h1>

            <form @submit.prevent="handleNewIncome" class="mx-[20px] my-[4px]">


                <div class="my-[5px] flex justify-center items-center flex-row gap-1">
                    <input type="number" placeholder="Amount" step=".01" id="income-amount-input" v-model="incomeAmount"
                        class="w-1/3 h-[45px] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none">

                    <select v-model="incomeCategory"
                        class="w-1/3 h-[45px] border border-gray-300 rounded-lg px-3 focus:outline-none text-gray-700">
                        <option disabled value="">Select Category</option>
                        <option value="Cash">Cash</option>
                        <option value="Card">Card</option>
                        <option value="Economies">Economies</option>
                    </select>

                    <select v-model="incomeSource"
                        class="w-1/3 h-[45px] border border-gray-300 rounded-lg px-3 focus:outline-none text-gray-700">
                        <option disabled value="">Select Source</option>
                        <option value="Salary">Salary</option>
                        <option value="Gift">Gift</option>
                        <option value="Investments">Investments</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <textarea placeholder="Observations" v-model="incomeObservations"
                    class="w-full h-[130px] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none text-gray-700 resize-none align-top"></textarea>
                <div class="w-full h-full flex justify-center mt-[10px]">

                    <GenericButton title="Add income"
                        customClass="w-[150px] px-[10px] py-[2px] bg-[#56d788] rounded-lg font-semibold" />
                </div>
            </form>
        </div>
    </div>

</template>

<style scoped>
#add-budget-card {
    border: 1px solid rgb(219, 216, 216);
}
</style>