<template>
  <v-app>
    <v-app-bar app class="lighten-5"> </v-app-bar>

    <v-content>
      <v-container fluid fill-height align-start>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase";
import { mapActions } from "vuex";

export default {
  name: "App",
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setLoginUser(user);
        this.fetchAddresses();
        if (this.$router.currentRoute.name === "home") {
          this.$router.push({ name: "addresses" }, () => {});
        }
      } else {
        this.deleteLoginUser();
        // questions ページ実装のため、一時的にコメントアウト
        // this.$router.push({ name: 'home' }, () => {})
      }
    });
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions([
      "toggleSideMenu",
      "setLoginUser",
      "logout",
      "deleteLoginUser",
      "fetchAddresses",
    ]),
  },
};
</script>
<style>
</style>