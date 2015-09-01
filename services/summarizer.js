var sum = require('summarizer').getPage;

module.exports = {
  get: function(url, cb) {
    sum(url).then(function (data) {
      cb(data);
    }, function(err) {
      console.error('Error: ' + err);
    });
  }
}