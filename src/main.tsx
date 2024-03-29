import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { getInitialContext } from "@ionic/portals";

const initialContext = getInitialContext<{ startingRoute: string }>()
  ?.value ?? { startingRoute: "/" };

// const initialContext = { startingRoute: "/" };

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  // <React.StrictMode>
  <App context={initialContext} />
  // </React.StrictMode>
);

// import { getInitialContext } from "@ionic/portals";

// const context = getInitialContext<{ startingRoute: string }>();

// ReactDOM.render(
//   <React.StrictMode>
//     <App context={context!.value} />
//     {/* context.value = { startingRoute: '/help' } */}
//   </React.StrictMode>,
//   document.getElementById("root")
// );
