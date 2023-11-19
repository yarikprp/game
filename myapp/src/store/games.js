export default {
  state: {
    games: [
      {
        title: 'First ad',
        description: 'Hello i am description',
        promo: true,
        imageSrc: 'https://www.digiseller.ru/preview/913799/p1_3757622_1bec89f6.jpg',
        id: '123'
      },
      {
        title: 'Second ad',
        description: 'Hello i am description',
        promo: true,
        imageSrc: 'https://www.digiseller.ru/preview/913799/p1_3757622_1bec89f6.jpg',
        id: '1234'
      },
      {
        title: 'Third ad',
        description: 'Hello i am description',
        promo: true,
        imageSrc: 'https://www.digiseller.ru/preview/913799/p1_3757622_1bec89f6.jpg',
        id: '12345'
      }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.games.push(payload)
    }
  },
  actions: {
    createAd ({commit}, payload) {
      payload.id = 'qqwqweqweqw'

      commit('createAd', payload)
    }
  },
  getters: {
    games (state) {
      return state.games
    },
    promoGames (state) {
      return state.games.filter(games => {
        return games.promo
      })
    },
    myGames (state) {
      return state.games
    },
    gamesId (state) {
      return gamesId => {
        return state.games.find(games => games.id === gamesId)
      }
    }
  }
}
