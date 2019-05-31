var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('places/index', {
        layout: 'index',
        title: ':: Salefie App | Simplify sale field  ::',
        activity: 'Places',
    });
});

module.exports = router;
