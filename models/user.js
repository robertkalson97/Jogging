var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
  firstName: {
		type: String,
		default: ''
	},
  lastName: {
		type: String,
		default: ''
	},
  username: {
		type: String,
		default: ''
  },
  provider: {
		type:String,
		default: ''
	},
	email: {
		type: String,
		default: ''
  },
  picture: {
		type: String,
		default: ''
	},
  password: {
		type: String,
		default: ''
  },
  activity: {
		type: Intl,
		default: 0
  },
},
  {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function (newUser, callback) {

  bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(newUser.password, salt, function (err, hash) {
          newUser.password = hash;
          newUser.save(callback);
      });
  });
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
      if (err) throw err;
      callback(null, isMatch);
  });
}




