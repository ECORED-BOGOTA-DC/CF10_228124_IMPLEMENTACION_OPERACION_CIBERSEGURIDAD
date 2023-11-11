<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") La ciberseguridad es un aspecto muy importante en cualquier organización, por lo que es de suma importancia tener una evaluación constante de los riesgos de algún tipo de ataque en este sentido, se debe conocer muy bien el tipo de estrategias a utilizar, con el fin de detectar las posibles amenazas y con esto implementar acciones que permitan mitigar o corregir los controles de ciberseguridad establecidos por la empresa u organización. Al igual que reconocer los diferentes tipos de auditorías y sus respectivos informes que permitan una mejor toma de decisiones en este aspecto.

    .row.justify-content-center(data-aos="zoom-in-up")
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
