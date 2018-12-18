const express = require('express')
const router = express.Router()
// const utils = require('../utils/utils.js')
const chalk = require('chalk')

// middleware specific to this router
router.use(function timeLog (req, res, next) {
  console.log(chalk.grey('logout Time: ', new Date().toISOString()))
  next()
})

/* GET home page. */
router.get('/', function (req, res) {
  req.logout()
  res.redirect('/')
})

module.exports = router
