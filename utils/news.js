var news2017 = require('../utils/news_2017.js')


var getDiciembre2018 = function () {

  var get20 = function () {
    var content = {
      newsid: news2017.get_newsid(),
      content_head: '20 de Diciembre de 2018',
      post_title: 'Todos los partidos políticos de San Sebastián de los Reyes apoyan las peticiones de AVACC',
      post_author: 'Presidente',
      post_category_ref: './alta',
      post_category: 'Pleno del Ayuntamiento',
      post_category_style: '#03a85f',
      post_description: '<p>El 20 de Diciembre, en el pleno del ayuntamiento de San Sebastián de los Reyes, todos los partidos políticos apoyan las peticiones de AVACC:'
      +'<br> <a target="_blank" style="color:#ed6d05;" href="./resources/declaración institucional SSRR.pdf" rel="noreferrer"> Declaración Institucional</a>'
      +'<br> <a target="_blank" style="color:#ed6d05;" href="./resources/Pleno_del_ayuntamiento.mp4" rel="noreferrer"> Video del pleno</a>'

    }
    return content
  }

    var get13 = function () {
        var content = {
          newsid: news2017.get_newsid(),
          content_head: '13 de Diciembre de 2018',
          post_title: 'Reunión de vecinos de club de campo con el Alcalde de San Sebastián de los Reyes',
          post_author: 'Presidente',
          post_category_ref: './alta',
          post_category: 'Reunión en el centro cívico',
          post_category_style: '#ed6d05',
          post_description: '<p>El 13 de Diciembre, se produce una reunión en el centro cívico en la que el Alcalde y algunos miembros del ayuntamiento de San Sebastián de los Reyes y AVACC informan a los vecinos de club de campo de las diferentes reuniones y actuaciones realizadas sobre la Variante a la A-1.'
  
        }
        return content
      }

    var get11 = function () {
        var content = {
          newsid: news2017.get_newsid(),
          content_head: '11 de Diciembre de 2018',
          post_title: 'AVACC se reune con los partidos políticos de San Sebastián de los Reyes',
          post_author: 'Presidente',
          post_category_ref: './alta',
          post_category: 'Reunión',
          post_category_style: '#555555',
          post_description: '<p>El 11 de Diciembre, AVACC se reúne con los partidos políticos de San Sebastián de los Reyes. En breve se publicará un comunicado con todos los asuntos tratados en esta reunión.'
  
        }
        return content
      }

    
  
    var subhead = {
      content_subhead: 'Diciembre 2018',
      contents: []
    }
    
    subhead.contents.push(get20())
    subhead.contents.push(get13())
    subhead.contents.push(get11())
      
    return subhead
  }

  var getNoviembre2018 = function () {

    var get22 = function () {
        var content = {
          newsid: news2017.get_newsid(),
          content_head: '22 de Noviembre de 2018',
          post_title: 'Compromiso de Pedro Sánchez y Angel garrido para desbloquear la variante a la A-1',
          post_author: 'Presidente',
          post_category_ref: './alta',
          post_category: 'Noticia',
          post_category_style: '#03a85f',
          post_description: '<p>El 22 de Noviembre, el proyecto de la variante de la A-1 despega: el presidente Pedro Sánchez se ha comprometido ante el jefe del Ejecutivo regional, Ángel Garrido, a que se desbloquee esta iniciativa.'
          +'<br> <a target="_blank" style="color:#ed6d05;" href=https://www.abc.es/espana/madrid/abci-angel-garrido-penultimo-presidente-visita-moncloa-201811220203_noticia.html rel="noreferrer">Ángel Garrido arranca a Sánchez el compromiso de desbloquear la variante de la A-1</a>'
          +'<br> <a target="_blank" style="color:#ed6d05;" href=https://ecodiario.eleconomista.es/politica-eD/noticias/9537023/11/18/El-proyecto-de-construccion-de-la-variante-de-la-A1-podria-empezar-en-enero.html?fbclid=IwAR0BIrOoRGXnqFs2VQjfqbGhNDmDMYRzuX7xMiCfO-KJEpG9UEypA_0dQCc rel="noreferrer">El proyecto de construcción de la variante de la A-1 podría empezar en enero</a>'
          +'<br> <a target="_blank" style="color:#ed6d05;" href=http://zonaretiro.com/transporte/variante-a-1/?fbclid=IwAR1exv33aIxcvEdyZKaGUWxx7x3_iaUuzAU6M2iHDzbbpzr5lbzN7i7ZzbA rel="noreferrer">Así será la variante de la autovía A-1 entre la M-12 y El Molar</a>'
  
        }
        return content
      }
   
  
    var subhead = {
      content_subhead: 'Noviembre 2018',
      contents: []
    }
  
    subhead.contents.push(get22())
      
    return subhead
  }  

