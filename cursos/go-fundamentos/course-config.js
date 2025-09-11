/**
 * 🎯 Configuración del Curso: Transición al Backend con Golang - Dirigiendo a la GenIA
 *
 * Define toda la estructura, contenido y configuración específica
 * del curso basado 100% en el documento CURSO_GO.md oficial.
 *
 * @version 1.0.0
 * @course Go Backend con IA
 * @created 2025-09-11
 * @source docs/CURSO_GO.md
 */

const courseConfig = {
  // Información básica del curso
  id: "go-fundamentos",
  title: "Transición al Backend con Golang - Dirigiendo a la GenIA",
  subtitle: "Para desarrolladores JavaScript/TypeScript con experiencia backend",
  version: "1.0.0",

  // Metadatos del curso
  metadata: {
    instructor: "GitHub Copilot + Supervisión",
    duration: "35+ horas",
    level: "Intermedio a Avanzado",
    category: "Backend Development + AI-Assisted Programming",
    tags: ["Go", "Golang", "AI Development", "GitHub Copilot", "TypeScript Migration", "PostgreSQL"],
    language: "es",
    lastUpdated: "2025-09-11",
    targetAudience: "Desarrolladores JavaScript/TypeScript con experiencia backend",
    prerequisites: ["Node.js", "Express", "TypeORM", "PostgreSQL", "JWT"],
    courseObjective: "Aprender a migrar a Go y dirigir asistentes de IA como miembros del equipo",
  },

  // Configuración de la interfaz
  ui: {
    primaryColor: "#00ADD8", // Color oficial de Go
    secondaryColor: "#007D9C",
    accentColor: "#FF6B35",
    theme: "go-theme",
    favicon: "/assets/go-icon.png",
    logoUrl: "/assets/go-logo.png",
  },

  // Estructura de módulos del curso (EXACTA del documento CURSO_GO.md)
  modules: [
    {
      id: "modulo-1",
      title: '📋 Introducción a Golang y el "Por Qué" de la Migración',
      description: "Fundamentos de Go y beneficios de migrar desde TypeScript/Node.js",
      estimatedHours: 9,
      order: 1,
      sections: [
        {
          id: "por-que-go",
          title: "¿Por qué Go? Beneficios de migrar desde TypeScript/Node.js",
          type: "content",
          duration: "180 min",
          contentFile: "modules/modulo-1/por-que-go.md",
          concepts: "Go vs Node.js/TypeScript: rendimiento, concurrencia, tipado estático",
          whyContent:
            "Go ofrece rendimiento superior, gestión de concurrencia con goroutines, tipado estático que reduce errores",
          promptInstruction: "Informe técnico comparativo Node.js/TypeScript vs Go para APIs REST de alto rendimiento",
        },
        {
          id: "configuracion-entorno",
          title: "Configuración del entorno de desarrollo Go",
          type: "hands-on",
          duration: "180 min",
          contentFile: "modules/modulo-1/configuracion-entorno.md",
          concepts: "GOPATH, Go Modules, gestión de dependencias, estructura de directorios",
          whyContent: "Go Modules son fundamentales para gestión de dependencias moderna y reproducible",
          promptInstruction:
            "Instrucciones detalladas para configurar entorno Go en Linux, macOS y Windows con go mod init",
        },
        {
          id: "migracion-javascript-go",
          title: "Migración de código JavaScript a Go",
          type: "content",
          duration: "240 min",
          contentFile: "modules/modulo-1/migracion-javascript-go.md",
          concepts: "Comparativas JS/TS vs Go, patrones de migración, sintaxis equivalentes",
          whyContent: "Comparación lado a lado acelera aprendizaje y reduce curva de migración",
          promptInstruction: "Migración sistemática de código JavaScript/TypeScript a Go manteniendo funcionalidad",
        },
        {
          id: "evaluacion-practica",
          title: "Evaluación práctica: primer proyecto en Go",
          type: "hands-on",
          duration: "160 min",
          contentFile: "modules/modulo-1/evaluacion-practica.md",
          concepts: "Proyecto TODO API, CRUD, testing, arquitectura modular",
          whyContent: "Evaluación práctica consolida aprendizaje e identifica gaps antes de avanzar",
          promptInstruction: "Proyecto completo guiado por IA con evaluación de competencias específicas",
        },
      ],
    },
    {
      id: "modulo-2",
      title: "🌐 Fundamentos del Desarrollo Backend con Go",
      description: "HTTP, frameworks y arquitectura de proyectos",
      estimatedHours: 8,
      order: 2,
      sections: [
        {
          id: "manejo-http",
          title: "Manejo de HTTP: De Express/NestJS a net/http y frameworks",
          type: "hands-on",
          duration: "240 min",
          contentFile: "modules/modulo-2/manejo-http.md",
          concepts: "net/http, Fiber framework, comparación con Express",
          whyContent: "net/http es base eficiente, Fiber similar a Express para desarrolladores Node.js",
          promptInstruction:
            "API REST con net/http y refactorización con Fiber, explicar ventajas para desarrolladores Express",
        },
        {
          id: "estructura-proyectos",
          title: "Estructura de Proyectos y Mejores Prácticas (Clean Architecture en Go)",
          type: "content",
          duration: "240 min",
          contentFile: "modules/modulo-2/estructura-proyectos.md",
          concepts: "Clean Architecture, tres capas, interfaces, visibilidad por capitalización",
          whyContent: "Simplicidad de Go, interfaces para desacoplamiento, control de visibilidad fundamental",
          promptInstruction: "Estructura de proyecto Go con arquitectura tres capas, interfaces para desacoplamiento",
        },
      ],
    },
    {
      id: "modulo-3",
      title: "🗄️ Gestión de Datos con PostgreSQL",
      description: 'De TypeORM a database/sql con enfoque "SQL First"',
      estimatedHours: 6,
      order: 3,
      sections: [
        {
          id: "postgresql-database-sql",
          title: "Conexión y consultas a PostgreSQL: De TypeORM a database/sql",
          type: "hands-on",
          duration: "360 min",
          contentFile: "modules/modulo-3/postgresql-database-sql.md",
          concepts: 'database/sql, drivers PostgreSQL, enfoque "SQL First" vs ORM',
          whyContent: 'Go prefiere "SQL First" evitando ORMs complejos, menos propenso a errores',
          promptInstruction:
            "Repositorio usuarios Go con database/sql y github.com/lib/pq, explicar ventajas sobre ORMs",
        },
      ],
    },
    {
      id: "modulo-4",
      title: "🔐 Seguridad y Funcionalidades Avanzadas",
      description: "JWT, logging, Swagger y configuración con Viper",
      estimatedHours: 8,
      order: 4,
      sections: [
        {
          id: "autenticacion-jwt",
          title: "Autenticación y Autorización (JWT)",
          type: "hands-on",
          duration: "120 min",
          contentFile: "modules/modulo-4/autenticacion-jwt.md",
          concepts: "JWT tokens, RBAC, ABAC, ReBAC, middleware de autenticación",
          whyContent: "Seguridad crítica, JWT estándar pero implementación compleja, modelos de autorización",
          promptInstruction: "Sistema autenticación JWT con middleware Fiber y gestión de roles",
        },
        {
          id: "logging-monitoreo",
          title: "Logging y Monitoreo",
          type: "content",
          duration: "90 min",
          contentFile: "modules/modulo-4/logging-monitoreo.md",
          concepts: "Manejo explícito errores, paquete log, niveles de logging",
          whyContent: "Go promueve manejo explícito errores, niveles logging para categorización",
          promptInstruction: "Logger personalizado con niveles Info, Warning, Error y manejo explícito errores",
        },
        {
          id: "documentacion-swagger",
          title: "Documentación de API (Swagger)",
          type: "hands-on",
          duration: "90 min",
          contentFile: "modules/modulo-4/documentacion-swagger.md",
          concepts: "Swagger/OpenAPI, documentación automática de endpoints",
          whyContent: "Documentación clara fundamental, generación automática mejora colaboración",
          promptInstruction: "Implementar Swagger/OpenAPI con ejemplo endpoint POST /users",
        },
        {
          id: "configuracion-viper",
          title: "Gestión de Configuración: De .env a Viper",
          type: "hands-on",
          duration: "120 min",
          contentFile: "modules/modulo-4/configuracion-viper.md",
          concepts: "Viper library, configuración YAML, variables de entorno, mapeo a struct",
          whyContent: "Configuración segura y adaptable, Viper ofrece flexibilidad y prioridad de sobrescritura",
          promptInstruction: "Sistema configuración con Viper: YAML, variables entorno, mapeo a struct",
        },
      ],
    },
    {
      id: "modulo-5",
      title: "🚀 Despliegue, Pruebas y Productividad con IA",
      description: "Testing, deployment y compilación optimizada",
      estimatedHours: 6,
      order: 5,
      sections: [
        {
          id: "pruebas-go",
          title: "Pruebas en Go: Unitarias y de Integración",
          type: "hands-on",
          duration: "180 min",
          contentFile: "modules/modulo-5/pruebas-go.md",
          concepts: "go test, pruebas unitarias, Testcontainers, pruebas integración con Docker",
          whyContent:
            "Framework testing integrado, pruebas integración con bases de datos reales para validar persistencia",
          promptInstruction: "Pruebas unitarias capa servicio y configuración Testcontainers para PostgreSQL",
        },
        {
          id: "despliegue-aplicaciones",
          title: "Despliegue de Aplicaciones Go",
          type: "hands-on",
          duration: "180 min",
          contentFile: "modules/modulo-5/despliegue-aplicaciones.md",
          concepts: "go build, binarios autocontenidos, ldflags, build tags, compilación multiplataforma",
          whyContent:
            "Binarios autocontenidos ventaja clave, ldflags para observabilidad, build tags para gestión multiplataforma",
          promptInstruction:
            "Guía despliegue con binario autocontenido, ldflags para versión, build tags para compilación condicional",
        },
      ],
    },
    {
      id: "modulo-6",
      title: "🤖 Dirigiendo a la Genia (GitHub Copilot con Claude Sonnet 4) como Empleado Desarrollador",
      description: "Roles, técnicas de prompting y evaluación del trabajo de IA",
      estimatedHours: 4,
      order: 6,
      sections: [
        {
          id: "rol-gerente-genia",
          title: "Tu Rol como Gerente de la Genia",
          type: "content",
          duration: "60 min",
          contentFile: "modules/modulo-6/rol-gerente-genia.md",
          concepts: "Arquitecto, Prompt Engineer, Revisor de Código, Mentor y Evaluador",
          whyContent: "Definir arquitectura de alto nivel, formular instrucciones claras, supervisar calidad",
          promptInstruction: "Roles específicos: Arquitecto, Diseñador, Prompt Engineer, Revisor, Mentor",
        },
        {
          id: "como-dirigir-genia",
          title: "¿Cómo Dirigir a la Genia?",
          type: "hands-on",
          duration: "90 min",
          contentFile: "modules/modulo-6/como-dirigir-genia.md",
          concepts: "Generación esqueletos, traducción patrones, implementación detallada, refactorización",
          whyContent: "Técnicas específicas de prompting para cada tipo de tarea en Go",
          promptInstruction: "Técnicas prompting: esqueletos, patrones Express->Go, implementación, refactorización",
        },
        {
          id: "evaluar-trabajo-genia",
          title: "¿Cómo Evaluar el Trabajo de la Genia?",
          type: "content",
          duration: "60 min",
          contentFile: "modules/modulo-6/evaluar-trabajo-genia.md",
          concepts: "Idiomaticidad Go, corrección, eficiencia, consistencia, seguridad",
          whyContent: "Criterios específicos para evaluar código Go generado por IA",
          promptInstruction: "Criterios evaluación: idiomaticidad, corrección, eficiencia, consistencia, seguridad",
        },
        {
          id: "limitaciones-expectativas",
          title: "Limitaciones y Expectativas",
          type: "content",
          duration: "30 min",
          contentFile: "modules/modulo-6/limitaciones-expectativas.md",
          concepts: "IA como herramienta, juicio crítico insustituible, productividad bajo dirección",
          whyContent: "Entender limitaciones IA, mantener juicio crítico, aprovechar productividad",
          promptInstruction: "Limitaciones IA: herramienta vs sustituto, juicio crítico, productividad dirigida",
        },
      ],
    },
  ],

  // Configuración del proyecto final
  project: {
    title: "🤖 Proyecto Final: Dirigir a la IA en Construcción de API Go",
    description: "Aplicación completa guiando a la IA paso a paso con supervisión experta",
    estimatedHours: 8,
    difficulty: "Avanzado",
    phases: [
      {
        id: "fase-1",
        title: "Arquitectura y Configuración",
        tasks: [
          "Dirigir a la IA en diseño de arquitectura",
          "Configurar estructura de proyecto Go",
          "Configurar PostgreSQL con database/sql",
        ],
      },
      {
        id: "fase-2",
        title: "Autenticación con IA",
        tasks: [
          "Instruir implementación JWT",
          "Supervisar middleware de autenticación",
          "Evaluar seguridad del código generado",
        ],
      },
      {
        id: "fase-3",
        title: "CRUD con Supervisión",
        tasks: ["Dirigir creación de modelos", "Supervisar endpoints REST", "Evaluar manejo de errores"],
      },
      {
        id: "fase-4",
        title: "Testing y Deployment Dirigido",
        tasks: [
          "Instruir pruebas unitarias e integración",
          "Dirigir configuración de deployment",
          "Evaluación final del trabajo de IA",
        ],
      },
    ],
  },

  // Referencias y recursos (basado en documento)
  references: {
    sections: [
      {
        id: "fundamentos-go",
        title: "Fundamentos de Go",
        subsections: [
          "Sintaxis vs TypeScript/JavaScript",
          "Tipos de datos y interfaces",
          "Manejo de errores explícito",
          "Concurrencia con goroutines",
        ],
      },
      {
        id: "backend-go",
        title: "Backend con Go",
        subsections: ["net/http vs Express", "Fiber Framework", "database/sql vs TypeORM", "Clean Architecture en Go"],
      },
      {
        id: "ai-development",
        title: "Desarrollo Asistido por IA",
        subsections: [
          "Técnicas de Prompting",
          "Evaluación de Código IA",
          "GitHub Copilot Best Practices",
          "Roles del Desarrollador-Gerente",
        ],
      },
      {
        id: "recursos-oficiales",
        title: "Recursos Oficiales",
        subsections: ["Documentación Go", "Go by Example", "Effective Go", "Awesome Go"],
      },
    ],
  },

  // Configuración de prompts de IA (específicos del documento)
  aiPrompts: {
    sections: [
      {
        id: "migracion-typescript",
        title: "🔄 Migración desde TypeScript/Node.js",
        prompts: [
          {
            title: "Comparativa Técnica",
            prompt:
              "Genia, necesito un informe técnico comparativo entre Node.js/TypeScript y Go, enfocado en por qué Go es superior para el desarrollo de APIs REST de alto rendimiento.",
          },
          {
            title: "Traducción de Patrones",
            prompt:
              "Genia, ¿cómo se traduciría un middleware de Express.js para autenticación JWT a un middleware idiomático en Go?",
          },
        ],
      },
      {
        id: "arquitectura-go",
        title: "🏗️ Arquitectura de Proyectos Go",
        prompts: [
          {
            title: "Estructura de Proyecto",
            prompt:
              "Genia, diseña una estructura de proyecto Go para una aplicación backend que gestione usuarios, siguiendo una arquitectura de tres capas simple.",
          },
          {
            title: "Esqueleto de Aplicación",
            prompt:
              "Genia, crea la estructura de directorios para una nueva aplicación Go siguiendo una arquitectura de tres capas.",
          },
        ],
      },
      {
        id: "implementacion-especifica",
        title: "💻 Implementación Específica",
        prompts: [
          {
            title: "API REST con Fiber",
            prompt:
              "Genia, crea un esqueleto de API REST en Go usando net/http, luego refactoriza con Fiber. Explica las ventajas para desarrolladores Express.",
          },
          {
            title: "Repositorio PostgreSQL",
            prompt:
              "Genia, implementa un repositorio para usuarios en Go que se conecte a PostgreSQL usando database/sql y github.com/lib/pq.",
          },
        ],
      },
      {
        id: "evaluacion-codigo",
        title: "✅ Evaluación y Refactorización",
        prompts: [
          {
            title: "Revisión de Código",
            prompt:
              "Genia, revisa el UserRepository y refactorízalo para que los valores NULL de PostgreSQL se manejen con tipos nulos de Go.",
          },
          {
            title: "Implementación Detallada",
            prompt:
              "Genia, implementa la función CreateUser en el UserService. Asegúrate de incluir validación y manejo explícito de errores.",
          },
        ],
      },
    ],
  },

  // Configuración de navegación
  navigation: {
    showModuleProgress: true,
    showEstimatedTime: true,
    showDifficulty: true,
    enableBookmarks: true,
    enableNotes: true,
    enableAIPrompts: true,
    enableCodeReview: true,
  },

  // Configuración de evaluación
  assessment: {
    enableQuizzes: false,
    enableCodeReview: true,
    enableAIEvaluation: true, // Específico para este curso
    enablePeerReview: false,
    requiredModulesForCertification: ["modulo-1", "modulo-2", "modulo-3", "modulo-4", "modulo-5", "modulo-6"],
    requiredProjectCompletion: 0.9, // 90% del proyecto para certificación IA
  },

  // Recursos adicionales (del documento)
  resources: {
    documentation: [
      { title: "Documentación oficial de Go", url: "https://golang.org/doc/" },
      { title: "Go by Example", url: "https://gobyexample.com/" },
      { title: "Effective Go", url: "https://golang.org/doc/effective_go.html" },
      { title: "Awesome Go", url: "https://awesome-go.com/" },
    ],
    tools: [
      { title: "Go Playground", url: "https://play.golang.org/" },
      { title: "GitHub Copilot", url: "https://docs.github.com/en/copilot" },
    ],
    communities: [
      { title: "Go Community", url: "https://golang.org/help/" },
      { title: "Gophers Slack", url: "https://gophers.slack.com/" },
    ],
    aiResources: [
      { title: "Best Practices for AI-Assisted Development", url: "https://docs.github.com/en/copilot" },
      { title: "Prompt Engineering Guide", url: "https://www.promptingguide.ai/" },
    ],
  },
};
