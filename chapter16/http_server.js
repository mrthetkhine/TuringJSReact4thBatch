const net = require("net");

let server = net.createServer();
server.on('connection', handleConnection);

let message = "<h1>Hello From Node.js Web Server</h1>";
let httpResponse = `HTTP\\1.1 200 OK
Connection:close
Content-type:text/html
Content-Length:${message.length}

${message}
`

function handleConnection(conn)
{
    var remoteAddress = conn.remoteAddress + ':' + conn.remotePort;  
    console.log('new client connection from %s', remoteAddress);
    conn.on('data', onConnData);  
    conn.once('close', onConnClose);  
    conn.on('error', onConnError);
    function onConnData(d) {  
      console.log('connection data from %s:', remoteAddress);  
      console.log(d.toString());
      conn.write(httpResponse);
    }
    function onConnClose() {  
      console.log('connection from %s closed', remoteAddress);  
    }
    function onConnError(err) {  
      console.log('Connection %s error: %s', remoteAddress, err.message);  
    } 
}
server.listen(8080, function() {    
    console.log('server listening to %j', server.address());  
});