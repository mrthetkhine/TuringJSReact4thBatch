var express = require('express');
var router = express.Router();
var users = require('./../controller/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/',users.saveUser);
router.get('/login', function(req, res, next) {
  res.redirect('/home/');
});
router.get('/hello', users.hello );

router.get('/:userId', function(req, res, next) {
  console.log('/users/:userId');
  next();
  //res.send(`users/:userId ${req.params['userId']}`);
},function(req,res){
  //res.send(`users/:userId ${req.params['userId']}`);
  res.json({
    userId : req.params['userId'],
    name : "Somename"
  });
});

module.exports = router;
