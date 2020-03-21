<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>マイアドレス帳</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <SideNav/>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import SideNav from './components/SideNav'

export default {
  name: 'App',
  components: {
    SideNav
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions(['toggleSideMenu'])
  }
};
</script>
