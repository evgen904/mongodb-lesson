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
