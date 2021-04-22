<template>
  <div class="text-white">
    <div class="absolute h-full w-full bg-black left-0 -z-10"></div>
    <div class="pt-6 text-3xl">
      Listen to podcasts,
    </div>
    <div class="text-3xl">
      exclusively from The Sporty Times
    </div>
    <div class="text-gray-300 pt-6">
      Experience in-depth analysis and exclusive storytelling.
    </div>
    <div class="text-gray-300">
      Join the conversation across your teams, clubs and leagues.
    </div>
    <div class="text-3xl pt-12 pb-6">
      Recommended
    </div>

    <div class="flex flex-wrap">
      <div
        v-for="podcast of podcastItems"
        :key="podcast.name"
        class="mb-2 mr-3 rounded shadow text-center"
      >
        <div class="w-32 h-32 md:w-64 md:h-64 border-gray-400">
          <img class="rounded-2xl	" :src="podcast.src" />
        </div>
        <div
          class="w-32 md:w-64 h-16 bg-black flex flex-col justify-center items-center"
        >
          <div>{{ podcast.name }}</div>
          <div class="text-gray-600">{{ podcast.sport }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import baseballPic from "../assets/baseball.jpeg";
import basketballPic from "../assets/basketball.jpeg";
import footballPic from "../assets/football.png";
import piratesPic from "../assets/pirates.jpeg";

export default {
  name: "PodcastPage",
  components: {},
  data() {
    return {
      podcastItems: [
        { url: "/", name: "MLB Talk", sport: "MLB", src: baseballPic },
        { url: "/", name: "NBA Chatter", sport: "NBA", src: basketballPic },
        { url: "/", name: "Sports World Today", src: footballPic },
        { url: "/", name: "The Pirates Podcast", sport: "MLB", src: piratesPic }
      ]
    };
  }
};
</script>
<style scoped></style>
