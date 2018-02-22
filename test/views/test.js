const assert = require("assert");
const validator = require('html-validator')

const pug = require('pug');
const utils = require('../../utils/utils.js');

var views_test = function (file, opt, done) {
    // Compile the source code
    const compiledFunction = pug.compileFile(file);
    const compiledData = compiledFunction(opt);

    const options = {
        data: compiledData,
        format: 'text'
    };

    //Callback
    validator(options, (error, data) => {
        if (error) {
            if ((error.message != undefined) && (error.message == "Validator returned unexpected statuscode: 503")) {
                assert.ok("Service Unavailable. " + error.message)
            } else {
                assert.fail(error);
            }
        } else {
            const ret_ok = 'The document validates according to the specified schema(s).\n';
            assert.equal(data, ret_ok);
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
};

describe('Render', function () {
    describe('index', function () {
        it('should return "The document validates according to the specified schema(s)."', function (done) {
            views_test('views/index.pug', utils.opt_index(), done)
        })
    })
    describe('about', function () {
        it('should return "The document validates according to the specified schema(s)."', function (done) {
            views_test('views/about.pug', utils.opt_about(), done)
        })
    })
    describe('donate', function () {
        it('should return "The document validates according to the specified schema(s)."', function (done) {
            views_test('views/donate.pug', utils.opt_donate(), done)
        })
    })
});