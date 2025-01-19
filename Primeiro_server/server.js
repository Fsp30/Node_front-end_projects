const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) =>{
    if (req.url === '/'){
        fs.readFile(path.join(__dirname, 'index.html'),(err, content)=>{
            if(err){
                res.writeHead(500)
                res.end('Falha ao carregar arquivo')
            }else{
                res.writeHead(200, {'Content-type': 'text/html'})
                res.end(content)
            }
        })
    }else{
        res.writeHead(404)
        res.end("Arquivo não encontrado")
    }
})

server.listen(3000, ()=>{
    console.log("Server na porta http://localhost:3000")
})