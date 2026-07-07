import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'

const routers = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routers
})

export default router;