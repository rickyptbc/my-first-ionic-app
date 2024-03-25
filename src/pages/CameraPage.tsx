import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonImg,
} from "@ionic/react";
// import { Camera, CameraResultType } from "@capacitor/camera";
import React, { useState } from "react";

const CameraPage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  //   const takePicture = async () => {
  //     try {
  //       const image = await Camera.getPhoto({
  //         quality: 90,
  //         allowEditing: true,
  //         resultType: CameraResultType.Uri,
  //       });

  //       setImageUrl(image.webPath);
  //     } catch (error) {
  //       console.error("Error taking picture:", error);
  //     }
  //   };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Camera</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {imageUrl && <IonImg src={imageUrl} style={{ maxWidth: "100%" }} />}
        {!imageUrl && (
          <IonImg
            src={"https://placehold.co/600x400/EEE/31343C"}
            style={{ maxWidth: "100%" }}
          />
        )}

        <IonButton expand="block">Take a picture</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CameraPage;
