import axios from 'axios';
var querystring = require('querystring');

interface ContainerProps { }

const ApiController: React.FC<ContainerProps> = () => {

  const clientId = '955fbe8265ca446283c3c8169cf5fa1c';
  const clientSecret = 'b33030dba12e46eb84156830c55469af';

  let accessToken;

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


  return (
    <div className="container">
      <button onClick={() => getToken()}>Get token</button>
    </div>
  );
};

export default ApiController;
