<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    img(data-aos="fade-up")(src="@/assets/curso/intro.png", alt="")
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 El componente aborda los fundamentos de la sostenibilidad, el consumidor verde, el mercado y la prospección, como base para comprender el contexto de los negocios sostenibles. Integra conceptos, tipologías y marcos normativos que explican el impacto ambiental del consumo y la relación entre las necesidades del cliente y las dinámicas del mercado.

    .row.justify-content-center
      .col-xl-10
        p Su propósito es fortalecer la capacidad del aprendiz para analizar el entorno comercial, identificar perfiles de consumidores y reconocer oportunidades de comercialización sostenible. El contenido se desarrollará mediante enfoques conceptuales y aplicados, utilizando ejemplos y análisis de casos que faciliten la comprensión y la toma de decisiones en contextos reales.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
