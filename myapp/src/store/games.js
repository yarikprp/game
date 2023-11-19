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

      const image = payload.image

      try {
        const newGames = new Games(
          payload.title,
          payload.description,
          getters.user.id,
          '',
          payload.promo
        )

        const games = await fb.database().ref('games').push(newGames)
        const imageExt = image.name.slice(image.name.lastIndexOf('.'))

        const fileData = await fb.storage().ref(`games/${games.key}.${imageExt}`).put(image)
        const imageSrc = fileData.metadata.downloadURLs[0]

        await fb.database().ref('games').child(games.key).update({
          imageSrc
        })

        commit('setLoading', false)
        commit('createGames', {
          ...newGames,
          id: games.key,
          imageSrc
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
    gameById: (state) => (gameId) => {
      return state.games.find(game => game.id === gameId)
    }
  }
}
