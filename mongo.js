const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}
const password = process.argv[2]
// console.log(process.argv);
const url =
  `mongodb+srv://khadj999:${password}@cluster0.pklri.mongodb.net/FSOphonebookDB?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  id: Number,
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
  console.log('Phonebook:')
  Person.find({}).then(result => {
    result.forEach(person => console.log(`${person.name} ${person.number}`))
    mongoose.connection.close()
  })
}

else {
  const person = new Person({
    id: Number((Math.random() * 1000).toFixed(0)),
    name: process.argv[3],
    number: process.argv[4]
  })

  person.save().then(result => {
    console.log(`Added ${result.name} number ${result.number} to phonebook`);
    console.log(result);
    mongoose.connection.close()
  })
}
