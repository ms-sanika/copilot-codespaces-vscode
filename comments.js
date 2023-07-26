// create web server
// run: node comments.js
// then visit: http://localhost:3000/ in your browser

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var comments = [];

app.get('/', function(req, res) {
  var commentHTML = comments.map(function(comment) {
    return '<li>' + comment + '</li>';
  }).join('');

  var html = '<html><body>' +
    '<h1>Comments</h1>' +
    '<ul>' + commentHTML + '</ul>' +
    '<form method="post" action="/comments">' +
    '<input type="text" name="comment"/>' +
    '<input type="submit" value="Add Comment"/>' +
    '</form>' +
    '</body></html>';
  res.send(html);
});

app.post('/comments', function(req, res) {
  comments.push(req.body.comment);
  res.redirect('/');
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});