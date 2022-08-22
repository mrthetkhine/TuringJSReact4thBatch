var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('Route /');
  res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  console.log('home /');
  res.send("Home");
  //next();
});
router.get('/hello', function(req, res, next) {
  console.log('Another Hello /');
  res.set('Content-Type', 'text/plain');
  res.send("<h1>Another Hello</h1>");
});
router.get('/ab?cd', (req, res) => {
  res.send('ab?cd')
})
router.get('/download',(req,res)=>{
  console.log("DirName ",__dirname);
  res.download('./data.txt');
});
router.get('/send',(req,res)=>{
  console.log("DirName ",__dirname);
  let filePath = path.normalize(__dirname+'/../data.txt');
  res.sendFile(filePath,{},(err,data)=>{
    console.log(err);
  });
});
router.get('/badRequest',(req,res)=>{
  res.sendStatus(400).send('Bad request');
});

module.exports = router;
