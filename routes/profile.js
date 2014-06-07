var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var products_list = {
			prod1: {"name":"Product 1", "url":"www.olapic.com/1", "image":"images.olapic.com/1"},
			prod2: {"name":"Product 2", "url":"www.olapic.com/2", "image":"images.olapic.com/2"},
			prod3: {"name":"Product 3", "url":"www.olapic.com/3", "image":"images.olapic.com/3"}};
	res.render('profile', { title: 'Express', products: products_list });
});

module.exports = router;
