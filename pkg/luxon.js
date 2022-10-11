//const { DateTime } = require("luxon");
import { DateTime } from 'luxon';

let luxonDemoConfig = {
  title: 'Luxon',
  category: [
    {
      sample: [
        {
          title: 'Basic Sample code',
          sampleCode: 'Datetime',
          id: 'luxon_0001',
          demoScript: function () {
            //const { DateTime } = require("luxon");
            console.group('Luxon - Basic');
            console.log('DateTime.now()', DateTime.now());
            //console.log('DateTime.toJSDate()', DateTime.toJSDate());
            console.groupEnd();
          },
          output: 'console',
        },
      ],
    },
  ],
};

export { luxonDemoConfig };
