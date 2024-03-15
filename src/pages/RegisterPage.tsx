import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import {
  checkmarkOutline,
  eye,
  eyeOff,
  logInOutline,
  personCircleOutline,
  sparkles,
  sparklesOutline,
  sparklesSharp,
} from "ionicons/icons";
import React, { useRef, useState } from "react";

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef<HTMLIonInputElement>(null);

  const router = useIonRouter();

  const doRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Registering");
    router.goBack();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    // Focus on the password field after toggling show/hide
    if (passwordRef.current) {
      passwordRef.current.setFocus();
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Create Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <form onSubmit={doRegister}>
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
                type="submit"
                expand="block"
                className="ion-margin-top"
              >
                Create My Account
                <IonIcon icon={sparklesSharp} slot="end" />
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default RegisterPage;
