const express = require('express')
const router = express.Router()
// const utils = require('../utils/utils.js')
const chalk = require('chalk')

// middleware specific to this router
router.use(function timeLog (req, res, next) {
  console.log(chalk.grey('profile Time: ', new Date().toISOString()))
  next()
})

/* GET home page. */
router.get('/', require('connect-ensure-login').ensureLoggedIn(), function (req, res) {
  res.render('profile.ejs', {
    user: req.user
  })
})

module.exports = router
