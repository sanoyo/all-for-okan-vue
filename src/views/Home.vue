<template>
  <v-container text-center justify-center>
    <v-layout row wrap>
      <v-flex xs12 mt-6>
        おかんってどんなサイト？<br>
        おかん思いの息子が運営する掲示板です。みなさんの知りたいことを匿名で相談できます。
      </v-flex>
      <v-flex xs12 mt-6>
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
      <v-flex xs12 mt-6>
        <v-btn
          rounded
          outlined
          color="indigo"
          x-large
        >
        トピックを作成してみる
        </v-btn>
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
