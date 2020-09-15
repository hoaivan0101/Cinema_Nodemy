var express = require('express');
var router = express.Router();
var data=require('../Data/Users')

/* GET users listing. */
router.get('/', function (req, res, next) {
  data.find()
    .then(data => {
      res.json(data)
    })
});

router.get('/:id', function (req, res) {
  console.log(req.params.id);
  data.findOne({ _id:req.params.id})
    .then(data => {
      res.json(data)
    })
})

router.put('/:id', function (req, res) {
  var cartData = req.body;
  data.updateOne({ _id: req.params.id },
    {$push: {
      userCart: cartData,
      }
    })

    .then(data => {
    res.json(data)
    })
    .catch(err => {
      res.json(err)
    })
})

router.delete('/:idCart', function (req, res) {
  data.updateOne({ "userCart._id": req.params.idCart },
    { $pull: { userCart: { _id: req.params.idCart } } })

    .then(data => {
    console.log(data);
    res.json(data)
    })
    .catch(err => {
      res.json(err)
    })
})

module.exports = router;
