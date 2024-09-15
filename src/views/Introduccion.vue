<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    p(data-aos="fade-up")  Las normas establecen pautas sobre la conducta del individuo en cualquier contexto, con el fin de fijar parámetros que faciliten la convivencia en una sociedad. En ocasiones, resulta complicado no infringir alguna norma y actuar como se espera en la sociedad.

    .full-width-bg.bg-fondo-1
      .p-4.p-md-5
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-auto(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/temas/1.png', alt='Introducción', style='max-width: 100%;').mx-auto.mb-4.mb-lg-0
          .col-lg(data-aos="fade-left")
            .tarjeta.bg-color-s10.p-4.px-lg-5.h-100
              p.my-0.mt-xl-2.mt-xxl-3 Existen normas de conducta y reglamentos en cada situación que implique la interacción de personas. Por esta razón, en las empresas, las reglas son fundamentales, ya que, si están bien establecidas, pueden facilitar el crecimiento empresarial.
         

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8.col-xl-9.col-xxl-10.order-2.order-lg-1(data-aos="fade-right")
            p.mb-4 La normatividad empresarial es una parte esencial de las organizaciones. Por lo tanto, es necesario que todos los miembros de la empresa las conozcan para poder acatarlas de la mejor manera.

            .bg-color-ac10.p-4.px-xxl-5(data-aos="fade-left")
              p.my-0 En este componente formativo, se abordará el tema de normatividad empresarial como guía para llevar a cabo cualquier acción dentro de la empresa.
          .col-lg-4.col-xl-3.col-xxl-2.order-1.order-lg-2(data-aos="zoom-in") 
            img.img-fluid(src='@/assets/curso/temas/2.png', alt='', style='max-width: 190px;').mx-auto.mb-4.mb-lg-0

        br
        br
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
