const assert = require("assert");
const request = require("request");
const validator = require('html-validator')

//Before running the tests, we will run our web server
var route_validator = function (body, done) {
    const options = {
        data: body,
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
};

var route_test_body = function (url, done) {
    request(url, function (error, response, body) {
        var err = true;
        if (error) {
            if ((error.message != undefined) && (error.code == "ECONNREFUSED") && (error.errno == "ECONNREFUSED")) {
                assert.ok("Before running the tests, we will run our web server. " + error.message)
            } else {
                assert.fail(error);
            }
        } else if (body == undefined) {
            assert.fail("invalid body");
        } else {
            route_validator(body, done);
            err = false;
        }

        if (err) done();
    });
};

var route_test_status = function (url, done) {
    request(url, function (error, response, body) {
        if (error) {
            if ((error.message != undefined) && (error.code == "ECONNREFUSED") && (error.errno == "ECONNREFUSED")) {
                assert.ok("Before running the tests, we will run our web server. " + error.message)
            } else {
                assert.fail(error);
            }
        } else if (response == undefined) {
            assert.fail("invalid response");
        } else {
            assert.equal(response.statusCode, 200);
        }
        done();
    });
};

describe("Routers", function () {
    describe("index", function () {
        var url = "http://localhost:3000";
        it("returns status 200", function (done) {
            route_test_status(url, done)
        });

        it('should return "The document validates according to the specified schema(s)."', function (done) {
            route_test_body(url, done)
        });
    })

    describe("about", function () {
        var url = "http://localhost:3000/about";
        it("returns status 200", function (done) {
            route_test_status(url, done)
        });

        it('should return "The document validates according to the specified schema(s)."', function (done) {
            route_test_body(url, done)
        });
    })

    describe("donate", function () {
        var url = "http://localhost:3000/donate";
        it("returns status 200", function (done) {
            route_test_status(url, done)
        });

        it('should return "The document validates according to the specified schema(s)."', function (done) {
            route_test_body(url, done)
        });
    })
});