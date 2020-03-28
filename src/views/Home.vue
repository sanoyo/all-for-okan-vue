<template>
  <v-container text-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>全国のおかん質問してや</h1>
        <p>おかんの知りたいことを検索してください</p>
        <!-- TODO: v-model="search" を追加する -->
        <v-text-field
          append-icon="mdi-magnify"
          label="検索"
          sigle-line
        />
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs12 mt-5>
        <v-card
          class="pa-md-5 mx-lg-auto"
          color="white"
          width="500px"
        >
          <v-card-title>質問</v-card-title>
          <v-card-text>
            松田聖子のライブはどうやったらみれますか？
          </v-card-text>
        </v-card>
        <br>
        <v-card
          class="pa-md-4 mx-lg-auto"
          color="white"
          width="500px"
        >
          <v-card-title>質問</v-card-title>
          <v-card-text>
            としちゃんんが出ている番組の一覧を見たいんだけど
          </v-card-text>
        </v-card>
        <br>
        <v-card
          class="pa-md-4 mx-lg-auto"
          color="white"
          width="500px"
        >
          <v-card-title>質問</v-card-title>
          <v-card-text>
            AmebaTVの接続方法を教えてください
          </v-card-text>
        </v-card>
        <br>
      </v-flex>
      <v-flex xs12 mt-5>
        <v-btn color='info' @click="login">Googleアカウントでログイン</v-btn>
      </v-flex>
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
