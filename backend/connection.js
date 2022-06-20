const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://naoufel:9907C2lqTSaSgIEp@cluster0.bgr7g.mongodb.net/test', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connection ok')
});