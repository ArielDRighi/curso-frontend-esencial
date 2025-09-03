function courseApp() {
  return {
    currentView: "dashboard",
    selectedModule: 0,
    darkMode: false,

    modules: [
      {
        id: 1,
        title: "🏗️ Fundamentos de Java",
        duration: "4-6 horas",
        level: "Básico",
        completed: false,
        description: "Sintaxis básica, variables, operadores y control de flujo en Java",
        topics: [
          "Sintaxis básica de Java vs Node.js",
          "Tipos de datos y variables",
          "Operadores y expresiones",
          "Estructuras de control",
          "Métodos y funciones",
          "Clases y objetos básicos",
        ],
        videoUrl: "#",
        resources: [
          {
            title: "📄 Comparativa Java vs JavaScript",
            type: "guide",
            url: "#",
          },
          {
            title: "🔧 Configurando entorno Java",
            type: "tutorial",
            url: "#",
          },
          {
            title: "💻 Ejercicios prácticos",
            type: "exercise",
            url: "#",
          },
        ],
      },
      {
        id: 2,
        title: "📦 Programación Orientada a Objetos",
        duration: "6-8 horas",
        level: "Intermedio",
        completed: false,
        description: "POO en Java: herencia, polimorfismo, encapsulación y abstracción",
        topics: [
          "Clases y objetos avanzados",
          "Herencia y polimorfismo",
          "Encapsulación y modificadores",
          "Interfaces y clases abstractas",
          "Composición vs Herencia",
          "Patterns básicos",
        ],
        videoUrl: "#",
        resources: [
          {
            title: "📚 Guía de POO en Java",
            type: "guide",
            url: "#",
          },
          {
            title: "🎯 Patterns fundamentales",
            type: "pattern",
            url: "#",
          },
        ],
      },
      {
        id: 3,
        title: "🗃️ Colecciones y Estructuras de Datos",
        duration: "5-7 horas",
        level: "Intermedio",
        completed: false,
        description: "ArrayList, HashMap, Sets y manejo eficiente de datos",
        topics: [
          "Arrays vs Collections",
          "ArrayList y LinkedList",
          "HashMap y TreeMap",
          "Sets y operaciones",
          "Streams y programación funcional",
          "Comparadores y ordenación",
        ],
        videoUrl: "#",
        resources: [
          {
            title: "📊 Guía de Collections",
            type: "guide",
            url: "#",
          },
          {
            title: "⚡ Performance de Collections",
            type: "optimization",
            url: "#",
          },
        ],
      },
      {
        id: 4,
        title: "🏗️ Introducción a Spring Boot",
        duration: "6-8 horas",
        level: "Intermedio",
        completed: false,
        description: "Framework Spring Boot para desarrollo web y APIs REST",
        topics: [
          "¿Qué es Spring Boot?",
          "Configuración inicial",
          "Dependency Injection",
          "Spring Boot vs Express.js",
          "Auto-configuración",
          "Profiles y propiedades",
        ],
        videoUrl: "#",
        resources: [
          {
            title: "🚀 Spring Boot Starter Guide",
            type: "guide",
            url: "#",
          },
          {
            title: "⚙️ Configuración avanzada",
            type: "tutorial",
            url: "#",
          },
        ],
      },
      {
        id: 5,
        title: "🌐 APIs REST con Spring Boot",
        duration: "8-10 horas",
        level: "Intermedio-Avanzado",
        completed: false,
        description: "Desarrollo de APIs REST robustas y escalables",
        topics: [
          "Controllers y RequestMapping",
          "PathVariables y RequestParams",
          "RequestBody y ResponseEntity",
          "Validación de datos",
          "Manejo de errores",
          "Documentación con Swagger",
        ],
        videoUrl: "#",
        resources: [
          {
            title: "🛠️ REST API Best Practices",
            type: "guide",
            url: "#",
          },
          {
            title: "📋 OpenAPI/Swagger",
            type: "documentation",
            url: "#",
          },
        ],
      },
      {
        id: 6,
        title: "🗄️ Bases de Datos con JPA/Hibernate",
        duration: "8-12 horas",
        level: "Avanzado",
        completed: false,
        description: "ORM con JPA/Hibernate para persistencia de datos",
        topics: [
          "JPA vs Mongoose/Prisma",
          "Entities y mapeo",
          "Repositories y consultas",
          "Relaciones entre entidades",
          "Transacciones",
          "Optimización de consultas",
        ],
        videoUrl: "#",
        resources: [
          {
            title: "🏗️ JPA/Hibernate Guide",
            type: "guide",
            url: "#",
          },
          {
            title: "⚡ Query Optimization",
            type: "optimization",
            url: "#",
          },
        ],
      },
      {
        id: 7,
        title: "🔐 Seguridad con Spring Security",
        duration: "6-8 horas",
        level: "Avanzado",
        completed: false,
        description: "Autenticación, autorización y seguridad en APIs",
        topics: [
          "Spring Security vs Passport.js",
          "Autenticación JWT",
          "Autorización basada en roles",
          "CORS y CSRF",
          "OAuth2 y social login",
          "Security best practices",
        ],
        videoUrl: "#",
        resources: [
          {
            title: "🔒 Spring Security Guide",
            type: "guide",
            url: "#",
          },
          {
            title: "🛡️ Security Patterns",
            type: "pattern",
            url: "#",
          },
        ],
      },
      {
        id: 8,
        title: "🧪 Testing en Java/Spring Boot",
        duration: "6-8 horas",
        level: "Avanzado",
        completed: false,
        description: "Unit tests, integration tests y testing strategies",
        topics: [
          "JUnit vs Jest",
          "Mockito para mocking",
          "Tests de integración",
          "TestContainers",
          "Testing de APIs REST",
          "Coverage y reports",
        ],
        videoUrl: "#",
        resources: [
          {
            title: "🧪 Testing Guide",
            type: "guide",
            url: "#",
          },
          {
            title: "📊 Test Strategies",
            type: "strategy",
            url: "#",
          },
        ],
      },
      {
        id: 9,
        title: "📊 Microservicios y Arquitectura",
        duration: "8-10 horas",
        level: "Avanzado",
        completed: false,
        description: "Arquitectura de microservicios con Spring Cloud",
        topics: [
          "Monolito vs Microservicios",
          "Spring Cloud ecosystem",
          "Service Discovery",
          "API Gateway",
          "Circuit Breaker",
          "Distributed tracing",
        ],
        videoUrl: "#",
        resources: [
          {
            title: "🏗️ Microservices Guide",
            type: "guide",
            url: "#",
          },
          {
            title: "📐 Architecture Patterns",
            type: "pattern",
            url: "#",
          },
        ],
      },
      {
        id: 10,
        title: "🚀 Deploy y DevOps",
        duration: "6-8 horas",
        level: "Avanzado",
        completed: false,
        description: "Containerización, CI/CD y deployment en cloud",
        topics: [
          "Docker para Java apps",
          "Kubernetes basics",
          "CI/CD con GitHub Actions",
          "Deploy en AWS/Azure",
          "Monitoring y logs",
          "Performance tuning",
        ],
        videoUrl: "#",
        resources: [
          {
            title: "🐳 Docker Guide",
            type: "guide",
            url: "#",
          },
          {
            title: "☁️ Cloud Deployment",
            type: "tutorial",
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
