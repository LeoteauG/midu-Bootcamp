const password = 'Tavitols2410'
const mongo = require('mongoose')
const connectionString = `mongodb+srv://Gustavo:${password}@cluster0.peau9n6.mongodb.net/primerDB?retryWrites=true&w=majority`

mongo.set('strictQuery', true)

mongo.connect(connectionString)
  .then(() => {
    console.log('database connect')
  })
  .catch((err) => {
    console.error(err)
  })
