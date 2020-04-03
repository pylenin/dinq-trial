import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueSession from 'vue-session'

Vue.use(Vuetify)
Vue.use(VueSession)

Vue.config.productionTip = false
var SocialSharing = require('vue-social-sharing');
 
Vue.use(SocialSharing);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
