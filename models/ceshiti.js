var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var DataSchema = new Schema({
  name:String,
  age:String
});

var ceshiti = mongodb.mongoose.model('ceshiti', DataSchema);
var DataDAO = function(){};
module.exports = new DataDAO();

DataDAO.prototype.save = function(obj, callback){
  var instance = new ceshiti(obj);
  instance.save(function(err){
    callback(err);
  });
}