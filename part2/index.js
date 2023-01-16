const http = require('http')

const app = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end("Hola Tavito")
})
const port = 3001
app.listen(port)
console.log(`se esta corriendo en el puerto ${port}`)

