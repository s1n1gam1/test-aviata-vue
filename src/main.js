import Vue from 'vue'
import App from './App.vue'

// main elements
import router from './router/index'
import store from './store/index'

// components
import Btn from './components/ui/Btn'
import Input from './components/ui/Input'

Vue.component('btn', Btn)
Vue.component('cinput', Input)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
