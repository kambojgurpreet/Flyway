import { multi } from './air-port-codes-node';
import { UI, ui } from './ui';


//Search Airport
const searchAirport = document.getElementById('search');

//Add Event Listener
searchAirport.addEventListener('keyup', e =>{

  ui.inputSpinner();

  //Get user input
  const term = e.target.value;
  
  if(term !== ''){

    //Make a HTTP call to API
    const api = multi({
      key : 'ff7742c45f', 
      secret : '54b54cdeedbbe42', // Your API Secret Key: use this if you are not connecting from a web server
      limit : 20
    });

    api.request(term);

    // SUCCESS we found some airports
    api.onSuccess = (data) => {
      ui.showResults(data);
    };

    // FAIL no airports found
    api.onError = (data) => {
      ui.showError(data);
    };

  } else{

  }

});
