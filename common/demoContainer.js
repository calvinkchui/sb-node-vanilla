import Mustache from 'mustache';

// The requested module '/common/demoContainer.js?t=1663571718180' does not provide an export named 'default'
// Fix: add "default"

export default function showDemo(demoContent) {
  var demo = demoContent;
  console.log('showDemo', demo);

  var demoContainerTpl = `
  <div class="row row-cols-1 row-cols-md-2 g-4">
  {{#sample}} 
  <div class="col">
    <div class="card">      
      <div class="card-body">        
        <h5 class="card-title">{{title}}</a></h5>
        <p class="card-text">
          {{#sampleCode}}
          <pre>{{sampleCode}}</pre>
          {{/sampleCode}}
          {{#id}}          
          <button id="{{id}}">run</button>          
          {{/id}}
        </p>
      </div>
  </a>              
    </div>
  </div>  
  {{/sample}}    
  </div>
  <div class="row row-cols-1 row-cols-md-2 g-4">
  </div>
  `;

  var html = Mustache.render(demoContainerTpl, demo);
  //console.log('html', html);

  document.querySelector('#app').innerHTML = `
  <div>
    ${html}  
  </div>
  `;

  // bind action
  for (var value of demo.sample.values()) {
    //console.log('id', value.id);
    let selector = '#' + value.id;
    let element = document.querySelector(selector);
    element.addEventListener('click', () => value.runScript());
  }
}
