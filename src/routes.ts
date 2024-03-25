import ActionSheetPage from "./pages/ActionSheetPage";
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
];
