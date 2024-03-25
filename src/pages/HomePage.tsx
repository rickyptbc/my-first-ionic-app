import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonDatetimeButton,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToast,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import "./Tab1.css";
import { LIST_PAGES } from "../routes";

const HomePage: React.FC = () => {
  const router = useIonRouter();

  const handleClick = (id: number) => {
    console.log(`Item with ID ${id} clicked`);
    const route = LIST_PAGES[id].route;
    if (route) {
      router.push(route);
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>Pick a feature:</IonCardHeader>
          <IonCardContent>
            <IonList>
              {LIST_PAGES.map((item, index) => (
                <IonItem key={index} button onClick={() => handleClick(index)}>
                  <IonLabel>{item.title}</IonLabel>
                </IonItem>
              ))}
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonToast></IonToast>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
