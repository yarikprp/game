import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as fb from 'firebase'

Vue.use(Vuetify)

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
      projectId: 'itsi-d7b5f',
      storageBucket: 'itsi-d7b5f.appspot.com',
      messagingSenderId: '492925303666',
      appId: '1:492925303666:web:f38342e050292a0c19fbeb',
      measurementId: 'G-XVKPS40VY2'
    })
  }
})
