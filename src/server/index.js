const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

var path = require('path')
const express = require('express')
const request = require('request');

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    //res.send(mockAPIResponse)

    var requestData = {
        uri: 'https://api.meaningcloud.com/sentiment-2.1?url=' + encodeURI(req.query.formText) + '&key='+process.env.API_KEY+'&lang=en&of=json',
        method: 'POST'
    }
    console.log(requestData)
    
    request(requestData, function (error, http_res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        console.log(http_res)
        res.send(http_res.body)
    });
})
