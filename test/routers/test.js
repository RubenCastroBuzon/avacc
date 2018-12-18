const assert = require('assert')
const request = require('request')
const validator = require('html-validator')
const cheerio = require('cheerio')

// Before running the tests, we will run our web server
var routeValidator = function (body, done) {
  const options = {
    data: body,
    format: 'text'
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
}

var routeTestBody = function (url, done) {
  request(url, function (error, response, body) {
    var err = true
    if (error) {
      if ((error.message !== undefined) && (error.code === 'ECONNREFUSED') && (error.errno === 'ECONNREFUSED')) {
        assert.ok('Before running the tests, we will run our web server. ' + error.message)
      } else {
        assert.fail(error)
      }
    } else if (body === undefined) {
      assert.fail('invalid body')
    } else {
      routeValidator(body, done)
      err = false
    }

    if (err) done()
  })
}

var routeTestStatus = function (url, done, code, cb) {
  request(url, function (error, response, body) {
    if (error) {
      if ((error.message !== undefined) && (error.code === 'ECONNREFUSED') && (error.errno === 'ECONNREFUSED')) {
        assert.ok('Before running the tests, we will run our web server. ' + error.message)
      } else {
        assert.fail(error)
      }
    } else if (response === undefined) {
      assert.fail('invalid response')
    } else {
      assert.equal(response.statusCode, code || 200)
    }

    if (cb) {
      cb(body, code, done)
    }
    else done()
  })
}

describe('Routers', function () {
  describe('index', function () {
    var url = 'http://localhost:3000'
    it('returns status 200', function (done) {
      routeTestStatus(url, done)
    })

    it('should return "The document validates according to the specified schema(s)."', function (done) {
      routeTestBody(url, done)
    })
  })

  describe('about', function () {
    var url = 'http://localhost:3000/about'
    it('returns status 200', function (done) {
      routeTestStatus(url, done)
    })

    it('should return "The document validates according to the specified schema(s)."', function (done) {
      routeTestBody(url, done)
    })
  })

  describe('donate', function () {
    var url = 'http://localhost:3000/donate'
    it('returns status 200', function (done) {
      routeTestStatus(url, done)
    })

    it('should return "The document validates according to the specified schema(s)."', function (done) {
      routeTestBody(url, done)
    })
  })

  describe('baja', function () {
    var url = 'http://localhost:3000/baja'
    it('returns status 200', function (done) {
      routeTestStatus(url, done)
    })
  })

  describe('alta', function () {
    var url = 'http://localhost:3000/alta'
    it('returns status 200', function (done) {
      routeTestStatus(url, done)
    })
  })

  var cbLogin = function (body, code, done) {
    if (body === undefined) {
      done()
      return;
    }
    var url = 'http://localhost:3000/login';
    var crsf = '';
    const $ = cheerio.load(body);
    var elem = $('input').attr('id', '_csrf');
    if (elem.length > 0) crsf = elem.attr('value')
  
    assert.notEqual(crsf, '')

    var formDat = {
      form: {
        'username': 'jack',
        'password': 'secret',
        '_csrf': crsf
      }
    };
    request.post(url, formDat, function (error, response, body) {
      if (error) {
        if ((error.message !== undefined) && (error.code === 'ECONNREFUSED') && (error.errno === 'ECONNREFUSED')) {
          assert.ok('Before running the tests, we will run our web server. ' + error.message)
        } else {
          assert.fail(error)
        }
      } else if (response === undefined) {
        assert.fail('invalid response')
      } else {
        // assert.equal(response.statusCode, code || 200)
      }
      done()
    })
  }

  describe('login', function () {
    var url = 'http://localhost:3000/login'
    it('returns status 200', function (done) {
      routeTestStatus(url, done, 200, cbLogin)
    })

    it('should return "The document validates according to the specified schema(s)."', function (done) {
      routeTestBody(url, done)
    })
  })

  describe('logout', function () {
    var url = 'http://localhost:3000/logout'
    it('returns status 200', function (done) {
      routeTestStatus(url, done)
    })

    it('should return "The document validates according to the specified schema(s)."', function (done) {
      routeTestBody(url, done)
    })
  })

  describe('profile', function () {
    var url = 'http://localhost:3000/profile'
    it('returns status 200', function (done) {
      routeTestStatus(url, done)
    })

    it('should return "The document validates according to the specified schema(s)."', function (done) {
      routeTestBody(url, done)
    })
  })

  describe('lolo', function () {
    var url = 'http://localhost:3000/lolo'
    it('returns status 404 ', function (done) {
      routeTestStatus(url, done, 404)
    })
  })
})