//projects.js Money Raheja 301276615 05/02/2023
var express = require('express');
var router = express.Router();

/* GET Projects page. */
router.get('/', function(req, res, next) {
    res.render('projects', { title: 'Projects' });
  });

module.exports = router;