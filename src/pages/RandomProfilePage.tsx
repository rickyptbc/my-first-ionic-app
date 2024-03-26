import React, { useState, useEffect } from "react";
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
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
} from "@ionic/react";

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

  const doRefresh = (event: CustomEvent<RefresherEventDetail>) => {
    setTimeout(() => {
      fetchData();
      event.detail.complete();
    }, 1000); // Simulate delay
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent />
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonLoading isOpen={isLoading} message={"Generating Data..."} />

        {!isLoading && (
          <IonCard>
            <IonCardTitle>Pull Down to Refresh</IonCardTitle>
            <IonImg src={apiData.picture?.large} alt="Profile Picture" />
            <IonCardHeader>
              <IonCardSubtitle>{apiData.login?.username}</IonCardSubtitle>
              <IonCardTitle>
                {apiData.name?.title} {apiData.name?.first} {apiData.name?.last}
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
              </IonList>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default RandomProfilePage;
