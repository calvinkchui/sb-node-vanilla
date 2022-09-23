import Mustache from 'mustache';

// The requested module '/common/demoContainer.js?t=1663571718180' does not provide an export named 'default'
// Fix: add "default"

export default function DemoContent(demoContent) {
  var demo = demoContent;
  console.log('showDemo', demo);

  var demoContainerTpl = `  
  {{#category}}
  <div class="container px-4 py-5" id="featured-3">
  <h2 class="pb-2 border-bottom">{{title}}</h2> 

  <div class="row row-cols-1 row-cols-md-2 g-4">
  {{#sample}} 
  
  <div class="col">
    <div class="card">      
      <div class="card-body">        
        <h5 class="card-title">{{title}}</a></h5>
        <p class="card-text">
          {{{description}}}
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

  </div>
  {{/category}}    
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
  
  for (let c of demo.category.values()) {
  for (let value of c.sample.values()) {
    //console.log('id', value.id);
    let selector = '#' + value.id;
    let element = document.querySelector(selector);
    element.addEventListener('click', () => value.demoScript());
  }
  }
}
