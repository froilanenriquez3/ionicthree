import './SearchBar.css';
import {
    IonCard, IonCardContent, IonCardHeader,
    IonLabel, IonList, IonItem, IonNote, IonSearchbar,
} from '@ionic/react';
import React, { useState } from 'react';
import ApiController, { } from './ApiController';

interface ContainerProps { }

const SearchBar: React.FC<ContainerProps> = () => {

    const [searchText, setSearchText] = useState('');

    const [results, setResults] = useState([]);

    const handleResultsChange = (value: []) => {
        console.log("Setting results");
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

                        {results.map((item: {
                            name: string
                            id: string
                            album: {
                                name: string,
                                images: [
                                    {},
                                    {},
                                    {
                                        url: string
                                    }
                                ]
                            }
                            artists: [
                                {
                                    name: string
                                }
                            ]
                        }) => (
                            <IonItem key={item.id}>
                                <img className="imageThumbnail" src={item.album.images[2].url} alt="Album" />
                                <IonLabel className="listItem">
                                    {item.name.length < 40 ?
                                        item.name
                                        :
                                        item.name.substring(0, 40) + "..."
                                    } </IonLabel>
                                <IonNote slot="end" color="gray"> {
                                    item.album.name.length < 40 ?
                                        item.album.name
                                        :
                                        item.album.name.substring(0, 40) + "..."
                                    } : {item.artists[0].name.length < 40 ?
                                    item.artists[0].name
                                    :
                                    item.artists[0].name.substring(0, 40) + "..."
                                    } </IonNote>
                            </IonItem>
                        ))}

                    </IonList>

                </IonCardContent>
            </IonCard>

        </div>
    );
};

export default SearchBar;
