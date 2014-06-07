var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('profile', { title: 'Express', products: [
        {url:'http://www.olapic.com/1', image:'images.olapic.com/1'}, 
        {url:'http://www.olapic.com/1', image:'images.olapic.com/1'}, 
        {url:'http://www.olapic.com/1', image:'images.olapic.com/1'}, 
        {url:'http://www.olapic.com/1', image:'images.olapic.com/1'}
    ]});
});

module.exports = router;
