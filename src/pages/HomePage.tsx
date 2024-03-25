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

const HomePage: React.FC = () => {
  const router = useIonRouter();

  const items = [
    { title: "Action Sheet", route: "/feature-action-sheet" },
    { title: "Item 2", route: "/item-2" },
    { title: "Item 3", route: "/item-3" },
    { title: "Item 4", route: "/item-4" },
    { title: "Item 5", route: "/item-5" },
  ];

  const handleClick = (id: number) => {
    console.log(`Item with ID ${id} clicked`);
    const route = items[id].route;
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
        {/* <ExploreContainer name="Home Page" /> */}
        <IonCard>
          <IonCardHeader>Pick a feature:</IonCardHeader>
          <IonCardContent>
            <IonList>
              {items.map((item, index) => (
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