var getOctubre2018 = function () {
    var get25 = function () {
      var content = {
        newsid: news2017.get_newsid(),
        content_head: '25 de Octubre de 2018',
        post_title: 'Reunión de vecinos de club de campo con el Alcalde de San Sebastián de los Reyes',
        post_author: 'Presidente',
        post_category_ref: './alta',
        post_category: 'Reunión en el centro cívico',
        post_category_style: '#ed6d05',
        post_description: '<p>El 25 de Octubre, se produce una reunión en el centro cívico del Alcalde y algunos miembros del ayuntamiento de San Sebastian de los Reyes con los vecinos de club de campo. El alcalde y AVACC informan a los vecinos de las diferentes reuniones con Fomento.'
      }
      return content
    }
    
    var get22 = function () {
        var content = {
          newsid: news2017.get_newsid(),
          content_head: '22 de Octubre de 2018',
          post_title: 'AVACC aclara su postura',
          post_author: 'Presidente',
          post_category_ref: './alta',
          post_category: 'Comunicado',
          post_category_style: '#555555',    
          post_description: '<p>El 22 de Octubre, tras las últimas informaciones vertidas en algún medio de comunicación, la Asociación de Vecinos y Amigos de club de Campo, en adelante AVACC, quisiera aclarar su postura a continuación:'
          + '<br>1) AVACC está a favor de solucionar los problemas de movilidad de la A-1 pero con soluciones reales como:'
          + '<br>- la construcción de 3 carriles principales más 2 carriles de vía de servicio en cada sentido desde la Cuesta de los Dominicos hasta El Molar'
          + '<br>- actuaciones de mejora y modernización de los accesos de la A-1 a San Sebastián de los Reyes y a Alcobendas'
          + '<br>2) AVACC propone la ampliación del tren de cercanías a Algete, San Agustín de Guadalix y a El Molar con aparcamientos estratégicos, disuasorios, y gratuitos.'
          + '<br>3) La variante propuesta de 9 kilómetros no tiene conexión directa con la M-40, salvo que se utilicen los peajes de la R-2 interior (hacia Madrid) o de la M-12. Por tanto, AVACC propone liberar dichos peajes, no siendo necesaria la construcción de la variante.'
          + '<br>Todos los puntos anteriormente mencionados fueron remitidos por AVACC a los distintos partidos políticos con representación en San Sebastián de los Reyes, al Ministerio de Fomento y a la Comunidad de Madrid el pasado 5 de junio, 2018.'
        }
        return content
      }
  
    var subhead = {
      content_subhead: 'Octubre 2018',
      contents: []
    }
  
    subhead.contents.push(get25())
    subhead.contents.push(get22())
      
    return subhead
  }

var getAgosto2018 = function () {
    var get28 = function () {
      var content = {
        newsid: news2017.get_newsid(),
        content_head: '28 de Agosto de 2018',
        post_title: 'El gobierno central "frena" la variante de la A-1',
        post_author: 'Presidente',
        post_category_ref: './alta',
        post_category: 'Noticia',
        post_category_style: '#03a85f',
        post_description: '<p>El 28 de Agosto, se publica els iguiente artículo:' +            
              '<a target="_blank" style="color:#ed6d05;" href="https://www.abc.es/espana/madrid/abci-gobierno-central-frena-variante-201808280016_noticia.html" rel="noreferrer">El Gobierno central «frena» la variante de la A-1</a>'
      }
      return content
    }
    
  
    var subhead = {
      content_subhead: 'Agosto 2018',
      contents: []
    }
  
    subhead.contents.push(get28())
      
    return subhead
  }

