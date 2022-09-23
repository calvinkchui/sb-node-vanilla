/*
Install:
```
npm install @sanity/client
npm install @sanity/image-url

# FAQ:
## return Error "TypeError: url.parse is not a function" 
Fix:
```
npm install url
```

## CORS
* Refer https://www.sanity.io/docs/cors

```
*/
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'
//
const PROEJCTID = import.meta.env.VITE_SANITY_PROJECTID;
const TOKEN = import.meta.env.VITE_SANITY_TOKEN;
console.log(PROEJCTID, TOKEN);

let sanityConfig = {
    projectId: PROEJCTID,
    token: TOKEN, // sanity-auth-token or leave blank for unauthenticated usage
    dataset: 'production',
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    useCdn: false, // `false` if you want to ensure fresh data
}

//
//

let setupSandbox = function () {
    //const sanityClient = require('@sanity/client')
    const client = sanityClient(sanityConfig);
    return client;
};
let client = setupSandbox();

//
//
let imageClient = imageUrlBuilder(sanityConfig);

//
//
let sanityUtil = {    
    // Query
    query: function (client, query, params) {
        console.group('sanity Query:', query, "param", params);
        let i = 0;
        client.fetch(query, params).then((items) => {
            items.forEach((item) => {
                console.log(i++, "id:", `${item._id}:`, "item:", item);
                
            })
        })
        console.groupEnd()
    },

    // Create
    create: function (client, type, data) {

        const doc = Object.assign({ _type: type }, data);
        console.group(`sanity Create type ${type}`, data);
        client.create(doc).then((res) => {
            console.log(`[${type}] was created, document ID is ${res._id}`)
            return res._id;
        })
        console.groupEnd();
    },

    // Update
    updateSimpleType: function (client, docId, data) {

        //var desc = "#API - updated @" + Date();
        //data = Object.assign({ description: desc }, data);
        console.group(`sanity update Doc${docId}`, data);
        client
            .patch(docId) // Document ID to patch
            .set(
                Object.assign(data)
            ) // Shallow merge  
            .commit() // Perform the patch and return a promise
            .then((updatedDoc) => {
                console.log(updatedDoc)
            })
            .catch((err) => {
                console.error('Oh no, the update failed: ', err.message)
            })
        console.groupEnd();

    },
}


let sanityClientDemoConfig = {
    title: '@sanity/client',
    category: [{
        title: "Query",
        sample: [
            {
                title: 'Query - ALL simpleType',
                sampleCode: `client.fetch("*[_type == "simpleType"]", {})`,
                id: 'sanityClient_querySimpleTypeAll',
                demoScript: function () {
                    sanityUtil.query(client, "*[_type == 'simpleType']", {});
                },
                output: 'console',
            },
            {
                title: 'Query - ALL media',
                sampleCode: `client.fetch("*[_type == "simpleType"]", {})`,
                id: 'sanityClient_queryMediaAll',
                demoScript: function () {
                    sanityUtil.query(client, "*[_type == 'media']", {});
                },
                output: 'console',
            },
            {
                title: 'Query - Top 1',
                sampleCode: `*[_type == 'media'][0..0]`,
                id: 'sanityClient_queryMedia0-0',
                demoScript: function () {
                    sanityUtil.query(client, "*[_type == 'media'][0..0]", {});
                },
                output: 'console',
            },
            {
                title: 'Query - specified fields',
                sampleCode: `*[_type == 'media']{_id, title, image }[0..1]`,
                id: 'sanityClient_queryMediaFields',
                demoScript: function () {
                    sanityUtil.query(client, "*[_type == 'media']{_id, title, image }[0..1]", {});
                },
                output: 'console',
            },
            

        ],
    },
    {
        title: "Insert",
        sample: [
            {
                title: 'Insert',
                sampleCode: `
client.create( { ... } );
`,
                id: 'sanityClient_insert01',
                demoScript: function () {
                    var insertData = { title: "Create data By API " + new Date().toISOString(), textContent: "#API" };
                    sanityUtil.create( client, 'simpleType', insertData );
                },
                output: 'console',
            }
        ],
    },
    {
        title: "Demo",
        sample: [
            {
                title: 'Insert > Update ',
                sampleCode: ``,
                id: 'sanityClient_demo01',
                demoScript: function () {
                    var insertData = { title: "Add " + new Date().toISOString(), textContent: "#Demo" };
                    
                    // Insert
                    sanityUtil.create( client, 'simpleType', insertData );
                    
                    // Update
                    let id = "W6UmOXZCFlGlqhEwOJ9aOc";
                    var desc = "updated by API @" + Date();
                    let data = Object.assign({ description: desc }, insertData);
                    sanityUtil.updateSimpleType(client, id, data);

                },
                output: 'console',
            }
        ],
    },
    {
        title: "Image URL",
        sample: [
            {
                title: 'Image',
                sampleCode: ``,
                description: "<h3>demo</h3>",
                id: 'sanityClient_image01',
                demoScript: function () {
                    let query  = "*[_type == 'media'][1..1]";
                    let params = {};
                    client.fetch(query, params).then((items) => {
                        items.forEach((item) => {
                            console.log("id:", `${item._id}:`, "item:", item);                            
                            console.log("image", imageClient.image(item.image).width(200).url());
                        })
                    })
                },
                output: 'console',
            }
        ],
    }            
    ]
};


export { sanityClientDemoConfig };