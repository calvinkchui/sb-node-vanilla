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
import { jsVanillaDemoConfig } from './core/vanilla.js';

import { jsonataDemoConfig } from './pkg/jsonata.js';
import { mustacheDemoConfig } from './pkg/mustache.js';
import { axiosDemoConfig } from './pkg/axios.js';
import { sanityClientDemoConfig } from './pkg/sanityClient.js';

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
  category: [ {
    title: "sandox",
    package: [
      {
        title: 'Vite - Vanilla',
        description: "JS",        
        id: 'jsVanilla',
        config: jsVanillaDemoConfig,
      },
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
      {
        title: '@sanity/client',
        description: "Javascript client for Sanity.",        
        logo: "http://www.sanity.io/static/images/logo.png",
        link: [
          { title: "www", url: "https://www.npmjs.com/package/@sanity/client" },         
        ],     
        id: 'js_sanity',
        config: sanityClientDemoConfig,
      },
      {
        title: 'JSONata',
        description: "JSONata is a lightweight query and transformation language for JSON data.",        
        logo: "http://docs.jsonata.org/img/jsonata-button.png",
        link: [
          { title: "www", url: "http://docs.jsonata.org/using-nodejs" },         
          { title: "try", url: "https://try.jsonata.org/" },                   
        ],     
        id: 'js_jsonata',
        config: jsonataDemoConfig,
      },            

    ],
  }]
};  

renderDemoMain(mainConfig);


