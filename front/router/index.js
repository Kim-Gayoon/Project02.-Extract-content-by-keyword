import {createRouter, createWebHistory} from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/', 
            component: Home
        },
        {
            path:'/about',
            component: () => import('../views/About.vue')
        }
    ]
})

export default router;