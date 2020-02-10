const express = require('express');
const ipfsClient = require('ipfs-http-client');

const ipfs = ipfsClient('http://localhost:5001');
//const ipfs = ipfsClient('http://localhost:9001');


async function func() {
	try {

 var result = await ipfs.stats.repo()
  console.log(JSON.stringify(result))


  } catch (err) {

     console.log("err="+ err);
  }

}

func();


