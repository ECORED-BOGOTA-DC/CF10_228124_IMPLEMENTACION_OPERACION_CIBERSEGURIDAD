<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Alcance de las pruebas
    
    p(data-aos="fade-right") Deberán existir una serie de reglas y otros elementos importantes para la aplicación de las pruebas de efectividad técnicas, con el fin de asegurar que tales actividades no lleguen a incurrir en fallas mayores y que, también, sea posible la afectación de la infraestructura o de las distintas operaciones de la organización.
    p.mt-4(data-aos="fade-left") Dentro del alcance, es posible definir aspectos como los que se muestran a continuación: 

    ImagenInfografica.color-acento-contenido.mt-5(data-aos="zoom-in-up")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema5/1.svg')
      .tarjeta.color-acento-botones.p-3(x="22%" y="51%" numero="+" style="background-color:#500C75;box-shadow:0px 0px 15px rgba(0,0,0,.2);")
        p.mb-0.fw-bold Multas o sanciones
        p.mb-0.mt-2 En caso de incumplir los parámetros anteriormente mencionados, deberán fijarse las sanciones disciplinarias o multas a que haya lugar.
      .tarjeta.color-acento-botones.p-3(x="29.2%" y="21%" numero="+" style="background-color:#500C75;box-shadow:0px 0px 15px rgba(0,0,0,.2);")
        p.mb-0.fw-bold Plan de trabajo
        p.mb-0.mt-2 Implica definir la duración en tiempo para la realización de las pruebas, los sistemas que van a hacer parte de estas, las acciones y actividades específicas, los procedimientos de contingencia en caso de alguna afectación, entre otros.
      .tarjeta.color-acento-botones.p-3(x="50%" y="20%" numero="+" style="background-color:#500C75;box-shadow:0px 0px 15px rgba(0,0,0,.2);")
        p.mb-0.fw-bold Insumos
        p.mb-0.mt-2 Recursos necesarios para realizar las actividades: entre otros, personal adicional, ventanas de tiempo, equipos.
      .tarjeta.color-acento-botones.p-3(x="74%" y="19%" numero="+" style="background-color:#500C75;box-shadow:0px 0px 15px rgba(0,0,0,.2);")
        p.mb-0.fw-bold Responsables
        p.mb-0.mt-2 Serán los encargados de efectuar las pruebas (sean proveedores o funcionarios de la entidad).
      .tarjeta.color-acento-botones.p-3(x="76.5%" y="57%" numero="+" style="background-color:#500C75;box-shadow:0px 0px 15px rgba(0,0,0,.2);")
        p.mb-0.fw-bold Afectaciones posibles
        p.mb-0.mt-2 Tipo de afectación que puede llegar a darse sobre cada sistema, también debe definirse si el objetivo es realizarlo en horario de producción o en horario de baja actividad laboral.
      .tarjeta.color-acento-botones.p-3(x="50%" y="99%" numero="+" style="background-color:#FFB206;box-shadow:0px 0px 15px rgba(0,0,0,.2);")
        p.mb-0(style="color:inherit;") Estos alcances permitirán controlar internamente el desarrollo de las pruebas, así como manejar los acuerdos de servicio con terceros que pueden llegar a realizar estos procedimientos.





  



      
</template>

<script>
export default {
  name: 'Tema5',
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
.img-infografica.color-acento-contenido .img-infografica__item__dot:before, .img-infografica.color-acento-contenido .img-infografica__item__dot:after, .img-infografica.color-acento-contenido .img-infografica-b__item__dot:before, .img-infografica.color-acento-contenido .img-infografica-b__item__dot:after, .img-infografica-b.color-acento-contenido .img-infografica__item__dot:before, .img-infografica-b.color-acento-contenido .img-infografica__item__dot:after, .img-infografica-b.color-acento-contenido .img-infografica-b__item__dot:before, .img-infografica-b.color-acento-contenido .img-infografica-b__item__dot:after
  background-color: #ffffff
  opacity: 1
.img-infografica__item, .img-infografica-b__item
  width: 3.5%
  box-shadow: 0px 0px 10px rgba(0,0,0,.25)
  border-radius: 100%
.img-infografica.color-acento-contenido .img-infografica__item__numero, .img-infografica-b.color-acento-contenido .img-infografica__item__numero
  color: #E01650
  font-size: 30px
</style>
