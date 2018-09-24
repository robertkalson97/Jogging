var express = require('express');
var passport = require('passport');
var { generateToken, sendToken } = require('./utils/token.utils');
var router = express.Router();
var mongoose = require('mongoose');
var Jogging = require('../models/Jogging.js');
var User = require('../models/user.js');

/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
  Jogging.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function(req, res, next) {
  Jogging.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BOOK */
router.post('/', function(req, res, next) {
  console.log(req.body);
  Jogging.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  Jogging.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Jogging.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.post('/user', function(req, res, next) {
  var newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password
  });
  console.log(newUser+"1*----");
  User.createUser(newUser, function (err, user) {  
    console.log(err)  
    if (err) {
        res.send({'state': 0});
    } else {
        res.send({
            'username': req.body.username,
            'state': 1,
            'message': 'Your account has been successfully created!'
        });
    }
});
});

// router.post('/user/authentication', function(req, res, next) {
//   console.log(req.body);
//   authenticate(req.body, function (err, post) {
//     if (err) {
//       return next(err);
//     }
//     res.json(post);
//   });
// });

router.post('/user/authentication', function (req, res) {
  console.log(13212131313)
  console.log(req.body);
        
  User.findOne({
      username: req.body.username,
  }, function (err, result) {
      if (!result) {
          res.send({
              'state': 404,
              'message': 'There isn’t Email Address!'
          });
      } else {
          var userpassword = result.password;
          var password = req.body.password;
          var username = req.body.username;
          console.log(password+userpassword)
          User.comparePassword(password, userpassword, function (err, isMatch) {
              if (err) throw err;
              if (isMatch) {
                res.send({
                    'state': 1,
                    'username': result.username,
                    'message': 'Successfully Login!'
                })
              } else {
                  res.send({
                      'state': 0,
                      'message': 'Password isn’t correct!'
                  });
              }
          });
      }
  });
});

var GoogleTokenStrategy = require('passport-google-token').Strategy;

passport.use(new GoogleTokenStrategy({
	clientID: config.googleAuth.clientID,
	clientSecret: config.googleAuth.clientSecret
	},
	function (accessToken, refreshToken, profile, done) {
			// console.log(profile);
			var email = profile.id;
			var provider = profile.provider;
			var username = profile.displayName;
			var picutre = profile._json.picture;
			User.findOne({
				email: email
			}, function (err, result) {
				if (!result) {
					var newUser = new User({
						username: username,
						email: email,
						picture: picutre,
						provider: provider,
						activity: 1
					});
					User.createUser(newUser, function (err, user) {		
						return done(err, user);
					});
				}
				else{
					return done(err,result);
				}

			});
	}
));


app.post('/user/google', passport.authenticate('google-token', {session: false}),  function(req, res, next) {
    console.log("user : ",req.user, ", token : " ,req.body.access_token);
    if (!req.user) {
        return res.send(401, 'User Not Authenticated');
    }
    req.auth = {
        id: req.user.id
    };
    next();
}, generateToken, sendToken);


module.exports = router;
