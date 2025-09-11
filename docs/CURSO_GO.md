# 🚀 Curso: Transición al Backend con Golang - Dirigiendo a la GenIA

## 👥 Audiencia Objetivo

Este curso está diseñado para **desarrolladores de JavaScript/TypeScript** con experiencia en el desarrollo backend (Node.js, NestJS, Express, TypeORM, JWT, Logger, Swagger, PostgreSQL).

El objetivo es que aprendan a **migrar a Go** y a dirigir y supervisar **asistentes de IA** (como GitHub Copilot con Claude Sonnet 4), tratándolos como un miembro del equipo de desarrollo. Los participantes aprenderán a guiar a la IA en la creación de aplicaciones Go, garantizando la calidad, la adherencia a las mejores prácticas y una comprensión profunda del lenguaje.

---

## 🎯 Objetivos del Curso

Al finalizar este curso, los participantes serán capaces de:

- ✅ **Instruir y supervisar** a un asistente de IA para que implemente funcionalidades en Go
- ✅ **Formular prompts precisos** y contextuales para guiar a la IA en tareas de desarrollo Go
- ✅ **Evaluar críticamente** el código Go generado por la IA, asegurando que cumple con los "por qué" de las decisiones de diseño
- ✅ **Comprender y aplicar** los conceptos fundamentales de Go para dirigir a la IA a producir código robusto y eficiente
- ✅ **Dirigir a la IA** en la construcción de APIs RESTful y la implementación de autenticación con JWT en Go
- ✅ **Instruir a la IA** para interactuar con PostgreSQL usando database/sql y entender la filosofía "SQL First"
- ✅ **Supervisar a la IA** en la creación de pruebas unitarias y de integración y en la automatización del despliegue
- ✅ **Asumir el rol** de arquitecto y revisor de código para el trabajo de la IA

---

## 📚 Módulos del Curso y Guía para Dirigir a la GenIA

> **Nota:** Cada sección incluye una sugerencia de prompt, formulada como una instrucción para tu "empleado" IA, junto con una explicación detallada del "Por qué" y "Cómo" que tú, como gerente, necesitas comprender.

---

## 📋 Módulo 1: Introducción a Golang y el "Por Qué" de la Migración

### 1.1 ¿Por qué Go? Beneficios de migrar desde TypeScript/Node.js

**🎯 Concepto:** Go (Golang) es un lenguaje moderno de Google, conocido por su simplicidad y rendimiento. Es ideal para APIs REST robustas y eficientes, con características como tipado estático, recolección de basura y concurrencia.

**🤔 Por qué (para tu dirección a la IA):** Go ofrece un rendimiento y eficiencia superiores a Node.js/TypeScript al ser compilado a código de máquina. Su gestión de concurrencia con goroutines y canales permite manejar miles de solicitudes simultáneas. El tipado estático reduce errores en tiempo de ejecución y el manejo explícito de errores promueve un código más robusto.

**🤖 Prompt de Instrucción:**

```
"Genia, necesito un informe técnico comparativo entre Node.js/TypeScript y Go, enfocado en por qué Go es superior para el desarrollo de APIs REST de alto rendimiento. Destaca el rendimiento, la concurrencia, el tipado estático, el manejo de errores y la simplicidad de despliegue."
```

### 1.2 Configuración del entorno de desarrollo Go

**🎯 Concepto:** El entorno de Go requiere la instalación del lenguaje, y una comprensión de GOPATH y Go Modules para la gestión de dependencias.

**🤔 Por qué (para tu dirección a la IA):** Como gerente, debes asegurar una configuración correcta. Los Go Modules son fundamentales para una gestión de dependencias moderna y reproducible. La estructura de directorios es una convención clave para importaciones canónicas y legibilidad.

**🤖 Prompt de Instrucción:**

