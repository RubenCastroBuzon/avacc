'use strict'
const assert = require('assert')

const validateFile = require('csstree-validator').validateFile
const reporter = require('csstree-validator').reporters.checkstyle

var check = function (file) {
  describe(file, function () {
    it('should be empty', function () {
      var tmp = validateFile(file)
      if (tmp[file].length !== 0) console.log(reporter(validateFile(file)))
      assert.equal(tmp[file].length, 0)
    })
  })
}

describe('css', function () {
  check('./public/stylesheets/avacc.css')
  check('./public/stylesheets/blog.css')
  check('./public/stylesheets/blog-old-ie.css')
  check('./public/stylesheets/marketing.css')
  check('./public/stylesheets/marketing-old-ie.css')
  check('./public/stylesheets/pure-custom.css')
  check('./public/stylesheets/socialmedia.css')

  /*
    not support.
    filter: progid:DXImageTransform.Microsoft.AlphaImageLoader

    check('./public/stylesheets/pricing.css');
    check('./public/stylesheets/pricing-old-ie.css');
    check('./public/stylesheets/tooltips.css');
    */
})
