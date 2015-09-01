var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/');
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