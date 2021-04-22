import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import App from './App.vue'
import 'tailwindcss/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faPodcast, faSquare, faCommentAlt } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { routes } from './routes'
library.add(faPodcast)
library.add(faSquare)
library.add(faCommentAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
});

const store = new Vuex.Store({
  state: {
    loggedInUser: null,
    followingItems: [],
    users: [
      {
        name: 'Nick', followingItems: [
          { url: '/', name: 'Pirates' },
          { url: '/', name: 'Steelers' },
          { url: '/', name: 'Pittsburgh FB' },
          { url: '/', name: 'Penguins' },
          { url: '/', name: 'NFL' },
        ],
      },
      {
        name: 'Rylee', followingItems: [
          { url: '/', name: 'Red Sox' },
          { url: '/', name: 'Celtics' },
          { url: '/', name: 'MLB' },
          { url: '/', name: 'NBA' },
        ],
      },
      {
        name: 'Dave', followingItems: [
          { url: '/', name: 'Pirates' },
          { url: '/', name: 'Steelers' },
          { url: '/', name: 'Penguins' },
        ],
      },
      {
        name: 'Mary', followingItems: [
          { url: '/', name: 'Golf' },
          { url: '/', name: 'Pirates' },
          { url: '/', name: 'MLB' },
        ],
      },
    ],
  },
  mutations: {
    setUser(state, user) {
      // mutate state
      state.loggedInUser = user.name;
      state.followingItems = user.followingItems;

    },
  },
  actions: {
  },
  plugins: [vuexLocal.plugin]
});

const router = new VueRouter({
  routes // short for `routes: routes`
});

Vue.use(VueRouter)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
