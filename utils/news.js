var newsid_ = 1;

var get_newsid = function () {
    var ret = "news_id" + newsid_;
    newsid_ += 1
    return ret;
};

var showHide_id_ = 1;
var get_showHide_id = function () {
    var ret = "id" + showHide_id_;
    showHide_id_ += 1;
    return ret;
};





var get_february_2018 = function () {
    var get_15 = function () {
        var content = {
            newsid: get_newsid(),
            content_head: '15 de febrero de 2018',
            //avatar: './images/avatar/FernandoLopezPalao.jpg',
            //avatar_text: 'Fernando Lopez Palao',
            post_title: 'Apertura de Cuenta Bancaria',
            post_author: 'Tesorera',
            post_category_ref: './donate',
            post_category: 'Ayudanos. Ayudate',
            post_category_style: '#ed6d05',
            post_description: 'Se abrió la cuenta bancaria en el BBVA de Paracuellos de Jarama.<br> <a href="/donate">IBAN: ES27 0182 8085 4702 0162 8042</a>'
        }
        return content;
    };

    var get_2 = function () {
        var content = {
            newsid: get_newsid(),
            content_head: '2 de febrero de 2018',
            //avatar: './images/avatar/FernandoLopezPalao.jpg',
            //avatar_text: 'Fernando Lopez Palao',
            post_title: 'Registro de la asociación',
            post_author: 'Vice-Tesorero',
            post_category_ref: './donate',
            post_category: 'Donar',
            post_category_style: '#555555',
            post_description: 'El pasado día 2 de febrero de 2018 se obtuvo el identificador provisional de Asociación. Ahora vamos a cerrar la web y el banco para poder contar con todos vosotros.'
        };
        return content;
    };

    var subhead = {
        content_subhead: 'Febrero 2018',
        contents: []
    };

    subhead.contents.push(get_15());
    subhead.contents.push(get_2());

    return subhead;
};

var get_january_2018 = function () {
    var get_26 = function () {
        var content = {
            newsid: get_newsid(),
            content_head: '26 de enero de 2018',
            //avatar: './images/avatar/FernandoLopezPalao.jpg',
            //avatar_text: 'Fernando Lopez Palao',
            post_title: 'ACTA FUNDACIONAL DE LA ASOCIACIÓN',
            post_author: 'Secretario',
            post_category_ref: './donate',
            post_category: 'Alta socio',
            post_category_style: '#03a85f',
            post_description: 'El pasado día 26 de enero de 2018 se firmó el acta fundacional de la asociación. Han sido 3 semanas muy intensas de debates, opiniones, risas y porque no decirlo discusiones. Por fin se llegó a un acuerdo en los <a style="font-weight: bold;" href="https://www.dropbox.com/s/kc8rr5zm0nkx1zu/Estatutos%20y%20Acta%20fundacional%20-FIRMADOS.pdf?dl=0"> estatutos</a> y se firmó, un pequeño gran logro. Desde la Junta Directiva estamos muy ilusionados con la asociación, esperamos contar contigo.'
        };

        return content;
    };

    var subhead = {
        content_subhead: 'Enero 2018',
        contents: []
    };

    subhead.contents.push(get_26())

    return subhead;
}

