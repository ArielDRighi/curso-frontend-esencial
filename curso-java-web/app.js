function courseApp() {
  return {
    currentView: "dashboard",
    selectedModule: 0,
    darkMode: false,

    modules: [
      {
        id: 0,
        emoji: "🧠",
        title: "Módulo 0: Mindset Java para Desarrolladores Backend",
        shortTitle: "Mindset Java",
        duration: "2-3 horas",
        level: "Conceptual",
        completed: false,
        objective: "Preparar la mentalidad para la transición de Node.js/TypeScript a Java/Spring Boot",
        description:
          "Comprende las diferencias filosóficas entre JavaScript y Java, el paradigma compilado vs interpretado, y cómo adoptar el mindset enterprise.",
        sections: [
          {
            title: "📚 Node.js vs Java: Diferencias Filosóficas",
            duration: "45 min",
            topics: [
              "Flexibilidad vs Convención",
              "Configuración explícita vs implícita",
              "Ecosistema dinámico vs maduro",
              "Iteración rápida vs estabilidad",
            ],
          },
          {
            title: "⚡ Compilado vs Interpretado: Más que Velocidad",
            duration: "30 min",
            topics: [
              "El compilador como primer QA",
              "Ventajas del bytecode y JVM",
              "Feedback inmediato vs runtime",
              "Performance predictible",
            ],
          },
          {
            title: "🏢 Mentalidad Enterprise",
            duration: "45 min",
            topics: [
              "Estabilidad a largo plazo",
              "Mantenibilidad sobre agilidad",
              "Documentación y contratos",
              "Escalabilidad empresarial",
            ],
          },
          {
            title: "📐 Convención sobre Configuración",
            duration: "30 min",
            topics: [
              "La magia es predecible",
              "Nomenclatura y estructura",
              "Auto-configuración Spring Boot",
              "Abraza las convenciones",
            ],
          },
        ],
        resources: [
          {
            title: "📄 Java vs JavaScript: Mindset Comparison",
            type: "guide",
            url: "#",
          },
          {
            title: "🏢 Enterprise Development Philosophy",
            type: "article",
            url: "#",
          },
        ],
      },
      {
        id: 1,
        emoji: "☕",
        title: "Módulo 1: Fundamentos Java para Backend Developers",
        shortTitle: "Java Fundamentals",
        duration: "8-10 horas",
        level: "Fundamental",
        completed: false,
        objective:
          "Dominar la sintaxis Java y conceptos OOP desde la perspectiva de un desarrollador Node.js/TypeScript",
        description:
          "Transición completa de JavaScript/TypeScript a Java, cubriendo sintaxis, OOP, JVM, y conceptos fundamentales con comparaciones directas.",
        sections: [
          {
            title: "🔄 Sintaxis: JavaScript/TypeScript → Java",
            duration: "2 horas",
            topics: [
              "Variables y tipos: let/const → final/var",
              "Functions → Methods & Static",
              "Destructuring → Pattern Matching",
              "Arrow functions → Lambda expressions",
              "Template literals → String formatting",
            ],
          },
          {
            title: "🏗️ POO: Clases y Objetos en Java",
            duration: "2.5 horas",
            topics: [
              "Classes vs TypeScript classes",
              "Constructores y overloading",
              "Encapsulación: getters/setters",
              "Herencia vs Composition",
              "Interfaces vs TypeScript interfaces",
            ],
          },
          {
            title: "🔧 Tipos de Datos y Colecciones",
            duration: "2 horas",
            topics: [
              "Primitivos vs Objects",
              "Arrays vs JavaScript arrays",
              "Collections Framework",
              "Generics vs TypeScript generics",
              "Streams API vs array methods",
            ],
          },
          {
            title: "⚡ JVM vs Node.js Runtime",
            duration: "1.5 horas",
            topics: [
              "Arquitectura JVM",
              "Garbage Collection vs V8",
              "Bytecode vs JavaScript engine",
              "Memory management",
              "Performance characteristics",
            ],
          },
        ],
        resources: [
          {
            title: "� Java Syntax Cheatsheet for JS Developers",
            type: "reference",
            url: "#",
          },
          {
            title: "🔧 IntelliJ IDEA Setup Guide",
            type: "tutorial",
            url: "#",
          },
          {
            title: "💻 Interactive Java Exercises",
            type: "exercise",
            url: "#",
          },
        ],
      },
      {
        id: 2,
        emoji: "🌱",
        title: "Módulo 2: Introducción a Spring Framework y Spring Boot",
        shortTitle: "Spring Fundamentals",
        duration: "10-12 horas",
        level: "Fundamental",
        completed: false,
        objective:
          "Comprender el ecosistema Spring y dominar Spring Boot para desarrollo ágil de aplicaciones enterprise",
        description:
          "Introducción completa a Spring Framework, IoC, DI, y creación del primer proyecto Spring Boot con comparaciones a Express/NestJS.",
        sections: [
          {
            title: "🚀 Spring Framework vs Spring Boot",
            duration: "2 horas",
            topics: [
              "Ecosistema Spring vs Express/NestJS",
              "Auto-configuración vs configuración manual",
              "Starters vs dependencies",
              "Arquitectura Spring Boot",
              "Convención sobre configuración",
            ],
          },
          {
            title: "🔄 Inversión de Control (IoC) e Inyección de Dependencias",
            duration: "3 horas",
            topics: [
              "Concepto IoC vs manual dependency injection",
              "DI en Spring vs NestJS",
              "Anotaciones @Component, @Service, @Repository",
              "@Autowired vs constructor injection",
              "Scopes de beans",
            ],
          },
          {
            title: "🎬 Creación del Primer Proyecto Spring Boot",
            duration: "3 horas",
            topics: [
              "Spring Initializr vs npm create",
              "Estructura de proyecto Maven",
              "Application.properties vs .env",
              "Hello World: Spring vs Express",
              "Perfiles de desarrollo",
            ],
          },
          {
            title: "🏗️ Arquitectura y Best Practices",
            duration: "2 horas",
            topics: [
              "Layered architecture pattern",
              "Package organization",
              "Configuration classes",
              "Bean lifecycle",
              "Testing setup básico",
            ],
          },
        ],
        resources: [
          {
            title: "� Spring Boot Official Guide",
            type: "documentation",
            url: "#",
          },
          {
            title: "⚡ Spring vs NestJS Comparison",
            type: "comparison",
            url: "#",
          },
          {
            title: "🛠️ Spring Boot Project Generator",
            type: "tool",
            url: "#",
          },
        ],
      },
      {
        id: 3,
        emoji: "🌐",
        title: "Módulo 3: APIs REST con Spring Boot Web",
        shortTitle: "REST APIs",
        duration: "12-14 horas",
        level: "Intermedio",
        completed: false,
        objective:
          "Desarrollar APIs REST robustas y escalables con Spring Boot Web, validación y manejo de errores enterprise",
        description:
          "Construcción completa de APIs REST con Spring Boot, desde controladores básicos hasta manejo avanzado de errores y validación.",
        sections: [
          {
            title: "🎮 Controllers y Request Mapping",
            duration: "3 horas",
            topics: [
              "@RestController vs Express routes",
              "@RequestMapping, @GetMapping, @PostMapping",
              "Path variables vs Express params",
              "Query parameters y request body",
              "Response customization",
            ],
          },
          {
            title: "✅ Validación de Datos",
            duration: "3 horas",
            topics: [
              "@Valid vs middleware validation",
              "Bean Validation (JSR-303)",
              "Custom validators",
              "Validation groups",
              "Error handling para validación",
            ],
          },
          {
            title: "🚨 Manejo de Errores y Excepciones",
            duration: "3 horas",
            topics: [
              "@ExceptionHandler vs Express error middleware",
              "Custom exceptions",
              "Global exception handling",
              "Response status y error codes",
              "API error responses structure",
            ],
          },
          {
            title: "⚙️ Configuración Avanzada Web",
            duration: "3 horas",
            topics: [
              "CORS configuration",
              "Content negotiation",
              "Custom serialization",
              "Interceptors vs middleware",
              "Rate limiting y security headers",
            ],
          },
        ],
        resources: [
          {
            title: "� REST API Best Practices Guide",
            type: "guide",
            url: "#",
          },
          {
            title: "🧪 Testing REST APIs with MockMvc",
            type: "tutorial",
            url: "#",
          },
          {
            title: "📋 API Design Checklist",
            type: "checklist",
            url: "#",
          },
        ],
      },
      {
        id: 4,
        emoji: "💾",
        title: "Módulo 4: Gestión de Bases de Datos con Spring Data JPA",
        shortTitle: "Spring Data JPA",
        duration: "14-16 horas",
        level: "Intermedio",
        completed: false,
        objective: "Gestionar persistencia de datos con JPA, Hibernate y PostgreSQL de manera enterprise",
        description:
          "Dominio completo de Spring Data JPA para persistencia, desde configuración básica hasta optimización de queries y transacciones.",
        sections: [
          {
            title: "🔗 JPA vs TypeORM: Configuración y Setup",
            duration: "3 horas",
            topics: [
              "JPA configuration vs TypeORM",
              "DataSource y connection pooling",
              "Entity scanning y packages",
              "Database initialization",
              "Multiple datasources",
            ],
          },
          {
            title: "🏗️ Entidades y Relaciones",
            duration: "4 horas",
            topics: [
              "@Entity vs TypeORM entities",
              "Primary keys y generation strategies",
              "@OneToMany, @ManyToOne vs TypeORM relations",
              "Lazy vs Eager loading",
              "Cascade operations y orphan removal",
            ],
          },
          {
            title: "📊 Repositories y Custom Queries",
            duration: "4 horas",
            topics: [
              "JpaRepository vs TypeORM repositories",
              "Query methods derivation",
              "@Query y JPQL vs SQL",
              "Native queries cuando necesario",
              "Projections y DTOs",
            ],
          },
          {
            title: "⚡ Transacciones y Performance",
            duration: "3 horas",
            topics: [
              "@Transactional vs TypeORM transactions",
              "Isolation levels y propagation",
              "N+1 problem solutions",
              "Query optimization",
              "Second level cache",
            ],
          },
        ],
        resources: [
          {
            title: "� JPA Query Methods Reference",
            type: "reference",
            url: "#",
          },
          {
            title: "⚡ Hibernate Performance Guide",
            type: "guide",
            url: "#",
          },
          {
            title: "🔧 Database Migration with Flyway",
            type: "tutorial",
            url: "#",
          },
        ],
      },
      {
        id: 5,
        emoji: "🔐",
        title: "Módulo 5: Seguridad y Autenticación con Spring Security",
        shortTitle: "Spring Security",
        duration: "12-14 horas",
        level: "Avanzado",
        completed: false,
        objective: "Implementar seguridad enterprise completa con autenticación JWT, autorización y mejores prácticas",
        description:
          "Sistema de seguridad completo con Spring Security, desde autenticación básica hasta OAuth2 y mejores prácticas de seguridad.",
        sections: [
          {
            title: "🔐 Fundamentos Spring Security",
            duration: "3 horas",
            topics: [
              "Spring Security vs Passport.js",
              "Architecture y filter chain",
              "Authentication vs Authorization",
              "Security configuration",
              "Password encoding",
            ],
          },
          {
            title: "🎫 Implementación JWT",
            duration: "4 horas",
            topics: [
              "JWT vs session-based auth",
              "Custom JWT authentication filter",
              "Token generation y validation",
              "Refresh token strategy",
              "JWT best practices",
            ],
          },
          {
            title: "👤 Usuarios, Roles y Permisos",
            duration: "3 horas",
            topics: [
              "UserDetails vs custom user model",
              "Role-based vs Permission-based auth",
              "@PreAuthorize y @Secured",
              "Method level security",
              "Custom authorization logic",
            ],
          },
          {
            title: "🌐 CORS, OAuth2 y Seguridad Web",
            duration: "2 horas",
            topics: [
              "CORS configuration avanzada",
              "OAuth2 y OpenID Connect",
              "Security headers",
              "CSRF protection",
              "Rate limiting y protection",
            ],
          },
        ],
        resources: [
          {
            title: "🔒 JWT Implementation Complete Guide",
            type: "tutorial",
            url: "#",
          },
          {
            title: "�️ Spring Security Best Practices",
            type: "guide",
            url: "#",
          },
          {
            title: "� OAuth2 Integration Examples",
            type: "examples",
            url: "#",
          },
        ],
      },
      {
        id: 6,
        emoji: "🏗️",
        title: "Módulo 6: Microservicios y Arquitectura Distribuida",
        shortTitle: "Microservicios",
        duration: "16-18 horas",
        level: "Avanzado",
        completed: false,
        objective: "Diseñar y desarrollar arquitecturas de microservicios escalables con Spring Cloud",
        description:
          "Arquitectura completa de microservicios usando Spring Cloud, desde service discovery hasta patterns de resilencia.",
        sections: [
          {
            title: "🌐 Fundamentos de Microservicios",
            duration: "4 horas",
            topics: [
              "Monolith vs Microservices",
              "Service decomposition strategies",
              "Spring Cloud ecosystem",
              "Configuration management",
              "Service mesh concepts",
            ],
          },
          {
            title: "🚪 API Gateway y Service Discovery",
            duration: "4 horas",
            topics: [
              "Spring Cloud Gateway vs Express gateway",
              "Eureka service registry",
              "Load balancing strategies",
              "Gateway filters y middleware",
              "Circuit breaker patterns",
            ],
          },
          {
            title: "🔄 Comunicación Entre Servicios",
            duration: "4 horas",
            topics: [
              "Synchronous vs Asynchronous communication",
              "OpenFeign vs HTTP clients",
              "Message queues con RabbitMQ",
              "Event-driven architecture",
              "Saga pattern implementation",
            ],
          },
          {
            title: "📊 Monitoring y Observabilidad",
            duration: "4 horas",
            topics: [
              "Distributed tracing con Sleuth",
              "Centralized logging",
              "Metrics con Micrometer",
              "Health checks y readiness",
              "Chaos engineering basics",
            ],
          },
        ],
        resources: [
          {
            title: "� Microservices Patterns Guide",
            type: "guide",
            url: "#",
          },
          {
            title: "🔄 Spring Cloud Gateway Documentation",
            type: "documentation",
            url: "#",
          },
          {
            title: "📊 Observability Best Practices",
            type: "tutorial",
            url: "#",
          },
        ],
      },
      {
        id: 7,
        emoji: "🧪",
        title: "Módulo 7: Testing en Spring Boot",
        shortTitle: "Testing Strategy",
        duration: "10-12 horas",
        level: "Intermedio",
        completed: false,
        objective: "Implementar estrategias de testing completas: unit, integration y E2E con JUnit 5 y TestContainers",
        description:
          "Testing comprehensivo en Spring Boot, desde unit tests hasta integration testing con bases de datos reales usando TestContainers.",
        sections: [
          {
            title: "🧪 JUnit 5 vs Jest: Testing Fundamentals",
            duration: "3 horas",
            topics: [
              "JUnit 5 vs Jest comparison",
              "Test lifecycle y annotations",
              "Assertions y matchers",
              "Parameterized tests",
              "Test organization y naming",
            ],
          },
          {
            title: "🎭 Unit Testing con Mockito",
            duration: "3 horas",
            topics: [
              "Mockito vs Jest mocks",
              "@Mock, @Spy, @InjectMocks",
              "Stubbing y verification",
              "Testing services y controllers",
              "Testing best practices",
            ],
          },
          {
            title: "🔗 Integration Testing",
            duration: "3 horas",
            topics: [
              "@SpringBootTest vs supertest",
              "TestContainers para databases",
              "MockMvc para web layer testing",
              "@DataJpaTest para repositories",
              "Test slices y optimización",
            ],
          },
          {
            title: "🚀 Testing Avanzado y TDD",
            duration: "3 horas",
            topics: [
              "Test-driven development workflow",
              "Testing security configurations",
              "Performance testing básico",
              "Contract testing",
              "CI/CD integration",
            ],
          },
        ],
        resources: [
          {
            title: "🧪 JUnit 5 Complete Testing Guide",
            type: "guide",
            url: "#",
          },
          {
            title: "� TestContainers Examples",
            type: "examples",
            url: "#",
          },
          {
            title: "📋 Testing Checklist",
            type: "checklist",
            url: "#",
          },
        ],
      },
      {
        id: 8,
        emoji: "🐳",
        title: "Módulo 8: DevOps y Deployment para Java",
        shortTitle: "DevOps & Deployment",
        duration: "12-14 horas",
        level: "Avanzado",
        completed: false,
        objective: "Containerizar, desplegar y monitorear aplicaciones Java en producción con Docker y Kubernetes",
        description:
          "Pipeline completo de DevOps para aplicaciones Java, desde containerización hasta deployment y monitoring en producción.",
        sections: [
          {
            title: "🐳 Docker para Aplicaciones Java",
            duration: "4 horas",
            topics: [
              "Multi-stage builds para Java",
              "JVM optimization en containers",
              "Docker Compose vs Node.js setup",
              "Image optimization y security",
              "Health checks y readiness probes",
            ],
          },
          {
            title: "☸️ Kubernetes Fundamentals",
            duration: "4 horas",
            topics: [
              "Deployments y Services",
              "ConfigMaps y Secrets",
              "Ingress y Load Balancing",
              "Persistent Volumes",
              "Horizontal Pod Autoscaling",
            ],
          },
          {
            title: "🔄 CI/CD Pipeline",
            duration: "3 horas",
            topics: [
              "GitHub Actions para Java",
              "Maven vs npm build process",
              "Testing en pipeline",
              "Security scanning",
              "Deployment strategies",
            ],
          },
          {
            title: "📊 Monitoring y Observabilidad",
            duration: "3 horas",
            topics: [
              "Spring Boot Actuator",
              "Prometheus y Grafana",
              "Application performance monitoring",
              "Log aggregation",
              "Alerting strategies",
            ],
          },
        ],
        resources: [
          {
            title: "🐳 Docker Best Practices for Java",
            type: "guide",
            url: "#",
          },
          {
            title: "☸️ Kubernetes for Java Developers",
            type: "tutorial",
            url: "#",
          },
          {
            title: "📊 Monitoring Setup Guide",
            type: "setup",
            url: "#",
          },
        ],
      },
      {
        id: 9,
        emoji: "⚡",
        title: "Módulo 9: Proyecto Final - API REST Enterprise",
        shortTitle: "Proyecto Final",
        duration: "20-25 horas",
        level: "Proyecto",
        completed: false,
        objective:
          "Desarrollar una API REST enterprise completa integrando todos los conceptos: seguridad, persistencia, testing y deployment",
        description:
          "Proyecto integrador que combina todos los módulos en una aplicación real: API de gestión de tareas enterprise con autenticación, base de datos, testing completo y deployment.",
        sections: [
          {
            title: "🏗️ Arquitectura y Setup del Proyecto",
            duration: "4 horas",
            topics: [
              "Domain-driven design setup",
              "Multi-module Maven project",
              "Database design y migrations",
              "Security architecture planning",
              "API documentation con OpenAPI",
            ],
          },
          {
            title: "🔐 Implementación Core: Seguridad y Usuarios",
            duration: "6 horas",
            topics: [
              "User management system",
              "JWT authentication completo",
              "Role-based authorization",
              "Password policies",
              "Audit logging",
            ],
          },
          {
            title: "💼 Business Logic y APIs",
            duration: "6 horas",
            topics: [
              "Task management endpoints",
              "Team collaboration features",
              "File upload y management",
              "Notification system",
              "API versioning",
            ],
          },
          {
            title: "🧪 Testing Completo y Deployment",
            duration: "6 horas",
            topics: [
              "Unit tests para todos los servicios",
              "Integration tests con TestContainers",
              "E2E API testing",
              "Performance testing básico",
              "Docker deployment completo",
            ],
          },
          {
            title: "📊 Monitoring y Documentación",
            duration: "3 horas",
            topics: [
              "Actuator endpoints customizados",
              "Swagger/OpenAPI documentation",
              "README y deployment guide",
              "Performance metrics",
              "Production checklist",
            ],
          },
        ],
        resources: [
          {
            title: "🚀 Starter Template Completo",
            type: "template",
            url: "#",
          },
          {
            title: "� Project Requirements Document",
            type: "specification",
            url: "#",
          },
          {
            title: "✅ Production Deployment Checklist",
            type: "checklist",
            url: "#",
          },
        ],
      },
    ],

    references: [
      {
        category: "📚 Documentación Oficial",
        items: [
          {
            title: "Oracle Java Documentation",
            description: "Documentación oficial de Java",
            url: "https://docs.oracle.com/en/java/",
            type: "documentation",
          },
          {
            title: "Spring Boot Reference",
            description: "Guía completa de Spring Boot",
            url: "https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/",
            type: "documentation",
          },
          {
            title: "Spring Framework Documentation",
            description: "Documentación del ecosistema Spring",
            url: "https://docs.spring.io/spring-framework/docs/current/reference/html/",
            type: "documentation",
          },
        ],
      },
      {
        category: "🛠️ Herramientas y IDEs",
        items: [
          {
            title: "IntelliJ IDEA",
            description: "IDE premium para Java (Community Edition gratuita)",
            url: "https://www.jetbrains.com/idea/",
            type: "tool",
          },
          {
            title: "Eclipse IDE",
            description: "IDE gratuito y open source para Java",
            url: "https://www.eclipse.org/",
            type: "tool",
          },
          {
            title: "VS Code Extension Pack for Java",
            description: "Extensiones de Java para VS Code",
            url: "https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack",
            type: "tool",
          },
          {
            title: "Maven",
            description: "Herramienta de build y gestión de dependencias",
            url: "https://maven.apache.org/",
            type: "tool",
          },
          {
            title: "Gradle",
            description: "Build tool moderno para proyectos Java",
            url: "https://gradle.org/",
            type: "tool",
          },
        ],
      },
      {
        category: "📖 Tutoriales y Guías",
        items: [
          {
            title: "Baeldung",
            description: "Tutoriales premium de Java y Spring",
            url: "https://www.baeldung.com/",
            type: "tutorial",
          },
          {
            title: "Spring.io Guides",
            description: "Guías oficiales paso a paso",
            url: "https://spring.io/guides",
            type: "tutorial",
          },
          {
            title: "Java Code Geeks",
            description: "Artículos y ejemplos de código",
            url: "https://www.javacodegeeks.com/",
            type: "tutorial",
          },
        ],
      },
      {
        category: "🎥 Video Cursos",
        items: [
          {
            title: "Spring Boot Tutorial (YouTube)",
            description: "Canal de Java Brains",
            url: "https://www.youtube.com/c/JavaBrainsChannel",
            type: "video",
          },
          {
            title: "Amigoscode",
            description: "Cursos prácticos de Java y Spring Boot",
            url: "https://amigoscode.com/",
            type: "video",
          },
        ],
      },
      {
        category: "📚 Libros Recomendados",
        items: [
          {
            title: "Effective Java (Joshua Bloch)",
            description: "Best practices y patrones en Java",
            url: "#",
            type: "book",
          },
          {
            title: "Spring Boot in Action",
            description: "Guía práctica de Spring Boot",
            url: "#",
            type: "book",
          },
          {
            title: "Java: The Complete Reference",
            description: "Referencia completa del lenguaje",
            url: "#",
            type: "book",
          },
        ],
      },
      {
        category: "🌐 Comunidades",
        items: [
          {
            title: "r/java",
            description: "Comunidad de Java en Reddit",
            url: "https://www.reddit.com/r/java/",
            type: "community",
          },
          {
            title: "Stack Overflow",
            description: "Q&A técnico sobre Java",
            url: "https://stackoverflow.com/questions/tagged/java",
            type: "community",
          },
          {
            title: "Java Discord",
            description: "Servidor de Discord para desarrolladores Java",
            url: "https://discord.gg/java",
            type: "community",
          },
        ],
      },
    ],

    aiPrompts: [
      {
        title: "🏗️ Generador de Proyecto Spring Boot",
        category: "setup",
        prompt: `Genera la estructura completa de un proyecto Spring Boot con las siguientes características:

**Contexto:** Soy desarrollador Node.js migrando a Java/Spring Boot

**Requerimientos del proyecto:**
- [Describir funcionalidad: ej. API REST para gestión de usuarios]
- [Base de datos: MySQL/PostgreSQL/MongoDB]
- [Autenticación: JWT/OAuth2/Basic]
- [Testing: Unit + Integration]

**Genera:**
1. Estructura de carpetas Maven/Gradle
2. pom.xml o build.gradle con dependencias
3. application.properties configurado
4. Clases principales (Controller, Service, Repository)
5. DTOs y entidades JPA
6. Configuración de seguridad básica
7. Tests unitarios ejemplo
8. Dockerfile para containerización

**Comparaciones:**
- Mapea conceptos de Express.js a Spring Boot
- Equivalencias de middleware a filtros
- ORM: Mongoose/Prisma vs JPA/Hibernate`,
        usage: "Ideal para iniciar proyectos nuevos con configuración completa",
      },
      {
        title: "🔄 Conversor Node.js → Java",
        category: "migration",
        prompt: `Convierte este código Node.js/Express a Java/Spring Boot:

**Código Node.js:**
\`\`\`javascript
[Pegar código de Express/Node.js aquí]
\`\`\`

**Genera el equivalente en Java/Spring Boot:**
1. Controller con endpoints REST
2. Service layer con lógica de negocio
3. Repository pattern para datos
4. DTOs para request/response
5. Manejo de errores y validaciones
6. Tests unitarios
7. Configuración de dependencias

**Explica las diferencias:**
- Async/await vs CompletableFuture
- Middleware vs Interceptors/Filters
- npm packages vs Maven dependencies
- Estructuras de datos equivalentes

**Optimizaciones Java:**
- Uso de Streams
- Patrones Spring específicos
- Best practices de performance`,
        usage: "Para migrar código existente de Node.js a Java",
      },
      {
        title: "🗄️ Diseñador de Esquema JPA",
        category: "database",
        prompt: `Diseña el esquema de base de datos JPA para esta aplicación:

**Descripción del dominio:**
[Describir entidades y relaciones del negocio]

**Requerimientos:**
- Entidades principales y sus atributos
- Relaciones (OneToMany, ManyToMany, etc.)
- Validaciones y constraints
- Índices para performance
- Audit trail (created_at, updated_at)

**Genera:**
1. Clases @Entity con anotaciones JPA
2. Repositorios Spring Data JPA
3. DTOs para transferencia de datos
4. Mappers entre Entity y DTO
5. Scripts de migración Flyway/Liquibase
6. Queries personalizadas optimizadas
7. Tests de repositorio

**Comparación con Node.js:**
- Mongoose Schema vs JPA Entity
- Populate vs JOIN FETCH
- Agregaciones vs JPQL/Criteria API`,
        usage: "Para diseñar la capa de persistencia completa",
      },
      {
        title: "🔐 Configurador de Spring Security",
        category: "security",
        prompt: `Configura Spring Security para esta aplicación:

**Requerimientos de seguridad:**
- [Tipo de auth: JWT/OAuth2/Session]
- [Roles y permisos necesarios]
- [Endpoints públicos vs protegidos]
- [Integración con redes sociales]

**Genera:**
1. SecurityConfig con configuración completa
2. JwtTokenProvider y validación
3. UserDetailsService custom
4. Filters y authentication handlers
5. CORS y CSRF configuration
6. Method-level security annotations
7. Integration tests de seguridad

**Equivalencias Node.js:**
- Passport.js strategies vs Authentication providers
- JWT middleware vs JWT filters
- Role-based access vs @PreAuthorize

**Best practices:**
- Password encoding con BCrypt
- Rate limiting
- Security headers`,
        usage: "Para implementar autenticación y autorización robusta",
      },
      {
        title: "🧪 Generador de Tests Completos",
        category: "testing",
        prompt: `Genera una suite de tests completa para esta clase/funcionalidad:

**Código a testear:**
\`\`\`java
[Pegar código Java aquí]
\`\`\`

**Genera tests para:**
1. Unit tests con JUnit 5 y Mockito
2. Integration tests con @SpringBootTest
3. Web layer tests con @WebMvcTest
4. Repository tests con @DataJpaTest
5. Security tests con @WithMockUser
6. Contract tests con Spring Cloud Contract

**Casos de prueba:**
- Happy path scenarios
- Edge cases y error conditions
- Validation testing
- Performance tests básicos

**Configuración:**
- TestContainers para base de datos
- Mock configuration
- Test data builders
- Custom assertions

**Comparación con Node.js:**
- Jest vs JUnit 5
- Supertest vs MockMvc
- Test databases vs TestContainers`,
        usage: "Para crear tests completos y robustos",
      },
      {
        title: "⚡ Optimizador de Performance",
        category: "optimization",
        prompt: `Analiza y optimiza este código Java/Spring Boot:

**Código actual:**
\`\`\`java
[Pegar código a optimizar]
\`\`\`

**Analiza:**
1. N+1 query problems
2. Lazy loading issues
3. Memory leaks potenciales
4. CPU bottlenecks
5. Database query performance
6. Caching opportunities

**Optimizaciones:**
1. Query optimization con JPQL/Criteria
2. Caching con Redis/EhCache
3. Async processing con @Async
4. Connection pooling tuning
5. JVM tuning parameters
6. Profiling con Micrometer

**Métricas:**
- Response time improvements
- Memory usage reduction
- Database query analysis
- Throughput optimization

**Comparación Node.js:**
- V8 optimization vs JVM optimization
- Event loop vs Thread pools
- npm packages vs Java libraries`,
        usage: "Para optimizar performance de aplicaciones existentes",
      },
      {
        title: "🏗️ Arquitecto de Microservicios",
        category: "architecture",
        prompt: `Diseña la arquitectura de microservicios para esta aplicación:

**Dominio de negocio:**
[Describir funcionalidades y contextos bounded]

**Requerimientos:**
- Número de servicios estimado
- Comunicación síncrona vs asíncrona
- Datos compartidos vs separados
- Patrones de resilencia
- Observabilidad y monitoring

**Genera:**
1. Diagrama de arquitectura
2. Spring Cloud configuration
3. API Gateway setup (Zuul/Gateway)
4. Service Discovery (Eureka/Consul)
5. Circuit Breaker (Hystrix/Resilience4j)
6. Config Server setup
7. Message brokers (RabbitMQ/Kafka)
8. Distributed tracing (Zipkin/Jaeger)

**Estrategia de deployment:**
- Docker containers
- Kubernetes manifests
- Helm charts
- CI/CD pipelines

**Comparación Node.js:**
- Express microservices vs Spring Boot
- npm workspaces vs Maven multi-module
- Node.js clustering vs Spring Cloud`,
        usage: "Para diseñar arquitecturas escalables y resilientes",
      },
      {
        title: "🐳 DevOps Configurator",
        category: "devops",
        prompt: `Configura el pipeline DevOps completo para esta aplicación Java:

**Aplicación:**
[Describir tipo de app y requerimientos de deploy]

**Tecnologías target:**
- [Cloud provider: AWS/Azure/GCP]
- [Container orchestration: Docker/Kubernetes]
- [CI/CD: GitHub Actions/Jenkins/GitLab]
- [Monitoring: Prometheus/Grafana]

**Genera:**
1. Dockerfile optimizado para Java
2. docker-compose para desarrollo
3. Kubernetes manifests (deployment, service, ingress)
4. GitHub Actions workflow
5. Helm charts para diferentes entornos
6. Prometheus metrics configuration
7. Grafana dashboards
8. Health checks y readiness probes

**Pipeline stages:**
- Build con Maven/Gradle
- Tests automatizados
- Security scanning
- Image building y registry push
- Deployment automatizado
- Smoke tests post-deploy

**Comparación Node.js:**
- npm scripts vs Maven goals
- Node.js base images vs OpenJDK images
- PM2 vs Spring Boot actuator`,
        usage: "Para automatizar build, test y deployment",
      },
    ],

    projectTasks: [
      { name: "📋 Configurar entorno de desarrollo Java", completed: false },
      { name: "☕ Instalar JDK 17+ y configurar JAVA_HOME", completed: false },
      { name: "🛠️ Configurar IDE (IntelliJ/Eclipse/VS Code)", completed: false },
      { name: "📦 Crear proyecto Spring Boot con Spring Initializr", completed: false },
      { name: "🏗️ Configurar estructura Maven/Gradle", completed: false },
      { name: "🗄️ Configurar base de datos (H2/MySQL/PostgreSQL)", completed: false },
      { name: "🌐 Crear primera API REST", completed: false },
      { name: "📊 Implementar entidades JPA", completed: false },
      { name: "🔧 Configurar repositorios Spring Data", completed: false },
      { name: "🎯 Implementar services y lógica de negocio", completed: false },
      { name: "✅ Añadir validaciones con Bean Validation", completed: false },
      { name: "🛡️ Configurar Spring Security básico", completed: false },
      { name: "🔐 Implementar autenticación JWT", completed: false },
      { name: "🧪 Escribir tests unitarios con JUnit 5", completed: false },
      { name: "🔄 Crear tests de integración", completed: false },
      { name: "📋 Documentar API con Swagger/OpenAPI", completed: false },
      { name: "🐳 Crear Dockerfile para la aplicación", completed: false },
      { name: "🚀 Configurar CI/CD con GitHub Actions", completed: false },
      { name: "☁️ Deploy en cloud (AWS/Azure/Heroku)", completed: false },
      { name: "📊 Configurar monitoring y logs", completed: false },
      // === TAREAS AVANZADAS ===
      { name: "🏗️ Implementar patrón Repository custom", completed: false },
      { name: "🔄 Configurar caching con Redis", completed: false },
      { name: "📡 Implementar WebSockets con STOMP", completed: false },
      { name: "🌐 Crear cliente Feign para APIs externas", completed: false },
      { name: "⚡ Configurar async processing", completed: false },
      { name: "🧪 Implementar TestContainers", completed: false },
      { name: "📈 Configurar métricas con Micrometer", completed: false },
      { name: "🔍 Implementar full-text search", completed: false },
      { name: "📊 Configurar audit con JPA Auditing", completed: false },
      { name: "🛡️ Implementar rate limiting", completed: false },
    ],

    init() {
      this.loadProgress();
      this.loadDarkMode();
      // Auto-save progress every 30 seconds
      setInterval(() => this.saveProgress(), 30000);
    },

    get currentModule() {
      return this.modules[this.selectedModule];
    },

    selectModule(index) {
      this.selectedModule = index;
    },

    toggleModuleComplete(index) {
      this.modules[index].completed = !this.modules[index].completed;
      this.saveProgress();
    },

    calculateProgress() {
      const completedModules = this.getCompletedModules().length;
      const totalModules = this.modules.length;
      return (completedModules / totalModules) * 88; // 88 is circumference for progress ring
    },

    getCompletedModules() {
      return this.modules.filter((module) => module.completed);
    },

    copyToClipboard(text) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          // Show temporary feedback
          const button = event.target;
          const originalText = button.textContent;
          button.textContent = "✓ Copiado!";
          button.classList.add("bg-green-600");

          setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove("bg-green-600");
          }, 2000);
        })
        .catch(() => {
          // Fallback for older browsers
          const textArea = document.createElement("textarea");
          textArea.value = text;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
        });
    },

    saveProgress() {
      const progressData = {
        modules: this.modules.map((module) => ({
          title: module.title,
          completed: module.completed,
        })),
        projectTasks: this.projectTasks,
        lastUpdated: new Date().toISOString(),
      };
      localStorage.setItem("java-course-progress", JSON.stringify(progressData));
    },

    loadProgress() {
      const saved = localStorage.getItem("java-course-progress");
      if (saved) {
        const progressData = JSON.parse(saved);

        // Update module completion status
        if (progressData.modules) {
          progressData.modules.forEach((savedModule, index) => {
            if (this.modules[index] && savedModule.title === this.modules[index].title) {
              this.modules[index].completed = savedModule.completed;
            }
          });
        }

        // Update project tasks
        if (progressData.projectTasks) {
          progressData.projectTasks.forEach((savedTask, index) => {
            if (this.projectTasks[index]) {
              this.projectTasks[index].completed = savedTask.completed;
            }
          });
        }
      }
    },

    resetAllProgress() {
      if (confirm("¿Estás seguro de que quieres reiniciar todo el progreso? Esta acción no se puede deshacer.")) {
        // Resetear todos los módulos
        this.modules.forEach((module) => {
          module.completed = false;
        });

        // Resetear todas las tareas del proyecto
        this.projectTasks.forEach((task) => {
          task.completed = false;
        });

        // Limpiar el localStorage
        localStorage.removeItem("java-course-progress");

        alert("¡Progreso reiniciado exitosamente!");
      }
    },

    resetModuleProgress(moduleIndex) {
      if (confirm(`¿Estás seguro de que quieres reiniciar el progreso del ${this.modules[moduleIndex].title}?`)) {
        this.modules[moduleIndex].completed = false;
        this.saveProgress();
        alert(`Progreso del ${this.modules[moduleIndex].title} reiniciado exitosamente!`);
      }
    },

    exportProgress() {
      const progressData = {
        course: "Java Spring Boot para Desarrolladores Backend",
        completedModules: this.getCompletedModules().map((m) => m.title),
        completedTasks: this.projectTasks.filter((t) => t.completed).map((t) => t.name),
        progressPercentage: Math.round((this.calculateProgress() * 100) / 88),
        exportDate: new Date().toISOString(),
      };

      const blob = new Blob([JSON.stringify(progressData, null, 2)], {
        type: "application/json",
      });

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "java-course-progress.json";
      a.click();
      URL.revokeObjectURL(url);
    },

    // Dark Mode Functions
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      this.saveDarkMode();
    },

    loadDarkMode() {
      const saved = localStorage.getItem("java-course-dark-mode");
      if (saved) {
        this.darkMode = JSON.parse(saved);
      } else {
        // Check system preference
        this.darkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
    },

    saveDarkMode() {
      localStorage.setItem("java-course-dark-mode", JSON.stringify(this.darkMode));
    },
  };
}
