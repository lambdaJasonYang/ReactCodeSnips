const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const TheModel = require('./Models/SomeClass')

const app = express()

morgan.token('body', function (req) { return JSON.stringify(req.body) })

//Below are the Middleware
app.use(express.static('build'))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

//The callback function, (request,response) => {} 
//would typically be refactored into a CONTROLLER file
app.get('/info', (request, response) => {
  TheModel.find({}).then(target => {
    
    //Typically the html content we return would be refacted into a VIEW folder.
    const content = `
      Our database has info for ${target.length} 
      <br/><br/>        
      ${new Date()}
    `
    response.send(content)
  })
})

app.get('/api/ModelEndpoint', (request, response) => {
  TheModel.find().then(target => {
    response.json(target.map(p => p.toJSON()))
  })
})

app.get('/api/ModelEndpoint/:id', (request, response, next) => {
  TheModel.findById(request.params.id)
    .then(note => {
      if (note) {
        response.json(note.toJSON())
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.post('/api/ModelEndpoint', (request, response, next) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'name or number missing'
    })
  }

  const newObject = new TheModel({
    name: body.name,
    number: body.number,
  })

  newObject.save()
    .then(savedObject => {
      response.json(savedObject.toJSON())
    })
    .catch(error => next(error))

})

app.put('/api/ModelEndpoint/:id', (request, response, next) => {
  const { name, number } = request.body

  TheModel.findByIdAndUpdate(request.params.id, { name, number }, { new: true })
    .then(updatedObject => {
      response.json(updatedObject.toJSON())
    })
    .catch(error => next(error))
})

app.delete('/api/ModelEndpoint/:id', (request, response, next) => {
  TheModel
    .findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3003

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})