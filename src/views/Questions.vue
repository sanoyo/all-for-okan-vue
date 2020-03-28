<template>
  <v-container text-center justify-center>
    <v-layout row wrap>
      <br>
      <v-flex xs12>
        <h1>全国のおかんの質問一覧</h1>
      </v-flex>

      <v-flex xs12 mt-5>
        <v-card
          class="pa-md-5 mx-lg-auto"
          color="white"
          width="500px"
          v-for="question in questions" :key="question.question"
        >
          <v-card-title>{{ question.title }}</v-card-title>
          <v-card-text>
            {{ question.content }}
          </v-card-text>
        </v-card>
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
  data() {
    return {
      questions: []
    }
  },
  methods: {
    ...mapActions(['fetchQuestions'])
  }
}
</script>
