<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Pruebas y análisis

    .row
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-7.col-md-8.col-lg-12
          img(src="@/assets/curso/tema2/1.png" alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left" style="place-self:center;")
        p Mediante las pruebas y análisis, las entidades identifican los diferentes riesgos que se muestran por las debilidades en la implementación del modelo de seguridad y de privacidad de la información y las vulnerabilidades que se manifiestan dada la ausencia de controles de seguridad que logren mitigar riesgos.
        .cajon.mt-4.p-4.color-acento-contenido(style="background-color:#FFE8B3;")
          p.mb-0 Este tipo de pruebas están orientadas a la evaluación de la estructura de seguridad de la organización; para ello, las organizaciones han de revisar diferentes frentes de trabajo como, por ejemplo, el Anexo A de la ISO 27001:2013, el ciclo de vida de la seguridad (PHVA), el nivel y estado de madurez de la organización en correspondencia con los niveles expuestos en el modelo de seguridad y privacidad y las recomendaciones para que la organización logre plasmar el concepto de #[strong ciberseguridad].

    
   




</template>

<script>
export default {
  name: 'Tema2',
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
