<template>
  <v-container text-center justify-center>
    <v-layout row wrap>
      <v-spacer></v-spacer>
      <v-flex xs12 mt-5>
        <v-card
          class="pa-md-5 mx-lg-auto"
          color="white"
          width="500px"
        >
        <v-card-title>松田聖子のコンサートどうやったらみれますか</v-card-title>
        </v-card>
        <br>
        <v-card
          class="pa-md-4 mx-lg-auto"
          color="white"
          width="500px"
        >
          <v-card-title>としちゃんんが出ている番組の一覧を見たいんだけど</v-card-title>
        </v-card>
        <br>
        <v-card
          class="pa-md-4 mx-lg-auto"
          color="white"
          width="500px"
        >
          <v-card-title>AmebaTVの接続方法を教えてください</v-card-title>
        </v-card>
        <br>
      </v-flex>
      <!-- <v-flex xs12 mt-5>
        <v-btn color='info' @click="login">Googleアカウントでログイン</v-btn>
      </v-flex> -->
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['login'])
  }
}
</script>
