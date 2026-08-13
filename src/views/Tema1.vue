<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Objetivos de desarrollo sostenible (sostenibilidad)

    p.mb-4 Los Objetivos de Desarrollo Sostenible (ODS) constituyen un marco global orientado a equilibrar el crecimiento económico, la inclusión social y la protección ambiental. 

    .bloque-texto-g.color-primario-p10.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el contexto de los negocios sostenibles, estos objetivos permiten comprender cómo las decisiones empresariales y de consumo impactan el entorno, su estudio facilita la identificación de oportunidades comerciales responsables, alineando las estrategias de mercado con principios de sostenibilidad aplicables a diferentes sectores productivos.
  
    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Tipos

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-4.col-sm-2.col-lg-1
        figure
          img.mb-4.mb-md-0(src="@/assets/curso/tema1/2.svg", alt="" data-aos="zoom-in-down")
      .col-sm-10.col-lg-11
        p.mb-0 Los Objetivos de Desarrollo Sostenible se clasifican en tres dimensiones fundamentales: social, económica y ambiental, esta clasificación permite comprender cómo las acciones humanas impactan de manera integral el entorno. En el ámbito empresarial, esta estructura facilita la alineación de estrategias comerciales con criterios sostenibles, promoviendo decisiones que no solo buscan rentabilidad, sino también bienestar social y conservación ambiental en diferentes contextos productivos.
        
    .row.justify-content-center
      .col-xl-10
        .tarjeta.bg-img.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.d-none.d-lg-block
              img(src="@/assets/curso/common/movie-icon.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Qué son los objetivos de Desarrollo Sostenible? <br> | Agenda 2030 | Educación Ambiental Digital
                  p.mb-0 Lo invitamos a ver el siguiente recurso educativo por medio del cual podrá profundizar en temática abordada, el cual corresponde a un video que explica el origen de los Objetivos de Desarrollo Sostenible dentro de la Agenda 2030, detallando sus 17 objetivos y su propósito de abordar problemáticas globales como la pobreza, la desigualdad y el cambio climático.
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.d-block(href="https://www.youtube.com/watch?v=twMRJ6a-j7A"  target="_blank")
                    span Enlace
                    i.fas.fa-file-video

    p.mb-5.z-2 A continuación, se presenta una clasificación de los ODS que facilita su comprensión, permitiendo identificar las temáticas que comparten, las relaciones entre ellos y su contribución conjunta al cumplimiento de la Agenda 2030. Esta organización favorece una visión integral y evidencia cómo cada objetivo complementa a los demás para impulsar un desarrollo más justo, inclusivo y sostenible.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Clasificación de los ODS y sus características

    p.mb-5.z-2 Clasificación de los ODS en social, económico y ambiental, destacando características que orientan decisiones responsables en contextos empresariales sostenibles.

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/3.png", alt="alt")
          .crd_hover_txt--body.px-0
            h4.mb-4 Social
            p.mb-0.px-4 Busca mejorar la calidad de vida de las personas, promoviendo inclusión, equidad, acceso a educación, salud y condiciones dignas, influyendo en la percepción del consumidor hacia marcas responsables. 
    
      .col-sm-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/4.png", alt="alt")
          .crd_hover_txt--body.px-0
            h4.mb-4 Económico
            p.mb-0.px-4 Se orienta al crecimiento sostenible, la generación de empleo digno y la innovación empresarial, facilitando oportunidades comerciales alineadas con el desarrollo económico responsable. 

      .col-sm-8.col-lg-6.col-xl-4
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/5.png", alt="alt")
          .crd_hover_txt--body.px-0
            h4.mb-4 Ambiental
            p.mb-0.px-4 Promueve la protección de los recursos naturales, la reducción del impacto ambiental y el uso eficiente de los recursos, siendo clave para el desarrollo de productos sostenibles. 

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .bg-gradiente-gy.p-4.rounded-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img.mb-4.mb-lg-0(src="@/assets/curso/common/qmark.png", alt="")
            .col-lg-8
              h4 Pregunta de aplicación
              p.mb-4.mb-lg-0 ¿Cómo influye la clasificación de los ODS en la identificación de oportunidades comerciales en un mercado específico?
            .col-6.col-sm-4.col-lg-3
              figure.position-relative
                img.imagen-inf(src="@/assets/curso/common/world-question.png", alt="")

    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Aplicación

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/6.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p La aplicación de los Objetivos de Desarrollo Sostenible en el ámbito empresarial implica traducir principios globales en acciones concretas dentro de los procesos productivos y comerciales, esto requiere que las organizaciones analicen su impacto en el entorno y definan estrategias que respondan a criterios sostenibles. En este contexto, las decisiones relacionadas con productos, servicios y mercados deben alinearse con prácticas responsables que generen valor tanto económico como social y ambiental.
        .p-4.py-3.bg-secundario-s5.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-9
              p.mb-4.mb-lg-0 En el proceso comercial, la aplicación de los ODS permite identificar oportunidades de negocio basadas en necesidades reales del consumidor sostenible. Por ejemplo, empresas que incorporan empaques biodegradables no solo reducen su impacto ambiental, sino que también responden a una demanda creciente del mercado, esta conexión entre sostenibilidad y mercado fortalece la propuesta de valor y mejora la percepción del cliente.
            .col-6.col-sm-3.col-lg-2
              img(src="@/assets/curso/deco.svg", alt="")

    .bg-img.bg-img--2.rounded-5.p-4.p-lg-5.py-lg-4.position-relative.mb-5
      .tarjeta.tarjeta--blanca.p-5.py-4.rounded-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            p.mb-3.mb-lg-0 #[strong Ejemplo aplicado]. Un caso representativo es el de Natura, empresa que ha integrado la sostenibilidad en toda su cadena de valor, desde la obtención de materias primas hasta la comercialización, esto le ha permitido posicionarse como una marca confiable y responsable, demostrando que la aplicación de los ODS no solo es viable, sino estratégica para el crecimiento empresarial en mercados cada vez más exigentes. 
          .col-sm-4.col-lg-2
            figure
              img.arbol-img(src="@/assets/curso/common/arbol-ej.png", alt="")

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Aplicación empresarial de los ODS

    p.mb-4 Aplicación empresarial de los ODS en producción, comercialización y consumo, integrando sostenibilidad en procesos, estrategias y decisiones responsables

    .row.justify-content-center.align-items-stretch
      .col-sm-6.col-lg-4.col-xl-3.mb-4.mb-lg-0
        .bg-cards.p-4.rounded-4.h-100
          img.mb-4.imgw-105(src="@/assets/curso/tema1/7.svg")
          h4.text-center.mb-4 Producción
          p.text-center.mb-0 Implementación de procesos responsables que reducen el impacto ambiental, optimizan recursos y promueven prácticas sostenibles en toda la cadena productiva.
      .col-sm-6.col-lg-4.col-xl-3.mb-4.mb-lg-0
        .bg-cards.p-4.rounded-4.h-100
          img.mb-4.imgw-105(src="@/assets/curso/tema1/8.svg")
          h4.text-center.mb-4 Comercialización
          p.text-center.mb-0 Desarrollo de estrategias que comunican el valor sostenible del producto, fortaleciendo la relación con consumidores conscientes y generando diferenciación en el mercado.
      .col-sm-6.col-lg-4.col-xl-3
        .bg-cards.p-4.rounded-4.h-100
          img.mb-4.imgw-105(src="@/assets/curso/tema1/9.svg")
          h4.text-center.mb-4 Consumo
          p.text-center.mb-0 Promoción de hábitos responsables en los clientes, incentivando decisiones de compra informadas y alineadas con principios de sostenibilidad.

    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3	Marco normativo

    .bg-botones-a10.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-5
          figure
            img(src='@/assets/curso/tema1/11.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El marco normativo de la sostenibilidad está compuesto por acuerdos, políticas y regulaciones que orientan las acciones de gobiernos y empresas hacia prácticas responsables, estos lineamientos permiten establecer estándares para la protección ambiental, el desarrollo social y el crecimiento económico sostenible. En el contexto empresarial, el conocimiento de estas normativas facilita la toma de decisiones alineadas con la legalidad y la responsabilidad, fortaleciendo la competitividad en mercados cada vez más exigentes.
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        p A nivel internacional, instrumentos como la Agenda 2030 de las Naciones Unidas establecen los Objetivos de Desarrollo Sostenible como guía para los países y organizaciones. Asimismo, normas como ISO 14001 orientan la gestión ambiental en las empresas, promoviendo el control de impactos y la mejora continua. Estas regulaciones influyen directamente en la forma en que las empresas diseñan sus productos, gestionan sus procesos y comunican su propuesta de valor al mercado.
        .p-4.py-3.bg-secundario-s5.rounded-4.mb-4.mb-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-9
              p.mb-4.mb-lg-0 En el contexto nacional, las políticas públicas y regulaciones ambientales determinan las condiciones bajo las cuales operan los negocios sostenibles. Por ejemplo, normativas sobre manejo de residuos, uso de recursos naturales o certificaciones ecológicas condicionan la oferta comercial. Empresas que cumplen estos lineamientos no solo evitan sanciones, sino que generan confianza en los consumidores, quienes valoran cada vez más la transparencia y el compromiso ambiental en sus decisiones de compra.
            .col-6.col-sm-3.col-lg-2
              img(src="@/assets/curso/deco.svg", alt="")
      .col-sm-6.col-lg-3
        figure
          img(src="@/assets/curso/tema1/12.png", alt="")

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Referentes normativos y su aplicación en decisiones comerciales
    .tabla-a.color-acento-contenido.tabla-a--text-left.mb-5
      table
        caption Nota. SENA, (2026).
        thead
          tr(style="background-color: #EBFAF7")
            th Norma / Referente
            th(colspan="2") Desarrollo	
            th(colspan="2") Aplicación en decisiones comerciales
        tbody
          tr
            td Agenda 2030 (ONU)
            td(colspan="2") Establece 17 objetivos globales orientados al desarrollo sostenible, integrando dimensiones sociales, económicas y ambientales como guía estratégica para gobiernos y empresas.
            td(colspan="2") Permite diseñar propuestas comerciales alineadas con sostenibilidad, facilitando la identificación de segmentos de mercado interesados en consumo responsable.
          tr
            td ISO 14001 
            td(colspan="2") Norma internacional que orienta la gestión ambiental en las organizaciones, promoviendo el control de impactos y la mejora continua en procesos productivos sostenibles. 
            td(colspan="2") Apoya la argumentación comercial al demostrar prácticas responsables, fortaleciendo la confianza del cliente y diferenciando el producto frente a la competencia. 
          tr
            td Legislación ambiental nacional 
            td(colspan="2") Conjunto de leyes que regulan el uso de recursos, manejo de residuos y protección ambiental en el contexto local. 
            td(colspan="2") Define condiciones mínimas para operar, evitando sanciones y permitiendo posicionar la marca como confiable y alineada con la normativa vigente. 
          tr
            td ISO 26000 
            td(colspan="2") Proporciona lineamientos sobre responsabilidad social empresarial, integrando prácticas éticas, sociales y ambientales en la gestión organizacional.  
            td(colspan="2") Permite construir propuestas de valor basadas en responsabilidad social, fortaleciendo la reputación de la empresa y su relación con los clientes. 
          tr
            td Economía circular 
            td(colspan="2") Modelo que promueve la reutilización y optimización de recursos, reduciendo el impacto ambiental en los procesos productivos. 
            td(colspan="2") Facilita el diseño de productos sostenibles y la generación de nuevos modelos de negocio basados en reutilización y eficiencia de recursos. 
          tr
            td Certificaciones ambientales 
            td(colspan="2") Sellos que garantizan prácticas sostenibles en productos y procesos, validando estándares ambientales reconocidos. 
            td(colspan="2") Sirven como herramienta de comunicación comercial, aumentando la credibilidad del producto y facilitando la decisión de compra del consumidor. 

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .bg-quote.p-4.rounded-5
          .row.align-items-center
            .col-4.col-sm-3.col-lg-2
              img.mb-4.mb-lg-0(src="@/assets/curso/common/quote.png", alt="")
            .col-lg-8
              h4 Cita de reflexión 
              p.mb-4.mb-lg-0 “Comprender la sostenibilidad no solo implica cuidar el entorno, sino actuar con responsabilidad integral, reconociendo que cada decisión personal impacta el bienestar colectivo y el equilibrio del planeta.” 

  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
