import * as fb from 'firebase'

class Games {
  constructor (title, description, ownerId, imageSrc = '', promo = false, id = null) {
    this.title = title
    this.description = description
    this.ownerId = ownerId
    this.imageSrc = imageSrc
    this.promo = promo
    this.id = id
  }
}

export default {
  state: {
    games: []
  },
  mutations: {
    createGames (state, payload) {
      state.games.push(payload)
    },
    loadGames (state, payload) {
      state.games = payload
    }
  },
  actions: {
    async createGames ({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)

      try {
        const newGames = new Games(
          payload.title,
          payload.description,
          getters.user.id,
          payload.imageSrc,
          payload.promo
        )

        const games = await fb.database().ref('games').push(newGames)

        commit('setLoading', false)
        commit('createGames', {
          ...newGames,
          id: games.key
        })
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    async fetchGames ({commit}) {
      commit('clearError')
      commit('setLoading', true)

      const resultGames = []

      try {
        const fbVal = await fb.database().ref('games').once('value')
        const games = fbVal.val()

        Object.keys(games).forEach(key => {
          const game = games[key]
          resultGames.push(
            new Games(game.title, game.description, game.ownerId, game.imageSrc, game.promo, key)
          )
        })

        commit('loadGames', resultGames)
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
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
