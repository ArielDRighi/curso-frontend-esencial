# 🚀 Curso: Frontend Esencial para Desarrolladores Backend

## 📋 Información del Curso

**Duración Total:** 18 semanas  
**Modalidad:** Intensivo con práctica asistida por IA  
**Prerrequisitos:** Conocimientos sólidos en Backend (Node.js, Express, TypeScript, NestJS, PostgreSQL)

---

## 🎯 Objetivo General

Capacitar a desarrolladores backend en los fundamentos, mejores prácticas e implementación del desarrollo frontend moderno, utilizando **React**, **TypeScript**, **Next.js** y **Tailwind CSS**, con un entendimiento profundo de las interacciones entre el cliente y el servidor y los principios de **diseño UI/UX**.

---

## 🧠 Filosofía del Curso

> **"No solo cómo hacer las cosas, sino por qué se hacen de esa manera"**

Este curso te guiará para usar herramientas de IA de forma efectiva, validando sus sugerencias con conocimiento fundamental sólido.

---

## 📚 Contenido del Curso

### 🎨 Módulo 0: Fundamentos de UI/UX para Desarrollo Frontend Asistido por IA

**⏱️ Duración: 2 semanas**

> **Objetivo:** Comprender los principios clave de diseño de interfaces y experiencia de usuario, así como las herramientas necesarias para interpretar y auditar un diseño, optimizando la colaboración con IA.

#### 0.1 Conceptos Clave de UI/UX

_UI/UX son disciplinas que se enfocan en hacer que las aplicaciones sean usables y agradables para los usuarios finales, similar a como diseñas APIs pensando en otros desarrolladores._

- **UX (User Experience):** Cómo se siente y fluye la interacción del usuario. Evalúa facilidad de uso, eficiencia y satisfacción  
  _Es como el diseño de tu API: si es intuitiva, consistente y fácil de usar, la experiencia del desarrollador es buena._

- **UI (User Interface):** La capa visual, estética y tangible con la que el usuario interactúa  
  _Son los botones, formularios, colores y tipografía que el usuario ve. Como la documentación de tu API: debe ser clara y visualmente organizada._

- **Diseño Centrado en el Usuario (UCD):** Proceso iterativo en el que las decisiones de diseño se basan en necesidades reales del usuario  
  _Similar a diseñar endpoints basándote en casos de uso reales, no en lo que asumes que necesitan._

- **Accesibilidad (A11y):** Garantizar que la aplicación pueda ser usada por personas con discapacidades (lectores de pantalla, navegación por teclado, etc.)  
  _Es como asegurar que tu API funcione con diferentes clientes y librerías, no solo con una herramienta específica._

#### 0.2 Principios Fundamentales de UX

_Estos principios aseguran que los usuarios puedan completar sus tareas de forma eficiente, similar a como diseñas APIs que sean predecibles y confiables._

- **Claridad antes que estética:** Lo bonito importa, pero la comprensión inmediata es prioritaria  
  _Un botón debe verse claramente como botón, aunque no sea el más hermoso. Como un endpoint que debe ser obvio qué hace, aunque el nombre no sea elegante._

- **Prevención de errores:** Diseñar flujos que eviten acciones no deseadas  
  _Validaciones en el frontend, confirmaciones para acciones destructivas. Como validar parámetros antes de procesar en tu API._

- **Consistencia de interacción:** Patrones iguales para acciones iguales  
  _Si un botón rojo significa "eliminar" en una parte, debe significar lo mismo en toda la app. Como usar códigos de estado HTTP consistentes._

- **Minimizar carga cognitiva:** Evitar que el usuario tenga que "pensar" demasiado  
  _No sobrecargar la interfaz con opciones. Como mantener tus endpoints simples y enfocados en una sola responsabilidad._

- **Feedback inmediato:** Confirmar acciones, estados y errores en tiempo real  
  _Mostrar loading, confirmaciones y errores de forma clara. Como retornar respuestas informativas desde tu API._

#### 0.3 Principios Fundamentales de UI

- **Jerarquía visual:** Uso estratégico de tamaño, color y posición para guiar la atención
- **Espaciado y alineación:** Crear armonía y orden en la interfaz
- **Tipografía funcional:** Legibilidad en todos los dispositivos
- **Paleta de colores funcional:** Contraste suficiente, consistencia con la marca y cumplimiento de guías WCAG
- **Componentes reutilizables:** Unificar botones, inputs y layouts para coherencia

#### 0.4 Diseño Responsivo y Adaptativo

- **Mobile-first:** Diseñar pensando primero en pantallas pequeñas
- **Breakpoints clave:** `sm`, `md`, `lg`, `xl` en Tailwind
- **Pruebas cruzadas:** Validar UI en distintos dispositivos y navegadores

#### 0.5 Herramientas para Auditar y Trabajar con Diseños

- **Figma / Penpot:** Lectura e inspección de diseños (medidas, colores, assets)
- **Storybook:** Catálogo vivo de componentes UI para testear y documentar
- **Wave Accessibility Tool o axe DevTools:** Auditoría de accesibilidad
- **Contrast Checker:** Validar niveles de contraste de color
- **Zeplin:** Para colaboración con diseñadores

#### 0.6 UI/UX con IA

