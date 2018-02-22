const express = require('express');
const router = express.Router();
const utils = require('../utils/utils.js');
const chalk = require('chalk');

// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log(chalk.grey('index Time: ', new Date().toISOString()));
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', utils.opt_index());
});

module.exports = router;
