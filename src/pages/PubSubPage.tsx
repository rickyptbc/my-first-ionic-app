import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { publish } from "@ionic/portals";

const PubSubPage: React.FC = () => {
  const [textLog, setTextLog] = useState("Logs will appear here");
  const [inputTopic, setInputTopic] = useState("");
  const [inputMsg, setInputMsg] = useState("");

  const handlePublishBtn = () => {
    const logMessage = `Published topic('${inputTopic}'), Msg('${inputMsg}')`;
    publish({
      topic: inputTopic,
      data: { message: inputMsg },
    })
      .then(() => {
        setTextLog(logMessage); // Update textLog with the published message
      })
      .catch((error) => {
        console.error("Error publishing message:", error);
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PubSub Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <IonInput
              type="text"
              label="Topic"
              labelPlacement="stacked"
              placeholder="Topic"
              fill="outline"
              value={inputTopic}
              onIonChange={(e) => setInputTopic(e.detail.value!)}
            />

            <IonInput
              className="ion-margin-top"
              type="text"
              label="Message"
              labelPlacement="stacked"
              placeholder="Message"
              fill="outline"
              value={inputMsg}
              onIonChange={(e) => setInputMsg(e.detail.value!)}
            />

            <IonButton
              expand="block"
              className="ion-margin-top ion-margin-bottom"
              onClick={handlePublishBtn}
            >
              Publish
            </IonButton>

            <p>{textLog}</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PubSubPage;
