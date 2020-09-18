const express = require('express');
var router = express.Router();
var User = require('../Models/Users');

router.get('/', function (req, res) {
    res.render('signup')
})

router.post('/', function (req, res) {
    let username = req.body.userName;
    let email = req.body.userEmail;
    let CheckAccount = true;

     User.find()
        .then(data => {
            for (i of data) { 
                if (username === i.userName||email==i.userEmail) { CheckAccount = false; break;}
            }
            User.create(req.body)
            .then(data => {
                res.json(CheckAccount);
            })
            .catch(err => {
            res.json(err)
        })
        })
    
})

module.exports =router;