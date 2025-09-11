/**
 * 🎯 Configuración del Curso: Go - Fundamentos y Desarrollo Web
 *
 * Define toda la estructura, contenido y configuración específica
 * del curso de Go manteniendo compatibilidad con el sistema modular.
 *
 * @version 1.0.0
 * @course Go Fundamentos
 * @created 2025-09-11
 */

export const courseConfig = {
  // Información básica del curso
  id: "go-fundamentos",
  title: "Go - Fundamentos y Desarrollo Web",
  subtitle: "De cero a desarrollo web con Go, Gin y bases de datos",
  version: "1.0.0",

  // Metadatos del curso
  metadata: {
    instructor: "GitHub Copilot + Supervisión",
    duration: "35 horas",
    level: "Principiante a Intermedio",
    category: "Backend Development",
    tags: ["Go", "Golang", "Web Development", "API", "Database", "Gin Framework"],
    language: "es",
    lastUpdated: "2025-09-11",
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

  // Estructura de módulos del curso
  modules: [
    {
      id: "modulo-1",
      title: "🚀 Introducción y Configuración",
      description: "Fundamentos de Go, instalación y primer programa",
      estimatedHours: 4,
      order: 1,
      sections: [
        {
          id: "que-es-go",
          title: "¿Qué es Go?",
          type: "content",
          duration: "45 min",
          contentFile: "modules/modulo-1/que-es-go.md",
        },
        {
          id: "instalacion",
          title: "Instalación y Configuración",
          type: "content",
          duration: "60 min",
          contentFile: "modules/modulo-1/instalacion.md",
        },
        {
          id: "primer-programa",
          title: "Tu Primer Programa en Go",
          type: "hands-on",
          duration: "90 min",
          contentFile: "modules/modulo-1/primer-programa.md",
        },
        {
          id: "herramientas",
          title: "Herramientas de Desarrollo",
          type: "content",
          duration: "45 min",
          contentFile: "modules/modulo-1/herramientas.md",
        },
      ],
    },
    {
      id: "modulo-2",
      title: "📝 Sintaxis y Fundamentos",
      description: "Variables, tipos de datos, estructuras de control",
      estimatedHours: 6,
      order: 2,
      sections: [
        {
          id: "variables-tipos",
          title: "Variables y Tipos de Datos",
          type: "content",
          duration: "90 min",
          contentFile: "modules/modulo-2/variables-tipos.md",
        },
        {
          id: "estructuras-control",
          title: "Estructuras de Control",
          type: "content",
          duration: "90 min",
          contentFile: "modules/modulo-2/estructuras-control.md",
        },
        {
          id: "funciones",
          title: "Funciones en Go",
          type: "hands-on",
          duration: "120 min",
          contentFile: "modules/modulo-2/funciones.md",
        },
        {
          id: "arrays-slices",
          title: "Arrays, Slices y Maps",
          type: "hands-on",
          duration: "90 min",
          contentFile: "modules/modulo-2/arrays-slices.md",
        },
      ],
    },
    {
      id: "modulo-3",
      title: "🏗️ Programación Orientada a Objetos",
      description: "Structs, métodos, interfaces y composición",
      estimatedHours: 5,
      order: 3,
      sections: [
        {
          id: "structs-metodos",
          title: "Structs y Métodos",
          type: "content",
          duration: "90 min",
          contentFile: "modules/modulo-3/structs-metodos.md",
        },
        {
          id: "interfaces",
          title: "Interfaces en Go",
          type: "hands-on",
          duration: "120 min",
          contentFile: "modules/modulo-3/interfaces.md",
        },
        {
          id: "composicion",
          title: "Composición vs Herencia",
          type: "content",
          duration: "60 min",
          contentFile: "modules/modulo-3/composicion.md",
        },
        {
          id: "punteros",
          title: "Punteros y Referencias",
          type: "hands-on",
          duration: "90 min",
          contentFile: "modules/modulo-3/punteros.md",
        },
      ],
    },
    {
      id: "modulo-4",
      title: "⚡ Concurrencia",
      description: "Goroutines, channels y patrones de concurrencia",
      estimatedHours: 6,
      order: 4,
      sections: [
        {
          id: "goroutines",
          title: "Introducción a Goroutines",
          type: "content",
          duration: "90 min",
          contentFile: "modules/modulo-4/goroutines.md",
        },
        {
          id: "channels",
          title: "Channels y Comunicación",
          type: "hands-on",
          duration: "120 min",
          contentFile: "modules/modulo-4/channels.md",
        },
        {
          id: "select",
          title: "Select Statement",
          type: "hands-on",
          duration: "90 min",
          contentFile: "modules/modulo-4/select.md",
        },
        {
          id: "patrones-concurrencia",
          title: "Patrones de Concurrencia",
          type: "hands-on",
          duration: "120 min",
          contentFile: "modules/modulo-4/patrones-concurrencia.md",
        },
      ],
    },
    {
      id: "modulo-5",
      title: "🌐 Desarrollo Web con Go",
      description: "HTTP, servidor web, routing y middleware",
      estimatedHours: 7,
      order: 5,
      sections: [
        {
          id: "http-basico",
          title: "Servidor HTTP Básico",
          type: "hands-on",
          duration: "90 min",
          contentFile: "modules/modulo-5/http-basico.md",
        },
        {
          id: "gin-framework",
          title: "Framework Gin",
          type: "hands-on",
          duration: "120 min",
          contentFile: "modules/modulo-5/gin-framework.md",
        },
        {
          id: "routing-middleware",
          title: "Routing y Middleware",
          type: "hands-on",
          duration: "120 min",
          contentFile: "modules/modulo-5/routing-middleware.md",
        },
        {
          id: "templates-json",
          title: "Templates y JSON",
          type: "hands-on",
          duration: "90 min",
          contentFile: "modules/modulo-5/templates-json.md",
        },
      ],
    },
    {
      id: "modulo-6",
      title: "🗄️ Bases de Datos",
      description: "SQL, GORM y gestión de datos",
      estimatedHours: 7,
      order: 6,
      sections: [
        {
          id: "sql-basico",
          title: "Conexión a Base de Datos",
          type: "hands-on",
          duration: "90 min",
          contentFile: "modules/modulo-6/sql-basico.md",
        },
        {
          id: "gorm-intro",
          title: "Introducción a GORM",
          type: "hands-on",
          duration: "120 min",
          contentFile: "modules/modulo-6/gorm-intro.md",
        },
        {
          id: "crud-operations",
          title: "Operaciones CRUD",
          type: "hands-on",
          duration: "120 min",
          contentFile: "modules/modulo-6/crud-operations.md",
        },
        {
          id: "relaciones",
          title: "Relaciones y Consultas Avanzadas",
          type: "hands-on",
          duration: "90 min",
          contentFile: "modules/modulo-6/relaciones.md",
        },
      ],
    },
  ],

  // Configuración del proyecto final
  project: {
    title: "🚀 API REST de Gestión de Tareas",
    description: "Aplicación completa con autenticación, CRUD y base de datos",
    estimatedHours: 8,
    difficulty: "Intermedio",
    phases: [
      {
        id: "fase-1",
        title: "Configuración del Proyecto",
        tasks: ["Configurar estructura del proyecto", "Configurar base de datos", "Configurar Gin y middleware básico"],
      },
      {
        id: "fase-2",
        title: "Autenticación",
        tasks: ["Implementar registro de usuarios", "Implementar login con JWT", "Middleware de autenticación"],
      },
      {
        id: "fase-3",
        title: "CRUD de Tareas",
        tasks: ["Crear modelo de tareas", "Endpoints para tareas", "Validaciones y errores"],
      },
      {
        id: "fase-4",
        title: "Funcionalidades Avanzadas",
        tasks: ["Filtros y búsqueda", "Paginación", "Tests unitarios"],
      },
    ],
  },

  // Referencias y recursos
  references: {
    sections: [
      {
        id: "sintaxis",
        title: "Sintaxis de Go",
        subsections: ["Variables y Constantes", "Tipos de Datos", "Operadores", "Estructuras de Control"],
      },
      {
        id: "stdlib",
        title: "Librería Estándar",
        subsections: ["fmt - Formateo", "net/http - HTTP", "encoding/json - JSON", "database/sql - Base de Datos"],
      },
      {
        id: "frameworks",
        title: "Frameworks y Librerías",
        subsections: ["Gin Web Framework", "GORM ORM", "Testify - Testing", "Viper - Configuración"],
      },
      {
        id: "herramientas",
        title: "Herramientas de Desarrollo",
        subsections: ["go mod - Módulos", "go fmt - Formateo", "go test - Testing", "go build - Compilación"],
      },
    ],
  },

  // Configuración de prompts de IA
  aiPrompts: {
    sections: [
      {
        id: "codigo-go",
        title: "💻 Generación de Código Go",
        prompts: [
          {
            title: "Función Go Básica",
            prompt: "Crea una función en Go que [descripción]. Incluye validación de errores y documentación.",
          },
          {
            title: "Struct con Métodos",
            prompt: "Define un struct en Go para [entidad] con métodos para [operaciones]. Incluye validaciones.",
          },
          {
            title: "Handler HTTP con Gin",
            prompt:
              "Crea un handler HTTP en Go usando Gin para [operación]. Incluye validación de entrada y manejo de errores.",
          },
        ],
      },
      {
        id: "concurrencia",
        title: "⚡ Concurrencia en Go",
        prompts: [
          {
            title: "Goroutine con Channel",
            prompt: "Implementa una solución concurrente en Go usando goroutines y channels para [problema].",
          },
          {
            title: "Worker Pool",
            prompt: "Crea un patrón worker pool en Go para procesar [tareas] de forma concurrente.",
          },
        ],
      },
      {
        id: "base-datos",
        title: "🗄️ Base de Datos",
        prompts: [
          {
            title: "Modelo GORM",
            prompt: "Define un modelo GORM para [entidad] con relaciones apropiadas y validaciones.",
          },
          {
            title: "Query Compleja",
            prompt: "Escribe una consulta GORM para [operación] incluyendo joins, filtros y paginación.",
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
  },

  // Configuración de evaluación
  assessment: {
    enableQuizzes: false, // Para esta versión
    enableCodeReview: true,
    enablePeerReview: false,
    requiredModulesForCertification: ["modulo-1", "modulo-2", "modulo-3", "modulo-4", "modulo-5", "modulo-6"],
    requiredProjectCompletion: 0.8, // 80% del proyecto
  },

  // Recursos adicionales
  resources: {
    documentation: [
      { title: "Go Official Documentation", url: "https://golang.org/doc/" },
      { title: "Go by Example", url: "https://gobyexample.com/" },
      { title: "Effective Go", url: "https://golang.org/doc/effective_go.html" },
    ],
    tools: [
      { title: "Go Playground", url: "https://play.golang.org/" },
      { title: "Go Modules", url: "https://golang.org/ref/mod" },
    ],
    communities: [
      { title: "Go Community", url: "https://golang.org/help/" },
      { title: "Gophers Slack", url: "https://gophers.slack.com/" },
    ],
  },
};
