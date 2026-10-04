const sharedPersonal = {
  name: "AHMED HAWEM",
  profile: '/ahmed-hawem.png',
  email: 'hawemahmed4@gmail.com',
  phone: '+216 23 906 544',
  github: 'https://github.com/Ahmedhawem',
  facebook: '',
  linkedIn: 'https://www.linkedin.com/in/ahmed-hawem',
  twitter: '',
  stackOverflow: '',
  leetcode: '',
  devUsername: '',
  resume: "/Ahmed_Hawem_CV.pdf"
};

const contentByLocale = {
  en: {
    personal: {
      ...sharedPersonal,
      designation: "Fullstack Developer",
      address: "Sousse, Tunisia",
      description: "Motivated and dedicated fullstack developer with a Bachelor's degree in Computer Science and around three years of professional experience in web development. Solid expertise in React.js, Next.js, Laravel, Nest.js, JavaScript, TypeScript, and relational databases. Experienced in building modern, responsive web applications, API integrations, performance optimization, and business process automation. Additional experience with ERP/CRM systems (Odoo, Zoho), workflow automation (n8n), and basic AI integration. Languages: Arabic (native), German (B2), French and English (fluent). I work in a structured, independent, and solution-oriented way, and I am looking for a new professional challenge in Germany."
    },
    experiences: [
      {
        id: 1,
        title: 'Fullstack Developer',
        company: "Matrixcel Business, Sousse",
        duration: "(Sep 2025 - Present)"
      },
      {
        id: 2,
        title: "Fullstack Web Developer",
        company: "Root4Pro, Sousse",
        duration: "(Feb 2023 - Sep 2025)"
      },
      {
        id: 3,
        title: "Freelance Fullstack Developer",
        company: "TounesConnect, Sousse",
        duration: "(Jan 2024 - Jun 2024)"
      }
    ],
    educations: [
      {
        id: 1,
        title: "Bachelor in Information Sciences",
        duration: "",
        institution: "Institut Supérieur des Sciences Appliquées et de Technologie de Sousse (ISSAT)",
      },
      {
        id: 2,
        title: "High School Diploma in Mathematics",
        duration: "",
        institution: "Lycée Mahmoud El Messadi, Sousse",
      }
    ],
    projects: [
      {
        id: 1,
        name: 'Personal Portfolio',
        description: "Multilingual personal portfolio built with Next.js 16, React 19, Tailwind CSS 4, and next-intl. Features localized content in English, German, and French, project showcases, resume download, and a contact form.",
        tools: ['Next.js', 'React', 'Tailwind CSS', 'next-intl', 'JavaScript'],
        role: 'Fullstack Developer',
        code: 'https://github.com/Ahmedhawem/ahmed-hawem-portfolio',
        demo: '',
      },
      {
        id: 2,
        name: 'ForsaHome',
        description: "Developed and optimized an e-commerce website with React.js and Laravel. Focused on performance, usability, and reliable shopping experiences for end users.",
        tools: ['React', 'Laravel', 'MySQL', 'JavaScript', 'REST APIs'],
        role: 'Fullstack Developer',
        code: '',
        demo: 'https://forsahome.tn',
      },
      {
        id: 3,
        name: 'Ingco Officiel',
        description: "Built and improved an e-commerce platform with React.js and Laravel, including API integrations for delivery services and external systems. Worked on custom WooCommerce plugins and logistics process automation.",
        tools: ['React', 'Laravel', 'WooCommerce', 'MySQL', 'REST APIs'],
        role: 'Fullstack Developer',
        code: '',
        demo: 'https://ingcoofficiel.tn',
      },
      {
        id: 4,
        name: 'TounesConnect',
        description: "Developed the company website from scratch with a React.js frontend and Laravel backend. Designed and optimized the MySQL database structure, implemented dynamic features, and applied targeted performance improvements.",
        tools: ['React', 'Laravel', 'MySQL', 'JavaScript'],
        role: 'Fullstack Developer',
        code: '',
        demo: 'https://tounesconnect.com',
      },
      {
        id: 5,
        name: 'Sherekhan Zoo',
        description: "Built a custom website for Sherekhan Zoo as part of freelance work with TounesConnect. Implemented dynamic content and performance optimizations using React.js and Laravel.",
        tools: ['React', 'Laravel', 'MySQL', 'JavaScript'],
        role: 'Fullstack Developer',
        code: '',
        demo: 'https://sherekhanzoo.com',
      }
    ]
  },
  de: {
    personal: {
      ...sharedPersonal,
      designation: "Fullstack-Entwickler",
      address: "Sousse, Tunesien",
      description: "Motivierter und engagierter Fullstack-Entwickler mit Bachelor-Abschluss in Informatik und rund drei Jahren Berufserfahrung in der Webentwicklung. Fundierte Kenntnisse in React.js, Next.js, Laravel, Nest.js, JavaScript, TypeScript und relationalen Datenbanken. Erfahrung in der Entwicklung moderner, responsiver Webanwendungen, API-Integrationen, Performance-Optimierung und der Automatisierung von Geschäftsprozessen. Zusätzlich Erfahrung mit ERP-/CRM-Systemen (Odoo, Zoho), Workflow-Automatisierung (n8n) und Grundkenntnisse in der KI-Integration. Sprachen: Arabisch (Muttersprache), Deutsch (B2), Französisch und Englisch (fließend). Ich arbeite strukturiert, selbstständig und lösungsorientiert und suche eine neue berufliche Herausforderung in Deutschland."
    },
    experiences: [
      {
        id: 1,
        title: 'Fullstack-Entwickler',
        company: "Matrixcel Business, Sousse",
        duration: "(Sep 2025 - Heute)"
      },
      {
        id: 2,
        title: "Fullstack-Webentwickler",
        company: "Root4Pro, Sousse",
        duration: "(Feb 2023 - Sep 2025)"
      },
      {
        id: 3,
        title: "Freelance Fullstack-Entwickler",
        company: "TounesConnect, Sousse",
        duration: "(Jan 2024 - Jun 2024)"
      }
    ],
    educations: [
      {
        id: 1,
        title: "Bachelor in Informationswissenschaften",
        duration: "",
        institution: "Institut Supérieur des Sciences Appliquées et de Technologie de Sousse (ISSAT)",
      },
      {
        id: 2,
        title: "Abitur in Mathematik",
        duration: "",
        institution: "Lycée Mahmoud El Messadi, Sousse",
      }
    ],
    projects: [
      {
        id: 1,
        name: 'Persönliches Portfolio',
        description: "Mehrsprachiges persönliches Portfolio mit Next.js 16, React 19, Tailwind CSS 4 und next-intl. Inhalt auf Englisch, Deutsch und Französisch, Projektpräsentationen, Lebenslauf-Download und Kontaktformular.",
        tools: ['Next.js', 'React', 'Tailwind CSS', 'next-intl', 'JavaScript'],
        role: 'Fullstack-Entwickler',
        code: 'https://github.com/Ahmedhawem/ahmed-hawem-portfolio',
        demo: '',
      },
      {
        id: 2,
        name: 'ForsaHome',
        description: "Entwicklung und Optimierung einer E-Commerce-Website mit React.js und Laravel. Fokus auf Performance, Benutzerfreundlichkeit und zuverlässige Einkaufserlebnisse.",
        tools: ['React', 'Laravel', 'MySQL', 'JavaScript', 'REST APIs'],
        role: 'Fullstack-Entwickler',
        code: '',
        demo: 'https://forsahome.tn',
      },
      {
        id: 3,
        name: 'Ingco Officiel',
        description: "Aufbau und Verbesserung einer E-Commerce-Plattform mit React.js und Laravel, inklusive API-Integrationen für Lieferdienste und externe Systeme. Entwicklung maßgeschneiderter WooCommerce-Plugins und Automatisierung logistischer Prozesse.",
        tools: ['React', 'Laravel', 'WooCommerce', 'MySQL', 'REST APIs'],
        role: 'Fullstack-Entwickler',
        code: '',
        demo: 'https://ingcoofficiel.tn',
      },
      {
        id: 4,
        name: 'TounesConnect',
        description: "Entwicklung der Unternehmenswebsite von Grund auf mit React.js-Frontend und Laravel-Backend. Aufbau und Optimierung der MySQL-Datenbankstruktur, Implementierung dynamischer Funktionen und gezielte Performance-Optimierungen.",
        tools: ['React', 'Laravel', 'MySQL', 'JavaScript'],
        role: 'Fullstack-Entwickler',
        code: '',
        demo: 'https://tounesconnect.com',
      },
      {
        id: 5,
        name: 'Sherekhan Zoo',
        description: "Entwicklung einer maßgeschneiderten Website für Sherekhan Zoo im Rahmen der Freelance-Arbeit mit TounesConnect. Umsetzung dynamischer Inhalte und Performance-Optimierungen mit React.js und Laravel.",
        tools: ['React', 'Laravel', 'MySQL', 'JavaScript'],
        role: 'Fullstack-Entwickler',
        code: '',
        demo: 'https://sherekhanzoo.com',
      }
    ]
  },
  fr: {
    personal: {
      ...sharedPersonal,
      designation: "Développeur Fullstack",
      address: "Sousse, Tunisie",
      description: "Développeur fullstack motivé et engagé, titulaire d'une licence en informatique et disposant d'environ trois ans d'expérience professionnelle en développement web. Solides compétences en React.js, Next.js, Laravel, Nest.js, JavaScript, TypeScript et bases de données relationnelles. Expérience dans le développement d'applications web modernes et responsives, l'intégration d'API, l'optimisation des performances et l'automatisation des processus métier. Expérience complémentaire avec les systèmes ERP/CRM (Odoo, Zoho), l'automatisation de workflows (n8n) et des bases en intégration IA. Langues : arabe (langue maternelle), allemand (B2), français et anglais (courant). Je travaille de manière structurée, autonome et orientée solutions, et je recherche un nouveau défi professionnel en Allemagne."
    },
    experiences: [
      {
        id: 1,
        title: 'Développeur Fullstack',
        company: "Matrixcel Business, Sousse",
        duration: "(Sep 2025 - Aujourd'hui)"
      },
      {
        id: 2,
        title: "Développeur Web Fullstack",
        company: "Root4Pro, Sousse",
        duration: "(Fév 2023 - Sep 2025)"
      },
      {
        id: 3,
        title: "Développeur Fullstack Freelance",
        company: "TounesConnect, Sousse",
        duration: "(Jan 2024 - Juin 2024)"
      }
    ],
    educations: [
      {
        id: 1,
        title: "Licence en Sciences de l'Information",
        duration: "",
        institution: "Institut Supérieur des Sciences Appliquées et de Technologie de Sousse (ISSAT)",
      },
      {
        id: 2,
        title: "Baccalauréat en Mathématiques",
        duration: "",
        institution: "Lycée Mahmoud El Messadi, Sousse",
      }
    ],
    projects: [
      {
        id: 1,
        name: 'Portfolio personnel',
        description: "Portfolio personnel multilingue avec Next.js 16, React 19, Tailwind CSS 4 et next-intl. Contenu en anglais, allemand et français, présentation de projets, téléchargement du CV et formulaire de contact.",
        tools: ['Next.js', 'React', 'Tailwind CSS', 'next-intl', 'JavaScript'],
        role: 'Développeur Fullstack',
        code: 'https://github.com/Ahmedhawem/ahmed-hawem-portfolio',
        demo: '',
      },
      {
        id: 2,
        name: 'ForsaHome',
        description: "Développement et optimisation d'un site e-commerce avec React.js et Laravel. Accent mis sur la performance, l'ergonomie et une expérience d'achat fiable.",
        tools: ['React', 'Laravel', 'MySQL', 'JavaScript', 'REST APIs'],
        role: 'Développeur Fullstack',
        code: '',
        demo: 'https://forsahome.tn',
      },
      {
        id: 3,
        name: 'Ingco Officiel',
        description: "Création et amélioration d'une plateforme e-commerce avec React.js et Laravel, incluant des intégrations API pour les services de livraison et systèmes externes. Développement de plugins WooCommerce personnalisés et automatisation des processus logistiques.",
        tools: ['React', 'Laravel', 'WooCommerce', 'MySQL', 'REST APIs'],
        role: 'Développeur Fullstack',
        code: '',
        demo: 'https://ingcoofficiel.tn',
      },
      {
        id: 4,
        name: 'TounesConnect',
        description: "Développement du site de l'entreprise from scratch avec un frontend React.js et un backend Laravel. Conception et optimisation de la structure MySQL, implémentation de fonctionnalités dynamiques et optimisations de performance ciblées.",
        tools: ['React', 'Laravel', 'MySQL', 'JavaScript'],
        role: 'Développeur Fullstack',
        code: '',
        demo: 'https://tounesconnect.com',
      },
      {
        id: 5,
        name: 'Sherekhan Zoo',
        description: "Création d'un site sur mesure pour Sherekhan Zoo dans le cadre d'une mission freelance avec TounesConnect. Mise en place de contenus dynamiques et d'optimisations de performance avec React.js et Laravel.",
        tools: ['React', 'Laravel', 'MySQL', 'JavaScript'],
        role: 'Développeur Fullstack',
        code: '',
        demo: 'https://sherekhanzoo.com',
      }
    ]
  }
};

export function getLocalizedContent(locale) {
  return contentByLocale[locale] || contentByLocale.en;
}

export function getPersonalData(locale) {
  return getLocalizedContent(locale).personal;
}

export function getExperiences(locale) {
  return getLocalizedContent(locale).experiences;
}

export function getEducations(locale) {
  return getLocalizedContent(locale).educations;
}

export function getProjects(locale) {
  return getLocalizedContent(locale).projects;
}
