<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Mercado

    img(data-aos="fade-up")(src="@/assets/curso/tema3/1.png", alt="")
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 El mercado constituye el espacio donde interactúan la oferta y la demanda, determinando las condiciones para la comercialización de bienes y servicios. 

    .row.justify-content-center.align-items-center
      .col-4.col-sm-2.col-lg-1
        figure
          img.mb-4.mb-lg-0.imgw-43(src="@/assets/curso/tema3/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p.mb-0 En el contexto de los negocios sostenibles, comprender su dinámica permite identificar segmentos, necesidades y oportunidades comerciales.
        p.mb-0 Este capítulo aborda los conceptos, procesos y herramientas del mercado, orientados a la toma de decisiones estratégicas que faciliten la identificación de consumidores y el diseño de propuestas comerciales alineadas con la sostenibilidad.

    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Concepto

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p El mercado se define como el conjunto de relaciones entre compradores y vendedores que interactúan para intercambiar bienes y servicios, este espacio no es únicamente físico, sino también digital y social, donde se configuran dinámicas de oferta y demanda. En el contexto sostenible, el mercado incorpora variables ambientales y sociales que influyen en las decisiones de compra y en la forma en que las empresas diseñan sus estrategias comerciales.
        p.mb-0 Comprender el concepto de mercado implica reconocer que no todos los consumidores tienen las mismas necesidades ni comportamientos. Factores como la sostenibilidad, el precio, la calidad y la percepción de valor influyen en la decisión de compra. Por ejemplo, un consumidor verde prioriza atributos ambientales, mientras que otros pueden enfocarse en el costo, lo que evidencia la diversidad dentro del mercado.

    .bg-img.bg-img--2.rounded-5.p-4.p-lg-5.py-lg-4.position-relative.mb-5
      .tarjeta.tarjeta--blanca.p-5.py-4.rounded-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            p.mb-3.mb-lg-0 #[strong Ejemplo aplicado]. Empresas como IKEA han entendido esta dinámica, adaptando su oferta a consumidores que valoran productos sostenibles y accesibles, esto demuestra que el mercado no es estático, sino que evoluciona según las tendencias y necesidades del consumidor. 
          .col-sm-4.col-lg-2
            figure
              img.arbol-img(src="@/assets/curso/common/arbol-ej.png", alt="")

    p.mb-0 Analizar el mercado permite identificar oportunidades comerciales alineadas con la sostenibilidad y diseñar propuestas que respondan a contextos específicos.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Segmentación

    .bloque-texto-g.bloque-texto-g--inverso.color-primario-p10.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La segmentación de mercado consiste en dividir el mercado en grupos homogéneos de consumidores con características y comportamientos similares, este proceso permite a las empresas dirigir sus estrategias de manera más efectiva, adaptando su oferta a las necesidades específicas de cada segmento. En el contexto sostenible, la segmentación facilita la identificación de consumidores verdes y la construcción de propuestas comerciales diferenciadas.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-4.col-sm-2.col-lg-1
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/5.svg", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p.mb-0 Existen diferentes criterios de segmentación, como demográficos, geográficos, psicográficos y conductuales, en los negocios sostenibles, los criterios psicográficos y conductuales son especialmente relevantes, ya que permiten identificar valores, estilos de vida y hábitos de consumo relacionados con la sostenibilidad, esto facilita diseñar estrategias más precisas y alineadas con las expectativas del consumidor.

    .row.justify-content-center
      .col-xl-10
        .tarjeta.bg-img.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.d-none.d-lg-block
              img(src="@/assets/curso/common/movie-icon.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Principales características de la segmentación de mercado.
                  p.mb-0 Lo invitamos a ver el siguiente recurso educativo por medio del cual podrá profundizar en temática abordada, el cual corresponde a un video que describe características clave de segmentación de mercado, como medible, accesible, sustancial y accionable, para orientar estrategias comerciales efectivas. 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.d-block(:href="obtenerLink('/downloads/Sintesis.pdf')"  target="_blank")
                    span Ir al recurso
                    i.fas.fa-file-pdf
    
    .titulo-sexto.color-acento-contenido.mb-5
      h5 Tabla 4.
      span Tipos de segmentación y características
    .tabla-a.color-acento-contenido.tabla-a--text-left.mb-5
      table
        caption Nota. SENA, (2026).
        thead
          tr(style="background-color: #EBFAF7")
            th Tipo
            th(colspan="2") Características	
            th(colspan="2") Ejemplo aplicado
        tbody
          tr
            td Demográfica
            td(colspan="2") Clasifica a los consumidores según edad, género, ingresos y nivel educativo, permitiendo identificar patrones básicos de consumo.	
            td(colspan="2") Una empresa de productos ecológicos dirige su oferta a jóvenes profesionales con ingresos medios interesados en consumo responsable.

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.z-2
      .col-xl-10
        .bg-gradiente-pg.p-4.py-5.rounded-5
          .row.justify-content-center.align-items-center
            .col-sm-6.col-lg-3.d-none.d-lg-block
              figure.position-relative
                img.imagen-inf(src="@/assets/curso/tema4/8.png", alt="")
            .col-lg-9
              h4 Clave estratégica
              p.mb-0 La segmentación permite pasar de un mercado general a oportunidades comerciales específicas.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Estrategias

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-4.col-sm-2.col-lg-1
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/6.svg", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p.mb-0 Las estrategias de mercado son acciones planificadas que permiten a las empresas posicionar sus productos o servicios en función de las condiciones del entorno y las características del consumidor, estas estrategias orientan la toma de decisiones comerciales, facilitando la adaptación de la oferta a las necesidades del mercado. En contextos sostenibles, las estrategias deben integrar criterios ambientales y sociales para generar valor diferencial.

    .bg-botones-a10.mb-5(data-aos="fade-up").z-2
      .row.justify-content-center.align-items-center
        .col-lg-5
          figure
            img(src='@/assets/curso/tema3/7.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Una estrategia efectiva considera variables como segmentación, propuesta de valor y comportamiento del consumidor, en el caso de los negocios sostenibles, es fundamental comunicar de manera clara los atributos del producto, como su impacto ambiental o certificaciones, esto permite conectar con consumidores que valoran la sostenibilidad, fortaleciendo la relación con el cliente y aumentando la probabilidad de compra.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Tipos de estrategias de mercado y características

    p.mb-5.z-2 Estrategias de mercado que orientan decisiones comerciales mediante diferenciación, enfoque, liderazgo en costos y valor sostenible para consumidores responsables.

    .row.justify-content-center.align-items-stretch.z-2.mb-5
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.bg-cards.p-4.rounded-4.h-100
          img.mb-4.imgw-105(src="@/assets/curso/tema3/8.svg")
          h4.text-center.mb-4 Diferenciación
          p.text-center.mb-0 Se basa en resaltar atributos únicos del producto, como sostenibilidad o calidad, generando valor percibido en el consumidor.
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.bg-cards.p-4.rounded-4.h-100
          img.mb-4.imgw-105(src="@/assets/curso/tema3/9.svg")
          h4.text-center.mb-4 Enfoque
          p.text-center.mb-0 Dirige la oferta hacia un segmento específico, permitiendo atender necesidades concretas y mejorar la efectividad comercial.
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-sm-0
        .tarjeta.bg-cards.p-4.rounded-4.h-100
          img.mb-4.imgw-105(src="@/assets/curso/tema3/10.svg")
          h4.text-center.mb-4 Liderazgo en costos
          p.text-center.mb-0 Busca ofrecer precios competitivos mediante eficiencia en procesos, sin descuidar aspectos de sostenibilidad en la producción.
      .col-sm-6.col-lg-5.col-xl-3
        .tarjeta.bg-cards.p-4.rounded-4.h-100
          img.mb-4.imgw-105(src="@/assets/curso/tema3/11.svg")
          h4.text-center.mb-4 Valor sostenible
          p.text-center.mb-0 Integra atributos ambientales y sociales en la propuesta comercial, conectando con consumidores responsables.

    .row.justify-content-center.align-items-center.z-2
      .col-xl-10
        .bg-gradiente-gy.p-4.rounded-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img.mb-4.mb-lg-0(src="@/assets/curso/common/qmark.svg", alt="")
            .col-lg-8
              h4 Pregunta de aplicación
              p.mb-4.mb-lg-0 ¿Cómo puede una estrategia de diferenciación basada en sostenibilidad influir en la decisión de compra del consumidor?
            .col-6.col-sm-4.co.d-none.d-lg-blockl-lg-3
              figure.position-relative
                img.imagen-inf(src="@/assets/curso/common/world-question.png", alt="")

    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4	Procedimiento de identificación

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        p El procedimiento de identificación de mercado consiste en un conjunto de pasos orientados a reconocer oportunidades comerciales a partir del análisis del entorno, este proceso implica observar tendencias, comportamientos del consumidor y condiciones del mercado; en el contexto sostenible, este procedimiento permite identificar nichos donde la sostenibilidad representa un valor relevante para el cliente.

        .p-4.py-3.bg-secundario-s5.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-10
              p.mb-4.mb-lg-0 Asimismo, el componente fortalece la capacidad del aprendiz para analizar el mercado, segmentar consumidores y reconocer oportunidades comerciales sostenibles en función del contexto local. Mediante el uso de herramientas, métodos y técnicas de prospección, se promueve la toma de decisiones fundamentadas que integran criterios ambientales, sociales y económicos, contribuyendo al desarrollo de competencias necesarias para la caracterización del cliente y la identificación de oportunidades en negocios sostenibles.
            .col-6.col-sm-3.col-lg-2
              figure
                img(data-aos="fade-down-right", src="@/assets/curso/deco.svg", alt="")

      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/12.png", alt="")
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Etapas del procedimiento de identificación

    p.mb-5.z-2 Etapas para identificar oportunidades comerciales mediante recolección, análisis, segmentación e interpretación de información del mercado y consumidores.

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-sm-6.col-xl-3
        figure
          img(src="@/assets/curso/tema3/13.png", alt="" data-aos="zoom-in-down")
      .col-xl-7
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Recolección de información")
            p.mb-0 Implica obtener datos del mercado, consumidores y tendencias, utilizando fuentes confiables para el análisis comercial.
          div(titulo="Análisis del mercado")
            p.mb-0 Consiste en interpretar la información recolectada, identificando patrones, comportamientos y oportunidades comerciales relevantes. 
          div(titulo="Segmentación")
            p.mb-0 Divide el mercado en grupos específicos, facilitando la identificación de consumidores con características similares. 
          div(titulo="Identificación de oportunidades")
            p.mb-0 Permite reconocer nichos de mercado donde existe demanda potencial para productos o servicios sostenibles. 

    .row.justify-content-center.align-items-center.z-2
      .col-xl-10
        .bg-gradiente-pg.p-4.rounded-5
          .row.justify-content-center.align-items-center
            .col-sm-6.col-lg-3.d-none.d-lg-block
              figure.position-relative
                img.imagen-inf(src="@/assets/curso/tema4/8.png", alt="")
            .col-lg-9
              h4 Clave estratégica
              p.mb-0 En contextos locales, la identificación de oportunidades comerciales sostenibles depende de factores como la cultura de consumo, la disponibilidad de productos y las condiciones económicas del entorno, lo que exige adaptar las estrategias comerciales a las realidades del mercado.

    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5	Técnicas de selección y de evaluación

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/14.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p Las técnicas de selección y evaluación de mercado permiten analizar diferentes alternativas comerciales para determinar cuáles son viables y estratégicas para la empresa; estas técnicas se basan en criterios como el tamaño del mercado, el nivel de competencia, el comportamiento del consumidor y la viabilidad económica, en el contexto de los negocios sostenibles, también se consideran factores ambientales y sociales.
        .p-4.py-3.bg-secundario-s5.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-9
              p.mb-4.mb-lg-0 Asimismo, el componente fortalece la capacidad del aprendiz para analizar el mercado, segmentar consumidores y reconocer oportunidades comerciales sostenibles en función del contexto local. Mediante el uso de herramientas, métodos y técnicas de prospección, se promueve la toma de decisiones fundamentadas que integran criterios ambientales, sociales y económicos, contribuyendo al desarrollo de competencias necesarias para la caracterización del cliente y la identificación de oportunidades en negocios sostenibles.
            .col-6.col-sm-3.col-lg-2
              figure
                img(data-aos="fade-down-right", src="@/assets/curso/deco.svg", alt="")

    .titulo-sexto.color-acento-contenido.mb-5
      h5 Tabla 5.
      span Técnicas de selección y evaluación del mercado
    .tabla-a.color-acento-contenido.tabla-a--text-left.mb-5
      table
        caption Nota. SENA, (2026).
        thead
          tr(style="background-color: #EBFAF7")
            th Técnica
            th(colspan="2") Desarrollo
            th(colspan="2") Ejemplo aplicado
        tbody
          tr
            td Análisis de mercado
            td(colspan="2") Permite estudiar la oferta, la demanda y la competencia, identificando oportunidades y riesgos en el entorno comercial.	
            td(colspan="2") Una empresa de productos ecológicos analiza la competencia local y detecta baja oferta sostenible, identificando una oportunidad de mercado.
        
    .row.justify-content-center.align-items-center.z-2
      .col-xl-10
        .bg-gradiente-gy.p-4.rounded-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img.mb-4.mb-lg-0(src="@/assets/curso/common/qmark.svg", alt="")
            .col-lg-8
              h4 Pregunta de aplicación
              p.mb-4.mb-lg-0 ¿Qué factores deben considerarse al evaluar un segmento de mercado sostenible?
            .col-6.col-sm-4.co.d-none.d-lg-blockl-lg-3
              figure.position-relative
                img.imagen-inf(src="@/assets/curso/common/world-question.png", alt="")

    separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.6 Variables

    img(data-aos="fade-up")(src="@/assets/curso/tema3/15.png", alt="")
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 Las variables del mercado son factores que influyen en el comportamiento del consumidor y en la dinámica de la oferta y la demanda, estas variables pueden ser internas o externas y afectan directamente la toma de decisiones comerciales; en los negocios sostenibles, es fundamental identificar variables relacionadas con la sostenibilidad, como la conciencia ambiental, las regulaciones y las tendencias de consumo.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/16.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p Entre las variables más relevantes se encuentran las económicas, sociales, culturales y ambientales, cada una de ellas influye en la forma en que los consumidores perciben los productos y toman decisiones de compra. Por ejemplo, un aumento en la conciencia ambiental puede generar mayor demanda de productos sostenibles, creando nuevas oportunidades de mercado.
        p.mb-0 Empresas como IKEA analizan estas variables para adaptar su oferta a las condiciones del mercado. Al identificar tendencias hacia la sostenibilidad, han desarrollado productos más ecológicos y accesibles. Esto demuestra que comprender las variables del mercado permite anticipar cambios y diseñar estrategias comerciales más efectivas.

    .fullwidth-bg.fullwidth-bg--1

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Etapas del procedimiento de identificación

    p.mb-5.z-2 Variables del mercado que influyen en decisiones de compra y comportamiento del consumidor en contextos sostenibles.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8.col-xl-7
        TabsA.color-primario
          .tarjeta.p-4(titulo="Económicas")
            p.mb-0 Facilitan la identificación de clientes potenciales a partir de sus intereses, comportamientos y participación en contenidos.
          .tarjeta.p-4(titulo="Sociales")
            p.mb-0 Facilitan la identificación de clientes potenciales a partir de sus intereses, comportamientos y participación en contenidos.
          .tarjeta.p-4(titulo="Culturales")
            p.mb-0 Facilitan la identificación de clientes potenciales a partir de sus intereses, comportamientos y participación en contenidos.
          .tarjeta.p-4(titulo="Ambientales")
            p.mb-0 Facilitan la identiases dficación de clientes potenciales a partir de sus intereses, comportamientos y participación en contenidos.
      .col-sm-6.col-lg-4.col-xl-3.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/17.png", alt="")

    .row.justify-content-center.align-items-center.z-2
      .col-xl-10
        .bg-gradiente-pg.p-4.rounded-5
          .row.justify-content-center.align-items-center
            .col-sm-6.col-lg-3.d-none.d-lg-block
              figure.position-relative
                img.imagen-inf(src="@/assets/curso/tema4/8.png", alt="")
            .col-lg-9
              h4 Clave estratégica
              p.mb-0 Las variables del mercado permiten anticipar tendencias y detectar oportunidades comerciales.

    separador
    #t_3_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.7	Conclusiones

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-9
        p.mb-0 En el contexto sostenible, el análisis del mercado permite identificar oportunidades comerciales alineadas con la sostenibilidad y diseñar propuestas que respondan a contextos específicos. La segmentación de mercado facilita la identificación de consumidores verdes y la construcción de propuestas comerciales diferenciadas. Las estrategias de mercado orientan decisiones comerciales mediante diferenciación, enfoque, liderazgo en costos y valor sostenible para consumidores responsables. El procedimiento de identificación de mercado permite reconocer nichos de mercado donde existe demanda potencial para productos o servicios sostenibles. Las técnicas de selección y evaluación de mercado permiten analizar diferentes alternativas comerciales para determinar cuáles son viables y estratégicas para la empresa. Las variables del mercado permiten anticipar tendencias y detectar oportunidades comerciales.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5

    .bg-botones-a10.mb-5(data-aos="fade-up").z-2
      .row.justify-content-center.align-items-center
        .col-lg-5
          figure
            img(src='@/assets/curso/tema3/19.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El proceso de implementación de estrategias de mercado consiste en llevar a la práctica las decisiones comerciales definidas a partir del análisis del entorno, este proceso implica coordinar recursos, definir acciones concretas y ejecutar estrategias orientadas al cumplimiento de objetivos comerciales, la implementación debe garantizar coherencia entre la propuesta de valor y las prácticas reales de la empresa.

    p.mb-5.z-2 La implementación incluye etapas como planificación, ejecución, seguimiento y control, durante estas fases, es fundamental evaluar el desempeño de las estrategias y realizar ajustes según las condiciones del mercado. Por ejemplo, una empresa puede modificar su estrategia comercial si identifica cambios en el comportamiento del consumidor o en las tendencias sostenibles.


    .titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span Proceso de implementación de estrategias comerciales sostenibles
    img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema3/19-mob.png", alt="la figura muestra el proceso de implementación de estrategias comerciales sostenibles.")
    img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema3/19.png", alt="la figura muestra el proceso de implementación de estrategias comerciales sostenibles.")
    figcaption Nota. SENA, (2026).

    separador
    #t_3_8.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.8	Conclusiones

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-4.col-sm-2.col-lg-1
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/20.svg", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p.mb-0 Las tipologías de mercado permiten clasificar los diferentes tipos de mercados según sus características, facilitando su análisis y comprensión, esta clasificación es útil para identificar condiciones específicas que influyen en la comercialización de productos; en el contexto sostenible, las tipologías permiten reconocer mercados donde la sostenibilidad es un factor determinante en la decisión de compra.

    .row.justify-content-center
      .col-xl-10
        .tarjeta.bg-img.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.d-none.d-lg-block
              img(src="@/assets/curso/common/movie-icon.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Tipos de mercado según el producto.
                  p.mb-0 Lo invitamos a ver el siguiente recurso educativo por medio del cual podrá profundizar en temática abordada, el cual corresponde a un video que explica tipos de mercado según producto: consumo, uso, industrial, servicios y financieros, diferenciando características y aplicación en contextos comerciales.
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.d-block(:href="obtenerLink('/downloads/Sintesis.pdf')"  target="_blank")
                    span Ir al recurso
                    i.fas.fa-file-pdf
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-xl-10
        .bg-audio.rounded-5.overflow-hidden.p-4.p-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              p.mb-4 A continuación, se invita a escuchar al siguiente podcast: 
              TarjetaAudio.color-acento-contenido.mb-3(
                texto="¿En qué consiste la economía circular? "
                :audio="require_src('@/assets/componentes/audios/audio-ej.mp3')"
              )
            .col-sm-6.col-lg-3
              figure
                img.imgw-200(src="@/assets/curso/tema2/24.png", alt="")
      

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .bg-quote.p-4.rounded-5
          .row.align-items-center
            .col-4.col-sm-3.col-lg-2
              img.mb-4.mb-lg-0(src="@/assets/curso/common/quote.png", alt="")
            .col-lg-8
              h4 Cita de reflexión 
              p.mb-4.mb-lg-0 “Actuar con integridad en el mercado implica tomar decisiones responsables, considerando no solo el beneficio propio, sino también el impacto que se genera en los demás y en el entorno.”








</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
