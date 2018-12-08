const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mean-crud';

mongoose.connect(URI)
    .then(db => console.log('database connected'))
    .catch(err => console.error(err));

module.exports = mongoose;