```
"Genia, prepara instrucciones detalladas para configurar un entorno de desarrollo Go en Linux, macOS y Windows. Incluye: descarga, instalación, configuración de $GOPATH, inicialización de un nuevo proyecto con go mod init, y un programa 'Hello, World!' con el comando para ejecutarlo."
```

---

## 🌐 Módulo 2: Fundamentos del Desarrollo Backend con Go

### 2.1 Manejo de HTTP: De Express/NestJS a net/http y frameworks

**🎯 Concepto:** Las APIs REST en Go se construyen con el paquete nativo `net/http`. Para funcionalidades más avanzadas, existen frameworks como Fiber o Gorilla Mux.

**🤔 Por qué (para tu dirección a la IA):** `net/http` es la base eficiente para la web en Go. Para un desarrollador de Node.js, Fiber es una excelente opción por su sintaxis similar a Express, lo que permite aplicar patrones conocidos en un nuevo contexto.

**🤖 Prompt de Instrucción:**

```
"Genia, crea un esqueleto de API REST en Go. Primero, usando net/http, implementa una ruta / y una ruta /items que manejen GET y POST. Luego, refactoriza este código usando el framework Fiber. Explica las ventajas de Fiber sobre net/http para desarrolladores con experiencia en Express."
```

### 2.2 Estructura de Proyectos y Mejores Prácticas (Clean Architecture en Go)

**🎯 Concepto:** La filosofía de Go prioriza la simplicidad y la legibilidad. Se recomienda una arquitectura de tres capas (API, lógica de negocio, base de datos) separadas en paquetes. Las interfaces son cruciales para el desacoplamiento.

**🤔 Por qué (para tu dirección a la IA):** Debes dirigir a la IA para que no "sobre-ingenierice" la arquitectura. La IA debe entender que las interfaces son herramientas para la flexibilidad y las pruebas. El control de visibilidad (capitalización) es fundamental para la mantenibilidad.

**🤖 Prompt de Instrucción:**

```
"Genia, diseña una estructura de proyecto Go para una aplicación backend que gestione usuarios, siguiendo una arquitectura de tres capas simple. Incluye un ejemplo de cómo usar interfaces para desacoplar las capas de servicio y repositorio. Explica cómo la capitalización de la primera letra en Go controla la visibilidad."
```

---

## 🗄️ Módulo 3: Gestión de Datos con PostgreSQL

### 3.1 Conexión y consultas a PostgreSQL: De TypeORM a database/sql

**🎯 Concepto:** Go interactúa con bases de datos SQL a través del paquete `database/sql` y drivers específicos. La comunidad Go prefiere un enfoque "SQL First", evitando ORMs complejos.

**🤔 Por qué (para tu dirección a la IA):** Como gerente, debes guiar a la IA lejos de la mentalidad de ORM de TypeScript. El enfoque "SQL First" es menos propenso a errores y se alinea con la filosofía de Go.

**🤖 Prompt de Instrucción:**

```
"Genia, implementa un repositorio para usuarios en Go que se conecte a PostgreSQL. Utiliza database/sql y el driver github.com/lib/pq. Incluye funciones para conectar, insertar, y recuperar usuarios. Explica por qué este enfoque es preferido sobre los ORMs tradicionales."
```

---

## 🔐 Módulo 4: Seguridad y Funcionalidades Avanzadas

### 4.1 Autenticación y Autorización (JWT)

**🎯 Concepto:** Los tokens JWT son comunes para autenticación. La autorización se puede implementar con modelos como RBAC, ABAC y ReBAC.

**🤔 Por qué (para tu dirección a la IA):** La seguridad es crítica. Debes saber que, aunque JWT es un estándar, la implementación es compleja. Es crucial comprender los modelos de autorización para dirigir a la IA hacia la solución adecuada.

**🤖 Prompt de Instrucción:**

