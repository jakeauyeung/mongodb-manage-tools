var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoadmin');
exports.mongoose = mongoose;