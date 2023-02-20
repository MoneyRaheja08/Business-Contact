//services.js Money Raheja 301276615 05/02/2023
var express = require('express');
var router = express.Router();

/* GET Services page. */
router.get('/', function(req, res, next) {
    res.render('services', { title: 'Services' });
  });

module.exports = router;