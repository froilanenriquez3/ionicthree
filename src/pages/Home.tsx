import {
  IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar
} from '@ionic/react';
import { peopleOutline, mailOutline, musicalNotesOutline } from 'ionicons/icons';
import SearchBar from '../components/SearchBar';
import './Home.css';
// import axios from 'axios';

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">

          <IonButtons slot="start" id="logo">
            <IonButton color="light">
              Froilex
            </IonButton>
            <IonIcon icon={musicalNotesOutline} />
          </IonButtons>



          <IonButtons slot="secondary">
            <IonButton color="light" expand="block">
              <IonIcon icon={peopleOutline} slot="start"></IonIcon> About Us
            </IonButton>
            <IonButton color="light" expand="block">
              <IonIcon icon={mailOutline} slot="start"></IonIcon> Contact Us
            </IonButton>
          </IonButtons>

        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen color="light">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Froilex</IonTitle>
          </IonToolbar>
        </IonHeader>


        <SearchBar />
      </IonContent>
    </IonPage>
  );
};



export default Home;