var getJunio2018 = function () {
  var get13 = function () {
    var content = {
      newsid: news2017.get_newsid(),
      content_head: '13 de Junio de 2018',
      post_title: 'Reunión del Partido Popular en San Sebastián de los Reyes',
      post_author: 'Presidente',
      post_category_ref: './alta',
      post_category: 'Reunión',
      post_category_style: '#555555',
      post_description: '<p>El 13 de Junio, se reunieron en San Sebastián de los Reyes la consejera de transportes de la Comunidad de Madrid, el alcalde de Alcobendas y la portavoz del Partido Popular en San Sebastián de los Reyes para tratar el tema de la variante a la A1. Este acontencimiento ha sido publicado en varios medios de comunicación, y parece que ni la Comunidad de Madrid, ni el Partido Popular de San Sebastián de los Reyes, han atendido nuestras quejas y reclamaciones. Os dejamos aquí los enlaces para que podáis informaros:' +            
            '<br><a target="_blank" style="color:#ed6d05;" href="http://cadenaser.com/emisora/2018/06/13/ser_madrid_norte/1528888674_222652.html" rel="noreferrer">Cadena Ser</a>' +
            '<br><a target="_blank" style="color:#ed6d05;" href="http://m.telemadrid.es/noticias/madrid/noticia/la-comunidad-reclama-fomento-que-comience-trabajar-por-la-futura-variante-de" rel="noreferrer">Telemadrid</a> '+
            '<br><a target="_blank" style="color:#ed6d05;" href="https://www.larazon.es/local/madrid/san-sebastian-frena-la-variante-de-la-a-1-DH18688957" rel="noreferrer">La razón</a></p>'
    }
    return content
  }
  
var get18 = function () {
    var content = {
      newsid: news2017.get_newsid(),
      content_head: '18 de Junio de 2018',
      post_title: 'Comunicado oficial',
      post_author: 'Presidente',
      post_category_ref: './alta',
      post_category: 'Comunicado',
      post_category_style: '#ed6d05',
      post_description: '<p>'+
            'AVACC, como representante y defensor de los intereses de los vecinos de Club de '+
            'Campo, ha demostrado en multitud de reuniones con distintos estamentos políticos y medios '+
            'de comunicación locales, su oposición frontal de la implantación del entronque llamado '+
            '“NUDO CLUB DE CAMPO”, en la nacional A1, prevista su ubicación en las inmediaciones de la '+
            'urbanización Club de Campo, del término municipal de San Sebastián de los Reyes.<br><br>'+
            'Entendemos que éste entronque, trasladará a las diversas urbanizaciones del norte del '+
            'municipio, los perjuicios cotidianos como ruidos, contaminación, atascos superiores a los '+
            'sufridos en la actualidad.<br><br>'+
            'El origen de los atascos están ocasionados en los extremos de la A1, hacia el norte en '+
            'el municipio de San Agustín del Guadalix y hacia el sur se encuentra en los accesos de los '+
            'polígonos de Alcobendas, accesos de M40 (A6 y A2) y entrada de Madrid.<br><br>'+
            'Una solución, es eliminando el peaje de la R2, los vehículos podrían tomar la salida de '+
            'la M-50 para acceder a la R2 y con ello eliminaríamos definitivamente el nudo Club de Campo '+
            'sin obras y sin costes económicos.<br><br>'+
            'Otra solución, está en habilitar tres carriles sentido norte y tres carriles sentido sur, '+
            'además de las correspondientes vías de servicio.<br><br>'+
            'Por ello, solicitamos el apoyo de todos los partidos políticos, empresas y '+
            'urbanizaciones de nuestra localidad, haciendo un frente común.<br>'+

            '<br><br>LA DIRECCIÓN EJECUTIVA'+
        '</p>'
    }
    return content
  }

  var subhead = {
    content_subhead: 'Junio 2018',
    contents: []
  }

  subhead.contents.push(get18())
  subhead.contents.push(get13())
  
  return subhead
}

