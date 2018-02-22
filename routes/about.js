const express = require('express');
const router = express.Router();
const utils = require('../utils/utils.js');
const chalk = require('chalk');

// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log(chalk.grey('about Time: ', new Date().toISOString()));
  next();
});

/* GET about page. */
router.get('/', function (req, res, next) {
  res.render('about', utils.opt_about());
});

module.exports = router;