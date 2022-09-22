

let jsFetchDemoConfig = {
  title: '.fetch',
  category: [{
  sample: [
    {
      title: 'fetch',
      sampleCode: 'fetch(url)',
      id: 'fetch',
      demoScript: function () {     
        
        let url = 'https://postman-echo.com/get?foo1=bar1&foo2=bar2';
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