- **Prompts para UI:** Cómo pedir a la IA que sugiera estructuras visuales coherentes
- **Validación de código UI con IA:** Revisar si la implementación respeta el diseño original
- **Generación de componentes accesibles:** Solicitar que el código cumpla estándares WCAG 2.1

#### 0.7 Patrones de Diseño UI Comunes

- **Patrones de Navegación:** Menús hamburguesa, breadcrumbs, paginación
- **Patrones de Formularios:** Validación en tiempo real, estados de carga, mensajes de error
- **Patrones de Feedback:** Toasts, modales, tooltips, progress bars
- **Patrones de Contenido:** Cards, listas, tablas responsivas, carruseles

#### 0.8 Sistema de Design Tokens

- **Concepto:** Variables reutilizables para mantener consistencia visual
- **Implementación en Tailwind:** Personalización del tema
- **Espaciado consistente:** Escala de 4pt/8pt
- **Jerarquía tipográfica:** Escalas modulares

#### 0.9 Ejercicio Práctico

1. Analizar un diseño en Figma y escribir un prompt para IA que genere:
   - Estructura HTML/JSX
   - Estilos en Tailwind
   - Accesibilidad integrada (atributos aria, label)
2. Implementar la UI y probarla con herramientas de accesibilidad

---

### 🌐 Módulo 1: Fundamentos del Desarrollo Web y el Ecosistema Frontend

**⏱️ Duración: 2 semanas**

#### 1.1 Introducción al Frontend desde la Perspectiva Backend

_El frontend es tu interfaz de usuario, mientras que tu backend es el motor que procesa la lógica de negocio. Ambos se comunican a través de APIs._

- **¿Qué es el Frontend?** La capa visual e interactiva que el usuario final ve  
  _Es la parte que se ejecuta en el navegador del usuario, como una app móvil pero en web. Consume los datos de tu backend._

- **El Navegador como Cliente:** El navegador es tu "cliente" principal, ejecutando código JavaScript  
  _El navegador hace peticiones HTTP a tu backend, igual que Postman, pero también renderiza la interfaz y maneja interacciones del usuario._

- **Herramientas de Desarrollador del Navegador (DevTools):** Tu principal herramienta para depurar  
  _Similar a los logs de tu servidor, pero para el frontend. Puedes ver requests, errores, y el estado de la aplicación._

- **Ciclo de Vida de una Petición Web:** Petición del navegador → Servidor → Respuesta del servidor → Renderizado en el navegador  
  _El navegador solicita tu HTML/CSS/JS, tu servidor responde, y luego el navegador "pinta" la interfaz y ejecuta la lógica._

#### 1.2 HTML: La Estructura del Contenido

_HTML es como el esquema de tu base de datos: define la estructura y jerarquía, pero no la funcionalidad ni el estilo._

- **Concepto:** El lenguaje de marcado estándar para crear páginas web  
  _Es un lenguaje declarativo que describe qué elementos tiene tu página: títulos, párrafos, botones. No tiene lógica, solo estructura._

- **Etiquetas Fundamentales:** `<html>`, `<head>`, `<body>`, `<div>`, `<p>`, `<h1>` a `<h6>`, `<a>`, `<img>`  
  _Son como contenedores que organizan tu contenido. `<div>` es como un objeto genérico, `<p>` para texto, `<a>` para enlaces._

