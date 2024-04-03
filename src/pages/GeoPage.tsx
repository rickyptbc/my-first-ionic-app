import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Geolocation } from "@capacitor/geolocation";
import React, { useState } from "react";

const GeoPage: React.FC = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [address2, setAddress2] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getCoor = async () => {
    try {
      setIsLoading(true);
      setAddress("");
      setAddress2("");
      const coordinates = await Geolocation.getCurrentPosition();
      console.log(`Coordinates Got: ${JSON.stringify(coordinates)}`);
      getAddress(coordinates.coords.latitude, coordinates.coords.longitude);
    } catch (error) {
      console.error("Error getting current position:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAddress = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      const data = await response.json();
      console.log("Address data:", data);
      setAddress(
        `${data.address.suburb}, ${data.address.city}, ${data.address.country}`
      );
      setAddress2(`Long: ${longitude} Lat: ${latitude}`);
    } catch (error) {
      console.error("Error getting address:", error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Geolocation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <IonCardTitle className="ion-margin-bottom">
              My Location
            </IonCardTitle>
            <IonButton
              type="button"
              expand="block"
              disabled={isLoading}
              onClick={getCoor}
            >
              {isLoading ? "Loading..." : "Get Location"}
            </IonButton>
            <IonCardTitle className="ion-margin-top">
              Your Address:
            </IonCardTitle>
            {address && (
              <div>
                <p>{address}</p>
                <p>{address2}</p>
              </div>
            )}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default GeoPage;
