import jsonata from 'jsonata';


let jsonataDemoConfig = {
  title: 'JSONata',
  category: [{
  sample: [
    {
      title: 'First Demo',
      sampleCode: `
var data = { example: [ {value: 4}, {value: 7}, {value: 13} ] };      
var expression = jsonata("$sum(example.value)");
var result = expression.evaluate(data);  // returns 24
`,
      id: 'jsonata_01',
      demoScript: function () {     
        var data = { example: [ {value: 4}, {value: 7}, {value: 13} ] };      
        var expression = jsonata("$sum(example.value)");
        var result = expression.evaluate(data);  // returns 24
        console.log("JSONata - $sum(example.value)", result)
      },
      output: 'console',
    },
    {
        title: 'Transform',
        sampleCode: `
Account.Order.Product.{
    "Product Name-2": \`Product Name\`,
    "ProductID-2": \`ProductID\`
}
  `,
        id: 'jsonata_trasnform01',
        demoScript: function () {   

            var expression = jsonata(`Account.Order.Product.{
                "Product Name-2": \`Product Name\`,
                "ProductID-2": \`ProductID\`
            }`);
            var result = expression.evaluate(sample02);  // returns 24
            console.log("JSONata - Transform", result)
        },
        output: 'console',
      }    
  ],
  }]
};


// http://docs.jsonata.org/simple
let sample01 = {
    "FirstName": "Fred",
    "Surname": "Smith",
    "Age": 28,
    "Address": {
      "Street": "Hursley Park",
      "City": "Winchester",
      "Postcode": "SO21 2JN"
    },
    "Phone": [
      {
        "type": "home",
        "number": "0203 544 1234"
      },
      {
        "type": "office",
        "number": "01962 001234"
      },
      {
        "type": "office",
        "number": "01962 001235"
      },
      {
        "type": "mobile",
        "number": "077 7700 1234"
      }
    ],
    "Email": [
      {
        "type": "work",
        "address": ["fred.smith@my-work.com", "fsmith@my-work.com"]
      },
      {
        "type": "home",
        "address": ["freddy@my-social.com", "frederic.smith@very-serious.com"]
      }
    ],
    "Other": {
      "Over 18 ?": true,
      "Misc": null,
      "Alternative.Address": {
        "Street": "Brick Lane",
        "City": "London",
        "Postcode": "E1 6RF"
      }
    }
  };

let sample02 = { // https://try.jsonata.org/
    "Account": {
      "Account Name": "Firefly",
      "Order": [
        {
          "OrderID": "order103",
          "Product": [
            {
              "Product Name": "Bowler Hat",
              "ProductID": 858383,
              "SKU": "0406654608",
              "Description": {
                "Colour": "Purple",
                "Width": 300,
                "Height": 200,
                "Depth": 210,
                "Weight": 0.75
              },
              "Price": 34.45,
              "Quantity": 2
            },
            {
              "Product Name": "Trilby hat",
              "ProductID": 858236,
              "SKU": "0406634348",
              "Description": {
                "Colour": "Orange",
                "Width": 300,
                "Height": 200,
                "Depth": 210,
                "Weight": 0.6
              },
              "Price": 21.67,
              "Quantity": 1
            }
          ]
        },
        {
          "OrderID": "order104",
          "Product": [
            {
              "Product Name": "Bowler Hat",
              "ProductID": 858383,
              "SKU": "040657863",
              "Description": {
                "Colour": "Purple",
                "Width": 300,
                "Height": 200,
                "Depth": 210,
                "Weight": 0.75
              },
              "Price": 34.45,
              "Quantity": 4
            },
            {
              "ProductID": 345664,
              "SKU": "0406654603",
              "Product Name": "Cloak",
              "Description": {
                "Colour": "Black",
                "Width": 30,
                "Height": 20,
                "Depth": 210,
                "Weight": 2
              },
              "Price": 107.99,
              "Quantity": 1
            }
          ]
        }
      ]
    }
  }

export { jsonataDemoConfig };