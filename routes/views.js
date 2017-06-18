var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('partials/home', { title: 'Home' });
});

router.get('/tasks', function(req, res, next) {
  res.render('partials/tasks', { title: 'Tasks' });
});

module.exports = router;