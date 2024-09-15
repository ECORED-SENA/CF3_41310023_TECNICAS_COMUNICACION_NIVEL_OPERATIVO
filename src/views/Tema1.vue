<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 ¿Qué es una norma? 

    
    .bg-fondo-2.p-4.ps-lg-5(data-aos="zoom-in")
      .row
        .col-lg-8.order-2.order-lg-1(style="place-self:center;")
          .bg-white.p-4.p-xl-5
            p.mb-0 Una norma es toda ley o regla que se establece para ser cumplida por un sujeto específico en un espacio y lugar determinados. Las normas son pautas de ordenamiento social que se establecen en una comunidad humana para organizar el comportamiento, las actitudes y las diferentes formas de actuar, de modo que no afecten el bien común.
        .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(style="place-self:center;")
          img(src="@/assets/curso/temas/1.svg", style="max-width: 343px").mx-auto


    p.my-5(data-aos="fade-up") A lo largo de la historia, las sociedades han desarrollado sus propios conjuntos de normas y leyes, que reflejan sus estructuras de pensamiento, valores morales y formas de entender el mundo. Estas normas han sido, en su origen, orales, pero la transformación a normas escritas las ha hecho universales y objetivas, limitando así el abuso interpretativo que podría darse si solo existieran en la conciencia de las personas. 

    .row.justify-content-center.mb-4
      .col-lg-8
        .bg-color-ac5(data-aos="zoom-in").p-4.p-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-auto.col-5
              img.img-fluid(src='@/assets/curso/temas/2.svg', alt='', style='max-width: 100%;').mx-auto.mb-4.mb-lg-0
            .col-lg
              .ps-2.pe-4.p-lg-3
                p.mb-0.text-sm-small  Las normas rigen las conductas aceptables dentro de una sociedad, garantizando un comportamiento correcto y armónico. 

    .full-width-bg.bg-fondo-4
      .p-4.p-md-5
        p.mb-5(data-aos="fade-up") #[strong Los tipos de normas son:]

        .row.justify-content-center.align-items-center.mb-5
          .col-xl-10
            .row.justify-content-center.align-items-stretch
              .col-lg-6(data-aos="zoom-in-up").mb-4.mb-lg-0
                .tarjeta.bg-fondo-3.p-4.h-100
                  .row.justify-content-center.align-items-center
                    .col-lg-auto
                      img.img-fluid(src='@/assets/curso/temas/3.svg', alt='', style='max-width: 90px;').mx-auto.mb-4.mb-lg-0
                    .col-lg
                      h5.mb-0.bg-color-ab.py-1.px-2.mb-3 Normas prohibitivas
                      p.mb-0 Prohíben las conductas indeseadas.

              .col-lg-6(data-aos="zoom-in-up").mb-4.mb-lg-0
                .tarjeta.bg-fondo-3.p-4.h-100
                  .row.justify-content-center.align-items-center
                    .col-lg-auto
                      img.img-fluid(src='@/assets/curso/temas/4.svg', alt='', style='max-width: 90px;').mx-auto.mb-4.mb-lg-0
                    .col-lg
                      h5.mb-0.bg-color-ab.py-1.px-2.mb-3 Normas permisivas
                      p.mb-0 Permiten las conductas deseadas.

        p.mb-5(data-aos="fade-up") #[strong La internalización de normas es: ]

        .row.justify-content-center.align-items-center.mb-5
          .col-xl-10
            .row.justify-content-center.align-items-stretch
              .col-lg-6(data-aos="zoom-in-up").mb-4.mb-lg-0
                .tarjeta.bg-fondo-3.p-4.h-100
                  .row.justify-content-center.align-items-center
                    .col-lg-auto
                      img.img-fluid(src='@/assets/curso/temas/5.svg', alt='', style='max-width: 90px;').mx-auto.mb-4.mb-lg-0
                    .col-lg
                      h5.mb-0.bg-color-ab.py-1.px-2.mb-3 Internalización
                      p.mb-0 Las normas, al ser internalizadas por los individuos, hacen innecesaria la supervisión constante, permitiendo que cada persona actúe de acuerdo con el código aprendido.

              .col-lg-6(data-aos="zoom-in-up").mb-4.mb-lg-0
                .tarjeta.bg-fondo-3.p-4.h-100
                  .row.justify-content-center.align-items-center
                    .col-lg-auto
                      img.img-fluid(src='@/assets/curso/temas/6.svg', alt='', style='max-width: 90px;').mx-auto.mb-4.mb-lg-0
                    .col-lg
                      h5.mb-0.bg-color-ab.py-1.px-2.mb-3 Explicitas e implícitas
                      p.mb-0 Las normas pueden ser explícitas (formales, escritas) o implícitas (informales, tácitas).

        p.mb-5(data-aos="fade-up") #[strong Las consecuencias de la ausencia o mal diseño de normas:]

        .row.justify-content-center.align-items-center.mb-lg-5
          .col-xl-10
            .row.justify-content-center.align-items-stretch
              .col-lg-6(data-aos="zoom-in-up").mb-4.mb-lg-0
                .tarjeta.bg-fondo-3.p-4.h-100
                  .row.justify-content-center.align-items-center
                    .col-lg-auto
                      img.img-fluid(src='@/assets/curso/temas/7.svg', alt='', style='max-width: 90px;').mx-auto.mb-4.mb-lg-0
                    .col-lg
                      h5.mb-0.bg-color-ab.py-1.px-2.mb-3 Anarquía y desorganización
                      p.mb-0 La ausencia total de normas lleva a la anarquía y desorganización.

              .col-lg-6(data-aos="zoom-in-up").mb-5.mb-lg-0
                .tarjeta.bg-fondo-3.p-4.h-100
                  .row.justify-content-center.align-items-center
                    .col-lg-auto
                      img.img-fluid(src='@/assets/curso/temas/8.svg', alt='', style='max-width: 90px;').mx-auto.mb-4.mb-lg-0
                    .col-lg
                      h5.mb-0.bg-color-ab.py-1.px-2.mb-3 Impacto del mal diseño
                      p.mb-0 Un mal diseño de normas puede generar pérdida de tiempo, energía o malestar en la organización.

        p Las normas son esenciales para el correcto funcionamiento de cualquier forma de organización humana, asegurando que las conductas sean alineadas con los valores y objetivos de la sociedad. 


    Separador

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2#t_1_1 1.1  Tipos de normas

    p.mb-5(data-aos="fade-left") Las normas varían según el contexto o la situación. La mayoría de las veces, las personas terminan aceptando las normas que se establecen, muchas de las cuales apelan al sentido común, la ética y la moralidad del individuo. Existen siete tipos principales de normas: 
    
    .full-width-bg.bg-fondo-5.mb-4
      .p-4.p-md-5
        .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4.shadow-soft
          SlyderA(tipo='b')
            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
                .pe-4
                  h4 Normas morales 
                  p.mt-4 Disposiciones creadas por una colectividad que regulan el comportamiento de los individuos dentro de una determinada sociedad y entorno geográfico. Son personales y autónomas, es decir, rigen la conciencia del individuo, pero no son punibles. 
              .col-lg-4
                img(src='@/assets/curso/temas/9.png', style="max-width: 420px").mx-auto

            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
                .pe-4
                  h4 Normas sociales 
                  p.mt-4 Normas que regulan la conducta justa de los individuos en cuanto miembros de una colectividad o sociedad, estableciendo lineamientos y valores para lograr una coexistencia estable, armónica y pacífica. 
              .col-lg-4
                img(src='@/assets/curso/temas/10.png', style="max-width: 420px").mx-auto


            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
                .pe-4
                  h4 Normas religiosas 
                  p.mt-4 Lineamientos conductuales establecidos por la doctrina y costumbres de una determinada religión, aplicables a sus miembros. 
              .col-lg-4
                img(src='@/assets/curso/temas/11.png', style="max-width: 420px").mx-auto

            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
                .pe-4
                  h4 Normas jurídicas 
                  p.mt-4 Normas derivadas de la convivencia social que regulan el comportamiento de los individuos dentro de una sociedad y son punibles en caso de contravención. 
              .col-lg-4
                img(src='@/assets/curso/temas/12.png', style="max-width: 420px").mx-auto


            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
                .pe-4
                  h4 Normas de etiqueta 
                  p.mt-4 Normas sociales que regulan el comportamiento de los individuos en cuanto a modos y modales dentro de la sociedad, estableciendo comportamientos adecuados en un lugar y tiempo específicos. 
              .col-lg-4
                img(src='@/assets/curso/temas/13.png', style="max-width: 420px").mx-auto

            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
                .pe-4
                  h4 Normas de calidad 
                  p.mt-4 Especificaciones técnicas y de calidad establecidas por instituciones públicas y privadas para la valoración de productos, mercancías y servicios. 
              .col-lg-4
                img(src='@/assets/curso/temas/14.png', style="max-width: 420px").mx-auto

            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
                .pe-4
                  h4 Normas de tecnología 
                  p.mt-4 Especificaciones que regulan los procesos y productos tecnológicos para garantizar su buen funcionamiento, desempeño y operación. 
              .col-lg-4
                img(src='@/assets/curso/temas/15.png', style="max-width: 420px").mx-auto

            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
                .pe-4
                  h4 Normas ecológicas 
                  p.mt-4 Conjunto de leyes y reglamentos establecidos para procurar el buen cuidado de la naturaleza, los recursos naturales y la conservación de especies animales y vegetales, con posibles sanciones por incumplimiento. 
              .col-lg-4
                img(src='@/assets/curso/temas/16.png', style="max-width: 420px").mx-auto

    .full-width-bg.bg-fondo-1
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-xl-10
            .tarjeta.bg-fondo-6.p-4.p-md-5.mb-4
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  img.img-fluid(src='@/assets/curso/temas/17.svg', alt='', style='max-width: 351px;').mx-auto.mb-4.mb-lg-0
                .col-lg
                  .ps-lg-4
                    p.mb-4 #[strong Para que una norma sea operativa y se cumpla, se requieren las siguientes tres condiciones: ]

                    .tarjeta.bg-color-white.py-2.px-4.br-small.mb-2
                      ul.custom-list.mb-0
                        li Un elevado porcentaje de la población debe aceptar conscientemente la norma.

                    .tarjeta.bg-color-white.py-2.px-4.br-small.mb-2
                      ul.custom-list.mb-0
                        li Un elevado porcentaje de la población que acepta la norma debe tomarla en serio e interiorizarla.

                    .tarjeta.bg-color-white.py-2.px-4.br-small.mb-2
                      ul.custom-list.mb-0
                        li Si la norma no se cumple, se debe sancionar a la persona.

            .tarjeta.bg-color-p.py-3.px-4.rounded-pill
              .row.justify-content-center.align-items-center
                .col-md-auto
                  img.img-fluid(src='@/assets/curso/temas/18.svg', alt='', style='max-width: 78px;').mx-auto.mb-4.mb-lg-0
                .col-md
                  .pe-md-4
                    p.mb-0.text-white Las normas son una parte importante del sistema social porque regulan y guían el comportamiento, haciendo posible una convivencia más llevadera. 

    Separador

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2#t_1_2 1.2  Normatividad empresarial 

    .row.justify-content-center.align-items-stretch.mb-5
      .col-xl-7.col-xxl-8.order-2.order-xl-1(data-aos="fade-left")
        .bg-color-ac10.p-4.px-xxl-5.h-100
          p.mb-0.mt-xl-2 La normatividad empresarial es el conjunto de reglas que determinan el funcionamiento de la empresa, regulan el comportamiento del capital humano y establecen reglas explícitas para convivir en un ambiente de respeto y cordialidad, permitiendo que cada persona desarrolle sus tareas de la mejor manera. Las normas variarán según el tipo de empresa, teniendo en cuenta la actividad a la que se dedique. No es lo mismo una empresa de construcción que una de recursos humanos. Las normas se modifican teniendo en cuenta diversos factores, como el tipo de empresa, la actividad principal, el riesgo de los trabajadores y la cantidad de personas involucradas. 

      .col-xl-5.col-xxl-4.order-1.order-xl-2(data-aos="zoom-in")
          img.img-fluid(src='@/assets/curso/temas/19.png', alt='', style='max-width: 400px;').mx-auto.mb-4.mb-xl-0

    .titulo-tres.mb-4(data-aos="flip-up")
      h4 Importancia de la normatividad empresarial 

    p.mb-5 Definir y comunicar la normatividad empresarial de manera formal, haciéndola explícita a todos los involucrados en la empresa, tiene varias ventajas: 

    .row.justify-content-center.my-5.mt-lg-0
      .col-lg-3.d-none.d-lg-block(data-aos="zoom-in")
        img.img-fluid(src='@/assets/curso/temas/20.png', style="max-width: 100%", alt='').m-auto

      .col-lg-9(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-p")
          .row(titulo="Protección al empresario y la empresa")
            .col
              p.mb-0 Cuando un miembro de la empresa comete una falta, no se debe tomar una decisión individual, sino que se aplica la norma establecida. 
          
            .col-auto
              img(src='@/assets/curso/temas/21.png', alt='', style="max-width: 210px").mx-auto

          .row(titulo="Ahorro de tiempo")
            .col
              p.mb-0 El reglamento de la empresa facilita la toma de decisiones al empresario, ya que muchas de ellas se basan en normas preestablecidas. 
          
            .col-auto
              img(src='@/assets/curso/temas/22.png', alt='', style="max-width: 210px").mx-auto

          .row(titulo="Ambiente laboral más justo")
            .col
              p.mb-0 Las reglas son universales dentro de la empresa, evitando favoritismos y favoreciendo un entorno laboral equitativo. 
          
            .col-auto
              img(src='@/assets/curso/temas/23.png', alt='', style="max-width: 210px").mx-auto

          .row(titulo="Reducción de problemas interpersonales")
            .col
              p.mb-0 Se aplican las mismas normas a todos los empleados, lo que disminuye los conflictos interpersonales en el lugar de trabajo. 
          
            .col-auto
              img(src='@/assets/curso/temas/24.png', alt='', style="max-width: 210px").mx-auto

    p #[strong Para funcionar correctamente, las normas de una empresa deben ser:]

    .full-width-bg.bg-fondo-1
      .px-4.px-md-5.pb-4.pb-md-5.pt-3
        .carousel-bg
          .row.justify-content-center.align-items-center.my-5
            .col-lg-8
              SlyderF.mb-5(columnas="col-lg-6 col-xxl-4")(data-aos="zoom-in-up")
                .tarjeta.bg-white.p-4.shadow-top-left-right
                  img(src='@/assets/curso/temas/25.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                  h6 Equilibrio ecológico
                  p Aplicarse de manera equitativa, respondiendo a criterios objetivos. 

                .tarjeta.bg-white.p-4.shadow-top-left-right
                  img(src='@/assets/curso/temas/26.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                  h6 Conocidas 
                  p Deben ser conocidas por todo el personal al cual afectan.
                
                .tarjeta.bg-white.p-4.shadow-top-left-right
                  img(src='@/assets/curso/temas/27.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                  h6 Vinculadas a objetivos laborales 
                  p Reflejar la proactividad y el compromiso de los empleados. 

                .tarjeta.bg-white.p-4.shadow-top-left-right
                  img(src='@/assets/curso/temas/28.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                  h6 Consistentes 
                  p Una norma no puede contradecirse a sí misma; debe operar de manera armoniosa. 

                .tarjeta.bg-white.p-4.shadow-top-left-right
                  img(src='@/assets/curso/temas/29.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                  h6 Acorde con los valores empresariales 
                  p Deben estar alineadas con los valores empresariales.

                .tarjeta.bg-white.p-4.shadow-top-left-right
                  img(src='@/assets/curso/temas/30.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                  h6 Útiles 
                  p Las normas deben brindar seguridad, confianza y productividad a los trabajadores de la empresa. 

            .col-lg-3.d-none.d-lg-block(data-aos="zoom-in")
              img(src='@/assets/curso/temas/31.svg', style="max-width: 100%", alt='').mx-auto

        p #[strong Normatividad empresarial interna]

        p Las normas de una empresa son el conjunto de disposiciones formales o informales que rigen el funcionamiento interno de una organización administrativa. A continuación, algunos ejemplos de normas internas: 

    .full-width-bg.bg-fondo-5.mb-4
      .p-4.p-md-5
        .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4.shadow-soft
          LineaTiempoC.color-acento-contenido(text-small).px-4(data-aos="fade-up")
            .row(titulo="Normas de seguridad").justify-content-center.mt-5
              .col-lg-7.mb-4.mb-md-0
                h4 Normas de seguridad
                p Velan por la protección de los trabajadores, obligándolos a actuar de manera segura o a emplear elementos protectores. Ejemplo: Una norma en una empresa metalúrgica que obligue a los trabajadores a usar guantes y lentes protectores en todo momento.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/temas/32.png", style="max-width:100%", alt="").mx-auto.mb-4

            .row(titulo="Normas de convivencia").justify-content-center.mt-5
              .col-lg-7.mb-4.mb-md-0
                h4 Normas de convivencia
                p Velan por la sana y respetuosa coexistencia de los trabajadores, impidiendo que las conductas de unos perjudiquen a otros. Ejemplo: Una norma en una empresa de oficinas que disponga de un comedor como área exclusiva de alimentación para no ensuciar o llenar de olores el ambiente de trabajo.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/temas/33.png", style="max-width:100%", alt="").mx-auto.mb-4

            .row(titulo="Normas de vestimenta").justify-content-center.mt-5
              .col-lg-7.mb-4.mb-md-0
                h4 Normas de vestimenta
                p También llamadas "códigos de uniforme", regulan la manera de vestir de los trabajadores, manteniendo un código común que sirva a la empresa para identificar a sus empleados o que respete la impresión formal de la empresa ante sus visitantes. Ejemplo: Un código de uniforme en una empresa de servicios de salud que exija a los empleados médicos usar una bata blanca y limpia en todo momento.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/temas/34.png", style="max-width:100%", alt="").mx-auto.mb-4


            .row(titulo="Normas de salubridad").justify-content-center.mt-5
              .col-lg-7.mb-4.mb-md-0
                h4 Normas de salubridad
                p Especialmente importantes para empresas de manejo de alimentos o aquellas cuyos trabajadores puedan estar expuestos a condiciones de riesgo sanitario. Estas normas garantizan la correcta disposición de los elementos para evitar enfermedades, contaminaciones y otros riesgos a la salud. Ejemplo: Normas en una empresa de alimentos para mantener sus insumos libres de hongos y bacterias.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/temas/35.png", style="max-width:100%", alt="").mx-auto.mb-4


            .row(titulo="Normas de jerarquía").justify-content-center.mt-5
              .col-lg-7.mb-4.mb-md-0
                h4 Normas de jerarquía
                p Toda organización humana tiene dirigentes y dirigidos, y esta jerarquía es clave para el funcionamiento sostenido del engranaje humano. Existen normas que distinguen entre la dirigencia y los trabajadores. Ejemplo: Normas de jerarquía en una empresa que obligan a los trabajadores a acatar la autoridad de sus superiores.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/temas/36.png", style="max-width:100%", alt="").mx-auto.mb-4



            .row(titulo="Normas de protocolo").justify-content-center.mt-5
              .col-lg-7.mb-4.mb-md-0
                h4 Normas de protocolo
                p Se refiere al conjunto de actitudes y conductas de cortesía que facilitan la interacción en situaciones de respeto o al tratar con invitados especiales. Ejemplo: Normas de protocolo en una empresa que instruyan a los trabajadores de recepción sobre cómo dar la bienvenida, atender amablemente y ofrecer un café a los visitantes y clientes.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/temas/37.png", style="max-width:100%", alt="").mx-auto.mb-4


            .row(titulo="Normas jurídicas y legales").justify-content-center.mt-5
              .col-lg-7.mb-4.mb-md-0
                h4 Normas jurídicas y legales
                p La normativa legal de una empresa es el reglamento más formal que tiene, pues se ciñe a los códigos penales y civiles del país en que opera. Ejemplo: Normas de auditoría interna en una empresa para protegerse de conflictos legales.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/temas/38.png", style="max-width:100%", alt="").mx-auto.mb-4


            .row(titulo="Normas de trabajo").justify-content-center.mt-5
              .col-lg-7.mb-4.mb-md-0
                h4 Normas de trabajo
                p Más generales, tienen que ver con la concepción específica del trabajo en la empresa, y se diseñan entre los códigos legales del país y las perspectivas de la empresa. Ejemplo: Empresas como Google tienen normas de trabajo flexibles, permitiendo horarios adaptables para maximizar el rendimiento de sus empleados.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/temas/39.png", style="max-width:100%", alt="").mx-auto.mb-4


            .row(titulo="Normas de contratación").justify-content-center.mt-5
              .col-lg-7.mb-4.mb-md-0
                h4 Normas de contratación
                p La adquisición de nuevos empleados también está sujeta a normas y coordinaciones por parte de la empresa (y del marco jurídico en el que opera). Ejemplo: Muchas empresas tienen reglamentos que evitan la selección discriminatoria de personal o que incluyen a personas con discapacidad en su nómina.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/temas/40.png", style="max-width:100%", alt="").mx-auto.mb-4


    Separador

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2#t_1_3 1.3  Normatividad empresarial estatal 

    .bg-color-ac5(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-5
        .col-lg
          .p-4.px-xxl-5
            p.mb-0 Cabe destacar que las normas empresariales no solo deben ser internas, sino que también deben aplicar la normativa establecida por el país para todas las empresas de los distintos sectores. La normatividad empresarial dada por el Estado permite que la empresa crezca, ya que ayuda a organizarla, facilita su progreso, ofrece diversos beneficios y evita fuertes sanciones legales.
        .col-lg-auto
          img.img-fluid(src='@/assets/curso/temas/42.svg', alt='', style='max-width: 190px;').mx-auto.mb-4.mb-lg-0

    p.mb-5 #[strong Entre la normatividad empresarial se encuentra:]

    .titulo-tres.mb-5(data-aos="flip-up")
      h4 NIIF (Normas Internacionales de Información Financiera) 

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg.order-2.order-lg-1.mb-4.mb-lg-0
        .bg-color-s5(data-aos="fade-left").h-100
          .p-4
            p.mb-0 Conjunto de estándares internacionales de contabilidad que busca que las empresas conviertan los estados financieros a normas internacionales, estableciendo los requisitos de reconocimiento, medición, presentación e información a revelar sobre las transacciones y hechos económicos que pueden afectar a una empresa. Aplica para todas las compañías y es regulada por el Congreso, la Superintendencia de Sociedades y la Dian.
      .col-lg-auto.order-1.order-lg-2.mb-4.mb-lg-0
        img.img-fluid(src='@/assets/curso/temas/43.png', alt='', style='max-width: 190px;').mx-auto.h-100

    .full-width-bg.bg-fondo-1
      .p-4.px-md-5.pt-md-5
        .row.justify-content-center.align-items-center.mb-4
          .col-xl-10
            .tarjeta.bg-fondo-6.p-4.p-md-5.mb-4

              .row.justify-content-center.align-items-center
                .col-lg-auto
                  img.img-fluid(src='@/assets/curso/temas/44.png', alt='', style='max-width: 295px;').mx-auto.mb-4.mb-lg-0
                .col-lg
                  .ps-lg-3
                    p.mb-4 #[strong Los beneficios son:]

                    .tarjeta.bg-color-white.py-2.px-4.br-small.mb-2
                      ul.custom-list.mb-0
                        li Homologación de los estados financieros para la comprensión de los actores del mercado.

                    .tarjeta.bg-color-white.py-2.px-4.br-small.mb-2
                      ul.custom-list.mb-0
                        li Acceso a mercados de capital.

                    .tarjeta.bg-color-white.py-2.px-4.br-small.mb-2
                      ul.custom-list.mb-0
                        li Transparencia en las cifras de los estados financieros.

                    .tarjeta.bg-color-white.py-2.px-4.br-small.mb-2
                      ul.custom-list.mb-0
                        li Reducción de costos.

                    .tarjeta.bg-color-white.py-2.px-4.br-small.mb-2
                      ul.custom-list.mb-0
                        li Modernización de la información financiera.

        p #[strong Las consecuencias de no implementar la norma:]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.bg-color-s5.p-4.px-md-5
          .row.justify-content-center.align-items-stretch
            .col-lg-4.mb-4.mb-lg-0
              .tarjeta-avatar.h-100
                img(src='@/assets/curso/temas/45.svg' style='max-width: 85px')
                .tarjeta.bg-color-s10.w-100
                  .p-4
                    h6.text-center Sanciones monetarias
            .col-lg-4.mb-4.mb-lg-0
              .tarjeta-avatar.h-100
                img(src='@/assets/curso/temas/46.svg' style='max-width: 85px')
                .tarjeta.bg-color-s10.w-100
                  .p-4
                    h6.text-center Requerimientos adicionales de información
            .col-lg-4.mb-4.mb-lg-0
              .tarjeta-avatar.h-100
                img(src='@/assets/curso/temas/47.svg' style='max-width: 85px')
                .tarjeta.bg-color-s10.w-100
                  .p-4
                    h6.text-center Auditorías especiales

    .titulo-tres.mb-5(data-aos="flip-up")
      h4 Habeas Data 


    .bg-fondo-7.p-4.ps-lg-5(data-aos="zoom-in").mb-5
      .row
        .col-lg-8.order-2.order-lg-1(style="place-self:center;")
          .bg-white.p-4.p-xl-5
            p.mb-0 Esta ley protege los datos personales a través de un manual de políticas que enseña al empresario el uso adecuado de estos datos. Aplica únicamente para personas naturales que maneje la compañía y es regulada por la Superintendencia de Industria y Comercio.
        .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(style="place-self:center;")
          img(src="@/assets/curso/temas/48.svg", style="max-width: 244px").mx-auto

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4.mb-lg-0
        .tarjeta.bg-color-p5.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img.img-fluid(src='@/assets/curso/temas/49.svg', alt='', style='max-width: 127px;').mx-auto.mb-4.mb-lg-0
            .col-lg
              p.mb-3 #[strong Los beneficios son:]
              ul.custom-list.mb-0
                li Genera confianza en el personal de la empresa.
                li Permite realizar operaciones como recolección, almacenamiento, uso, circulación o suspensión de datos.
      .col-lg-6.mb-lg-0
        .tarjeta.bg-color-p5.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img.img-fluid(src='@/assets/curso/temas/50.svg', alt='', style='max-width: 127px;').mx-auto.mb-4.mb-lg-0
            .col-lg
              p.mb-3 #[strong Las consecuencias de no implementar la norma: ]
              ul.custom-list.mb-0
                li Multas hasta por 2.000 SMMLV.
                li Suspensión de actividades hasta por 6 meses.
                li Cierre temporal de operaciones.
                li Cierre inmediato y definitivo de la operación.

    .titulo-tres.mb-5(data-aos="flip-up")
      h4 SG SST (Sistema de Gestión de Seguridad y Salud en el Trabajo) 

    p.mb-5 Diseña e implementa el Sistema de Gestión de Seguridad y Salud en el Trabajo. Aplica para todas las empresas y es regulada por el Ministerio de Trabajo. 
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4.mb-lg-0
        img.img-fluid(src='@/assets/curso/temas/51.png', alt='', style='max-width: 100%').mx-auto.h-100
      .col-lg-6.mb-4.mb-lg-0
        .tarjeta.bg-color-ac10.p-5.h-100
          p.mb-3 #[strong Beneficios]
          ul.custom-list.mb-5
            li.mb-2 Mejora notablemente las condiciones laborales.
            li.mb-3 Mantiene el bienestar físico, mental y social de los empleados.

          p.mb-3 #[strong Consecuencias de no implementar la norma]
          ul.custom-list.mb-0
            li Sanciones económicas que pueden llegar hasta los 500 SMMLV.

    .titulo-tres.mb-5(data-aos="flip-up")
      h4 Sarlaft 


    .bg-fondo-7.p-4.ps-lg-5(data-aos="zoom-in").mb-5
      .row
        .col-lg-8.order-2.order-lg-1(style="place-self:center;")
          .bg-white.p-4.p-xl-5
            p.mb-0 Previene el riesgo de lavado de activos y la financiación del terrorismo. Por ello, se solicita a las empresas implementar un sistema de autocontrol y gestión del riesgo. Está regulada por la Superintendencia Financiera y la UIAF, y su implementación debe realizarse antes del 31 de diciembre de este año.
        .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(style="place-self:center;")
          img(src="@/assets/curso/temas/52.svg", style="max-width: 248px").mx-auto


    .row.justify-content-center.align-items-stretch
      .col-xl-8
        .tarjeta.bg-color-ac10.p-5.h-100
          p.mb-3 #[strong Los beneficios son:]
          ul.custom-list.mb-5
            li.mb-2 Altos estándares de bienestar empresarial.
            li.mb-3 Consolidación de negocios que garanticen la continuidad y perdurabilidad de las empresas.

          p.mb-3 #[strong Las consecuencias de no implementar la norma: ]
          ul.custom-list.mb-0
            li.mb-2 Riesgos legales, como investigaciones judiciales y extinciones de dominio.
            li Multas de 650 a 50.000 SMMLV.

    Separador

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2#t_1_4 1.4  Contratos de Condiciones Uniformes

    .full-width-bg.bg-fondo-4
      .px-4.px-md-5.pt-2.pb-5

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            p.mb-0 Los contratos de condiciones uniformes constituyen el instrumento por excelencia para que usuarios y prestadores puedan ejercer sus derechos y deberes dentro de la relación que surge de la prestación de un servicio público domiciliario. Esta característica implica que, en caso de ser necesario, el contrato debe ser una herramienta clara y ágil, para que las partes cuenten con información veraz y oportuna sobre las reglas y procedimientos que deben seguir en cada evento posible. En el contrato de condiciones uniformes deben quedar claramente definidas las condiciones en que la empresa presta los servicios a sus usuarios.
          .col-lg-4.d-none.d-lg-block
            img.img-fluid(src='@/assets/curso/temas/53.png', alt='', style='max-width: 100%').mx-auto

        .row.justify-content-center.align-items-center.mb-5
          .col-xl-10
            .tarjeta.bg-color-p.px-5.py-5
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  img.img-fluid(src='@/assets/curso/temas/54.svg', alt='', style='max-width: 90px;').mx-auto.mb-lg-0
                .col-lg
                  p.mb-0.text-white #[strong El CCU (Contrato de Condiciones Uniformes)] es el acuerdo mediante el cual la empresa se compromete a prestar el servicio público domiciliario de energía según las condiciones pactadas. El contrato de servicios públicos debe ser uniforme, es decir, ofrecer las mismas condiciones (derechos y deberes) para la prestación del servicio a todos los habitantes de una región.

        p.mb-5 Se denomina consensual porque se da por establecido sin necesidad de que las partes lo firmen, cuando el usuario solicita o está recibiendo el servicio en el lugar donde habita o establece su negocio, siempre que el inmueble cumpla con las condiciones técnicas previstas por la empresa. 


        .row.justify-content-center.align-items-center.mb-5
          .col-xl-10
            .tarjeta.bg-color-p.px-5.py-5
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  img.img-fluid(src='@/assets/curso/temas/54.svg', alt='', style='max-width: 90px;').mx-auto.mb-lg-0
                .col-lg
                  p.mb-0.text-white Las partes en el contrato son la empresa de servicios públicos y el cliente; ambos son responsables de las obligaciones y deberes establecidos en el contrato, así como beneficiarios de los derechos contenidos en el mismo. 

        br
        br
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
