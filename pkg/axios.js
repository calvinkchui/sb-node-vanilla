import axios from 'axios';

let axiosDemoConfig = {
  title: 'AXIOS',
  category: [{
  sample: [
    {
      title: '.get',
      sampleCode: 'axios.get(url)',
      id: 'axios01',
      runScript: function () {
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.get('https://postman-echo.com/get?foo1=bar1&foo2=bar2')
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