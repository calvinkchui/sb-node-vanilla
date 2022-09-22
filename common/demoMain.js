import Mustache from 'mustache';
import renderDemoContent from './demoContainer.js';

export default function renderDemoMain(demoConfig) {
  var cfg = demoConfig;
  
  var demoContainerTpl = `
  <div class="row row-cols-1 row-cols-md-3 g-4">
  {{#category}}
  {{#package}} 
  <div class="col">
    <div class="card">      
      <div class="card-body">        
        <h5 class="card-title"><a id="{{id}}" href="#">{{title}}</a></h5>
        <p class="card-text">
          {{description}}
          {{#logo}}
          <img class="card-img-bottom" src="{{logo}}"/>
          {{/logo}}              
          {{#link}}
          <a href="{{url}}"><button>{{title}}</button></a>
          {{/link}}
        </p>
      </div>
  </a>              
    </div>
  </div>  
  {{/package}}
  {{/category}}    
  </div>
  <div class="row row-cols-1 row-cols-md-2 g-4">
  </div>
  `;

  var html = Mustache.render(demoContainerTpl, cfg);
  //console.log('html', html);

  document.querySelector('#app').innerHTML = `
  <div>
    ${html}  
  </div>
  `;

  // bind action
  
  for (let c of cfg.category.values()) {
    for (let value of c.package.values()) {
      let selector = '#' + value.id;
      let element = document.querySelector(selector);

      console.log( value.id , value.config );
      element.addEventListener('click', () =>  {
        console.log( "fire click", value.id);
        renderDemoContent(value.config);
      });
    }
  }
}
