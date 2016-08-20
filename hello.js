#!/usr/bin/env node 
var cliArgs = process.argv.slice();
var arg = cliArgs[2];

if (typeof arg == 'undefined'){
	console.log('Hello, world');
}else{
 	console.log('Hello, %s!', cliArgs[2]);
}
