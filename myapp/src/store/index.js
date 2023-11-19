import Vue from 'vue'
import Vuex from 'vuex'
import games from './games'
import user from './user'
import shared from './shared'
import orders from './orders'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    games, user, shared, orders
  }
})
