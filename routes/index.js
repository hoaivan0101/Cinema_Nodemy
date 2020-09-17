var express = require('express');
var router = express.Router();
var data = require('../Models/Movies');
var path = require('path');
var checkAuth = require('../controllers/checkAuth')

/* GET home page. */
router.get('/',function (req, res) {
    res.sendFile(path.join(__dirname,'../index.html'))
})

module.exports = router;
