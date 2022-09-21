import axios from 'axios';

const axiosConfig = {
    withCredentials: false, // default
}

let axiosDemoConfig = {
  title: 'AXIOS',
  category: [{
  sample: [
    {
      title: '.get',
      sampleCode: 'axios.get(url)',
      id: 'axios01',
      runScript: function () {     
       
        axios.get('https://postman-echo.com/get?foo1=bar1&foo2=bar2', axiosConfig)
        .then(function(response) {
          // handle success
          console.log(response.data);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .finally(function() {
          // always executed
        });
      },
      output: 'console',
    },
  ],
  }]
};

export { axiosDemoConfig };