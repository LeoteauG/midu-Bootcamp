/* eslint-disable new-cap */
const password = 'Tavitols2410'
const mongo = require('mongoose')
const connectionString = `mongodb+srv://Gustavo:${password}@cluster0.peau9n6.mongodb.net/primerDB?retryWrites=true&w=majority`
const { model, Schema } = mongo
mongo.set('strictQuery', true)

mongo.connect(connectionString)
  .then(() => {
    console.log('database connect')
  })
  .catch((err) => {
    console.error(err)
  })

const noteSchema = new Schema({
  title: String,
  descripcion: String,
  date: Date
})

const Nota = new model('Nota', noteSchema)

const nota = new Nota({
  title: 'Feliz Navidad',
  descripcion: 'Para todo el mundo',
  date: new Date()
})

nota.save()
  .then(result => {
    console.log(result)
    mongo.connection.close()
  })
  .catch(error => {
    console.error(error)
  })
