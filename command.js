const express = require('express');
const ipfsClient = require('ipfs-http-client');

const ipfs = ipfsClient('http://localhost:5001');
//const ipfs = ipfsClient('http://localhost:9001');

const files = [{
  path: '/tmp/myfile.txt',
  content: 'ABC'
}]

async function func() {
	try {

 var result = await ipfs.add(files[0]) ;
  console.log(result)


  } catch (err) {

     console.log("err="+ err);
  }

}

func();


