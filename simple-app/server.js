//import express from 'express';
const express = require("express");
const app = express();
var config = require('./load-config.js');

//console.log(config.service.context);

app.set('port', process.env.PORT || 8080);

app.get('/simple-app/'+config.service.context, (req, res) => {
    res.send('Hello World ' + config.service.response)
})

app.listen(app.get('port'));

//app.listen(5656, () => {
//   console.log('http://localhost:5656')
//})
