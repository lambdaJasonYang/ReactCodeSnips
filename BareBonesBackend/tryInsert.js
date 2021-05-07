//This is not part of the server
//This is simply a standalone file and test of accessing and modifying the Model and DB directly
const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0-ostce.mongodb.net/phonebook?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const someClassSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const TheModel = mongoose.model('TheModel', someClassSchema)

if (process.argv.length > 3) {
  const name = process.argv[3]
  const number = process.argv[4]
  const newObject = new TheModel({ name, number })
  
  newObject.save().then(response => {
    console.log(`added ${newObject.name} number ${newObject.number} to Database`)
    mongoose.connection.close()
  })
} else {
  TheModel.find({}).then(result => {
    console.log('database:')
    result.forEach(ObjectInTheModel => {
      console.log(ObjectInTheModel.name, ObjectInTheModel.number)
    })
    mongoose.connection.close()
  })
}