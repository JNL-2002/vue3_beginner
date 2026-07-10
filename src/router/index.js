import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import WelcomePage from '@/views/WelcomePage.vue'

const routers = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/welcome'
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/welcomee',
        name: 'Welcome',
        component: WelcomePage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routers
})

export default router;