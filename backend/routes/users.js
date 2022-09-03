var express = require('express');
var router = express.Router();
var users = require('./../controller/UsersController');

/*

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

},function(req,res){

  res.json({
    userId : req.params['userId'],
    name : "Somename"
  });
});
*/

router.get('/:userId', users.getUserById);
router.post('/', users.registerUser);
router.post('/login', users.login);
module.exports = router;

