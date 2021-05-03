import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton,
  IonList, IonItem
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import ApiController from '../components/ApiController';
import './Home.css';
import axios from 'axios';

const Home: React.FC = () => {

  const apiKey = ''
  const endpoint = ``;
  const url = '';

  const sendGetRequest = () => {

    return axios({
      url: url,
      method: 'get'
    }).then(reponse => {

    })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer /> */}
        <ApiController />
      </IonContent>
    </IonPage>
  );
};



export default Home;
