var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/ruben', function(req, res, next) {
    res.render('index', { title: 'Ruben' });
});

module.exports = router;