var get_december_2017 = function () {

    var get_20 = function () {
        var content = {
            newsid: get_newsid(),
            content_head: '20 de diciembre de 2017',
            avatar: './images/avatar/JoseAndresGomezTovar.jpeg',
            avatar_text: 'Jose Andres Gomez Tovar',
            post_title: 'Reunión información variante A-1',
            post_author: 'José Andrés Gómez. Vocal',
            post_category_ref: './donate',
            post_category: 'Progreso SI. Perjudicar NO',
            post_category_style: '#ed6d05',
            showHide_id: get_showHide_id(),
            post_description: '<div class="post-images pure-g"><div class="pure-u-1 pure-u-md-1-2"><p>Pediros en primer lugar perdón porque es una reflexión <span style="font-weight: bold;">“personal”</span> que tiene peros y es que, puede que algún dato este sacado de contexto, pero es la sensación que algunos tenemos conclusiones que se sacan de las reuniones del pasado día 12 y 20 de diciembre.</p><ol><li>El proyecto de la <span style="font-weight: bold;">variante A-1 es necesaria</span> (eso lo vivimos todos con atascos de entrada y salida a distintas horas y distintos días) y al parecer es un proyecto prioritario para fomento (se va a ejecutar si o sí).</li><li>El estudio de la variante A-1, la futura M15, se basa en unos <span style="font-weight: bold;">datos antiguos/obsoletos/inválidos</span>. No se sabía que exista una población en club de campo, no se tenían los censos actualizados...</li></ol></div><div class="pure-u-1 pure-u-md-1-2"><a href="./images/opcion_3.jpg"><img alt="Pagina 16" class="pure-img-responsive" src="./images/opcion_3.jpg"></a><div class="post-image-meta"><h3 style="color:white; font-weight: bold;">Aquí vive gente</h3></div></div><div class="pure-u-1 pure-u-md-1-1"><p>Una vez que saben de nuestra existencia, se plantean tres opciones:</p><ol><li>Desviar la carretera por una zona no residencial (en el KM 27 más o menos). Descartada porque cruza el rio Jarama 2 veces y los ecologistas hacen mucho ruido, están unidos, les tienen miedo.</li><li>Desviar la carretera en el km 25. Esta opción es más cara que la opción 3.</li><li>En lugar de puente túnel. Esta es la que parece que se pueden plantear como alternativa porque no es muy cara.</li></ol><p>No se hablo en ningún momento de que es lo mejor para:</p><ul><li style="text-decoration: underline wavy green;">las familias de la zona.</li><li style="text-decoration: underline wavy green;">la carretera, el trafico, los vehículos, las personas que viajan de un sitio a otro.</li><li style="text-decoration: underline wavy green;">los profesores y alumnos del colegio (los niños pueden vivir un infierno de 65db todos los días a todas las horas).</li></ul><p>Mejorar la carretera es necesario, pero no de cualquier manera y no acosta, en perjuicio de otros. El problema de tener un nudo en la urbanización es: que si es elevado mete ruido, contaminación, si es subterráneo puede generar atascos (pasas de 120 km/h a 70 km/h), y nuestras viviendas están condenadas al uso del coche sí o si, y ya tenemos un carril condenado todas las mañanas por que todos dejamos a los niños en el colegio desde el lateral, pero no creo que soporte más atascos.</p><p style="font-size: 50px;">Imagináis que pasaría si tenemos “más caravana” para salir de la rotonda de la urbanización… que pasaría si los niños tiene que soportar ruidos de rodadura que viajan de lado a lado de la urbanización.</p><p>Muchos grupos y organización ya se movieron, consiguieron meter la presión necesaria para que se les tenga en cuenta, que como saben dan problemas, pues se llegan a acuerdos para conseguir ejecutar la tan necesaria y prioritaria obra.</p><p>Por delante no hay opciones hasta el RACE, por detrás, Heineken ya tiene pactado el trazado, pero en club de campo y Trinity estamos en las manos de unas personas que no sabían que existíamos hasta el día 12 de diciembre mucho después del primer pre-proyecto).</p></div></div><p>La convocatoria <a href="https://www.dropbox.com/s/pd18ewomk1jbhl2/reunion_20171220_1.pdf?dl=0">aquí</a></p><p>Los distintos trazados <a href="https://www.dropbox.com/s/ba03kxuw46u9b1e/reunion_20171220_2.pdf?dl=0">aquí</a></p>'
        };

        return content;
    };

    var subhead = {
        content_subhead: 'Diciembre 2017',
        contents: []
    };

    //subhead.contents.push(get_20())

    return subhead;
};

