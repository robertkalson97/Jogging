var mongoose = require('mongoose');

var JoggingSchema = new mongoose.Schema({
  distance: String,
  title: String,
  enddate: String,
  speed: String,
  published_year: String,
  comment: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Jogging', JoggingSchema);
