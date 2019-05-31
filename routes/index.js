var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/game', function (req, res, next) {
    res.render('game/index', {
        layout: 'index',
    });
});

module.exports = router;
