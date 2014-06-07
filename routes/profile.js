var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('profile', { title: 'Express', products: [
        {name: "Product 1", url:'http://www.olapic.com/1', image:'img/portfolio/pix1-th.jpg'}, 
        {name: "Product 2", url:'http://www.olapic.com/2', image:'img/portfolio/pix1-th.jpg'}, 
        {name: "Product 3", url:'http://www.olapic.com/3', image:'img/portfolio/pix1-th.jpg'}, 
        {name: "Product 4", url:'http://www.olapic.com/4', image:'img/portfolio/pix1-th.jpg'}
    ]});
});

module.exports = router;
