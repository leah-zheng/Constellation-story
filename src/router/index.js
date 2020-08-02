import { createRouter, createWebHistory } from 'vue-router';
import todayPage from '@/views/today'

const routes = [{
        path: '/',
        name: 'today',
        conponent: todayPage,
    },
    {
        path: '/tomorrow',
        name: 'tomorrow',
        conponent: () =>
            import ('../views/tomorrow.vue'),
    },
    {
        path: '/week',
        name: 'week',
        conponent: () =>
            import ('../views/week.vue'),
    },
    {
        path: '/mouth',
        name: 'mouth',
        conponent: () =>
            import ('../views/mouth.vue')
    },
    {
        path: '/year',
        name: 'year',
        conponent: () =>
            import ('../views/year.vue')
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router