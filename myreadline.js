#!/usr/bin/env node 
var cliArgs = process.argv.slice();
var rl = require('readline');  //readline is a core module
var read = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});
var myData = {};
myData.name = cliArgs[2];

read.question("What is your favourite season? ", function (answer) {
  read.close(); // close the instance of reading interface
  myData.season = answer;

  console.log(myData);
});

