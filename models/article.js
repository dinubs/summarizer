var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/');
var shortid = require('shortid');

var Article = mongoose.model('Article', {
  _id: {
    type: String,
    unique: true,
    'default': shortid.generate
  },
  title: String,
  summary: String,
  link: {
    type: String,
    unique: true
  },
  image: String
});

module.exports = Article;