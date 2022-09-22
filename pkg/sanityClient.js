/*
Install:
```
npm install @sanity/client


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
const PROEJCTID = import.meta.env.VITE_SANITY_PROJECTID;
const TOKEN = import.meta.env.VITE_SANITY_TOKEN;
console.log(PROEJCTID, TOKEN);

let setupSandbox = function () {
    //const sanityClient = require('@sanity/client')
    const client = sanityClient({
        projectId: PROEJCTID,
        token: TOKEN, // sanity-auth-token or leave blank for unauthenticated usage
        dataset: 'production',
        apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
        useCdn: false, // `false` if you want to ensure fresh data
    })
    return client;
};
let client = setupSandbox();

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
        })
        console.groupEnd();
    },

    // Update
    updateSimpleType: function (client, docId, data) {

        var desc = "#API - updated @" + Date();
        client
            .patch(docId) // Document ID to patch
            .set(
                Object.assign({ description: desc }, data)
            ) // Shallow merge  
            .commit() // Perform the patch and return a promise
            .then((updatedDoc) => {
                console.log('Updated document:')
                console.log(updatedDoc)
            })
            .catch((err) => {
                console.error('Oh no, the update failed: ', err.message)
            })

    },
}


let sanityClientDemoConfig = {
    title: '@sanity/client',
    category: [{
        title: "Query",
        sample: [
            {
                title: 'Fetch ALL',
                sampleCode: `
// Fetch All by type=simpleType
client.fetch("*[_type == "simpleType"]", {})
`,
                id: 'sanityClient_fetchAllByType',
                demoScript: function () {

                    const query = '*[_type == "simpleType"]'
                    const params = {}

                    client.fetch(query, params).then((items) => {
                        console.log('simpleType:')
                        items.forEach((item) => {
                            console.log(`${item._id}`);
                            console.log(item);
                        })
                    })
                },
                output: 'console',
            },
            {
                title: 'Query - ALL',
                sampleCode: `*[_type == 'simpleType']`,
                id: 'sanityClient_queryMedia01',
                demoScript: function () {
                    sanityUtil.query(client, "*[_type == 'simpleType']", {});
                },
                output: 'console',
            },
            {
                title: 'Query - Top 1',
                sampleCode: `*[_type == 'media'][0..0]`,
                id: 'sanityClient_queryMedia02',
                demoScript: function () {
                    sanityUtil.query(client, "*[_type == 'media'][0..0]", {});
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
    }
    ]
};


export { sanityClientDemoConfig };