- **Elementos Semánticos:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`  
  _Etiquetas que indican el propósito del contenido, no solo su apariencia. Como nombrar bien tus variables y funciones._

- **Formularios:** Cómo los usuarios interactúan y envían datos  
  _Los inputs, selects y buttons que permiten al usuario enviar información a tu backend, similar a los parámetros de una API._

#### 1.3 CSS: Estilizando la Experiencia de Usuario

_CSS es como la configuración de presentación: define cómo se ven los elementos HTML, pero no su funcionalidad._

- **Concepto:** El lenguaje utilizado para dar estilo y diseño a las páginas web  
  _Controla colores, tamaños, posiciones y animaciones. Es puramente visual, como elegir el formato JSON vs XML para tu API._

- **Selectores:** Elemento, clase, ID, atributos  
  _Formas de "apuntar" a elementos HTML específicos para aplicarles estilos. Como filtros en una consulta de base de datos._

- **El Modelo de Caja (Box Model):** margin, border, padding, content  
  _Cada elemento HTML es una caja rectangular. Margin es el espacio exterior, padding el interior, como los espaciados en un layout._

- **Layouts Modernos:**

  - **Flexbox:** Para alinear y distribuir elementos en una sola dimensión  
    _Como organizar elementos en una fila o columna con distribución automática del espacio._
  - **Grid:** Para crear diseños complejos bidimensionales  
    _Como una tabla pero más flexible, para layouts tipo dashboard con filas y columnas._

- **Diseño Responsivo:** Adaptar tu interfaz para diferentes tamaños de pantalla  
  _Como hacer que tu API responda diferente según el cliente, pero para dispositivos móviles vs desktop._

#### 1.4 JavaScript: La Lógica Interactiva del Frontend

_JavaScript es tu lenguaje de programación para el frontend, como Node.js en el backend, pero se ejecuta en el navegador del usuario._

- **Concepto:** El lenguaje de programación que añade interactividad  
  _Maneja clicks, validaciones, llamadas a APIs y actualizaciones dinámicas. Es el único lenguaje que ejecutan los navegadores nativamente._

- **Fundamentos Modernos (ES6+):** `var`, `let`, `const`, tipos de datos, operadores, estructuras de control, bucles  
  _Similar a cualquier lenguaje: variables, condiciones, loops. ES6+ son las versiones modernas con mejores características._

- **Manipulación del DOM:** Acceder y modificar elementos HTML  
  _El DOM es la representación en memoria de tu HTML. Puedes cambiar texto, agregar elementos, como modificar objetos en tu código._

- **JavaScript Asíncrono:** callbacks, Promises, async/await  
  _Como manejas operaciones asíncronas en Node.js, pero en el navegador. Para no bloquear la interfaz mientras esperas respuestas._

- **Trabajo con APIs (fetch):** Realizar peticiones HTTP a tu backend  
  _Como usar axios o fetch en Node.js, pero desde el navegador hacia tu servidor. El frontend consume tu API REST._

#### 1.5 Git y GitHub: Control de Versiones para Colaboración

- **Concepto:** Un sistema de control de versiones distribuido
- **Comandos Esenciales:** `init`, `clone`, `add`, `commit`, `status`, `log`, `branch`, `checkout`, `merge`, `pull`, `push`, `remote`
- **Flujos de Trabajo:** fork, pull request, code review

#### 1.6 Fundamentos de Performance Web

- **Core Web Vitals:** LCP, FID, CLS
- **Optimización de imágenes y assets**
- **Lazy loading y code splitting**
- **Herramientas:** Lighthouse, PageSpeed Insights

---

### ⚛️ Módulo 2: React y TypeScript: La Base del Frontend Moderno

**⏱️ Duración: 4 semanas**

#### 2.1 Introducción a React: Componentes y Reactividad

_React es una librería que hace que crear interfaces complejas sea más manejable, dividiendo la UI en piezas pequeñas y reutilizables._

- **Concepto:** Una librería de JavaScript para construir interfaces de usuario  
  _No es un framework completo como NestJS. Es una herramienta específica para crear interfaces, como Express es para APIs._

- **JSX:** Sintaxis que permite escribir HTML dentro de JavaScript  
  _Es HTML con superpoderes: puedes insertar variables, condiciones y loops directamente. Se compila a JavaScript normal._

- **Componentes:** Pequeñas piezas de UI reutilizables e independientes  
  _Como funciones que retornan HTML. Cada botón, formulario o card puede ser un componente separado._

- **Props (Propiedades):** Cómo los datos son pasados de un componente padre a un componente hijo  
  _Como parámetros de función. El componente padre envía datos al hijo para que los use._

- **Estado (useState):** Datos que un componente maneja internamente  
  _Variables que cuando cambian, React automáticamente actualiza la UI. Como variables reactivas que triggean re-renders._

#### 2.2 TypeScript en Frontend con React

_TypeScript en frontend funciona igual que en backend: previene errores y mejora la experiencia de desarrollo._

- **Concepto:** Un superset de JavaScript que añade tipado estático  
  _Exactamente igual que usar TypeScript en Node.js, pero para código que se ejecuta en el navegador._

- **¿Por qué TypeScript?** Previene errores, mejora el autocompletado y sirve como documentación implícita  
  _Los mismos beneficios que ya conoces del backend: catch de errores en tiempo de desarrollo, mejor IntelliSense._

- **Tipos Básicos e Interfaces:** Definición de interfaces para props, estados y estructuras de datos  
  _Como definir tipos para tus DTOs o models, pero para componentes React y datos de la UI._

#### 2.3 Gestión del Estado en React

_El estado es información que puede cambiar durante la ejecución y que afecta lo que el usuario ve. Como variables en memoria que triggean actualizaciones de UI._

- **Lifting State Up:** Compartir estado entre componentes  
  _Cuando dos componentes necesitan los mismos datos, mueves el estado al componente padre común. Como compartir variables entre funciones._

- **Context API:** Una forma de compartir estados a través del árbol de componentes  
  _Como variables globales, pero controladas. Evita pasar props a través de muchos niveles de componentes._

- **useReducer Hook:** Una alternativa a useState para manejar lógica de estado más compleja  
  _Como Redux pero simple. Para cuando el estado tiene lógica compleja de actualización._

**Librerías de Gestión de Estado:**

- **Zustand:** Una alternativa más simple y ligera
- **React Query / Tanstack Query:** Herramienta potente para la gestión de datos asíncronos (caché, sincronización)

**Guía de Decisión Rápida:**

- `useState`: Para estado local de un solo componente
- Context API: Para estado global simple
- Zustand: Para estado global complejo y compartido
- Tanstack Query: Específicamente para gestionar datos del servidor

#### 2.4 Hooks de React y Custom Hooks

_Los Hooks son funciones especiales de React que te permiten "enganchar" funcionalidades como estado y ciclo de vida en componentes funcionales. Son como métodos utilitarios que React te proporciona._

- **useEffect:** Para manejar efectos secundarios (ej. fetching de datos)  
  _Los efectos secundarios son operaciones que no están directamente relacionadas con renderizar la UI, como llamadas a APIs, timers, o suscripciones. useEffect se ejecuta después de que el componente se renderiza._

- **useRef:** Para acceder a elementos DOM  
  _El DOM (Document Object Model) es la representación en memoria de los elementos HTML de tu página. useRef te permite obtener una referencia directa a un elemento HTML específico, como hacer focus en un input o medir dimensiones._

- **Custom Hooks:** Funciones que te permiten reutilizar lógica con estado  
  _El estado son datos que pueden cambiar durante la vida de un componente (como el valor de un input o si un modal está abierto). Los Custom Hooks te permiten extraer esta lógica para reutilizarla en múltiples componentes._

#### 2.5 Formularios en React

- **react-hook-form:** Rendimiento optimizado
- **zod:** Librería de validación de esquemas

---

### 🎨 Módulo 3: Tailwind CSS: Estilizado Utilidad-Primero

**⏱️ Duración: 2 semanas**

#### 3.1 Introducción a Tailwind CSS

_Tailwind es un framework de CSS que proporciona clases utilitarias prehechas, como tener un toolkit de funciones CSS listas para usar._

- **Concepto:** Un framework CSS "utility-first" que proporciona clases predefinidas  
  _En lugar de escribir CSS personalizado, usas clases como `text-red-500` o `p-4`. Como usar librerías en lugar de escribir todo desde cero._

- **¿Por qué Tailwind?** Rapidez de desarrollo, consistencia y optimización  
  _No tienes que inventar nombres de clases, los estilos son consistentes, y se optimiza automáticamente removiendo CSS no usado._

- **Principios "Utility-First":** Cómo se aplican los estilos componiendo clases  
  _Combinas múltiples clases pequeñas para lograr el diseño deseado. Como usar funciones puras que combinan para crear comportamiento complejo._

- **Configuración (tailwind.config.js):** Personalizar el tema  
  _Como el archivo de configuración de tu aplicación: defines colores, espaciados y breakpoints personalizados._

#### 3.2 Aplicando Estilos y Responsive Design con Tailwind

_Las clases de Tailwind son como comandos específicos: cada una hace una cosa específica y las combinas para lograr el resultado deseado._

- **Clases de Utilidad:** Layout (Flexbox, Grid), espaciado (`p-4`, `m-2`), bordes, tipografía (`text-lg`, `font-bold`), colores  
  _Cada clase hace una cosa: `p-4` agrega padding, `text-lg` aumenta el tamaño del texto. Como funciones puras._

- **Diseño Responsivo en Tailwind:** Uso de prefijos de breakpoints (`sm:`, `md:`, `lg:`)  
  _Aplicas estilos diferentes según el tamaño de pantalla. `md:text-lg` significa "texto grande solo en pantallas medianas o mayores"._

- **Componentes Reutilizables con Tailwind:** Cómo agrupar clases de Tailwind dentro de componentes de React  
  _Creas componentes React que internamente usan clases Tailwind, para no repetir las mismas combinaciones de clases._

---

### 🚀 Módulo 4: Next.js: El Framework de Producción para React

**⏱️ Duración: 3 semanas**

#### 4.1 Introducción a Next.js

_Next.js es a React lo que NestJS es a Node.js: un framework que agrega estructura, herramientas y mejores prácticas sobre la librería base._

- **Concepto:** Un meta-framework de React que añade funcionalidades para la producción  
  _React por sí solo es solo una librería de UI. Next.js agrega routing, optimizaciones, server-side rendering y tooling._

- **¿Por qué Next.js?** Mejora el rendimiento, el SEO y la experiencia de desarrollador  
  _Como usar Express con middlewares vs Node.js puro. Next.js resuelve problemas comunes del desarrollo React._

- **Arquitectura de Next.js:** El sistema de "App Router"  
  _La nueva forma de manejar rutas en Next.js. Basado en carpetas y archivos, como las rutas en Express pero automáticas._

#### 4.2 Tipos de Renderizado en Next.js (Concepto Clave)

_Como en backend puedes cachear respuestas o generar contenido dinámico, Next.js te permite elegir cómo y dónde se genera el HTML._

- **Client-Side Rendering (CSR):** El navegador renderiza la página  
  _Como una SPA tradicional. El servidor envía JavaScript y el navegador construye la página. Más interactivo pero más lento inicialmente._

- **Server-Side Rendering (SSR):** Los componentes se renderizan en el servidor  
  _El servidor genera el HTML completo antes de enviarlo. Como generar un reporte PDF en el servidor antes de enviarlo._

- **Static Site Generation (SSG):** El sitio se pre-renderiza a HTML estático en el momento del "build"  
  _Como compilar tu aplicación. Las páginas se generan una vez durante el deploy y se sirven como archivos estáticos._

- **Incremental Static Regeneration (ISR):** Permite que páginas estáticas se regeneren  
  _Como cache con TTL. Las páginas estáticas se regeneran en background cuando expiran._

- **Server Components vs. Client Components:** Entender qué se ejecuta en el servidor y qué en el cliente  
  _Server Components se ejecutan en el servidor (como tus controllers), Client Components en el navegador (como JavaScript tradicional)._

#### 4.3 Enrutamiento en Next.js (App Router)

_Como Express define rutas con `app.get('/users', handler)`, Next.js define rutas con carpetas y archivos._

- **Concepto:** El sistema de rutas basado en la estructura de directorios  
  _Cada carpeta en `src/app` es una ruta. `/users` se crea poniendo un archivo `page.tsx` en la carpeta `src/app/users`._

- **Rutas Dinámicas:** Creación de URLs personalizadas  
  _Como `/:id` en Express. En Next.js usas `[id]` como nombre de carpeta para crear rutas con parámetros._

- **Layouts:** Compartir UI entre múltiples rutas  
  _Como middlewares que se ejecutan en múltiples rutas, pero para UI. Headers, sidebars que se mantienen entre páginas._

- **Loading UI y Error Handling:** Cómo manejar los estados de carga y errores  
  _Archivos especiales `loading.tsx` y `error.tsx` que Next.js muestra automáticamente durante cargas o errores._

#### 4.4 Carga de Datos y API Routes

_Next.js puede actuar como cliente (consumiendo tu API) y también como servidor (proporcionando endpoints adicionales)._

- **Data Fetching en Next.js:** Uso de la API fetch con optimizaciones y caché integradas  
  _Como hacer peticiones HTTP desde tu backend a otros servicios, pero desde Next.js hacia tu API. Con cache automático._

- **API Routes (Route Handlers):** Creación de endpoints de backend directamente dentro de tu proyecto Next.js  
  _Como tener controllers de Express dentro de tu proyecto frontend. Útil para proxies o lógica simple._

#### 4.5 Optimización y Despliegue con Next.js

- **Optimización Automática:** Imágenes (next/image), carga diferida (lazy loading)
- **Despliegue con Vercel:** Integración fluida y sencilla

---

### 🔗 Módulo 5: Conectando Frontend y Backend: Sinergia de Datos

**⏱️ Duración: 2 semanas**

#### 5.1 Diseño de APIs desde la Perspectiva Frontend

_Como cliente de tu propia API, entenderás mejor qué hace que una API sea fácil o difícil de consumir desde el frontend._

- **APIs RESTful:** Reafirmar los principios y las mejores prácticas  
  _Los mismos conceptos que ya conoces, pero ahora los verás desde el lado del consumidor. URLs intuitivas, métodos HTTP correctos._

- **Formato de Datos (JSON):** Comunicación estándar entre frontend y backend  
  _El mismo JSON que generas en tu backend es lo que consume el frontend. Importante mantener contratos de datos consistentes._

- **Manejo de Errores desde el Backend:** Diseñar respuestas de error consistentes  
  _El frontend necesita saber qué error ocurrió y cómo mostrarlo al usuario. Códigos de estado y mensajes claros son cruciales._

#### 5.2 Autenticación y Autorización

_Los mismos conceptos de auth que manejas en backend, pero desde la perspectiva de cómo el frontend los consume y almacena._

**Flujos Comunes:** Autenticación basada en tokens (JWT)  
_El mismo flujo: login → backend retorna token → frontend lo guarda → frontend lo envía en cada petición._

**Almacenamiento Seguro de Credenciales:**

- **Cookies (HttpOnly, Secure):** Opción recomendada  
  _El browser maneja las cookies automáticamente. HttpOnly previene acceso desde JavaScript, más seguro._

- **localStorage:** Menos seguro  
  _Como variables globales en el browser. Fácil de usar pero accesible desde JavaScript, vulnerable a XSS._

#### 5.3 Variables de Entorno y CORS

_Los mismos conceptos de configuración que usas en backend, pero adaptados para el entorno del frontend._

- **Variables de Entorno en Frontend:** Gestionar URLs de API, claves públicas, etc., de forma segura  
  _Como process.env en Node.js, pero para el browser. Solo variables públicas (que empiecen con NEXT*PUBLIC*) se incluyen en el build._

- **CORS:** Entender y resolver problemas de seguridad cuando el frontend y el backend están en dominios diferentes  
  _El error que ya conoces del backend, pero ahora lo enfrentas como cliente. El browser bloquea peticiones cross-origin por seguridad._

#### 5.4 Breve Introducción a Pruebas Automatizadas en Frontend

- **Concepto:** Escribir tests para componentes de React y lógica de JavaScript
- **Herramientas:** Jest, Vitest, React Testing Library

#### 5.5 Debugging y Herramientas de Desarrollo

- **React Developer Tools**
- **Network tab para debugging de APIs**
- **Error boundaries en React**
- **Logging y monitoreo básico**

---

### 🛠️ Módulo 6: Proyecto Práctico Integrador

**⏱️ Duración: 3 semanas**

#### Construcción de un E-commerce Sencillo:

1. **Diseño y Maquetación:** Utilizando HTML y Tailwind CSS
2. **Desarrollo de Componentes:** Crear componentes reutilizables aplicando TypeScript
3. **Integración con API Backend:** Consumir tus propios endpoints
4. **Gestión de Estado:** Usar Zustand o React Context para el estado del carrito
5. **Enrutamiento con Next.js:** Implementar rutas estáticas y dinámicas
6. **Despliegue:** Publicar el proyecto en Vercel

#### 6.5 Consideraciones de Seguridad Frontend

- **Validación client-side vs server-side**
- **XSS prevention**
- **Content Security Policy básico**
- **Sanitización de inputs**

---

### 🧪 Módulo 7: Testing Visual y Accesibilidad en Frontend

**⏱️ Duración: 1 semana**

> **Objetivo:** Aprender a automatizar la validación visual y de accesibilidad para garantizar calidad constante en las implementaciones.

#### 7.1 Testing Visual

- **Qué es:** Comparar capturas de pantalla de la UI en distintos momentos para detectar cambios no intencionales
- **Herramientas:** Storybook + Chromatic, Playwright, Percy
- **Buenas prácticas:** Mantener componentes pequeños y aislados

#### 7.2 Testing de Accesibilidad

- **Objetivo:** Garantizar que la app cumpla estándares WCAG
- **Herramientas:** axe-core, Lighthouse, Wave

**Checklist básico:**

- ✅ Contraste mínimo 4.5:1
- ✅ Navegación por teclado funcional
- ✅ Texto alternativo en imágenes
- ✅ Etiquetas correctas en formularios

#### 7.3 Ejercicio Práctico

Implementar un componente UI con Tailwind y React, configurarlo en Storybook, ejecutar un test visual y uno de accesibilidad, corregir los problemas detectados y volver a testear.

---

### ⚙️ Módulo 8: Workflows de Desarrollo y Despliegue

**⏱️ Duración: 1 semana**

#### 8.1 Setup de Desarrollo Local

- **Configuración de VS Code para React/TypeScript**
- **Extensions esenciales**
- **Configuración de ESLint y Prettier**
- **Hot reload y desarrollo eficiente**

#### 8.2 CI/CD para Frontend

- **GitHub Actions básico**
- **Automated testing en pipeline**
- **Despliegue automático a Vercel**
- **Preview deployments para pull requests**

#### 8.3 Monitoring y Analytics

- **Sentry para error tracking**
- **Google Analytics 4 básico**
- **Performance monitoring con Web Vitals**

---

## 🤖 Uso de la Inteligencia Artificial durante el Curso

### Como Compañero de Codificación

Te ayudará con sugerencias de código y patrones optimizados.

### Para Resolver Dudas y Obtener Explicaciones

Pregunta "por qué" ciertos patrones son preferidos.

### Para Generar Código Boilerplate

Pídele que te genere la estructura básica de componentes y configuraciones.

---

## 📁 Apéndice Práctico: Guía de Campo del Desarrollador Frontend

### A. La Arquitectura de un Proyecto Moderno (Next.js con App Router)

```
/
├── .next/
├── .vscode/
├── node_modules/
├── public/
├── src/
│   ├── app/
│   │   ├── api/
│   │   ├── (dashboard)/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   ├── lib/
│   └── styles/
├── .env.local
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
└── tailwind.config.ts
```

### B. El Viaje de un Dato: Del Backend al Componente

#### 1. Tu Backend

Expone un endpoint.

#### 2. Variables de Entorno

Almacenas la URL base de tu API.

#### 3. Capa de Acceso a Datos

Creas una función que usa fetch. Esto centraliza la lógica.

```typescript
// /src/lib/api.ts
import { Product } from "./types"; // Importas tu tipo desde un archivo central

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${process.env.API_BASE_URL}/products`, {
    next: { revalidate: 3600 }, // Opcional: Cache de Next.js (revalida cada hora)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
```

