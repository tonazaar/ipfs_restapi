'use strict'

const IPFS = require('ipfs')
var config = {
"Addresses": {
    "Swarm": [
      "/ip4/0.0.0.0/tcp/6002",
      "/ip4/127.0.0.1/tcp/6003/ws"
    ],
    "API": "/ip4/0.0.0.0/tcp/5001",
    "Gateway": "/ip4/127.0.0.1/tcp/9090",
    "Delegates": []
  }

};

var config1 = {
         "Addresses": {
    "Swarm": [
      "/ip4/0.0.0.0/tcp/7002",
      "/ip4/127.0.0.1/tcp/4003/ws"
    ],
    "API": "/ip4/127.0.0.1/tcp/5002",
    "Gateway": "/ip4/0.0.0.0/tcp/9001",
    "Delegates": []
  }
};


async function main () {
  const node = await IPFS.create(
   {
   repo: '/home/rameshbn/ramipfs',
   config: config 
   }
  )
await func(node);
  const node1 = await IPFS.create(
   {
   repo: '/home/rameshbn/ramipfs1',
   config: config1 
   }
  )
await func(node1);

}

async function func(node) {
  const version = await node.version()

  console.log('Version:', version.version)

  const filesAdded = await node.add({
    path: 'hello.txt',
    content: Buffer.from('Hello World 101')
  })

  console.log('Added file:', filesAdded[0].path, filesAdded[0].hash)

  const fileBuffer = await node.cat(filesAdded[0].hash)

  console.log('Added file contents:', fileBuffer.toString())
}

main()
