// var crypto = require('crypto')
// var request = require('request')
var news = require('../utils/news.js')

/*
var download = function (url, dest, cb) {
    var sendReq = request.get(url);

    // verify response code
    sendReq.on('response', function (response) {
        if (response.statusCode !== 200) {
            return cb('Response status was ' + response.statusCode);
        }
    });

    // check for request errors
    sendReq.on('error', function (err) {
        return cb(err.message);
    });

    return sendReq;
};

//Generating Subresource Integrity Checksums
exports.checksum = function (input) {
    var body = download(input);
    //sha256
    //sha384
    var hash = crypto.createHash('sha384').update(body, 'utf8');
    var hashBase64 = hash.digest('base64');
    return 'sha384-' + hashBase64;
};

var get_links_with_integrity = function () {
    var links_with_integrity = [];

    var link_wi;
    link_wi.rel = 'stylesheet';
    link_wi.href = "https://unpkg.com/purecss@1.0.0/build/pure-min.css";
    link_wi.integrity = checksum(link_wi.href); //"sha384-"
    link_wi.crossorigin = "anonymous";
    opt.links_with_integrity[0] = link_wi;

    return links_with_integrity;
};
*/

exports.opt_donate = function () {
  var opt = {}

  opt.title = 'Colabora. AVACC'
  opt.description = 'Hazte Socio. Asociación de Vecinos y Amigos de Club de Campo - AVACC'
  // opt.links_with_integrity = get_links_with_integrity();
  return opt
}

exports.opt_login = function () {
  var opt = {}

  opt.title = 'Inicio de sesión. AVACC'
  opt.description = 'Inicio de sesión y Hazte Socio. Asociación de Vecinos y Amigos de Club de Campo - AVACC'
  // opt.links_with_integrity = get_links_with_integrity();
  return opt
}

exports.opt_profile = function () {
  var opt = {}

  opt.title = 'Tu perfil de socio. AVACC'
  opt.description = 'Este es tu perfile. Asociación de Vecinos y Amigos de Club de Campo - AVACC'
  // opt.links_with_integrity = get_links_with_integrity();
  return opt
}

exports.opt_about = function () {
  var opt = {}

  opt.title = 'Sobre nosotros. AVACC'
  opt.description = 'Información Junta Directiva. Asociación de Vecinos y Amigos de Club de Campo - AVACC'
  // opt.links_with_integrity = get_links_with_integrity();
  return opt
}

exports.opt_index = function () {
  var opt = {}

  // opt.links_with_integrity = get_links_with_integrity();
  opt.title = 'Noticias. Ampliación A-1. AVACC'
  opt.description = 'Eventos, noticias y fechas. Asociación de Vecinos y Amigos de Club de Campo - AVACC'
  opt.news = news.get_news()

  return opt
}
