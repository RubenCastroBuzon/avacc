const express = require('express');
const router = express.Router();
const chalk = require('chalk');

// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log(chalk.grey('users Time: ', new Date().toISOString()));
  next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