var getMarzo2018 = function () {
  var get9 = function () {
    var content = {
      newsid: news2017.get_newsid(),
      content_head: '9 de marzo de 2018',
      post_title: 'Presentación de AVACC en club de campo',
      post_author: 'Presidente',
      post_category_ref: './alta',
      post_category: 'Reunión en el centro cívico',
      post_category_style: '#03a85f',
      post_description: '<div class="post-images pure-g">' +
                '<div class="pure-u-1 pure-u-md-1-2">' +
                    '<div class="pure-g">' +
                        '<div class="pure-u-1 pure-u-md-1-2">' +
                            '<a href="./images/reunion_20180309/r1.jpg"><img alt="reunión" class="pure-img-responsive" src="./images/reunion_20180309/r1.jpg"></a>' +
                            '<div class="post-image-meta">' +
                                '<h3 style="color:white; font-weight: bold;">Asociate</h3>' +
                            '</div>' +
                        '</div>' +
                        '<div class="pure-u-1 pure-u-md-1-2">' +
                            '<div class="pure-g">' +
                                '<div class="pure-u-1 pure-u-md-1-2">' +
                                    '<a href="./images/reunion_20180309/r2.jpg"><img alt="reunión" class="pure-img-responsive" src="./images/reunion_20180309/r2.jpg"></a>' +
                                    '<div class="post-image-meta">' +
                                        '<h3 style="color:white; font-weight: bold;">AVACC</h3>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="pure-u-1 pure-u-md-1-2">' +
                                    '<a href="./images/reunion_20180309/r3.jpg"><img alt="reunión" class="pure-img-responsive" src="./images/reunion_20180309/r3.jpg"></a>' +
                                    '<div class="post-image-meta">' +
                                        '<h3 style="color:white; font-weight: bold;">Por ti</h3>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="pure-u-1 pure-u-md-1-1">' +
                                    '<a href="./images/reunion_20180309/r4.jpg"><img alt="reunión" class="pure-img-responsive" src="./images/reunion_20180309/r4.jpg"></a>' +
                                    '<div class="post-image-meta">' +
                                        '<h3 style="color:white; font-weight: bold;">Club Campo</h3>' +
                                    '</div><p></p>' +
                                '</div>' +
                                '<div class="pure-u-1 pure-u-md-1-1">' +
                                    '<a href="./images/reunion_20180309/r5.jpg"><img alt="reunión" class="pure-img-responsive" src="./images/reunion_20180309/r5.jpg"></a>' +
                                    '<div class="post-image-meta">' +
                                        '<h3 style="color:white; font-weight: bold;">Reunión</h3>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="pure-u-1 pure-u-md-1-2">' +
                    '<p>Hoy se presentó la Asociación Vecinos y Amigos de Club de Campo.</p>' +
                    '<p>Se expuso el <a target="_blank" style="color:#ed6d05;" href="https://twitter.com/intent/tweet?url=http://www.avacc.org/alta&amp;text=juntos+somos+más&amp;hashtags=NoalNudoClubdeCampo" rel="noreferrer"> #NoalNudoClubdeCampo</a>' +
                    '<p>Se obtuvo el compromiso unánime de todos los asistentes, incluido el <span style="font-weight: bold;">Alcalde y del grupo de gobierno</span> para realizar las acciones oportunas en contra del nudo.</p>' +
                    '<p>La decisión final la tienen los socios, se convocará una asamblea general extraordinaria donde entre otras cosas, se votará nuestra postura. Asociate y hazte oir.</p>' +
                '</div>' +
                '<div class="pure-u-1 pure-u-md-1-1">' +
                    '<p style="font-style: italic; text-decoration: underline;">Los asistentes de la reunión manifestaron la necesidad de ir por la vía legal, que implica una necesidad de dotarnos con fondos económicos significativas.</p>' +
                    '<p>Se prevé la presentación del ante-proyecto en junio 2018, abriendo <span style="font-weight: bold;">alegaciones en julio-agosto 2018.</span></p>' +
                '</div></div>' +
                '<div><h2>¡¡Asóciate!!</h2></div>' +
                '<p>La presentación <a target="_blank" href="https://www.dropbox.com/s/z2e5q3iddjvzm6s/AVACC_v4-socios.pdf?dl=0">aquí</a></p>' +
                '<p>Plan de Infraestructuras, Transporte y Vivienda (PITVI) 2012 - 2024 <a target="_blank" href="http://www.fomento.gob.es/mfom/lang_castellano/planes/pitvi/pitvi_docu/">aquí</a></p>'
    }
    return content
  }
  var get2 = function () {
    var content = {
      newsid: news2017.get_newsid(),
      content_head: '2 de marzo de 2018',
      post_title: 'Presentación de AVACC en el ayuntamiento',
      post_author: 'Tesorera',
      post_category_ref: './alta',
      post_category: 'Reunión',
      post_category_style: '#ed6d05',
      post_description: '<div class="post-images pure-g">' +
                '<div class="pure-u-1 pure-u-md-1-2">' +
                    '<a href="./images/reunion_20180302.jpg"><img alt="reunión" class="pure-img-responsive" src="./images/reunion_20180302.jpg"></a>' +
                    '<div class="post-image-meta">' +
                        '<h3 style="color:white; font-weight: bold;">Compromiso</h3>' +
                    '</div>' +
                '</div>' +
                '<div class="pure-u-1 pure-u-md-1-2">' +
                    '<p>Se mantuvo una reunión con parte del grupo de gobierno y algunos técnicos del ayuntamiento de San Sebastián de los Reyes en donde:</p>' +
                    '<ol>' +
                        '<li>Se presentó a la asociación</li>' +
                        '<li>Se consiguió el compromiso del alcalde de aceptar la decisión de los miembros de la asociación</li>' +
                        '<li>Que estará presente en la reunión del día 9 para exponer sus reuniones a los vecinos.</li>' +
                    '</ol>' +
                    '<br><a target="_blank" href="https://www.dropbox.com/s/7uy7aduo2yvkz7v/Boletin%2301-2018Marzo.pdf?dl=0">Boletín marzo</a>' +
                    '<br><a target="_blank" style="color:#ed6d05;" href="https://twitter.com/intent/tweet?url=http://www.avacc.org/alta&amp;text=juntos+somos+más&amp;hashtags=NoalNudoClubdeCampo" rel="noreferrer"> #NoalNudoClubdeCampo</a>' +
                '</div></div>'
    }
    return content
  }

  var get1 = function () {
    var content = {
      newsid: news2017.get_newsid(),
      content_head: '1 de marzo de 2018',
      post_title: 'Reunión con la Entidad de Conservación de Club de Campo',
      post_author: 'Secretario',
      post_category_ref: './alta',
      post_category: 'Unidos',
      post_category_style: '#555555',
      post_description: '<div class="post-images pure-g">' +
            '<div class="pure-u-1 pure-u-md-1-2">' +
                '<a href="./images/ec_cc.jpg"><img alt="Pagina 16" class="pure-img-responsive" src="./images/ec_cc.jpg"></a>' +
                '<div class="post-image-meta">' +
                    '<h3 style="color:white; font-weight: bold;">Unidad</h3>' +
                '</div>' +
            '</div>' +
            '<div class="pure-u-1 pure-u-md-1-2">' +
                '<p>El pasado día 1 de marzo se mantuvo una reunión con la Entidad de Conservación de Club de Campo donde les hemos pedido colaboración con nuestra asociación (AVACC).' +
                ' La Entidad ha aceptado colaborar plenamente con nosotros dentro de sus posibilidades, sobre todo en comunicación (redes sociales) y en dar a conocer la asociación (AVACC) a todos los vecinos.<br>' +
                '<a target="_blank" style="color:#ed6d05;" href="https://twitter.com/intent/tweet?url=http://www.avacc.org/alta&amp;text=juntos+somos+más&amp;hashtags=NoalNudoClubdeCampo" rel="noreferrer"> #NoalNudoClubdeCampo</a>' +
                '</p>' +
            '</div></div>'
    }
    return content
  }

  var subhead = {
    content_subhead: 'Marzo 2018',
    contents: []
  }

  subhead.contents.push(get9())
  subhead.contents.push(get2())
  subhead.contents.push(get1())

  return subhead
}

