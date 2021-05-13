import axios from 'axios';
var querystring = require('querystring');

// interface ContainerProps { search: string };

const ApiController: React.FC<{search:string}> = ({search}) => {

  const clientId = '955fbe8265ca446283c3c8169cf5fa1c';
  const clientSecret = 'b33030dba12e46eb84156830c55469af';

  let accessToken = '';

  let response;

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

        response = response.data.tracks;
        
      }).catch(error => {
        console.log(error.response);
      })

  }



  return (
    <div className="container">
      <button onClick={() => {getToken(); setTimeout(function(){
        getResults(search, 10);
      }, 2000)}}>Get token</button>
    </div>
  );
};

export default ApiController;
