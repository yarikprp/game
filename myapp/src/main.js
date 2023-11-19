import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import BuyModalComponent from '@/components/Shared/BuyModal'
import 'vuetify/dist/vuetify.min.css'
import * as fb from 'firebase'

Vue.use(Vuetify)
Vue.component('app-buy-modal', BuyModalComponent)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyDL9CsbaZCM5REhzXH46m2Y2GhOyODDIME',
      authDomain: 'itsi-d7b5f.firebaseapp.com',
      databaseURL: 'https://itsi-d7b5f-default-rtdb.firebaseio.com/',
      projectId: 'itsi-d7b5f',
      storageBucket: 'gs://itsi-d7b5f.appspot.com',
      messagingSenderId: '492925303666',
      appId: '1:492925303666:web:f38342e050292a0c19fbeb',
      measurementId: 'G-XVKPS40VY2'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchGames')
  }
})
