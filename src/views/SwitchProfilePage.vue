<template>
  <div class="flex flex-row flex-wrap justify-around my-64">
    <div
      class="my-2 cursor-pointer hover:bg-gray-100 rounded"
      v-for="user of users"
      :key="user.name"
      @click="setUser(user)"
    >
      <div
        class="h-32 w-32 mb-4 lg:mb-0 bg-gray-100 shadow-md flex justify-center items-center rounded-full"
      >
        <p class="text-gray-800 font-bold text-4xl">
          {{ user.name.charAt(0) }}
        </p>
      </div>
      <div class="my-2 w-full text-center">
        {{ user.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SwitchProfilePage",
  components: {},
  computed: {
    ...mapState(["users"])
  },
  methods: {
    setUser(user) {
      this.$store.commit("setUser", user);
      this.$router.go(-1);
    }
  }
};
</script>
