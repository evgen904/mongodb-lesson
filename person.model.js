const mongoose = require('mongoose')
const Schema = mongoose.Schema

// создаем схему и регистрируем как модель
const PersonSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    min: 18,
    max: 90,
    default: 20
  },
  isMarried: {
    type: Boolean,
    default: false
  },
  phones: {
    // тип массив в котором хранятся цифры
    type: [Number],
    default: []
  }
})

// указываем название коллекции
mongoose.model('persons', PersonSchema)
