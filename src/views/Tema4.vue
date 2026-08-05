<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Prospección

    .row.justify-content-center.align-items-center.z-2
      .col-lg-9
        p La prospección es el proceso mediante el cual las empresas identifican y seleccionan clientes potenciales, permitiendo orientar sus esfuerzos comerciales hacia oportunidades reales de negocio. 
        p En el contexto de los negocios sostenibles, la prospección adquiere un valor estratégico al facilitar la identificación de consumidores interesados en propuestas responsables. 
        .p-4.py-3.bg-secundario-s5.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-10
              p.mb-4.mb-lg-0 Este capítulo aborda los objetivos, métodos, herramientas y técnicas de prospección, orientados a fortalecer la toma de decisiones en procesos comerciales sostenibles.
            .col-2.col-sm-1.d-none.d-lg-block
              figure
                img(src="@/assets/curso/deco.svg", alt="")
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/1.png", alt="")

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Objetivos
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p Los objetivos de la prospección están orientados a identificar clientes potenciales que puedan convertirse en compradores reales, este proceso permite enfocar los esfuerzos comerciales en segmentos con mayor probabilidad de conversión, optimizando el uso de recursos; en el contexto sostenible, los objetivos incluyen identificar consumidores que valoren atributos ambientales y sociales en los productos.
        p.mb-0 La prospección también busca comprender las necesidades del cliente, facilitando la construcción de propuestas comerciales adecuadas, esto implica analizar información relevante sobre el comportamiento del consumidor y sus preferencias. Por ejemplo, identificar consumidores interesados en productos ecológicos permite diseñar estrategias más efectivas y alineadas con el mercado.
        
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Objetivos de la prospección

    p.mb-4.z-2 Objetivos de prospección orientados a identificar clientes, comprender necesidades, optimizar recursos y generar oportunidades comerciales sostenibles.

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        SlyderF(columnas="col-sm-12 col-lg-10 col-xl-6")
          .tarjeta.bg-cards.p-4.rounded-4.h-100
            img.mb-4.imgw-105(src="@/assets/curso/tema4/4.svg")
            h4.text-center.mb-4 Identificación de clientes potenciales
            p.text-center.mb-0 Reconocer consumidores con interés en productos sostenibles, facilitando el enfoque de las estrategias comerciales.
          .tarjeta.bg-cards.p-4.rounded-4.h-100
            img.mb-4.imgw-105(src="@/assets/curso/tema4/5.svg")
            h4.text-center.mb-4 Comprensión del cliente
            p.text-center.mb-0 Ayuda a identificar necesidades, preferencias y comportamientos, orientando la construcción de propuestas de valor efectivas.
          .tarjeta.bg-cards.p-4.rounded-4.h-100
            img.mb-4.imgw-105(src="@/assets/curso/tema4/6.svg")
            h4.text-center.mb-4 Optimización de recursos
            p.text-center.mb-0 Permite enfocar esfuerzos en segmentos con mayor probabilidad de compra, reduciendo costos y aumentando la eficiencia.
          .tarjeta.bg-cards.p-4.rounded-4.h-100
            img.mb-4.imgw-105(src="@/assets/curso/tema4/7.svg")
            h4.text-center.mb-4 Generación de oportunidades
            p.text-center.mb-0 Facilita la identificación de nichos de mercado donde existe demanda potencial para productos sostenibles.

    .row.justify-content-center.align-items-center.z-2
      .col-xl-10
        .bg-gradiente-pg.p-4.py-5.rounded-5
          .row.justify-content-center.align-items-center
            .col-sm-6.col-lg-3.d-none.d-lg-block
              figure.position-relative
                img.imagen-inf(src="@/assets/curso/tema4/8.png", alt="")
            .col-lg-9
              h4 Clave estratégica
              p.mb-0 Prospectar bien no es buscar más clientes, es encontrar los correctos.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 métodos

    p.mb-5.z-2 Los métodos de prospección son las formas mediante las cuales las empresas identifican clientes potenciales, estos pueden ser tradicionales o digitales, dependiendo del contexto y del tipo de mercado. En los negocios sostenibles, es fundamental utilizar métodos que permitan identificar consumidores interesados en propuestas responsables, aprovechando herramientas tecnológicas y canales de comunicación actuales.

    .bg-botones-a10.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-5
          figure
            img(src='@/assets/curso/tema4/9.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Entre los métodos más comunes se encuentran la prospección directa, la prospección digital y el uso de redes de contacto; cada uno de estos métodos presenta ventajas según el tipo de mercado. Por ejemplo, las redes sociales permiten identificar consumidores interesados en sostenibilidad a partir de sus interacciones y preferencias.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 6.
      span Métodos de prospección y características
    .tabla-a.color-acento-contenido.tabla-a--text-left.mb-5
      table
        caption Nota. SENA, (2026).
        thead
          tr(style="background-color: #EBFAF7")
            th Método
            th(colspan="2") Características	
            th(colspan="2") Ejemplo aplicado
        tbody
          tr
            td Prospección directa
            td(colspan="2") Implica contacto directo con el cliente, permitiendo conocer sus necesidades y establecer relaciones comerciales.	
            td(colspan="2") Un asesor comercial visita tiendas locales para presentar productos sostenibles y conocer directamente las necesidades del cliente.

    .row.justify-content-center.align-items-center.z-2
      .col-xl-10
        .bg-gradiente-gy.p-4.rounded-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img.mb-4.mb-lg-0(src="@/assets/curso/common/qmark.svg", alt="")
            .col-lg-8
              h4 Pregunta de aplicación
              p.mb-4.mb-lg-0 ¿Qué método de prospección sería más efectivo para identificar consumidores sostenibles en un entorno digital?
            .col-6.col-sm-4.co.d-none.d-lg-blockl-lg-3
              figure.position-relative
                img.imagen-inf(src="@/assets/curso/common/world-question.png", alt="")

    separador
    #t_4o-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 herramientas

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-4.col-sm-2.col-lg-1
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/10.png", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p Las herramientas de prospección son recursos que permiten recopilar, organizar y analizar información sobre clientes potenciales; estas herramientas facilitan la identificación de oportunidades comerciales, optimizando el proceso de búsqueda de clientes. Entre las herramientas más utilizadas se encuentran los sistemas de gestión de clientes (CRM), las plataformas digitales y las bases de datos, las cuales permiten segmentar el mercado, analizar comportamientos y hacer seguimiento a los prospectos. Por ejemplo, un CRM permite registrar interacciones con clientes y evaluar su nivel de interés en productos sostenibles.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Herramientas de prospección y características

    p.mb-5.z-2 Herramientas de prospección que facilitan identificar clientes, analizar información, segmentar mercados y optimizar decisiones comerciales estratégicas.

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-xl-9
        TabsA.color-primario
          .tarjeta.p-4(titulo="CRM")
            p.mb-0 Facilitan la identificación de clientes potenciales a partir de sus intereses, comportamientos y participación en contenidos.
          .tarjeta.p-4(titulo="Redes sociales")
            p.mb-0 Facilitan la identificación de clientes potenciales a partir de sus intereses, comportamientos y participación en contenidos.
          .tarjeta.p-4(titulo="Bases de datos")
            p.mb-0 Facilitan la identificación de clientes potenciales a partir de sus intereses, comportamientos y participación en contenidos.
          .tarjeta.p-4(titulo="Plataformas digitales")
            p.mb-0 Facilitan la identiases dficación de clientes potenciales a partir de sus intereses, comportamientos y participación en contenidos.

      .col-sm-6.col-lg-3.d-none.d-xl-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/11.png", alt="")
    
    .row.justify-content-center.align-items-center.z-2
      .col-xl-10
        .bg-gradiente-pg.p-4.py-5.rounded-5
          .row.justify-content-center.align-items-center
            .col-sm-6.col-lg-3.d-none.d-lg-block
              figure.position-relative
                img.imagen-inf(src="@/assets/curso/tema4/8.png", alt="")
            .col-lg-9
              h4 Clave estratégica
              p.mb-0 Las herramientas convierten datos en oportunidades comerciales.

    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 técnicas

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/12.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Las técnicas de prospección son acciones específicas utilizadas para interactuar con clientes potenciales y generar oportunidades comerciales, permiten establecer contacto, conocer necesidades y evaluar el interés del consumidor; en los negocios sostenibles, es fundamental aplicar técnicas que permitan comunicar de manera efectiva el valor ambiental y social de los productos.
        .p-4.py-3.bg-secundario-s5.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-9
              p.mb-4.mb-lg-0 Entre las técnicas más utilizadas se encuentran la entrevista, la observación, el análisis de comportamiento y el seguimiento, ellas, permiten obtener información relevante sobre el cliente y adaptar la propuesta comercial. Por ejemplo, una entrevista puede revelar el nivel de interés de un consumidor en productos sostenibles, facilitando la personalización de la oferta.
            .col-6.col-sm-3
              figure
                img(data-aos="fade-down-right", src="@/assets/curso/deco.svg", alt="")

    .bg-img.bg-img--2.rounded-5.p-4.p-lg-5.py-lg-4.position-relative.mb-5
      .tarjeta.tarjeta--blanca.p-5.py-4.rounded-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            p.mb-3.mb-lg-0 #[strong Ejemplo aplicado]. Empresas como Patagonia utilizan técnicas de interacción con clientes para comprender sus necesidades y fortalecer su relación con ellos, esto demuestra que las técnicas de prospección no solo buscan vender, sino también construir relaciones comerciales basadas en la confianza y la sostenibilidad. 
          .col-sm-4.col-lg-2
            figure
              img.arbol-img(src="@/assets/curso/common/arbol-ej.png", alt="")

    .titulo-sexto.color-acento-contenido
      h5 Tabla 7.
      span Técnicas de prospección y características
    .tabla-a.color-acento-contenido.tabla-a--text-left.mb-5
      table
        caption Nota. SENA, (2026).
        thead
          tr(style="background-color: #EBFAF7")
            th Técnica
            th(colspan="2") Características	
            th(colspan="2") Ejemplo aplicado
        tbody
          tr
            td Entrevista
            td(colspan="2") Permite obtener información directa del cliente, identificando necesidades, intereses y percepciones sobre productos sostenibles.	
            td(colspan="2") Un asesor entrevista a clientes para conocer su interés en productos ecológicos y ajustar la propuesta comercial según sus respuestas.

    .row.justify-content-center
      .col-xl-10
        .tarjeta.bg-img.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.d-none.d-lg-block
              img(src="@/assets/curso/common/movie-icon.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Prospección de clientes.
                  p.mb-0 Lo invitamos a ver el siguiente recurso educativo por medio del cual podrá profundizar en temática abordada, el cual corresponde a un video que explica la prospección de clientes, destacando su importancia, canales, análisis, clasificación, estrategias, seguimiento y técnicas para generar oportunidades comerciales efectivas.

                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.d-block(:href="obtenerLink('/downloads/Sintesis.pdf')"  target="_blank")
                    span Ir al recurso
                    i.fas.fa-file-pdf

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .bg-gradiente-pg.p-4.rounded-5
          .row.justify-content-center.align-items-center
            .col-sm-6.col-lg-3.d-none.d-lg-block
              figure.position-relative
                img.imagen-inf(src="@/assets/curso/tema4/8.png", alt="")
            .col-lg-9
              h4 Clave estratégica
              p.mb-0 Los conceptos de sostenibilidad, consumidor verde, mercado y prospección no funcionan de manera aislada, sino que se interrelacionan, permitiendo comprender cómo las características del consumidor influyen en la identificación de oportunidades comerciales dentro de contextos sostenibles.

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .bg-quote.p-4.rounded-5
          .row.align-items-center
            .col-4.col-sm-3.col-lg-2
              img.mb-4.mb-lg-0(src="@/assets/curso/common/quote.png", alt="")
            .col-lg-8
              h4 Cita de reflexión 
              p.mb-4.mb-lg-0 “La verdadera integridad en la gestión comercial se evidencia al reconocer al otro con respeto, transparencia y responsabilidad, construyendo relaciones basadas en confianza y propósito.”




</template>

<script>
export default {
  name: 'Tema4',
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
