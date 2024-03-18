import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonContent,
  IonFab,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
  useIonViewWillEnter,
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import {
  eye,
  eyeOff,
  lockClosed,
  logIn,
  logInOutline,
  mailOutline,
  personCircleOutline,
} from "ionicons/icons";
import { Geolocation } from '@capacitor/geolocation';

const LoginPage: React.FC = () => {
  const [introSeen, setIntroSeen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [coordinates, setCoordinates] = useState('-');

  const passwordRef = useRef<HTMLIonInputElement>(null);

  const router = useIonRouter();

  const printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();

    setCoordinates(`Current position: ${coordinates}`)
  
    console.log('Current position:', coordinates);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    // Focus on the password field after toggling show/hide
    if (passwordRef.current) {
      passwordRef.current.setFocus();
    }
    printCurrentPosition();
  };

  const doLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Logging in");
    // Reset fields after login
    setEmail("");
    setPassword("");
    setShowPassword(false);

    // router.push("/home", "root");
  };

  useIonViewWillEnter(() => {
    // Clear fields and set showPassword to false when entering the page
    setEmail("");
    setPassword("");
    setShowPassword(false);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardTitle>
            {coordinates}
          </IonCardTitle>
          <IonCardContent>
            <form onSubmit={doLogin}>
              <IonInput
                type="email"
                label="Email"
                labelPlacement="stacked"
                placeholder="xxxxx@ptbc.co.id"
                fill="outline"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
              ></IonInput>

              <IonInput
                className="ion-margin-top"
                type={showPassword ? "text" : "password"}
                label="Password"
                labelPlacement="stacked"
                placeholder="password"
                fill="outline"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
                ref={passwordRef}
              >
                <IonButton
                  fill="clear"
                  slot="end"
                  aria-label="Show/hide"
                  onClick={togglePasswordVisibility}
                >
                  <IonIcon
                    slot="icon-only"
                    icon={showPassword ? eyeOff : eye}
                    aria-hidden="true"
                  />
                </IonButton>
              </IonInput>

              <IonButton
                routerLink="/app"
                type="button"
                expand="block"
                className="ion-margin-top"
              >
                Login
                <IonIcon icon={logInOutline} slot="end" />
              </IonButton>
              <IonButton
                routerLink="/register"
                type="button"
                expand="block"
                className="ion-margin-top"
                color="secondary"
              >
                Create Account
                <IonIcon icon={personCircleOutline} slot="end" />
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
