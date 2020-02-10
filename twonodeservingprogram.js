
const IPFS = require('ipfs');
const Ctl = require('ipfsd-ctl')
//config = require('/home/rameshbn/ramipfs/config');
//config1 = require('/home/rameshbn/ramipfs1/config');

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


async function main() 
{
const factory = Ctl.createFactory({ type: 'js', 
	ipfsOptions: {
        repo: '/home/rameshbn/ramipfs',
        config: config
		 },
	test: true, disposable: true })
const ipfsd = await factory.spawn() // Spawns using options from `createFactory`

console.log(await ipfsd.api.id())

const factory1 = Ctl.createFactory({ type: 'js', 
	ipfsOptions: {
        repo: '/home/rameshbn/ramipfs1',
        config: config1
		 },
	test: true, disposable: true })
const ipfsd1 = await factory1.spawn() // Spawns using options from `createFactory`
console.log(await ipfsd1.api.id())



}

main()

