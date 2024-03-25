import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonLoading,
} from "@ionic/react";
import React, { useState, useEffect } from "react";

const RandomProfilePage: React.FC = () => {
  const [apiData, setApiData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      setApiData(data.results[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonLoading isOpen={isLoading} message={"Generating Data..."} />

        {!isLoading && (
          <IonCard>
            <IonImg src={apiData.picture?.large} alt="Profile Picture" />
            <IonCardHeader>
              <IonCardSubtitle>{apiData.name?.title}</IonCardSubtitle>
              <IonCardTitle>
                {apiData.name?.first} {apiData.name?.last}
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList lines="none">
                <IonItem>
                  <IonLabel>
                    <strong>Gender:</strong> {apiData.gender}
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <strong>Email:</strong> {apiData.email}
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <strong>Location:</strong> {apiData.location?.city},
                    {apiData.location?.state}, {apiData.location?.country}
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <strong>Phone:</strong> {apiData.phone}
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <strong>Cell:</strong> {apiData.cell}
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <strong>Date of Birth:</strong>
                    {new Date(apiData.dob?.date).toLocaleDateString()}
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <strong>Registered:</strong>
                    {new Date(apiData.registered?.date).toLocaleDateString()}
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <strong>Timezone:</strong>
                    {apiData.location?.timezone.description}
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <strong>Username:</strong> {apiData.login?.username}
                  </IonLabel>
                </IonItem>
              </IonList>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default RandomProfilePage;
