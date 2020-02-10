const express = require('express');
const request = require('request');
const promise = require('promise');

function startnode (user)
{
var url = 'http://localhost:8080/startnode/';
var promise = new Promise(function (resolve, reject) {

    request.get(url + user , function (error, response, body) {
        if (error) {
           reject(error);
        }
       resolve(body);
    });
  });

  return promise;
}

function stopnode (user)
{
var url = 'http://localhost:8080/stopnode/';
var promise = new Promise(function (resolve, reject) {

    request.get(url + user , function (error, response, body) {
        if (error) {
           reject(error);
        }
       resolve(body);
    });
  });

  return promise;
}


var argv = process.argv;

if(argv.length != 4) {
  console.log("Usage 'node switch.js <start/stop> <user1>'");
	process.exit(0);
}


console.log("Command = "+ argv[2]);
console.log("User    = "+ argv[3]);

var username = argv[3];

if(argv[2] == 'start') {

   startnode(username).then(xx=> {
	console.log("Message = "+xx);	
   }).catch(err=>{
	console.log("Error="+ err);	
   });

}

if(argv[2] == 'stop') {

   stopnode(username).then(xx=> {
	console.log("Message = "+xx);	
   }).catch(err=>{
	console.log("Error="+ err);	
   });

}

