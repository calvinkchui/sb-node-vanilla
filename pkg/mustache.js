import Mustache from 'mustache';
//import showDemo from '../common/demoContainer.js';

// function demoHelloWorld() {
//   console.log('Mustache');
//   var template = 'Hello {{name}}!';
//   var html = Mustache.render(template, { name: 'dummy' });
//   console.log(html);

//   document.querySelector('#app').innerHTML = `
//     <div>
//       ${html}  
//     </div>
//   `;
// }

let mustacheDemoConfig = {
  title: 'Mustache',
  category: [{
  sample: [
    {
      title: 'Hello World',
      sampleCode: `        
var template = 'Hello {{name}}!';
var html = Mustache.render(template, { name: 'dummy' });                
`,
      id: 'mustache01',
      demoScript: function () {
        var template = 'Hello {{name}}!';
        var html = Mustache.render(template, { name: 'dummy' });
        console.log(html);
      },
      output: 'console',
    },
    {
      title: 'dislabe escape {{{ }}}',
      sampleCode: `        
var template = 'default:{{name}}}<br/>unescape:{{{name}}}!';
var html = Mustache.render(template, { name: '<b>dummy</b>' });                
`,
      id: 'mustache_unescape',
      demoScript: function () {
        var template = 'default:{{name}}}<br/>unescape:{{{name}}}!';
        var html = Mustache.render(template, { name: '<b>dummy</b>' });                
        console.log(html);
      },
      output: 'console',
    },

  ],
  }]
};

// function runDemo() {   
//   showDemo(demo);
// }

// export function demoMustache(element) {
//   //element.addEventListener('click', () => demoHelloWorld());
//   //element.addEventListener('click', () => runDemo());
//   element.addEventListener('click', () => showDemo(mustacheCfg));
// }

export { mustacheDemoConfig };