const express = require('express')
const fs = require('fs');
const url = require('url');

const app = express()
const port = 3000

app.get('/', (req, res) => {
    // load sample data
    const sampleFile = fs.readFileSync('data/sample.json');
    const sampleData = JSON.parse(sampleFile);

    // parse query string
    const url_parts = url.parse(req.url, true);
    const query = url_parts.query
    
    // default to the whole sample
    let responseBody = sampleData;
    
    // select required data if needed
    if (query.what == 'apps') {
        responseBody = sampleData.apps;
    } else if (query.what == 'langs') {
        responseBody = sampleData.langs;
    }

    // send response
    res.set('Content-Type', 'application/json');
    res.send(responseBody)
})

app.listen(port, () => console.log(`Backend Mock listening on port ${port}!`))