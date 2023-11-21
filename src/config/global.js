export default {
  global: {
    componenteFormativo: 'Evaluación de los controles de ciberseguridad',
    descripcionCurso:
      'Mediante el estudio juicioso de este componente formativo, el aprendiz estará capacitado para reconocer aspectos importantes de la evaluación de las estrategias de ciberseguridad y su aplicación, estimando el diagnóstico, diseño, monitoreo y operación de la misma. Así mismo, podrá realizar un informe basado en la auditoría de dicha operación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
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
        titulo: 'Finalidad de las pruebas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Pruebas y análisis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tipos de pruebas de efectividad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Procedimiento de ejecución de pruebas de efectividad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Alcance de las pruebas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'La auditoría en la ciberseguridad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Pasos de la auditoría en ciberseguridad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Tipos de auditorías',
        desarrolloContenidos: true,
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
      tema: '4. Procedimiento de ejecución de pruebas de efectividad.',
      referencia:
        'Ministerio de Tecnologías de la Información y Comunicaciones (2016). <em>Guía Metodológica de Pruebas de Efectividad</em>.',
      tipo: 'Otro: Guía técnica',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G1_Metodologia_pruebas_efectividad.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Auditoría',
      significado:
        'una auditoría es un proceso de verificación y/o validación del cumplimiento de una actividad según lo planeado y las directrices estipuladas.',
    },
    {
      termino: 'Auditoría externa',
      significado:
        'auditoría realizada por compañías independientes de la organización o aquellas que son realizadas por personas ajenas a la empresa, contratadas para ello.',
    },
    {
      termino: 'Levantamiento de información',
      significado:
        'etapa de las pruebas de efectividad en la que la organización ha de hacer recopilación de toda la información requerida para dar inicio a la actividad; tal información podrá estar organizada por el equipo de seguridad con el que cuente la empresa o compañía.',
    },
    {
      termino: 'Modelado de amenazas',
      significado:
        'esta acción establece la relación entre el atacante y el activo, intentando definir el beneficio que puede alcanzar el atacante si logra penetrar el sistema y afectar la información de alguna manera.',
    },
    {
      termino: 'Pruebas de efectividad',
      significado:
        'acciones que se enfocan en establecer una línea base del estado de seguridad de la organización, con el fin de facilitar la identificación de la brecha en la implementación del modelo de seguridad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ciberseguridad y riesgos digitales (2020). <em>Normas ISO en auditoría informática: Cuáles son las más importantes</em>. EALDE.',
      link: 'https://www.ealde.es/iso-auditoria-informatica/',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y Comunicaciones (2016). <em>Guía de Auditoría</em>.',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G15_Auditoria.pdf',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y Comunicaciones (2016). <em>Guía Metodológica de Pruebas de Efectividad</em>.',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G1_Metodologia_pruebas_efectividad.pdf',
    },
    {
      referencia:
        'Organización Internacional de Normalización (ISO, 2013). Tecnología de la información - Técnicas de seguridad - Sistemas de gestión de seguridad de la información - Requisitos. (ISO 27001).',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Experto temático',
          centro: 'Centro Comercio y Servicios- Regional Tolima',
        },
        {
          nombre: 'Gloria Alexandra Orejarena Barrios',
          cargo: 'Asesoría metodológica y pedagógica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable equipo de desarrollo curricular',
          centro: 'Responsable equipo de desarrollo curricular',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrección de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesoría metodológica y pedagógica',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Adecuación instruccional',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseño web',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollo Fullstack',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo:
            'Validación de recursos educativos digitales y vinculación LMS',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
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
