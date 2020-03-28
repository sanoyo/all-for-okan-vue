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
            松田聖子のコンサートの日程はいつですか？
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
            下記は松田聖子さんのオフィシャルサイトです。
            https://www.seikomatsuda.co.jp/<br>
            こちらは今年のコンサートの日程表です。
            https://www.seikomatsuda.co.jp/info/concert<br>

            ここを参考にすると、6月、8月、9月、10月にコンサートがあるようです。
          </v-card-text>
        </v-card>
        <br>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  created() {
    const question = this.$store.getters.getQuestionById(this.$route.params.question_id)
    console.log(this.$store)
    console.log(question)
  },
  data () {
    return {
      question: {}
    }
  },
}
</script>
