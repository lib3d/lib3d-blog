
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

var models = require('./models');

mongoose.connect('mongodb://localhost:27017/lib3d');

// all environments
app.configure(function() {
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
    app.use(express.static(path.join(__dirname, 'public')));
});

// development only
app.configure('development', function() {
    app.use(express.errorHandler());
});

var api = require('./routes/api');

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/posts', api.postList);
app.post('/post/:_id', api.postSave);
app.post('/post', api.postSave);
app.delete('/post/:_id', api.postDelete);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
