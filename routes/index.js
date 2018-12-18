const express = require('express')
const router = express.Router()
const utils = require('../utils/utils.js')
const chalk = require('chalk')

// middleware specific to this router
router.use(function timeLog (req, res, next) {
  console.log(chalk.grey('index Time: ', new Date().toISOString()))
  next()
})

/* GET home page. */
router.get('/',
  // require('connect-ensure-login').ensureLoggedIn(),
  function (req, res) {
    res.locals.login = req.isAuthenticated()
    var opt = utils.opt_index()
    opt.user = req.user
    res.render('index', opt)
  })

module.exports = router
