import './style.css';
//import javascriptLogo from './javascript.svg';
//import { setupCounter } from './counter.js';

//
import Mustache from 'mustache';
import renderDemoContent from './common/demoContainer.js';
//
import renderDemoMain from './common/demoMain.js';
//
import { demoVite } from './helloVite.js';
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
  category: [ /*{
    title: "sandox",
    package: [
      {
        title: 'Vite',
        description: "Vie-Vanilla Demo",
        url: "https://vitejs.dev/guide/",
        id: 'vite'
      },
    ],
    },*/
    {
    title: "Js",
    package: [
      {
        title: 'Axios',
        description: "Promise based HTTP client for the browser and node.js",
        url: "https://github.com/axios/axios",
        id: 'js_axios',
        config: axiosDemoConfig,
      },
      {
        title: 'Mustache',
        description: "Logic-less {{mustache}} templates with JavaScript",
        url: "https://github.com/janl/mustache.js/",
        id: 'js_mustache',
        config: mustacheDemoConfig,
      },

    ],
  }]
};  

renderDemoMain(mainConfig);
