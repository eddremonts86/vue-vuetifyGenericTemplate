import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress';

import Home from './views/Home.vue'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/visual_config',
            name: 'visual configurations',
            component: () => import('@/components/visualConfiguration/visualConfiguration.vue')
        },
        {
            path: '/it_example',
            name: 'IT examples',
            component: () => import('@/components/uiExample/interations.vue')
        }
    ]
});

router.beforeEach((routeTo, routeFrom, next) => {
    NProgress.start();
    next()
});

router.afterEach(() => {
    NProgress.done();
});

export default router;