```
"Genia, implementa un sistema de autenticación y autorización basado en JWT para nuestra API REST en Go. Incluye la generación de tokens, un middleware de Fiber para proteger rutas y una discusión sobre la gestión de roles. Analiza por qué se deben considerar servicios de terceros para la autenticación en producción."
```

### 4.2 Logging y Monitoreo

**🎯 Concepto:** Go promueve el manejo explícito de errores. El paquete `log` es una herramienta básica. Es una buena práctica implementar niveles de logging (info, warning, error).

**🤔 Por qué (para tu dirección a la IA):** Debes dirigir a la IA para que el logging sea informativo y útil para la depuración. Los niveles de logging son esenciales para categorizar mensajes y facilitar el análisis.

**🤖 Prompt de Instrucción:**

```
"Genia, crea un logger personalizado en Go que soporte diferentes niveles de logging (Info, Warning, Error) y explique cómo se integra con el manejo explícito de errores."
```

### 4.3 Documentación de API (Swagger)

**🎯 Concepto:** La documentación clara es fundamental. Herramientas como Swagger (OpenAPI) son recomendadas para documentar y probar endpoints en Go.

**🤔 Por qué (para tu dirección a la IA):** Como gerente, debes asegurar que la IA documente el código. Una documentación generada automáticamente mejora la colaboración y reduce errores.

**🤖 Prompt de Instrucción:**

```
"Genia, describe cómo implementar la documentación de nuestra API REST en Go utilizando Swagger/OpenAPI. Proporciona un ejemplo de cómo documentar un endpoint de creación de usuario (POST /users) y explica la importancia de la documentación clara."
```

### 4.4 Gestión de Configuración: De .env a Viper

**🎯 Concepto:** Para una gestión de configuración robusta y segura en Go, se utiliza la librería Viper.

**🤔 Por qué (para tu dirección a la IA):** Debes asegurar que la configuración sea segura y adaptable a diferentes entornos. Viper ofrece flexibilidad, prioridad de sobrescritura de variables de entorno y mapeo seguro a un struct.

**🤖 Prompt de Instrucción:**

```
"Genia, implementa un sistema de gestión de configuración para nuestra API en Go utilizando Viper. El sistema debe leer desde un archivo YAML, permitir que las variables de entorno lo sobrescriban y mapear la configuración a un struct. Explica por qué este enfoque es superior a usar .env."
```

---

## 🚀 Módulo 5: Despliegue, Pruebas y Productividad con IA

### 5.1 Pruebas en Go: Unitarias y de Integración

**🎯 Concepto:** Go tiene un framework de testing integrado (`go test`). Para pruebas de integración con bases de datos, se usan contenedores de prueba (Docker) con herramientas como Testcontainers.

**🤔 Por qué (para tu dirección a la IA):** Debes dirigir a la IA para que el código sea testeable. Es crucial que implemente pruebas de integración con bases de datos reales para validar la persistencia.

**🤖 Prompt de Instrucción:**

```
"Genia, implementa un conjunto de pruebas para nuestra aplicación Go. Incluye una prueba unitaria para la capa de servicio y un prompt para configurar pruebas de integración para la API, describiendo cómo usar Testcontainers para levantar una base de datos PostgreSQL."
```

### 5.2 Despliegue de Aplicaciones Go

**🎯 Concepto:** Go compila a binarios autocontenidos (`go build`). Las ldflags permiten inyectar información dinámica en el binario y las "build tags" facilitan la compilación condicional.

**🤔 Por qué (para tu dirección a la IA):** Debes aprovechar la generación de binarios autocontenidos. Es crucial dirigir a la IA para usar ldflags para la observabilidad y las "build tags" para la gestión multiplataforma.

**🤖 Prompt de Instrucción:**

```
"Genia, crea una guía completa para el despliegue de nuestra aplicación Go. Incluye cómo compilar a un binario autocontenido, cómo usar ldflags para inyectar información de versión, y cómo utilizar 'build tags' para la compilación condicional."
```

---

