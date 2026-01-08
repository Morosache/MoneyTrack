import {defineStore} from 'pinia'

export const useIncome = defineStore('income', {
    state: () => ({
        incomes : [],
        nextId : 1,
    }),

    actions: ({
        addIncome(income) {
            this.incomes.push({
                ...income,
                id: this.nextId++
            })
        },

        removeIncome(id) {
            this.incomes = this.incomes.filter(income => income.id !== id)
        },
    })

})