<template>
  <v-container>
    <v-layout row v-if="!loading && myGames.length !== 0">
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My games</h1>

        <v-card
          class="elevation-10 mb-3"
          v-for="games in myGames"
          :key="games.id"
        >
          <v-layout row>
            <v-flex xs4>
              <v-card-media
                :src="games.imageSrc"
                height="160px"
              ></v-card-media>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="text--primary">{{games.title}}</h2>
                <p>{{games.description}}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  class="info"
                  :to="'/games/' + games.id"
                >Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout v-else-if="!loading && myGames.length === 0">
      <v-flex xs12 class="text-xs-center">
        <h1 class="text--primary">You have no games</h1>
      </v-flex>
    </v-layout>
    <v-layout v-else>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          :size="100"
          :width="4"
          color="purple"
        ></v-progress-circular>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      myGames () {
        return this.$store.getters.myGames
      },
      loading () {
        return this.$store.getters.loading
      }
    }
  }
</script>
