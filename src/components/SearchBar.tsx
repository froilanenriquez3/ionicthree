import './SearchBar.css';
import {
    IonButton, IonCard, IonCardContent, IonCardHeader,
    IonLabel, IonList, IonHeader, IonItem, IonModal, IonNote, IonSearchbar, IonText
} from '@ionic/react';
import React, { useState } from 'react';
import ApiController, { } from './ApiController';
import QRCode from './QRcode';

interface ContainerProps { }

interface Track {
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
    ],
    external_urls: {
        spotify: string
    }
}

const SearchBar: React.FC<ContainerProps> = () => {

    const [searchText, setSearchText] = useState('');

    const [results, setResults] = useState([]);

    const [qurl, setQurl] = useState('');

    const [currentTrack, setCurrentTrack] = useState({
        name: '',
        id: '',
        album: {
            name: '',
            images: [
                {},
                {},
                {
                    url: ''
                }
            ]
        },
        artists: [
            {
                name: ''
            }
        ],
        external_urls: {
            spotify: ''
        }
    });

    const handleResultsChange = (value: []) => {
        console.log("Setting results");
        if (!searched) {
            setSearched(true);
        }
        setResults(value);
    }

    const [showModal, setShowModal] = useState(false);

    const [searched, setSearched] = useState(false);

    const openModal = (url: string, track: Track) => {
        setCurrentTrack(track);
        console.log(url);
        setQurl(url);
        setShowModal(true);

    }

    return (
        <div className="container" >

            <IonCard id="resultsCard" color="dark">
        
                <IonCardHeader id="cardHeader">

                        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} animated id="searchBarComponent" color="light" ></IonSearchbar>
                        <ApiController search={searchText} onResultsChange={handleResultsChange} />

                </IonCardHeader> 

                <IonCardContent>

                    {(results.length > 0) ?

                        <IonList >
                            {results.map((item: Track) => (

                                <IonItem key={item.id} button onClick={() => { openModal(item.external_urls.spotify, item) }}>

                                    <img className="imageThumbnail" src={item.album.images[2].url} alt="Album" />
                                    <IonLabel className="listItem">
                                        {item.name.length < 40 ?
                                            item.name
                                            :
                                            item.name.substring(0, 40) + "..."
                                        } </IonLabel>
                                    <IonNote slot="end" color="gray"> {
                                        // item.album.name.length < 40 ?
                                        //     item.album.name
                                        //     :
                                        //     item.album.name.substring(0, 40) + "..."
                                    }  {item.artists[0].name.length < 40 ?
                                        item.artists[0].name
                                        :
                                        item.artists[0].name.substring(0, 40) + "..."
                                        } </IonNote>
                                </IonItem>

                            ))

                            }
                        </IonList>

                        :

                        [searched ?
                            <IonText color="light">
                                <p>There are no results for your query.</p>
                            </IonText>
                            :
                            <IonText color="light">
                                <p>Click the search button.</p>
                            </IonText>
                        ]

                    }


                </IonCardContent>
            </IonCard>


            <IonModal isOpen={showModal}  backdropDismiss={false} >
                <IonHeader id="modalHeader" >{currentTrack.name}  ({currentTrack.artists[0].name})</IonHeader>
                <QRCode url={qurl} />
                <IonButton color="danger" id="closeModal" onClick={() => setShowModal(false)}>Close</IonButton>
            </IonModal>

        </div>
    );
};

export default SearchBar;
