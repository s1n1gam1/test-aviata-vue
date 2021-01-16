import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import MainIndex from "../pages/main/Index"

let routes = [
    {
        path:'/',
        name:'mainroute',
        component:MainIndex
    },
]

const router  = new VueRouter({
    mode: 'history',
    routes,
    
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
})

export default router