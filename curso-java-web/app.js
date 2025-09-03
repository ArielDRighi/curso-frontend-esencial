function courseApp() {
  return {
    currentView: "dashboard",
    selectedModule: 0,
    darkMode: false,
    referenceTab: "📚 Documentación Oficial",

    modules: [
      {
        id: 0,
        emoji: "🧠",
        title: "Módulo 0: Mindset Java para Desarrolladores Backend",
        shortTitle: "Mindset Java",
        duration: "3.5-4 horas",
        level: "Conceptual",
        completed: false,
        objective:
          "Preparar mentalmente para la transición del mundo ágil y flexible de Node.js al ecosistema estructurado y convencional de Java Enterprise",
        description:
          "Comprende las diferencias fundamentales entre JavaScript y Java: paradigma compilado vs interpretado, tipado fuerte, convenciones Spring Boot, Maven, Virtual Threads y el poder del IDE.",
        sections: [
          {
            title: "⚡ Compilado vs Interpretado: Más que Velocidad",
            duration: "45 min",
            expanded: false,
            content: `
## 🔄 El Cambio de Paradigma

**En Node.js:**
\`\`\`bash
# Escribes código, lo ejecutas inmediatamente
echo "console.log('Hello')" > app.js
node app.js  # Ejecuta directamente
\`\`\`

**En Java:**
\`\`\`bash
# Escribes código, lo compilas, luego lo ejecutas
echo "public class App { public static void main(String[] args) { System.out.println(\\"Hello\\"); } }" > App.java
javac App.java  # Compila a bytecode
java App        # Ejecuta el bytecode en la JVM
\`\`\`

## 🎯 Ventajas Prácticas del Compilado

### 1. El Compilador es tu Primer QA:

\`\`\`java
// Error detectado ANTES de ejecutar
String nombre = "Juan";
int edad = nombre;  // ❌ Error de compilación: Cannot convert String to int
\`\`\`

\`\`\`javascript
// Error detectado DURANTE la ejecución
const nombre = "Juan";
const edad = nombre; // ✅ Compila, 💥 Runtime error después
\`\`\`

### 2. Optimizaciones Avanzadas:

- **JIT Compilation:** El código se optimiza mientras corre
- **HotSpot VM:** Detecta "hot paths" y los optimiza agresivamente
- **Escape Analysis:** Optimiza allocations de memoria automáticamente

### 3. Tooling Robusto:

- **IDE Integration:** IntelliJ IDEA entiende tu código a nivel de compilador
- **Refactoring Seguro:** Cambiar nombres de métodos en 500 archivos sin miedo
- **Static Analysis:** Detectar bugs antes del runtime
            `,
            topics: [
              "El compilador como primer QA",
              "Optimizaciones JIT y HotSpot VM",
              "Tooling y análisis estático",
              "Bytecode vs JavaScript runtime",
            ],
          },
          {
            title: "💪 La Tiranía (Bendita) del Tipado Fuerte",
            duration: "30 min",
            expanded: false,
            content: `
## 🔄 Más Allá de TypeScript

**TypeScript (Opcional y Borrable):**
\`\`\`typescript
interface User {
  name: string;
  age: number;
}

const user: User = { name: "Juan", age: "30" }; // ❌ Error de TS, pero compila a JS
// En runtime: { name: "Juan", age: "30" } - El tipo se "borra"
\`\`\`

**Java (Obligatorio y Runtime):**
\`\`\`java
public class User {
    private String name;
    private int age;  // DEBE ser int, no hay escape

    public User(String name, int age) {
        this.name = name;
        this.age = age;  // Si pasas String aquí, ni compila
    }
}
\`\`\`

## 🎯 Beneficios del Tipado Runtime

### 1. APIs Autodocumentadas:
\`\`\`java
// No necesitas documentación extra, el tipo LO ES TODO
public List<OrderDTO> getOrdersByUserId(Long userId,
                                       Pageable pageable,
                                       Optional<OrderStatus> status) {
    // El compilador garantiza que devuelvas List<OrderDTO>
}
\`\`\`

### 2. Refactoring Masivo Seguro:
\`\`\`java
// Cambiar getAge() → getBirthYear() en 200 archivos
// IntelliJ lo hace en segundos, garantizando zero errores
\`\`\`

### 3. Serialización Robusta:
\`\`\`java
// Jackson sabe EXACTAMENTE qué esperar
@Entity
public class Product {
    private Long id;
    private String name;
    private BigDecimal price;  // Nunca será null/undefined por error
}
\`\`\`
            `,
            topics: [
              "TypeScript vs Java: opcional vs obligatorio",
              "APIs autodocumentadas",
              "Refactoring masivo seguro",
              "Serialización robusta",
            ],
          },
          {
            title: "� El IDE como Universo Central",
            duration: "45 min",
            expanded: false,
            content: `
## 🔄 Cambio de Herramientas

**En Node.js (VS Code es suficiente):**
- Editor de texto inteligente
- Terminal integrada
- Extensions para frameworks

**En Java (IntelliJ IDEA es el estándar):**
- **Build Management:** Maneja Maven/Gradle
- **Database Integration:** Conecta y consulta DBs directamente
- **Debugging Avanzado:** Step debugging, expression evaluation
- **Code Generation:** Genera getters/setters, constructores, tests
- **Refactoring Engine:** Extract method, inline variable, move class
- **Spring Integration:** Navegación entre beans, dependency injection visualization

## � Ejemplos de Poder del IDE

### 1. Navegación Inteligente:
\`\`\`java
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;  // Ctrl+Click va directo al repo

    public User findById(Long id) {
        return userRepository.findById(id);  // IntelliJ sabe que devuelve Optional<User>
    }
}
\`\`\`

### 2. Generación Automática:
\`\`\`java
// Escribes solo esto:
public class Product {
    private String name;
    private BigDecimal price;
}

// Alt+Insert genera automáticamente:
// - Constructor
// - Getters/Setters
// - equals() y hashCode()
// - toString()
// - Builder pattern
\`\`\`

### 3. Testing Integrado:
\`\`\`java
// Right-click en cualquier método → "Generate Test"
// IntelliJ crea automáticamente:
@Test
void shouldFindUserById() {
    // Given
    Long userId = 1L;

    // When
    User result = userService.findById(userId);

    // Then
    assertThat(result).isNotNull();
}
\`\`\`
            `,
            topics: [
              "VS Code vs IntelliJ IDEA",
              "Build management integrado",
              "Navegación inteligente de código",
              "Generación automática de código",
              "Testing integrado",
            ],
          },
          {
            title: "📐 Convención sobre Configuración",
            duration: "30 min",
            expanded: false,
            content: `
## 🔄 El Cambio Filosófico

**Node.js/Express (Configuración Explícita):**
\`\`\`javascript
const express = require("express");
const app = express();

// TÚ decides todo
app.use(express.json()); // Parser JSON manual
app.use(cors()); // CORS manual
app.use("/api/users", userRoutes); // Routing manual
app.use(errorHandler); // Error handling manual

app.listen(3000, () => {
  // Puerto manual
  console.log("Server running on 3000");
});
\`\`\`

**Spring Boot (Convención Inteligente):**
\`\`\`java
@SpringBootApplication  // ¡Una línea hace MAGIA controlada!
public class EcommerceApplication {
    public static void main(String[] args) {
        SpringBootApplication.run(EcommerceApplication.class, args);
    }
}

// Spring Boot automáticamente:
// ✅ Configura servidor (Puerto 8080 por defecto, configurable)
// ✅ Escanea @Controller, @Service, @Repository
// ✅ Configura JSON parsing
// ✅ Configura error handling básico
// ✅ Configura logging con Logback
// ✅ Configura metrics con Actuator (si está en classpath)
\`\`\`

## 🎯 La "Magia" es Predecible

### 1. Nomenclatura Importa:
\`\`\`java
// Spring Boot BUSCA automáticamente:
application.properties     // Configuración principal
application-dev.properties // Configuración de desarrollo
application-prod.properties // Configuración de producción

@Controller                 // En package *.controller
@Service                    // En package *.service
@Repository                 // En package *.repository
\`\`\`

### 2. Dependencies Definen Comportamiento:
\`\`\`xml
<!-- Agregar en pom.xml automáticamente configura: -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <!-- ✅ Tomcat server, ✅ JSON parsing, ✅ Error handling -->
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
    <!-- ✅ Hibernate, ✅ Connection pooling, ✅ Transaction management -->
</dependency>
\`\`\`

### 3. Configuración por Excepción:
\`\`\`java
// Solo configuras lo que es DIFERENTE de lo convencional
@Configuration
public class CustomConfig {

    @Bean
    @Primary  // Solo cuando necesitas override del comportamiento por defecto
    public ObjectMapper customObjectMapper() {
        return new ObjectMapper()
            .configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);
    }
}
\`\`\`
            `,
            topics: [
              "Configuración explícita vs implícita",
              "Auto-configuración Spring Boot",
              "Nomenclatura y convenciones",
              "Dependencies que definen comportamiento",
            ],
          },
          {
            title: "📦 El Ciclo de Vida de Maven: Más que npm scripts",
            duration: "30 min",
            expanded: false,
            content: `
## 🔄 npm scripts vs Maven Phases

**Node.js (npm scripts - Simples y Flexibles):**
\`\`\`json
{
  "scripts": {
    "dev": "nodemon app.js",
    "build": "tsc",
    "test": "jest",
    "start": "node dist/app.js"
  }
}
\`\`\`

**Maven (Fases Estándar del Ciclo de Vida):**
\`\`\`bash
mvn clean       # Limpia target/ (como rm -rf dist/)
mvn compile     # Compila source code a bytecode
mvn test        # Ejecuta unit tests (fase que incluye compile)
mvn package     # Crea JAR/WAR (incluye compile + test)
mvn install     # Instala en repositorio local (~/.m2/)
mvn deploy      # Sube a repositorio remoto (Nexus/Artifactory)
\`\`\`

## 🎯 Ventajas del Ciclo Formal

### 1. Reproducibilidad Garantizada:
\`\`\`bash
# En cualquier máquina del mundo:
git clone https://github.com/company/ecommerce-api.git
cd ecommerce-api
mvn clean package  # SIEMPRE produce el mismo resultado

# vs Node.js:
npm install  # Puede diferir según npm version, node version, OS
\`\`\`

### 2. Dependency Management Robusto:
\`\`\`xml
<!-- Maven resuelve conflictos automáticamente -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <version>3.1.0</version>
    <!-- Trae automáticamente 40+ dependencies compatibles -->
</dependency>
\`\`\`

### 3. Multi-module Projects:
\`\`\`
ecommerce-parent/
├── user-service/     # mvn package solo user-service
├── product-service/  # mvn package solo product-service
├── order-service/    # mvn package solo order-service
└── pom.xml          # mvn package desde aquí construye TODO
\`\`\`
            `,
            topics: [
              "npm scripts vs Maven phases",
              "Reproducibilidad garantizada",
              "Dependency management robusto",
              "Multi-module projects",
            ],
          },
          {
            title: "🧵 Virtual Threads: La Respuesta a Node.js Event Loop",
            duration: "45 min",
            expanded: false,
            content: `
## 🔄 Concurrencia: Event Loop vs Virtual Threads

**Node.js (Event Loop - Asíncrono):**
\`\`\`javascript
// 10,000 requests concurrentes
const server = http.createServer(async (req, res) => {
  const data = await fetch("http://slow-api.com/data"); // No bloquea el thread
  const result = await processData(data); // Event loop sigue libre
  res.json(result);
});

// ✅ Ventaja: Un solo thread maneja todo
// ❌ Desventaja: Callback hell, debugging complejo
\`\`\`

**Java Tradicional (Platform Threads - Bloqueante):**
\`\`\`java
// PROBLEMÁTICO: 1 request = 1 OS thread
@RestController
public class DataController {

    @GetMapping("/data")
    public ResponseEntity<String> getData() {
        String data = restTemplate.getForObject("http://slow-api.com/data", String.class);  // BLOQUEA el thread
        String result = processData(data);                                                   // Thread sigue bloqueado
        return ResponseEntity.ok(result);
    }
}

// ❌ Limitado a ~200-1000 concurrent requests (OS thread limit)
// ✅ Código simple imperativo, debugging fácil
\`\`\`

**Java 21 (Virtual Threads - Lo mejor de ambos mundos):**
\`\`\`java
@RestController
public class DataController {

    @GetMapping("/data")
    public ResponseEntity<String> getData() {
        String data = restTemplate.getForObject("http://slow-api.com/data", String.class);  // LOOKS blocking, but isn't
        String result = processData(data);                                                   // Virtual thread magic
        return ResponseEntity.ok(result);
    }
}

// ✅ 100,000+ concurrent requests
// ✅ Código simple imperativo, debugging fácil
// ✅ Sin callback hell, sin async/await complexity
\`\`\`

## ⚙️ Configuración de Virtual Threads en Spring Boot:
\`\`\`java
// application.properties
spring.threads.virtual.enabled=true
\`\`\`
            `,
            topics: [
              "Event Loop vs Virtual Threads",
              "Platform threads vs Virtual threads",
              "Configuración en Spring Boot",
              "Ventajas sobre Node.js async/await",
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
        title: "Módulo 1: Fundamentos de Java para Desarrolladores Experimentados",
        shortTitle: "Java Fundamentals",
        duration: "10-12 horas",
        level: "Fundamental",
        completed: false,
        objective:
          "Transición efectiva de JavaScript/TypeScript a Java, enfocándose en diferencias clave y ventajas del ecosistema Java para desarrollo backend enterprise",
        description:
          "Comprende Java como lenguaje compilado y multiplataforma, domina OOP avanzada, Collections Framework y Streams API con comparaciones directas a JavaScript/TypeScript.",
        sections: [
          {
            title: "🔥 Introducción a Java y la JVM",
            duration: "3-4 horas",
            expanded: false,
            content: `
## 📖 Concepto

Comprende Java como lenguaje **compilado y multiplataforma**, y el rol central de la **JVM (Java Virtual Machine)** como entorno de ejecución robusto para aplicaciones enterprise.

## 🎯 ¿Por qué es importante?

Para desarrolladores Node.js, la **JVM es un cambio fundamental**:

- **Node.js:** Interpretado en runtime por V8 Engine
- **Java:** Compilado a bytecode, ejecutado en JVM optimizada
- **Ventajas JVM:** Gestión avanzada de memoria, multithreading real, optimizaciones en runtime

## 🔄 Comparación Clave: Node.js vs JVM

| **Aspecto**       | **Node.js**                | **Java/JVM**                            |
| ----------------- | -------------------------- | --------------------------------------- |
| **Ejecución**     | Interpretado (V8)          | Compilado (Bytecode)                    |
| **Concurrencia**  | Event Loop (single-thread) | Multithreading nativo + Virtual Threads |
| **Memoria**       | Garbage Collection V8      | GC avanzado (G1, ZGC)                   |
| **Performance**   | Excelente I/O              | Excelente procesamiento                 |
| **Escalabilidad** | Horizontal                 | Vertical + Horizontal                   |

## 🧵 Virtual Threads: El Game Changer de Java 21

**El mayor breakthrough de Java moderna:** Virtual Threads resuelve el principal problema de concurrencia de Java tradicional y compite directamente con el Event Loop de Node.js.

### Node.js (Event Loop):
\`\`\`javascript
// Maneja 10,000 conexiones concurrentes con 1 thread
const server = require("http").createServer(async (req, res) => {
  const userData = await fetchUserFromDB(req.userId); // Non-blocking
  const preferences = await fetchUserPreferences(userData.id); // Non-blocking
  const recommendations = await generateRecommendations(preferences); // Non-blocking

  res.json({ user: userData, recommendations });
});

// ✅ 10,000+ concurrent connections
// ❌ Callback complexity, debugging challenges
\`\`\`

### Java 21 (Virtual Threads - Lo mejor de ambos mundos):
\`\`\`java
@RestController
public class UserController {

    @GetMapping("/user/{id}")
    public UserResponse getUser(@PathVariable Long id) {
        User userData = userService.findById(id);              // LOOKS blocking, but isn't
        Preferences prefs = preferencesService.findByUserId(id); // Virtual thread magic
        List<Recommendation> recs = recommendationService.generate(prefs); // Scales massively

        return new UserResponse(userData, recs);
    }
}

// ✅ 100,000+ concurrent requests
// ✅ Simple imperative code, easy debugging
// ✅ No callback hell, no async/await complexity
\`\`\`

### Configuración de Virtual Threads en Spring Boot:
\`\`\`java
// application.properties
spring.threads.virtual.enabled=true
\`\`\`
            `,
            topics: [
              "Java como lenguaje compilado y multiplataforma",
              "JVM vs V8 Engine: diferencias fundamentales",
              "Virtual Threads vs Event Loop",
              "Gestión avanzada de memoria y GC",
            ],
          },
          {
            title: "⚡ Sintaxis y Programación Orientada a Objetos",
            duration: "4-5 horas",
            expanded: false,
            content: `
## 📖 Concepto

Revisión de sintaxis Java y profundización en **POO avanzada**: clases, herencia, polimorfismo, encapsulamiento, interfaces y clases abstractas.

## 🎯 ¿Por qué es importante?

Aunque conoces TypeScript (que soporta OOP), **Java tiene convenciones específicas**:

- **Interfaces:** Contratos más estrictos que TypeScript
- **Herencia:** Single inheritance + múltiples interfaces
- **Polimorfismo:** Más explícito que en JavaScript
- **Encapsulamiento:** Modificadores de acceso más rigurosos

## 🔄 Comparación: TypeScript vs Java OOP

### TypeScript - Flexibilidad:
\`\`\`typescript
interface User {
  name: string;
  email?: string; // Opcional
}

class AdminUser implements User {
  name: string;
  email: string;

  constructor(name: string, email?: string) {
    this.name = name;
    this.email = email || "";
  }
}
\`\`\`

### Java - Estructura más rígida:
\`\`\`java
public interface User {
    String getName();
    String getEmail();
}

public class AdminUser implements User {
    private final String name;
    private final String email;

    public AdminUser(String name, String email) {
        this.name = name;
        this.email = email != null ? email : "";
    }

    @Override
    public String getName() { return name; }

    @Override
    public String getEmail() { return email; }
}
\`\`\`

## 🏗️ Conceptos Clave de POO en Java

### 1. Herencia y Polimorfismo:
\`\`\`java
public abstract class Employee {
    protected String name;
    protected double baseSalary;
    
    public abstract double calculateSalary();
}

public class Developer extends Employee {
    private int experienceYears;
    
    @Override
    public double calculateSalary() {
        return baseSalary + (experienceYears * 1000);
    }
}

public class Manager extends Employee {
    private int teamSize;
    
    @Override
    public double calculateSalary() {
        return baseSalary + (teamSize * 500);
    }
}
\`\`\`

### 2. Interfaces y Composición:
\`\`\`java
public interface Payable {
    void processPayment(double amount);
}

public class Freelancer implements User, Payable {
    private PaymentMethod paymentMethod;
    
    @Override
    public void processPayment(double amount) {
        paymentMethod.transfer(amount);
    }
}
\`\`\`
            `,
            topics: [
              "Sintaxis Java vs TypeScript",
              "Herencia single vs múltiple",
              "Interfaces más estrictas",
              "Polimorfismo explícito",
              "Modificadores de acceso rigurosos",
            ],
          },
          {
            title: "�️ Colecciones y APIs Modernas de Java",
            duration: "3-4 horas",
            expanded: false,
            content: `
## 📖 Concepto

Dominio de **Collections Framework** (List, Set, Map), **Streams API** para procesamiento funcional, y manejo de I/O básico.

## 🎯 ¿Por qué es importante?

Las colecciones son el equivalente a **arrays y objects en JavaScript**, pero con:

- **Tipado fuerte:** Generics para type safety
- **Performance optimizada:** Diferentes implementaciones según uso
- **Streams API:** Programación funcional similar a map/filter/reduce

## 🔄 Comparación: JavaScript vs Java Collections

### JavaScript - Flexible pero sin tipado:
\`\`\`javascript
const products = [
  { name: "Laptop", price: 1200, category: "tech" },
  { name: "Phone", price: 800, category: "tech" },
  { name: "Book", price: 25, category: "education" },
];

const expensiveProducts = products
  .filter((p) => p.price > 100)
  .map((p) => p.name)
  .sort();
\`\`\`

### Java - Tipado fuerte y expresivo:
\`\`\`java
List<Product> products = Arrays.asList(
    new Product("Laptop", 1200, "tech"),
    new Product("Phone", 800, "tech"),
    new Product("Book", 25, "education")
);

List<String> expensiveProducts = products.stream()
    .filter(p -> p.getPrice() > 100)
    .map(Product::getName)
    .sorted()
    .collect(Collectors.toList());
\`\`\`

## 📚 Collections Framework

### Principales Interfaces:
\`\`\`java
// List - Ordenada, permite duplicados
List<String> names = new ArrayList<>();
List<String> names = new LinkedList<>();

// Set - Sin duplicados
Set<String> uniqueNames = new HashSet<>();
Set<String> sortedNames = new TreeSet<>();

// Map - Key-Value pairs
Map<String, User> userMap = new HashMap<>();
Map<String, User> sortedUserMap = new TreeMap<>();
\`\`\`

### Streams API - Programación Funcional:
\`\`\`java
// Operaciones complejas de manera fluida
Map<String, Double> avgPriceByCategory = products.stream()
    .filter(p -> p.isInStock())
    .collect(Collectors.groupingBy(
        Product::getCategory,
        Collectors.averagingDouble(Product::getPrice)
    ));

// Equivalente a múltiples loops y condiciones
Optional<Product> mostExpensive = products.stream()
    .filter(p -> p.getCategory().equals("tech"))
    .max(Comparator.comparing(Product::getPrice));
\`\`\`

## 🎯 Ventajas del Tipado Fuerte

- **Compile-time safety:** Errores detectados antes de runtime
- **IDE Support:** Autocompletado y refactoring seguro
- **Performance:** Optimizaciones del compilador
- **Documentación viva:** El tipo ES la documentación
            `,
            topics: [
              "Collections Framework: List, Set, Map",
              "Generics para type safety",
              "Streams API vs array methods de JS",
              "Programación funcional en Java",
              "Performance y optimizaciones",
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
        duration: "12-14 horas",
        level: "Fundamental",
        completed: false,
        objective:
          "Comprender el ecosistema Spring y dominar Spring Boot para desarrollo ágil de aplicaciones enterprise, comparando con Express/NestJS",
        description:
          "Domina Spring Framework, IoC, DI y crea tu primer proyecto Spring Boot. Incluye comparaciones detalladas con Express/NestJS y configuración enterprise.",
        sections: [
          {
            title: "🚀 Spring Framework vs Spring Boot",
            duration: "4-5 horas",
            expanded: false,
            content: `
## 📖 Concepto

**Spring Framework** es el ecosistema completo para Java enterprise. **Spring Boot** es una capa que simplifica la creación de aplicaciones "production-ready" con configuración mínima.

## 🎯 ¿Por qué es importante?

Para desarrolladores Node.js/TypeScript, Spring Boot es comparable a:

- **Express:** Minimalista, pero Spring Boot incluye más "out of the box"
- **NestJS:** Estructura opinionada similar, pero Spring Boot es más maduro
- **Fastify:** Performance focus, pero Spring Boot es más enterprise-oriented

## 🔄 Comparación de Ecosistemas

| **Característica** | **Express**     | **NestJS**           | **Spring Boot**                |
| ------------------ | --------------- | -------------------- | ------------------------------ |
| **Filosofía**      | Minimalista     | Opinionado           | Convención sobre configuración |
| **Configuración**  | Manual          | Decoradores          | Auto-configuración             |
| **DI Container**   | No nativo       | Sí (similar Angular) | Sí (maduro)                    |
| **Testing**        | Jest (externo)  | Jest integrado       | JUnit integrado                |
| **ORM**            | TypeORM/Prisma  | TypeORM integrado    | JPA/Hibernate nativo           |
| **Security**       | Passport/custom | Guards/Guards        | Spring Security                |
| **Production**     | PM2/Docker      | Docker               | JAR ejecutable                 |

## 🏗️ Arquitectura Spring Boot

\`\`\`
┌─────────────────────────────────────┐
│           Spring Boot               │
├─────────────────────────────────────┤
│  Auto-Configuration, Starters      │
├─────────────────────────────────────┤
│           Spring Framework          │
├─────────────────────────────────────┤
│  Core, Context, AOP, Data, Security │
├─────────────────────────────────────┤
│               JVM                   │
└─────────────────────────────────────┘
\`\`\`

## 💡 Ventajas Clave de Spring Boot

### 1. Auto-configuración Inteligente:
\`\`\`java
// Solo esto necesitas para una aplicación web completa
@SpringBootApplication
public class MyApp {
    public static void main(String[] args) {
        SpringApplication.run(MyApp.class, args);
    }
}
// Automáticamente configura: servidor, JSON parsing, logging, métricas
\`\`\`

### 2. Starters - Dependency Management Simplificado:
\`\`\`xml
<!-- Una dependency trae todo un stack -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <!-- Incluye: Tomcat, Jackson, Logging, Metrics -->
</dependency>
\`\`\`

### 3. Production Ready Features:
- Health checks automáticos
- Métricas (Actuator)
- Configuración externalizada
- JAR ejecutable
- Logging estructurado
            `,
            topics: [
              "Ecosistema Spring vs Express/NestJS",
              "Auto-configuración vs configuración manual",
              "Starters vs dependencies",
              "Arquitectura Spring Boot",
              "Production ready features",
            ],
          },
          {
            title: "🔄 Inversión de Control (IoC) e Inyección de Dependencias (DI)",
            duration: "4-5 horas",
            expanded: false,
            content: `
## 📖 Concepto

- **IoC:** El framework controla la creación y gestión de objetos
- **DI:** Las dependencias se "inyectan" automáticamente donde se necesitan
- **Beans:** Objetos gestionados por el contenedor de Spring

## 🎯 ¿Por qué es importante?

La DI es el **corazón de Spring** y es comparable a:

- **NestJS:** \`@Injectable()\` y dependency injection
- **Angular:** Service injection similar
- **Node.js puro:** Requires manuales vs injection automática

## 🔄 Comparación: Node.js vs Spring DI

### NestJS - Dependency Injection:
\`\`\`typescript
@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository, private emailService: EmailService) {}
}

@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}
}
\`\`\`

### Spring Boot - Dependency Injection:
\`\`\`java
@Service
public class UserService {
    private final UserRepository userRepository;
    private final EmailService emailService;

    public UserService(UserRepository userRepository,
                      EmailService emailService) {
        this.userRepository = userRepository;
        this.emailService = emailService;
    }
}

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }
}
\`\`\`

## � Anotaciones Clave de Spring

| **Anotación**     | **Propósito**        | **Equivalente NestJS** |
| ----------------- | -------------------- | ---------------------- |
| \`@Service\`        | Lógica de negocio    | \`@Injectable()\`        |
| \`@Repository\`     | Acceso a datos       | Repository pattern     |
| \`@Controller\`     | Web MVC              | \`@Controller()\`        |
| \`@RestController\` | REST API             | \`@Controller()\`        |
| \`@Component\`      | Bean genérico        | \`@Injectable()\`        |
| \`@Autowired\`      | Inyección (opcional) | Constructor injection  |

## 🎯 Best Practices DI en Spring

### 1. Constructor Injection (Recomendado):
\`\`\`java
@Service
public class OrderService {
    private final UserService userService;
    private final PaymentService paymentService;
    
    // Constructor injection - inmutable y testeable
    public OrderService(UserService userService, PaymentService paymentService) {
        this.userService = userService;
        this.paymentService = paymentService;
    }
}
\`\`\`

### 2. Field Injection (Evitar):
\`\`\`java
@Service
public class OrderService {
    @Autowired
    private UserService userService; // Difícil de testear, mutable
}
\`\`\`
            `,
            topics: [
              "Concepto IoC vs manual dependency injection",
              "DI en Spring vs NestJS",
              "Anotaciones @Component, @Service, @Repository",
              "Constructor injection vs @Autowired",
              "Bean scopes y lifecycle",
            ],
          },
          {
            title: "🎬 Creación del Primer Proyecto Spring Boot",
            duration: "4-5 horas",
            expanded: false,
            content: `
## 📖 Concepto

Uso de **Spring Initializr** para bootstrap de proyectos y comprensión de la estructura estándar de un proyecto Spring Boot.

## 🎯 ¿Por qué es importante?

Spring Initializr es el equivalente a:

- **\`npm create\`** o **\`npx create-react-app\`** en Node.js
- **\`nest new\`** en NestJS
- Pero con **configuración enterprise** incluida

## 🏗️ Estructura de Proyecto Spring Boot

\`\`\`
my-spring-app/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/myapp/
│   │   │       ├── MyAppApplication.java      # Entry point
│   │   │       ├── controller/                # REST controllers
│   │   │       ├── service/                   # Business logic
│   │   │       ├── repository/                # Data access
│   │   │       └── model/                     # Entities/DTOs
│   │   └── resources/
│   │       ├── application.properties         # Configuration
│   │       └── static/                        # Static files
│   └── test/                                  # Tests
├── target/                                    # Build output
├── pom.xml                                    # Maven config
└── README.md
\`\`\`

## 🔄 Comparación: Node.js vs Spring Boot Project

### package.json (Node.js):
\`\`\`json
{
  "name": "my-node-app",
  "scripts": {
    "start": "node dist/main.js",
    "dev": "nodemon src/main.ts",
    "build": "tsc"
  },
  "dependencies": {
    "express": "^4.18.0",
    "typeorm": "^0.3.0"
  }
}
\`\`\`

### pom.xml (Spring Boot):
\`\`\`xml
<project>
    <groupId>com.example</groupId>
    <artifactId>my-spring-app</artifactId>
    <version>1.0.0</version>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
    </dependencies>
</project>
\`\`\`

## 🚀 Hello World Comparison

### Express.js:
\`\`\`javascript
const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\`

### Spring Boot:
\`\`\`java
@SpringBootApplication
@RestController
public class Application {
    
    @GetMapping("/hello")
    public Map<String, String> hello() {
        return Map.of("message", "Hello World!");
    }
    
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
\`\`\`

## ⚙️ Configuración vs Convención

### Node.js (Configuración manual):
\`\`\`javascript
// Todo manual
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use('/api', routes);
\`\`\`

### Spring Boot (Convención automática):
\`\`\`properties
# application.properties - solo lo que necesitas cambiar
server.port=8080
spring.datasource.url=jdbc:h2:mem:testdb
\`\`\`
            `,
            topics: [
              "Spring Initializr vs npm create",
              "Estructura de proyecto Maven",
              "Application.properties vs .env",
              "Hello World: Spring vs Express",
              "Configuración vs convención",
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
        emoji: "📡",
        title: "Módulo 3: Desarrollo de APIs RESTful con Spring Boot",
        shortTitle: "APIs REST",
        duration: "10-12 horas",
        level: "Intermedio",
        completed: false,
        objective:
          "Construir APIs REST robustas y escalables, comparando patrones y best practices con Express/NestJS para crear servicios enterprise-grade",
        description:
          "Desarrollo completo de APIs RESTful con controladores robustos, manejo global de errores, validaciones automáticas e integración con APIs de terceros.",
        sections: [
          {
            title: "🎯 Controladores REST y Buenas Prácticas",
            duration: "4 horas",
            expanded: false,
            content: `
## 📖 Controladores REST con @RestController

Creación de **controladores REST** con \`@RestController\`, mapeo de solicitudes HTTP, manejo de parámetros, y aplicación de principios RESTful para APIs intuitivas y escalables.

## 🔄 Comparación: Express vs NestJS vs Spring Boot

### Express - Manual y flexible:
\`\`\`javascript
app.get("/api/users/:id", async (req, res) => {
  try {
    const user = await userService.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
});

app.post("/api/users", async (req, res) => {
  try {
    const user = await userService.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
\`\`\`

### NestJS - Estructurado con decoradores:
\`\`\`typescript
@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<User> {
    return this.userService.findById(id);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }
}
\`\`\`

### Spring Boot - Enterprise y robusto:
\`\`\`java
@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> findOne(@PathVariable String id) {
        UserDto user = userService.findById(id);
        return ResponseEntity.ok(user);
    }

    @PostMapping
    public ResponseEntity<UserDto> create(@Valid @RequestBody CreateUserDto dto) {
        UserDto user = userService.create(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }
}
\`\`\`

## 🏗️ Principios RESTful en Spring Boot

| **HTTP Method** | **Endpoint**      | **Propósito**       | **Spring Annotation**     |
| --------------- | ----------------- | ------------------- | ------------------------- |
| GET             | \`/api/users\`      | Listar todos        | \`@GetMapping\`             |
| GET             | \`/api/users/{id}\` | Obtener uno         | \`@GetMapping("/{id}")\`    |
| POST            | \`/api/users\`      | Crear nuevo         | \`@PostMapping\`            |
| PUT             | \`/api/users/{id}\` | Actualizar completo | \`@PutMapping("/{id}")\`    |
| PATCH           | \`/api/users/{id}\` | Actualizar parcial  | \`@PatchMapping("/{id}")\`  |
| DELETE          | \`/api/users/{id}\` | Eliminar            | \`@DeleteMapping("/{id}")\` |
            `,
            topics: [
              "@RestController vs Express routes",
              "Mapeo HTTP con @GetMapping, @PostMapping",
              "Path variables y query parameters",
              "ResponseEntity y códigos HTTP",
              "Principios RESTful y buenas prácticas",
            ],
          },
          {
            title: "🛡️ Manejo de Errores y Validaciones",
            duration: "3.5 horas",
            expanded: false,
            content: `
## 📖 Manejo Global de Errores y Validación Automática

Implementación de **manejo global de errores** con \`@ControllerAdvice\` y **validación automática** de datos con JSR 303 (Bean Validation) para APIs robustas y consistentes.

## 🎯 ¿Por qué es importante?

La robustez de una API enterprise depende de:
- **Error handling consistente** - Respuestas uniformes vs errores ad-hoc
- **Validación automática** - Menos código boilerplate vs validación manual
- **Logging estructurado** - Trazabilidad vs console.log dispersos
- **Security by default** - Protección automática vs implementación manual

## 🔄 Comparación: Manejo de Errores

### Express - Manual en cada endpoint:
\`\`\`javascript
app.post("/api/users", async (req, res) => {
  try {
    // Validación manual
    if (!req.body.email) {
      return res.status(400).json({
        error: "Email is required",
        code: "VALIDATION_ERROR",
      });
    }

    const user = await userService.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal server error",
      code: "INTERNAL_ERROR",
    });
  }
});
\`\`\`

### Spring Boot - Automático y centralizado:
\`\`\`java
@RestController
@RequestMapping("/api/users")
public class UserController {

    @PostMapping
    public ResponseEntity<UserDto> create(@Valid @RequestBody CreateUserDto dto) {
        // Validación automática con @Valid
        // Exception handling automático con @ControllerAdvice
        UserDto user = userService.create(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }
}

// Global exception handler
@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidationException(
            MethodArgumentNotValidException ex) {

        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error ->
            errors.put(error.getField(), error.getDefaultMessage())
        );

        ErrorResponse errorResponse = ErrorResponse.builder()
            .message("Validation failed")
            .code("VALIDATION_ERROR")
            .details(errors)
            .timestamp(Instant.now())
            .build();

        return ResponseEntity.badRequest().body(errorResponse);
    }
}
\`\`\`

## 🔒 Validaciones con Bean Validation

\`\`\`java
public class CreateUserDto {

    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 50, message = "Name must be between 2 and 50 characters")
    private String name;

    @NotBlank(message = "Email is required")
    @Email(message = "Email should be valid")
    private String email;

    @NotNull(message = "Age is required")
    @Min(value = 18, message = "Age must be at least 18")
    @Max(value = 120, message = "Age must be less than 120")
    private Integer age;
}
\`\`\`
            `,
            topics: [
              "@ControllerAdvice para manejo global",
              "Bean Validation con JSR-303",
              "Custom exceptions y @ExceptionHandler",
              "ErrorResponse estructurado",
              "Validaciones automáticas con @Valid",
            ],
          },
          {
            title: "🌐 Interacción con APIs de Terceros",
            duration: "2.5 horas",
            expanded: false,
            content: `
## 📖 Consumo de Servicios Externos

Consumo de servicios externos usando **RestTemplate** (sincrónico) y **WebClient** (reactivo) para integración con APIs de terceros, microservicios y servicios cloud.

## 🎯 Casos de Uso Enterprise

Las aplicaciones enterprise requieren integración con:
- **APIs de terceros** - Pagos, emails, notificaciones, analytics
- **Microservicios internos** - Comunicación entre servicios
- **Servicios cloud** - AWS, Azure, GCP APIs
- **Legacy systems** - Integración con sistemas existentes

## 🔄 Comparación: HTTP Clients

### Node.js con axios:
\`\`\`javascript
const axios = require("axios");

class UserService {
  async getUserProfile(userId) {
    try {
      const response = await axios.get(\`https://api.external.com/users/\${userId}\`, {
        headers: {
          Authorization: \`Bearer \${this.apiKey}\`,
          "Content-Type": "application/json",
        },
        timeout: 5000,
      });
      return response.data;
    } catch (error) {
      if (error.code === "ECONNABORTED") {
        throw new Error("Request timeout");
      }
      throw new Error(\`API Error: \${error.response?.status}\`);
    }
  }
}
\`\`\`

### Spring Boot con RestTemplate (Sincrónico):
\`\`\`java
@Service
public class UserService {
    private final RestTemplate restTemplate;
    private final String apiKey;

    public UserService(RestTemplate restTemplate,
                      @Value("\${external.api.key}") String apiKey) {
        this.restTemplate = restTemplate;
        this.apiKey = apiKey;
    }

    public UserProfileDto getUserProfile(String userId) {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(apiKey);
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<String> entity = new HttpEntity<>(headers);

        try {
            ResponseEntity<UserProfileDto> response = restTemplate.exchange(
                "https://api.external.com/users/{userId}",
                HttpMethod.GET,
                entity,
                UserProfileDto.class,
                userId
            );

            return response.getBody();
        } catch (HttpClientErrorException e) {
            throw new ExternalApiException("User not found", e);
        } catch (ResourceAccessException e) {
            throw new ExternalApiException("API timeout", e);
        }
    }
}
\`\`\`

### Spring Boot con WebClient (Reactivo):
\`\`\`java
@Service
public class UserService {
    private final WebClient webClient;

    public UserService(WebClient.Builder webClientBuilder,
                      @Value("\${external.api.key}") String apiKey) {
        this.webClient = webClientBuilder
            .baseUrl("https://api.external.com")
            .defaultHeader("Authorization", "Bearer " + apiKey)
            .build();
    }

    public Mono<UserProfileDto> getUserProfile(String userId) {
        return webClient.get()
            .uri("/users/{userId}", userId)
            .retrieve()
            .onStatus(HttpStatus::is4xxClientError, response ->
                Mono.error(new ExternalApiException("User not found")))
            .bodyToMono(UserProfileDto.class)
            .timeout(Duration.ofSeconds(5));
    }
}
\`\`\`
            `,
            topics: [
              "RestTemplate vs axios",
              "WebClient para programación reactiva",
              "Configuración de headers y autenticación",
              "Timeout y manejo de errores HTTP",
              "Integración con APIs de terceros",
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
        category: "🏗️ Estructura de Proyecto",
        items: [
          {
            title: "📁 Estructura Maven Standard",
            description: "Organización estándar de un proyecto Spring Boot con Maven",
            url: "#",
            type: "structure",
            content: `my-spring-app/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── company/
│   │   │           └── myapp/
│   │   │               ├── MyAppApplication.java      # Clase principal @SpringBootApplication
│   │   │               ├── controller/               # Controllers REST (@RestController)
│   │   │               │   ├── UserController.java
│   │   │               │   └── ProductController.java
│   │   │               ├── service/                  # Lógica de negocio (@Service)
│   │   │               │   ├── UserService.java
│   │   │               │   └── ProductService.java
│   │   │               ├── repository/               # Acceso a datos (@Repository)
│   │   │               │   ├── UserRepository.java
│   │   │               │   └── ProductRepository.java
│   │   │               ├── model/entity/             # Entidades JPA (@Entity)
│   │   │               │   ├── User.java
│   │   │               │   └── Product.java
│   │   │               ├── model/dto/                # DTOs para transferencia
│   │   │               │   ├── UserDTO.java
│   │   │               │   ├── CreateUserRequest.java
│   │   │               │   └── UserResponse.java
│   │   │               ├── config/                   # Configuraciones (@Configuration)
│   │   │               │   ├── DatabaseConfig.java
│   │   │               │   ├── SecurityConfig.java
│   │   │               │   └── WebConfig.java
│   │   │               ├── exception/                # Manejo de errores
│   │   │               │   ├── GlobalExceptionHandler.java
│   │   │               │   └── CustomExceptions.java
│   │   │               └── util/                     # Utilidades y helpers
│   │   │                   ├── DateUtils.java
│   │   │                   └── ValidationUtils.java
│   │   └── resources/
│   │       ├── application.properties               # Configuración principal
│   │       ├── application-dev.properties          # Config desarrollo
│   │       ├── application-prod.properties         # Config producción
│   │       ├── data.sql                            # Datos iniciales
│   │       ├── schema.sql                          # DDL base de datos
│   │       ├── static/                             # Archivos estáticos
│   │       │   ├── css/
│   │       │   ├── js/
│   │       │   └── images/
│   │       └── templates/                          # Templates (si usas Thymeleaf)
│   │           └── index.html
│   └── test/
│       └── java/
│           └── com/
│               └── company/
│                   └── myapp/
│                       ├── MyAppApplicationTests.java      # Test de contexto Spring
│                       ├── controller/                     # Tests de controllers
│                       │   ├── UserControllerTest.java
│                       │   └── ProductControllerTest.java
│                       ├── service/                        # Tests de servicios
│                       │   ├── UserServiceTest.java
│                       │   └── ProductServiceTest.java
│                       ├── repository/                     # Tests de repositorios
│                       │   ├── UserRepositoryTest.java
│                       │   └── ProductRepositoryTest.java
│                       └── integration/                    # Tests de integración
│                           └── UserIntegrationTest.java
├── target/                                              # Archivos compilados (generado)
├── .mvn/                                               # Maven wrapper
├── mvnw                                                # Maven wrapper script (Unix)
├── mvnw.cmd                                            # Maven wrapper script (Windows)
├── pom.xml                                             # Dependencias y configuración Maven
├── .gitignore                                          # Archivos ignorados por Git
├── README.md                                           # Documentación del proyecto
├── Dockerfile                                          # Para containerización
└── docker-compose.yml                                 # Para desarrollo local con Docker`,
          },
          {
            title: "📋 Comparación con Node.js",
            description: "Equivalencias entre estructura Node.js/Express vs Spring Boot",
            url: "#",
            type: "comparison",
            content: `Node.js/Express Project          →    Spring Boot Project
├── src/                          →    src/main/java/com/company/app/
│   ├── controllers/              →    controller/
│   ├── services/                 →    service/
│   ├── models/                   →    model/entity/ (JPA entities)
│   ├── routes/                   →    controller/ (endpoints en @RestController)
│   ├── middleware/               →    config/ + filter/ (Spring Security)
│   ├── utils/                    →    util/
│   └── config/                   →    config/
├── tests/                        →    src/test/java/
├── public/                       →    src/main/resources/static/
├── views/                        →    src/main/resources/templates/
├── package.json                  →    pom.xml (Maven) o build.gradle (Gradle)
├── .env                          →    application.properties
├── node_modules/                 →    target/ (archivos compilados)
└── server.js                     →    Application.java (@SpringBootApplication)

Conceptos equivalentes:
• Express app.js            →  @SpringBootApplication class
• Express routes            →  @RestController + @RequestMapping
• Express middleware        →  @Component + @Filter o @Interceptor
• Mongoose schemas          →  @Entity + @Column JPA
• Express req/res           →  @RequestBody/@ResponseBody + ResponseEntity
• npm install               →  mvn clean install
• npm start                 →  mvn spring-boot:run
• Express error handling    →  @ControllerAdvice + @ExceptionHandler`,
          },
          {
            title: "⚙️ Archivos de Configuración Clave",
            description: "Principales archivos de configuración y su propósito",
            url: "#",
            type: "config",
            content: `📄 pom.xml (Maven)
├── Gestión de dependencias (como package.json)
├── Plugins de construcción
├── Perfiles (dev, test, prod)
└── Propiedades del proyecto

📄 application.properties
├── server.port=8080                    # Puerto del servidor
├── spring.datasource.url=...          # Conexión base de datos
├── spring.jpa.hibernate.ddl-auto=...  # Estrategia DDL
├── logging.level.com.company=DEBUG    # Nivel de logs
└── spring.profiles.active=dev         # Perfil activo

📄 Application.java (@SpringBootApplication)
├── Punto de entrada de la aplicación
├── Configuración automática
├── Escaneo de componentes
└── Método main() para ejecutar

📄 SecurityConfig.java
├── Configuración de autenticación
├── Configuración de autorización
├── CORS y CSRF settings
└── Password encoding

📄 DatabaseConfig.java
├── Configuración de DataSource
├── Configuración de JPA/Hibernate
├── Configuración de transacciones
└── Connection pooling

📄 WebConfig.java
├── Configuración MVC
├── Interceptors
├── Message converters
└── View resolvers

📄 Dockerfile
├── FROM openjdk:17-jdk-slim
├── COPY target/*.jar app.jar
├── EXPOSE 8080
└── ENTRYPOINT ["java", "-jar", "/app.jar"]`,
          },
        ],
      },
      {
        category: "📚 Documentación Oficial",
        items: [
          {
            title: "Oracle Java SE Documentation",
            description: "Documentación oficial de Java SE - API y especificaciones",
            url: "https://docs.oracle.com/en/java/javase/",
            type: "documentation",
          },
          {
            title: "Spring Boot Reference Guide",
            description: "Guía de referencia completa de Spring Boot 3.x",
            url: "https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/",
            type: "documentation",
          },
          {
            title: "Spring Framework Documentation",
            description: "Core Spring Framework - IoC, AOP, Data Access",
            url: "https://docs.spring.io/spring-framework/docs/current/reference/html/",
            type: "documentation",
          },
          {
            title: "Spring Data JPA Reference",
            description: "Persistencia de datos simplificada con JPA",
            url: "https://docs.spring.io/spring-data/jpa/docs/current/reference/html/",
            type: "documentation",
          },
          {
            title: "Spring Security Reference",
            description: "Seguridad integral para aplicaciones Spring",
            url: "https://docs.spring.io/spring-security/reference/",
            type: "documentation",
          },
          {
            title: "Hibernate ORM Documentation",
            description: "ORM más popular de Java - Guía completa",
            url: "https://hibernate.org/orm/documentation/",
            type: "documentation",
          },
        ],
      },
      {
        category: "🛠️ Herramientas Esenciales",
        items: [
          {
            title: "IntelliJ IDEA",
            description: "IDE premium para Java (Community gratuita)",
            url: "https://www.jetbrains.com/idea/",
            type: "tool",
          },
          {
            title: "Spring Tool Suite (STS)",
            description: "IDE basado en Eclipse optimizado para Spring",
            url: "https://spring.io/tools",
            type: "tool",
          },
          {
            title: "VS Code Extension Pack for Java",
            description: "Desarrollo Java completo en VS Code",
            url: "https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack",
            type: "tool",
          },
          {
            title: "Spring Initializr",
            description: "Generador web de proyectos Spring Boot",
            url: "https://start.spring.io/",
            type: "tool",
          },
          {
            title: "Maven Central Repository",
            description: "Repositorio central de librerías Java",
            url: "https://search.maven.org/",
            type: "tool",
          },
          {
            title: "JUnit 5 User Guide",
            description: "Framework de testing moderno para Java",
            url: "https://junit.org/junit5/docs/current/user-guide/",
            type: "tool",
          },
          {
            title: "Testcontainers",
            description: "Testing de integración con contenedores",
            url: "https://www.testcontainers.org/",
            type: "tool",
          },
          {
            title: "Docker for Java Developers",
            description: "Containerización de aplicaciones Java",
            url: "https://docs.docker.com/language/java/",
            type: "tool",
          },
        ],
      },
      {
        category: "📖 Guías de Migración",
        items: [
          {
            title: "JavaScript to Java Migration Guide",
            description: "Guía completa para desarrolladores JavaScript",
            url: "https://www.baeldung.com/java-vs-javascript",
            type: "tutorial",
          },
          {
            title: "Node.js vs Spring Boot Comparison",
            description: "Comparativa arquitectural y de rendimiento",
            url: "https://reflectoring.io/nodejs-vs-spring-boot/",
            type: "tutorial",
          },
          {
            title: "Express.js to Spring Boot Migration",
            description: "Migración de APIs REST desde Express",
            url: "https://medium.com/@sairam.krish/migrating-from-express-to-spring-boot",
            type: "tutorial",
          },
          {
            title: "TypeScript Developer's Java Guide",
            description: "Java para desarrolladores con experiencia en TypeScript",
            url: "https://devblogs.microsoft.com/java/java-for-typescript-developers/",
            type: "tutorial",
          },
          {
            title: "Microservices: Node.js vs Java",
            description: "Arquitectura de microservicios en ambos ecosistemas",
            url: "https://www.baeldung.com/java-microservices-vs-nodejs",
            type: "tutorial",
          },
        ],
      },
      {
        category: "� Tutoriales Spring Boot",
        items: [
          {
            title: "Baeldung Spring Boot Tutorials",
            description: "Tutoriales premium y ejemplos prácticos",
            url: "https://www.baeldung.com/spring-boot",
            type: "tutorial",
          },
          {
            title: "Spring.io Getting Started Guides",
            description: "Guías oficiales paso a paso",
            url: "https://spring.io/guides",
            type: "tutorial",
          },
          {
            title: "Spring Boot REST API Tutorial",
            description: "Construcción de APIs REST desde cero",
            url: "https://spring.io/guides/tutorials/rest/",
            type: "tutorial",
          },
          {
            title: "Spring Security Tutorial",
            description: "Implementación de autenticación y autorización",
            url: "https://www.baeldung.com/spring-security-tutorial",
            type: "tutorial",
          },
          {
            title: "Spring Data JPA Tutorial",
            description: "Persistencia de datos simplificada",
            url: "https://www.baeldung.com/the-persistence-layer-with-spring-data-jpa",
            type: "tutorial",
          },
          {
            title: "Spring Boot Testing Tutorial",
            description: "Testing completo en Spring Boot",
            url: "https://spring.io/guides/gs/testing-web/",
            type: "tutorial",
          },
        ],
      },
      {
        category: "🎥 Video Cursos",
        items: [
          {
            title: "Java Brains YouTube Channel",
            description: "Spring Boot, Microservices y Java moderno",
            url: "https://www.youtube.com/c/JavaBrainsChannel",
            type: "video",
          },
          {
            title: "Amigoscode Spring Boot Course",
            description: "Curso completo desde básico a avanzado",
            url: "https://amigoscode.com/courses/spring-boot",
            type: "video",
          },
          {
            title: "Dan Vega - Spring Developer",
            description: "Contenido oficial de Spring por Dan Vega",
            url: "https://www.youtube.com/@danvega",
            type: "video",
          },
          {
            title: "Spring Tips by Josh Long",
            description: "Tips y tricks del ecosistema Spring",
            url: "https://www.youtube.com/c/SpringTips",
            type: "video",
          },
          {
            title: "Java + Spring Boot Masterclass",
            description: "Curso intensivo de backend con Java",
            url: "https://www.youtube.com/watch?v=VVn9OG9nfH0",
            type: "video",
          },
        ],
      },
      {
        category: "📚 Libros Especializados",
        items: [
          {
            title: "Effective Java by Joshua Bloch",
            description: "Best practices esenciales para Java moderno",
            url: "https://www.oreilly.com/library/view/effective-java/9780134686097/",
            type: "book",
          },
          {
            title: "Spring Boot in Action",
            description: "Guía práctica y completa de Spring Boot",
            url: "https://www.manning.com/books/spring-boot-in-action",
            type: "book",
          },
          {
            title: "Spring in Action (6th Edition)",
            description: "Spring Framework completo - edición actualizada",
            url: "https://www.manning.com/books/spring-in-action-sixth-edition",
            type: "book",
          },
          {
            title: "Java Performance: In-Depth Advice",
            description: "Optimización y tuning de aplicaciones Java",
            url: "https://www.oreilly.com/library/view/java-performance-2nd/9781492056102/",
            type: "book",
          },
          {
            title: "Microservices Patterns",
            description: "Patrones para arquitecturas de microservicios",
            url: "https://www.manning.com/books/microservices-patterns",
            type: "book",
          },
          {
            title: "Cloud Native Java",
            description: "Desarrollo Java para cloud y contenedores",
            url: "https://www.oreilly.com/library/view/cloud-native-java/9781449374631/",
            type: "book",
          },
        ],
      },
      {
        category: "🌐 Comunidades",
        items: [
          {
            title: "r/java",
            description: "Comunidad activa de Java en Reddit",
            url: "https://www.reddit.com/r/java/",
            type: "community",
          },
          {
            title: "r/SpringBoot",
            description: "Subreddit dedicado a Spring Boot",
            url: "https://www.reddit.com/r/SpringBoot/",
            type: "community",
          },
          {
            title: "Stack Overflow - Java",
            description: "Q&A técnico sobre Java y Spring",
            url: "https://stackoverflow.com/questions/tagged/java",
            type: "community",
          },
          {
            title: "Java Discord Server",
            description: "Comunidad Discord para desarrolladores Java",
            url: "https://discord.gg/java",
            type: "community",
          },
          {
            title: "Spring Community",
            description: "Foro oficial de la comunidad Spring",
            url: "https://community.spring.io/",
            type: "community",
          },
          {
            title: "JetBrains Academy",
            description: "Plataforma de aprendizaje Java interactiva",
            url: "https://www.jetbrains.com/academy/",
            type: "community",
          },
        ],
      },
      {
        category: "⚡ Cheat Sheets",
        items: [
          {
            title: "Java Syntax Cheat Sheet",
            description: "Sintaxis Java vs JavaScript comparativa",
            url: "https://introcs.cs.princeton.edu/java/11cheatsheet/",
            type: "tutorial",
          },
          {
            title: "Spring Boot Annotations",
            description: "Guía rápida de anotaciones más usadas",
            url: "https://springframework.guru/spring-boot-annotations/",
            type: "tutorial",
          },
          {
            title: "JPA/Hibernate Quick Reference",
            description: "Anotaciones y configuraciones JPA esenciales",
            url: "https://vladmihalcea.com/jpa-hibernate-cheat-sheet/",
            type: "tutorial",
          },
          {
            title: "Maven Commands Cheat Sheet",
            description: "Comandos Maven más utilizados",
            url: "https://maven.apache.org/guides/MavenQuickReferenceCard.pdf",
            type: "tutorial",
          },
          {
            title: "Spring Security Configuration",
            description: "Configuraciones comunes de seguridad",
            url: "https://github.com/spring-projects/spring-security/wiki/Spring-Security-Reference",
            type: "tutorial",
          },
        ],
      },
    ],

    migrationGuides: [
      {
        title: "🔄 Migrador Express.js → Spring Boot",
        category: "migration",
        prompt: `Eres un experto en migración de backend. Convierte esta API Express.js a Spring Boot:

**CÓDIGO NODE.JS/EXPRESS:**
\`\`\`javascript
[Pegar aquí tu código Express.js]
\`\`\`

**GENERA EL EQUIVALENTE SPRING BOOT COMPLETO:**

1. **Controller REST (@RestController)**
   - Mapea rutas Express a @RequestMapping/@GetMapping/etc
   - Convierte req/res a @RequestBody/@PathVariable/@RequestParam
   - Manejo de headers y status codes

2. **Service Layer (@Service)**  
   - Lógica de negocio extraída de routes/controllers
   - Manejo de transacciones con @Transactional
   - Inyección de dependencias con @Autowired

3. **Repository Layer (@Repository)**
   - Convierte operaciones de base de datos
   - Mongoose/Prisma → Spring Data JPA
   - Queries personalizadas con @Query

4. **DTOs y Entidades**
   - Request/Response DTOs 
   - Entidades JPA con @Entity
   - Validaciones con @Valid y Bean Validation

5. **Configuración**
   - application.properties equivalente a .env
   - Dependencias Maven para pom.xml

**EQUIVALENCIAS CLAVE:**
- \`app.get('/users', handler)\` → \`@GetMapping("/users")\`
- \`req.body\` → \`@RequestBody UserDTO\`
- \`res.json(data)\` → \`ResponseEntity.ok(data)\`
- \`next(error)\` → \`throw new BusinessException()\`
- \`mongoose.Schema\` → \`@Entity class\`
- \`async/await\` → \`CompletableFuture\` o métodos síncronos

**INCLUYE:**
- Manejo de errores con @ControllerAdvice
- Tests unitarios JUnit 5 equivalentes  
- Configuración de CORS si aplica`,
        usage: "Convierte APIs Express.js completas a Spring Boot con todas las capas",
      },
      {
        title: "🗄️ Migrador Mongoose → JPA/Hibernate",
        category: "database",
        prompt: `Convierte estos schemas Mongoose a entidades JPA con relaciones optimizadas:

**SCHEMAS MONGOOSE:**
\`\`\`javascript
[Pegar schemas de Mongoose aquí]
\`\`\`

**GENERA EQUIVALENTE JPA:**

1. **Entidades JPA (@Entity)**
   - Convierte Schema a @Entity class
   - Mapea tipos de datos Mongoose → Java
   - Relaciones con @OneToMany, @ManyToOne, @ManyToMany

2. **Repositorios Spring Data**
   - Interface que extiende JpaRepository
   - Queries custom con @Query
   - Métodos derived queries

3. **DTOs de transferencia**
   - Request DTOs para crear/actualizar
   - Response DTOs para APIs
   - Mappers Entity ↔ DTO

4. **Configuración de BD**
   - application.properties con conexión
   - Configuración JPA/Hibernate
   - Scripts de inicialización

**EQUIVALENCIAS:**
- \`String\` → \`@Column String\`
- \`Number\` → \`@Column Integer/Long/BigDecimal\`
- \`Date\` → \`@Column @Temporal LocalDateTime\`
- \`Boolean\` → \`@Column Boolean\`
- \`ObjectId\` → \`@Id @GeneratedValue Long\`
- \`ref: 'User'\` → \`@ManyToOne @JoinColumn User\`
- \`[{ type: ObjectId, ref: 'Tag' }]\` → \`@ManyToMany List<Tag>\`

**VALIDACIONES:**
- \`required: true\` → \`@NotNull/@NotBlank\`
- \`unique: true\` → \`@Column(unique = true)\`
- \`min/max\` → \`@Min/@Max/@Size\`

**QUERIES POPULARES:**
- \`.populate()\` → \`@Query con JOIN FETCH\`
- \`.aggregate()\` → \`@Query con GROUP BY\`
- \`.find().sort()\` → \`findAllByOrderBy...\``,
        usage: "Migra schemas completos de base de datos Mongoose a JPA",
      },
      {
        title: "🔐 Migrador JWT: Node.js → Spring Security",
        category: "security",
        prompt: `Convierte esta implementación JWT de Node.js a Spring Security:

**CÓDIGO JWT NODE.JS:**
\`\`\`javascript
[Pegar implementación JWT de Express/Node.js]
\`\`\`

**GENERA SPRING SECURITY COMPLETO:**

1. **SecurityConfig (@Configuration)**
   - Configuración de filtros de seguridad
   - Configuración CORS y CSRF
   - Endpoints públicos vs protegidos
   - Password encoder BCrypt

2. **JWT Components**
   - JwtTokenProvider para generar/validar tokens
   - JwtAuthenticationFilter para interceptar requests
   - JwtAuthenticationEntryPoint para errores 401

3. **UserDetailsService**
   - Implementación custom de UserDetailsService
   - UserPrincipal con roles y autoridades
   - Carga de usuario desde base de datos

4. **Controllers de Auth**
   - LoginController con @PostMapping("/login")
   - RegisterController con validaciones
   - RefreshTokenController

5. **DTOs y Responses**
   - LoginRequest/LoginResponse DTOs
   - JwtAuthenticationResponse
   - ErrorResponse para manejo de errores

**EQUIVALENCIAS:**
- \`jwt.sign(payload, secret)\` → \`Jwts.builder().setSubject().signWith()\`
- \`jwt.verify(token, secret)\` → \`Jwts.parser().setSigningKey().parseClaimsJws()\`
- \`req.user = decoded\` → \`SecurityContextHolder.getContext().setAuthentication()\`
- \`middleware authenticate\` → \`@PreAuthorize("hasRole('USER')")\`
- \`bcrypt.hash(password)\` → \`passwordEncoder.encode(password)\`

**CONFIGURACIÓN:**
- JWT secret en application.properties
- Tiempo de expiración configurable
- Refresh token strategy
- Role-based access control

**INCLUYE:**
- Tests de seguridad con @WithMockUser
- Manejo de errores JWT custom
- Logout con blacklist de tokens`,
        usage: "Migra autenticación JWT completa de Node.js a Spring Security",
      },
      {
        title: "🧪 Migrador Tests: Jest/Supertest → JUnit/MockMvc",
        category: "testing",
        prompt: `Convierte estos tests de Jest/Supertest a JUnit 5 con MockMvc:

**TESTS NODE.JS:**
\`\`\`javascript
[Pegar tests de Jest/Supertest aquí]
\`\`\`

**GENERA TESTS SPRING BOOT:**

1. **Unit Tests (@ExtendWith(MockitoExtension.class))**
   - Tests de servicios con @Mock
   - Tests de repositorios con @MockBean
   - Assertions con JUnit 5

2. **Integration Tests (@SpringBootTest)**
   - Tests de controllers con @AutoConfigureTestDatabase
   - TestContainers para base de datos real
   - @Transactional para rollback

3. **Web Layer Tests (@WebMvcTest)**
   - MockMvc para simular requests HTTP
   - @MockBean para dependencias
   - Tests de endpoints REST completos

4. **Security Tests**
   - @WithMockUser para roles
   - Tests de autenticación/autorización
   - JWT token validation tests

**EQUIVALENCIAS:**
- \`describe('UserService')\` → \`@DisplayName("UserService Tests")\`
- \`test('should create user')\` → \`@Test void shouldCreateUser()\`
- \`expect(result).toBe(expected)\` → \`assertThat(result).isEqualTo(expected)\`
- \`request(app).get('/api/users')\` → \`mockMvc.perform(get("/api/users"))\`
- \`jest.fn()\` → \`@Mock UserRepository\`
- \`beforeEach\` → \`@BeforeEach\`

**CONFIGURACIÓN TEST:**
- application-test.properties
- TestContainers configuration
- Mock data builders
- Custom assertions

**COBERTURA:**
- Happy path scenarios
- Error conditions
- Edge cases
- Validation testing
- Security testing

**INCLUYE:**
- Test slices (@WebMvcTest, @DataJpaTest)
- Parametrized tests con @ParameterizedTest
- Tests de performance básicos`,
        usage: "Convierte suite completa de tests Node.js a Spring Boot",
      },
      {
        title: "🚀 Migrador de Deployment: Node.js → Spring Boot",
        category: "devops",
        prompt: `Convierte esta configuración de deployment Node.js a Spring Boot:

**CONFIGURACIÓN NODE.JS ACTUAL:**
\`\`\`yaml
[Pegar docker-compose.yml, Dockerfile, CI/CD de Node.js]
\`\`\`

**GENERA DEPLOYMENT SPRING BOOT:**

1. **Dockerfile Multi-stage**
   - Build stage con Maven/Gradle
   - Runtime stage con OpenJDK optimizado
   - Health checks y non-root user
   - Optimizaciones para tamaño de imagen

2. **docker-compose.yml**
   - Servicio Spring Boot
   - Base de datos (PostgreSQL/MySQL)
   - Redis para cache (si aplica)
   - Variables de entorno

3. **Kubernetes Manifests**
   - Deployment con resource limits
   - Service y Ingress
   - ConfigMap para properties
   - Secrets para credenciales

4. **CI/CD Pipeline**
   - GitHub Actions para Maven/Gradle
   - Tests automatizados
   - Build y push de imagen Docker
   - Deploy automatizado

5. **Monitoring & Observability**
   - Spring Boot Actuator endpoints
   - Prometheus metrics
   - Grafana dashboards
   - Logs con Logback

**EQUIVALENCIAS:**
- \`npm start\` → \`java -jar app.jar\`
- \`NODE_ENV\` → \`SPRING_PROFILES_ACTIVE\`
- \`process.env.PORT\` → \`server.port\`
- \`pm2\` → \`java -server -Xmx512m\`
- \`node:16-alpine\` → \`openjdk:17-jdk-slim\`

**OPTIMIZACIONES:**
- JVM tuning parameters
- GraalVM native image (opcional)
- Layer caching en Docker
- Multi-arch builds

**INCLUYE:**
- Production-ready configuration
- Security scanning en pipeline
- Blue-green deployment strategy
- Backup y restore procedures`,
        usage: "Migra infrastructure completa Node.js a Spring Boot production-ready",
      },
      {
        title: "🏗️ Arquitecto: Monolito Node.js → Microservicios Spring",
        category: "architecture",
        prompt: `Descompón esta aplicación Node.js monolítica en microservicios Spring Boot:

**APLICACIÓN MONOLÍTICA NODE.JS:**
\`\`\`javascript
[Describir estructura actual de la app Node.js]
\`\`\`

**DISEÑA ARQUITECTURA DE MICROSERVICIOS:**

1. **Identificación de Bounded Contexts**
   - Análisis de dominio de negocio
   - Separación por responsabilidades
   - Identificación de servicios independientes
   - Estrategia de datos por servicio

2. **Spring Cloud Stack**
   - Config Server para configuración centralizada
   - Eureka Server para service discovery
   - API Gateway (Spring Cloud Gateway)
   - Circuit Breaker (Resilience4j)

3. **Servicios Individuales**
   - Estructura Spring Boot por servicio
   - Base de datos independiente por servicio
   - APIs REST con OpenAPI documentation
   - Event-driven communication

4. **Comunicación Entre Servicios**
   - REST synchronous calls con Feign
   - Async messaging con RabbitMQ/Kafka
   - Event sourcing patterns
   - Saga pattern para transacciones distribuidas

5. **Observabilidad Distribuida**
   - Distributed tracing con Sleuth/Zipkin
   - Centralized logging con ELK Stack
   - Metrics con Micrometer/Prometheus
   - Health checks distribuidos

**ESTRATEGIA DE MIGRACIÓN:**
1. Strangler Fig pattern
2. Database decomposition strategy  
3. Gradual extraction of services
4. API versioning strategy

**PATRONES IMPLEMENTADOS:**
- Database per Service
- API Gateway
- Circuit Breaker
- Event Sourcing
- CQRS (si aplica)

**DEPLOYMENT:**
- Kubernetes manifests
- Helm charts por servicio
- Service mesh (Istio opcional)
- CI/CD pipeline distribuido`,
        usage: "Transforma monolito Node.js en arquitectura de microservicios Spring",
      },
    ],

    aiPrompts: [
      {
        title: "🛒 Generador de Entidades Ecommerce",
        category: "setup",
        prompt: `Genera las entidades JPA completas para un sistema de ecommerce:

**DOMINIO ECOMMERCE:**
Sistema de comercio electrónico con productos, categorías, usuarios, pedidos y pagos.

**GENERA ENTIDADES PRINCIPALES:**

1. **Product (@Entity)**
   - id, name, description, price, stock, sku
   - category (relación @ManyToOne)
   - images (List<String>)
   - active, featured
   - timestamps (createdAt, updatedAt)

2. **Category (@Entity)**
   - id, name, description, slug
   - parentCategory (@ManyToOne self-reference)
   - products (@OneToMany mappedBy="category")
   - active

3. **User (@Entity)**
   - id, email, password, firstName, lastName
   - roles (@Enumerated UserRole)
   - addresses (@OneToMany)
   - orders (@OneToMany)
   - enabled, accountNonLocked

4. **Order (@Entity)**
   - id, orderNumber, status (@Enumerated)
   - user (@ManyToOne)
   - orderItems (@OneToMany)
   - totalAmount, shippingAddress
   - orderDate, deliveryDate

5. **OrderItem (@Entity)**
   - id, quantity, unitPrice, totalPrice
   - order (@ManyToOne), product (@ManyToOne)

6. **Payment (@Entity)**
   - id, paymentMethod, amount, status
   - order (@OneToOne), transactionId
   - paymentDate

**INCLUYE:**
- Validaciones Bean Validation (@NotNull, @Size, @Email)
- Auditing con @CreationTimestamp, @UpdateTimestamp
- Índices para performance (@Index)
- Repositorios Spring Data JPA
- DTOs para Request/Response
- Enums para Status, Roles, PaymentMethod`,
        usage: "Crea modelo de datos completo para sistema ecommerce",
      },
      {
        title: "🛍️ Generador de Controllers REST Ecommerce",
        category: "api",
        prompt: `Genera controllers REST completos para la API ecommerce:

**FUNCIONALIDADES REQUERIDAS:**
- CRUD productos con búsqueda y filtros
- Gestión de categorías
- Autenticación y registro de usuarios
- Carrito de compras
- Gestión de pedidos
- Procesamiento de pagos

**GENERA CONTROLLERS:**

1. **ProductController (@RestController)**
   - GET /api/products (lista con paginación)
   - GET /api/products/{id}
   - GET /api/products/search?q=...&category=...
   - POST /api/products (admin only)
   - PUT /api/products/{id} (admin only)
   - DELETE /api/products/{id} (admin only)

2. **CategoryController (@RestController)**
   - GET /api/categories (árbol de categorías)
   - GET /api/categories/{id}/products
   - POST /api/categories (admin only)

3. **AuthController (@RestController)**
   - POST /api/auth/register
   - POST /api/auth/login
   - POST /api/auth/refresh-token
   - POST /api/auth/logout

4. **CartController (@RestController)**
   - GET /api/cart (usuario autenticado)
   - POST /api/cart/items
   - PUT /api/cart/items/{productId}
   - DELETE /api/cart/items/{productId}

5. **OrderController (@RestController)**
   - GET /api/orders (mis pedidos)
   - GET /api/orders/{id}
   - POST /api/orders (checkout)
   - PUT /api/orders/{id}/cancel

**INCLUYE:**
- Validaciones con @Valid
- Manejo de errores con @ControllerAdvice
- Paginación con Pageable
- Seguridad con @PreAuthorize
- DTOs para requests/responses
- Documentación OpenAPI con @Operation`,
        usage: "Genera API REST completa para sistema ecommerce",
      },
      {
        title: "🔐 Configurador de Seguridad Ecommerce",
        category: "security",
        prompt: `Configura Spring Security completo para la aplicación ecommerce:

**REQUERIMIENTOS DE SEGURIDAD:**
- Autenticación JWT
- Roles: USER, ADMIN
- Endpoints públicos: productos, categorías (lectura)
- Endpoints protegidos: carrito, pedidos, admin
- CORS para frontend React/Angular

**GENERA CONFIGURACIÓN COMPLETA:**

1. **SecurityConfig (@Configuration)**
   - Configuración de filtros
   - Endpoints públicos vs protegidos
   - CORS configuration
   - JWT authentication filter

2. **JWT Components**
   - JwtTokenProvider (generar/validar)
   - JwtAuthenticationFilter
   - JwtAuthenticationEntryPoint

3. **UserDetailsService**
   - Implementación custom
   - Carga de usuario con roles
   - UserPrincipal class

4. **Auth Controllers**
   - Login con email/password
   - Registro de nuevos usuarios
   - Refresh token endpoint

**CONFIGURACIÓN ESPECÍFICA:**
\`\`\`java
// Endpoints públicos
.requestMatchers("/api/products/**").permitAll()
.requestMatchers("/api/categories/**").permitAll()
.requestMatchers("/api/auth/**").permitAll()

// Endpoints protegidos
.requestMatchers("/api/cart/**").hasRole("USER")
.requestMatchers("/api/orders/**").hasRole("USER")
.requestMatchers("/api/admin/**").hasRole("ADMIN")
\`\`\`

**INCLUYE:**
- Password encoding con BCrypt
- Role-based access control
- Exception handling
- CORS para múltiples orígenes
- Session management stateless
- Tests de seguridad`,
        usage: "Configura autenticación y autorización para ecommerce",
      },
      {
        title: "💳 Generador de Servicio de Pagos",
        category: "payments",
        prompt: `Implementa servicio completo de procesamiento de pagos:

**PROVEEDORES DE PAGO:**
- Stripe, PayPal, MercadoPago
- Tarjetas de crédito/débito
- Transferencias bancarias

**GENERA SERVICIOS:**

1. **PaymentService (@Service)**
   - processPayment(PaymentRequest)
   - refundPayment(paymentId)
   - getPaymentStatus(paymentId)
   - handleWebhooks()

2. **PaymentStrategy Pattern**
   - PaymentStrategy interface
   - StripePaymentStrategy
   - PayPalPaymentStrategy
   - MercadoPagoPaymentStrategy

3. **DTOs y Entities**
   - PaymentRequest/PaymentResponse
   - Payment entity con audit
   - PaymentMethod enum
   - PaymentStatus enum

4. **Controllers**
   - PaymentController para procesar pagos
   - WebhookController para callbacks

**INTEGRACIÓN CON ORDEN:**
\`\`\`java
@Transactional
public OrderResponse processOrder(OrderRequest request) {
    // 1. Validar stock
    // 2. Crear orden pendiente
    // 3. Procesar pago
    // 4. Confirmar orden si pago exitoso
    // 5. Actualizar stock
    // 6. Enviar confirmación
}
\`\`\`

**INCLUYE:**
- Manejo de errores de pago
- Logs de auditoría
- Retry logic para fallos
- Webhooks de confirmación
- Tests con mocks de APIs
- Configuration properties para keys
- Exception handling específico`,
        usage: "Implementa procesamiento seguro de pagos en ecommerce",
      },
      {
        title: "📊 Generador de Dashboard Admin",
        category: "admin",
        prompt: `Crea dashboard de administración completo para ecommerce:

**FUNCIONALIDADES ADMIN:**
- Gestión de productos y categorías
- Gestión de usuarios y pedidos
- Reportes de ventas
- Estadísticas en tiempo real

**GENERA CONTROLLERS ADMIN:**

1. **AdminProductController**
   - CRUD completo productos
   - Bulk operations (activar/desactivar)
   - Import/export CSV
   - Gestión de imágenes

2. **AdminOrderController**
   - Lista de pedidos con filtros
   - Cambio de estado de pedidos
   - Reportes de ventas
   - Cancelaciones y reembolsos

3. **AdminUserController**
   - Gestión de usuarios
   - Activar/desactivar cuentas
   - Estadísticas de usuarios

4. **AdminDashboardController**
   - Métricas en tiempo real
   - Gráficos de ventas
   - Top productos
   - Estadísticas generales

**SERVICIOS DE REPORTES:**
\`\`\`java
@Service
public class ReportService {
    public SalesReportDTO getSalesReport(LocalDate from, LocalDate to);
    public List<ProductStatsDTO> getTopSellingProducts();
    public DashboardStatsDTO getDashboardStats();
    public byte[] exportOrdersToExcel(OrderFilterDTO filter);
}
\`\`\`

**INCLUYE:**
- Paginación y filtros avanzados
- Export a Excel/PDF
- Cache para reportes
- Validación de permisos admin
- Audit logging de operaciones
- Tests de integración
- OpenAPI documentation`,
        usage: "Crea panel de administración completo para ecommerce",
      },
      {
        title: "🔍 Optimizador de Búsqueda y Filtros",
        category: "search",
        prompt: `Implementa búsqueda avanzada y filtros para el catálogo de productos:

**FUNCIONALIDADES DE BÚSQUEDA:**
- Búsqueda por texto (nombre, descripción)
- Filtros por categoría, precio, marca
- Ordenamiento (precio, nombre, popularidad)
- Paginación optimizada

**GENERA IMPLEMENTACIÓN:**

1. **ProductSearchService (@Service)**
   - Búsqueda con Specification API
   - Filters builder pattern
   - Elasticsearch integration (opcional)

2. **Search DTOs**
   - ProductSearchCriteria
   - ProductSearchResult
   - FilterOptions

3. **Repository Custom**
   \`\`\`java
   public interface ProductRepositoryCustom {
       Page<Product> findWithFilters(ProductSearchCriteria criteria, Pageable pageable);
       List<String> getAvailableBrands();
       PriceRangeDTO getPriceRange(Long categoryId);
   }
   \`\`\`

4. **Controller Endpoint**
   \`\`\`java
   @GetMapping("/api/products/search")
   public PagedResponse<ProductDTO> searchProducts(
       @RequestParam(required = false) String query,
       @RequestParam(required = false) Long categoryId,
       @RequestParam(required = false) BigDecimal minPrice,
       @RequestParam(required = false) BigDecimal maxPrice,
       @RequestParam(defaultValue = "name") String sortBy,
       Pageable pageable
   )
   \`\`\`

**OPTIMIZACIONES:**
- Índices de base de datos
- Cache de filtros populares
- Autocomplete con Redis
- Full-text search con PostgreSQL
- Faceted search

**INCLUYE:**
- Tests de performance
- Métricas de búsqueda
- Logs de queries populares
- Configuration properties
- Error handling robusto`,
        usage: "Implementa búsqueda y filtros optimizados para productos",
      },
    ],

    projectTasks: [
      // === CONFIGURACIÓN INICIAL ===
      { name: "☕ Configurar entorno Java 17+ y Maven/Gradle", completed: false },
      { name: "🛠️ Configurar IDE (IntelliJ IDEA recomendado)", completed: false },
      { name: "� Crear proyecto Spring Boot en Spring Initializr", completed: false },
      { name: "📁 Configurar estructura de paquetes del ecommerce", completed: false },
      { name: "🗄️ Configurar PostgreSQL y application.properties", completed: false },

      // === MODELO DE DATOS ===
      { name: "🛒 Crear entidad Product con validaciones", completed: false },
      { name: "📂 Crear entidad Category con jerarquía", completed: false },
      { name: "👤 Crear entidad User con roles", completed: false },
      { name: "🧾 Crear entidad Order y OrderItem", completed: false },
      { name: "� Crear entidad Payment", completed: false },
      { name: "📍 Crear entidad Address", completed: false },
      { name: "⭐ Crear entidad Review (opcional)", completed: false },
      { name: "� Configurar relaciones JPA entre entidades", completed: false },

      // === REPOSITORIOS Y SERVICIOS ===
      { name: "📊 Crear repositorios Spring Data JPA", completed: false },
      { name: "🎯 Implementar ProductService con lógica de negocio", completed: false },
      { name: "🛍️ Implementar CategoryService", completed: false },
      { name: "👥 Implementar UserService", completed: false },
      { name: "🧾 Implementar OrderService con validaciones", completed: false },
      { name: "💰 Implementar PaymentService", completed: false },

      // === API REST ===
      { name: "🌐 Crear ProductController con CRUD completo", completed: false },
      { name: "📂 Crear CategoryController con endpoints anidados", completed: false },
      { name: "🔐 Crear AuthController (login/register)", completed: false },
      { name: "🛒 Crear CartController para carrito de compras", completed: false },
      { name: "🧾 Crear OrderController para gestión de pedidos", completed: false },
      { name: "💳 Crear PaymentController", completed: false },
      { name: "👤 Crear UserController para perfil", completed: false },

      // === SEGURIDAD ===
      { name: "� Configurar Spring Security", completed: false },
      { name: "🎫 Implementar autenticación JWT", completed: false },
      { name: "🛡️ Configurar autorización por roles (USER/ADMIN)", completed: false },
      { name: "🌐 Configurar CORS para frontend", completed: false },
      { name: "🔐 Implementar password encoding", completed: false },

      // === FUNCIONALIDADES ECOMMERCE ===
      { name: "� Implementar búsqueda de productos", completed: false },
      { name: "🏷️ Implementar filtros (categoría, precio, marca)", completed: false },
      { name: "� Implementar paginación en listados", completed: false },
      { name: "⭐ Sistema de reviews y ratings", completed: false },
      { name: "� Gestión de inventario/stock", completed: false },
      { name: "🏪 Carrito de compras persistente", completed: false },
      { name: "� Proceso de checkout completo", completed: false },

      // === INTEGRACIONES ===
      { name: "💳 Integrar pasarela de pagos (Stripe/PayPal)", completed: false },
      { name: "� Configurar envío de emails", completed: false },
      { name: "📱 Integrar notificaciones", completed: false },
      { name: "🖼️ Gestión de imágenes de productos", completed: false },

      // === TESTING ===
      { name: "🧪 Tests unitarios de servicios", completed: false },
      { name: "🔧 Tests de repositorios con @DataJpaTest", completed: false },
      { name: "🌐 Tests de controllers con MockMvc", completed: false },
      { name: "🔒 Tests de seguridad y JWT", completed: false },
      { name: "📡 Tests de integración end-to-end", completed: false },
      { name: "🐳 Tests con TestContainers", completed: false },

      // === DOCUMENTACIÓN ===
      { name: "📋 Documentar API con OpenAPI/Swagger", completed: false },
      { name: "📝 Crear README con instrucciones", completed: false },
      { name: "📊 Documentar modelo de datos", completed: false },

      // === DEPLOYMENT ===
      { name: "🐳 Crear Dockerfile optimizado", completed: false },
      { name: "📦 Crear docker-compose.yml", completed: false },
      { name: "🚀 Configurar CI/CD con GitHub Actions", completed: false },
      { name: "☁️ Deploy en cloud (Heroku/Railway/AWS)", completed: false },
      { name: "📊 Configurar monitoring con Actuator", completed: false },
      { name: "📈 Configurar métricas y logs", completed: false },

      // === CARACTERÍSTICAS AVANZADAS ===
      { name: "⚡ Implementar cache con Redis", completed: false },
      { name: "🔍 Implementar Elasticsearch para búsqueda", completed: false },
      { name: "📊 Dashboard de admin", completed: false },
      { name: "📈 Reportes de ventas", completed: false },
      { name: "🎯 Sistema de cupones/descuentos", completed: false },
      { name: "� API para mobile app", completed: false },
      { name: "🌐 Internacionalización (i18n)", completed: false },
      { name: "🛡️ Rate limiting y security headers", completed: false },
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

    // Section Management Functions
    toggleSection(moduleIndex, sectionIndex) {
      console.log("toggleSection called:", moduleIndex, sectionIndex);
      if (this.modules[moduleIndex] && this.modules[moduleIndex].sections[sectionIndex]) {
        const section = this.modules[moduleIndex].sections[sectionIndex];
        console.log("Before toggle:", section.expanded);
        section.expanded = !section.expanded;
        console.log("After toggle:", section.expanded);
      } else {
        console.log("Module or section not found");
      }
    },

    // Markdown Rendering Function (Simple)
    renderMarkdown(content) {
      if (!content) return "";

      return (
        content
          // Headers
          .replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold mb-2 mt-4">$1</h3>')
          .replace(/^## (.*$)/gim, '<h2 class="text-xl font-semibold mb-3 mt-5">$1</h2>')
          .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mb-4 mt-6">$1</h1>')

          // Code blocks
          .replace(
            /```(\w+)?\n([\s\S]*?)```/g,
            '<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4"><code class="text-sm">$2</code></pre>'
          )
          .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">$1</code>')

          // Bold and italic
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
          .replace(/\*(.*?)\*/g, "<em>$1</em>")

          // Lists
          .replace(/^- (.*$)/gim, '<li class="ml-4 mb-1">• $1</li>')
          .replace(/^(\d+)\. (.*$)/gim, '<li class="ml-4 mb-1">$1. $2</li>')

          // Tables (basic)
          .replace(/\|(.+)\|/g, (match, content) => {
            const cells = content
              .split("|")
              .map((cell) => cell.trim())
              .filter((cell) => cell);
            return "<tr>" + cells.map((cell) => `<td class="border px-3 py-2">${cell}</td>`).join("") + "</tr>";
          })

          // Line breaks
          .replace(/\n\n/g, '</p><p class="mb-4">')
          .replace(/\n/g, "<br/>")

          // Wrap in paragraphs
          .replace(/^(.+)$/gm, '<p class="mb-4">$1</p>')
      );
    },
  };
}