## 🤖 Módulo 6: Dirigiendo a la Genia (GitHub Copilot con Claude Sonnet 4) como Empleado Desarrollador

### 👨‍💼 Tu Rol como Gerente de la Genia:

- **🏗️ Arquitecto y Diseñador:** Tú defines la arquitectura y los patrones de alto nivel
- **📝 Prompt Engineer:** Tu habilidad clave es formular instrucciones claras, concisas y contextuales que la Genia pueda entender y ejecutar eficientemente en Go
- **🔍 Revisor de Código:** La Genia generará código, pero siempre requiere tu supervisión para asegurar la calidad y la idiomaticidad de Go
- **🎓 Mentor y Evaluador:** Si el código no es óptimo, tu tarea es entender por qué y darle retroalimentación

### 🎯 ¿Cómo Dirigir a la Genia?

#### **Generación de Esqueletos y Boilerplate:**

```
"Genia, crea la estructura de directorios para una nueva aplicación Go siguiendo una arquitectura de tres capas."
```

#### **Traducción de Patrones:**

```
"Genia, ¿cómo se traduciría un middleware de Express.js para autenticación JWT a un middleware idiomático en Go?"
```

#### **Implementación Detallada:**

```
"Genia, implementa la función CreateUser en el UserService. Asegúrate de incluir validación y manejo explícito de errores."
```

#### **Refactorización y Mejora:**

```
"Genia, revisa el UserRepository y refactorízalo para que los valores NULL de PostgreSQL se manejen con tipos nulos de Go."
```

### ✅ ¿Cómo Evaluar el Trabajo de la Genia?

- **🐹 Idiomaticidad de Go:** ¿El código parece haber sido escrito por un "gopher" experimentado?
- **✅ Corrección y Completitud:** ¿Resuelve el problema y maneja los casos de borde?
- **⚡ Eficiencia:** ¿Es performante y evita el boilerplate excesivo?
- **🔄 Consistencia:** ¿Se alinea con la estructura de proyecto y las decisiones que has definido?
- **🔐 Seguridad:** ¿La implementación de seguridad es robusta y sigue las recomendaciones?

### ⚠️ Limitaciones y Expectativas:

> **Importante:** La Genia es una herramienta, no un sustituto de tu conocimiento.

- 🎯 El código generado puede no siempre ser perfecto. Tu juicio crítico es insustituible
- 🧠 La Genia te permite concentrarte en el "qué" y "por qué" de la solución, delegando gran parte del "cómo" bajo tu supervisión
- 📈 Aumenta tu productividad, pero siempre bajo tu dirección experta

---

## 📈 Información del Curso

| **Aspecto**              | **Detalle**                                                   |
| ------------------------ | ------------------------------------------------------------- |
| **👥 Dirigido a**        | Desarrolladores JavaScript/TypeScript con experiencia backend |
| **⏱️ Duración Estimada** | 6 módulos • 35+ horas de contenido                            |
| **📊 Nivel**             | Intermedio a Avanzado                                         |
| **🛠️ Prerrequisitos**    | Node.js, Express, TypeORM, PostgreSQL, JWT                    |
| **🎯 Modalidad**         | Práctica dirigida con asistente IA                            |
| **📅 Actualizado**       | Septiembre 2025                                               |

---

## 🔗 Recursos Adicionales

- 📚 [Documentación oficial de Go](https://golang.org/doc/)
- 🐹 [Go by Example](https://gobyexample.com/)
- 🏗️ [Effective Go](https://golang.org/doc/effective_go.html)
- 🔧 [Awesome Go](https://awesome-go.com/)
- 🤖 [Best Practices for AI-Assisted Development](https://docs.github.com/en/copilot)

---

> **💡 Nota:** Este curso representa un enfoque innovador que combina el aprendizaje de Go con las técnicas modernas de desarrollo asistido por IA, preparando a los desarrolladores para el futuro de la programación colaborativa human-AI.