#### 4. Componente de Servidor

Este componente se ejecuta en el servidor. Llama a tu función getProducts y pasa los datos como props.

```typescript
// /src/app/products/page.tsx
import { getProducts } from "@/lib/api";
import ProductCard from "@/components/ui/product-card"; // Componente de UI

export default async function ProductsPage() {
  const products = await getProducts(); // Se ejecuta en el servidor

  return (
    <main>
      <h1>Nuestros Productos</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
```

#### 5. Componente de UI

Un componente simple que solo recibe datos y los muestra. Puede ser un Componente de Servidor o de Cliente.

```typescript
// /src/components/ui/product-card.tsx
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border p-4 rounded-lg">
      <h2>{product.name}</h2>
      <p>${product.price}</p>
    </div>
  );
}
```

### C. Cheatsheet Esencial

#### React Hooks

- `useState`, `useEffect`, `useContext`

#### Next.js (App Router)

- `"use client;"`, Server/Client Component, `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`

#### Tailwind CSS (Clases Comunes)

- `flex`, `grid`, `p-4`, `w-full`, `text-lg`, `rounded-lg`, `md:flex`

#### Git

- `git clone`, `git pull`, `git branch`, `git checkout`, `git add`, `git commit`, `git push`

---

## 📖 Referencia para Dummies: Guía Práctica Completa

