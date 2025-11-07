import {createRouter, createWebHashHistory} from 'vue-router'

import LogIn from '../pages/LogIn.vue'
import Register from '../pages/Register.vue'
import ForgotYourPassword from '../pages/ForgotYourPassword.vue'
import EnterCode from '../pages/EnterCode.vue'

const routes = [
        {path: '/login', redirect:'/login', name: 'login', component: LogIn },
        {path:'/register', name:'register', component: Register},
        {path:'/forgot-your-password', name:'forgot-password', component: ForgotYourPassword},
        {path:'/enter-code', name:'enter-code', component:EnterCode},
        { path: '/:pathMatch(.*)*', redirect: '/login' }
    ]

    const router = createRouter({
        history: createWebHashHistory(),
        routes
    })

    export default router