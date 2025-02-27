import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/DashboardLayout.vue'),
        children: [
            { path: '', component: () => import('pages/IndexPage.vue') },
            {
                path: 'tickets',
                component: () => import('pages/tickets/Index.vue'),
                name: 'index-tickets'
            }
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue')
    }
]

export default routes
