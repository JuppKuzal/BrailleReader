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
            component: index,
            meta: {
                title: 'The homepage of Braille Reader',
                metaTags: [
                    {
                    name: 'description',
                    content: 'An app to comfortably and quickly translate patterns from Braille to other languages. Come over and use it for free!'
                    }
                ]
            }
        },
        {
            path: '/about',
            name: 'about',
            component: about,
            meta: {
                title: 'The Braille Reader | About',
                metaTags: [
                    {
                    name: 'description',
                    content: 'An app to comfortably and quickly translate patterns from Braille to other languages. Come over and use it for free! - About'
                    }
                ]
            }
        }
    ]
})