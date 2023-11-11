<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Finalidad de las pruebas
    
    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p El enfoque de las pruebas de efectividad, significa comprobar o medir la eficiencia de la ejecución del modelo de seguridad en las organizaciones, para esto se han desarrollado metodologías que favorecen la comprensión y el desarrollo de las pruebas, el alcance de objetivos y el beneficio que se gana al identificar sus etapas y gestionarlas.
        .cajon.mt-4.p-4.color-acento-contenido(style="background-color:#FFE8B3;")
          p.mb-0 Tales metodologías se desarrollan en diferentes etapas, ayudando a definir qué tanto ha avanzado la organización con la implementación del modelo. Así pues, por medio de la valoración de diferentes aspectos, se podrán identificar también vulnerabilidades y amenazas, a las cuales está expuesta la organización, de igual manera que las debilidades de los controles implementados. 
      .col-lg-4(data-aos="fade-left")
        figure.m-auto.col-7.col-md-8.col-lg-12
          img(src="@/assets/curso/tema1/1.svg")
    
    p.mt-4(data-aos="fade-right") A continuación, se presentan las etapas del procedimiento de las pruebas, según lo estipulado por la Guía metodológica de pruebas de efectividad, del MINTIC:

    h4.mt-5.p-3.pe-5.mb-5(style="background: linear-gradient(90deg, rgba(255,178,6,1) 0%, rgba(255,255,255,1) 100%);max-width:fit-content;border-left:8px #500C75 solid;" data-aos="fade-right") Etapas de las pruebas de efectividad

    .row.mt-5
      .col-xl-2.col-lg-3.col-md-5.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-4.col-md-12
          img(src="@/assets/curso/tema1/2.png")
      .col-xl-10.col-lg-9.col-md-7(data-aos="fade-left" style="place-self:center;")
        h5 Fase de levantamiento de información
        p.mt-4 Etapa en la que la organización hace recopilación de toda la información requerida para dar inicio a la actividad; esta información podrá estar organizada por el equipo de seguridad con el que cuente la empresa o compañía.
        p.mt-4 Con la información recolectada se buscará identificar los activos de mayor importancia en la organización, activos que tienen relación con los procesos institucionales, que serán de carácter misional o de apoyo. Otro aspecto que debe ser favorecido o facilitado por la información recopilada, es el hecho de permitir conocer el contexto de la entidad, en otras palabras, el entorno en donde serán proyectados los objetivos institucionales.
        .p-4.mt-4(style="background-color:#F1EBF4;border-radius:10px;")
          p.mb-0 La recolección de la información es realizada por un equipo de personas que debe estar integrado al organigrama de la entidad, al mapa de procesos, política de seguridad, manual de políticas, metodología de riesgos, identificación de riesgos, planes de gestión de riesgos, entre otros.  Este compendio de información es cimiento para lograr identificar la brecha de seguridad que tenga la organización.
    
    h4.mt-5.p-3.pe-5.mb-5(style="background: linear-gradient(90deg, rgba(255,178,6,1) 0%, rgba(255,255,255,1) 100%);max-width:fit-content;border-left:8px #500C75 solid;" data-aos="fade-right") Etapa de revisiones de manuales

    .row.mt-5
      .col-xl-2.col-lg-3.col-md-5.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-4.col-md-12
          img(src="@/assets/curso/tema1/3.png")
      .col-xl-10.col-lg-9.col-md-7(data-aos="fade-left" style="place-self:center;")
        p.mt-4 Cuando se habla de revisiones, se está haciendo referencia a aquellos procesos de inspección de los distintos manuales que la organización ha de realizar, para lograr la identificación de lo comprendido por los servidores públicos en seguridad, de lo realizado en seguridad en los procesos y, adicionalmente, el estado en que se encuentran las políticas institucionales.
        .p-4.mt-4(style="background-color:#D2C5D8;border-radius:10px;")
          p.mb-0 Tales revisiones, se llevan a cabo a la vez que se analiza la documentación, mediante encuentros o reuniones con quienes están a cargo de dichos temas, con los encargados de los procesos. Se trata de una forma efectiva porque mediante las inspecciones se logra hacer identificación del porqué de las implementaciones de seguridad y los controles aplicados en la organización.
        p.mt-4 Por otra parte, ayuda a hacer comprobación de si las personas y equipos de trabajo comprenden los distintos procesos de la seguridad institucional y si se ha logrado generar y tomar conciencia de las distintas políticas de seguridad y de privacidad que la empresa tiene.
    
    h4.mt-5.p-3.pe-5.mb-5(style="background: linear-gradient(90deg, rgba(255,178,6,1) 0%, rgba(255,255,255,1) 100%);max-width:fit-content;border-left:8px #500C75 solid;" data-aos="fade-right") Etapa de identificación de amenazas

    .row.mt-5
      .col-xl-2.col-lg-3.col-md-5.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-4.col-md-12
          img(src="@/assets/curso/tema1/4.png")
      .col-xl-10.col-lg-9.col-md-7(data-aos="fade-left" style="place-self:center;")
        p.mt-4 Se refiere a la evaluación misma del riesgo de seguridad en la organización. En otras palabras, es la evaluación de las distintas acciones y actividad en donde se han visto implicadas las personas, la infraestructura y los procesos. Todo ello, con el objetivo de lograr la identificación de las distintas amenazas que sobre la entidad pueden ocurrir.
        p.mt-4 Lo que resulte de la aplicación de estas actividades favorece que se desarrollen diferentes planes de mitigación de vulnerabilidades halladas; también ayuda a orientar mejor los recursos y la ayuda a las áreas de la organización que más lo estén necesitando. Buscar estas amenazas se debe dar desde el momento en que se crean los procesos y durante todo el ciclo de vida.
        p.mt-4 El enfoque que deben tener estas actividades debe ser simple, en otras palabras, se deben descomponer los procesos a través de la evaluación manual, así se podrá tener conocimiento del funcionamiento y su interrelación con las demás actividades, como:
        .p-4.mt-4(style="background-color:#FFF4DC;border-radius:10px;")
          ul.lista-ul.mb-0
            li.d-flex
              i.lista-ul__vineta
              | Definir y clasificar los activos de la entidad, evaluando su criticidad, sus posibles vulnerabilidades técnicas, operacionales y de gestión.
            li.d-flex
              i.lista-ul__vineta
              | Desarrollar una matriz con las amenazas potenciales, con sus vectores de ataque.
            li.d-flex.mb-0
              i.lista-ul__vineta
              | Elaborar planes de mitigación para cada amenaza real.
        p.mt-4.mb-0 El resultado de todo esto puede ser una serie de documentos, listas o diagramas, en los cuales se plasman los análisis de riesgo de la entidad y sus planes de mitigación a través de los controles sugeridos.




  



      
</template>

<script>
export default {
  name: 'Tema1',
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
