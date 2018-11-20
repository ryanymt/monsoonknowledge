//import express from 'express';
const express = require("express");
const app = express();
var config = require('./load-config.js');

//console.log(config.service.context);

app.set('port', process.env.PORT || 8080);
app.set('public_url', process.env.PUBLIC_URL || '127.0.0.1');

app.get('/simple-app/'+config.service.context, (req, res) => {
    res.send('Response coming from :: ' + config.service.response)
})

app.listen(app.get('port'), app.get('public_url'));

//app.listen(5656, () => {
//   console.log('http://localhost:5656')
//})
