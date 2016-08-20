#!/usr/bin/env node 
var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

var reqeHandler = function(req, res){
	var reqName = req.body.nm;   // req.query.nm
	var reqCountry = req.body.country;  // req.query.country
	console.log("Name [" + reqName + "]       country=[" + reqCountry + "]");
	res.end(reqName + "   " + reqCountry);
}

app.post('/form', reqeHandler);

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('HTTP server is listening on port: ' + port);
});