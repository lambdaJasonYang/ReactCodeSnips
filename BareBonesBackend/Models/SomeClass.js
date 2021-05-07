const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
require('dotenv').config()

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

const url = process.env.MONGODB_URI

console.log('connecting to', url)
//--------------------------------------[Connect to DB]
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })
//--------------------------------------[Connect to DB]

//Below is a model for the class-----------------------------------[Model]
const someClassSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    unique: true
  },
  number: {
    type: String,
    minlength: 8
  }
})
//-----------------------------------------------------------------[Model]

//Transform the id from "_id" to "id"
someClassSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

someClassSchema.plugin(uniqueValidator);
module.exports = mongoose.model('TheModel', someClassSchema)