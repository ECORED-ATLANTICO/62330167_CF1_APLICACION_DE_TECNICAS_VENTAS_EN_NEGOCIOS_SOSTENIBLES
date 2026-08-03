export default {
  global: {
    Name: 'Perfil del consumidor',
    Description:
      'El componente formativo aborda los fundamentos de la sostenibilidad, el consumidor verde, el mercado y la prospección, orientados a la comprensión del contexto comercial y la identificación de oportunidades en negocios sostenibles, fortaleciendo la toma de decisiones en procesos de caracterización del cliente.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
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
        titulo: 'Objetivos desarrollo sostenible (sostenibilidad)',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Consumidor verde',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Mercado',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Prospección',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Biocomercio',
      significado:
        'Actividad económica basada en el uso sostenible de biodiversidad con criterios ambientales, sociales y económicos responsables.',
    },
    {
      termino: 'Consumidor verde',
      significado:
        'Persona que considera el impacto ambiental y social al tomar decisiones de compra responsables.',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'Modelo que equilibra necesidades actuales sin comprometer recursos de futuras generaciones.',
    },
    {
      termino: 'Ecodiseño',
      significado:
        'Diseño de productos considerando su impacto ambiental durante todo su ciclo de vida.',
    },
    {
      termino: 'Economía circular',
      significado:
        'Modelo que promueve reutilización, reciclaje y reducción de residuos en procesos productivos.',
    },
    {
      termino: 'Mercado',
      significado:
        'Espacio donde interactúan compradores y vendedores para intercambiar bienes o servicios.',
    },
    {
      termino: 'Prospección',
      significado:
        'Proceso de identificación de clientes potenciales para oportunidades comerciales.',
    },
    {
      termino: 'Segmentación',
      significado:
        'División del mercado en grupos con características similares para estrategias específicas.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'uso responsable de recursos integrando aspectos económicos, sociales y ambientales.',
    },
    {
      termino: 'Variables de mercado',
      significado:
        'Factores que influyen en el comportamiento del consumidor y decisiones comerciales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Docsity. (s.f.). <em>Tema 8: La comunicación comercial</em>. Apuntes de Investigación Empresarial.',
      link: 'https://www.docsity.com',
    },
    {
      referencia:
        'Domínguez Casas, Á. M. (2017). <em>Los programas de fidelización online: un estudio desde el engagement marketing y las comunidades de marca</em> [Tesis doctoral, Universidad de Valladolid]. Dialnet.',
      link: '',
    },
    {
      referencia:
        'Ellen MacArthur Foundation. (s.f.). <em>What is the circular economy?</em>',
      link: 'https://ellenmacarthurfoundation.org/topics/circular-economy-introduction/overview',
    },
    {
      referencia:
        'International Organization for Standardization. (s.f.). <em>ISO 14001 Environmental Management</em>.',
      link: 'https://www.iso.org/iso-14001-environmental-management.html',
    },
    {
      referencia:
        'Manzanal, M., Chávez, E., & Rivero, A. (2020). <em>Los elementos de la negociación: ¿cómo intervienen dentro de las etapas?</em> Revista CEA, 4(1).',
      link: '',
    },
    {
      referencia:
        'Miranda Plata, P. A. (2020). <em>Creación e implementación de formatos para el seguimiento de los procesos del área comercial</em> [Trabajo de grado, Universidad Santo Tomás]. Repositorio USTA.',
      link: '',
    },
    {
      referencia:
        'Naciones Unidas. (s.f.). <em>Objetivos de Desarrollo Sostenible</em>.',
      link: 'https://sdgs.un.org/es/goals',
    },
    {
      referencia: 'Nike. (s.f.). <em>Move to Zero</em>.',
      link: 'https://www.nike.com/sustainability',
    },
    {
      referencia:
        'Niño Sierra, D. F. (s.f.). <em>Fidelización del cliente</em>. Fundación Universitaria UNIEMPRESARIAL.',
      link: '',
    },
    {
      referencia:
        'Salcedo, J. (2021). <em>Estrategias y táctica de negociación</em>. Universidad San Marcos.',
      link: '',
    },
    {
      referencia:
        'United Nations. (s.f.). <em>Sustainable Development Goals</em>.',
      link: 'https://sdgs.un.org/goals',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
}
