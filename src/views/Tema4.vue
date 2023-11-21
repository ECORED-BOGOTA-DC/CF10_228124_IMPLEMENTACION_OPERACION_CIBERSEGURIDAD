<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Procedimiento de ejecución de pruebas de efectividad

    p(data-aos="fade-right") Las pruebas de efectividad pueden realizarse por medio de las siguientes acciones de manera secuencial: 

    .m-auto.mt-5
      .row.justify-content-center
        .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in-up")
          .h-100.cont_flecha1.p-4.text-center.d-flex.align-content-center.flex-wrap(style="background-color:#500C75;")
            p.mb-0.w-100.text-white Contextualización
        .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in-up")
          .h-100.cont_flecha1.p-4.text-center.d-flex.align-content-center.flex-wrap(style="background-color:#FFB206;")
            p.mb-0.w-100 Reconocimiento del objetivo
        .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in-up")
          .h-100.cont_flecha1.p-4.text-center.d-flex.align-content-center.flex-wrap(style="background-color:#8F52F5;")
            p.mb-0.w-100.text-white Modelado de amenzas
        .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in-up")
          .h-100.cont_flecha1.p-4.text-center.d-flex.align-content-center.flex-wrap(style="background-color:#500C75;")
            p.mb-0.w-100.text-white Evaluación de vulnerabilidades
        .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in-up")
          .h-100.cont_flecha1.p-4.text-center.d-flex.align-content-center.flex-wrap(style="background-color:#FFB206;")
            p.mb-0.w-100 Explotación
        .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in-up")
          .h-100.cont_flecha1.p-4.text-center.d-flex.align-content-center.flex-wrap(style="background-color:#8F52F5;")
            p.mb-0.w-100.text-white Post explotación
        .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in-up")
          .h-100.cont_flecha1.p-4.text-center.d-flex.align-content-center.flex-wrap(style="background-color:#500C75;")
            p.mb-0.w-100.text-white Reporte
    
    p.mt-5(data-aos="fade-right") A continuación, se especifican las acciones con las que se aplican las pruebas de efectividad; comprenda los aspectos importantes de cada una de ellas a través de la siguiente información:

    AcordionA.mt-4(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.col-lg-11.m-auto(titulo="Contextualización")
        .col-md-6.mb-4.mb-md-0.col-lg-8
          p Esta acción se basa en identificar los alcances reales de las pruebas y de los procedimientos a ejecutar con base a las necesidades identificadas.
        .col-md-6.col-lg-4
          figure.col-7.m-auto.col-md-12
            img(src='@/assets/curso/tema4/1.png')
      .row.col-lg-11.m-auto(titulo="Reconocimiento del objetivo")
        .col-md-6.mb-4.mb-md-0.col-lg-8
          p Esta acción, busca obtener tanta información del objetivo como sea posible para poder ser empleada en la acción de evaluación de vulnerabilidades y la acción de explotación.
        .col-md-6.col-lg-4
          figure.col-7.m-auto.col-md-12
            img(src='@/assets/curso/tema4/2.png')
      .row.col-lg-11.m-auto(titulo="Modelado de amenazas")
        .col-md-6.mb-4.mb-md-0.col-lg-8
          p Esta acción establece la relación entre el atacante y el activo, intentando definir el beneficio que puede alcanzar el atacante si logra penetrar el sistema y afectar la información de alguna manera.
        .col-md-6.col-lg-4
          figure.col-7.m-auto.col-md-12
            img(src='@/assets/curso/tema4/3.png')
      .row.col-lg-11.m-auto(titulo="Evaluación de vulnerabilidades")
        .col-md-6.mb-4.mb-md-0.col-lg-8
          p Es la acción que descubre falencias en los sistemas y aplicaciones, que pueden llegar a ser aprovechados por un atacante. 
        .col-md-6.col-lg-4
          figure.col-7.m-auto.col-md-12
            img(src='@/assets/curso/tema4/4.png')
      .row.col-lg-11.m-auto(titulo="Explotación")
        .col-md-6.mb-4.mb-md-0.col-lg-8
          p Es la acción que busca, concretamente, acceder al sistema, apalancando las debilidades identificadas en la etapa anterior o sobrepasando los controles de seguridad existentes.
        .col-md-6.col-lg-4
          figure.col-7.m-auto.col-md-12
            img(src='@/assets/curso/tema4/5.png')
      .row.col-lg-11.m-auto(titulo="Post explotación")
        .col-md-6.mb-4.mb-md-0.col-lg-8
          p Acción que busca identificar el tipo de información que se puede obtener, a qué otros sistemas de información se puede ingresar desde el sistema capturado, las opciones de configuración, información de red, todo esto con el objetivo principal de determinar el valor de la máquina para la organización.
        .col-md-6.col-lg-4
          figure.col-7.m-auto.col-md-12
            img(src='@/assets/curso/tema4/6.png')
      .row.col-lg-11.m-auto(titulo="Reporte")
        .col-md-6.mb-4.mb-md-0.col-lg-8
          p Acción con la que se documentan resultados obtenidos en cada anterior acción.
        .col-md-6.col-lg-4
          figure.col-7.m-auto.col-md-12
            img(src='@/assets/curso/tema4/7.png')
    
    .col-xl-8.col-lg-10.m-auto.mt-5(data-aos="zoom-in-up")
      .cajon.mt-4.p-4.color-acento-contenido(style="background-color:#FFE8B3;")
        p.mb-0 De la aplicación procedente, responsable y oportuna de las pruebas, depende en gran medida su efectividad y su potencial aprovechamiento. Las pruebas de efectividad han de realizarse con las acciones mencionadas, siendo cada una de estas, una acción vinculada consecuentemente con las anteriores o con las posteriores. 
    
    .cont_4_1.mt-5.pt-4.pt-lg-5.pb-4.pt-lg-5
      .col-xl-10.m-auto
        .row
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            figure.col-6.col-md-7.col-lg-12.m-auto
              img(src="@/assets/curso/tema4/8.svg")
          .col-lg-8(data-aos="fade-left")
            .titulo-segundo.titulo_segundo_1
              h3 Guía metodológica de pruebas de efectividad 
            p Para ahondar en los aspectos importantes relacionados con pruebas de efectividad y su procedimiento, le recomendamos estudiar la #[strong Guía No 1. Guía metodológica de pruebas de efectividad del MinTIC.]
            a.boton.color-acento-botones.mt-4(href="https://www.mintic.gov.co/gestionti/615/articles-5482_G1_Metodologia_pruebas_efectividad.pdf" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
  



      
</template>

<script>
export default {
  name: 'Tema4',
  components: {},
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
<style lang="sass">
.cont_flecha1
  clip-path: polygon(93% 0, 100% 48%, 93% 100%, 0% 100%, 9% 51%, 0% 0%)
.acordion .tarjeta--azul
  background-color: #FFF0CD
.acordion__accion__btn--a i, .acordion__accion__btn--b i
  color: #E01650
.cont_4_1, .cont_4_1 *
  position: relative
.cont_4_1:before
  content: ''
  position: absolute
  height: 100%
  width: 125%
  left: -15%
  top: 0
  background-color: #EEE5FE
.titulo_segundo_1:after
  border-left-color: #3C3FA7 !important
  background-color: #AFC6DE
</style>