var get_november_2017 = function () {

    var get_27 = function () {
        var content = {
            newsid: get_newsid(),
            content_head: '27 de noviembre de 2017',
            post_title: 'Reunión centro sociocultural. La ALTERNATIVA ELEGIDA',
            post_author: 'Junta Directiva',
            post_category_ref: './donate',
            post_category: 'Quiero ayudar',
            post_category_style: '#ed6d05',
            showHide_id: get_showHide_id(),
            post_description: '<div class="post-images pure-g"><div class="pure-u-1 pure-u-md-1-2"><p><a href="http://www.fomento.es/Carreteras/EI1-M-075/DOC02_PLANOS/02%20PlanoSituacion/02H01-H01.pdf">La ALTERNATIVA ELEGIDA</a> para la variante de la <a href="http://www.fomento.es/MFOM/LANG_CASTELLANO/ATENCION_CIUDADANO/PARTICIPACION_PUBLICA/EI-M-075/default.htm">autovía A1</a> afectará directamente a multitud de hogares de San Sebastián de los Reyes, en concreto a la urbanización Club de Campo. Dicha alternativa elegida trasmitiría a las viviendas de la mencionada urbanización ruidos de rodadura, de motores y aerodinámicos de miles de vehículos, teniendo en cuenta de que puede haber unos 75.000 vehículos al día circulando, entre los ligeros y los pesados. En concreto se eligió una opción que eleva una nueva carretera unos 9 m, probablemente por ser la que menor coste económico comporta.</p></div><div class="pure-u-1 pure-u-md-1-2"><a href="./images/web_bk_0.jpg"><img alt="Pagina 16" class="pure-img-responsive" src="./images/web_bk_0.jpg"></a><div class="post-image-meta"><h3 style="color:white; font-weight: bold;">Progreso si, salud también</h3></div></div><div class="pure-u-1 pure-u-md-1-1"><p>En los años 90, el Ministerio de Fomento no había previsto una alternativa a la autovía A-1 entre las nuevas autopistas radiales de peaje de Madrid; por esta razón, desde el año 2001 se han venido proponiendo diversos estudios en el ‘corredor’ de la A-1 para la ejecución de un nuevo eje alternativo -que se denominó ‘R-1’-, que fuera capaz de resolver o, al menos, paliar la progresiva sobresaturación de la Autovía del Norte en los tramos más cercanos a la M-40. En el año 2006 se aprobó definitivamente el Estudio Informativo del trazado de dicha alternativa, y en el 2007 se aprobó el Antoproyecto y se licitó la Concesión para la contrucción y explotación (como autovía de peaje) del tramo Eje Aeropuerto-El Molar, concurso que finalmente quedó desierto. La crisis aparco el proyecto durante 8 años y, en el año 2015, la Demarcación de Carreteras lo volvió a poner en marche pero, ante la prevista runia de la radiales madrileñas, la planteó como ‘Variante de la Autovía A-1’; sin peajes, señalando dos ‘Corredores’ de 10km a ambos lados de la A-1 para estudiar trazados alternativos. La opción del Corredor del Oeste, que transcurría por el Parque de la Cuenca Alta del Manzanares, no representaba una solución en absoluto. En el corredor del Este, son cuatro los trazados analizados, todos partiendo del Eje Barajas. A uno de estos se accede directamente por Paracuellos de Jarama hasta El Molar o San Agustín de Guadalix. Al otro se llega al completar las inacabadas vías de servicio de la A-1. Otra reproduce la antigua R-1, lo que provocaría problemas en las zonas de Mangranillo, Pfizer y Heineken. La última de estas ha sido la alternativa elegida, probablemente por ser la que menor coste económico comporta pero sin tener en cuenta los perjuicios que causaría, ya que se trata de la única de todas las opciones existentes que provoca un auténtico embudo de carriles y que, además, con ocho metros de altura total, supera la de la loma de cinco metros que protege del ruido a la urbanización Club de Campo. En estas condiciones, dicha alternativa elegida trasmitiría a las viviendas de la mencionada urbanización ruidos de rodadura, de motores y aerodinámicos de miles de vehículos, teniendo en cuenta de que puede haber unos 75.000 vehículos al día circulando, entre los ligeros y los pesados. Aparte de la contaminación acústica exponencial que provocaría, dicha opción no resolvería en absoluto los problemas de seguridad de la zona, sino todo lo contrario. De hecho, esta infraestructura dificultaría con creces el uso del nudo de acceso al Club de Campo, a las instalaciones de la real Sociedad Hípica y al aparcamiento del Circuito del RACE, ocupando físicamente los jardines de la Quinta e invadiendo destructivamente tanto la Quinta como el Trinity College. Hay que tener en cuenta, además, que el Ministerio de Fomento desechó la ejecución de las vías de servicio de la A-1 en el tramo M-40 M-100 (correspondiente a la salida de Algete), unas vías que son absolutamente necesarias en la cercanía de los cascos urbanos de San Sebastián de los Reyes y Alcobendas, que es precisamente donde faltan, lo que completa un escenario enormemente perjudicial para el municipio y, en particular, para los vecinos de la citada urbanización.</p></div></div><h4>¿Quieres los enlaces de fomento?</h4><p><a href="http://www.fomento.es/MFOM/LANG_CASTELLANO/ATENCION_CIUDADANO/PARTICIPACION_PUBLICA/EI-M-075/default.htm">Página de FOMENTO con el índice de descarga de la documentación del proyecto</a></p><p><a href="http://www.fomento.es/Carreteras/EI1-M-075/DOC02_PLANOS/02%20PlanoSituacion/02H01-H01.pdf">Planos. La línea verde es la que ha sido seleccionada</a></p><p><a href="http://www.fomento.es/Carreteras/EI1-M-075/DOC01_MEMORIA%20Y%20ANEJOS/Anejo%2008_Trazado.pdf">Anejo 8, TRAZADO. Ver Pág. 14 y 42</a></p><p><a href="http://www.fomento.es/Carreteras/EI1-M-075/DOC02_PLANOS/03%20DefiniAlternaSeleccionada/0301%20PlanoConjunto/0301H01-H01.pdf">Alternativa SELECCIONADA. Supone los tramos: 1, 2, 6, C y D. El tramo 6 es el que afecta a Club de Campo (H04)</a></p><div class="pure-menu pure-menu-horizontal"><h4>Síguenos en:</h4><ul><li class="pure-menu-item"><ul class="social-icons"><li><a href="https://www.facebook.com/AVACC-1639021659525422"><i class="fa fa-facebook"></i></a></li><li><a href="https://twitter.com/ava_clubcampo?ref_src=twsrc%5Etfw"><i class="fa fa-twitter"></i></a></li><li><a href="https://www.instagram.com/ava_clubcampo/"><i class="fa fa-instagram"></i></a></li></ul></li><li style="margin-top: 2em;"><a href="mailto:contactar@avacc.org">contactar@avacc.org</a></li></ul></div>'
        };

        return content;
    };

    var subhead = {
        content_subhead: 'Noviembre 2017',
        contents: []
    };

    subhead.contents.push(get_27())

    return subhead;
};



