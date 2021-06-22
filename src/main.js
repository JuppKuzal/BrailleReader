import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './vuex/store'
import titleMixin from './mixins/titleMixin'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false
Vue.mixin(titleMixin)
Vue.use(VueMeta, {
  keyName: 'head'
})

new Vue({
  el: '#app',
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
