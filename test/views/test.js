const assert = require('assert')
const validator = require('html-validator')

const pug = require('pug')
const utils = require('../../utils/utils.js')

const fs = require('fs')
const ejs = require('ejs')
const path = require('path')

var viewsTest = function (file, opt, done) {
  var options
  var ext = path.extname(file)
  if (ext === '.pug') {
    // Compile the source code
    const compiledFunction = pug.compileFile(file)
    const compiledData = compiledFunction(opt)

    options = {
      data: compiledData,
      format: 'text'
    }
  } else if (ext === '.ejs') {
    // Compile the source code
    const compiledFunction = ejs.compile(fs.readFileSync(file, 'utf8'))
    const compiledData = compiledFunction(opt)

    options = {
      data: compiledData,
      format: 'text'
    }
  }

  // Callback
  validator(options, (error, data) => {
    if (error) {
      if ((error.message !== undefined) && (error.message === 'Validator returned unexpected statuscode: 503')) {
        assert.ok('Service Unavailable. ' + error.message)
      } else {
        assert.fail(error)
      }
    } else {
      const retOk = 'The document validates according to the specified schema(s).\n'
      assert.equal(data, retOk)
    }
    done()
  })
  /*
    //Promise
    validator(options)
        .then((data) => {
            var assert = require("assert");
            console.log('promise ok:' + data);
            var ret_ok = 'The document validates according to the specified schema(s).';
            assert.equal(data,ret_ok);
        })
        .catch((error) => {
            var assert = require("assert");
            assert.fail('eee');
            console.error('promise ok:' + data);
        })
     */
}

describe('Render', function () {
  describe('index', function () {
    it('should return "The document validates according to the specified schema(s)."', function (done) {
      viewsTest('views/index.pug', utils.opt_index(), done)
    })
  })
  describe('about', function () {
    it('should return "The document validates according to the specified schema(s)."', function (done) {
      viewsTest('views/about.pug', utils.opt_about(), done)
    })
  })
  describe('donate', function () {
    it('should return "The document validates according to the specified schema(s)."', function (done) {
      viewsTest('views/donate.pug', utils.opt_donate(), done)
    })
  })
  describe('login', function () {
    it('should return "The document validates according to the specified schema(s)."', function (done) {
      viewsTest('views/login.ejs', utils.opt_login(), done)
    })
  })
  describe('profile', function () {
    it('should return "The document validates according to the specified schema(s)."', function (done) {
      viewsTest('views/profile.ejs', utils.opt_profile(), done)
    })
  })
})
