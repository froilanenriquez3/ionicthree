import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar
} from '@ionic/react';
import ApiController from '../components/ApiController';
import './Home.css';
// import axios from 'axios';

const Home: React.FC = () => {

/*   const apiKey = ''
  const endpoint = ``;
  const url = '';

  const sendGetRequest = () => {

    return axios({
      url: url,
      method: 'get'
    }).then(reponse => {

    })
  } */

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
        <ApiController />
      </IonContent>
    </IonPage>
  );
};



export default Home;
