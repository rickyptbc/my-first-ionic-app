import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonActionSheet,
  useIonActionSheet,
} from "@ionic/react";
import React, { useState } from "react";

const ActionSheetPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [present] = useIonActionSheet();

  const handleActionSheet = () => {
    present({
      buttons: [
        {
          text: "Delete",
          role: "destructive",
          handler: () => {
            setSelectedOption("Delete");
          },
        },
        {
          text: "Open",
          handler: () => {
            setSelectedOption("Open");
          },
        },
        {
          text: "Share",
          handler: () => {
            setSelectedOption("Share");
          },
        },
        {
          text: "Cancel",
          role: "cancel",
        },
      ],
      header: "Pick an action",
      //   mode: "ios",
      onDidDismiss: () => console.log("Dismissed"),
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/app" />
          </IonButtons>
          <IonTitle>Action Sheet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="block" onClick={handleActionSheet}>
          Open Action Sheet
        </IonButton>
        <p>Option selected: {selectedOption}</p>
      </IonContent>
    </IonPage>
  );
};

export default ActionSheetPage;