### 🧾 Cheat Sheet Esencial

#### JavaScript Moderno (ES6+)

```javascript
// Variables y constantes
const apiUrl = "https://api.ejemplo.com";
let userCount = 0;
const users = [];

// Arrow functions
const fetchUsers = async () => {
  const response = await fetch(apiUrl);
  return response.json();
};

// Destructuring
const { name, email } = user;
const [first, second] = items;

// Template literals
const message = `Hola ${name}, tienes ${userCount} mensajes`;

// Spread operator
const newUsers = [...users, newUser];

// Optional chaining
const streetName = user?.address?.street?.name;
```

#### React Essentials

```jsx
// Componente funcional con TypeScript
interface UserProps {
  name: string;
  email: string;
  isActive?: boolean;
}

export default function User({ name, email, isActive = true }: UserProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Código que se ejecuta cuando el componente se monta
    console.log("Componente montado");

    // Cleanup
    return () => {
      console.log("Componente se desmonta");
    };
  }, []);

  const handleClick = () => {
    setIsLoading(true);
    // Lógica del click
  };

  return (
    <div className="p-4 border rounded">
      <h2>{name}</h2>
      <p>{email}</p>
      <button onClick={handleClick} disabled={isLoading}>
        {isLoading ? "Cargando..." : "Editar"}
      </button>
    </div>
  );
}
```

