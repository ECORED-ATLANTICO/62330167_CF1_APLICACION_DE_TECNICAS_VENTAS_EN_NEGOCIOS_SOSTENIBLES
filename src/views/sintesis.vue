<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/sintesis.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p El componente formativo perfil del consumidor ofrece al aprendiz los fundamentos conceptuales y aplicados de la sostenibilidad, el consumidor verde, el mercado y la prospección, permitiendo comprender cómo las decisiones de consumo y las dinámicas comerciales se relacionan con el entorno. A través de estos elementos, se facilita la identificación de características del consumidor sostenible y el análisis de variables que influyen en la toma de decisiones dentro de contextos comerciales responsables.
        .p-4.py-3.bg-secundario-s5.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-9
              p.mb-4.mb-lg-0 Asimismo, el componente fortalece la capacidad del aprendiz para analizar el mercado, segmentar consumidores y reconocer oportunidades comerciales sostenibles en función del contexto local. Mediante el uso de herramientas, métodos y técnicas de prospección, se promueve la toma de decisiones fundamentadas que integran criterios ambientales, sociales y económicos, contribuyendo al desarrollo de competencias necesarias para la caracterización del cliente y la identificación de oportunidades en negocios sostenibles.
            .col-6.col-sm-3
              figure
                img(data-aos="fade-down-right", src="@/assets/curso/deco.svg", alt="")

    .row.justify-content-center
      .col-lg-12
        figure
          img.mb-5(src="@/assets/curso/sintesis.svg", alt="la ilustración muestra la estructura jerárquica que sintetiza el contenido del componente formativo “Perfil del cliente”, el cual se organiza en cuatro unidades. Inicia con objetivos desarrollo sostenible (sostenibilidad), en donde se desarrolla tipos, aplicación y marco normativo. El capítulo dos corresponde a consumidor verde, allí se desarrollan el contenido sobre tipos, sostenibilidad, ciclo de vida del producto, ecodiseño, ecofriendly y economía circular. El capítulo tres corresponde a mercado, en donde se aborda su concepto, segmentación, estrategias, procedimiento de identificación, técnicas de selección y de evaluación, variables y culmina con proceso de implementación, y tipologías. Por último, está el capítulo de prospección, donde se desarrollan sus objetivos, métodos, herramientas y técnicas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
