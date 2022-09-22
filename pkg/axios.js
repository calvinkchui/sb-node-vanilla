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


// https://www.digitalocean.com/community/tutorials/js-axios-vanilla-js
const BASE_URL = 'https://jsonplaceholder.typicode.com';
const getTodoItems = async () => {
  try {
    console.log("await axios.get:");
    const response = await axios.get(`${BASE_URL}/todos?_limit=5`);

    const todoItems = response.data;

    console.log(`wait axios.get (result):`, todoItems);

    return todoItems;
  } catch (errors) {
    console.error(errors);
  }
};

let axiosDemoConfig = {
  title: 'AXIOS',
  category: [{
  sample: [
    {
      title: '.get',
      sampleCode: 'axios.get(url)',
      id: 'axios01',
      demoScript: function () {     

        axios.get(`${BASE_URL}/todos?_limit=5`)
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
    {
      title: 'Use Axios with JavaScript',
      sampleCode: 'await axios.get(url)',
      id: 'axios02',
      demoScript: function () {     
        getTodoItems();
      },
      output: 'console',
    },    
  ],
  }]
};

export { axiosDemoConfig };