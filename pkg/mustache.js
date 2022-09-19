import Mustache from 'mustache';
import showDemo from '../common/demoContainer.js';

function demoHelloWorld() {
  console.log('Mustache');
  var template = 'Hello {{name}}!';
  var html = Mustache.render(template, { name: 'dummy' });
  console.log(html);

  document.querySelector('#app').innerHTML = `
    <div>
      ${html}  
    </div>
  `;
}

function runDemo() {
  var demo = {
    title: 'Mustache',
    sample: [
      {
        title: 'Hello World',
        sampleCode: `        
var template = 'Hello {{name}}!';
var html = Mustache.render(template, { name: 'dummy' });                
`,
        id: 'mustache01',
        runScript: function () {
          var template = 'Hello {{name}}!';
          var html = Mustache.render(template, { name: 'dummy' });
          console.log(html);
        },
        output: 'console',
      },
    ],
  };

  showDemo(demo);
}

export function demoMustache(element) {
  //element.addEventListener('click', () => demoHelloWorld());
  element.addEventListener('click', () => runDemo());
}
