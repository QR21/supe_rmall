import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'




Vue.use({
    preLoad: 1,
    loading: require('assets/img/common/placeholder.png')
})

Vue.use(toast)

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')