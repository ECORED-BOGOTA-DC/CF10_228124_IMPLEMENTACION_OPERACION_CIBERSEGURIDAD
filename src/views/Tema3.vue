<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Tipos de pruebas de efectividad
    
    .row
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/1.svg")
      .col(data-aos="fade-left" style="place-self:center;")
        p.mb-0 Existen tres tipos de pruebas de efectividad, basados en el nivel de conocimiento del entorno o de la infraestructura de la organización objetivo, estos tres tipos de prueba son los siguientes:
    
    TabsC.color-primario.mt-4
      .py-3.py-md-4(titulo="Pruebas con conocimiento <br> nulo del entorno")
        .row.col-xl-11.m-auto
          .col-md-6.mb-4.mb-md-0.col-lg-7(style="place-self:center;")
            p Se trata del tipo de prueba en la que simulará a un atacante real, ya que se basa en que cuenta con muy poco conocimiento o quizá nulo conocimiento del objetivo o su infraestructura.
          .col-md-6.col-lg-5(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema3/2.png')
      .py-3.py-md-4(titulo="Pruebas con conocimiento <br> medio del entorno")
        .row.col-xl-11.m-auto
          .col-md-6.mb-4.mb-md-0.col-lg-7(style="place-self:center;")
            p Consiste en que, para la prueba de #[em pentesting], se cuenta con más información sobre aquel ambiente que será atacado, es decir, direcciones IP, sistemas operativos, arquitectura de red, entre otros. De igual manera, es información limitada o media. Esto emula a alguna persona dentro de la red con conocimiento básico de la misma.
          .col-md-6.col-lg-5(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema3/3.png')
      .py-3.py-md-4(titulo="Pruebas con conocimiento <br> completo del entorno")
        .row.col-xl-11.m-auto
          .col-md-6.mb-4.mb-md-0.col-lg-7(style="place-self:center;")
            p Son pruebas en donde el #[em hacker] cuenta con toda la información disponible y relacionada con el sistema objetivo del ataque. Por lo general, son para asuntos de auditoría.
          .col-md-6.col-lg-5(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema3/4.png')
   







</template>

<script>
export default {
  name: 'Tema3',
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
.tabs-c.color-primario .tabs-c__tab--active span
  font-weight: bold
</style>
