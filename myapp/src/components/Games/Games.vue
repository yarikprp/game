<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card v-if="!loading">
          <v-card-media
            :src="games.imageSrc"
            height="300px"
          ></v-card-media>
          <v-card-text>
            <h1 class="text--primary">{{games.title}}</h1>
            <p>{{games.description}}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <addEditGamesModal :games="games" v-if="isOwner"></addEditGamesModal>
            <app-buy-modal :games="games"></app-buy-modal>
          </v-card-actions>
        </v-card>
        <div v-else class="text-xs-center">
          <v-progress-circular
            indeterminate
            :size="100"
            :width="4"
            color="purple"
          ></v-progress-circular>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EditGamesModal from './EditGamesModal'

export default {
  props: ['id'],
  computed: {
    games () {
      const id = this.id
      return this.$store.getters.gameById(id)
    },
    loading () {
      return this.$store.getters.loading
    },
    isOwner () {
      return this.games && this.games.ownerId === this.$store.getters.user.id
    }
  },
  components: {
    addEditGamesModal: EditGamesModal
  }
}
</script>
