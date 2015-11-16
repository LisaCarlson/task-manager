var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/tasks');
var taskCollection = db.get('tasks');

/* GET home page. */

router.get('/register', function(req, res, next) {
  res.render('register.jade');
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Task App' });
});



module.exports = router;
