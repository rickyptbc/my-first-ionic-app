import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import HomePage from "./pages/HomePage";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ActionSheetPage from "./pages/ActionSheetPage";
import { LIST_PAGES } from "./routes";

interface AppProps {
  context: {
    startingRoute: string;
  };
}

setupIonicReact();
const App: React.FC<AppProps> = ({ context }) => {
  console.log(context);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          {context?.startingRoute ? (
            <Redirect to={context.startingRoute} />
          ) : (
            <Redirect to="/" />
          )}
          <Route component={LoginPage} exact path="/" />
          <Route component={RegisterPage} exact path="/register" />
          <Route component={HomePage} path="/home" />
          {LIST_PAGES.map((item, index) => (
            <Route key={index} component={item.component} path={item.route} />
          ))}
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

// const App: React.FC = () => (
//   <IonApp>
//     <IonReactRouter>
//       <IonTabs>
//         <IonRouterOutlet>
//           <Route exact path="/tab1">
//             <Tab1 />
//           </Route>
//           <Route exact path="/tab2">
//             <Tab2 />
//           </Route>
//           <Route path="/tab3">
//             <Tab3 />
//           </Route>
//           <Route exact path="/">
//             <Redirect to="/tab1" />
//           </Route>
//         </IonRouterOutlet>
//         <IonTabBar slot="bottom">
//           <IonTabButton tab="tab1" href="/tab1">
//             <IonIcon aria-hidden="true" icon={triangle} />
//             <IonLabel>Login</IonLabel>
//           </IonTabButton>
//           <IonTabButton tab="tab2" href="/tab2">
//             <IonIcon aria-hidden="true" icon={ellipse} />
//             <IonLabel>API Call</IonLabel>
//           </IonTabButton>
//           <IonTabButton tab="tab3" href="/tab3">
//             <IonIcon aria-hidden="true" icon={square} />
//             <IonLabel>Tab 3</IonLabel>
//           </IonTabButton>
//         </IonTabBar>
//       </IonTabs>
//     </IonReactRouter>
//   </IonApp>
// );

export default App;
