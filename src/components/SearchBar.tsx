import './SearchBar.css';
import { IonSearchbar } from '@ionic/react';
import React, { useState } from 'react';

interface ContainerProps { }

const SearchBar: React.FC<ContainerProps> = () => {

    const [ searchText, setSearchText ] = useState('');


  return (
    <div className="container">

        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} animated></IonSearchbar>

    </div>
  );
};

export default SearchBar;
