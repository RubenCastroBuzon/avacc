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
    res.status(301).redirect('https://docs.google.com/forms/d/e/1FAIpQLSeVhq1uXu0V_uaEUxIOmP42W5aJQcdjgwCe4Cn7U861oAzRkw/viewform');
});

module.exports = router;
