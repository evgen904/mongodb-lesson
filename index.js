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

// https://mongoosejs.com/docs/queries.html
// получаем данные
// find({age: 24, name: 'Test text'})
// find({name: {'$in': ['Person 1', 'Person 2', 'Person 3']}})
// .sort('-age') - в обратном порядке
// .limit(2) - лимитировать показ
Person
    .find({name: 'Test text'})
    .then(persons => {
      console.log(JSON.stringify(persons, null, 2));

      // удаление
      //const p = persons[0]
      //Person.find({_id: p._id}).remove().then(_ => { console.log('Removed'); }).catch(e => console.log(e))

    }).catch((e) => {
      console.log(e);
    })

// сохраняем модель в базу
// person.save()
//     .then((user) => {
//       console.log(user)
//     })
//     .catch(e => {
//       console.log(e)
//     });

// [
//   {
//     name: 'Person 1',
//     age: 50
//   },
//   {
//     name: 'Person 2',
//     age: 70
//   },
//   {
//     name: 'Person 3',
//     age: 30
//   }
// ].forEach(person => {
//   new Person(person).save()
// })
