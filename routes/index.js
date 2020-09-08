var express = require('express');
var router = express.Router();
var dataUser=require('../Data/Users')

/* GET home page. */
router.get('/', function (req, res, next) {
  dataUser.find()
    .then(data => {
      res.json(data);
    })
});

module.exports = router;
