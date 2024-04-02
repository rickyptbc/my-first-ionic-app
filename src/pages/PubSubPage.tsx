import React, { useState, useEffect } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { publish, subscribe } from "@ionic/portals";
import { PluginListenerHandle } from "@capacitor/core";

interface PortalMessageData {
  message: string;
}

const PubSubPage: React.FC = () => {
  const [textLog, setTextLog] = useState("Published Message will appear here");
  const [inputTopic, setInputTopic] = useState("");
  const [inputSubTopic, setInputSubTopic] = useState("");
  const [subscriptionHandle, setSubscriptionHandle] =
    useState<PluginListenerHandle>();
  const [inputMsg, setInputMsg] = useState("");
  const [currSubbedTopic, setCurrSubbedTopic] = useState("");
  const [receivedMessages, setReceivedMessages] = useState<any[]>([
    {
      timestamp: "2024-04-02",
      topic: "Dummy Topic 1",
      msg: "Dummy Message 1",
    },
  ]);

  const handlePublishBtn = () => {
    const logMessage = `Published topic('${inputTopic}'), Msg('${inputMsg}')`;
    publish({
      topic: inputTopic,
      data: { message: inputMsg },
    })
      .then(() => {
        setTextLog(logMessage);
      })
      .catch((error) => {
        console.error("Error publishing message:", error);
      });
  };

  const handleSubscribeBtn = () => {
    let topicToSub = inputSubTopic;
    if (topicToSub) {
      console.log(`Checking if any existing subs`);
      if (subscriptionHandle) {
        console.log(`PrevSub present, removing topic(${currSubbedTopic}) sub`);
        // If there's an existing handle, remove the subscription
        subscriptionHandle.remove();
        console.log("Previous subscription removed");
      } else {
        console.log(`No subHandle detected`);
      }

      console.log(`Subscribing to topic(${topicToSub})`);

      // let subscriptionHandle:
      //   | Promise<void | PluginListenerHandle>
      //   | undefined
      //   | PluginListenerHandle;

      subscribe(topicToSub, (message) => {
        console.log(`Topic '${topicToSub}' received msg '${message}'`);
        const data = message.data as PortalMessageData;
        setReceivedMessages((prevMessages) => [
          ...prevMessages,
          {
            timestamp: new Date().toLocaleString(),
            topic: topicToSub,
            msg: data.message,
          },
        ]);
      })
        .then((handle) => {
          console.log(`Success subscribing to topic(${topicToSub})`);
          setCurrSubbedTopic(topicToSub);
          setSubscriptionHandle(handle);
          return handle;
        })
        .catch((error) => {
          console.error(`Error subscribing to topic(${topicToSub})`, error);
        });

      // Optionally, you can save the subscription handle in the component's state
    }
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
            <IonCardTitle
              style={{ fontSize: "larger" }}
              className="ion-margin-bottom"
            >
              Webapp as Publisher
            </IonCardTitle>
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

        <IonCard>
          <IonCardContent>
            <IonCardTitle style={{ fontSize: "larger" }}>
              Webapp as Subscriber
            </IonCardTitle>
            <IonCardSubtitle
              className="ion-margin-bottom"
              style={{ fontSize: "small" }}
            >
              Subbed Topic: {currSubbedTopic || "-not subbed yet-"}
            </IonCardSubtitle>
            <IonInput
              type="text"
              label="Topic"
              labelPlacement="stacked"
              placeholder="Topic"
              fill="outline"
              value={inputSubTopic}
              onIonChange={(e) => setInputSubTopic(e.detail.value!)}
            />

            <IonButton
              expand="block"
              className="ion-margin-top ion-margin-bottom"
              onClick={handleSubscribeBtn}
            >
              Subcribe
            </IonButton>

            <h2>Received Messages</h2>
            <table style={{ fontSize: "smaller" }}>
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>Topic</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {receivedMessages.map((msg, index) => (
                  <tr key={index}>
                    <td>{msg.timestamp}</td>
                    <td>{msg.topic}</td>
                    <td>{msg.msg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PubSubPage;
