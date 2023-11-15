<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Pasos de la auditoría en ciberseguridad
    
    .row
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema7/1.svg")
      .col(data-aos="fade-left" style="place-self:center;")
        p.mb-0 Las auditorías de los sistemas de gestión de la seguridad de la información, deben ser establecidas teniendo en cuenta algunas condiciones que favorecen, rotundamente, tanto su construcción como su desarrollo.
        p.mt-4.mb-0 Profundice en los pasos que se deben seguir para la auditoría en ciberseguridad, explorando la información que se expone a continuación:

    .col-xl-9.mt-5.m-auto
      ImagenInfografica.color-acento-contenido(data-aos="zoom-in-up")
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema7/2.svg')
        .tarjeta.color-acento-botones.p-3(x="10%" y="99%" numero="+" style="background-color:#E8DDC2;box-shadow:0px 0px 15px rgba(0,0,0,.2);")
          p.mb-0(style="color:inherit;") Se debe establecer el objetivo de la auditoría de ciberseguridad a realizar. No es lo mismo hacer una auditoría para validar una norma, que realizar una, para comprobar que se está cumpliendo la política de ciberseguridad exigida.
        .tarjeta.color-acento-botones.p-3(x="30%" y="99%" numero="+" style="background-color:#E8DDC2;box-shadow:0px 0px 15px rgba(0,0,0,.2);")
          p.mb-0(style="color:inherit;") Con objetivos de auditoría claros, se proyectan los pasos por seguir. Se establecen servicios por auditar y se identifican los sistemas operativos instalados en la organización.
        .tarjeta.color-acento-botones.p-3(x="50%" y="99%" numero="+" style="background-color:#E8DDC2;box-shadow:0px 0px 15px rgba(0,0,0,.2);")
          p.mb-0(style="color:inherit;") Recopilar toda la información posible para valorar funcionamiento en el área  de TI de la organización, las tecnologías, políticas y protocolos que son el objetivo de la auditoría de ciberseguridad.
          p.mb-0(style="color:inherit;") Pueden aplicarse entrevistas con empleados, analizando las especificaciones del software y el hardware, revisando documentación,  utilizando herramientas para medir la seguridad de los sistemas y vulnerabilidades con los que cuenta la organización.
        .tarjeta.color-acento-botones.p-3(x="70%" y="99%" numero="+" style="background-color:#E8DDC2;box-shadow:0px 0px 15px rgba(0,0,0,.2);")
          p.mb-0(style="color:inherit;") Se examina la información recolectada para encontrar las vulnerabilidades y fallos en los sistemas de la organización.
        .tarjeta.color-acento-botones.p-3(x="90%" y="99%" numero="+" style="background-color:#E8DDC2;box-shadow:0px 0px 15px rgba(0,0,0,.2);")
          p.mb-0(style="color:inherit;") Hecho todo el análisis y conociendo el estado real de la organización, se produce un informe detallado de los resultados extraídos de la auditoría. En este informe se explican vulnerabilidades de ciberseguridad halladas y se proponen soluciones y recomendaciones.

    br
    .col-xl-9.col-lg-10.m-auto.mt-5(data-aos="zoom-in-up")
      .cajon.mt-4.p-4.color-acento-contenido(style="background-color:#FFE8B3;")
        p.mb-0 Cumplidos estos pasos, se explicarán, además, las acciones recomendadas que debe realizar la empresa u organización en cada uno de los puntos críticos (ante ciberataques) que se han encontrado. 


  



      
</template>

<script>
export default {
  name: 'Tema7',
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
