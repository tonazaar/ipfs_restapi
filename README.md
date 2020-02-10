****Server side

Starting the backend server

```
node backendnodecontroller.js 

```
****Client controlling server 

Starting the user1 server
```
node switch.js start user1
Command = start
User    = user1
Message = Started nodes  

```

Stopping the user1 server
```
node switch.js stop user1
Command = stop
User    = user1
Message = Stopped nodes  


```

***Testing the server

Before starting server testing
```
node clienttesting.js 
err=FetchError: request to http://localhost:5001/api/v0/add?stream-channels=true failed, reason: connect ECONNREFUSED 127.0.0.1:5001

```
Starting the server
```
rameshbn@openvpn-srv:~/ipfsworks/two/ipfs_restapi$ node switch.js start user1
Command = start
User    = user1
Message = Started nodes  

```
After server start testing
```
node clienttesting.js 
[ { path: 'tmp/myfile.txt',
    hash: 'QmNz1UBzpdd4HfZ3qir3aPiRdX5a93XwTuDNyXRc6PKhWW',
    size: 11 },
  { path: 'tmp',
    hash: 'QmWXdjNC362aPDtwHPUE9o2VMqPeNeCQuTBTv1NsKtwypg',
    size: 67 } ]

```
Stopping the server
```
$ node switch.js stop user1
Command = stop
User    = user1
Message = Stopped nodes  

```
Testing after server stop
```

node clienttesting.js 
err=FetchError: request to http://localhost:5001/api/v0/add?stream-channels=true failed, reason: connect ECONNREFUSED 127.0.0.1:5001
