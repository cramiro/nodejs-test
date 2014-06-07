var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { options: ['Option 1', 'Option 2', 'Option 3'] });
});

module.exports = router;
