import ActionSheetPage from "./pages/ActionSheetPage";
import CameraPage from "./pages/CameraPage";
import PubSubPage from "./pages/PubSubPage";
import RandomProfilePage from "./pages/RandomProfilePage";

export const LIST_PAGES = [
  {
    title: "Action Sheet",
    route: "/feature-action-sheet",
    component: ActionSheetPage,
  },
  {
    title: "Random Profile (API Call)",
    route: "/random-profile",
    component: RandomProfilePage,
  },
  {
    title: "Camera App",
    route: "/camera",
    component: CameraPage,
  },
  {
    title: "PubSub Test Page",
    route: "/pubsub",
    component: PubSubPage,
  },
];
