import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonFab,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import {
  eye,
  eyeOff,
  lockClosed,
  logIn,
  logInOutline,
  mailOutline,
  personCircleOutline,
} from "ionicons/icons";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const doLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Logging in");
    // Reset fields after login
    setEmail("");
    setPassword("");
    setShowPassword(false);
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
          <IonTitle>Login Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
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
                type="submit"
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
