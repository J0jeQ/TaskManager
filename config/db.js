const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nazwa_bazy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Połączono z bazą danych MongoDB');
})
.catch(err => {
  console.error('Błąd połączenia z bazą danych:', err);
});