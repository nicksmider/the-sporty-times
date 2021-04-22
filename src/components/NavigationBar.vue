<template>
  <div>
    <!-- Navigation starts -->
    <div class="h-16 absolute w-full bg-custom-gray mx-0 left-0 z-0"></div>
    <nav class="h-16 w-full mx-auto bg-custom-gray border-b border-gray-900 shadow relative z-20 text-white">
      <div class="container h-16 flex items-center justify-between mx-auto">
        <div class="flex items-center">
          <div class="rounded-full relative py-3 pr-3 flex justify-end text-white">
            <input
              type="text"
              class="bg-white rounded text-black z-40 h-6 focus:outline-none text-xs w-0 transition duration-150 ease-in-out absolute left-0"
              placeholder="Type something..."
            />
            <svg
              @click="searchHandler($event)"
              :xmlns="xmlns"
              class="cursor-pointer icon icon-tabler icon-tabler-search"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
              ></path>
              <circle
                cx="10"
                cy="10"
                r="7"
              ></circle>
              <line
                x1="21"
                y1="21"
                x2="15"
                y2="15"
              ></line>
            </svg>
          </div>
          <div class="">{{loggedInUser}}</div>
          <div
            aria-haspopup="true"
            class="cursor-pointer h-full sm:flex items-center justify-end hidden relative"
            @click="dropdownHandler($event)"
          >

            <ul class="p-2 w-40 border-r bg-white rounded z-40 absolute shadow hidden custom-drop">
              <div class="arrow-up arrow-drop absolute"></div>
              <li
                v-for="item in dropDownItems"
                :key="item.url + item.name"
                class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
              >

                <router-link
                  :to="item.url"
                  class="ml-2"
                > {{item.name}} </router-link>

              </li>
            </ul>
            <div class="text-gray-600 pl-2">
              <svg
                :xmlns="xmlns"
                class="icon icon-tabler"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                />
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>
        <ul class="flex items-center justify-center h-full">
          <li class="mx-0 xl:mx-12 cursor-pointer text-white text-2xl">
            <router-link to="/">The Sporty Times</router-link>
          </li>
        </ul>
        <div
          aria-haspopup="true"
          class="cursor-pointer h-full xl:flex items-center justify-end hidden relative"
          @click="dropdownHandler($event)"
        >
          <div class="bg-white mb-0 border border-gray-300 h-8 w-24 rounded-full flex items-center justify-center">
            <span class="text-xs text-gray-800 font-normal">Invite Friends</span>
          </div>
        </div>
        <div class="visible xl:hidden flex items-center text-white">
          <ul class="p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 hidden">
            <li class="flex xl:hidden cursor-pointer text-gray-600 text-base leading-3 tracking-normal mt-2 py-3 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none">
              <div class="flex items-center">
                <span class="leading-6 ml-2 font-bold"> Content Menu </span>
              </div>
            </li>
          </ul>
          <svg
            @click="MenuHandler($event, true)"
            aria-haspopup="true"
            aria-label="Main Menu"
            :xmlns="xmlns"
            class="show-m-menu icon icon-tabler icon-tabler-menu"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
            ></path>
            <line
              x1="4"
              y1="8"
              x2="20"
              y2="8"
            ></line>
            <line
              x1="4"
              y1="16"
              x2="20"
              y2="16"
            ></line>
          </svg>
          <div
            class="hidden close-m-menu"
            @click="MenuHandler($event, false)"
          >
            <svg
              aria-label="Close"
              :xmlns="xmlns"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
              />
              <line
                x1="18"
                y1="6"
                x2="6"
                y2="18"
              />
              <line
                x1="6"
                y1="6"
                x2="18"
                y2="18"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
    <!-- Navigation ends -->
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "NavigationBar",
  data() {
    return {
      xmlns: "http://www.w3.org/2000/svg",
      menuOpen: false,
      dropDownItems: [
        { url: '/', name: 'Your Account' },
        { url: '/switch', name: 'Switch Profiles' },
        { url: '/', name: 'Saved Stories' },
        { url: '/', name: 'Manage Feed' },
        { url: '/', name: 'Log Out' },
      ]
    };
  },
  computed: {
    ...mapState([
      'loggedInUser'
    ])
  },
  methods: {
    dropdownHandler(event) {
      let single = event.currentTarget.getElementsByTagName("ul")[0];
      single.classList.toggle("hidden");
    },
    MenuHandler(el, val) {
      this.menuOpen = val;
      let MainList = el.currentTarget.parentElement.getElementsByTagName("ul")[0];
      let closeIcon = el.currentTarget.parentElement.getElementsByClassName("close-m-menu")[0];
      let showIcon = el.currentTarget.parentElement.getElementsByClassName("show-m-menu")[0];
      if (val) {
        MainList.classList.remove("hidden");
        el.currentTarget.classList.add("hidden");
        closeIcon.classList.remove("hidden");
      } else {
        showIcon.classList.remove("hidden");
        MainList.classList.add("hidden");
        el.currentTarget.classList.add("hidden");
      }
    },
  },
};
</script>
<style scoped>
.custom-drop {
  left: -2.5rem;
  top: 2.75rem;
}
.arrow-drop {
  left: 0.75rem;
  top: -0.5rem;
}
.arrow-up {
  width: 0;
  height: 0;
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;

  border-bottom: 0.5rem solid white;
}
</style>
<style>
.bg-custom-gray {
  background-color: #181818;
}
</style>