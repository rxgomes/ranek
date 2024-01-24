import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductComponent from '@/components/ProductComponent.vue'
import LoginView from "@/views/LoginView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: "/product/:id",
        name: "product",
        component: ProductComponent,
        props: true
    },
    {
        path: "/login",
        name: "login",
        component: LoginView
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        return {top: 0, behavior: "smooth"}
    }
})

export default router
