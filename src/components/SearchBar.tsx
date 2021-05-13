import './SearchBar.css';
import {
    IonButton, IonCard, IonCardContent, IonCardHeader,
    IonLabel, IonList, IonItem, IonSearchbar,
} from '@ionic/react';
import React, { useState } from 'react';
import ApiController, {  } from './ApiController';

interface ContainerProps { }

const SearchBar: React.FC<ContainerProps> = () => {

    const [searchText, setSearchText] = useState('');

    const [results] = useState(["hello ", " hello ", " helloooo"]);




    return (
        <div className="container" >

            <ApiController search={searchText}/>
            <IonCard id="resultsCard">
                <IonCardHeader id="cardHeader">
                    
                    <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} animated ></IonSearchbar>
                    <IonButton color="primary">Search</IonButton>

                </IonCardHeader>

                <IonCardContent>
                    <IonList>

                        {results.map((element: String) => (
                            <IonItem>
                                <IonLabel>{element}</IonLabel>
                            </IonItem>
                        ))}

                    </IonList>

                </IonCardContent>
            </IonCard>

        </div>
    );
};

export default SearchBar;
