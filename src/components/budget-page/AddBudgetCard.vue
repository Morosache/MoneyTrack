<script setup>
import GenericButton from '../buttons/GenericButton.vue';

const handleNewIncome = () => {
    alert("Income registered")
}

</script>

<template>
    <div class="flex justify-center">
        <div class="w-[650px] h-[275px] bg-white mx-[30px] my-[30px] rounded-[10px]" id="add-budget-card">
            <h1 class="text-center text-[18px] font-semibold mt-3">New Income</h1>
            <form @submit.prevent="handleNewIncome" class="mx-[20px] my-[4px]">
                <input type="text" placeholder="Income Name" id="income-name-input"
                    class="w-full h-[35px] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none">
                <div class="my-[5px] flex justify-center items-center flex-row gap-1">
                    <input type="number" placeholder="Amount" id="income-amount-input"
                        class="w-1/3 h-[35px] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none">

                    <select
                        class="w-1/3 h-[35px] border border-gray-300 rounded-lg px-3 focus:outline-none text-gray-700">
                        <option disabled value="">Select category</option>
                        <option value="cash">Cash</option>
                        <option value="card">Card</option>
                        <option value="economies">Economies</option>
                    </select>

                    <select
                        class="w-1/3 h-[35px] border border-gray-300 rounded-lg px-3 focus:outline-none text-gray-700">
                        <option disabled value="">Select source</option>
                        <option value="salary">Salary</option>
                        <option value="gift">Gift</option>
                        <option value="investments">Investments</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <textarea placeholder="Observations"
                    class="w-full h-[100px] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none text-gray-700 resize-none align-top"></textarea>
                <div class="w-full h-full flex justify-center mt-[10px]">
                    <GenericButton title="Add income" customClass="w-[150px] px-[10px] py-[2px] bg-[#56d788] rounded-lg font-semibold"  />
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