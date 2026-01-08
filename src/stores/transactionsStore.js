import {defineStore} from 'pinia'

export const useTransaction = defineStore('transaction', {
    state: () => ({
        transactions: [],
        nextId: 1,
    }),

    actions: {

        addTransaction(transaction) {
            this.transactions.push({
                ...transaction,
                id: this.nextId++
            })
            console.log(transaction)
        },

        removeTransaction(id) {
            this.transactions = this.transactions.filter(transaction => transaction.id !== id)
        },

        editTransaction(id, updatedTransaction) {
            const index = this.transactions.findIndex(transaction => transaction.id === id);
            if(index != -1) {
                this.transactions[index] = {...updatedTransaction, id}
            }
        },

        }
    }
)