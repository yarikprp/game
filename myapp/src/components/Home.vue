<template>

  <div v-if="!loading">
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="game in promoGames"
              :key="game.id"
              :src="game.imageSrc"
            >
              <div class="game-link">
                <v-btn class="error" :to="'/games/' + game.id">{{ game.title }}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          v-for="games of games"
          :key="games.id"
        >
          <v-card>
            <v-card-media
              :src="games.imageSrc"
              height="200px"
            >
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{games.title}}</h3>
                <div>{{games.description}}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat :to="'/games/' + games.id">Open</v-btn>
              <app-buy-modal :game="games"></app-buy-modal>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  <div v-else>
    <v-container>
      <v-layout row>
        <v-flex xs12 class="text-xs-center pt-5">
          <v-progress-circular
            indeterminate
            :size="100"
            :width="4"
            color="purple"
          ></v-progress-circular>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    promoGames () {
      return this.$store.getters.promoGames
    },
    games () {
      return this.$store.getters.games
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style scoped>
  .game-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0, 0, 0, .5);
    transform: translate(-50%, 0);
    padding: 5px 15px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
</style>