var get_june_2017 = function () {

    var get_16 = function () {
        var content = {
            newsid: get_newsid(),
            content_head: '16 de junio de 2017',
            post_title: 'El ayuntamiento defenderá los intereses del municipio en relación con la variante de la A-1',
            post_author: 'Vice-Presidente',
            post_category_ref: './donate',
            post_category: 'Defendemos tu entorno',
            post_category_style: '#555555',
            showHide_id: get_showHide_id(),
            post_description: '<div class="post-images pure-g"><div class="pure-u-1 pure-u-md-1-1"><a href="./images/plaza_junio.PNG"><img alt="Pagina 16" class="pure-img-responsive" src="./images/plaza_junio.PNG"></a><div class="post-image-meta"><h3 style="color:#ed6d05; font-weight: bold;">Ayuda al colegio. Ayúdate</h3></div></div></div><p>La revista completa <a href="https://www.dropbox.com/s/d4mc17p6mj3088h/plaza_junio_2017.pdf?dl=0">aquí</a></p>'
        };

        return content;
    };

    var subhead = {
        content_subhead: 'Noviembre 2017',
        contents: []
    };

    subhead.contents.push(get_16())

    return subhead;
};

exports.get_news = function () {
    var news = []

    news.push(get_february_2018());
    news.push(get_january_2018());
    news.push(get_december_2017());
    news.push(get_november_2017());
    news.push(get_june_2017());

    return news;
}