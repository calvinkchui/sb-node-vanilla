import './style.css';
//import javascriptLogo from './javascript.svg';
//import { setupCounter } from './counter.js';
//
import { demoVite } from './helloVite.js';
import { demoMustache } from './pkg/mustache';

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

demoMustache(document.querySelector('#mustcache'));
