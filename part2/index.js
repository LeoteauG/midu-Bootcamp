const Notas = [
      {
        "id": 1,
        "content": "Cambiando algo",
        "date": "2019-05-30T17:30:31.098Z",
        "important": true
      },
      {
        "id": 2,
        "content": "Browser can execute only JavaScript",
        "date": "2019-05-30T18:39:34.091Z",
        "important": false
      },
      {
        "id": 3,
        "content": "GET and POST are the most important methods of HTTP protocol",
        "date": "2019-05-30T19:20:14.298Z",
        "important": true
      }
    ]

const http = require('http')

const app = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'})
    res.end("Hola brother")
})


const port = 3001
app.listen(port)
console.log(`se esta corriendo en el puerto ${port}`)

