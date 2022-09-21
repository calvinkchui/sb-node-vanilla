import './style.css';
//import javascriptLogo from './javascript.svg';
//import { setupCounter } from './counter.js';

//
import Mustache from 'mustache';
import showDemoContent from './common/demoContainer.js';
//
import { demoVite } from './helloVite.js';
import { mustacheDemoConfig } from './pkg/mustache.js';

//console.log('Mustache');
//var template = '!';
//var html = Mustache.render(template, { name: 'dummy' });
//console.log(html);
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
   .addEventListener('click', () => showDemoContent(mustacheDemoConfig));
