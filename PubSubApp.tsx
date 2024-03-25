// import React, { useEffect, useState } from "react";
// import { IonApp, IonRouterOutlet } from "@ionic/react";
// import { IonReactRouter } from "@ionic/react-router";
// import { Route } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import HomePage from "./pages/HomePage";
// import ActionSheetPage from "./pages/ActionSheetPage";

// const PubSubRouter: React.FC = () => {
//   const [currentPage, setCurrentPage] = useState<string>("");

//   useEffect(() => {
//     const subscription = PubSub.subscribe("pageChange", (page: string) => {
//       setCurrentPage(page);
//     });

//     return () => {
//       subscription.unsubscribe();
//     };
//   }, []);

//   const routes = [
//     { path: "/", component: LoginPage },
//     { path: "/register", component: RegisterPage },
//     { path: "/app", component: HomePage },
//     { path: "/feature-action-sheet", component: ActionSheetPage },
//   ];

//   return (
//     <IonApp>
//       <IonReactRouter>
//         <IonRouterOutlet>
//           {routes.map((route) => (
//             <Route
//               key={route.path}
//               exact
//               path={route.path}
//               render={() =>
//                 currentPage === route.path ? <route.component /> : null
//               }
//             />
//           ))}
//         </IonRouterOutlet>
//       </IonReactRouter>
//     </IonApp>
//   );
// };

// export default PubSubRouter;
