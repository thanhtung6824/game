var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/game', function (req, res, next) {
    res.render('index', {
        layout: 'index',
        title: ':: Salefie App | Simplify sale field  ::',
        activity: 'Places',
    });
});

module.exports = router;
