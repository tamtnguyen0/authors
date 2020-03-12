const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/authors', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established connect with database'))
    .catch(err => console.log('Failed to connect to database', err));