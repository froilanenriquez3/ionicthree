import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar
} from '@ionic/react';
import ApiController from '../components/ApiController';
import SearchBar from '../components/SearchBar';
import './Home.css';
// import axios from 'axios';

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Froilex</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
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
