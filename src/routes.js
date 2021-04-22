import HomePage from "./views/HomePage";
import PodcastPage from "./views/PodcastPage";
import SwitchProfilePage from "./views/SwitchProfilePage";
export const routes = [
  { path: "/", component: HomePage },
  { path: "/podcasts", component: PodcastPage },
  { path: "/switch", component: SwitchProfilePage }
];
