const express = require('express');
const IPFS = require('ipfs');
const Ctl = require('ipfsd-ctl')
const ipfsClient = require('ipfs-http-client');

const ipfs = ipfsClient('http://localhost:5001');
const app = express();

var    ipfsid1 ;
var    ipfsid2 ;
app.use(express.json());

var setup = [
	{
	name:"user1",
	port: 5001,
        ipaddress : "0.0.0.0"
        },
	{
	name:"user2",
	port: 5002,
        ipaddress : "0.0.0.0"
        },
];

var config1 = {
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

var config2 = {
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

app.get('/', (req, res) => {
    return res.send('Welcome to my IPFS app');
});

app.get('/startnode', (req, res) => {
var userid=req.param('userid'); 
var id ;
   if(userid == 'user1') {
    id = ipfsd1.api.id();
    console.log("ipfsid="+id);
    ipsid1 = user1server() ;
   }
   if(userid == 'user2') {
    id = ipfsd2.api.id();
    console.log("ipfsid="+id);
    ipsid2 = user2server() ;
   }
    return res.send('Started nodes  ');
});

app.get('/stopnode', (req, res) => {
var userid=req.param('userid'); 
var id ;
    ipsid1.stop();
   if(userid == 'user2') {
    id = ipfsd2.api.id();
    console.log("ipfsid="+id);
    ipsid2.stop();
    id = ipfsd2.api.id();
    console.log("ipfsid="+id);
   }
   if(userid == 'user1') {
    console.log("ipfsid="+ipfsd1.api.id());
    ipsid1.stop();
    console.log("ipfsid="+ipfsd1.api.id());
   }
    return res.send('Stopped nodes  ');
});

app.get('/getporttouse', (req, res) => {
//	req.param 
   if(userid == 'user2') {
     return res.json(setup[1]);
   }
   if(userid == 'user1') {
     return res.json(setup[0]);
   }


});

/*
app.post('/upload', async (req, res) => {
    const data = req.body;
    console.log(data);
    const fileHash = await addFile(data);
    return res.send(`https://gateway.ipfs.io/ipfs/${ fileHash }`);
});

const addFile = async ({ path, content }) => {
    const file = { path: path, content: Buffer.from(content) };
    const filesAdded = await ipfs.add(file);
    return filesAdded[0].hash;
}

*/


async function user1server() 
{
const factory = Ctl.createFactory({ type: 'js', 
	ipfsOptions: {
        repo: '/home/rameshbn/ramipfs',
        config: config1
		 },
	test: true, disposable: true })
ipfsd1 = await factory.spawn() // Spawns using options from `createFactory`

var id = ipfsd1.api.id();
console.log(ipfsd1.api.id())
}


async function user2server() 
{
const factory1 = Ctl.createFactory({ type: 'js', 
	ipfsOptions: {
        repo: '/home/rameshbn/ramipfs1',
        config: config2
		 },
	test: true, disposable: true })
ipfsd2 = await factory1.spawn() // Spawns using options from `createFactory`
console.log(ipfsd2.api.id())



}


app.listen(8080, () => {
    console.log('Server running on port 8080');
});


