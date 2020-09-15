var express = require('express');
var router = express.Router();
var User = require('../Models/Users')
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var jwt = require('jsonwebtoken');
var session = require('express-session')

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.render('login');
});

//set passport-local login
passport.use(new LocalStrategy(
  function (username, password, done) {
    console.log(username);
    console.log(password);
    User.findOne({ 
      userName: username,
      userPassword: password,
    })
      .then(data => {
        if (!data) { return done(null, false) }
        else {return done(null,data)}
      })
      .catch(err => {
        return done(err)
      });
  }
));

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user) {
    if (err) { return res.json(err) }
    if (!user) { return res.json('Fail') }
    var token = jwt.sign(user.id, 'mk');
    req.session.token = token;
    return res.json(token)
  })(req, res, next);
});

// Log Out
router.get('/logout', function (req, res) {
  req.session.destroy();
  res.redirect('/user')
})

module.exports = router;
