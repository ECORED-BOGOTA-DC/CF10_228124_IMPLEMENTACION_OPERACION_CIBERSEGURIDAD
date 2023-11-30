<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 La auditoría en la ciberseguridad
    
    .row
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-7.col-md-8.col-lg-12
          img(src="@/assets/curso/tema6/1.png" alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left" style="place-self:center;")
        p Una auditoría de ciberseguridad se considera una de las partes más importantes de un sistema de bloqueo frente a posibles ciberataques, por lo cual percibe especial interés para conocer en qué consiste y cómo proceder para mantener tales ciberataques lejos de los intereses de la organización.
        p.mt-4 Es importante realizar este tipo de auditoría, tanto interna como externa, para verificar el estado de la seguridad de la organización. En estas auditorías se inspeccionan los sistemas frente a los ataques o posibles brechas de seguridad que puedan existir.
    
    p.mt-4(data-aos="fade-right") Las siguientes, son algunas particularidades importantes que se han de tener en cuenta, en lo referente a periodicidad e intensidad, en procesos de auditorías de ciberseguridad, esto es:
    
    .row.mt-4.justify-content-center
      .col-lg.mb-4.mb-lg-0.col-md-9
        .h-100.p-4.p-lg-5.text-white.cont_tarjeta1(style="background: linear-gradient(0deg, rgba(143,82,245,1) 70%, rgba(255,255,255,1) 70%); border-radius:15px;" data-aos="zoom-in-up")
          figure.col-lg-10.col-md-7.col-7.m-auto
            img(src="@/assets/curso/tema6/2.svg" alt="Imagen decorativa")
          h5.mt-5 Periodicidad de las auditorías
          p.mt-4 Se debe tratar de una comprobación cíclica o periódica, ya que de esta manera aporta nueva información cada espacio breve de tiempo.
      .col-lg.mb-4.mb-lg-0.col-md-9
        .h-100.p-4.p-lg-5.text-white.cont_tarjeta1(style="background: linear-gradient(0deg, rgba(80,12,117,1) 70%, rgba(255,255,255,1) 70%); border-radius:15px;" data-aos="zoom-in-up")
          figure.col-lg-10.col-md-7.col-7.m-auto
            img(src="@/assets/curso/tema6/3.svg" alt="Imagen decorativa")
          h5.mt-5 Importancia del ejercicio cíclico
          p.mt-4 Realizar auditorías periódicas no es obligatorio en todas las organizaciones, sobre todo de perfil privado, pero sí que es bastante recomendable, con el fin de prevenir o ver a tiempo los posibles problemas acaecidos en los sistemas de seguridad. 
      .col-lg.mb-4.mb-lg-0.col-md-9
        .h-100.p-4.p-lg-5.text-white.cont_tarjeta1(style="background: linear-gradient(0deg, rgba(141,41,195,1) 70%, rgba(255,255,255,1) 70%); border-radius:15px;" data-aos="zoom-in-up")
          figure.col-lg-10.col-md-7.col-7.m-auto
            img(src="@/assets/curso/tema6/4.svg" alt="Imagen decorativa")
          h5.mt-5 Promoción de la mejora y buenas prácticas
          p.mt-4 Este tipo de auditoría de ciberseguridad promueve la mejora de los sistemas, en cuanto a buenas prácticas, sobre todo en estos tiempos de constantes cambios y renovaciones tecnológicas.




  



      
</template>

<script>
export default {
  name: 'Tema6',
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
