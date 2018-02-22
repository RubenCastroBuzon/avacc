var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var index = require('./routes/index');
var donate = require('./routes/donate');
var users = require('./routes/users');
var alta = require('./routes/alta');
var baja = require('./routes/baja');
var about = require('./routes/about');

app.use('/', index);
app.use('/donate', donate);
app.use('/users', users);
app.use('/about', about);
//app.use('/alta', alta);
//app.use('/baja', baja);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error(req.path + ' Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
