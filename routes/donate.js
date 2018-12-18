const express = require('express')
const router = express.Router()
const utils = require('../utils/utils.js')
const chalk = require('chalk')

// middleware specific to this router
router.use(function timeLog (req, res, next) {
  console.log(chalk.grey('donate Time: ', new Date().toISOString()))
  next()
})

/* GET donate page. */
router.get('/', function (req, res) {
  res.render('donate', utils.opt_donate())
})

module.exports = router
