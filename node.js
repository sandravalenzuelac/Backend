import http from 'http';

const server = http.createServer((req, res) => {
    res.end('Hola Backend')
})

const connectedServer = server.listen(8080,()=>{
    console.log("Mi primer server, tuki")
})