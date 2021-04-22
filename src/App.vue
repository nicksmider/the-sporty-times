<template>
  <div id="app">
    <div class="mx-6 md:mx-12 lg:mx-16 xl:mx-28">
      <NavigationBar />
      <TopicBar />
      <router-view />
    </div>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import TopicBar from "./components/TopicBar";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    NavigationBar,
    TopicBar
  },
  created() {
    if (!this.loggedInUser) {
      const user = this.users[0];
      this.$store.commit("setUser", user);
    }
  },
  computed: {
    ...mapState(["loggedInUser", "users"])
  }
};
</script>

<style></style>
