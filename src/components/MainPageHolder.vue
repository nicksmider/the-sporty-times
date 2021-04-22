<template>
  <div>
    <div class="my-4 flex flex row">
      <div>
        <div class="text-md font-bold	">
          {{ this.day }}
        </div>
        <div class="text-xs">
          {{ this.date }}
        </div>
      </div>
      <div
        class="self-end h-16 lg:h-8 text-xs	flex flex-wrap  justify-end w-full z-20 text-gray-600 hover:text-gray-900"
      >
        <div
          v-for="item of followingItems"
          :key="item.url + item.name"
          class="pl-12 pt-1 cursor-pointer"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <hr class="mb-6" />
    <div class="flex flex-wrap sm:flex-no-wrap justify-between">
      <div class="w-full sm:w-1/2 bg-white">
        <div class="flex flex-col justify-center mr-6">
          <img class="max-w-2xl" src="../assets/neil-walker.png" />
          <div class="text-xl mt-2">
            Neil Walker retires after 12 years
          </div>
          <div class="text-sm text-gray-600">
            The former Pirate hangs up his cleats to enjoy retirement.
          </div>
          <div class="text-xs text-gray-500 my-3">
            <span class="">Nicholas Smider</span>
            <span class="mx-2">
              <font-awesome-icon style="font-size:0.5rem" icon="comment-alt" />
            </span>
            <span>
              2
            </span>
          </div>
        </div>
      </div>
      <div class="sm:w-1/2 h-64 bg-white text-sm h-80">
        <div class="flex flex-row">
          <div class="vl-1"></div>
          <div class="w-full">
            <span>
              HEADLINES
            </span>
            <div
              v-for="headline of headlines"
              :key="headline"
              class="list-inside list-custom text-xs"
            >
              <div class="flex flex-row mt-2">
                <div>
                  <font-awesome-icon style="font-size:0.5rem" icon="square" />
                </div>
                <div class="ml-2 mb-2">{{ headline }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-6" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MainPageHolder",
  data() {
    return {
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      day: "",
      date: new Date().toLocaleDateString(),
      headlines: [
        "Hawk's Trae Young suffers ankle sprain; X-rays negative",
        "Wizards rookie Deni Avdija exits in wheelchair after ankle injury vs Warriors",
        "A's extend winning streak to 11 games with extra innings win against Twins",
        "Padres' Dinelson Lamet pulled from first start with right forearm tightness",
        "Increased video review, expanded jersey numbers among NFL rule changes approved"
      ]
    };
  },
  created() {
    this.day = this.days[new Date().getDay()];
  },
  computed: {
    ...mapState(["followingItems"])
  }
};
</script>
<style scoped>
.vl {
  border-left: 1px solid rgba(229, 231, 235, var(--tw-bg-opacity));
  height: 20rem;
  margin-right: 1rem;
  margin-left: 1rem;
}
.list-custom {
  list-style-type: square;
}
@media only screen and (min-width: 635px) {
  .vl-1 {
    border-left: 1px solid rgba(229, 231, 235, var(--tw-bg-opacity));
    height: 20rem;
    margin-right: 1rem;
    margin-left: 1rem;
  }
}
</style>
