A) Set IPFS_PATH=/home/rameshbn/ramipfs

B) Run jsipfs daemon

C) Provide permission
```
ipfs config Addresses.API /ip4/0.0.0.0/tcp/5001
ipfs config Addresses.Gateway /ip4/0.0.0.0/tcp/9001
You may also need to set CORS:
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*"]'
```

4) In one terminal
```
node command.js
[ { path: 'tmp/myfile.txt',
hash: 'QmNz1UBzpdd4HfZ3qir3aPiRdX5a93XwTuDNyXRc6PKhWW',
size: 11 },
{ path: 'tmp',
hash: 'QmWXdjNC362aPDtwHPUE9o2VMqPeNeCQuTBTv1NsKtwypg',
size: 67 } ]

```

5)  In another terminal
```
node measure.js
{"numObjects":"20","repoSize":"41357","repoPath":"/home/rameshbn/ramipfs","version":"7","storageMax":"9007199254740991"}


```

6) Two nodes in one node.js app

```
node twonodeselfprogram.js

```

To check if it is working

```
 node command2repo.js 
err=FetchError: request to http://localhost:5001/api/v0/add?stream-channels=true failed, reason: connect ECONNREFUSED 127.0.0.1:5001
err=FetchError: request to http://localhost:5002/api/v0/add?stream-channels=true failed, reason: connect ECONNREFUSED 127.0.0.1:5002


```
Expected to fail

Note:-
npm libraries to use
 - "ipfs-http-client": "^40.0.0" (works)
 - "ipfs-http-client": "^42.0.0" (does not work)

7) Two nodes in one node.js app, reachable by clients

```
node twonodeservingprogram.js

```

To check if it is working

```
node command2repo.js 
repo2=[{"path":"tmp/myfile.txt","hash":"QmNz1UBzpdd4HfZ3qir3aPiRdX5a93XwTuDNyXRc6PKhWW","size":11},{"path":"tmp","hash":"QmWXdjNC362aPDtwHPUE9o2VMqPeNeCQuTBTv1NsKtwypg","size":67}]
repo1=[{"path":"tmp/myfile.txt","hash":"QmNz1UBzpdd4HfZ3qir3aPiRdX5a93XwTuDNyXRc6PKhWW","size":11},{"path":"tmp","hash":"QmWXdjNC362aPDtwHPUE9o2VMqPeNeCQuTBTv1NsKtwypg","size":67}]


```
Expected to work

Note:-
npm libraries to use
 - "ipfs-http-client": "^40.0.0" (works)
 - "ipfs-http-client": "^42.0.0" (does not work)

