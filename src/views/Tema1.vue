<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Objetivos de desarrollo sostenible (sostenibilidad)

      p.mb-4 Los Objetivos de Desarrollo Sostenible (ODS) constituyen un marco global orientado a equilibrar el crecimiento económico, la inclusión social y la protección ambiental. 

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema1/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 En el contexto de los negocios sostenibles, estos objetivos permiten comprender cómo las decisiones empresariales y de consumo impactan el entorno, su estudio facilita la identificación de oportunidades comerciales responsables, alineando las estrategias de mercado con principios de sostenibilidad aplicables a diferentes sectores productivos.


        

  </template>

<script>
export default {
  name: 'Tema1',
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
