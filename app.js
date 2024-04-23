const http = require('http')
const fs = require('fs')//file stream
const port = 3000

const server  = http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error, data){
        if(error){
            res.writeHead(404)
            res.write('Error: File not found')
        }else{
            for(var i = 0; i < 10; i++){
                    res.write(data)
            }

        }
        res.end()
    })
})

server.listen(port, function(error){
    if(error){
        console.log('something went wrong')
    }else{
        console.log('Server is listening on port ' + port)
    }
})