#### CSS/Tailwind Essentials

```html
<!-- Layout básico -->
<div class="flex items-center justify-between p-4">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="w-full h-screen bg-gray-100">
      <!-- Colores -->
      class="bg-blue-500 text-white" class="bg-red-600 text-red-50" class="bg-gray-200 text-gray-800"

      <!-- Espaciado -->
      class="p-4 m-2 px-6 py-3" class="space-y-4 space-x-2"

      <!-- Responsive -->
      class="text-sm md:text-lg lg:text-xl" class="hidden md:block"
    </div>
  </div>
</div>
```

#### Terminal/Git Commands

```bash
# Git básico
git clone https://github.com/user/repo.git
git add .
git commit -m "mensaje descriptivo"
git push origin main
git pull origin main

# NPM/Yarn
npm install
npm run dev
npm run build
npm start

# Next.js
npx create-next-app@latest mi-proyecto
cd mi-proyecto
npm run dev
```

### 🔗 Integración Full Stack: Ejemplo Completo

#### 1. Backend (Express.js)

**Archivo:** `backend/routes/users.js`

```javascript
// backend/routes/users.js
const express = require("express");
const router = express.Router();

// GET /api/users - Obtener todos los usuarios
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({
      success: true,
      data: users,
      message: "Usuarios obtenidos exitosamente",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener usuarios",
      error: error.message,
    });
  }
});

// POST /api/users - Crear nuevo usuario
router.post("/", async (req, res) => {
  try {
    const { name, email, role } = req.body;

    // Validación básica
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Nombre y email son requeridos",
      });
    }

    const newUser = await User.create({
      name,
      email,
      role: role || "user",
    });

    res.status(201).json({
      success: true,
      data: newUser,
      message: "Usuario creado exitosamente",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al crear usuario",
      error: error.message,
    });
  }
});

module.exports = router;
```

