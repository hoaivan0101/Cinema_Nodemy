var express = require('express');
var router = express.Router();
var data = require('../Models/Movies');
var path = require('path');
var checkAuth = require('../controllers/checkAuth')

/* GET home page. */
router.get('/',function (req, res) {
    res.sendFile(path.join(__dirname,'../index.html'))
})

router.get('/films', function (req, res, next) {
    data.find()
        .then(data => {
            res.json(data);
    })
        .catch(err => {res.json(err)})
});

router.get('/films/:id', function (req, res, next) {
    data.find({_id:req.params.id})
        .then(data => {
            res.render('detail',{data:data[0]})
    })
        .catch(err => {res.json(err)})
});



module.exports = router;