var getFebruary2018 = function () {
  var get28 = function () {
    var content = {
      newsid: news2017.get_newsid(),
      content_head: '28 de febrero de 2018',
      post_title: 'Reunión con la Consejería de Transporte, Infraestructura y Vivienda',
      post_author: 'Junta Directiva',
      post_category_ref: './alta',
      post_category: 'Juntos somos más',
      post_category_style: '#03a85f',
      post_description: '<p>El 28 de febrero cinco miembros de la asociación de vecinos (AVACC) se reunirán con Consejería de Transporte, Infraestructura y Vivienda para saber la situación real de la variante que afecta al Nudo Club de Campo.' +
            ' Hemos preparado una batería de preguntas con todas las dudas y preocupaciones que nos supone esta obra a los vecinos de Club de Campo.' +
            ' En los próximos días haremos una reunión con todos vosotros para explicaros la situación actual en la que nos encontramos.' +
            ' Muchas gracias y recordar que todos <span style="font-weight: bold;">juntos somos más fuertes</span>.<br>' +
            '<a target="_blank" style="color:#ed6d05;" href="https://twitter.com/intent/tweet?url=http://www.avacc.org/alta&amp;text=juntos+somos+más&amp;hashtags=NoalNudoClubdeCampo" rel="noreferrer"> #NoalNudoClubdeCampo</a></p>'
    }
    return content
  }

  var get15 = function () {
    var content = {
      newsid: news2017.get_newsid(),
      content_head: '15 de febrero de 2018',
      post_title: 'Apertura de Cuenta Bancaria',
      post_author: 'Tesorera',
      post_category_ref: './donate',
      post_category: 'Ayudanos. Ayudate',
      post_category_style: '#ed6d05',
      post_description: '<p>Se abrió la cuenta bancaria en el BBVA de Paracuellos de Jarama.<br> <a href="/donate">IBAN: ES27 0182 8085 4702 0162 8042</a></p>'
    }
    return content
  }

  var get2 = function () {
    var content = {
      newsid: news2017.get_newsid(),
      content_head: '2 de febrero de 2018',
      post_title: 'Registro de la asociación',
      post_author: 'Vice-Tesorero',
      post_category_ref: './donate',
      post_category: 'Donar',
      post_category_style: '#555555',
      post_description: '<p>El pasado día 2 de febrero de 2018 se obtuvo el identificador provisional de Asociación. Ahora vamos a cerrar la web y el banco para poder contar con todos vosotros.</p>'
    }
    return content
  }

  var subhead = {
    content_subhead: 'Febrero 2018',
    contents: []
  }

  subhead.contents.push(get28())
  subhead.contents.push(get15())
  subhead.contents.push(get2())

  return subhead
}