#### 2. Types (TypeScript)

**Archivo:** `frontend/src/types/user.ts`

```typescript
// frontend/src/types/user.ts
export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message: string;
  error?: string;
}

export interface CreateUserData {
  name: string;
  email: string;
  role?: "admin" | "user";
}
```

#### 3. API Functions (Frontend)

**Archivo:** `frontend/src/lib/api/users.ts`

```typescript
// frontend/src/lib/api/users.ts
import { User, ApiResponse, CreateUserData } from "@/types/user";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

export async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: ApiResponse<User[]> = await response.json();

    if (!result.success) {
      throw new Error(result.message);
    }

    return result.data || [];
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export async function createUser(userData: CreateUserData): Promise<User> {
  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: ApiResponse<User> = await response.json();

    if (!result.success) {
      throw new Error(result.message);
    }

    return result.data!;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}
```

#### 4. React Components

**Archivo:** `frontend/src/components/UserList.tsx`

```typescript
// frontend/src/components/UserList.tsx
"use client";

import { useState, useEffect } from "react";
import { User } from "@/types/user";
import { getUsers } from "@/lib/api/users";
import UserCard from "./UserCard";
import LoadingSpinner from "./ui/LoadingSpinner";

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const userData = await getUsers();
        setUsers(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <h3 className="text-red-800 font-semibold mb-2">Error al cargar usuarios</h3>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Usuarios ({users.length})</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          ➕ Nuevo Usuario
        </button>
      </div>

      {users.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">No hay usuarios registrados</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
```

#### 5. Next.js Page

**Archivo:** `frontend/src/app/users/page.tsx`

```typescript
// frontend/src/app/users/page.tsx
import { Metadata } from "next";
import UserList from "@/components/UserList";

export const metadata: Metadata = {
  title: "Usuarios - Mi App",
  description: "Lista de todos los usuarios del sistema",
};

export default function UsersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <UserList />
      </div>
    </main>
  );
}
```

#### 6. Estructura de Archivos Completa

```
mi-proyecto/
├── backend/
│   ├── routes/
│   │   └── users.js
│   ├── models/
│   │   └── User.js
│   └── server.js
└── frontend/
    ├── src/
    │   ├── app/
    │   │   ├── users/
    │   │   │   └── page.tsx
    │   │   ├── layout.tsx
    │   │   └── globals.css
    │   ├── components/
    │   │   ├── UserList.tsx
    │   │   ├── UserCard.tsx
    │   │   └── ui/
    │   │       └── LoadingSpinner.tsx
    │   ├── lib/
    │   │   └── api/
    │   │       └── users.ts
    │   └── types/
    │       └── user.ts
    ├── .env.local
    └── package.json
```

### 🧩 Componentes Reutilizables

#### Button Component

**Archivo:** `src/components/ui/Button.tsx`

```typescript
// src/components/ui/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled = false,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseClasses = "font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
        disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {isLoading ? (
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>Cargando...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}

// Uso:
// <Button variant="primary" onClick={() => console.log('Click!')}>
//   Guardar
// </Button>
```

#### Input Component

**Archivo:** `src/components/ui/Input.tsx`

```typescript
// src/components/ui/Input.tsx
interface InputProps {
  label: string;
  type?: "text" | "email" | "password" | "number";
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  required = false,
  disabled = false,
}: InputProps) {
  const id = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
          error ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
        } ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`}
      />

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

