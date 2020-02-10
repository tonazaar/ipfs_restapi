const express = require('express');
const ipfsClient = require('ipfs-http-client');
/*
 * https://github.com/ipfs/js-ipfs-http-client
 * https://github.com/ipfs/js-ipfs/tree/master/examples/running-multiple-nodes
 * "API": "/ip4/0.0.0.0/tcp/5001",
 * "API": "/ip4/0.0.0.0/tcp/5002",
*/
const ipfs1 = ipfsClient('http://localhost:5001');
const ipfs2 = ipfsClient('http://localhost:5002');

const files = [{
  path: '/tmp/myfile.txt',
  content: 'ABC'
}]

async function func1() {
	try {

 var result = await ipfs1.add(files[0]) ;
  console.log("repo1="+JSON.stringify(result))


  } catch (err) {

     console.log("err="+ err);
  }

}

async function func2() {
	try {

 var result = await ipfs2.add(files[0]) ;
  console.log("repo2="+JSON.stringify(result))


  } catch (err) {

     console.log("err="+ err);
  }

}

func1();
func2();


