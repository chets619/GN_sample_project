// import express module
const express = require('express');
// create  an express app
const app = express();
var bodyParser = require('body-parser');

//Allow Access Control
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://54.183.210.82:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
app.use(bodyParser.json());

app.post('/submitForm', (req, res) => {
    console.log(req.body)
    res.status(200).send({
        success: true,
        status: "Name successfully sent: " + req.body.name
    })
});

const server = app.listen(3001, () => {
    console.log('Server listening on port 3001');
});
