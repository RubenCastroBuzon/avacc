const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const passport = require('passport')

const foo = require('./passport/user.js')

var app = express()

app.disable('x-powered-by')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser('avacc_cookie'))
app.use(express.static(path.join(__dirname, 'public')))

var session = require('express-session')
app.use(session({
  secret: 'cocodrilo',
  key: 'sessionid',
  resave: false,
  saveUninitialized: false
}))

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize())
app.use(passport.session())

var index = require('./routes/index')
var donate = require('./routes/donate')
var alta = require('./routes/alta')
var baja = require('./routes/baja')
var about = require('./routes/about')
var login = require('./routes/login')
var logout = require('./routes/logout')
var profile = require('./routes/profile')

app.use('/', index)
app.use('/donate', donate)
app.use('/about', about)
app.use('/alta', alta)
app.use('/baja', baja)
app.use('/login', login)
app.use('/logout', logout)
app.use('/profile', profile)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error(req.path + ' Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  if (err.code === 'EBADCSRFTOKEN') {
    res.redirect('/login')
  }

  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
