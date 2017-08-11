/**
 * Created by zhuxingzhao on 2017/8/11.
 */
import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import router from './router'
import vr from 'vue-resource'

Vue.use(vr)

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})