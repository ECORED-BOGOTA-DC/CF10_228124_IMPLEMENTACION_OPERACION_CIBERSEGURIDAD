<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Tipos de auditorías
    
    .row
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema8/1.svg" alt="Imagen decorativa")
      .col(data-aos="fade-left" style="place-self:center;")
        p.mb-0 Las auditorías pueden ser de tipo externas o internas. Se diferencian dependiendo de quién realiza la auditoría; si lo realizan compañías independientes de la organización se consideran auditorías externas y cuando son realizadas por personas que trabajan en la propia organización se denominan auditorías internas.
        p.mt-4.mb-0 Las auditorías en ciberseguridad pueden clasificarse según el objetivo que persiguen o según la información proporcionada, esto es:

    h4.mt-5.p-3.pe-5.mb-5(style="background: linear-gradient(90deg, rgba(255,178,6,1) 0%, rgba(255,255,255,1) 100%);max-width:fit-content;border-left:8px #500C75 solid;" data-aos="fade-right") Auditoría según el objetivo
    p(data-aos="fade-left") Este tipo de auditorías las puede revisar más detalladamente a continuación:

    .row.mt-5
      .col-md-6.col-lg-4.mb-4
        .tarjeta-numerada.color-acento-contenido.p-5.h-100(style="box-shadow:0px 4px 10px rgba(0,0,0,.1);" data-aos="zoom-in-up")
          .tarjeta-numerada__numero
            .h2 1
          p.fw-bold Auditoría forense
          p.mb-0 Son auditorías de ciberseguridad que se realizan tras haberse producido un incidente de seguridad. Tiene como objetivo identificar y recopilar evidencias digitales para establecer las causas que lo han producido.
      .col-md-6.col-lg-4.mb-4
        .tarjeta-numerada.color-primario.p-5.h-100(style="box-shadow:0px 4px 10px rgba(0,0,0,.1);" data-aos="zoom-in-up")
          .tarjeta-numerada__numero
            .h2 2
          p.fw-bold Auditoría web
          p.mb-0 Se trata de auditorías que tienen como objetivo conocer la seguridad de aplicaciones y páginas web que nos permitan descubrir cualquier tipo de fallo o vulnerabilidad en la implementación de los mismos.
      .col-md-6.col-lg-4.mb-4
        .tarjeta-numerada.color-secundario.p-5.h-100(style="box-shadow:0px 4px 10px rgba(0,0,0,.1);" data-aos="zoom-in-up")
          .tarjeta-numerada__numero
            .h2.text-white 3
          p.fw-bold Auditoría de código
          p.mb-0 Por una parte, las auditorías de código son pruebas de calidad sobre aplicaciones informáticas (a nivel de código fuente) que permiten conocer e identificar posibles vulnerabilidades en cualquier tipo de #[em software].
      .col-md-6.col-lg-4.mb-4
        .tarjeta-numerada.color-secundario.p-5.h-100(style="box-shadow:0px 4px 10px rgba(0,0,0,.1);" data-aos="zoom-in-up")
          .tarjeta-numerada__numero
            .h2.text-white 4
          p.fw-bold Auditoria de #[em hacking] ético
          p.mb-0 Son un #[em test] de intrusión que intenta utilizar las mismas técnicas de #[em hacking] y herramientas que los atacantes para, de esta manera, poner a prueba la seguridad informática. La forma de comprobar las medidas de seguridad es poniéndolas a prueba y para ello surge este servicio.
      .col-md-6.col-lg-4.mb-4
        .tarjeta-numerada.color-acento-contenido.p-5.h-100(style="box-shadow:0px 4px 10px rgba(0,0,0,.1);" data-aos="zoom-in-up")
          .tarjeta-numerada__numero
            .h2 5
          p.fw-bold Auditoría de análisis de vulnerabilidades
          p.mb-0 Son auditorías de ciberseguridad que tienen como objetivo detectar los posibles agujeros de seguridad de las aplicaciones, en busca de vulnerabilidades; también se encargará de poner a prueba la robustez de las contraseñas.
      .col-md-6.col-lg-4.mb-4
        .tarjeta-numerada.color-primario.p-5.h-100(style="box-shadow:0px 4px 10px rgba(0,0,0,.1);" data-aos="zoom-in-up")
          .tarjeta-numerada__numero
            .h2 6
          p.fw-bold Auditoría de redes
          p.mb-0 La seguridad de la red, ha de ser una prioridad para la organización, más aún en un internet que se encuentra plagado de ataques externos. Hacer un mapeo de la red, con el fin de descubrir todos los dispositivos conectados, es en lo que se centrará este tipo de auditoría.
    
    h4.mt-5.p-3.pe-5.mb-5(style="background: linear-gradient(90deg, rgba(255,178,6,1) 0%, rgba(255,255,255,1) 100%);max-width:fit-content;border-left:8px #500C75 solid;" data-aos="fade-right") Auditorías según información proporcionada
    p(data-aos="fade-left") Este tipo de auditorías están clasificadas en tres y las puede detallar a mayor profundidad a continuación:

    .row.mt-5.justify-content-center
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in-up")
        .h-100.p-4.pt-5.pb-5.text-white(style="background-color:#500C75;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema8/2.svg" style="max-width:90px;" alt="Imagen decorativa")
          h5.mt-3 Auditoría de caja blanca
          p.mt-4 En este tipo de auditorías, los auditores tienen todo el conocimiento y los accesos por adelantado de los elementos e infraestructuras que se van a analizar.
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in-up")
        .h-100.p-4.pt-5.pb-5.text-white(style="background-color:#8F52F5;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema8/3.svg" style="max-width:90px;" alt="Imagen decorativa")
          h5.mt-3 Auditorías de caja gris
          p.mt-4 Los auditores tienen un acceso limitado a los sistemas y datos de la organización. Para realizar este tipo de auditorías lo que se hace es simular un ciberataque interno (como si fuera un empleado) con malas intenciones.
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in-up")
        .h-100.p-4.pt-5.pb-5.text-white(style="background-color:#8D29C3;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema8/4.svg" style="max-width:90px;" alt="Imagen decorativa")
          h5.mt-3 Auditorías de caja negra
          p.mt-4 No se tiene conocimiento de ningún tipo de información ni de acceso. Aquí el auditor parte desde el principio y va a intentar descubrir las posibles formas de lograr entrar en el sistema interno desde fuera de la empresa. En este caso el ciberataque que se va a simular es externo.









      
</template>

<script>
export default {
  name: 'Tema8',
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
<style lang="sass"></style>
