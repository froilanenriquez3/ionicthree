import { IonButton } from '@ionic/react';
import axios from 'axios';
import React from 'react';
var querystring = require('querystring');

// interface ContainerProps { search: string };

const ApiController: React.FC<{search:string, onResultsChange: any}> = ({search, onResultsChange}) => {

  const clientId = '955fbe8265ca446283c3c8169cf5fa1c';
  const clientSecret = 'b33030dba12e46eb84156830c55469af';

  let accessToken = '';

  let numberResults = 10;

  let results : Object[];

  const getToken = () => {
    console.log('getting token');
    axios(
      {
        url: 'https://accounts.spotify.com/api/token',
        method: 'post',
       
       /*  params: {
          grant_type : 'client_credentials'
        } */
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
          // Authorization:'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
        },
        data: querystring.stringify({ grant_type: 'client_credentials' }),
        

      }).then(response => {
        console.log(response);

        accessToken = response.data.access_token;
        console.log(accessToken);

        getResults(search, numberResults);
        
      }).catch(error => {
        console.log(error.response);
      })

  }

  const getResults = (query:string, limit: Number) => {
    console.log('getting results');
    console.log(search);
    console.log(query);
    query.replace(' ', '+');
    axios(
      {
        url: 'https://api.spotify.com/v1/search?q='+query+'&type=track&limit='+limit,
        method: 'get',
       
       /*  params: {
          grant_type : 'client_credentials'
        } */
        headers: {
          'Accept' : 'application/json',
          'Content-Type' : 'application/json',
          'Authorization' : 'Bearer ' + accessToken,
        },        

      }).then(response => {
        console.log(response);

        results = response.data.tracks.items;
        handleChange();
        
      }).catch(error => {
        console.log(error.response);
      })

  }

  const handleChange = () => { 
    onResultsChange(results);
  }



  return (
    <div className="container">
      <IonButton id="search" color="primary" onClick={() => {getToken()}}>Search</IonButton>
    </div>
  );
};

export default ApiController;
