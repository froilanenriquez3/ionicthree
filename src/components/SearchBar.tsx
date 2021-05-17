import './SearchBar.css';
import {
    IonCard, IonCardContent, IonCardHeader,
    IonLabel, IonList, IonItem, IonSearchbar,
} from '@ionic/react';
import React, { useState } from 'react';
import ApiController, {  } from './ApiController';

interface ContainerProps { }

const SearchBar: React.FC<ContainerProps> = () => {

    const [searchText, setSearchText] = useState('');

    const [results, setResults] = useState([]);

    const handleResultsChange = (value: []) => {
        setResults(value);
    }



    return (
        <div className="container" >

            <IonCard id="resultsCard">
                <IonCardHeader id="cardHeader">
                    
                    <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} animated ></IonSearchbar>
                    <ApiController search={searchText} onResultsChange={handleResultsChange} />
                        
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
