const express = require('express');
var router = express.Router();
var models=require('../Models/sessions')

router.get('/:id/index', function (req, res) {
    res.sendfile('reservation.html')
})

router.get('/:id', function (req, res) {
    models.findOne({
        _id:req.params.id
    })
        .then(data => {
        res.json(data)
    })
})

router.post('/:id', function (req, res) {
    var seat = req.body.seats;
    models.updateOne({
        _id:req.params.id
    },{seats:seat})
        .then(data => {
        res.json(data)
    })
})

module.exports = router;