const express = require('express');
const router = express.Router();
const chalk = require('chalk');

// middleware specific to this router
router.use(function timeLog(req, res, next) {
    console.log(chalk.grey('baja Time: ', new Date().toISOString()));
    next();
  });

/* GET donate page. */
router.get('/', function(req, res, next) {
    res.redirect('https://docs.google.com/forms/d/e/1FAIpQLSfXrrjmTXLCqxoqpwWaTGxNpJVct26LAG02FNvMCyvsD-M30Q/viewform');
});

module.exports = router;
