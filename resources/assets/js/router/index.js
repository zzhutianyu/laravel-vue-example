/**
 * Created by zhuxingzhao on 2017/8/11.
 */
import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import Ex from '../components/Example.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Hello',
        component: Ex
    }
    ]
})