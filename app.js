const http = require('http')
const port = 3000

const server  = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'}); // Set response header
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head><title>Hello Node</title></head>');
    res.write('<body>');
    for (var i = 0; i < 10; i++) {
        res.write('<p>Hello Node</p>'); // Write response
    }
    res.write('</body>');
    res.write('</html>');
    res.end();


/*    
    for(var i; i = 0;i++)
    */
})

server.listen(port, function(error){
    if(error){
        console.log('something went wrong')
    }else{
        console.log('Server is listening on port ' + port)
    }
})