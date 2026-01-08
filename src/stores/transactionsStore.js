import {defineStore} from 'pinia'

export const useTransaction = defineStore('transaction', {
    state: () => ({
        transactions: [],
    }),

    actions: {

        addTransaction(transaction) {
            this.transactions.push(transaction)
        },

        removeTransaction(id) {
            this.transactions.splice(this.transactions.findIndex(transactions => transactions.id ===  id), 1)
        },

        editTransaction(id, updatedTransaction) {
            const index = this.transactions.findIndex(transactions => transactions.id === id);
            if(index != -1) {
                this.transactions[index] = {...updatedTransaction, id}
            }
        },

        }
    }
)