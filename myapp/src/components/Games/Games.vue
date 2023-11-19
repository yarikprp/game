<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-media
            :src="games.ImageSrs"
            height="300px"
          ></v-card-media>
          <v-card-text>
            <h1 class="text--primary">{{ games.title }}</h1>
            <p>{{ games.description }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="warning" flat>Edit</v-btn>
            <v-btn class="success">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      games () {
        const id = this.id
        return this.$store.getters.gamesId(id)
      }
    }
  }
</script>
