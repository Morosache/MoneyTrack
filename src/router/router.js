import {createRouter, createWebHashHistory} from 'vue-router'

import LogIn from '../pages/LogIn.vue'
import Register from '../pages/Register.vue'
import ForgotYourPassword from '../pages/ForgotYourPassword.vue'
import EnterCode from '../pages/EnterCode.vue'
import ResetPassword from '@/pages/ResetPassword.vue'
import ResetSuccesful from '@/pages/ResetSuccesful.vue'
import HomePage from '@/pages/HomePage.vue'
import BudgetPage from '@/pages/BudgetPage.vue'
import TransactionsPage from '@/pages/TransactionsPage.vue'
import StatisticsPage from '@/pages/StatisticsPage.vue'
import SettingsPage from '@/pages/SettingsPage.vue'


const routes = [
        {path:'/', redirect:'/login'},
        {path: '/login', name:'login', component: LogIn },
        {path:'/register', name:'register', component: Register},
        {path:'/forgot-your-password', name:'forgot-password', component: ForgotYourPassword},
        {path:'/enter-code', name:'enter-code', component: EnterCode},
        {path:'/reset-password', name:'reset-password', component: ResetPassword},
        {path:'/reset-succesful', name:'reset-succesful', component: ResetSuccesful},
        {path:'/home-page', name:'home-page', component: HomePage},
        {path:'/budget-page', name:'budget-page', component: BudgetPage},
        {path:'/transactions-page', name:'transactions-page', component: TransactionsPage},
        {path:'/statistics-page', name:'statistics-page', component: StatisticsPage},
        {path:'/settings-page', name:'settings-page', component: SettingsPage},
        { path: '/:pathMatch(.*)*', redirect: '/login' }
    ]

    const router = createRouter({
        history: createWebHashHistory('/ProiectFinal/'),
        routes
    })

    export default router