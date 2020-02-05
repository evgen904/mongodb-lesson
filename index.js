// подкл. плагин для работы с монго
const mongoose = require('mongoose')

// убираем варнинги
mongoose.Promise = global.Promise

// mongoose.connect можно подкл. к базе если она есть, если ее нет то она созздастся
mongoose.connect('mongodb://localhost/youtube-video', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB has started...');
  })
  .catch((error) => {
    console.log(error);
  })

// регистрируем схему которую создали
require('./person.model.js')

const Person = mongoose.model('persons')

// экземпляр класса Person
const person = new Person({
  name: 'Test text',
  age: 24,
  phones: [654654654]
})

// сохраняем модель в базу
person.save()
    .then((user) => {
      console.log(user)
    })
    .catch(e => {
      console.log(e)
    })
