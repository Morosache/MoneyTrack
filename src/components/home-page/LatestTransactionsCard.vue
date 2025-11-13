<script setup>
import { History } from 'lucide-vue-next';
import TransactionCard from './TransactionCard.vue';

const cards = [
    { title: 'Ciocolata', category: 'Mancare', date: new Date(), price: 2.99, wish: 'Wish' },
    { title: 'Papuci', category: 'Haine', date: new Date(), price: 120.99, wish: 'Need'},
    { title: 'Pasta de dinti', category: 'Igiena', date: new Date(), price: 4.29, wish: 'Need'},

]

</script>

<template>
    <div class="bg-white w-[550px] rounded-[10px]" id="latest-transaction">

        <div class="flex flex-row justify-between items-center h-[40px]" id="transaction-card-upper">
            <span class="font-semibold ml-[30px] text-[15px]">Latest Transactions</span>
            <router-link to="/transactions-page">
                <History class="mr-[30px] w-[20px] h-[20px]" />
            </router-link>
        </div>

        <div class="grid grid-cols-6 px-8 py-2 gap-3">
                <p>Date</p>
                <p>Name</p>
                <p>Price</p>
                <p>Category</p>
                <p>Need/Wish</p>
        </div>


            <div class="flex flex-col " >
                <TransactionCard v-for="(card, index) in cards" :key="index" :title="card.title"
                    :category="card.category" :date="card.date" :price="card.price" :wish="card.wish" />
            </div>
    </div>
</template>

<style scoped>
#latest-transaction {
    border: 1px solid rgb(219, 216, 216);
}

#transaction-card-upper {
    border-bottom: 1px solid rgb(219, 216, 216);
}

p {
    font-size: 12px;
}
</style>