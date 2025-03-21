const mongoose = require('mongoose');

const url = process.env.url ?? '127.0.0.1:27017/nodeSchoolApp';

mongoose.connect(url).then((req, res) => {
    console.log('DataBase Connected.');
}).catch((err) => {
    console.log('Error Occurred', err);
})

module.exports = mongoose;