// Uso:
// <Input
//   label="Email"
//   type="email"
//   value={email}
//   onChange={setEmail}
//   required
//   error={emailError}
// />
```

### 🎨 Patrones de Tailwind CSS

#### Card Pattern

```html
<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
  <h3 class="text-lg font-semibold mb-2">Título</h3>
  <p class="text-gray-600">Contenido...</p>
</div>
```

#### Form Pattern

```html
<form class="max-w-md mx-auto space-y-4">
  <input
    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <button class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Enviar</button>
</form>
```

#### Grid Pattern

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

#### Flexbox Pattern

```html
<div class="flex items-center justify-between p-4">
  <div>Contenido izquierda</div>
  <div>Contenido derecha</div>
</div>
```

### 🚀 Guía de Despliegue en Vercel

#### 1. Preparar el Proyecto

```bash
# Asegúrate de que build funciona
npm run build

# Prueba localmente
npm start
```

#### 2. Subir a GitHub

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

#### 3. Configurar en Vercel

- Ve a [vercel.com](https://vercel.com)
- Click en "Add New..." → "Project"
- Conecta tu repositorio de GitHub
- Vercel detectará automáticamente Next.js
- Agrega variables de entorno si es necesario
- Click "Deploy"

#### 4. Variables de Entorno en Producción

```bash
# En Vercel Dashboard → Settings → Environment Variables
NEXT_PUBLIC_API_URL=https://mi-backend.herokuapp.com
DATABASE_URL=postgresql://...
JWT_SECRET=mi-secreto-super-seguro
```

#### 5. Configuración Automática de Despliegue

- Cada push a `main` desplegará automáticamente
- Los pull requests crean preview deployments
- Vercel optimiza automáticamente el bundle

---

## 🎯 Ejemplos de Prompts para IA en Frontend

### Prompt para generar un componente UI accesible

```
Genera un componente React con TypeScript llamado "ProductCard".
Debe recibir por props: name, price, imageUrl.
Usar TailwindCSS con diseño responsivo.
Debe cumplir estándares WCAG 2.1 AA.
Incluir estados hover y focus.
Añadir loading state.
```

### Prompt para refactorizar código de estilos

```
Refactoriza el siguiente código para usar clases de TailwindCSS en lugar de CSS puro.
Mantén el diseño igual pero optimiza la semántica HTML y añade etiquetas accesibles.
Asegúrate de que sea responsive y siga las mejores prácticas de Tailwind.
```

### Prompt para validación de diseño

```
Verifica si este código React con Tailwind sigue el diseño provisto en Figma.
Comprueba: tamaños de fuente, colores y contrastes, espaciados y alineación.
Sugiere cambios para cumplir el diseño original.
Valida que cumpla estándares de accesibilidad WCAG 2.1.
```

### Prompt para arquitectura de componentes

```
Crea la arquitectura de componentes para un [módulo específico].
Incluye:
- Jerarquía de componentes
- Props interfaces en TypeScript
- Estados compartidos necesarios
- Patrones de composición
- Considera reutilización y mantenibilidad
```

### Prompt para integración backend

```
Genera el código para conectar este componente React con el endpoint [URL].
Incluye:
- Manejo de estados de loading/error
- Tipos TypeScript basados en la respuesta de la API
- Optimistic updates si aplica
- Cache strategy apropiada con Tanstack Query
```

---

## ✅ Checklist de Finalización del Curso

### Conocimientos Técnicos

- [ ] Dominio de React con TypeScript
- [ ] Implementación efectiva con Next.js App Router
- [ ] Uso avanzado de Tailwind CSS
- [ ] Integración frontend-backend
- [ ] Principios de UI/UX aplicados
- [ ] Testing automatizado implementado
- [ ] Accesibilidad WCAG 2.1 AA
- [ ] Performance optimization
- [ ] Despliegue en producción

### Habilidades con IA

- [ ] Generación de prompts específicos y efectivos
- [ ] Validación crítica de código generado por IA
- [ ] Integración fluida de IA en workflow de desarrollo
- [ ] Debugging asistido por IA

### Proyecto Final

- [ ] E-commerce funcional deployado
- [ ] Código documentado y bien estructurado
- [ ] Tests automatizados pasando
- [ ] Performance optimizada (Core Web Vitals)
- [ ] Accesibilidad validada
- [ ] CI/CD pipeline configurado

---

## 🚀 Próximos Pasos Recomendados

1. **Implementar las mejoras sugeridas**
2. **Crear un repositorio template** con la estructura base
3. **Desarrollar ejercicios prácticos específicos** para cada módulo
4. **Establecer métricas de evaluación** para cada módulo
5. **Crear una comunidad de práctica** con otros desarrolladores backend

---

## 📞 Soporte y Recursos Adicionales

- **Documentación oficial:** React, Next.js, Tailwind CSS
- **Herramientas recomendadas:** VS Code extensions, DevTools
- **Comunidades:** Discord, Stack Overflow, GitHub Discussions
- **Newsletters:** React Status, JavaScript Weekly, Frontend Focus

---

_📅 Última actualización: Agosto 2025_  
_🔧 Versión del curso: 2.0_  
_👥 Dirigido a: Desarrolladores Backend con experiencia en Node.js/TypeScript_
