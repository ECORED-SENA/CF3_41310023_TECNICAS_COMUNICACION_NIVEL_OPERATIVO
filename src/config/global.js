export default {
  global: {
    componenteFormativo: 'Normatividad empresarial',
    descripcionCurso:
      'El componente formativo trata sobre la normatividad empresarial, destacando la importancia de las normas para el funcionamiento interno y externo de una empresa. Se explican los diferentes tipos de normas (morales, sociales, jurídicas, etc.), su impacto en la organización y las consecuencias de no implementarlas adecuadamente. Además, se mencionan contratos de condiciones uniformes y su relevancia legal.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '¿Qué es una norma?',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de normas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Normatividad empresarial',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Normatividad empresarial estatal',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Contratos de Condiciones Uniformes',
            hash: 't_1_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '¿Qué es una norma?',
      referencia:
        'INTECO. (2016). ¿Qué es una Norma?. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=r39V0cFXcG8',
    },
    {
      tema: 'Tipos de normas',
      referencia:
        'Cámara de Comercio de Bogotá (2014). Normas Internacionales de Contabilidad y de Información Financiera (NIIF). [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LvBRWBLmwMo',
    },
    {
      tema: 'Normatividad empresarial',
      referencia:
        'Consultec (2020). Normatividad interna y externa para empresas por Sergio Chávez [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4qwTCjopJlI',
    },
    {
      tema: 'Normatividad empresarial estatal',
      referencia:
        'Jlcauditors (s.f.). ¿Qué leyes debe cumplir una empresa en Colombia?',
      tipo: 'Página web',
      link: 'https://jlcauditors.com/que-leyes-debe-cumplir-empresa-colombia/',
    },
    {
      tema: 'Contratos de Condiciones Uniformes',
      referencia:
        'SuperserviciosSSPD. (2016). ¿Qué es el contrato de condiciones uniformes?. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=h3qAGsKU38M',
    },
  ],
  glosario: [
    {
      termino: 'Calidad',
      significado: 'superioridad o excelencia de algo o de alguien.',
    },
    {
      termino: 'Comunicación efectiva',
      significado:
        'llevar el mensaje correcto a la audiencia adecuada en el momento oportuno, lo que se refleja positivamente en los indicadores del negocio.',
    },
    {
      termino: 'Comunicación externa',
      significado:
        'elemento importante para promocionar, dar a conocer, proyectar una buena imagen y resolver cualquier tipo de incidencia en la empresa.',
    },
    {
      termino: 'Comunicación interna',
      significado:
        'clave para el buen funcionamiento de la empresa y la correcta gestión de los recursos humanos.',
    },
    {
      termino: 'Derrotero',
      significado:
        'camino o medio que se sigue para alcanzar un fin determinado.',
    },
    {
      termino: 'Directriz',
      significado:
        'norma o conjunto de normas e instrucciones que se establecen o se tienen en cuenta al proyectar una acción o un plan.',
    },
    {
      termino: 'Eficaz',
      significado:
        'que produce el efecto esperado, que es adecuado para un fin determinado.',
    },
    {
      termino: 'Eficiente',
      significado:
        'que realiza o cumple un trabajo o función de manera óptima.',
    },
    {
      termino: 'Empresa',
      significado:
        'entidad en la que intervienen el capital y el trabajo como factores de producción de actividades industriales, mercantiles o de prestación de servicios.',
    },
    {
      termino: 'Entorno',
      significado:
        'conjunto de circunstancias o factores sociales, culturales, morales, económicos, profesionales, etc., que rodean a algo o a alguien, y que influyen en su estado o desarrollo.',
    },
  ],
  referencias: [
    {
      referencia: 'Gómez, L. (2010). <em>Norma</em>. Definición ABC.',
      link: 'https://www.definicionabc.com/derecho/norma.php',
    },
    {
      referencia:
        'Enciclopedia de Ejemplos (2017). <em>10 Ejemplos de Políticas y Normas de una empresa</em>.',
      link: 'http://www.ejemplos.co/10-ejemplos-de-normas-de-una-empresa/',
    },
    {
      referencia: 'ESSA. (2012). <em>Contrato de condiciones uniformes</em>.',
      link:
        'https://www.essa.com.co/site/clientes/es-es/legislaci%C3%B3nynormatividad/condicionesuniformes.aspx',
    },
    {
      referencia: 'Pérez, P. (2015). <em>10 tipos de normas</em>.',
      link: 'http://10tipos.com/tipos-de-normas/',
    },
    {
      referencia:
        'Sánchez, M. (2012). <em>¿Por qué son importantes las normas?</em>',
      link: 'https://www.lifeder.com/por-que-son-importantes-las-normas/',
    },
    {
      referencia:
        'Semana (2017). <em>La normatividad empresarial como la oportunidad para crecer</em>.',
      link:
        'http://www.semana.com/hablan-las-marcas/articulo/la-normatividad-empresarial-como-la-oportunidad-para-crecer/528660',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Salomé Ortiz Moreno',
          cargo: 'Experta temática',
          centro:
            'Centro de Desarrollo Agropecuario y Agroindustrial – CEDEAGRO - Regional Boyacá',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes Garcia',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
