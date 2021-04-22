<template>
  <div>
    <div
      class="py-3 absolute w-full mx-0 left-0 -z-10 bg-custom-gray border-black border-t-2 border-b-0 flex flex-wrap text-custom-color"
    >
      <div
        v-for="item of followingItems"
        :key="item.url + item.name"
        class="pr-12 pt-1 shadow"
      >
        {{ item.name }}
      </div>
    </div>
    <div
      class="py-3 px-auto text-gray-300 text-sm	flex flex-wrap w-full bg-custom-gray border-black border-t-2 border-b-0 z-40"
    >
      <div
        v-for="item of followingItems"
        :key="item.url + item.name"
        class="pr-12 pt-1 shadow"
      >
        {{ item.name }}
      </div>
      <div class="ml-auto pt-1 shadow">
        <router-link to="/podcasts">
          <font-awesome-icon icon="podcast" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FollowingBar",
  data() {
    return {
      followingItems: [
        { url: "/", name: "Following" },
        { url: "/", name: "Real Time" },
        { url: "/", name: "NFL Draft" },
        { url: "/", name: "Cities" },
        { url: "/", name: "NHL" },
        { url: "/", name: "MLB" },
        { url: "/", name: "NFL" },
        { url: "/", name: "NBA" }
      ]
    };
  }
};
</script>
<style scoped>
.text-custom-color {
  color: #181818;
}
</style>