var getJanuary2018 = function () {
  var get26 = function () {
    var content = {
      newsid: news2017.get_newsid(),
      content_head: '26 de enero de 2018',
      post_title: 'ACTA FUNDACIONAL DE LA ASOCIACIÓN',
      post_author: 'Secretario',
      post_category_ref: './donate',
      post_category: 'Alta socio',
      post_category_style: '#03a85f',
      post_description: '<p>El pasado día 26 de enero de 2018 se firmó el acta fundacional de la asociación. Han sido 3 semanas muy intensas de debates, opiniones, risas y porque no decirlo discusiones.' +
            ' Por fin se llegó a un acuerdo en los <a target="_blank" style="font-weight: bold;" href="https://www.dropbox.com/s/kc8rr5zm0nkx1zu/Estatutos%20y%20Acta%20fundacional%20-FIRMADOS.pdf?dl=0"> estatutos</a> y se firmó, un pequeño gran logro.' +
            ' Desde la Junta Directiva estamos muy ilusionados con la asociación, esperamos contar contigo.</p>'
    }

    return content
  }

  var subhead = {
    content_subhead: 'Enero 2018',
    contents: []
  }

  subhead.contents.push(get26())

  return subhead
}

exports.get_news = function () {
  var news = []

  news.push(getDiciembre2018())
  news.push(getNoviembre2018())
  news.push(getOctubre2018())
  news.push(getAgosto2018())
  news.push(getJunio2018())
  news.push(getMarzo2018())
  news.push(getFebruary2018())
  news.push(getJanuary2018())
  news.push(news2017.get_december_2017())
  news.push(news2017.get_november_2017())
  news.push(news2017.get_june_2017())

  return news
}
