<template>
  <v-container text-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>全国のおかんの質問一覧</h1>
      </v-flex>
      <v-flex xs12 mt-5>
        <v-card
          class="pa-md-5 mx-lg-auto"
          color="white"
          width="500px"
        >
          <v-card-title>質問</v-card-title>
          <v-card-text>
            {{ questions[0].content }}
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
    this.fetchQuestions()
    this.questions = this.$store.state.questions
  },
  methods: {
    ...mapActions(['fetchQuestions'])
  }
}
</script>
