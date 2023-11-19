import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Games from '@/components/Games/Games'
import GamesList from '@/components/Games/GamesList'
import NewGames from '@/components/Games/NewGames'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Orders from '@/components/User/Orders'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/games/:id',
      name: 'games',
      component: Games
    },
    {
      path: '/list',
      name: 'list',
      component: GamesList
    },
    {
      path: '/new',
      name: 'NewGames',
      component: NewGames
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'reg',
      component: Registration
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    }
  ],
  mode: 'history'
})
