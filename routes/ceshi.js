var ceshiti = require('../models/ceshiti.js');

exports.add = function(req, res){

  if(req.params.name){
    return res.render('add', {

    });
  } else{
    return res.render('add', {

    });
  }
};

exports.doAdd = function(req, res){
  
  var json = req.body.content;

console.log(json);

  if(json._id){//update

  } else{//inster
    ceshiti.save(json, function(err){
      if(err) {
        res.send({'success': false, 'err': err});
      } else{
        res.send({'success': true});
      }
    })
  }
}