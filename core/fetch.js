
const BASE_URL = 'https://jsonplaceholder.typicode.com';

let jsFetchDemoConfig = {
  title: '.fetch',
  category: [{
  sample: [
    {
      title: 'fetch',
      sampleCode: 'fetch(url)',
      id: 'fetch',
      demoScript: function () {     
        
        let url = `${BASE_URL}/todos?_limit=5`;
        try {
            fetch(url)
            .then(response => response.json())
            .then(json => console.log(json))
        } catch (error) {
          console.log('Request Failed', error);
        }
      },
      output: 'console',
    },
  ],
  }]
};

export { jsFetchDemoConfig };