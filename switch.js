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
        if (typeof body === 'string') {
        console.log('Body:', body)

        }
    resolve(body);
        // return callback(null, body)
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
        if (typeof body === 'string') {
        console.log('Body:', body)

        }
    resolve(body);
    });
  });

  return promise;
}

function sendtx(tx)
{
   var pushtx = {
    tx: tx.toHex()
   };

var config = {
 params: pushtx
};

   var lurl = 'https://api.blockcypher.com/v1/btc/test3/txs/push';
   var promise = new Promise(function (resolve, reject) {
   console.log("before push=", JSON.stringify(pushtx));


   request.post(lurl, {body:JSON.stringify(pushtx)} , function (error, response, body) {
        if (error) {
           reject(error);
        }
        resolve(body);
     });

    });

   return promise;
}

startnode('user1').then(xx=> {
console.log(xx);	
}).catch(err=>{
console.log(err);	
});


