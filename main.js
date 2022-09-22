import './style.css';
//import javascriptLogo from './javascript.svg';
//import { setupCounter } from './counter.js';

//
import Mustache from 'mustache';
import axios from 'axios';
//
import renderDemoContent from './common/demoContainer.js';
//
import renderDemoMain from './common/demoMain.js';
//

import { demoVite } from './helloVite.js';

import { jsFetchDemoConfig } from './core/fetch.js';

import { mustacheDemoConfig } from './pkg/mustache.js';
import { axiosDemoConfig } from './pkg/axios.js';


var html = '<button id="mustcache" type="button">Mustacahe</button>';

document.querySelector('#app').innerHTML = `
  <div>
    <h2>Demo<h2/>
    <button id="vite" type="button">Vite</button>
    ${html}  
  </div>
`;

document.querySelector('#vite').addEventListener('click', () => {
  demoVite();
});

//demoMustache(document.querySelector('#mustcache'));

//console.log(demoMustache);
document.querySelector('#mustcache')
   .addEventListener('click', () => renderDemoContent(mustacheDemoConfig));

var mainConfig = {
  title: 'Mustache',
  category: [ {
    title: "sandox",
    package: [
      {
        title: 'Fetch',
        description: "fetch",        
        id: 'jsFetch',
        config: jsFetchDemoConfig,
      },
    ],
    },
    {
    title: "Js",
    package: [
      {
        title: 'Axios',
        description: "Promise based HTTP client for the browser and node.js",
        logo: "https://axios-http.com/assets/logo.svg",
        link: [
          { title: "www", url: "https://github.com/axios/axios" },         
        ],     
        id: 'js_axios',
        config: axiosDemoConfig,
      },
      {
        title: 'Mustache',
        description: "Logic-less {{mustache}} templates with JavaScript",
        logo: "https://i0.wp.com/css-tricks.com/wp-content/uploads/2016/01/mustache-logo.png",
        link: [
          { title: "www", url: "https://github.com/janl/mustache.js/" },         
        ],     
        id: 'js_mustache',
        config: mustacheDemoConfig,
      },

    ],
  }]
};  

renderDemoMain(mainConfig);

console.log("axios begin");
const BASE_URL = 'https://jsonplaceholder.typicode.com';

const getTodoItems = async () => {
  try {
    console.log("axios.get:");
    const response = await axios.get(`${BASE_URL}/todos?_limit=5`);

    const todoItems = response.data;

    console.log(`GET: Here's the list of todos`, todoItems);

    return todoItems;
  } catch (errors) {
    console.error(errors);
  }
};

//const main = async () => {
//  await getTodoItems();
//};

await getTodoItems();
//main();
