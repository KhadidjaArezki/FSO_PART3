const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  id: String,
  name: {
    type: String,
    minlength: 3,
    required: true,
    unique: true
  }, 
  number: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return (/(?:\d.*){8,}/).test(v)
      },
      message: 'Number must contain at least 8 digits'
    }
  }
})

personSchema.plugin(uniqueValidator, {
  message: '{TYPE} constraint violation error: The {PATH} {VALUE} already exists in the phonebook',
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)
