var sum = require('../services/summarizer');
var Article = require('../models/article');

module.exports = {
  index: function(req, res) {
    Article.find({}, function(err, articles) {
      res.view('articles/index', {articles: articles});
    })
  },
  get: function(req, res) {
    Article.findOne({_id: req.params.id}, function(err, article) {
      res.view('articles/show', {summary: article});
    });
  },
  create: function(req, res) {
    sum.get(req.payload.url, function(sumData){
      var article = new Article(sumData);
      article.link = sumData.canonicalLink;
      article.save(function(err, art) {
        if (err) {
          console.log(err);
        }
        console.log(art);
        res.redirect('/articles/' + art._id);
      });
    });
  }
}