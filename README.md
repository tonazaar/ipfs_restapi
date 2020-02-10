#### Server side

Starting the backend server

```
node backendnodecontroller.js 

```
#### Client controlling server with node.js

- Starting the user1 server
```
node switch.js start user1
Command = start
User    = user1
Message = Started nodes  

```

- Stopping the user1 server
```
node switch.js stop user1
Command = stop
User    = user1
Message = Stopped nodes  


```

#### Testing the server

- Before starting server testing
Verify we get error
```
node clienttesting.js 
err=FetchError: request to http://localhost:5001/api/v0/add?stream-channels=true failed, reason: connect ECONNREFUSED 127.0.0.1:5001

```
- Starting the server

```
node switch.js start user1
Command = start
User    = user1
Message = Started nodes  

```
- After server start 
Verify it works
```
node clienttesting.js 
[ { path: 'tmp/myfile.txt',
    hash: 'QmNz1UBzpdd4HfZ3qir3aPiRdX5a93XwTuDNyXRc6PKhWW',
    size: 11 },
  { path: 'tmp',
    hash: 'QmWXdjNC362aPDtwHPUE9o2VMqPeNeCQuTBTv1NsKtwypg',
    size: 67 } ]

```
- Stopping the server
```
$ node switch.js stop user1
Command = stop
User    = user1
Message = Stopped nodes  

```
- Testing after server stop
Verify it fails again

```

node clienttesting.js 
err=FetchError: request to http://localhost:5001/api/v0/add?stream-channels=true failed, reason: connect ECONNREFUSED 127.0.0.1:5001
```

#### Note
- The start of server can also be done using startnode.sh
- The stop of server can also be done using stopnode.sh
