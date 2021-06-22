import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/Index'
import about from '@/pages/About'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta, {
    refreshOnceOnNavigation: true
})

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/about',
            name: 'about',
            component: about
        }
    ]
})