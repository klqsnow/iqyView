import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

/*import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)*/


import Row from './component/pc/grid/row'
import Col from './component/pc/grid/col'
Vue.component(Col.name,Col)
Vue.component(Row.name,Row)

import Test from './component/pc/test'




Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path:'/pc/test', component: Test
        }
    ]
})

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
