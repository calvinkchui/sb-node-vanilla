import axios from 'axios';

/*
Status: WIP
:5173/#:1 Access to XMLHttpRequest at 'https://postman-echo.com/get?foo1=bar1&foo2=bar2' from origin 'http://localhost:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

refer
- https://blog.51cto.com/u_15707289/5446309
*/

// const axiosConfig = {
//     withCredentials: false, // default
// }

let axiosDemoConfig = {
  title: 'AXIOS',
  category: [{
  sample: [
    {
      title: '.get',
      sampleCode: 'axios.get(url)',
      id: 'axios01',
      demoScript: function () {     
       
        // WIP ------------------------------------------------
        const $axios = axios.create({
          timeout: 3000
        });
        $axios.defaults.withCredentials = true
        // WIP ------------------------------------------------
        
        axios.get('https://postman-echo.com/get?foo1=bar1&foo2=bar2', {
          headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          }
        })
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