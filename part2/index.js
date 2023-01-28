const express = require('express')
const app = express()
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.body)
  console.log(req.method)
  next()
})

let Notas = [
  {
    id: 1,
    content: 'Cambiando algo',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Hola Mundo</h1>')
})

app.get('/notas', (req, res) => {
  res.json(Notas)
})

app.get('/notas/nota/:id', (req, res) => {
  const id = Number(req.params.id)
  const notas = Notas.find((Notas) => {
    return (
      Notas.id === id
    )
  })
  if (notas) {
    res.json(notas)
  } else {
    res.status(404).send('No existe ese id en nuestra base de datos')
  }
})

app.delete('/notas/nota/:id', (req, res) => {
  const id = Number(req.params.id)
  Notas = Notas.filter((nota) => {
    return (
      nota.id !== id
    )
  })
  res.status(204).end()
})

app.post('/notas/nota', (req, res) => {
  const nota = req.body
  const id = Notas.map(nota => nota.id)
  const idMax = Math.max(...id)
  const Nota = {
    id: idMax + 1,
    content: nota.content,
    important: typeof (nota.important) !== 'undefined' ? nota.important : false,
    date: new Date().toISOString()
  }
  if (!nota || !nota.content) {
    return res.status(400).send(
      {
        error: 'No saldra nunca si no colocaste alguna nota :v'
      }
    )
  }

  Notas = [...Notas, Nota]
  res.json(Nota)
})
app.use((req, res) => {
  res.status(404).send('Esta pagina no existe')
})

const port = 3001
app.listen(port, () => {
  console.log(`se esta corriendo en el puerto ${port}`)
})
