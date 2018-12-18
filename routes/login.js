const express = require('express')
const router = express.Router()
const utils = require('../utils/utils.js')
const chalk = require('chalk')
const passport = require('passport')

const bodyParser = require('body-parser')
const csrf = require('csurf')

var csrfProtection = csrf({ cookie: true })
var parseForm = bodyParser.urlencoded({ extended: false })

// middleware specific to this router
router.use(function timeLog (req, res, next) {
  console.log(chalk.grey('login Time: ', new Date().toISOString()))
  next()
})

/* GET home page. */
router.get('/', csrfProtection, function (req, res) {
  var opt = utils.opt_login()
  opt.csrfToken = req.csrfToken()
  res.locals.csrftoken = opt.csrfToken
  res.render('login.ejs', opt)
})

router.post('/', parseForm, csrfProtection, passport.authenticate('local', {
  failureRedirect: '/login'
}), function (req, res) {
  res.redirect('/')
})

module.exports = router
