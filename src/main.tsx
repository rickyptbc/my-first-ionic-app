import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { getInitialContext } from "@ionic/portals";

const oriInitConx = getInitialContext<{ startingRoute: string }>()?.value;
// const oriInitConx = { startingRoute: "/feature-action-sheet" };
// const oriInitConx = { startingRoute: "/pubsub" };

// const initialContext = oriInitConx ?? { startingRoute: "/" };

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App context={oriInitConx} />);
