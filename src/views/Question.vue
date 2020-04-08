<template>
  <v-container text-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>質問文タイトル</h1>
      </v-flex>
      <v-flex xs12 mt-5>
        <v-card
          class="pa-md-5 mx-lg-auto"
          color="white"
          width="500px"
        >
          <v-card-text>
            {{ question }}
          </v-card-text>
        </v-card>
        <br>
      </v-flex>
      <v-flex xs12 mt-10>
        <v-card
          class="pa-md-12 mx-lg-auto"
          color="white"
          width="600px"
        >
          <v-card-text>
            {{ question }}
          </v-card-text>
        </v-card>
        <br>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created() {
    this.showQuestion({ id: this.$route.params.question_id })
    this.question = this.$store.state.question
  },
  data () {
    return {
      question: {}
    }
  },
  methods: {
    ...mapActions(['showQuestion'])
  }
}
</script>
