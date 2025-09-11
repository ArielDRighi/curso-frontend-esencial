function courseApp() {
  return {
    currentView: "dashboard",
    selectedModule: null,
    darkMode: false,
    referenceTab: "cheatsheet",

    modules: [
      {
        emoji: "🎨",
        title: "Módulo 0: Fundamentos de UI/UX para Frontend",
        shortTitle: "UI/UX",
        objective:
          "Comprender los principios clave de diseño de interfaces y experiencia de usuario para optimizar la colaboración con IA.",
        completed: false,
        sections: [
          {
            title: "0.1 Conceptos Clave de UI/UX",
            content: [
              "<p><em>UI/UX son disciplinas que se enfocan en hacer que las aplicaciones sean usables y agradables para los usuarios finales, similar a como diseñas APIs pensando en otros desarrolladores.</em></p>",
              "<p><strong>UX (User Experience):</strong> Cómo se siente y fluye la interacción del usuario. Evalúa facilidad de uso, eficiencia y satisfacción.</p>",
              "<p><em>Es como el diseño de tu API: si es intuitiva, consistente y fácil de usar, la experiencia del desarrollador es buena.</em></p>",
              "<p><strong>UI (User Interface):</strong> La capa visual, estética y tangible con la que el usuario interactúa.</p>",
              "<p><em>Son los botones, formularios, colores y tipografía que el usuario ve. Como la documentación de tu API: debe ser clara y visualmente organizada.</em></p>",
              "<p><strong>Diseño Centrado en el Usuario (UCD):</strong> Proceso iterativo en el que las decisiones de diseño se basan en necesidades reales del usuario.</p>",
              "<p><em>Similar a diseñar endpoints basándote en casos de uso reales, no en lo que asumes que necesitan.</em></p>",
              "<p><strong>Accesibilidad (A11y):</strong> Garantizar que la aplicación pueda ser usada por personas con discapacidades (lectores de pantalla, navegación por teclado, etc.).</p>",
              "<p><em>Es como asegurar que tu API funcione con diferentes clientes y librerías, no solo con una herramienta específica.</em></p>",
            ],
          },
          {
            title: "0.2 Principios Fundamentales de UX",
            content: [
              "<p><em>Estos principios aseguran que los usuarios puedan completar sus tareas de forma eficiente, similar a como diseñas APIs que sean predecibles y confiables.</em></p>",
              "<p><strong>Claridad antes que estética:</strong> Lo bonito importa, pero la comprensión inmediata es prioritaria.</p>",
              "<p><em>Un botón debe verse claramente como botón, aunque no sea el más hermoso. Como un endpoint que debe ser obvio qué hace, aunque el nombre no sea elegante.</em></p>",
              "<p><strong>Prevención de errores:</strong> Diseñar flujos que eviten acciones no deseadas.</p>",
              "<p><em>Validaciones en el frontend, confirmaciones para acciones destructivas. Como validar parámetros antes de procesar en tu API.</em></p>",
              "<p><strong>Consistencia de interacción:</strong> Patrones iguales para acciones iguales.</p>",
              '<p><em>Si un botón rojo significa "eliminar" en una parte, debe significar lo mismo en toda la app. Como usar códigos de estado HTTP consistentes.</em></p>',
              '<p><strong>Minimizar carga cognitiva:</strong> Evitar que el usuario tenga que "pensar" demasiado.</p>',
              "<p><em>No sobrecargar la interfaz con opciones. Como mantener tus endpoints simples y enfocados en una sola responsabilidad.</em></p>",
              "<p><strong>Feedback inmediato:</strong> Confirmar acciones, estados y errores en tiempo real.</p>",
              "<p><em>Mostrar loading, confirmaciones y errores de forma clara. Como retornar respuestas informativas desde tu API.</em></p>",
            ],
          },
          {
            title: "0.3 Principios Fundamentales de UI",
            content: [
              "<p><strong>Jerarquía visual:</strong> Uso estratégico de tamaño, color y posición para guiar la atención</p>",
              "<p><strong>Espaciado y alineación:</strong> Crear armonía y orden en la interfaz</p>",
              "<p><strong>Tipografía funcional:</strong> Legibilidad en todos los dispositivos</p>",
              "<p><strong>Paleta de colores funcional:</strong> Contraste suficiente, consistencia con la marca y cumplimiento de guías WCAG</p>",
              "<p><strong>Componentes reutilizables:</strong> Unificar botones, inputs y layouts para coherencia</p>",
            ],
          },
          {
            title: "0.4 Diseño Responsivo y Adaptativo",
            content: [
              "<p><strong>Mobile-first:</strong> Diseñar pensando primero en pantallas pequeñas</p>",
              "<p><strong>Breakpoints clave:</strong> <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code> en Tailwind</p>",
              "<p><strong>Pruebas cruzadas:</strong> Validar UI en distintos dispositivos y navegadores</p>",
            ],
          },
          {
            title: "0.5 Herramientas para Auditar y Trabajar con Diseños",
            content: [
              "<p><strong>Figma / Penpot:</strong> Lectura e inspección de diseños (medidas, colores, assets)</p>",
              "<p><strong>Storybook:</strong> Catálogo vivo de componentes UI para testear y documentar</p>",
              "<p><strong>Wave Accessibility Tool o axe DevTools:</strong> Auditoría de accesibilidad</p>",
              "<p><strong>Contrast Checker:</strong> Validar niveles de contraste de color</p>",
              "<p><strong>Zeplin:</strong> Para colaboración con diseñadores</p>",
            ],
          },
          {
            title: "0.6 UI/UX con IA",
            content: [
              "<p><strong>Prompts para UI:</strong> Cómo pedir a la IA que sugiera estructuras visuales coherentes</p>",
              "<p><strong>Validación de código UI con IA:</strong> Revisar si la implementación respeta el diseño original</p>",
              "<p><strong>Generación de componentes accesibles:</strong> Solicitar que el código cumpla estándares WCAG 2.1</p>",
            ],
          },
          {
            title: "0.7 Patrones de Diseño UI Comunes",
            content: [
              "<p><strong>Patrones de Navegación:</strong> Menús hamburguesa, breadcrumbs, paginación</p>",
              "<p><strong>Patrones de Formularios:</strong> Validación en tiempo real, estados de carga, mensajes de error</p>",
              "<p><strong>Patrones de Feedback:</strong> Toasts, modales, tooltips, progress bars</p>",
              "<p><strong>Patrones de Contenido:</strong> Cards, listas, tablas responsivas, carruseles</p>",
            ],
          },
          {
            title: "0.8 Sistema de Design Tokens",
            content: [
              "<p><strong>Concepto:</strong> Variables reutilizables para mantener consistencia visual</p>",
              "<p><strong>Implementación en Tailwind:</strong> Personalización del tema</p>",
              "<p><strong>Espaciado consistente:</strong> Escala de 4pt/8pt</p>",
              "<p><strong>Jerarquía tipográfica:</strong> Escalas modulares</p>",
            ],
          },
          {
            title: "0.9 Ejercicio Práctico",
            content: [
              "<p><strong>Objetivo:</strong> Aplicar los conceptos aprendidos en un ejercicio real.</p>",
              "<ol class='list-decimal pl-6 space-y-2'>",
              "<li>Analizar un diseño en Figma y escribir un prompt para IA que genere:",
              "<ul class='list-disc pl-6 mt-2 space-y-1'>",
              "<li>Estructura HTML/JSX</li>",
              "<li>Estilos en Tailwind</li>",
              "<li>Accesibilidad integrada (atributos aria, label)</li>",
              "</ul></li>",
              "<li>Implementar la UI y probarla con herramientas de accesibilidad</li>",
              "</ol>",
              "<p class='mt-4'><strong>Entregable:</strong> Componente funcional con accesibilidad validada</p>",
            ],
          },
        ],
      },
      {
        emoji: "🌐",
        title: "Módulo 1: Fundamentos del Desarrollo Web",
        shortTitle: "Web Fundamentals",
        objective:
          "Dominar los fundamentos de HTML, CSS, JavaScript y el ecosistema frontend desde la perspectiva backend.",
        completed: false,
        sections: [
          {
            title: "1.1 Introducción al Frontend desde la Perspectiva Backend",
            content: [
              "<p><em>El frontend es tu interfaz de usuario, mientras que tu backend es el motor que procesa la lógica de negocio. Ambos se comunican a través de APIs.</em></p>",
              "<p><strong>¿Qué es el Frontend?</strong> La capa visual e interactiva que el usuario final ve</p>",
              "<p><em>Es la parte que se ejecuta en el navegador del usuario, como una app móvil pero en web. Consume los datos de tu backend.</em></p>",
              '<p><strong>El Navegador como Cliente:</strong> El navegador es tu "cliente" principal, ejecutando código JavaScript</p>',
              "<p><em>El navegador hace peticiones HTTP a tu backend, igual que Postman, pero también renderiza la interfaz y maneja interacciones del usuario.</em></p>",
              "<p><strong>Herramientas de Desarrollador del Navegador (DevTools):</strong> Tu principal herramienta para depurar</p>",
              "<p><em>Similar a los logs de tu servidor, pero para el frontend. Puedes ver requests, errores, y el estado de la aplicación.</em></p>",
              "<p><strong>Ciclo de Vida de una Petición Web:</strong> Petición del navegador → Servidor → Respuesta del servidor → Renderizado en el navegador</p>",
              '<p><em>El navegador solicita tu HTML/CSS/JS, tu servidor responde, y luego el navegador "pinta" la interfaz y ejecuta la lógica.</em></p>',
            ],
          },
          {
            title: "1.2 HTML: La Estructura del Contenido",
            content: [
              "<p><em>HTML es como el esquema de tu base de datos: define la estructura y jerarquía, pero no la funcionalidad ni el estilo.</em></p>",
              "<p><strong>Concepto:</strong> El lenguaje de marcado estándar para crear páginas web</p>",
              "<p><em>Es un lenguaje declarativo que describe qué elementos tiene tu página: títulos, párrafos, botones. No tiene lógica, solo estructura.</em></p>",
              "<p><strong>Etiquetas Fundamentales:</strong> &lt;html&gt;, &lt;head&gt;, &lt;body&gt;, &lt;div&gt;, &lt;p&gt;, &lt;h1&gt; a &lt;h6&gt;, &lt;a&gt;, &lt;img&gt;</p>",
              "<p><em>Son como contenedores que organizan tu contenido. &lt;div&gt; es como un objeto genérico, &lt;p&gt; para texto, &lt;a&gt; para enlaces.</em></p>",
              "<p><strong>Elementos Semánticos:</strong> &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;section&gt;, &lt;article&gt;, &lt;footer&gt;</p>",
              "<p><em>Etiquetas que indican el propósito del contenido, no solo su apariencia. Como nombrar bien tus variables y funciones.</em></p>",
              "<p><strong>Formularios:</strong> Cómo los usuarios interactúan y envían datos</p>",
              "<p><em>Los inputs, selects y buttons que permiten al usuario enviar información a tu backend, similar a los parámetros de una API.</em></p>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-html">&lt;main&gt;\n  &lt;header&gt;\n    &lt;h1&gt;Mi Aplicación&lt;/h1&gt;\n  &lt;/header&gt;\n  &lt;section&gt;\n    &lt;article&gt;Contenido...&lt;/article&gt;\n  &lt;/section&gt;\n&lt;/main&gt;</code></pre></div>',
            ],
          },
          {
            title: "1.3 CSS: Estilizando la Experiencia de Usuario",
            content: [
              "<p><em>CSS es como la configuración de presentación: define cómo se ven los elementos HTML, pero no su funcionalidad.</em></p>",
              "<p><strong>Concepto:</strong> El lenguaje utilizado para dar estilo y diseño a las páginas web</p>",
              "<p><em>Controla colores, tamaños, posiciones y animaciones. Es puramente visual, como elegir el formato JSON vs XML para tu API.</em></p>",
              "<p><strong>Selectores:</strong> Elemento, clase, ID, atributos</p>",
              '<p><em>Formas de "apuntar" a elementos HTML específicos para aplicarles estilos. Como filtros en una consulta de base de datos.</em></p>',
              "<p><strong>El Modelo de Caja (Box Model):</strong> margin, border, padding, content</p>",
              "<p><em>Cada elemento HTML es una caja rectangular. Margin es el espacio exterior, padding el interior, como los espaciados en un layout.</em></p>",
              "<p><strong>Layouts Modernos:</strong></p>",
              "<p><strong>• Flexbox:</strong> Para alinear y distribuir elementos en una sola dimensión</p>",
              "<p><em>Como organizar elementos en una fila o columna con distribución automática del espacio.</em></p>",
              "<p><strong>• Grid:</strong> Para crear diseños complejos bidimensionales</p>",
              "<p><em>Como una tabla pero más flexible, para layouts tipo dashboard con filas y columnas.</em></p>",
              "<p><strong>Diseño Responsivo:</strong> Adaptar tu interfaz para diferentes tamaños de pantalla</p>",
              "<p><em>Como hacer que tu API responda diferente según el cliente, pero para dispositivos móviles vs desktop.</em></p>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-css">.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.grid-layout {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  gap: 20px;\n}</code></pre></div>',
            ],
          },
          {
            title: "1.4 JavaScript: La Lógica Interactiva del Frontend",
            content: [
              "<p><em>JavaScript es tu lenguaje de programación para el frontend, como Node.js en el backend, pero se ejecuta en el navegador del usuario.</em></p>",
              "<p><strong>Concepto:</strong> El lenguaje de programación que añade interactividad</p>",
              "<p><em>Maneja clicks, validaciones, llamadas a APIs y actualizaciones dinámicas. Es el único lenguaje que ejecutan los navegadores nativamente.</em></p>",
              "<p><strong>Fundamentos Modernos (ES6+):</strong> var, let, const, tipos de datos, operadores, estructuras de control, bucles</p>",
              "<p><em>Similar a cualquier lenguaje: variables, condiciones, loops. ES6+ son las versiones modernas con mejores características.</em></p>",
              "<p><strong>Manipulación del DOM:</strong> Acceder y modificar elementos HTML</p>",
              "<p><em>El DOM es la representación en memoria de tu HTML. Puedes cambiar texto, agregar elementos, como modificar objetos en tu código.</em></p>",
              "<p><strong>JavaScript Asíncrono:</strong> callbacks, Promises, async/await</p>",
              "<p><em>Como manejas operaciones asíncronas en Node.js, pero en el navegador. Para no bloquear la interfaz mientras esperas respuestas.</em></p>",
              "<p><strong>Trabajo con APIs (fetch):</strong> Realizar peticiones HTTP a tu backend</p>",
              "<p><em>Como usar axios o fetch en Node.js, pero desde el navegador hacia tu servidor. El frontend consume tu API REST.</em></p>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-javascript">const fetchData = async () => {\n  try {\n    const response = await fetch("/api/data");\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error("Error:", error);\n  }\n};\n\n// Manipulación del DOM\nconst button = document.getElementById("myButton");\nbutton.addEventListener("click", fetchData);</code></pre></div>',
            ],
          },
          {
            title: "1.5 Git y GitHub: Control de Versiones para Colaboración",
            content: [
              "<p><strong>Concepto:</strong> Un sistema de control de versiones distribuido</p>",
              "<p><strong>Comandos Esenciales:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li><code>git init</code>, <code>git clone</code> - Inicializar/clonar repositorios</li>",
              "<li><code>git add</code>, <code>git commit</code> - Preparar y confirmar cambios</li>",
              "<li><code>git status</code>, <code>git log</code> - Ver estado e historial</li>",
              "<li><code>git branch</code>, <code>git checkout</code>, <code>git merge</code> - Manejo de ramas</li>",
              "<li><code>git pull</code>, <code>git push</code>, <code>git remote</code> - Sincronización</li>",
              "</ul>",
              "<p><strong>Flujos de Trabajo:</strong> fork, pull request, code review</p>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-bash"># Flujo típico\ngit clone https://github.com/user/repo.git\ncd repo\ngit checkout -b feature/nueva-funcionalidad\n# ... hacer cambios ...\ngit add .\ngit commit -m "feat: agregar nueva funcionalidad"\ngit push origin feature/nueva-funcionalidad</code></pre></div>',
            ],
          },
          {
            title: "1.6 Fundamentos de Performance Web",
            content: [
              "<p><em>La performance web es como optimizar consultas SQL: mides, identificas cuellos de botella y aplicas técnicas específicas.</em></p>",
              "<p><strong>Core Web Vitals:</strong> Métricas clave para medir la experiencia del usuario</p>",
              "<p><em>Son como los KPIs de tu aplicación web. Google los usa para ranking, similar a como monitoreamos latencia en APIs.</em></p>",
              "<ul class='list-disc pl-6 space-y-2'>",
              "<li><strong>LCP (Largest Contentful Paint):</strong> Tiempo de carga del elemento principal (&lt; 2.5s)</li>",
              "<li><em>Como el tiempo de respuesta de tu endpoint más pesado. Debe ser rápido para buena UX.</em></li>",
              "<li><strong>FID (First Input Delay):</strong> Tiempo de respuesta a la primera interacción (&lt; 100ms)</li>",
              "<li><em>Similar al tiempo que tarda tu API en procesar la primera request. La página debe responder inmediatamente.</em></li>",
              "<li><strong>CLS (Cumulative Layout Shift):</strong> Estabilidad visual durante la carga (&lt; 0.1)</li>",
              "<li><em>Como evitar que tu API cambie contratos inesperadamente. El layout no debe 'saltar' al cargar.</em></li>",
              "</ul>",
              "<p><strong>Optimización de imágenes y assets:</strong></p>",
              "<p><em>Como optimizar el tamaño de respuestas de tu API: comprimes, cacheas y sirves solo lo necesario.</em></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li><strong>Formatos modernos:</strong> WebP, AVIF (menor tamaño, mejor calidad)</li>",
              "<li><strong>Compresión:</strong> Ajustar calidad y dimensiones según contexto</li>",
              "<li><strong>Lazy loading:</strong> Cargar imágenes solo cuando van a ser visibles</li>",
              "<li><strong>CDN y caching:</strong> Usar Cloudflare, AWS CloudFront para distribución global</li>",
              "</ul>",
              "<p><strong>Lazy loading y code splitting:</strong></p>",
              "<p><em>Como carga diferida en microservicios: no cargas todo de una vez, solo lo que necesitas cuando lo necesitas.</em></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li><strong>Lazy loading:</strong> Cargar contenido solo cuando se necesita</li>",
              "<li><strong>Code splitting:</strong> Dividir JavaScript en chunks pequeños</li>",
              "<li><strong>Dynamic imports:</strong> Importar módulos solo cuando se requieren</li>",
              "<li><strong>Route-based splitting:</strong> Cada página carga solo su código</li>",
              "</ul>",
              "<p><strong>Herramientas de medición y análisis:</strong></p>",
              "<p><em>Como usar profilers para tu backend: herramientas que te muestran exactamente dónde están los problemas.</em></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li><strong>Lighthouse:</strong> Auditoría completa de performance, SEO y accesibilidad</li>",
              "<li><strong>PageSpeed Insights:</strong> Análisis con datos reales de usuarios</li>",
              "<li><strong>Web.dev:</strong> Métricas y recomendaciones específicas</li>",
              "<li><strong>Chrome DevTools:</strong> Profiling en tiempo real</li>",
              "</ul>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-javascript">// Lazy loading de componentes React\nconst LazyComponent = React.lazy(() => import("./Component"));\n\n// Usar con Suspense para loading state\n&lt;Suspense fallback={&lt;div&gt;Cargando...&lt;/div&gt;}&gt;\n  &lt;LazyComponent /&gt;\n&lt;/Suspense&gt;\n\n// Lazy loading de imágenes HTML\n&lt;img loading="lazy" src="imagen.jpg" alt="descripción" /&gt;\n\n// Code splitting con dynamic imports\nconst loadModule = async () => {\n  const { heavyFunction } = await import("./heavyModule");\n  return heavyFunction;\n};\n\n// Intersection Observer para lazy loading personalizado\nconst observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      const img = entry.target;\n      img.src = img.dataset.src; // Cargar imagen real\n      observer.unobserve(img);\n    }\n  });\n});</code></pre></div>',
            ],
          },
        ],
      },
      {
        emoji: "⚛️",
        title: "Módulo 2: React y TypeScript",
        shortTitle: "React + TS",
        objective: "Dominar React con TypeScript para crear interfaces de usuario modernas y mantenibles.",
        completed: false,
        sections: [
          {
            title: "2.1 Introducción a React: Componentes y Reactividad",
            content: [
              "<p><em>React es una librería que hace que crear interfaces complejas sea más manejable, dividiendo la UI en piezas pequeñas y reutilizables.</em></p>",
              "<p><strong>Concepto:</strong> Una librería de JavaScript para construir interfaces de usuario</p>",
              "<p><em>No es un framework completo como NestJS. Es una herramienta específica para crear interfaces, como Express es para APIs.</em></p>",
              "<p><strong>JSX:</strong> Sintaxis que permite escribir HTML dentro de JavaScript</p>",
              "<p><em>Es HTML con superpoderes: puedes insertar variables, condiciones y loops directamente. Se compila a JavaScript normal.</em></p>",
              "<p><strong>Componentes:</strong> Pequeñas piezas de UI reutilizables e independientes</p>",
              "<p><em>Como funciones que retornan HTML. Cada botón, formulario o card puede ser un componente separado.</em></p>",
              "<p><strong>Props (Propiedades):</strong> Cómo los datos son pasados de un componente padre a un componente hijo</p>",
              "<p><em>Como parámetros de función. El componente padre envía datos al hijo para que los use.</em></p>",
              "<p><strong>Estado (useState):</strong> Datos que un componente maneja internamente</p>",
              "<p><em>Variables que cuando cambian, React automáticamente actualiza la UI. Como variables reactivas que triggean re-renders.</em></p>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-jsx">// Componente simple con props\nfunction Welcome({ name, isOnline }) {\n  return (\n    &lt;div&gt;\n      &lt;h1&gt;Hola, {name}!&lt;/h1&gt;\n      {isOnline && &lt;span&gt;🟢 En línea&lt;/span&gt;}\n    &lt;/div&gt;\n  );\n}\n\n// Uso del componente\n&lt;Welcome name="Juan" isOnline={true} /&gt;</code></pre></div>',
            ],
          },
          {
            title: "2.2 TypeScript en Frontend con React",
            content: [
              "<p><em>TypeScript en frontend funciona igual que en backend: previene errores y mejora la experiencia de desarrollo.</em></p>",
              "<p><strong>Concepto:</strong> Un superset de JavaScript que añade tipado estático</p>",
              "<p><em>Exactamente igual que usar TypeScript en Node.js, pero para código que se ejecuta en el navegador.</em></p>",
              "<p><strong>¿Por qué TypeScript?</strong> Previene errores, mejora el autocompletado y sirve como documentación implícita</p>",
              "<p><em>Los mismos beneficios que ya conoces del backend: catch de errores en tiempo de desarrollo, mejor IntelliSense.</em></p>",
              "<p><strong>Tipos Básicos e Interfaces:</strong> Definición de interfaces para props, estados y estructuras de datos</p>",
              "<p><em>Como definir tipos para tus DTOs o models, pero para componentes React y datos de la UI.</em></p>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// Interfaces para props\ninterface UserProps {\n  id: number;\n  name: string;\n  email: string;\n  isActive?: boolean; // Opcional\n  onEdit: (userId: number) =&gt; void; // Función callback\n}\n\n// Componente tipado\nfunction UserCard({ id, name, email, isActive = false, onEdit }: UserProps) {\n  return (\n    &lt;div className="user-card"&gt;\n      &lt;h3&gt;{name}&lt;/h3&gt;\n      &lt;p&gt;{email}&lt;/p&gt;\n      &lt;span&gt;{isActive ? "Activo" : "Inactivo"}&lt;/span&gt;\n      &lt;button onClick={() =&gt; onEdit(id)}&gt;Editar&lt;/button&gt;\n    &lt;/div&gt;\n  );\n}</code></pre></div>',
            ],
          },
          {
            title: "2.3 Gestión del Estado en React",
            content: [
              "<p><em>El estado es información que puede cambiar durante la ejecución y que afecta lo que el usuario ve. Como variables en memoria que triggean actualizaciones de UI.</em></p>",
              "<p><strong>Lifting State Up:</strong> Compartir estado entre componentes</p>",
              "<p><em>Cuando dos componentes necesitan los mismos datos, mueves el estado al componente padre común. Como compartir variables entre funciones.</em></p>",
              "<p><strong>Context API:</strong> Una forma de compartir estados a través del árbol de componentes</p>",
              "<p><em>Como variables globales, pero controladas. Evita pasar props a través de muchos niveles de componentes.</em></p>",
              "<p><strong>useReducer Hook:</strong> Una alternativa a useState para manejar lógica de estado más compleja</p>",
              "<p><em>Como Redux pero simple. Para cuando el estado tiene lógica compleja de actualización.</em></p>",
              "<p><strong>Librerías de Gestión de Estado:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li><strong>Zustand:</strong> Una alternativa más simple y ligera</li>",
              "<li><strong>React Query / Tanstack Query:</strong> Herramienta potente para la gestión de datos asíncronos (caché, sincronización)</li>",
              "</ul>",
              "<p><strong>Guía de Decisión Rápida:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li><code>useState</code>: Para estado local de un solo componente</li>",
              "<li>Context API: Para estado global simple</li>",
              "<li>Zustand: Para estado global complejo y compartido</li>",
              "<li>Tanstack Query: Específicamente para gestionar datos del servidor</li>",
              "</ul>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">import { useState, useEffect, createContext, useContext } from "react";\n\n// useState - Estado local\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    &lt;button onClick={() =&gt; setCount(count + 1)}&gt;\n      Count: {count}\n    &lt;/button&gt;\n  );\n}\n\n// Context API - Estado global\nconst UserContext = createContext();\n\nfunction UserProvider({ children }) {\n  const [user, setUser] = useState(null);\n  \n  return (\n    &lt;UserContext.Provider value={{ user, setUser }}&gt;\n      {children}\n    &lt;/UserContext.Provider&gt;\n  );\n}</code></pre></div>',
            ],
          },
          {
            title: "2.4 Hooks de React y Custom Hooks",
            content: [
              '<p><em>Los Hooks son funciones especiales de React que te permiten "enganchar" funcionalidades como estado y ciclo de vida en componentes funcionales. Son como métodos utilitarios que React te proporciona.</em></p>',
              "<p><strong>useEffect:</strong> Para manejar efectos secundarios (ej. fetching de datos)</p>",
              "<p><em>Los efectos secundarios son operaciones que no están directamente relacionadas con renderizar la UI, como llamadas a APIs, timers, o suscripciones. useEffect se ejecuta después de que el componente se renderiza.</em></p>",
              "<p><strong>useRef:</strong> Para acceder a elementos DOM</p>",
              "<p><em>El DOM (Document Object Model) es la representación en memoria de los elementos HTML de tu página. useRef te permite obtener una referencia directa a un elemento HTML específico, como hacer focus en un input o medir dimensiones.</em></p>",
              "<p><strong>Custom Hooks:</strong> Funciones que te permiten reutilizar lógica con estado</p>",
              "<p><em>El estado son datos que pueden cambiar durante la vida de un componente (como el valor de un input o si un modal está abierto). Los Custom Hooks te permiten extraer esta lógica para reutilizarla en múltiples componentes.</em></p>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">import { useState, useEffect, useRef } from "react";\n\n// useEffect para llamadas a API\nfunction UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() =&gt; {\n    async function fetchUser() {\n      try {\n        const response = await fetch(`/api/users/${userId}`);\n        const userData = await response.json();\n        setUser(userData);\n      } finally {\n        setLoading(false);\n      }\n    }\n    \n    fetchUser();\n  }, [userId]); // Se ejecuta cuando userId cambia\n\n  return loading ? &lt;div&gt;Cargando...&lt;/div&gt; : &lt;div&gt;{user?.name}&lt;/div&gt;;\n}\n\n// useRef para acceso DOM\nfunction SearchInput() {\n  const inputRef = useRef(null);\n  \n  const focusInput = () =&gt; {\n    inputRef.current?.focus();\n  };\n  \n  return (\n    &lt;div&gt;\n      &lt;input ref={inputRef} type="text" /&gt;\n      &lt;button onClick={focusInput}&gt;Focus&lt;/button&gt;\n    &lt;/div&gt;\n  );\n}\n\n// Custom Hook\nfunction useApi(url) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n  \n  useEffect(() =&gt; {\n    fetch(url)\n      .then(res =&gt; res.json())\n      .then(setData)\n      .catch(setError)\n      .finally(() =&gt; setLoading(false));\n  }, [url]);\n  \n  return { data, loading, error };\n}</code></pre></div>',
              "<p><strong>Hooks Avanzados y Optimización:</strong></p>",
              "<p><strong>• useMemo:</strong> Para memorizar valores computados costosos</p>",
              "<p><em>Como cachear el resultado de operaciones pesadas. Solo recalcula cuando sus dependencias cambian.</em></p>",
              "<p><strong>• useCallback:</strong> Para memorizar funciones y evitar re-renders innecesarios</p>",
              "<p><em>Útil cuando pasas funciones como props a componentes hijos que usan React.memo.</em></p>",
              "<p><strong>• useReducer:</strong> Para manejar estado complejo con lógica de actualización</p>",
              "<p><em>Como Redux pero integrado. Ideal para estados con múltiples acciones y transiciones complejas.</em></p>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// Hooks de optimización\nimport { useMemo, useCallback, useReducer } from "react";\n\n// useMemo - Memoriza cálculos costosos\nfunction ExpensiveComponent({ items, filter }) {\n  const expensiveValue = useMemo(() =&gt; {\n    console.log("Calculando valor costoso...");\n    return items\n      .filter(item =&gt; item.category === filter)\n      .reduce((sum, item) =&gt; sum + item.price, 0);\n  }, [items, filter]); // Solo recalcula si items o filter cambian\n  \n  return &lt;div&gt;Total: ${expensiveValue}&lt;/div&gt;;\n}\n\n// useCallback - Memoriza funciones\nfunction ParentComponent() {\n  const [count, setCount] = useState(0);\n  const [name, setName] = useState("");\n  \n  // Esta función se memoriza y no cambia entre renders\n  const handleClick = useCallback(() =&gt; {\n    console.log(`Clicked! Count: ${count}`);\n  }, [count]); // Solo cambia si count cambia\n  \n  return (\n    &lt;div&gt;\n      &lt;input value={name} onChange={(e) =&gt; setName(e.target.value)} /&gt;\n      &lt;MemoizedChild onClick={handleClick} /&gt;\n    &lt;/div&gt;\n  );\n}\n\n// useReducer - Estado complejo\ntype Action = \n  | { type: "LOAD_START" }\n  | { type: "LOAD_SUCCESS", payload: any[] }\n  | { type: "LOAD_ERROR", payload: string }\n  | { type: "RESET" };\n\nfunction dataReducer(state, action: Action) {\n  switch (action.type) {\n    case "LOAD_START":\n      return { ...state, loading: true, error: null };\n    case "LOAD_SUCCESS":\n      return { loading: false, data: action.payload, error: null };\n    case "LOAD_ERROR":\n      return { loading: false, data: [], error: action.payload };\n    case "RESET":\n      return { loading: false, data: [], error: null };\n    default:\n      return state;\n  }\n}\n\nfunction useDataFetcher(url: string) {\n  const [state, dispatch] = useReducer(dataReducer, {\n    loading: false,\n    data: [],\n    error: null\n  });\n  \n  const fetchData = useCallback(async () =&gt; {\n    dispatch({ type: "LOAD_START" });\n    try {\n      const response = await fetch(url);\n      const data = await response.json();\n      dispatch({ type: "LOAD_SUCCESS", payload: data });\n    } catch (error) {\n      dispatch({ type: "LOAD_ERROR", payload: error.message });\n    }\n  }, [url]);\n  \n  return { ...state, fetchData, reset: () =&gt; dispatch({ type: "RESET" }) };\n}</code></pre></div>',
              "<p><strong>Custom Hooks Avanzados:</strong> Ejemplos prácticos y reutilizables</p>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// Custom Hook: useLocalStorage\nfunction useLocalStorage&lt;T&gt;(key: string, initialValue: T) {\n  const [storedValue, setStoredValue] = useState&lt;T&gt;(() =&gt; {\n    try {\n      const item = window.localStorage.getItem(key);\n      return item ? JSON.parse(item) : initialValue;\n    } catch (error) {\n      console.error(`Error reading localStorage key "${key}":`, error);\n      return initialValue;\n    }\n  });\n  \n  const setValue = useCallback((value: T | ((val: T) =&gt; T)) =&gt; {\n    try {\n      const valueToStore = value instanceof Function ? value(storedValue) : value;\n      setStoredValue(valueToStore);\n      window.localStorage.setItem(key, JSON.stringify(valueToStore));\n    } catch (error) {\n      console.error(`Error setting localStorage key "${key}":`, error);\n    }\n  }, [key, storedValue]);\n  \n  return [storedValue, setValue] as const;\n}\n\n// Custom Hook: useDebounce\nfunction useDebounce&lt;T&gt;(value: T, delay: number): T {\n  const [debouncedValue, setDebouncedValue] = useState&lt;T&gt;(value);\n  \n  useEffect(() =&gt; {\n    const handler = setTimeout(() =&gt; {\n      setDebouncedValue(value);\n    }, delay);\n    \n    return () =&gt; {\n      clearTimeout(handler);\n    };\n  }, [value, delay]);\n  \n  return debouncedValue;\n}\n\n// Custom Hook: useForm\nfunction useForm&lt;T extends Record&lt;string, any&gt;&gt;(initialValues: T) {\n  const [values, setValues] = useState&lt;T&gt;(initialValues);\n  const [errors, setErrors] = useState&lt;Partial&lt;Record&lt;keyof T, string&gt;&gt;&gt;({});\n  const [touched, setTouched] = useState&lt;Partial&lt;Record&lt;keyof T, boolean&gt;&gt;&gt;({});\n  \n  const setValue = useCallback((name: keyof T, value: any) =&gt; {\n    setValues(prev =&gt; ({ ...prev, [name]: value }));\n    // Limpiar error al cambiar valor\n    if (errors[name]) {\n      setErrors(prev =&gt; ({ ...prev, [name]: undefined }));\n    }\n  }, [errors]);\n  \n  const setError = useCallback((name: keyof T, error: string) =&gt; {\n    setErrors(prev =&gt; ({ ...prev, [name]: error }));\n  }, []);\n  \n  const setTouched = useCallback((name: keyof T) =&gt; {\n    setTouched(prev =&gt; ({ ...prev, [name]: true }));\n  }, []);\n  \n  const reset = useCallback(() =&gt; {\n    setValues(initialValues);\n    setErrors({});\n    setTouched({});\n  }, [initialValues]);\n  \n  const isValid = useMemo(() =&gt; {\n    return Object.keys(errors).length === 0;\n  }, [errors]);\n  \n  return {\n    values,\n    errors,\n    touched,\n    setValue,\n    setError,\n    setTouched,\n    reset,\n    isValid\n  };\n}</code></pre></div>',
              "<p><strong>Reglas de los Hooks (Importante):</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li><strong>Solo en el nivel superior:</strong> No usar hooks dentro de bucles, condiciones o funciones anidadas</li>",
              "<li><strong>Solo en componentes React:</strong> O en custom hooks, nunca en funciones regulares de JavaScript</li>",
              "<li><strong>Orden consistente:</strong> Los hooks deben llamarse en el mismo orden en cada render</li>",
              "<li><strong>Dependencias correctas:</strong> Incluir todas las dependencias en useEffect y useCallback</li>",
              "</ul>",
              "<p><strong>Mejores prácticas:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li>✅ Usar custom hooks para lógica reutilizable</li>",
              "<li>✅ Memorizar con useMemo/useCallback solo cuando sea necesario</li>",
              "<li>✅ Separar responsabilidades en diferentes hooks</li>",
              "<li>✅ Usar useReducer para estado complejo con múltiples acciones</li>",
              "<li>✅ Implementar cleanup en useEffect cuando sea necesario</li>",
              "</ul>",
            ],
          },
          {
            title: "2.5 Formularios en React",
            content: [
              "<p><strong>react-hook-form:</strong> Librería para formularios con rendimiento optimizado</p>",
              "<p><em>Maneja el estado del formulario de forma eficiente, minimizando re-renders y mejorando el performance.</em></p>",
              "<p><strong>zod:</strong> Librería de validación de esquemas</p>",
              "<p><em>Define reglas de validación de forma declarativa, similar a como defines esquemas de base de datos.</em></p>",
              "<p><strong>Ventajas de react-hook-form:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li>Menos re-renders = mejor performance</li>",
              "<li>API simple y consistente</li>",
              "<li>Validación integrada</li>",
              "<li>Soporte para TypeScript</li>",
              "</ul>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">import { useForm } from "react-hook-form";\nimport { z } from "zod";\nimport { zodResolver } from "@hookform/resolvers/zod";\n\n// Schema de validación con Zod\nconst userSchema = z.object({\n  name: z.string().min(2, "Nombre debe tener al menos 2 caracteres"),\n  email: z.string().email("Email inválido"),\n  age: z.number().min(18, "Debe ser mayor de edad")\n});\n\ntype UserFormData = z.infer&lt;typeof userSchema&gt;;\n\nfunction UserForm() {\n  const {\n    register,\n    handleSubmit,\n    formState: { errors, isSubmitting },\n    reset\n  } = useForm&lt;UserFormData&gt;({\n    resolver: zodResolver(userSchema)\n  });\n\n  const onSubmit = async (data: UserFormData) =&gt; {\n    try {\n      const response = await fetch("/api/users", {\n        method: "POST",\n        headers: { "Content-Type": "application/json" },\n        body: JSON.stringify(data)\n      });\n      \n      if (response.ok) {\n        reset(); // Limpiar formulario\n        alert("Usuario creado exitosamente");\n      }\n    } catch (error) {\n      console.error("Error:", error);\n    }\n  };\n\n  return (\n    &lt;form onSubmit={handleSubmit(onSubmit)}&gt;\n      &lt;div&gt;\n        &lt;input\n          {...register("name")}\n          placeholder="Nombre"\n        /&gt;\n        {errors.name && &lt;p&gt;{errors.name.message}&lt;/p&gt;}\n      &lt;/div&gt;\n      \n      &lt;div&gt;\n        &lt;input\n          {...register("email")}\n          type="email"\n          placeholder="Email"\n        /&gt;\n        {errors.email && &lt;p&gt;{errors.email.message}&lt;/p&gt;}\n      &lt;/div&gt;\n      \n      &lt;div&gt;\n        &lt;input\n          {...register("age", { valueAsNumber: true })}\n          type="number"\n          placeholder="Edad"\n        /&gt;\n        {errors.age && &lt;p&gt;{errors.age.message}&lt;/p&gt;}\n      &lt;/div&gt;\n      \n      &lt;button type="submit" disabled={isSubmitting}&gt;\n        {isSubmitting ? "Guardando..." : "Guardar"}\n      &lt;/button&gt;\n    &lt;/form&gt;\n  );\n}</code></pre></div>',
            ],
          },
        ],
      },
      {
        emoji: "🎨",
        title: "Módulo 3: Tailwind CSS",
        shortTitle: "Tailwind",
        objective: "Implementar diseños responsivos y consistentes usando el enfoque utility-first de Tailwind CSS.",
        completed: false,
        sections: [
          {
            title: "3.1 Introducción a Tailwind CSS",
            content: [
              "<p><em>Tailwind es un framework de CSS que proporciona clases utilitarias prehechas, como tener un toolkit de funciones CSS listas para usar.</em></p>",
              '<p><strong>Concepto:</strong> Un framework CSS "utility-first" que proporciona clases predefinidas</p>',
              "<p><em>En lugar de escribir CSS personalizado, usas clases como `text-red-500` o `p-4`. Como usar librerías en lugar de escribir todo desde cero.</em></p>",
              "<p><strong>¿Por qué Tailwind?</strong> Rapidez de desarrollo, consistencia y optimización</p>",
              "<p><em>No tienes que inventar nombres de clases, los estilos son consistentes, y se optimiza automáticamente removiendo CSS no usado.</em></p>",
              '<p><strong>Principios "Utility-First":</strong> Cómo se aplican los estilos componiendo clases</p>',
              "<p><em>Combinas múltiples clases pequeñas para lograr el diseño deseado. Como usar funciones puras que combinan para crear comportamiento complejo.</em></p>",
              "<p><strong>Configuración (tailwind.config.js):</strong> Personalizar el tema</p>",
              "<p><em>Como el archivo de configuración de tu aplicación: defines colores, espaciados y breakpoints personalizados.</em></p>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-html">&lt;!-- Ejemplo: Card con Tailwind --&gt;\n&lt;div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-md"&gt;\n  &lt;h2 class="text-xl font-bold text-gray-800"&gt;Título&lt;/h2&gt;\n  &lt;button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"&gt;\n    Acción\n  &lt;/button&gt;\n&lt;/div&gt;\n\n&lt;!-- Sin Tailwind necesitarías escribir CSS personalizado --&gt;\n&lt;!-- Con Tailwind, cada clase hace una cosa específica --&gt;</code></pre></div>',
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-javascript">// tailwind.config.js - Configuración personalizada\nmodule.exports = {\n  content: ["./src/**/*.{js,ts,jsx,tsx}"],\n  theme: {\n    extend: {\n      colors: {\n        primary: {\n          50: "#eff6ff",\n          500: "#3b82f6",\n          600: "#2563eb",\n          700: "#1d4ed8"\n        },\n        brand: {\n          light: "#f3f4f6",\n          dark: "#1f2937"\n        }\n      },\n      spacing: {\n        "18": "4.5rem",\n        "88": "22rem"\n      }\n    }\n  },\n  plugins: []\n}</code></pre></div>',
            ],
          },
          {
            title: "3.2 Aplicando Estilos y Responsive Design con Tailwind",
            content: [
              "<p><em>Las clases de Tailwind son como comandos específicos: cada una hace una cosa específica y las combinas para lograr el resultado deseado.</em></p>",
              "<p><strong>Clases de Utilidad:</strong> Layout (Flexbox, Grid), espaciado, bordes, tipografía, colores</p>",
              "<p><em>Cada clase hace una cosa: `p-4` agrega padding, `text-lg` aumenta el tamaño del texto. Como funciones puras.</em></p>",
              "<p><strong>Categorías principales de clases:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li><strong>Layout:</strong> `flex`, `grid`, `block`, `inline-block`</li>",
              "<li><strong>Espaciado:</strong> `p-4` (padding), `m-2` (margin), `gap-4`</li>",
              "<li><strong>Tipografía:</strong> `text-lg`, `font-bold`, `text-center`</li>",
              "<li><strong>Colores:</strong> `bg-blue-500`, `text-white`, `border-gray-300`</li>",
              "<li><strong>Efectos:</strong> `shadow-md`, `rounded-lg`, `opacity-75`</li>",
              "</ul>",
              "<p><strong>Diseño Responsivo en Tailwind:</strong> Uso de prefijos de breakpoints</p>",
              '<p><em>Aplicas estilos diferentes según el tamaño de pantalla. `md:text-lg` significa "texto grande solo en pantallas medianas o mayores".</em></p>',
              "<p><strong>Breakpoints de Tailwind:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li><code>sm:</code> 640px y mayor</li>",
              "<li><code>md:</code> 768px y mayor</li>",
              "<li><code>lg:</code> 1024px y mayor</li>",
              "<li><code>xl:</code> 1280px y mayor</li>",
              "<li><code>2xl:</code> 1536px y mayor</li>",
              "</ul>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-html">&lt;!-- Grid responsivo --&gt;\n&lt;div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"&gt;\n  &lt;!-- 1 columna móvil, 2 tablet, 3 desktop --&gt;\n  &lt;div class="p-4 bg-white rounded shadow"&gt;Card 1&lt;/div&gt;\n  &lt;div class="p-4 bg-white rounded shadow"&gt;Card 2&lt;/div&gt;\n  &lt;div class="p-4 bg-white rounded shadow"&gt;Card 3&lt;/div&gt;\n&lt;/div&gt;\n\n&lt;!-- Texto responsivo --&gt;\n&lt;h1 class="text-2xl md:text-4xl lg:text-6xl font-bold text-center"&gt;\n  Título que crece con la pantalla\n&lt;/h1&gt;\n\n&lt;!-- Navegación responsiva --&gt;\n&lt;nav class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4"&gt;\n  &lt;a href="#" class="block px-4 py-2 hover:bg-gray-100"&gt;Inicio&lt;/a&gt;\n  &lt;a href="#" class="block px-4 py-2 hover:bg-gray-100"&gt;Productos&lt;/a&gt;\n  &lt;a href="#" class="block px-4 py-2 hover:bg-gray-100"&gt;Contacto&lt;/a&gt;\n&lt;/nav&gt;</code></pre></div>',
            ],
          },
          {
            title: "3.3 Componentes Reutilizables con Tailwind",
            content: [
              "<p><strong>Componentes Reutilizables con Tailwind:</strong> Cómo agrupar clases de Tailwind dentro de componentes de React</p>",
              "<p><em>Creas componentes React que internamente usan clases Tailwind, para no repetir las mismas combinaciones de clases.</em></p>",
              "<p><strong>Patrones de componentes comunes:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li><strong>Buttons:</strong> Variantes de botones con diferentes estilos</li>",
              "<li><strong>Cards:</strong> Contenedores de contenido reutilizables</li>",
              "<li><strong>Form Elements:</strong> Inputs, selects consistentes</li>",
              "<li><strong>Layout Components:</strong> Headers, sidebars, containers</li>",
              "</ul>",
              "<p><strong>Usando @apply en CSS (cuando es necesario):</strong></p>",
              "<p><em>Para casos donde necesitas crear clases personalizadas que reutilicen utilidades de Tailwind.</em></p>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// Componente Button reutilizable\ninterface ButtonProps {\n  variant: "primary" | "secondary" | "danger";\n  size: "sm" | "md" | "lg";\n  children: React.ReactNode;\n  onClick?: () => void;\n  disabled?: boolean;\n}\n\nfunction Button({ variant, size, children, onClick, disabled }: ButtonProps) {\n  const baseClasses = "font-medium rounded focus:outline-none focus:ring-2 transition-colors";\n  \n  const variantClasses = {\n    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",\n    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500",\n    danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500"\n  };\n  \n  const sizeClasses = {\n    sm: "px-3 py-1.5 text-sm",\n    md: "px-4 py-2",\n    lg: "px-6 py-3 text-lg"\n  };\n  \n  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";\n  \n  return (\n    &lt;button\n      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses}`}\n      onClick={onClick}\n      disabled={disabled}\n    &gt;\n      {children}\n    &lt;/button&gt;\n  );\n}</code></pre></div>',
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// Card component reutilizable\ninterface CardProps {\n  title?: string;\n  children: React.ReactNode;\n  className?: string;\n}\n\nfunction Card({ title, children, className = "" }: CardProps) {\n  return (\n    &lt;div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}&gt;\n      {title && (\n        &lt;div className="px-6 py-4 border-b border-gray-200"&gt;\n          &lt;h3 className="text-lg font-semibold text-gray-900"&gt;{title}&lt;/h3&gt;\n        &lt;/div&gt;\n      )}\n      &lt;div className="p-6"&gt;\n        {children}\n      &lt;/div&gt;\n    &lt;/div&gt;\n  );\n}\n\n// Uso de los componentes\nfunction App() {\n  return (\n    &lt;div className="max-w-4xl mx-auto p-6 space-y-6"&gt;\n      &lt;Card title="Usuario"&gt;\n        &lt;p className="text-gray-600 mb-4"&gt;Información del usuario&lt;/p&gt;\n        &lt;div className="flex space-x-3"&gt;\n          &lt;Button variant="primary" size="md"&gt;Guardar&lt;/Button&gt;\n          &lt;Button variant="secondary" size="md"&gt;Cancelar&lt;/Button&gt;\n        &lt;/div&gt;\n      &lt;/Card&gt;\n    &lt;/div&gt;\n  );\n}</code></pre></div>',
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-css">/* styles/globals.css - Usando @apply cuando es necesario */\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n/* Componente personalizado con @apply */\n.btn-primary {\n  @apply px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors;\n}\n\n/* Útil para casos donde necesitas la clase en HTML puro */\n&lt;button class="btn-primary"&gt;Click me&lt;/button&gt;</code></pre></div>',
            ],
          },
        ],
      },
      {
        emoji: "🚀",
        title: "Módulo 4: Next.js",
        shortTitle: "Next.js",
        objective:
          "Implementar aplicaciones React de producción con Next.js, incluyendo SSR, SSG y optimizaciones automáticas.",
        completed: false,
        sections: [
          {
            title: "4.1 Introducción a Next.js",
            content: [
              "<p><em>Next.js es a React lo que NestJS es a Node.js: un framework que agrega estructura, herramientas y mejores prácticas sobre la librería base.</em></p>",
              "<p><strong>Concepto:</strong> Un meta-framework de React que añade funcionalidades para la producción</p>",
              "<p><em>React por sí solo es solo una librería de UI. Next.js agrega routing, optimizaciones, server-side rendering y tooling.</em></p>",
              "<p><strong>¿Por qué Next.js?</strong> Mejora el rendimiento, el SEO y la experiencia de desarrollador</p>",
              "<p><em>Como usar Express con middlewares vs Node.js puro. Next.js resuelve problemas comunes del desarrollo React.</em></p>",
              '<p><strong>Arquitectura de Next.js:</strong> El sistema de "App Router"</p>',
              "<p><em>La nueva forma de manejar rutas en Next.js. Basado en carpetas y archivos, como las rutas en Express pero automáticas.</em></p>",
              "<p><strong>Ventajas principales:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li>Routing automático basado en archivos</li>",
              "<li>Optimizaciones de performance automáticas</li>",
              "<li>Soporte para múltiples estrategias de rendering</li>",
              "<li>API Routes integradas</li>",
              "<li>Optimización automática de imágenes</li>",
              "<li>Code splitting automático</li>",
              "</ul>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-bash"># Crear un nuevo proyecto Next.js\nnpx create-next-app@latest mi-app\ncd mi-app\nnpm run dev\n\n# Estructura básica generada:\nmi-app/\n├── src/app/          # App Router (nuevo)\n│   ├── layout.tsx    # Layout raíz\n│   └── page.tsx      # Página principal\n├── public/           # Archivos estáticos\n├── next.config.js    # Configuración de Next.js\n└── package.json</code></pre></div>',
            ],
          },
          {
            title: "4.2 Tipos de Renderizado en Next.js (Concepto Clave)",
            content: [
              "<p><em>Como en backend puedes cachear respuestas o generar contenido dinámico, Next.js te permite elegir cómo y dónde se genera el HTML.</em></p>",
              "<p><strong>Client-Side Rendering (CSR):</strong> El navegador renderiza la página</p>",
              "<p><em>Como una SPA tradicional. El servidor envía JavaScript y el navegador construye la página. Más interactivo pero más lento inicialmente.</em></p>",
              "<p><strong>Server-Side Rendering (SSR):</strong> Los componentes se renderizan en el servidor</p>",
              "<p><em>El servidor genera el HTML completo antes de enviarlo. Como generar un reporte PDF en el servidor antes de enviarlo.</em></p>",
              '<p><strong>Static Site Generation (SSG):</strong> El sitio se pre-renderiza a HTML estático en el momento del "build"</p>',
              "<p><em>Como compilar tu aplicación. Las páginas se generan una vez durante el deploy y se sirven como archivos estáticos.</em></p>",
              "<p><strong>Incremental Static Regeneration (ISR):</strong> Permite que páginas estáticas se regeneren</p>",
              "<p><em>Como cache con TTL. Las páginas estáticas se regeneran en background cuando expiran.</em></p>",
              "<p><strong>Server Components vs. Client Components:</strong> Entender qué se ejecuta en el servidor y qué en el cliente</p>",
              "<p><em>Server Components se ejecutan en el servidor (como tus controllers), Client Components en el navegador (como JavaScript tradicional).</em></p>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// Server Component (por defecto en App Router)\n// Se ejecuta en el servidor, puede acceder a bases de datos directamente\nexport default async function ProductsPage() {\n  // Esto se ejecuta en el servidor\n  const products = await fetch("https://api.example.com/products");\n  const data = await products.json();\n  \n  return (\n    &lt;div&gt;\n      &lt;h1&gt;Productos&lt;/h1&gt;\n      {data.map(product =&gt; (\n        &lt;div key={product.id}&gt;{product.name}&lt;/div&gt;\n      ))}\n    &lt;/div&gt;\n  );\n}\n\n// Client Component - necesita "use client"\n// Se ejecuta en el navegador, puede usar hooks y eventos\n"use client";\nimport { useState, useEffect } from "react";\n\nexport default function InteractiveCounter() {\n  const [count, setCount] = useState(0);\n  const [data, setData] = useState(null);\n  \n  useEffect(() =&gt; {\n    // Esto se ejecuta en el browser\n    fetch("/api/data").then(res =&gt; res.json()).then(setData);\n  }, []);\n  \n  return (\n    &lt;div&gt;\n      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;\n        Clicks: {count}\n      &lt;/button&gt;\n      &lt;p&gt;{data?.message}&lt;/p&gt;\n    &lt;/div&gt;\n  );\n}</code></pre></div>',
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// Estrategias de rendering por tipo de página\n\n// SSG - Páginas estáticas (ej: blog posts, docs)\nexport default async function StaticPage() {\n  const posts = await getBlogPosts(); // Se ejecuta en build time\n  return &lt;div&gt;{posts.map(post =&gt; &lt;Article key={post.id} {...post} /&gt;)}&lt;/div&gt;;\n}\n\n// SSR - Páginas dinámicas (ej: dashboard de usuario)\nexport default async function DynamicPage() {\n  const user = await getCurrentUser(); // Se ejecuta en cada request\n  return &lt;div&gt;Welcome, {user.name}&lt;/div&gt;;\n}\n\n// ISR - Páginas que cambian ocasionalmente\nexport const revalidate = 3600; // Regenerar cada hora\nexport default async function ISRPage() {\n  const data = await getUpdatedData();\n  return &lt;div&gt;{data.content}&lt;/div&gt;;\n}</code></pre></div>',
            ],
          },
          {
            title: "4.3 Enrutamiento en Next.js (App Router)",
            content: [
              "<p><em>Como Express define rutas con `app.get('/users', handler)`, Next.js define rutas con carpetas y archivos.</em></p>",
              "<p><strong>Concepto:</strong> El sistema de rutas basado en la estructura de directorios</p>",
              "<p><em>Cada carpeta en `src/app` es una ruta. `/users` se crea poniendo un archivo `page.tsx` en la carpeta `src/app/users`.</em></p>",
              "<p><strong>Rutas Dinámicas:</strong> Creación de URLs personalizadas</p>",
              "<p><em>Como `/:id` en Express. En Next.js usas `[id]` como nombre de carpeta para crear rutas con parámetros.</em></p>",
              "<p><strong>Layouts:</strong> Compartir UI entre múltiples rutas</p>",
              "<p><em>Como middlewares que se ejecutan en múltiples rutas, pero para UI. Headers, sidebars que se mantienen entre páginas.</em></p>",
              "<p><strong>Loading UI y Error Handling:</strong> Cómo manejar los estados de carga y errores</p>",
              "<p><em>Archivos especiales `loading.tsx` y `error.tsx` que Next.js muestra automáticamente durante cargas o errores.</em></p>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="text-green-400">src/app/\n├── layout.tsx          # Layout raíz para toda la app\n├── page.tsx           # Página home (/)\n├── loading.tsx        # Loading UI global\n├── error.tsx          # Error UI global\n├── not-found.tsx      # Página 404 personalizada\n├── about/\n│   └── page.tsx       # Página about (/about)\n├── blog/\n│   ├── layout.tsx     # Layout específico para blog\n│   ├── page.tsx       # Lista de posts (/blog)\n│   ├── loading.tsx    # Loading para blog\n│   └── [slug]/\n│       └── page.tsx   # Post específico (/blog/mi-post)\n├── users/\n│   ├── page.tsx       # Lista usuarios (/users)\n│   └── [id]/\n│       ├── page.tsx   # Perfil usuario (/users/123)\n│       └── edit/\n│           └── page.tsx # Editar usuario (/users/123/edit)\n└── dashboard/\n    ├── layout.tsx     # Layout del dashboard\n    ├── page.tsx       # Dashboard principal (/dashboard)\n    ├── analytics/\n    │   └── page.tsx   # Analytics (/dashboard/analytics)\n    └── settings/\n        └── page.tsx   # Settings (/dashboard/settings)</code></pre></div>',
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// src/app/layout.tsx - Layout raíz\nexport default function RootLayout({\n  children,\n}: {\n  children: React.ReactNode\n}) {\n  return (\n    &lt;html lang="es"&gt;\n      &lt;body&gt;\n        &lt;header&gt;\n          &lt;nav&gt;Navegación Global&lt;/nav&gt;\n        &lt;/header&gt;\n        &lt;main&gt;{children}&lt;/main&gt;\n        &lt;footer&gt;Footer Global&lt;/footer&gt;\n      &lt;/body&gt;\n    &lt;/html&gt;\n  );\n}\n\n// src/app/blog/[slug]/page.tsx - Página dinámica\ninterface Params {\n  slug: string;\n}\n\nexport default async function BlogPost({ params }: { params: Params }) {\n  const { slug } = params;\n  const post = await getBlogPost(slug);\n  \n  if (!post) {\n    notFound(); // Redirige a 404\n  }\n  \n  return (\n    &lt;article&gt;\n      &lt;h1&gt;{post.title}&lt;/h1&gt;\n      &lt;p&gt;{post.content}&lt;/p&gt;\n    &lt;/article&gt;\n  );\n}\n\n// src/app/blog/loading.tsx - Loading UI\nexport default function Loading() {\n  return &lt;div&gt;Cargando post...&lt;/div&gt;;\n}\n\n// src/app/blog/error.tsx - Error UI\n"use client";\n\nexport default function Error({\n  error,\n  reset,\n}: {\n  error: Error & { digest?: string };\n  reset: () =&gt; void;\n}) {\n  return (\n    &lt;div&gt;\n      &lt;h2&gt;Algo salió mal!&lt;/h2&gt;\n      &lt;p&gt;{error.message}&lt;/p&gt;\n      &lt;button onClick={reset}&gt;Intentar de nuevo&lt;/button&gt;\n    &lt;/div&gt;\n  );\n}</code></pre></div>',
            ],
          },
          {
            title: "4.4 Carga de Datos y API Routes",
            content: [
              "<p><em>Next.js puede actuar como cliente (consumiendo tu API) y también como servidor (proporcionando endpoints adicionales).</em></p>",
              "<p><strong>Data Fetching en Next.js:</strong> Uso de la API fetch con optimizaciones y caché integradas</p>",
              "<p><em>Como hacer peticiones HTTP desde tu backend a otros servicios, pero desde Next.js hacia tu API. Con cache automático.</em></p>",
              "<p><strong>API Routes (Route Handlers):</strong> Creación de endpoints de backend directamente dentro de tu proyecto Next.js</p>",
              "<p><em>Como tener controllers de Express dentro de tu proyecto frontend. Útil para proxies o lógica simple.</em></p>",
              "<p><strong>Estrategias de caching:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li><strong>force-cache:</strong> Cachea la respuesta indefinidamente</li>",
              "<li><strong>no-store:</strong> Nunca cachea, siempre fresh data</li>",
              "<li><strong>revalidate:</strong> Cachea por un tiempo específico</li>",
              "</ul>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// src/app/api/users/route.ts - API Route\nimport { NextRequest, NextResponse } from "next/server";\n\n// GET /api/users\nexport async function GET() {\n  try {\n    // Como un controller en Express\n    const users = await getUsersFromDatabase();\n    return NextResponse.json(users);\n  } catch (error) {\n    return NextResponse.json(\n      { error: "Error al obtener usuarios" },\n      { status: 500 }\n    );\n  }\n}\n\n// POST /api/users\nexport async function POST(request: NextRequest) {\n  try {\n    const body = await request.json();\n    const newUser = await createUser(body);\n    return NextResponse.json(newUser, { status: 201 });\n  } catch (error) {\n    return NextResponse.json(\n      { error: "Error al crear usuario" },\n      { status: 400 }\n    );\n  }\n}\n\n// src/app/api/users/[id]/route.ts - Ruta dinámica\nexport async function GET(\n  request: NextRequest,\n  { params }: { params: { id: string } }\n) {\n  const { id } = params;\n  const user = await getUserById(id);\n  \n  if (!user) {\n    return NextResponse.json(\n      { error: "Usuario no encontrado" },\n      { status: 404 }\n    );\n  }\n  \n  return NextResponse.json(user);\n}\n\nexport async function PUT(\n  request: NextRequest,\n  { params }: { params: { id: string } }\n) {\n  const { id } = params;\n  const body = await request.json();\n  const updatedUser = await updateUser(id, body);\n  return NextResponse.json(updatedUser);\n}\n\nexport async function DELETE(\n  request: NextRequest,\n  { params }: { params: { id: string } }\n) {\n  const { id } = params;\n  await deleteUser(id);\n  return NextResponse.json({ success: true });\n}</code></pre></div>',
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// Data fetching en Server Components\n\n// Fetch con cache (por defecto)\nexport default async function ProductsPage() {\n  const products = await fetch("https://api.example.com/products"); // Cacheado\n  const data = await products.json();\n  return &lt;ProductList products={data} /&gt;;\n}\n\n// Fetch sin cache\nexport default async function LiveDataPage() {\n  const data = await fetch("https://api.example.com/live-data", {\n    cache: "no-store" // Siempre fresh\n  });\n  const result = await data.json();\n  return &lt;LiveComponent data={result} /&gt;;\n}\n\n// Fetch con revalidación\nexport default async function NewsPage() {\n  const news = await fetch("https://api.example.com/news", {\n    next: { revalidate: 60 } // Re-fetch cada 60 segundos\n  });\n  const articles = await news.json();\n  return &lt;NewsList articles={articles} /&gt;;\n}\n\n// Fetch paralelo para múltiples fuentes\nexport default async function DashboardPage() {\n  const [users, orders, analytics] = await Promise.all([\n    fetch("https://api.example.com/users").then(res =&gt; res.json()),\n    fetch("https://api.example.com/orders").then(res =&gt; res.json()),\n    fetch("https://api.example.com/analytics").then(res =&gt; res.json())\n  ]);\n  \n  return (\n    &lt;div&gt;\n      &lt;UsersWidget data={users} /&gt;\n      &lt;OrdersWidget data={orders} /&gt;\n      &lt;AnalyticsWidget data={analytics} /&gt;\n    &lt;/div&gt;\n  );\n}</code></pre></div>',
            ],
          },
          {
            title: "4.5 Optimización y Despliegue con Next.js",
            content: [
              "<p><strong>Optimización Automática:</strong> Imágenes (next/image), carga diferida (lazy loading)</p>",
              "<p><em>Next.js optimiza automáticamente las imágenes: las redimensiona, las convierte a formatos modernos, y las carga solo cuando son visibles.</em></p>",
              "<p><strong>Code Splitting:</strong> División automática del código JavaScript</p>",
              "<p><em>Cada página solo carga el JavaScript que necesita, no todo el bundle de la aplicación.</em></p>",
              "<p><strong>Despliegue con Vercel:</strong> Integración fluida y sencilla</p>",
              "<p><em>Vercel (la empresa detrás de Next.js) proporciona deployment automático desde Git, como Heroku pero optimizado para Next.js.</em></p>",
              "<p><strong>Variables de entorno y configuración de producción:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li>Variables públicas: <code>NEXT_PUBLIC_API_URL</code></li>",
              "<li>Variables privadas: <code>DATABASE_URL</code> (solo servidor)</li>",
              "<li>Configuración en <code>next.config.js</code></li>",
              "</ul>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// Optimización de imágenes con next/image\nimport Image from "next/image";\n\nfunction ProductCard({ product }) {\n  return (\n    &lt;div className="product-card"&gt;\n      {/* Next.js optimiza automáticamente esta imagen */}\n      &lt;Image\n        src={product.imageUrl}\n        alt={product.name}\n        width={300}\n        height={200}\n        placeholder="blur" // Muestra blur mientras carga\n        priority={product.featured} // Carga prioritaria para imágenes importantes\n      /&gt;\n      &lt;h3&gt;{product.name}&lt;/h3&gt;\n      &lt;p&gt;${product.price}&lt;/p&gt;\n    &lt;/div&gt;\n  );\n}\n\n// Carga diferida de componentes\nimport dynamic from "next/dynamic";\n\n// Este componente solo se carga cuando es necesario\nconst HeavyChart = dynamic(() =&gt; import("./HeavyChart"), {\n  loading: () =&gt; &lt;p&gt;Cargando gráfico...&lt;/p&gt;,\n  ssr: false // No renderizar en el servidor\n});\n\nfunction Dashboard() {\n  const [showChart, setShowChart] = useState(false);\n  \n  return (\n    &lt;div&gt;\n      &lt;h1&gt;Dashboard&lt;/h1&gt;\n      &lt;button onClick={() =&gt; setShowChart(true)}&gt;\n        Mostrar Gráfico\n      &lt;/button&gt;\n      {showChart && &lt;HeavyChart /&gt;}\n    &lt;/div&gt;\n  );\n}</code></pre></div>',
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-javascript">// next.config.js - Configuración de Next.js\n/** @type {import("next").NextConfig} */\nconst nextConfig = {\n  // Configuración de imágenes\n  images: {\n    domains: ["api.example.com", "cdn.example.com"],\n    formats: ["image/webp", "image/avif"]\n  },\n  \n  // Variables de entorno\n  env: {\n    CUSTOM_KEY: process.env.CUSTOM_KEY,\n  },\n  \n  // Redirecciones\n  async redirects() {\n    return [\n      {\n        source: "/old-path",\n        destination: "/new-path",\n        permanent: true,\n      },\n    ];\n  },\n  \n  // Headers de seguridad\n  async headers() {\n    return [\n      {\n        source: "/api/:path*",\n        headers: [\n          {\n            key: "Access-Control-Allow-Origin",\n            value: "https://myapp.com",\n          },\n        ],\n      },\n    ];\n  },\n};\n\nmodule.exports = nextConfig;</code></pre></div>',
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-bash"># Despliegue en Vercel\n# 1. Instalar Vercel CLI\nnpm i -g vercel\n\n# 2. Deploy desde terminal\nvercel\n\n# 3. O conectar repositorio en vercel.com\n# - Push a GitHub/GitLab\n# - Auto-deploy en cada commit\n\n# Variables de entorno en producción:\n# .env.local (desarrollo)\nNEXT_PUBLIC_API_URL=http://localhost:3001/api\nDATABASE_URL=postgresql://localhost:5432/mydb\nJWT_SECRET=dev-secret\n\n# En Vercel dashboard:\n# NEXT_PUBLIC_API_URL=https://api.myapp.com/api\n# DATABASE_URL=postgresql://prod-db-url\n# JWT_SECRET=prod-secret</code></pre></div>',
            ],
          },
        ],
      },
      {
        emoji: "🔗",
        title: "Módulo 5: Conectando Frontend y Backend",
        shortTitle: "Frontend ↔ Backend",
        objective:
          "Integrar frontend con APIs backend, manejo de autenticación, CORS y buenas prácticas de comunicación.",
        completed: false,
        sections: [
          {
            title: "5.1 Diseño de APIs desde la Perspectiva Frontend",
            content: [
              "<p><em>Como cliente de tu propia API, entenderás mejor qué hace que una API sea fácil o difícil de consumir desde el frontend.</em></p>",
              "<p><strong>APIs RESTful:</strong> Reafirmar los principios y las mejores prácticas</p>",
              "<p><em>Los mismos conceptos que ya conoces, pero ahora los verás desde el lado del consumidor. URLs intuitivas, métodos HTTP correctos.</em></p>",
              "<p><strong>Formato de Datos (JSON):</strong> Comunicación estándar entre frontend y backend</p>",
              "<p><em>El mismo JSON que generas en tu backend es lo que consume el frontend. Importante mantener contratos de datos consistentes.</em></p>",
              "<p><strong>Manejo de Errores desde el Backend:</strong> Diseñar respuestas de error consistentes</p>",
              "<p><em>El frontend necesita saber qué error ocurrió y cómo mostrarlo al usuario. Códigos de estado y mensajes claros son cruciales.</em></p>",
              "<p><strong>Buenas prácticas para APIs consumibles:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li><strong>Endpoints consistentes:</strong> GET /api/users, POST /api/users, PUT /api/users/:id</li>",
              "<li><strong>Respuestas estructuradas:</strong> Formato consistente para datos y errores</li>",
              "<li><strong>Paginación:</strong> Para listas grandes de datos</li>",
              "<li><strong>Filtros y búsqueda:</strong> Query parameters claros</li>",
              "</ul>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// Estructura de respuesta consistente del backend\ninterface ApiResponse&lt;T&gt; {\n  success: boolean;\n  data?: T;\n  error?: {\n    message: string;\n    code: string;\n    details?: any;\n  };\n  pagination?: {\n    page: number;\n    limit: number;\n    total: number;\n    totalPages: number;\n  };\n}\n\n// Ejemplos de endpoints bien diseñados\n// GET /api/users?page=1&limit=10&search=john\n// POST /api/users\n// GET /api/users/123\n// PUT /api/users/123\n// DELETE /api/users/123\n\n// Respuesta de éxito\n{\n  "success": true,\n  "data": {\n    "id": 1,\n    "name": "John Doe",\n    "email": "john@example.com"\n  }\n}\n\n// Respuesta de error\n{\n  "success": false,\n  "error": {\n    "message": "Usuario no encontrado",\n    "code": "USER_NOT_FOUND",\n    "details": { "userId": 123 }\n  }\n}</code></pre></div>',
            ],
          },
          {
            title: "5.2 Autenticación y Autorización",
            content: [
              "<p><em>Los mismos conceptos de auth que manejas en backend, pero desde la perspectiva de cómo el frontend los consume y almacena.</em></p>",
              "<p><strong>Flujos Comunes:</strong> Autenticación basada en tokens (JWT)</p>",
              "<p><em>El mismo flujo: login → backend retorna token → frontend lo guarda → frontend lo envía en cada petición.</em></p>",
              "<p><strong>Almacenamiento Seguro de Credenciales:</strong></p>",
              "<ul class='list-disc pl-6 space-y-2'>",
              "<li><strong>Cookies (HttpOnly, Secure):</strong> Opción recomendada<br><em>El browser maneja las cookies automáticamente. HttpOnly previene acceso desde JavaScript, más seguro.</em></li>",
              "<li><strong>localStorage:</strong> Menos seguro<br><em>Como variables globales en el browser. Fácil de usar pero accesible desde JavaScript, vulnerable a XSS.</em></li>",
              "</ul>",
              "<p><strong>Implementación de autenticación:</strong></p>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// lib/auth.ts - Manejo de autenticación\ninterface LoginResponse {\n  success: boolean;\n  token?: string;\n  user?: User;\n  error?: string;\n}\n\n// Función de login\nexport async function login(email: string, password: string): Promise&lt;LoginResponse&gt; {\n  try {\n    const response = await fetch("/api/auth/login", {\n      method: "POST",\n      headers: { "Content-Type": "application/json" },\n      body: JSON.stringify({ email, password }),\n      credentials: "include" // Importante para cookies\n    });\n    \n    const data = await response.json();\n    \n    if (response.ok) {\n      // Token se guarda automáticamente como HttpOnly cookie\n      return { success: true, user: data.user };\n    } else {\n      return { success: false, error: data.error?.message };\n    }\n  } catch (error) {\n    return { success: false, error: "Error de conexión" };\n  }\n}\n\n// Hook personalizado para autenticación\nfunction useAuth() {\n  const [user, setUser] = useState&lt;User | null&gt;(null);\n  const [loading, setLoading] = useState(true);\n  \n  useEffect(() =&gt; {\n    // Verificar si el usuario está autenticado\n    checkAuth();\n  }, []);\n  \n  const checkAuth = async () =&gt; {\n    try {\n      const response = await fetch("/api/auth/me", {\n        credentials: "include" // Envía cookies automáticamente\n      });\n      \n      if (response.ok) {\n        const userData = await response.json();\n        setUser(userData);\n      }\n    } catch (error) {\n      console.error("Error verificando auth:", error);\n    } finally {\n      setLoading(false);\n    }\n  };\n  \n  const logout = async () =&gt; {\n    await fetch("/api/auth/logout", {\n      method: "POST",\n      credentials: "include"\n    });\n    setUser(null);\n  };\n  \n  return { user, loading, login, logout, checkAuth };\n}</code></pre></div>',
            ],
          },
          {
            title: "5.3 Variables de Entorno y CORS",
            content: [
              "<p><em>Los mismos conceptos de configuración que usas en backend, pero adaptados para el entorno del frontend.</em></p>",
              "<p><strong>Variables de Entorno en Frontend:</strong> Gestionar URLs de API, claves públicas, etc., de forma segura</p>",
              "<p><em>Como process.env en Node.js, pero para el browser. Solo variables públicas (que empiecen con NEXT_PUBLIC_) se incluyen en el build.</em></p>",
              "<p><strong>CORS:</strong> Entender y resolver problemas de seguridad cuando el frontend y el backend están en dominios diferentes</p>",
              "<p><em>El error que ya conoces del backend, pero ahora lo enfrentas como cliente. El browser bloquea peticiones cross-origin por seguridad.</em></p>",
              "<p><strong>Configuración de variables de entorno:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li><strong>Públicas:</strong> <code>NEXT_PUBLIC_API_URL</code> - Accesibles desde el cliente</li>",
              "<li><strong>Privadas:</strong> <code>API_SECRET_KEY</code> - Solo en servidor/build</li>",
              "<li><strong>Por entorno:</strong> .env.local, .env.development, .env.production</li>",
              "</ul>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-bash"># .env.local (desarrollo)\nNEXT_PUBLIC_API_URL=http://localhost:3001/api\nNEXT_PUBLIC_APP_NAME=Mi App Local\nAPI_SECRET_KEY=dev-secret-123\nDATABASE_URL=postgresql://localhost:5432/mydb\n\n# .env.production\nNEXT_PUBLIC_API_URL=https://api.miapp.com/api\nNEXT_PUBLIC_APP_NAME=Mi App\nAPI_SECRET_KEY=prod-secret-xyz\nDATABASE_URL=postgresql://prod-db/mydb</code></pre></div>',
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// lib/config.ts - Configuración centralizada\nexport const config = {\n  apiUrl: process.env.NEXT_PUBLIC_API_URL!,\n  appName: process.env.NEXT_PUBLIC_APP_NAME!,\n  isProd: process.env.NODE_ENV === "production",\n  isDev: process.env.NODE_ENV === "development"\n};\n\n// Validar variables requeridas\nif (!config.apiUrl) {\n  throw new Error("NEXT_PUBLIC_API_URL es requerida");\n}\n\n// lib/api.ts - Cliente API centralizado\nclass ApiClient {\n  private baseUrl: string;\n  \n  constructor() {\n    this.baseUrl = config.apiUrl;\n  }\n  \n  async request&lt;T&gt;(\n    endpoint: string,\n    options: RequestInit = {}\n  ): Promise&lt;ApiResponse&lt;T&gt;&gt; {\n    const url = `${this.baseUrl}${endpoint}`;\n    \n    const defaultHeaders: HeadersInit = {\n      "Content-Type": "application/json",\n    };\n    \n    const response = await fetch(url, {\n      ...options,\n      headers: {\n        ...defaultHeaders,\n        ...options.headers,\n      },\n      credentials: "include", // Para cookies\n    });\n    \n    if (!response.ok) {\n      const errorData = await response.json().catch(() =&gt; ({}));\n      throw new ApiError(\n        errorData.error?.message || `HTTP ${response.status}`,\n        response.status,\n        errorData\n      );\n    }\n    \n    return response.json();\n  }\n  \n  // Métodos de conveniencia\n  get&lt;T&gt;(endpoint: string) {\n    return this.request&lt;T&gt;(endpoint);\n  }\n  \n  post&lt;T&gt;(endpoint: string, data: any) {\n    return this.request&lt;T&gt;(endpoint, {\n      method: "POST",\n      body: JSON.stringify(data),\n    });\n  }\n  \n  put&lt;T&gt;(endpoint: string, data: any) {\n    return this.request&lt;T&gt;(endpoint, {\n      method: "PUT",\n      body: JSON.stringify(data),\n    });\n  }\n  \n  delete&lt;T&gt;(endpoint: string) {\n    return this.request&lt;T&gt;(endpoint, {\n      method: "DELETE",\n    });\n  }\n}\n\nexport const apiClient = new ApiClient();</code></pre></div>',
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-javascript">// Configuración CORS en el backend (Express ejemplo)\n// cors.js\nconst allowedOrigins = [\n  "http://localhost:3000", // Frontend dev\n  "https://miapp.vercel.app", // Frontend prod\n  "https://miapp.com" // Dominio final\n];\n\nconst corsOptions = {\n  origin: (origin, callback) =&gt; {\n    // Permitir requests sin origin (ej: mobile apps, Postman)\n    if (!origin) return callback(null, true);\n    \n    if (allowedOrigins.includes(origin)) {\n      callback(null, true);\n    } else {\n      callback(new Error("No permitido por CORS"));\n    }\n  },\n  credentials: true, // Permitir cookies\n  optionsSuccessStatus: 200\n};\n\napp.use(cors(corsOptions));</code></pre></div>',
            ],
          },
          {
            title: "5.4 Breve Introducción a Pruebas Automatizadas en Frontend",
            content: [
              "<p><strong>Concepto:</strong> Escribir tests para componentes de React y lógica de JavaScript</p>",
              "<p><em>Como los tests unitarios e integración que ya conoces en backend, pero para componentes UI y lógica de cliente.</em></p>",
              "<p><strong>Herramientas:</strong> Jest, Vitest, React Testing Library</p>",
              "<p><em>Jest/Vitest son como el framework de testing (similar a Mocha o Jest en Node.js), React Testing Library ayuda a testear componentes.</em></p>",
              "<p><strong>Tipos de tests en frontend:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li><strong>Unit tests:</strong> Funciones puras, utilidades, hooks</li>",
              "<li><strong>Component tests:</strong> Componentes individuales</li>",
              "<li><strong>Integration tests:</strong> Flujos completos usuario</li>",
              "<li><strong>API tests:</strong> Mocks de peticiones HTTP</li>",
              "</ul>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// utils.test.ts - Test de función utilitaria\nimport { formatPrice, validateEmail } from "./utils";\n\ndescribe("Utilidades", () =&gt; {\n  test("formatPrice formatea correctamente", () =&gt; {\n    expect(formatPrice(1234.56)).toBe("$1,234.56");\n    expect(formatPrice(0)).toBe("$0.00");\n  });\n  \n  test("validateEmail valida emails", () =&gt; {\n    expect(validateEmail("test@example.com")).toBe(true);\n    expect(validateEmail("invalid-email")).toBe(false);\n  });\n});\n\n// Button.test.tsx - Test de componente\nimport { render, screen, fireEvent } from "@testing-library/react";\nimport Button from "./Button";\n\ndescribe("Button Component", () =&gt; {\n  test("renderiza texto correctamente", () =&gt; {\n    render(&lt;Button&gt;Click me&lt;/Button&gt;);\n    expect(screen.getByText("Click me")).toBeInTheDocument();\n  });\n  \n  test("ejecuta onClick cuando se clickea", () =&gt; {\n    const handleClick = jest.fn();\n    render(&lt;Button onClick={handleClick}&gt;Click&lt;/Button&gt;);\n    \n    fireEvent.click(screen.getByText("Click"));\n    expect(handleClick).toHaveBeenCalledTimes(1);\n  });\n  \n  test("se deshabilita cuando disabled=true", () =&gt; {\n    render(&lt;Button disabled&gt;Disabled&lt;/Button&gt;);\n    expect(screen.getByRole("button")).toBeDisabled();\n  });\n});</code></pre></div>',
            ],
          },
          {
            title: "5.5 Debugging y Herramientas de Desarrollo",
            content: [
              "<p><strong>React Developer Tools</strong></p>",
              "<p><em>Extensión del browser que te permite inspeccionar componentes React, su estado y props. Como el inspector de elementos pero para React.</em></p>",
              "<p><strong>Network tab para debugging de APIs</strong></p>",
              "<p><em>La pestaña Network del DevTools del browser muestra todas las peticiones HTTP. Crucial para debuggear problemas de API.</em></p>",
              "<p><strong>Error boundaries en React</strong></p>",
              "<p><em>Componentes que capturan errores JavaScript en el árbol de componentes, como try/catch pero para componentes.</em></p>",
              "<p><strong>Logging y monitoreo básico</strong></p>",
              "<p><em>Como logs en backend, pero adaptado para frontend. Útil para trackear errores y comportamiento de usuario.</em></p>",
              "<p><strong>Herramientas de debugging esenciales:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li><strong>Console.log estratégico:</strong> Para valores de estado y flujo</li>",
              "<li><strong>React DevTools:</strong> Inspeccionar componentes y estado</li>",
              "<li><strong>Network tab:</strong> Verificar peticiones API</li>",
              "<li><strong>Sources tab:</strong> Breakpoints en código</li>",
              "</ul>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// Error Boundary para capturar errores\nclass ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false, error: null };\n  }\n  \n  static getDerivedStateFromError(error) {\n    return { hasError: true, error };\n  }\n  \n  componentDidCatch(error, errorInfo) {\n    console.error("Error capturado:", error, errorInfo);\n    // Aquí podrías enviar el error a un servicio como Sentry\n  }\n  \n  render() {\n    if (this.state.hasError) {\n      return (\n        &lt;div className="error-fallback"&gt;\n          &lt;h2&gt;Algo salió mal&lt;/h2&gt;\n          &lt;p&gt;{this.state.error?.message}&lt;/p&gt;\n          &lt;button onClick={() =&gt; window.location.reload()}&gt;\n            Recargar página\n          &lt;/button&gt;\n        &lt;/div&gt;\n      );\n    }\n    \n    return this.props.children;\n  }\n}\n\n// Hook para logging y debugging\nfunction useDebugValue(value, label = "Value") {\n  useEffect(() =&gt; {\n    if (process.env.NODE_ENV === "development") {\n      console.log(`[DEBUG] ${label}:`, value);\n    }\n  }, [value, label]);\n}\n\n// Utility para logging de errores\nexport function logError(error: Error, context?: any) {\n  const errorInfo = {\n    message: error.message,\n    stack: error.stack,\n    timestamp: new Date().toISOString(),\n    url: window.location.href,\n    userAgent: navigator.userAgent,\n    context\n  };\n  \n  console.error("Error logged:", errorInfo);\n  \n  // En producción, enviarías esto a un servicio de monitoreo\n  if (process.env.NODE_ENV === "production") {\n    // sendToMonitoringService(errorInfo);\n  }\n}</code></pre></div>',
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// Custom hook para debugging API calls\nfunction useApiCall&lt;T&gt;(url: string, options?: RequestInit) {\n  const [data, setData] = useState&lt;T | null&gt;(null);\n  const [loading, setLoading] = useState(false);\n  const [error, setError] = useState&lt;string | null&gt;(null);\n  \n  const makeRequest = useCallback(async () =&gt; {\n    setLoading(true);\n    setError(null);\n    \n    const startTime = Date.now();\n    console.log(`[API] 📤 ${options?.method || "GET"} ${url}`);\n    \n    try {\n      const response = await fetch(url, options);\n      const duration = Date.now() - startTime;\n      \n      if (!response.ok) {\n        throw new Error(`HTTP ${response.status}: ${response.statusText}`);\n      }\n      \n      const result = await response.json();\n      \n      console.log(`[API] ✅ ${url} (${duration}ms)`, result);\n      setData(result);\n      \n    } catch (err) {\n      const duration = Date.now() - startTime;\n      const errorMsg = err instanceof Error ? err.message : "Error desconocido";\n      \n      console.error(`[API] ❌ ${url} (${duration}ms)`, errorMsg);\n      setError(errorMsg);\n    } finally {\n      setLoading(false);\n    }\n  }, [url, options]);\n  \n  return { data, loading, error, refetch: makeRequest };\n}</code></pre></div>',
            ],
          },
        ],
      },
      {
        emoji: "🛠️",
        title: "Módulo 6: Proyecto Práctico Integrador",
        shortTitle: "Proyecto",
        objective:
          "Construir un e-commerce completo integrando todos los conocimientos: React, TypeScript, Next.js, Tailwind y herramientas IA modernas.",
        completed: false,
        sections: [
          {
            title: "6.1 Planificación y Diseño del E-commerce",
            content: [
              "<p><strong>Construcción de un E-commerce Sencillo:</strong> Proyecto integrador que combina todos los conceptos aprendidos</p>",
              "<p><em>Como construir una aplicación completa de backend, pero en este caso es un frontend que consume APIs. Aplicas arquitectura, patrones y mejores prácticas.</em></p>",
              "<p><strong>Diseño y Maquetación:</strong> Utilizando HTML y Tailwind CSS</p>",
              "<p><em>Definir la estructura visual y los componentes principales antes de empezar a codificar. Como el diseño de base de datos antes del desarrollo.</em></p>",
              "<p><strong>Funcionalidades principales:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li><strong>Catálogo de productos:</strong> Listado, filtros, búsqueda</li>",
              "<li><strong>Carrito de compras:</strong> Agregar, quitar, actualizar cantidades</li>",
              "<li><strong>Checkout:</strong> Formulario de compra y confirmación</li>",
              "<li><strong>Autenticación:</strong> Login, registro, perfil de usuario</li>",
              "<li><strong>Panel admin:</strong> Gestión básica de productos</li>",
              "</ul>",
              "<p><strong>Arquitectura del proyecto:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li><strong>Componentes reutilizables:</strong> Button, Card, Modal, Form</li>",
              "<li><strong>Gestión de estado:</strong> Zustand para carrito, auth y productos</li>",
              "<li><strong>Integración con API:</strong> Tu propia API de backend</li>",
              "<li><strong>Routing:</strong> Páginas estáticas y dinámicas con Next.js</li>",
              "</ul>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="text-green-400"># Estructura del proyecto e-commerce\nsrc/\n├── app/\n│   ├── (auth)/\n│   │   ├── login/page.tsx\n│   │   └── register/page.tsx\n│   ├── (shop)/\n│   │   ├── products/\n│   │   │   ├── page.tsx          # Lista de productos\n│   │   │   └── [id]/page.tsx     # Detalle de producto\n│   │   ├── cart/page.tsx\n│   │   └── checkout/page.tsx\n│   ├── admin/\n│   │   ├── products/page.tsx\n│   │   └── orders/page.tsx\n│   ├── api/\n│   │   └── webhook/route.ts      # Para pagos\n│   ├── layout.tsx\n│   └── page.tsx                  # Homepage\n├── components/\n│   ├── ui/\n│   │   ├── Button.tsx\n│   │   ├── Card.tsx\n│   │   ├── Modal.tsx\n│   │   └── Input.tsx\n│   ├── layout/\n│   │   ├── Header.tsx\n│   │   ├── Footer.tsx\n│   │   └── Sidebar.tsx\n│   ├── shop/\n│   │   ├── ProductCard.tsx\n│   │   ├── ProductList.tsx\n│   │   ├── Cart.tsx\n│   │   └── CartItem.tsx\n│   └── forms/\n│       ├── LoginForm.tsx\n│       └── CheckoutForm.tsx\n├── lib/\n│   ├── api.ts\n│   ├── auth.ts\n│   ├── utils.ts\n│   └── validations.ts\n└── stores/\n    ├── useCartStore.ts\n    ├── useAuthStore.ts\n    └── useProductStore.ts</code></pre></div>',
            ],
          },
          {
            title: "6.2 Desarrollo de Componentes y Estado",
            content: [
              "<p><strong>Desarrollo de Componentes:</strong> Crear componentes reutilizables aplicando TypeScript</p>",
              "<p><em>Como desarrollar módulos reutilizables en backend. Cada componente tiene una responsabilidad específica y una interfaz clara.</em></p>",
              "<p><strong>Componentes clave del e-commerce:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li><strong>ProductCard:</strong> Tarjeta de producto con imagen, nombre, precio</li>",
              "<li><strong>Cart:</strong> Carrito lateral con items y totales</li>",
              "<li><strong>Checkout:</strong> Formulario de pago con validaciones</li>",
              "<li><strong>Navigation:</strong> Header con autenticación y carrito</li>",
              "</ul>",
              "<p><strong>Gestión de Estado:</strong> Usar Zustand para el estado del carrito</p>",
              "<p><em>Como usar un estado global en tu aplicación. Zustand es más simple que Redux pero igual de potente.</em></p>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// stores/useCartStore.ts - Estado global del carrito\nimport { create } from "zustand";\nimport { persist } from "zustand/middleware";\n\ninterface CartItem {\n  id: number;\n  name: string;\n  price: number;\n  quantity: number;\n  image: string;\n}\n\ninterface CartStore {\n  items: CartItem[];\n  total: number;\n  itemCount: number;\n  addItem: (product: Omit&lt;CartItem, "quantity"&gt;) =&gt; void;\n  removeItem: (id: number) =&gt; void;\n  updateQuantity: (id: number, quantity: number) =&gt; void;\n  clearCart: () =&gt; void;\n}\n\nexport const useCartStore = create&lt;CartStore&gt;()(\n  persist(\n    (set, get) =&gt; ({\n      items: [],\n      total: 0,\n      itemCount: 0,\n      \n      addItem: (product) =&gt; {\n        const items = get().items;\n        const existingItem = items.find(item =&gt; item.id === product.id);\n        \n        if (existingItem) {\n          set({\n            items: items.map(item =&gt;\n              item.id === product.id\n                ? { ...item, quantity: item.quantity + 1 }\n                : item\n            )\n          });\n        } else {\n          set({ items: [...items, { ...product, quantity: 1 }] });\n        }\n        \n        // Recalcular totales\n        const newItems = get().items;\n        const newTotal = newItems.reduce((sum, item) =&gt; sum + (item.price * item.quantity), 0);\n        const newItemCount = newItems.reduce((sum, item) =&gt; sum + item.quantity, 0);\n        \n        set({ total: newTotal, itemCount: newItemCount });\n      },\n      \n      removeItem: (id) =&gt; {\n        const items = get().items.filter(item =&gt; item.id !== id);\n        const total = items.reduce((sum, item) =&gt; sum + (item.price * item.quantity), 0);\n        const itemCount = items.reduce((sum, item) =&gt; sum + item.quantity, 0);\n        \n        set({ items, total, itemCount });\n      },\n      \n      updateQuantity: (id, quantity) =&gt; {\n        if (quantity &lt;= 0) {\n          get().removeItem(id);\n          return;\n        }\n        \n        const items = get().items.map(item =&gt;\n          item.id === id ? { ...item, quantity } : item\n        );\n        const total = items.reduce((sum, item) =&gt; sum + (item.price * item.quantity), 0);\n        const itemCount = items.reduce((sum, item) =&gt; sum + item.quantity, 0);\n        \n        set({ items, total, itemCount });\n      },\n      \n      clearCart: () =&gt; set({ items: [], total: 0, itemCount: 0 }),\n    }),\n    { name: "cart-storage" } // Persiste en localStorage\n  )\n);</code></pre></div>',
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// components/shop/ProductCard.tsx\ninterface Product {\n  id: number;\n  name: string;\n  price: number;\n  image: string;\n  description: string;\n  category: string;\n}\n\ninterface ProductCardProps {\n  product: Product;\n}\n\nexport default function ProductCard({ product }: ProductCardProps) {\n  const addItem = useCartStore(state =&gt; state.addItem);\n  const [isAdding, setIsAdding] = useState(false);\n  \n  const handleAddToCart = async () =&gt; {\n    setIsAdding(true);\n    addItem({\n      id: product.id,\n      name: product.name,\n      price: product.price,\n      image: product.image\n    });\n    \n    // Feedback visual\n    setTimeout(() =&gt; setIsAdding(false), 500);\n  };\n  \n  return (\n    &lt;div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"&gt;\n      &lt;div className="relative aspect-square"&gt;\n        &lt;Image\n          src={product.image}\n          alt={product.name}\n          fill\n          className="object-cover"\n        /&gt;\n        {product.category && (\n          &lt;span className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs"&gt;\n            {product.category}\n          &lt;/span&gt;\n        )}\n      &lt;/div&gt;\n      \n      &lt;div className="p-4"&gt;\n        &lt;h3 className="font-semibold text-lg mb-2"&gt;{product.name}&lt;/h3&gt;\n        &lt;p className="text-gray-600 text-sm mb-3 line-clamp-2"&gt;\n          {product.description}\n        &lt;/p&gt;\n        \n        &lt;div className="flex items-center justify-between"&gt;\n          &lt;span className="text-xl font-bold text-green-600"&gt;\n            ${product.price.toFixed(2)}\n          &lt;/span&gt;\n          \n          &lt;Button\n            onClick={handleAddToCart}\n            disabled={isAdding}\n            variant="primary"\n            size="sm"\n          &gt;\n            {isAdding ? (\n              &lt;&gt;\n                &lt;Spinner className="w-4 h-4 mr-2" /&gt;\n                Agregando...\n              &lt;/&gt;\n            ) : (\n              "Agregar al carrito"\n            )}\n          &lt;/Button&gt;\n        &lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  );\n}</code></pre></div>',
            ],
          },
          {
            title: "6.3 Integración con API Backend",
            content: [
              "<p><strong>Integración con API Backend:</strong> Consumir tus propios endpoints</p>",
              "<p><em>Conectar el frontend con tu API de backend. Como cliente y servidor trabajando juntos, pero ahora eres responsable de ambos lados.</em></p>",
              "<p><strong>Endpoints principales para el e-commerce:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li><strong>Productos:</strong> GET /api/products, GET /api/products/:id</li>",
              "<li><strong>Carrito:</strong> POST /api/cart/add, PUT /api/cart/update</li>",
              "<li><strong>Órdenes:</strong> POST /api/orders, GET /api/orders/:id</li>",
              "<li><strong>Auth:</strong> POST /api/auth/login, POST /api/auth/register</li>",
              "</ul>",
              "<p><strong>Manejo de estados de carga y errores:</strong></p>",
              "<p><em>Como manejar timeouts y errores de conexión en tu API, pero desde el lado del cliente. Importante dar feedback al usuario.</em></p>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// lib/api/products.ts\nexport interface Product {\n  id: number;\n  name: string;\n  description: string;\n  price: number;\n  image: string;\n  category: string;\n  stock: number;\n  createdAt: string;\n}\n\nexport interface ProductsResponse {\n  products: Product[];\n  pagination: {\n    page: number;\n    limit: number;\n    total: number;\n    totalPages: number;\n  };\n}\n\nexport const productApi = {\n  // Obtener lista de productos con filtros\n  getProducts: async (params?: {\n    page?: number;\n    limit?: number;\n    category?: string;\n    search?: string;\n  }): Promise&lt;ProductsResponse&gt; =&gt; {\n    const searchParams = new URLSearchParams();\n    if (params?.page) searchParams.set("page", params.page.toString());\n    if (params?.limit) searchParams.set("limit", params.limit.toString());\n    if (params?.category) searchParams.set("category", params.category);\n    if (params?.search) searchParams.set("search", params.search);\n    \n    const response = await apiClient.get&lt;ProductsResponse&gt;(\n      `/products?${searchParams.toString()}`\n    );\n    return response.data!;\n  },\n  \n  // Obtener producto por ID\n  getProduct: async (id: number): Promise&lt;Product&gt; =&gt; {\n    const response = await apiClient.get&lt;Product&gt;(`/products/${id}`);\n    return response.data!;\n  },\n  \n  // Crear producto (admin)\n  createProduct: async (product: Omit&lt;Product, "id" | "createdAt"&gt;): Promise&lt;Product&gt; =&gt; {\n    const response = await apiClient.post&lt;Product&gt;("/products", product);\n    return response.data!;\n  },\n  \n  // Actualizar producto (admin)\n  updateProduct: async (id: number, updates: Partial&lt;Product&gt;): Promise&lt;Product&gt; =&gt; {\n    const response = await apiClient.put&lt;Product&gt;(`/products/${id}`, updates);\n    return response.data!;\n  },\n  \n  // Eliminar producto (admin)\n  deleteProduct: async (id: number): Promise&lt;void&gt; =&gt; {\n    await apiClient.delete(`/products/${id}`);\n  }\n};</code></pre></div>',
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// hooks/useProducts.ts - Hook para manejar productos\nexport function useProducts(params?: {\n  page?: number;\n  category?: string;\n  search?: string;\n}) {\n  const [products, setProducts] = useState&lt;Product[]&gt;([]);\n  const [pagination, setPagination] = useState&lt;any&gt;(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState&lt;string | null&gt;(null);\n  \n  const fetchProducts = useCallback(async () =&gt; {\n    try {\n      setLoading(true);\n      setError(null);\n      \n      const response = await productApi.getProducts(params);\n      setProducts(response.products);\n      setPagination(response.pagination);\n    } catch (err) {\n      setError(err instanceof Error ? err.message : "Error al cargar productos");\n      console.error("Error fetching products:", err);\n    } finally {\n      setLoading(false);\n    }\n  }, [params]);\n  \n  useEffect(() =&gt; {\n    fetchProducts();\n  }, [fetchProducts]);\n  \n  return {\n    products,\n    pagination,\n    loading,\n    error,\n    refetch: fetchProducts\n  };\n}\n\n// Uso en componente\nfunction ProductsPage() {\n  const [searchTerm, setSearchTerm] = useState("");\n  const [selectedCategory, setSelectedCategory] = useState("");\n  const [currentPage, setCurrentPage] = useState(1);\n  \n  const { products, pagination, loading, error, refetch } = useProducts({\n    page: currentPage,\n    search: searchTerm,\n    category: selectedCategory\n  });\n  \n  if (loading) return &lt;ProductListSkeleton /&gt;;\n  if (error) return &lt;ErrorMessage message={error} onRetry={refetch} /&gt;;\n  \n  return (\n    &lt;div&gt;\n      &lt;SearchAndFilters \n        onSearch={setSearchTerm}\n        onCategoryChange={setSelectedCategory}\n      /&gt;\n      \n      &lt;ProductGrid products={products} /&gt;\n      \n      &lt;Pagination \n        current={currentPage}\n        total={pagination?.totalPages || 0}\n        onChange={setCurrentPage}\n      /&gt;\n    &lt;/div&gt;\n  );\n}</code></pre></div>',
            ],
          },
          {
            title: "6.4 Enrutamiento con Next.js y Despliegue",
            content: [
              "<p><strong>Enrutamiento con Next.js:</strong> Implementar rutas estáticas y dinámicas</p>",
              "<p><em>Como definir rutas en Express, pero usando el sistema de archivos. Cada página es un archivo, cada carpeta es una ruta.</em></p>",
              "<p><strong>Rutas del e-commerce:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li><strong>Estáticas:</strong> /, /products, /cart, /checkout, /login</li>",
              "<li><strong>Dinámicas:</strong> /products/[id], /orders/[id], /admin/products/[id]</li>",
              "<li><strong>Grupos de rutas:</strong> (auth), (shop), (admin) para organizar</li>",
              "<li><strong>Layouts compartidos:</strong> Header/Footer, Auth layout, Admin layout</li>",
              "</ul>",
              "<p><strong>Despliegue:</strong> Publicar el proyecto en Vercel</p>",
              "<p><em>Como deployear tu aplicación de backend, pero para frontend. Vercel se conecta a tu GitHub y autodeploya en cada push.</em></p>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// app/(shop)/products/[id]/page.tsx\ninterface ProductPageProps {\n  params: { id: string };\n}\n\nexport default async function ProductPage({ params }: ProductPageProps) {\n  const productId = parseInt(params.id);\n  \n  try {\n    const product = await productApi.getProduct(productId);\n    \n    return (\n      &lt;div className="max-w-6xl mx-auto px-4 py-8"&gt;\n        &lt;div className="grid grid-cols-1 md:grid-cols-2 gap-8"&gt;\n          {/* Imagen del producto */}\n          &lt;div className="aspect-square relative"&gt;\n            &lt;Image\n              src={product.image}\n              alt={product.name}\n              fill\n              className="object-cover rounded-lg"\n              priority\n            /&gt;\n          &lt;/div&gt;\n          \n          {/* Detalles del producto */}\n          &lt;div&gt;\n            &lt;h1 className="text-3xl font-bold mb-4"&gt;{product.name}&lt;/h1&gt;\n            &lt;p className="text-xl text-green-600 font-semibold mb-4"&gt;\n              ${product.price.toFixed(2)}\n            &lt;/p&gt;\n            &lt;p className="text-gray-600 mb-6"&gt;{product.description}&lt;/p&gt;\n            \n            &lt;div className="mb-6"&gt;\n              &lt;span className="text-sm text-gray-500"&gt;Categoría: &lt;/span&gt;\n              &lt;span className="text-blue-600"&gt;{product.category}&lt;/span&gt;\n            &lt;/div&gt;\n            \n            &lt;div className="mb-6"&gt;\n              &lt;span className="text-sm text-gray-500"&gt;Stock: &lt;/span&gt;\n              &lt;span className={product.stock &gt; 0 ? "text-green-600" : "text-red-600"}&gt;\n                {product.stock &gt; 0 ? `${product.stock} disponibles` : "Sin stock"}\n              &lt;/span&gt;\n            &lt;/div&gt;\n            \n            &lt;AddToCartSection product={product} /&gt;\n          &lt;/div&gt;\n        &lt;/div&gt;\n        \n        &lt;RelatedProducts categoryId={product.category} currentProductId={product.id} /&gt;\n      &lt;/div&gt;\n    );\n  } catch (error) {\n    notFound(); // Redirige a 404 si no encuentra el producto\n  }\n}\n\n// Generar metadata para SEO\nexport async function generateMetadata(\n  { params }: ProductPageProps\n): Promise&lt;Metadata&gt; {\n  try {\n    const product = await productApi.getProduct(parseInt(params.id));\n    \n    return {\n      title: `${product.name} - Mi Tienda`,\n      description: product.description,\n      openGraph: {\n        title: product.name,\n        description: product.description,\n        images: [product.image],\n      },\n    };\n  } catch {\n    return {\n      title: "Producto no encontrado",\n    };\n  }\n}</code></pre></div>',
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-bash"># Despliegue en Vercel\n\n# 1. Conectar repositorio en vercel.com\n#    - Import Git Repository\n#    - Seleccionar tu repo de GitHub\n#    - Vercel detecta automáticamente que es Next.js\n\n# 2. Configurar variables de entorno en Vercel Dashboard:\n#    Settings → Environment Variables\nNEXT_PUBLIC_API_URL=https://api.mitienda.com\nNEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_...\nAPI_SECRET_KEY=sk_live_...\nDATABASE_URL=postgresql://...\n\n# 3. Deploy automático\n#    - Cada push a main → deploy a producción\n#    - Cada PR → preview deployment\n#    - Rollback fácil desde dashboard\n\n# 4. Configuración opcional en vercel.json\n{\n  "functions": {\n    "app/api/**/*.ts": {\n      "maxDuration": 30\n    }\n  },\n  "headers": [\n    {\n      "source": "/(.*)",\n      "headers": [\n        {\n          "key": "X-Frame-Options",\n          "value": "DENY"\n        },\n        {\n          "key": "X-Content-Type-Options", \n          "value": "nosniff"\n        }\n      ]\n    }\n  ]\n}</code></pre></div>',
            ],
          },
          {
            title: "6.5 Consideraciones de Seguridad Frontend",
            content: [
              "<p><strong>Validación client-side vs server-side</strong></p>",
              "<p><em>La validación en el cliente es para UX (feedback inmediato), pero SIEMPRE debes validar en el servidor. El cliente no es confiable.</em></p>",
              "<p><strong>XSS prevention</strong></p>",
              "<p><em>Cross-Site Scripting: evitar que código malicioso se ejecute en tu app. React protege automáticamente, pero ten cuidado con dangerouslySetInnerHTML.</em></p>",
              "<p><strong>Content Security Policy básico</strong></p>",
              "<p><em>Como CORS pero para recursos (scripts, imágenes). Define qué fuentes de contenido son permitidas en tu app.</em></p>",
              "<p><strong>Sanitización de inputs</strong></p>",
              "<p><em>Como validar y limpiar datos de entrada en tu API, pero también en el frontend para prevenir ataques.</em></p>",
              "<p><strong>Checklist de seguridad frontend:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li>✅ Nunca confíes en validación del cliente únicamente</li>",
              "<li>✅ Sanitiza inputs antes de mostrarlos</li>",
              "<li>✅ Usa HTTPS en producción</li>",
              "<li>✅ Configura CSP headers</li>",
              "<li>✅ No expongas datos sensibles en el cliente</li>",
              "<li>✅ Usa cookies HttpOnly para tokens</li>",
              "</ul>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// lib/validation.ts - Validación y sanitización\nimport DOMPurify from "isomorphic-dompurify";\nimport { z } from "zod";\n\n// Schema de validación con Zod\nexport const productSchema = z.object({\n  name: z.string().min(1, "Nombre requerido").max(100, "Nombre muy largo"),\n  description: z.string().max(500, "Descripción muy larga"),\n  price: z.number().positive("Precio debe ser positivo"),\n  category: z.string().min(1, "Categoría requerida")\n});\n\nexport const checkoutSchema = z.object({\n  email: z.string().email("Email inválido"),\n  firstName: z.string().min(1, "Nombre requerido"),\n  lastName: z.string().min(1, "Apellido requerido"),\n  address: z.string().min(5, "Dirección muy corta"),\n  city: z.string().min(1, "Ciudad requerida"),\n  zipCode: z.string().regex(/^\\d{5}$/, "Código postal inválido")\n});\n\n// Sanitización de contenido HTML\nexport function sanitizeHtml(html: string): string {\n  return DOMPurify.sanitize(html, {\n    ALLOWED_TAGS: ["b", "i", "em", "strong", "p", "br"],\n    ALLOWED_ATTR: []\n  });\n}\n\n// Validación de archivos de imagen\nexport function validateImageFile(file: File): { valid: boolean; error?: string } {\n  const maxSize = 5 * 1024 * 1024; // 5MB\n  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];\n  \n  if (!allowedTypes.includes(file.type)) {\n    return { valid: false, error: "Tipo de archivo no permitido" };\n  }\n  \n  if (file.size &gt; maxSize) {\n    return { valid: false, error: "Archivo muy grande (máximo 5MB)" };\n  }\n  \n  return { valid: true };\n}\n\n// Rate limiting básico para formularios\nclass RateLimiter {\n  private attempts = new Map&lt;string, { count: number; lastAttempt: number }&gt;();\n  \n  canProceed(identifier: string, maxAttempts = 5, windowMs = 60000): boolean {\n    const now = Date.now();\n    const userAttempts = this.attempts.get(identifier);\n    \n    if (!userAttempts || now - userAttempts.lastAttempt &gt; windowMs) {\n      this.attempts.set(identifier, { count: 1, lastAttempt: now });\n      return true;\n    }\n    \n    if (userAttempts.count &gt;= maxAttempts) {\n      return false;\n    }\n    \n    userAttempts.count++;\n    userAttempts.lastAttempt = now;\n    return true;\n  }\n}\n\nexport const formRateLimiter = new RateLimiter();</code></pre></div>',
            ],
          },
        ],
      },
      {
        emoji: "🧪",
        title: "Módulo 7: Testing y Accesibilidad",
        shortTitle: "Testing & A11y",
        objective: "Implementar testing automatizado y garantizar accesibilidad WCAG 2.1 AA en las aplicaciones.",
        completed: false,
        sections: [
          {
            title: "7.1 Testing Visual",
            content: [
              "<p><strong>Qué es:</strong> Comparar capturas de pantalla de la UI en distintos momentos para detectar cambios no intencionales</p>",
              "<p><em>Como tests de regresión en backend, pero para UI. Automatiza la detección de cambios visuales que podrían romper el diseño.</em></p>",
              "<p><strong>Herramientas:</strong> Storybook + Chromatic, Playwright, Percy</p>",
              "<p><em>Storybook es como un catálogo interactivo de componentes. Chromatic toma screenshots y los compara entre versiones.</em></p>",
              "<p><strong>Buenas prácticas:</strong> Mantener componentes pequeños y aislados</p>",
              "<p><em>Como funciones puras en backend: componentes sin efectos secundarios son más fáciles de testear visualmente.</em></p>",
              "<p><strong>Workflow de testing visual:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li>📱 Crear stories de componentes en Storybook</li>",
              "<li>📸 Tomar screenshots de baseline</li>",
              "<li>🔍 Ejecutar tests en cada cambio</li>",
              "<li>👀 Revisar diferencias detectadas</li>",
              "<li>✅ Aprobar cambios intencionales</li>",
              "</ul>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// Button.stories.ts - Configuración de Storybook\nimport type { Meta, StoryObj } from "@storybook/react";\nimport { Button } from "./Button";\n\nconst meta: Meta&lt;typeof Button&gt; = {\n  title: "UI/Button",\n  component: Button,\n  parameters: {\n    layout: "centered",\n    docs: {\n      description: {\n        component: "Componente de botón reutilizable con múltiples variantes."\n      }\n    }\n  },\n  tags: ["autodocs"],\n  argTypes: {\n    variant: {\n      control: { type: "select" },\n      options: ["primary", "secondary", "danger"]\n    },\n    size: {\n      control: { type: "select" },\n      options: ["sm", "md", "lg"]\n    }\n  }\n};\n\nexport default meta;\ntype Story = StoryObj&lt;typeof meta&gt;;\n\n// Stories para diferentes estados\nexport const Primary: Story = {\n  args: {\n    variant: "primary",\n    children: "Button Primary",\n  },\n};\n\nexport const Secondary: Story = {\n  args: {\n    variant: "secondary",\n    children: "Button Secondary",\n  },\n};\n\nexport const Danger: Story = {\n  args: {\n    variant: "danger",\n    children: "Delete Item",\n  },\n};\n\nexport const Loading: Story = {\n  args: {\n    variant: "primary",\n    children: "Loading...",\n    disabled: true,\n  },\n};\n\nexport const AllSizes: Story = {\n  render: () =&gt; (\n    &lt;div className="flex gap-4 items-center"&gt;\n      &lt;Button variant="primary" size="sm"&gt;Small&lt;/Button&gt;\n      &lt;Button variant="primary" size="md"&gt;Medium&lt;/Button&gt;\n      &lt;Button variant="primary" size="lg"&gt;Large&lt;/Button&gt;\n    &lt;/div&gt;\n  ),\n};</code></pre></div>',
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// playwright.config.ts - Configuración para testing visual\nimport { defineConfig, devices } from "@playwright/test";\n\nexport default defineConfig({\n  testDir: "./tests",\n  fullyParallel: true,\n  forbidOnly: !!process.env.CI,\n  retries: process.env.CI ? 2 : 0,\n  workers: process.env.CI ? 1 : undefined,\n  reporter: "html",\n  use: {\n    baseURL: "http://localhost:3000",\n    trace: "on-first-retry",\n    screenshot: "only-on-failure",\n  },\n\n  projects: [\n    {\n      name: "chromium",\n      use: { ...devices["Desktop Chrome"] },\n    },\n    {\n      name: "firefox", \n      use: { ...devices["Desktop Firefox"] },\n    },\n    {\n      name: "webkit",\n      use: { ...devices["Desktop Safari"] },\n    },\n    // Mobile testing\n    {\n      name: "Mobile Chrome",\n      use: { ...devices["Pixel 5"] },\n    },\n  ],\n\n  webServer: {\n    command: "npm run dev",\n    url: "http://localhost:3000",\n    reuseExistingServer: !process.env.CI,\n  },\n});\n\n// tests/visual.spec.ts - Tests visuales con Playwright\nimport { test, expect } from "@playwright/test";\n\ntest.describe("Visual Tests", () =&gt; {\n  test("homepage looks correct", async ({ page }) =&gt; {\n    await page.goto("/");\n    await expect(page).toHaveScreenshot("homepage.png");\n  });\n\n  test("product card component", async ({ page }) =&gt; {\n    await page.goto("/products");\n    const productCard = page.locator(".product-card").first();\n    await expect(productCard).toHaveScreenshot("product-card.png");\n  });\n\n  test("responsive layout", async ({ page }) =&gt; {\n    await page.goto("/");\n    \n    // Desktop\n    await page.setViewportSize({ width: 1200, height: 800 });\n    await expect(page).toHaveScreenshot("desktop-layout.png");\n    \n    // Tablet\n    await page.setViewportSize({ width: 768, height: 1024 });\n    await expect(page).toHaveScreenshot("tablet-layout.png");\n    \n    // Mobile\n    await page.setViewportSize({ width: 375, height: 667 });\n    await expect(page).toHaveScreenshot("mobile-layout.png");\n  });\n});</code></pre></div>',
            ],
          },
          {
            title: "7.2 Testing de Accesibilidad",
            content: [
              "<p><strong>Objetivo:</strong> Garantizar que la app cumpla estándares WCAG</p>",
              "<p><em>Como validar que tu API cumple con estándares de seguridad, pero para accesibilidad web. Es crucial para usuarios con discapacidades.</em></p>",
              "<p><strong>Herramientas:</strong> axe-core, Lighthouse, Wave</p>",
              "<p><em>axe-core es como un linter para accesibilidad. Lighthouse hace auditorías completas. Wave es una extensión para revisar páginas.</em></p>",
              "<p><strong>WCAG 2.1 AA - Principios básicos:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li><strong>Perceptible:</strong> La información debe ser presentada de formas que los usuarios puedan percibir</li>",
              "<li><strong>Operable:</strong> Los componentes deben ser operables por todos los usuarios</li>",
              "<li><strong>Comprensible:</strong> La información y el manejo de la UI deben ser comprensibles</li>",
              "<li><strong>Robusto:</strong> El contenido debe ser interpretable por diversas tecnologías</li>",
              "</ul>",
              "<p><strong>Checklist básico de accesibilidad:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li>✅ <strong>Contraste mínimo 4.5:1</strong> - Texto legible para usuarios con baja visión</li>",
              "<li>✅ <strong>Navegación por teclado funcional</strong> - Acceso sin mouse</li>",
              "<li>✅ <strong>Texto alternativo en imágenes</strong> - Para lectores de pantalla</li>",
              "<li>✅ <strong>Etiquetas correctas en formularios</strong> - Asociación label/input</li>",
              "<li>✅ <strong>Estructura de headings lógica</strong> - H1, H2, H3 en orden</li>",
              "<li>✅ <strong>Focus visible</strong> - Indicadores claros de elemento activo</li>",
              "</ul>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// lib/accessibility.ts - Utilidades para accesibilidad\n\n// Hook para manejo de focus por teclado\nexport function useFocusManagement() {\n  const focusableElementsSelector = \n    \'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])\';\n    \n  const trapFocus = useCallback((container: HTMLElement) =&gt; {\n    const focusableElements = container.querySelectorAll(focusableElementsSelector);\n    const firstElement = focusableElements[0] as HTMLElement;\n    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;\n    \n    const handleKeyDown = (e: KeyboardEvent) =&gt; {\n      if (e.key !== "Tab") return;\n      \n      if (e.shiftKey) {\n        if (document.activeElement === firstElement) {\n          e.preventDefault();\n          lastElement.focus();\n        }\n      } else {\n        if (document.activeElement === lastElement) {\n          e.preventDefault();\n          firstElement.focus();\n        }\n      }\n    };\n    \n    container.addEventListener("keydown", handleKeyDown);\n    firstElement?.focus();\n    \n    return () =&gt; container.removeEventListener("keydown", handleKeyDown);\n  }, []);\n  \n  return { trapFocus };\n}\n\n// Componente Modal accesible\ninterface ModalProps {\n  isOpen: boolean;\n  onClose: () =&gt; void;\n  title: string;\n  children: React.ReactNode;\n}\n\nexport function AccessibleModal({ isOpen, onClose, title, children }: ModalProps) {\n  const modalRef = useRef&lt;HTMLDivElement&gt;(null);\n  const { trapFocus } = useFocusManagement();\n  \n  useEffect(() =&gt; {\n    if (!isOpen || !modalRef.current) return;\n    \n    const cleanup = trapFocus(modalRef.current);\n    \n    // Prevenir scroll del body\n    document.body.style.overflow = "hidden";\n    \n    return () =&gt; {\n      cleanup();\n      document.body.style.overflow = "unset";\n    };\n  }, [isOpen, trapFocus]);\n  \n  // Cerrar con Escape\n  useEffect(() =&gt; {\n    const handleEscape = (e: KeyboardEvent) =&gt; {\n      if (e.key === "Escape" && isOpen) {\n        onClose();\n      }\n    };\n    \n    document.addEventListener("keydown", handleEscape);\n    return () =&gt; document.removeEventListener("keydown", handleEscape);\n  }, [isOpen, onClose]);\n  \n  if (!isOpen) return null;\n  \n  return (\n    &lt;div \n      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"\n      onClick={onClose}\n      role="dialog"\n      aria-modal="true"\n      aria-labelledby="modal-title"\n    &gt;\n      &lt;div \n        ref={modalRef}\n        className="bg-white p-6 rounded-lg max-w-md w-full mx-4"\n        onClick={(e) =&gt; e.stopPropagation()}\n      &gt;\n        &lt;div className="flex justify-between items-center mb-4"&gt;\n          &lt;h2 id="modal-title" className="text-xl font-semibold"&gt;\n            {title}\n          &lt;/h2&gt;\n          &lt;button\n            onClick={onClose}\n            className="text-gray-500 hover:text-gray-700 p-1"\n            aria-label="Cerrar modal"\n          &gt;\n            &lt;X size={20} /&gt;\n          &lt;/button&gt;\n        &lt;/div&gt;\n        {children}\n      &lt;/div&gt;\n    &lt;/div&gt;\n  );\n}</code></pre></div>',
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// tests/accessibility.spec.ts - Tests de accesibilidad automatizados\nimport { test, expect } from "@playwright/test";\nimport AxeBuilder from "@axe-core/playwright";\n\ntest.describe("Accessibility Tests", () =&gt; {\n  test("homepage should not have accessibility violations", async ({ page }) =&gt; {\n    await page.goto("/");\n    \n    const accessibilityScanResults = await new AxeBuilder({ page })\n      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])\n      .analyze();\n    \n    expect(accessibilityScanResults.violations).toEqual([]);\n  });\n  \n  test("keyboard navigation works", async ({ page }) =&gt; {\n    await page.goto("/");\n    \n    // Test tab navigation\n    await page.keyboard.press("Tab");\n    const firstFocusable = await page.evaluate(() =&gt; document.activeElement?.tagName);\n    expect(firstFocusable).toBeTruthy();\n    \n    // Test skip links\n    await page.keyboard.press("Tab");\n    const skipLink = page.locator("a").first();\n    await expect(skipLink).toBeVisible();\n    \n    if (await skipLink.textContent() === "Skip to main content") {\n      await skipLink.click();\n      const mainContent = await page.evaluate(() =&gt; document.activeElement?.id);\n      expect(mainContent).toBe("main-content");\n    }\n  });\n  \n  test("forms have proper labels", async ({ page }) =&gt; {\n    await page.goto("/login");\n    \n    const emailInput = page.locator(\'input[type="email"]\');\n    const emailLabel = page.locator(\'label[for="email"]\');\n    \n    await expect(emailInput).toHaveAttribute("id", "email");\n    await expect(emailLabel).toBeVisible();\n    \n    // Test that clicking label focuses input\n    await emailLabel.click();\n    await expect(emailInput).toBeFocused();\n  });\n  \n  test("images have alt text", async ({ page }) =&gt; {\n    await page.goto("/products");\n    \n    const images = page.locator("img");\n    const count = await images.count();\n    \n    for (let i = 0; i &lt; count; i++) {\n      const img = images.nth(i);\n      const alt = await img.getAttribute("alt");\n      expect(alt).toBeTruthy();\n      expect(alt?.trim().length).toBeGreaterThan(0);\n    }\n  });\n  \n  test("color contrast meets WCAG standards", async ({ page }) =&gt; {\n    await page.goto("/");\n    \n    const contrastResults = await new AxeBuilder({ page })\n      .withTags(["color-contrast"])\n      .analyze();\n      \n    expect(contrastResults.violations).toEqual([]);\n  });\n});</code></pre></div>',
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// components/ui/AccessibleForm.tsx - Formulario accesible\ninterface FormFieldProps {\n  id: string;\n  label: string;\n  type?: string;\n  required?: boolean;\n  error?: string;\n  helpText?: string;\n  value: string;\n  onChange: (value: string) =&gt; void;\n}\n\nfunction FormField({ \n  id, \n  label, \n  type = "text", \n  required, \n  error, \n  helpText, \n  value, \n  onChange \n}: FormFieldProps) {\n  const helpId = `${id}-help`;\n  const errorId = `${id}-error`;\n  \n  return (\n    &lt;div className="mb-4"&gt;\n      &lt;label \n        htmlFor={id}\n        className="block text-sm font-medium text-gray-700 mb-1"\n      &gt;\n        {label}\n        {required && &lt;span className="text-red-500 ml-1" aria-label="requerido"&gt;*&lt;/span&gt;}\n      &lt;/label&gt;\n      \n      &lt;input\n        id={id}\n        type={type}\n        value={value}\n        onChange={(e) =&gt; onChange(e.target.value)}\n        required={required}\n        aria-invalid={!!error}\n        aria-describedby={\n          [helpText && helpId, error && errorId].filter(Boolean).join(" ") || undefined\n        }\n        className={\n          `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${\n            error ? "border-red-500" : "border-gray-300"\n          }`\n        }\n      /&gt;\n      \n      {helpText && (\n        &lt;p id={helpId} className="text-sm text-gray-600 mt-1"&gt;\n          {helpText}\n        &lt;/p&gt;\n      )}\n      \n      {error && (\n        &lt;p id={errorId} className="text-sm text-red-600 mt-1" role="alert"&gt;\n          {error}\n        &lt;/p&gt;\n      )}\n    &lt;/div&gt;\n  );\n}</code></pre></div>',
            ],
          },
          {
            title: "7.3 Ejercicio Práctico: Implementación Completa",
            content: [
              "<p><strong>Objetivo:</strong> Implementar un componente UI con Tailwind y React, configurarlo en Storybook, ejecutar un test visual y uno de accesibilidad, corregir los problemas detectados y volver a testear.</p>",
              "<p><em>Como un ejercicio completo de TDD, pero para UI: escribes el componente, lo testeas visualmente y para accesibilidad, corriges problemas y vuelves a testear.</em></p>",
              "<p><strong>Flujo del ejercicio:</strong></p>",
              "<ol class='list-decimal pl-6 space-y-2'>",
              "<li><strong>Crear componente:</strong> ProductCard con todas las variantes</li>",
              "<li><strong>Configurar Storybook:</strong> Stories para diferentes estados</li>",
              "<li><strong>Tests visuales:</strong> Screenshots de baseline</li>",
              "<li><strong>Tests de accesibilidad:</strong> Validación WCAG</li>",
              "<li><strong>Corrección de issues:</strong> Resolver problemas encontrados</li>",
              "<li><strong>Re-testing:</strong> Validar que todo funciona correctamente</li>",
              "</ol>",
              "<p><strong>Herramientas del workflow:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li><strong>Storybook:</strong> Desarrollo y documentación de componentes</li>",
              "<li><strong>Chromatic:</strong> Testing visual automatizado</li>",
              "<li><strong>axe-core:</strong> Testing de accesibilidad</li>",
              "<li><strong>Playwright:</strong> Testing end-to-end con capturas</li>",
              "</ul>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-bash"># Setup del proyecto con testing\nnpm install --save-dev @storybook/react @storybook/addon-essentials\nnpm install --save-dev @axe-core/playwright @playwright/test\nnpm install --save-dev chromatic\n\n# Inicializar Storybook\nnpx storybook@latest init\n\n# Configurar Playwright\nnpx playwright install\n\n# Scripts en package.json\n{\n  "scripts": {\n    "storybook": "storybook dev -p 6006",\n    "build-storybook": "storybook build",\n    "test:visual": "playwright test tests/visual",\n    "test:a11y": "playwright test tests/accessibility", \n    "test:ui": "npm run test:visual && npm run test:a11y",\n    "chromatic": "chromatic --exit-zero-on-changes"\n  }\n}</code></pre></div>',
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// Ejercicio: ProductCard completo y accesible\ninterface ProductCardProps {\n  product: {\n    id: number;\n    name: string;\n    price: number;\n    originalPrice?: number;\n    image: string;\n    rating: number;\n    reviewCount: number;\n    isOnSale?: boolean;\n    isOutOfStock?: boolean;\n  };\n  onAddToCart: (productId: number) =&gt; void;\n  onViewDetails: (productId: number) =&gt; void;\n}\n\nexport function ProductCard({ product, onAddToCart, onViewDetails }: ProductCardProps) {\n  const { name, price, originalPrice, image, rating, reviewCount, isOnSale, isOutOfStock } = product;\n  \n  return (\n    &lt;article \n      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"\n      aria-labelledby={`product-${product.id}-name`}\n    &gt;\n      {/* Imagen del producto */}\n      &lt;div className="relative aspect-square bg-gray-100"&gt;\n        &lt;img\n          src={image}\n          alt={`${name} - Imagen del producto`}\n          className="w-full h-full object-cover"\n          loading="lazy"\n        /&gt;\n        \n        {/* Badges */}\n        {isOnSale && (\n          &lt;span \n            className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium"\n            aria-label="En oferta"\n          &gt;\n            Oferta\n          &lt;/span&gt;\n        )}\n        \n        {isOutOfStock && (\n          &lt;div \n            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"\n            aria-label="Sin stock"\n          &gt;\n            &lt;span className="text-white font-medium"&gt;Sin Stock&lt;/span&gt;\n          &lt;/div&gt;\n        )}\n      &lt;/div&gt;\n      \n      {/* Contenido */}\n      &lt;div className="p-4"&gt;\n        &lt;h3 \n          id={`product-${product.id}-name`}\n          className="font-semibold text-lg mb-2 text-gray-900 line-clamp-2"\n        &gt;\n          {name}\n        &lt;/h3&gt;\n        \n        {/* Rating */}\n        &lt;div className="flex items-center mb-2" role="img" aria-label={`${rating} de 5 estrellas, ${reviewCount} reseñas`}&gt;\n          &lt;div className="flex text-yellow-400"&gt;\n            {[...Array(5)].map((_, i) =&gt; (\n              &lt;Star\n                key={i}\n                className={`w-4 h-4 ${\n                  i &lt; Math.floor(rating) ? "fill-current" : "fill-gray-300"\n                }`}\n                aria-hidden="true"\n              /&gt;\n            ))}\n          &lt;/div&gt;\n          &lt;span className="ml-2 text-sm text-gray-600"&gt;\n            ({reviewCount})\n          &lt;/span&gt;\n        &lt;/div&gt;\n        \n        {/* Precio */}\n        &lt;div className="mb-4"&gt;\n          &lt;span className="text-xl font-bold text-green-600"&gt;\n            ${price.toFixed(2)}\n          &lt;/span&gt;\n          {originalPrice && originalPrice &gt; price && (\n            &lt;span className="ml-2 text-sm text-gray-500 line-through"&gt;\n              ${originalPrice.toFixed(2)}\n            &lt;/span&gt;\n          )}\n        &lt;/div&gt;\n        \n        {/* Botones */}\n        &lt;div className="flex gap-2"&gt;\n          &lt;button\n            onClick={() =&gt; onAddToCart(product.id)}\n            disabled={isOutOfStock}\n            className={\n              `flex-1 py-2 px-4 rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${\n                isOutOfStock\n                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"\n                  : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"\n              }`\n            }\n            aria-describedby={isOutOfStock ? `product-${product.id}-stock-status` : undefined}\n          &gt;\n            {isOutOfStock ? "Sin Stock" : "Agregar al Carrito"}\n          &lt;/button&gt;\n          \n          &lt;button\n            onClick={() =&gt; onViewDetails(product.id)}\n            className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"\n            aria-label={`Ver detalles de ${name}`}\n          &gt;\n            Ver Detalles\n          &lt;/button&gt;\n        &lt;/div&gt;\n        \n        {/* Mensaje de estado oculto para lectores de pantalla */}\n        {isOutOfStock && (\n          &lt;p id={`product-${product.id}-stock-status`} className="sr-only"&gt;\n            Este producto está agotado y no se puede agregar al carrito\n          &lt;/p&gt;\n        )}\n      &lt;/div&gt;\n    &lt;/article&gt;\n  );\n}</code></pre></div>',
            ],
          },
        ],
      },
      {
        emoji: "⚙️",
        title: "Módulo 8: Workflows y Despliegue",
        shortTitle: "DevOps",
        objective: "Establecer workflows de desarrollo eficientes con CI/CD, monitoring y analytics.",
        completed: false,
        sections: [
          {
            title: "8.1 Setup de Desarrollo Local",
            content: [
              "<p><strong>Configuración de VS Code para React/TypeScript</strong></p>",
              "<p><em>Como configurar tu IDE para backend, pero optimizado para desarrollo frontend. VS Code es el estándar para React/TypeScript.</em></p>",
              "<p><strong>Extensions esenciales:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li><strong>ES7+ React/Redux/React-Native snippets:</strong> Snippets para componentes</li>",
              "<li><strong>TypeScript Importer:</strong> Auto-import de tipos y funciones</li>",
              "<li><strong>Tailwind CSS IntelliSense:</strong> Autocompletado de clases CSS</li>",
              "<li><strong>Auto Rename Tag:</strong> Renombra tags HTML automáticamente</li>",
              "<li><strong>Bracket Pair Colorizer:</strong> Colores para brackets anidados</li>",
              "<li><strong>GitLens:</strong> Git integrado mejorado</li>",
              "</ul>",
              "<p><strong>Configuración de ESLint y Prettier:</strong> Para código consistente</p>",
              "<p><em>Como usar un linter en backend (ej: ESLint para Node.js), pero adaptado para React y TypeScript. Prettier formatea automáticamente.</em></p>",
              "<p><strong>Hot reload y desarrollo eficiente:</strong></p>",
              "<p><em>Como nodemon en backend, pero para frontend. Los cambios se reflejan instantáneamente sin perder estado.</em></p>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-json">// .vscode/settings.json - Configuración de VS Code\n{\n  "editor.formatOnSave": true,\n  "editor.defaultFormatter": "esbenp.prettier-vscode",\n  "editor.codeActionsOnSave": {\n    "source.fixAll.eslint": "explicit",\n    "source.organizeImports": "explicit"\n  },\n  "typescript.preferences.importModuleSpecifier": "relative",\n  "emmet.includeLanguages": {\n    "typescript": "html",\n    "typescriptreact": "html"\n  },\n  "tailwindCSS.includeLanguages": {\n    "typescript": "html",\n    "typescriptreact": "html"\n  },\n  "files.associations": {\n    "*.css": "tailwindcss"\n  }\n}</code></pre></div>',
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-javascript">// eslint.config.mjs - Configuración de ESLint\nimport js from "@eslint/js";\nimport globals from "globals";\nimport reactHooks from "eslint-plugin-react-hooks";\nimport reactRefresh from "eslint-plugin-react-refresh";\nimport tseslint from "typescript-eslint";\n\nexport default tseslint.config(\n  { ignores: ["dist"] },\n  {\n    extends: [js.configs.recommended, ...tseslint.configs.recommended],\n    files: ["**/*.{ts,tsx}"],\n    languageOptions: {\n      ecmaVersion: 2020,\n      globals: globals.browser,\n    },\n    plugins: {\n      "react-hooks": reactHooks,\n      "react-refresh": reactRefresh,\n    },\n    rules: {\n      ...reactHooks.configs.recommended.rules,\n      "react-refresh/only-export-components": [\n        "warn",\n        { allowConstantExport: true },\n      ],\n      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],\n      "@typescript-eslint/explicit-function-return-type": "off",\n      "@typescript-eslint/explicit-module-boundary-types": "off",\n      "@typescript-eslint/no-explicit-any": "warn",\n    },\n  },\n);\n\n// prettier.config.mjs - Configuración de Prettier\nexport default {\n  semi: true,\n  singleQuote: false,\n  tabWidth: 2,\n  trailingComma: "es5",\n  printWidth: 100,\n  plugins: ["prettier-plugin-tailwindcss"],\n};</code></pre></div>',
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-json">// package.json - Scripts de desarrollo\n{\n  "scripts": {\n    "dev": "next dev",\n    "build": "next build", \n    "start": "next start",\n    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",\n    "lint:fix": "eslint . --ext ts,tsx --fix",\n    "type-check": "tsc --noEmit",\n    "format": "prettier --write \\"src/**/*.{ts,tsx,js,jsx,json,css,md}\\"",\n    "format:check": "prettier --check \\"src/**/*.{ts,tsx,js,jsx,json,css,md}\\"",\n    "test": "vitest",\n    "test:ui": "vitest --ui",\n    "test:coverage": "vitest --coverage"\n  },\n  "husky": {\n    "hooks": {\n      "pre-commit": "lint-staged"\n    }\n  },\n  "lint-staged": {\n    "*.{ts,tsx}": [\n      "eslint --fix",\n      "prettier --write"\n    ],\n    "*.{json,css,md}": [\n      "prettier --write"\n    ]\n  }\n}</code></pre></div>',
            ],
          },
          {
            title: "8.2 CI/CD Pipeline",
            content: [
              "<p><strong>GitHub Actions básico:</strong> Automatización de testing y despliegue</p>",
              "<p><em>Como CI/CD en backend con Jenkins o GitHub Actions, pero para aplicaciones frontend. Automático en cada push.</em></p>",
              "<p><strong>Pipeline típico:</strong> Lint → Type Check → Test → Build → Deploy</p>",
              "<p><em>Como tu pipeline de backend: validaciones → tests → build → deploy, pero adaptado para Next.js y frontend.</em></p>",
              "<p><strong>Preview deployments:</strong> Revisión de cambios antes de mergear</p>",
              "<p><em>Como tener un ambiente de staging automático para cada PR. Muy útil para revisar cambios visuales.</em></p>",
              "<p><strong>Despliegue automático a Vercel:</strong></p>",
              "<p><em>Vercel se conecta a tu repo y deploya automáticamente. Como Heroku para backend, pero optimizado para frontend.</em></p>",
              "<p><strong>Ventajas del CI/CD en frontend:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li>✅ Deployment automático en cada merge a main</li>",
              "<li>✅ Preview URLs para cada Pull Request</li>",
              "<li>✅ Tests automáticos antes del deploy</li>",
              "<li>✅ Rollback fácil si algo sale mal</li>",
              "<li>✅ Optimizaciones automáticas (minify, tree-shaking)</li>",
              "</ul>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-yaml"># .github/workflows/ci.yml - GitHub Actions CI/CD\nname: CI/CD Pipeline\n\non:\n  push:\n    branches: [ main, develop ]\n  pull_request:\n    branches: [ main ]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    \n    strategy:\n      matrix:\n        node-version: [18.x, 20.x]\n        \n    steps:\n    - name: Checkout code\n      uses: actions/checkout@v4\n      \n    - name: Setup Node.js\n      uses: actions/setup-node@v4\n      with:\n        node-version: ${{ matrix.node-version }}\n        cache: "npm"\n        \n    - name: Install dependencies\n      run: npm ci\n      \n    - name: Run ESLint\n      run: npm run lint\n      \n    - name: Check TypeScript\n      run: npm run type-check\n      \n    - name: Check Prettier formatting\n      run: npm run format:check\n      \n    - name: Run tests\n      run: npm run test:coverage\n      \n    - name: Upload coverage to Codecov\n      uses: codecov/codecov-action@v3\n      with:\n        token: ${{ secrets.CODECOV_TOKEN }}\n        \n    - name: Build application\n      run: npm run build\n      env:\n        NEXT_PUBLIC_API_URL: ${{ secrets.NEXT_PUBLIC_API_URL }}\n        \n    - name: Run E2E tests\n      run: npm run test:e2e\n      \n  deploy:\n    needs: test\n    runs-on: ubuntu-latest\n    if: github.ref == \'refs/heads/main\' && github.event_name == \'push\'\n    \n    steps:\n    - name: Deploy to Vercel\n      uses: amondnet/vercel-action@v20\n      with:\n        vercel-token: ${{ secrets.VERCEL_TOKEN }}\n        vercel-org-id: ${{ secrets.ORG_ID }}\n        vercel-project-id: ${{ secrets.PROJECT_ID }}\n        vercel-args: "--prod"</code></pre></div>',
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-yaml"># .github/workflows/preview.yml - Preview Deployments\nname: Preview Deployment\n\non:\n  pull_request:\n    branches: [ main ]\n\njobs:\n  preview:\n    runs-on: ubuntu-latest\n    \n    steps:\n    - name: Checkout\n      uses: actions/checkout@v4\n      \n    - name: Setup Node.js\n      uses: actions/setup-node@v4\n      with:\n        node-version: "20.x"\n        cache: "npm"\n        \n    - name: Install dependencies\n      run: npm ci\n      \n    - name: Build for preview\n      run: npm run build\n      env:\n        NEXT_PUBLIC_API_URL: ${{ secrets.STAGING_API_URL }}\n        \n    - name: Deploy preview to Vercel\n      uses: amondnet/vercel-action@v20\n      id: vercel-deployment\n      with:\n        vercel-token: ${{ secrets.VERCEL_TOKEN }}\n        vercel-org-id: ${{ secrets.ORG_ID }}\n        vercel-project-id: ${{ secrets.PROJECT_ID }}\n        github-comment: true\n        \n    - name: Run Lighthouse CI\n      uses: treosh/lighthouse-ci-action@v9\n      with:\n        urls: |\n          ${{ steps.vercel-deployment.outputs.preview-url }}\n        uploadDir: "./lighthouse-reports"\n        temporaryPublicStorage: true</code></pre></div>',
            ],
          },
          {
            title: "8.3 Monitoring y Analytics",
            content: [
              "<p><strong>Sentry para error tracking:</strong></p>",
              "<p><em>Como logs centralizados en backend (ej: Winston + ELK), pero para errores de frontend. Captura errores JavaScript y los reporta.</em></p>",
              "<p><strong>Google Analytics 4 básico:</strong></p>",
              "<p><em>Como métricas de uso de tu API, pero para comportamiento de usuarios en tu frontend. Páginas vistas, clics, conversiones.</em></p>",
              "<p><strong>Performance monitoring con Web Vitals:</strong></p>",
              "<p><em>Como monitorear performance de tu API (tiempo de respuesta, throughput), pero para frontend (tiempo de carga, interactividad).</em></p>",
              "<p><strong>Métricas importantes para frontend:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li><strong>Core Web Vitals:</strong> LCP, FID, CLS (Google ranking factors)</li>",
              "<li><strong>Error Rate:</strong> Porcentaje de errores JavaScript</li>",
              "<li><strong>Performance:</strong> Tiempo de carga de páginas</li>",
              "<li><strong>User Behavior:</strong> Flujos de navegación, conversiones</li>",
              "</ul>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// lib/sentry.ts - Configuración de Sentry\nimport * as Sentry from "@sentry/nextjs";\n\nSentry.init({\n  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,\n  integrations: [\n    new Sentry.BrowserTracing({\n      // Set sampling rate for performance monitoring\n      tracePropagationTargets: ["localhost", /^https:\\/\\/api\\.myapp\\.com/],\n    }),\n    new Sentry.Replay({\n      // Capture 10% of all sessions,\n      // plus 100% of sessions with an error\n      sessionSampleRate: 0.1,\n      errorSampleRate: 1.0,\n    }),\n  ],\n  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1.0,\n  debug: process.env.NODE_ENV === "development",\n  replaysOnErrorSampleRate: 1.0,\n  \n  beforeSend(event, hint) {\n    // Filter out known issues\n    if (event.exception) {\n      const error = hint.originalException;\n      if (error && error.message && error.message.includes("Non-Error promise rejection")) {\n        return null;\n      }\n    }\n    return event;\n  },\n});\n\n// Custom error logging\nexport function logError(error: Error, context?: Record&lt;string, any&gt;) {\n  console.error("Error:", error);\n  \n  Sentry.withScope((scope) =&gt; {\n    if (context) {\n      Object.keys(context).forEach(key =&gt; {\n        scope.setContext(key, context[key]);\n      });\n    }\n    Sentry.captureException(error);\n  });\n}\n\n// Performance monitoring\nexport function trackPerformance(name: string, fn: () =&gt; Promise&lt;any&gt;) {\n  const transaction = Sentry.startTransaction({\n    name,\n    op: "function",\n  });\n  \n  return fn().finally(() =&gt; {\n    transaction.finish();\n  });\n}</code></pre></div>',
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// lib/analytics.ts - Google Analytics 4\nimport { GoogleAnalytics } from "nextjs-google-analytics";\n\n// Configuración GA4\nexport const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;\n\n// Tipos de eventos\ntype GtagEventAction = "login" | "sign_up" | "purchase" | "add_to_cart" | "custom";\n\ntype GtagEventParams = {\n  action: GtagEventAction;\n  category?: string;\n  label?: string;\n  value?: number;\n  [key: string]: any;\n};\n\n// Track page views\nexport function trackPageView(url: string, title: string) {\n  if (typeof window !== "undefined" && window.gtag) {\n    window.gtag("config", GA_TRACKING_ID, {\n      page_title: title,\n      page_location: url,\n    });\n  }\n}\n\n// Track custom events\nexport function trackEvent({ action, category, label, value, ...params }: GtagEventParams) {\n  if (typeof window !== "undefined" && window.gtag) {\n    window.gtag("event", action, {\n      event_category: category,\n      event_label: label,\n      value: value,\n      ...params,\n    });\n  }\n}\n\n// E-commerce tracking\nexport function trackPurchase(transactionId: string, items: any[], total: number) {\n  trackEvent({\n    action: "purchase",\n    transaction_id: transactionId,\n    value: total,\n    currency: "USD",\n    items: items.map(item =&gt; ({\n      item_id: item.id,\n      item_name: item.name,\n      category: item.category,\n      quantity: item.quantity,\n      price: item.price,\n    })),\n  });\n}\n\n// Hook para tracking automático\nexport function useAnalytics() {\n  const trackButtonClick = useCallback((buttonName: string, location: string) =&gt; {\n    trackEvent({\n      action: "custom",\n      category: "UI",\n      label: `Button: ${buttonName}`,\n      location,\n    });\n  }, []);\n  \n  const trackFormSubmission = useCallback((formName: string, success: boolean) =&gt; {\n    trackEvent({\n      action: "custom",\n      category: "Form",\n      label: `Form: ${formName}`,\n      success,\n    });\n  }, []);\n  \n  return {\n    trackButtonClick,\n    trackFormSubmission,\n    trackPageView,\n    trackPurchase,\n  };\n}</code></pre></div>',
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code class="language-typescript">// lib/performance.ts - Web Vitals monitoring\nimport { getCLS, getFCP, getFID, getLCP, getTTFB } from "web-vitals";\n\n// Send metrics to analytics\nfunction sendToAnalytics(metric: any) {\n  // Send to Google Analytics\n  if (typeof window !== "undefined" && window.gtag) {\n    window.gtag("event", metric.name, {\n      event_category: "Web Vitals",\n      event_label: metric.id,\n      value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),\n      non_interaction: true,\n    });\n  }\n  \n  // Send to custom analytics endpoint\n  fetch("/api/analytics/web-vitals", {\n    method: "POST",\n    headers: { "Content-Type": "application/json" },\n    body: JSON.stringify({\n      name: metric.name,\n      value: metric.value,\n      id: metric.id,\n      url: window.location.href,\n      timestamp: Date.now(),\n    }),\n  }).catch(console.error);\n}\n\n// Initialize Web Vitals tracking\nexport function initWebVitals() {\n  getCLS(sendToAnalytics);\n  getFCP(sendToAnalytics);\n  getFID(sendToAnalytics);\n  getLCP(sendToAnalytics);\n  getTTFB(sendToAnalytics);\n}\n\n// Custom performance hook\nexport function usePerformanceMonitoring() {\n  const measureOperation = useCallback(async &lt;T&gt;(\n    operationName: string,\n    operation: () =&gt; Promise&lt;T&gt;\n  ): Promise&lt;T&gt; =&gt; {\n    const startTime = performance.now();\n    \n    try {\n      const result = await operation();\n      const duration = performance.now() - startTime;\n      \n      // Log performance metric\n      console.log(`${operationName} took ${duration.toFixed(2)}ms`);\n      \n      // Send to analytics if duration is significant\n      if (duration &gt; 100) {\n        trackEvent({\n          action: "custom",\n          category: "Performance",\n          label: operationName,\n          value: Math.round(duration),\n        });\n      }\n      \n      return result;\n    } catch (error) {\n      const duration = performance.now() - startTime;\n      logError(error as Error, {\n        operation: operationName,\n        duration: duration,\n      });\n      throw error;\n    }\n  }, []);\n  \n  return { measureOperation };\n}</code></pre></div>',
            ],
          },
        ],
      },
      {
        emoji: "🤖",
        title: "Módulo 9: IA-Driven Frontend Development",
        shortTitle: "IA-Driven",
        objective:
          "Dominar el desarrollo frontend potenciado por IA: desde diseño hasta testing automático y deployment inteligente.",
        completed: false,
        sections: [
          {
            title: "9.1 Introducción al IA-Driven Frontend Development",
            content: [
              "<p><strong>🎯 El Nuevo Paradigma del Desarrollo Frontend</strong></p>",
              "<p><em>Como desarrollador backend, ya conoces la eficiencia de las herramientas. Ahora aplicaremos IA para acelerar 10x el desarrollo frontend manteniendo calidad profesional.</em></p>",
              "<p><strong>¿Qué es IA-Driven Development?</strong></p>",
              "<p><em>Es integrar herramientas de IA en cada fase del desarrollo: desde ideación hasta deployment. Como tener un senior developer que te asiste 24/7.</em></p>",
              "<p><strong>Herramientas del Stack IA-Frontend 2025:</strong></p>",
              "<ul class='list-disc pl-6 space-y-2'>",
              "<li><strong>🎨 v0.dev:</strong> Generación de interfaces desde prompts naturales</li>",
              "<li><em>Convierte 'Necesito un e-commerce moderno' en código React completo en minutos.</em></li>",
              "<li><strong>💻 GitHub Copilot:</strong> Par programming inteligente</li>",
              "<li><em>Como pair programming con un experto React/TypeScript que sugiere código en tiempo real.</em></li>",
              "<li><strong>🧪 AI Visual Testing:</strong> Testing automático de UI</li>",
              "<li><em>Detecta cambios visuales, problemas de accesibilidad y regresiones automáticamente.</em></li>",
              "<li><strong>🖼️ AI Assets:</strong> Generación de imágenes, iconos y content</li>",
              "<li><em>Crea assets optimizados sin depender de diseñadores para prototipos.</em></li>",
              "<li><strong>📊 AI Analytics:</strong> Insights automáticos de performance</li>",
              "<li><em>Análisis inteligente de Core Web Vitals y recomendaciones de optimización.</em></li>",
              "</ul>",
              "<p><strong>Beneficios Medibles:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li>⚡ <strong>10x más rápido:</strong> De idea a MVP funcional en días, no semanas</li>",
              "<li>🎯 <strong>95%+ calidad:</strong> Testing y validaciones automáticas</li>",
              "<li>♿ <strong>100% accesible:</strong> Cumplimiento WCAG automático</li>",
              "<li>🚀 <strong>Performance óptimo:</strong> Optimizaciones automáticas</li>",
              "<li>📚 <strong>Documentación completa:</strong> Generada automáticamente</li>",
              "</ul>",
              "<p><strong>Mindset Shift Necesario:</strong></p>",
              "<p><em>De 'escribir todo el código' a 'dirigir y validar la IA'. Como pasar de SQL manual a ORM inteligente.</em></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li>✅ <strong>Prompt Engineering:</strong> Saber pedir lo que necesitas</li>",
              "<li>✅ <strong>Validación Crítica:</strong> Revisar y refinar el output de IA</li>",
              "<li>✅ <strong>Iteración Rápida:</strong> Prototipar → Validar → Mejorar</li>",
              "<li>✅ <strong>Quality Gates:</strong> Automatizar revisiones de calidad</li>",
              "</ul>",
              '<div class="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">',
              '<p class="text-blue-800"><strong>💡 Paradigma IA-First:</strong></p>',
              "<p class=\"text-blue-700\">En lugar de 'Cómo codifico esto?' pregúntate 'Cómo le pido a la IA que me ayude a construir esto de forma óptima?'</p>",
              "</div>",
            ],
          },
          {
            title: "9.2 v0.dev: Diseño y Wireframing con IA",
            content: [
              "<p><strong>🎨 v0.dev: De Idea a Interfaz en Minutos</strong></p>",
              "<p><em>Como generar APIs con código, pero para interfaces. v0.dev convierte descripciones naturales en componentes React funcionales.</em></p>",
              "<p><strong>¿Qué es v0.dev?</strong></p>",
              "<p><em>Herramienta de Vercel que genera interfaces React con Tailwind CSS desde prompts en lenguaje natural. Es como tener un frontend developer senior trabajando para ti.</em></p>",
              "<p><strong>Casos de Uso Ideales:</strong></p>",
              "<ul class='list-disc pl-6 space-y-2'>",
              "<li><strong>🚀 Prototipado Rápido:</strong> De idea a wireframe funcional en minutos</li>",
              "<li><strong>🎯 MVP Development:</strong> Interfaces completas para validar conceptos</li>",
              "<li><strong>🔄 Iteración de Diseño:</strong> Probar variantes visuales rápidamente</li>",
              "<li><strong>📚 Aprendizaje:</strong> Ver cómo se implementan patrones UI complejos</li>",
              "</ul>",
              "<p><strong>Anatomía de un Prompt Efectivo:</strong></p>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code># Template de Prompt para v0.dev\n\n## Contexto\n[Tipo de aplicación y audiencia]\n\n## Componente Específico\n[Qué componente necesitas]\n\n## Funcionalidades\n- [Lista específica de características]\n- [Estados y interacciones]\n- [Casos edge]\n\n## Estilo y UX\n- [Paleta de colores]\n- [Tipografía y espaciado]\n- [Responsive behavior]\n- [Animaciones sutiles]\n\n## Especificaciones Técnicas\n- [Props esperadas]\n- [Accesibilidad requerida]\n- [Performance considerations]</code></pre></div>',
              "<p><strong>Ejemplo: E-commerce Product Card</strong></p>",
              '<div class="bg-green-50 border border-green-200 rounded-lg p-4 my-4">',
              '<p class="font-medium text-green-800">Prompt Ejemplo:</p>',
              '<p class="text-green-700 mt-2">"Crea una ProductCard para e-commerce moderno con imagen del producto, nombre, precio original y con descuento, rating con estrellas, botón de agregar al carrito con loading state, botón de favoritos, badge de descuento si aplica. Diseño limpio con hover effects sutiles, responsive para mobile. Usar Tailwind CSS y ser accesible WCAG 2.1."</p>',
              "</div>",
              "<p><strong>Flujo de Trabajo Optimizado:</strong></p>",
              "<ol class='list-decimal pl-6 space-y-2'>",
              "<li><strong>Ideación:</strong> Definir funcionalidad y UX requirements</li>",
              "<li><strong>Prompt Engineering:</strong> Crear prompt específico y completo</li>",
              "<li><strong>Generación:</strong> Obtener código base de v0.dev</li>",
              "<li><strong>Refinamiento:</strong> Iterar con prompts de mejora</li>",
              "<li><strong>Integración:</strong> Adaptar código a tu proyecto</li>",
              "<li><strong>Testing:</strong> Validar funcionalidad y accesibilidad</li>",
              "</ol>",
              "<p><strong>Mejores Prácticas v0.dev:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li>✅ <strong>Sé específico:</strong> Detalles claros sobre funcionalidad y estilo</li>",
              "<li>✅ <strong>Incluye contexto:</strong> Tipo de app, audiencia, casos de uso</li>",
              "<li>✅ <strong>Menciona accesibilidad:</strong> Siempre incluir requisitos WCAG</li>",
              "<li>✅ <strong>Especifica responsive:</strong> Comportamiento en mobile/desktop</li>",
              "<li>✅ <strong>Itera gradualmente:</strong> Mejoras paso a paso, no todo junto</li>",
              "</ul>",
              "<p><strong>Limitaciones y Consideraciones:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li>⚠️ <strong>Código base inicial:</strong> Siempre revisar y refactorizar</li>",
              "<li>⚠️ <strong>Lógica compleja:</strong> Mejor para UI, no para business logic</li>",
              "<li>⚠️ <strong>Consistency:</strong> Adaptar al design system existente</li>",
              "<li>⚠️ <strong>Performance:</strong> Optimizar el código generado</li>",
              "</ul>",
            ],
          },
          {
            title: "9.3 GitHub Copilot: Generación de Código Inteligente",
            content: [
              "<p><strong>💻 GitHub Copilot: Tu Pair Programming IA</strong></p>",
              "<p><em>Como IntelliSense pero exponencialmente más inteligente. Copilot entiende contexto, patrones y mejores prácticas para generar código React/TypeScript de calidad.</em></p>",
              "<p><strong>Configuración Óptima para Frontend:</strong></p>",
              "<ul class='list-disc pl-6 space-y-2'>",
              "<li><strong>🔧 VS Code Extensions:</strong> GitHub Copilot + Copilot Chat</li>",
              "<li><strong>⚙️ Settings:</strong> Configurar para React/TypeScript/Tailwind</li>",
              "<li><strong>🎯 Context Awareness:</strong> Aprovechar archivos abiertos para contexto</li>",
              "<li><strong>💬 Copilot Chat:</strong> Para refactoring y debugging asistido</li>",
              "</ul>",
              "<p><strong>Estrategias de Prompting para Frontend:</strong></p>",
              "<div class=\"bg-gray-900 rounded p-4 my-4\"><pre><code>// 1. Comentarios descriptivos antes del código\n// Create a responsive product card component with:\n// - Image with lazy loading\n// - Product name, price, and rating\n// - Add to cart button with loading state\n// - Accessible markup following WCAG 2.1\n// - Hover animations using Tailwind CSS\n\nfunction ProductCard({ product, onAddToCart, isLoading }) {\n  // Copilot generará el componente completo\n}\n\n// 2. Usar TypeScript interfaces para contexto\ninterface User {\n  id: string;\n  name: string;\n  email: string;\n  role: 'admin' | 'user';\n}\n\n// Crear hook para gestión de usuarios con CRUD operations\nfunction useUsers() {\n  // Copilot infiere el patrón y genera el hook completo\n}</code></pre></div>",
              "<p><strong>Patrones de Código que Copilot Domina:</strong></p>",
              "<ul class='list-disc pl-6 space-y-2'>",
              "<li><strong>🎣 Custom Hooks:</strong> useLocalStorage, useApi, useDebounce</li>",
              "<li><strong>📝 Form Handling:</strong> react-hook-form + zod validation</li>",
              "<li><strong>🎨 Component Variants:</strong> Button, Card, Modal con props tipadas</li>",
              "<li><strong>🔄 State Management:</strong> Zustand stores y Context providers</li>",
              "<li><strong>🌐 API Integration:</strong> Fetch wrappers y error handling</li>",
              "<li><strong>🧪 Testing:</strong> Unit tests con Testing Library</li>",
              "</ul>",
              "<p><strong>Copilot Chat: Casos de Uso Avanzados</strong></p>",
              '<div class="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">',
              '<p class="font-medium text-blue-800">Prompts Efectivos para Copilot Chat:</p>',
              '<ul class="text-blue-700 mt-2 space-y-1">',
              '<li>• "Refactoriza este componente para usar React.memo y useCallback"</li>',
              '<li>• "Agrega validación con Zod a este formulario"</li>',
              '<li>• "Convierte este CSS a clases de Tailwind manteniendo el diseño"</li>',
              '<li>• "Genera tests unitarios para este custom hook"</li>',
              '<li>• "Optimiza este componente para mejor performance"</li>',
              "</ul>",
              "</div>",
              "<p><strong>Workflow de Desarrollo con Copilot:</strong></p>",
              "<ol class='list-decimal pl-6 space-y-2'>",
              "<li><strong>📋 Definir Interface:</strong> TypeScript types primero</li>",
              "<li><strong>📝 Comentario Descriptivo:</strong> Explicar funcionalidad esperada</li>",
              "<li><strong>⚡ Generación:</strong> Dejar que Copilot genere código base</li>",
              "<li><strong>🔍 Revisión:</strong> Validar lógica y mejores prácticas</li>",
              "<li><strong>✨ Refinamiento:</strong> Usar Chat para mejoras específicas</li>",
              "<li><strong>🧪 Testing:</strong> Generar tests con Copilot</li>",
              "</ol>",
              "<p><strong>Mejores Prácticas:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li>✅ <strong>Context First:</strong> Proporcionar interfaces y types</li>",
              "<li>✅ <strong>Specific Comments:</strong> Comentarios detallados sobre funcionalidad</li>",
              "<li>✅ <strong>Incremental:</strong> Construir función por función</li>",
              "<li>✅ <strong>Review Always:</strong> Nunca aceptar código sin revisar</li>",
              "<li>✅ <strong>Test Generation:</strong> Usar para generar tests comprehensivos</li>",
              "</ul>",
              "<p><strong>Limitaciones y Cuidados:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li>⚠️ <strong>Security:</strong> Revisar manejo de datos sensibles</li>",
              "<li>⚠️ <strong>Performance:</strong> Validar optimizaciones propuestas</li>",
              "<li>⚠️ <strong>Accessibility:</strong> Verificar cumplimiento WCAG</li>",
              "<li>⚠️ <strong>Dependencies:</strong> Confirmar versiones y compatibilidad</li>",
              "</ul>",
            ],
          },
          {
            title: "9.4 AI Visual Testing y Quality Assurance",
            content: [
              "<p><strong>🧪 Testing Automático con IA: Calidad Sin Esfuerzo Manual</strong></p>",
              "<p><em>Como testing automatizado en backend, pero para UI. La IA detecta cambios visuales, problemas de accesibilidad y regresiones sin intervención manual.</em></p>",
              "<p><strong>Stack de AI Testing Moderno:</strong></p>",
              "<ul class='list-disc pl-6 space-y-2'>",
              "<li><strong>🎭 Playwright AI:</strong> Testing E2E con detección inteligente</li>",
              "<li><strong>📸 Chromatic:</strong> Visual regression testing automático</li>",
              "<li><strong>♿ axe-core AI:</strong> Auditoría de accesibilidad automatizada</li>",
              "<li><strong>⚡ Lighthouse CI:</strong> Performance testing continuo</li>",
              "<li><strong>🤖 AI Test Generation:</strong> Tests generados desde comportamiento de usuario</li>",
              "</ul>",
              "<p><strong>Configuración de Testing Pipeline IA:</strong></p>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code># package.json - Scripts de testing IA\n{\n  "scripts": {\n    "test:visual": "chromatic --exit-zero-on-changes",\n    "test:a11y": "axe-cli --playwright",\n    "test:e2e": "playwright test --ai-assisted",\n    "test:performance": "lighthouse-ci autorun",\n    "test:ai-full": "npm run test:visual && npm run test:a11y && npm run test:e2e",\n    "test:generate": "playwright codegen --ai-enhance"\n  }\n}</code></pre></div>',
              "<p><strong>AI Visual Testing: Chromatic + Storybook</strong></p>",
              "<ul class='list-disc pl-6 space-y-2'>",
              "<li><strong>📸 Baseline Automático:</strong> Screenshots de referencia inteligentes</li>",
              "<li><strong>🔍 Detección de Cambios:</strong> IA identifica cambios significativos vs. ruido</li>",
              "<li><strong>🎯 Smart Diffing:</strong> Ignora cambios menores, resalta problemas reales</li>",
              "<li><strong>📱 Cross-Browser:</strong> Testing automático en múltiples navegadores</li>",
              "<li><strong>🔄 CI Integration:</strong> Bloquea deploys con regresiones visuales</li>",
              "</ul>",
              "<p><strong>AI Accessibility Testing:</strong></p>",
              '<div class="bg-green-50 border border-green-200 rounded-lg p-4 my-4">',
              '<p class="font-medium text-green-800">Testing WCAG 2.1 AA Automatizado:</p>',
              '<ul class="text-green-700 mt-2 space-y-1">',
              "<li>• <strong>Contraste:</strong> Verificación automática de ratios de color</li>",
              "<li>• <strong>Keyboard Nav:</strong> Testing de navegación por teclado</li>",
              "<li>• <strong>Screen Readers:</strong> Validación de aria-labels y roles</li>",
              "<li>• <strong>Focus Management:</strong> Orden lógico de tab navigation</li>",
              "<li>• <strong>Form Labels:</strong> Asociación correcta de labels</li>",
              "</ul>",
              "</div>",
              "<p><strong>AI Test Generation: Del Comportamiento a Tests</strong></p>",
              "<div class=\"bg-gray-900 rounded p-4 my-4\"><pre><code>// Test generado automáticamente por IA\n// Basado en user journey: \"Comprar producto como usuario\"\n\ntest('complete purchase flow', async ({ page }) => {\n  // IA detectó este flujo del comportamiento real de usuarios\n  await page.goto('/products');\n  await page.getByRole('button', { name: /add to cart/i }).first().click();\n  await page.getByRole('link', { name: /cart/i }).click();\n  await page.getByRole('button', { name: /checkout/i }).click();\n  \n  // IA generó validaciones inteligentes\n  await expect(page.getByText(/order summary/i)).toBeVisible();\n  await expect(page.getByRole('button', { name: /place order/i })).toBeEnabled();\n});</code></pre></div>",
              "<p><strong>Performance Testing con IA:</strong></p>",
              "<ul class='list-disc pl-6 space-y-2'>",
              "<li><strong>📊 Core Web Vitals:</strong> Monitoreo automático de LCP, FID, CLS</li>",
              "<li><strong>🎯 AI Recommendations:</strong> Sugerencias específicas de optimización</li>",
              "<li><strong>📈 Trending Analysis:</strong> Detección de degradación de performance</li>",
              "<li><strong>⚡ Auto-Optimization:</strong> Aplicación automática de mejoras</li>",
              "</ul>",
              "<p><strong>Quality Gates Automatizados:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li>✅ <strong>Visual Regression:</strong> 0 cambios no intencionales</li>",
              "<li>✅ <strong>Accessibility Score:</strong> 95%+ WCAG 2.1 AA</li>",
              "<li>✅ <strong>Performance Budget:</strong> LCP < 2.5s, FID < 100ms</li>",
              "<li>✅ <strong>Cross-Browser:</strong> Funcional en Chrome, Firefox, Safari</li>",
              "<li>✅ <strong>Mobile Responsive:</strong> UX optimizada en dispositivos móviles</li>",
              "</ul>",
              "<p><strong>Workflow Completo de QA con IA:</strong></p>",
              "<ol class='list-decimal pl-6 space-y-2'>",
              "<li><strong>🚀 Pre-Commit:</strong> Tests unitarios y linting automático</li>",
              "<li><strong>📸 PR Review:</strong> Visual testing y accessibility check</li>",
              "<li><strong>🧪 Staging:</strong> E2E testing completo con IA</li>",
              "<li><strong>⚡ Performance:</strong> Lighthouse audit automático</li>",
              "<li><strong>🎯 Production:</strong> Monitoring continuo con alertas IA</li>",
              "</ol>",
            ],
          },
          {
            title: "9.5 AI Asset Generation y Optimización",
            content: [
              "<p><strong>🖼️ Generación Inteligente de Assets: Imágenes, Iconos y Content</strong></p>",
              "<p><em>Como tener un diseñador y content creator trabajando 24/7. IA genera y optimiza todos los assets visuales que necesitas para tu frontend.</em></p>",
              "<p><strong>Stack de AI Asset Generation:</strong></p>",
              "<ul class='list-disc pl-6 space-y-2'>",
              "<li><strong>🎨 Midjourney/DALL-E:</strong> Imágenes personalizadas de alta calidad</li>",
              "<li><strong>🔤 Iconify AI:</strong> Iconos vectoriales personalizados</li>",
              "<li><strong>📝 ChatGPT/Claude:</strong> Copy, content y microcopy</li>",
              "<li><strong>🖼️ AI Image Optimization:</strong> Compresión y formato automático</li>",
              "<li><strong>🎭 AI Avatar Generation:</strong> Perfiles de usuario realistas</li>",
              "</ul>",
              "<p><strong>Generación de Imágenes para Frontend:</strong></p>",
              '<div class="bg-purple-50 border border-purple-200 rounded-lg p-4 my-4">',
              '<p class="font-medium text-purple-800">Prompts Efectivos para E-commerce:</p>',
              '<div class="text-purple-700 mt-2 space-y-2">',
              '<p><strong>Hero Images:</strong> "Modern minimalist e-commerce hero section, clean white background, floating product, soft shadows, professional photography style, 16:9 aspect ratio"</p>',
              '<p><strong>Product Mockups:</strong> "iPhone mockup showing [tu app], realistic hands holding device, neutral background, professional lighting, marketing style"</p>',
              '<p><strong>Background Patterns:</strong> "Subtle geometric pattern for website background, light gray on white, minimal design, seamless tile"</p>',
              "</div>",
              "</div>",
              "<p><strong>Optimización Automática de Assets:</strong></p>",
              "<div class=\"bg-gray-900 rounded p-4 my-4\"><pre><code>// AI Asset Optimization Pipeline\nconst optimizeAssets = {\n  images: {\n    // Compresión inteligente basada en contenido\n    compression: 'smart', // IA detecta el nivel óptimo\n    formats: ['webp', 'avif', 'jpg'], // Fallbacks automáticos\n    sizes: [320, 640, 768, 1024, 1280], // Responsive automático\n    lazy: true, // Lazy loading automático\n  },\n  \n  icons: {\n    format: 'svg', // Vectorial para escalabilidad\n    optimization: 'aggressive', // Minificación inteligente\n    inlining: 'critical', // Inline para iconos críticos\n  },\n  \n  content: {\n    language: 'es', // Localización automática\n    tone: 'professional', // Consistencia de tono\n    seo: true, // Optimización para SEO\n  }\n};</code></pre></div>",
              "<p><strong>AI Icon Generation Workflow:</strong></p>",
              "<ol class='list-decimal pl-6 space-y-2'>",
              "<li><strong>🎯 Define Style:</strong> Consistent icon style (outline, filled, etc.)</li>",
              "<li><strong>📝 Batch Generation:</strong> Generar set completo de iconos</li>",
              "<li><strong>🔧 Optimization:</strong> SVG optimization automático</li>",
              "<li><strong>📦 Integration:</strong> Icon component library automático</li>",
              "<li><strong>🎨 Variants:</strong> Light/dark mode automático</li>",
              "</ol>",
              "<p><strong>Content Generation con IA:</strong></p>",
              "<ul class='list-disc pl-6 space-y-2'>",
              "<li><strong>📝 Microcopy:</strong> Botones, labels, mensajes de error</li>",
              "<li><strong>📄 Landing Pages:</strong> Headlines, descriptions, CTAs</li>",
              "<li><strong>🛍️ Product Descriptions:</strong> Descriptions convincentes y SEO-optimized</li>",
              "<li><strong>📧 Email Templates:</strong> Subject lines y copy personalizado</li>",
              "<li><strong>🔍 SEO Content:</strong> Meta descriptions y alt texts</li>",
              "</ul>",
              '<div class="bg-green-50 border border-green-200 rounded-lg p-4 my-4">',
              '<p class="font-medium text-green-800">Ejemplo: Product Description Generator</p>',
              '<div class="text-green-700 mt-2">',
              '<p><strong>Input:</strong> "Smartphone, 128GB, cámara 48MP, batería 5000mAh"</p>',
              '<p><strong>Output AI:</strong> "Captura cada momento con perfección gracias a su cámara de 48MP y disfruta de un día completo sin interrupciones con su batería de 5000mAh. Con 128GB de almacenamiento, tendrás espacio para todo lo que importa."</p>',
              "</div>",
              "</div>",
              "<p><strong>Asset Performance Optimization:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li>📱 <strong>Responsive Images:</strong> Tamaños automáticos por dispositivo</li>",
              "<li>⚡ <strong>Format Selection:</strong> WebP/AVIF con fallbacks inteligentes</li>",
              "<li>🎯 <strong>Critical Assets:</strong> Preload automático de assets críticos</li>",
              "<li>💾 <strong>CDN Optimization:</strong> Distribución global automática</li>",
              "<li>🔄 <strong>Cache Strategy:</strong> Headers de cache inteligentes</li>",
              "</ul>",
              "<p><strong>Herramientas y APIs Recomendadas:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li>🎨 <strong>Imagen:</strong> Midjourney API, DALL-E 3, Stable Diffusion</li>",
              "<li>🔤 <strong>Iconos:</strong> Heroicons AI, Iconify custom generation</li>",
              "<li>📝 <strong>Content:</strong> OpenAI GPT-4, Claude 3, Gemini Pro</li>",
              "<li>🖼️ <strong>Optimization:</strong> Tinify API, Cloudinary AI</li>",
              "<li>📊 <strong>Analytics:</strong> Google PageSpeed Insights API</li>",
              "</ul>",
            ],
          },
          {
            title: "9.6 Caso de Uso Real: E-commerce con IA de Principio a Fin",
            content: [
              "<p><strong>🛍️ Proyecto Real: TechStore - E-commerce Completo con IA</strong></p>",
              "<p><em>Construcción completa de un e-commerce moderno usando todas las herramientas IA. De concepto a producción en 2-3 semanas.</em></p>",
              "<p><strong>Proyecto Overview:</strong></p>",
              "<ul class='list-disc pl-6 space-y-2'>",
              "<li><strong>🎯 Objetivo:</strong> E-commerce de productos tech con UX moderna</li>",
              "<li><strong>⏱️ Timeline:</strong> 2-3 semanas (vs 2-3 meses tradicional)</li>",
              "<li><strong>🤖 IA Integration:</strong> 90% del desarrollo asistido por IA</li>",
              "<li><strong>📊 Resultado:</strong> Performance 95+, Accesibilidad AAA</li>",
              "</ul>",
              "<p><strong>Fase 1: Ideación y Diseño (2-4 horas)</strong></p>",
              '<div class="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">',
              '<p class="font-medium text-blue-800">v0.dev Prompt de Inicio:</p>',
              '<p class="text-blue-700 mt-2">"Crea un e-commerce moderno para productos de tecnología. Necesito: homepage con hero section, grid de productos con filtros, product detail page, carrito de compras, checkout flow. Diseño limpio y minimalista, mobile-first, usando Tailwind CSS. Incluir estados de loading, empty states, y ser completamente accesible."</p>',
              "</div>",
              "<p><strong>Fase 2: Desarrollo de Componentes (1 semana)</strong></p>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code>// GitHub Copilot - Component Generation\n// Crear sistema de componentes reutilizables para e-commerce\n// Incluir: ProductCard, CartItem, CheckoutForm, UserProfile\n// Con TypeScript strict, Tailwind CSS, y accesibilidad WCAG 2.1\n\ninterface Product {\n  id: string;\n  name: string;\n  price: number;\n  image: string;\n  category: string;\n  rating: number;\n  stock: number;\n}\n\n// Copilot genera automáticamente:\nfunction ProductCard({ product, onAddToCart }: ProductCardProps) {\n  // Componente completo con loading states, accessibility, animations\n}</code></pre></div>',
              "<p><strong>Fase 3: Testing y QA Automático (2-3 días)</strong></p>",
              "<ul class='list-disc pl-6 space-y-2'>",
              "<li><strong>🧪 Visual Testing:</strong> Chromatic captura todas las variantes</li>",
              "<li><strong>♿ Accessibility:</strong> axe-core valida WCAG 2.1 AA automáticamente</li>",
              "<li><strong>⚡ Performance:</strong> Lighthouse CI asegura Core Web Vitals</li>",
              "<li><strong>🎭 E2E Testing:</strong> Playwright genera tests del user journey</li>",
              "</ul>",
              "<p><strong>Fase 4: Content y Assets (1 día)</strong></p>",
              "<ul class='list-disc pl-6 space-y-2'>",
              "<li><strong>🖼️ Product Images:</strong> Midjourney genera mockups profesionales</li>",
              "<li><strong>📝 Copy:</strong> ChatGPT crea descriptions y microcopy</li>",
              "<li><strong>🔤 Icons:</strong> Set completo de iconos consistentes</li>",
              "<li><strong>🎨 Branding:</strong> Logo, colores, tipografía cohesivos</li>",
              "</ul>",
              "<p><strong>Fase 5: Deploy y Monitoring (2-4 horas)</strong></p>",
              '<div class="bg-green-50 border border-green-200 rounded-lg p-4 my-4">',
              '<p class="font-medium text-green-800">Deployment Automático:</p>',
              '<ul class="text-green-700 mt-2 space-y-1">',
              "<li>• <strong>Vercel:</strong> Deploy automático desde GitHub</li>",
              "<li>• <strong>Performance:</strong> Monitoring continuo con alertas</li>",
              "<li>• <strong>Analytics:</strong> User behavior tracking automático</li>",
              "<li>• <strong>Error Tracking:</strong> Sentry captura issues automáticamente</li>",
              "</ul>",
              "</div>",
              "<p><strong>Resultados Medibles:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li>⚡ <strong>Lighthouse Score:</strong> 95+ en todas las métricas</li>",
              "<li>♿ <strong>Accessibility:</strong> 100% WCAG 2.1 AA compliance</li>",
              "<li>📱 <strong>Mobile UX:</strong> Optimizado para todas las pantallas</li>",
              "<li>🚀 <strong>Core Web Vitals:</strong> LCP < 2s, FID < 100ms, CLS < 0.1</li>",
              "<li>🧪 <strong>Test Coverage:</strong> 90%+ con tests automáticos</li>",
              "</ul>",
              "<p><strong>Lecciones Aprendidas:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li>✅ <strong>IA Acelera, No Reemplaza:</strong> Dirección humana es crucial</li>",
              "<li>✅ <strong>Iteración Rápida:</strong> Prototipo → Test → Mejora en ciclos cortos</li>",
              "<li>✅ <strong>Quality Gates:</strong> Automatización previene regresiones</li>",
              "<li>✅ <strong>User-Centric:</strong> IA optimiza para métricas reales de UX</li>",
              "</ul>",
              '<div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">',
              '<p class="font-medium text-yellow-800">🎯 Próximos Pasos:</p>',
              '<p class="text-yellow-700 mt-2">Con este proyecto base, puedes escalar a funcionalidades avanzadas: AI-powered recommendations, dynamic pricing, automated A/B testing, y personalization inteligente.</p>',
              "</div>",
            ],
          },
          {
            title: "9.7 Templates y Configuraciones IA-Ready",
            content: [
              "<p><strong>🛠️ Templates Listos para Producción: Acelera tu Setup IA</strong></p>",
              "<p><em>Como boilerplates backend, pero optimizados para desarrollo frontend con IA. Templates pre-configurados con todas las herramientas IA integradas.</em></p>",
              "<p><strong>Starter Templates Esenciales:</strong></p>",
              "<ul class='list-disc pl-6 space-y-2'>",
              "<li><strong>🚀 Next.js + IA Stack:</strong> Template completo con Copilot, v0.dev ready</li>",
              "<li><strong>🎨 Component Library:</strong> Storybook + Chromatic pre-configurado</li>",
              "<li><strong>🧪 Testing Suite:</strong> Playwright + axe-core + Lighthouse CI</li>",
              "<li><strong>📊 Analytics Ready:</strong> Performance monitoring integrado</li>",
              "</ul>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code># Estructura del Template Next.js + IA\nai-frontend-template/\n├── .github/\n│   └── workflows/\n│       ├── ai-visual-tests.yml     # Chromatic + Playwright\n│       ├── performance-audit.yml   # Lighthouse CI\n│       └── accessibility-check.yml # axe-core automation\n├── .vscode/\n│   ├── settings.json              # Copilot optimizado\n│   ├── extensions.json            # Extensions recomendadas\n│   └── ai-prompts.md              # Prompts personalizados\n├── components/\n│   ├── ui/                       # Componentes base v0.dev\n│   ├── forms/                    # Form components con IA\n│   └── layouts/                  # Layout templates\n├── lib/\n│   ├── ai-utils.ts               # Utilidades IA\n│   ├── performance.ts            # Monitoring tools\n│   └── testing-helpers.ts        # Testing utilities\n├── hooks/\n│   ├── use-ai-content.ts         # Content generation\n│   ├── use-performance.ts        # Performance tracking\n│   └── use-accessibility.ts      # A11y helpers\n├── config/\n│   ├── chromatic.config.js       # Visual testing\n│   ├── lighthouse.config.js      # Performance budget\n│   └── ai-tools.config.js        # API keys y settings\n└── docs/\n    ├── ai-workflow.md            # Workflow documentation\n    ├── prompts-library.md        # Prompt collection\n    └── deployment-guide.md       # Deploy con IA validation</code></pre></div>',
              "<p><strong>Configuración VS Code Optimizada para IA:</strong></p>",
              '<div class="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">',
              '<p class="font-medium text-blue-800">settings.json para Máxima Productividad IA:</p>',
              '<div class="bg-gray-900 rounded p-2 mt-2"><pre><code class="text-sm">{\n  "github.copilot.enable": {\n    "*": true,\n    "plaintext": false,\n    "markdown": true,\n    "scminput": false\n  },\n  "github.copilot.advanced": {\n    "secret_key": "github_copilot_extension_development",\n    "length": 500,\n    "temperature": 0.1,\n    "top_p": 1,\n    "stop": ["\\n\\n\\n"]\n  },\n  "editor.inlineSuggest.enabled": true,\n  "editor.suggestSelection": "first",\n  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",\n  "typescript.suggest.autoImports": true,\n  "typescript.preferences.importModuleSpecifier": "relative",\n  "emmet.includeLanguages": {\n    "typescript": "html",\n    "typescriptreact": "html"\n  },\n  "tailwindCSS.includeLanguages": {\n    "typescript": "html",\n    "typescriptreact": "html"\n  },\n  "files.associations": {\n    "*.css": "tailwindcss"\n  }\n}</code></pre></div>',
              "</div>",
              "<p><strong>Configuración de Herramientas IA:</strong></p>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code># .env.local - Variables de entorno para IA tools\nOPENAI_API_KEY=sk-your-key-here\nCHROMATIC_PROJECT_TOKEN=your-chromatic-token\nLIGHTHOUSE_SERVER_URL=your-lighthouse-server\nVERCEL_TOKEN=your-vercel-token\n\n# AI Configuration\nAI_CONTENT_PROVIDER=openai # openai | anthropic | google\nAI_IMAGE_PROVIDER=midjourney # midjourney | dalle | stable-diffusion\nAI_TESTING_ENABLED=true\nAI_PERFORMANCE_MONITORING=true\n\n# Performance Budgets\nLIGHTHOUSE_PERFORMANCE_BUDGET=90\nLIGHTHOUSE_ACCESSIBILITY_BUDGET=95\nLIGHTHOUSE_SEO_BUDGET=90</code></pre></div>',
              "<p><strong>Package.json con Scripts IA:</strong></p>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code>{\n  "scripts": {\n    "dev": "next dev",\n    "build": "next build",\n    "start": "next start",\n    \n    // === AI DEVELOPMENT SCRIPTS ===\n    "ai:generate": "node scripts/ai-component-generator.js",\n    "ai:content": "node scripts/ai-content-generator.js",\n    "ai:optimize": "node scripts/ai-optimization.js",\n    \n    // === AI TESTING SCRIPTS ===\n    "test:ai": "npm run test:visual && npm run test:a11y && npm run test:perf",\n    "test:visual": "chromatic --exit-zero-on-changes",\n    "test:a11y": "jest --testPathPattern=accessibility",\n    "test:perf": "lighthouse-ci autorun",\n    "test:e2e": "playwright test",\n    \n    // === AI QUALITY GATES ===\n    "quality:check": "npm run lint && npm run test:ai",\n    "pre-commit": "lint-staged && npm run quality:check",\n    "pre-push": "npm run build && npm run test:ai"\n  },\n  "dependencies": {\n    "next": "^14.0.0",\n    "react": "^18.0.0",\n    "typescript": "^5.0.0",\n    "tailwindcss": "^3.4.0",\n    \n    // === AI INTEGRATIONS ===\n    "openai": "^4.0.0",\n    "@anthropic-ai/sdk": "^0.20.0",\n    "@google/generative-ai": "^0.2.0"\n  },\n  "devDependencies": {\n    // === AI TESTING TOOLS ===\n    "@axe-core/playwright": "^4.8.0",\n    "@chromatic-com/storybook": "^1.0.0",\n    "@lighthouse-ci/cli": "^0.12.0",\n    "@playwright/test": "^1.40.0",\n    \n    // === AI DEVELOPMENT TOOLS ===\n    "prettier-plugin-tailwindcss": "^0.5.0",\n    "eslint-plugin-jsx-a11y": "^6.8.0",\n    "storybook": "^7.6.0"\n  }\n}</code></pre></div>',
              "<p><strong>Templates de Componentes IA-Ready:</strong></p>",
              "<ul class='list-disc pl-6 space-y-2'>",
              "<li><strong>🎨 UI Components:</strong> Button, Card, Modal con variants completas</li>",
              "<li><strong>📝 Form Components:</strong> Input, Select, TextArea con validación</li>",
              "<li><strong>📊 Data Components:</strong> Table, Chart, Dashboard con loading states</li>",
              "<li><strong>🚀 Layout Components:</strong> Header, Sidebar, Footer responsive</li>",
              "</ul>",
              '<div class="bg-green-50 border border-green-200 rounded-lg p-4 my-4">',
              '<p class="font-medium text-green-800">Template de Componente Optimizado para IA:</p>',
              '<div class="bg-gray-900 rounded p-2 mt-2"><pre><code class="text-sm">// components/ui/button.tsx\n// AI-ready component template con todas las variants\n\nimport { forwardRef } from "react";\nimport { cn } from "@/lib/utils";\n\ninterface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {\n  variant?: "primary" | "secondary" | "destructive" | "ghost";\n  size?: "sm" | "md" | "lg";\n  loading?: boolean;\n  leftIcon?: React.ReactNode;\n  rightIcon?: React.ReactNode;\n}\n\n// Component con patterns que IA reconoce fácilmente\nconst Button = forwardRef<HTMLButtonElement, ButtonProps>(\n  ({ variant = "primary", size = "md", loading = false, children, className, leftIcon, rightIcon, ...props }, ref) => {\n    return (\n      <button\n        ref={ref}\n        className={cn(\n          // Base styles - AI entiende estos patrones\n          "inline-flex items-center justify-center rounded-md font-medium transition-colors",\n          "focus:outline-none focus:ring-2 focus:ring-offset-2",\n          "disabled:opacity-50 disabled:pointer-events-none",\n          \n          // Variant styles - patterns reconocibles por IA\n          {\n            "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500": variant === "primary",\n            "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500": variant === "secondary",\n            "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500": variant === "destructive",\n            "hover:bg-gray-100 focus:ring-gray-500": variant === "ghost",\n          },\n          \n          // Size styles - IA aprende estos patterns\n          {\n            "h-8 px-3 text-sm": size === "sm",\n            "h-10 px-4 text-base": size === "md",\n            "h-12 px-6 text-lg": size === "lg",\n          },\n          \n          className\n        )}\n        disabled={loading || props.disabled}\n        {...props}\n      >\n        {loading ? (\n          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">\n            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />\n            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />\n          </svg>\n        ) : leftIcon}\n        {children}\n        {rightIcon}\n      </button>\n    );\n  }\n);\n\nButton.displayName = "Button";\n\nexport { Button, type ButtonProps };</code></pre></div>',
              "</div>",
            ],
          },
          {
            title: "9.8 Workflows Avanzados y Casos de Uso IA",
            content: [
              "<p><strong>🔄 Workflows Profesionales: De Desarrollo a Producción con IA</strong></p>",
              "<p><em>Como pipelines CI/CD pero optimizados para desarrollo frontend. Automatización completa desde desarrollo hasta deployment con validaciones IA en cada paso.</em></p>",
              "<p><strong>Workflow 1: Feature Development con IA</strong></p>",
              "<ol class='list-decimal pl-6 space-y-2'>",
              "<li><strong>📋 Planning:</strong> Definir requirements con IA assistance</li>",
              "<li><strong>🎨 Design:</strong> v0.dev genera wireframes y componentes</li>",
              "<li><strong>💻 Development:</strong> Copilot asiste en implementación</li>",
              "<li><strong>🧪 Testing:</strong> AI testing suite valida automáticamente</li>",
              "<li><strong>📊 Performance:</strong> Lighthouse CI verifica optimizations</li>",
              "<li><strong>🚀 Deploy:</strong> CI/CD con quality gates IA</li>",
              "</ol>",
              '<div class="bg-purple-50 border border-purple-200 rounded-lg p-4 my-4">',
              '<p class="font-medium text-purple-800">GitHub Actions Workflow con IA:</p>',
              '<div class="bg-gray-900 rounded p-2 mt-2"><pre><code class="text-sm"># .github/workflows/ai-feature-workflow.yml\nname: AI-Powered Feature Development\n\non:\n  pull_request:\n    branches: [main, develop]\n  push:\n    branches: [main]\n\njobs:\n  ai-quality-check:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      \n      - name: Setup Node.js\n        uses: actions/setup-node@v4\n        with:\n          node-version: 18\n          cache: npm\n      \n      - name: Install dependencies\n        run: npm ci\n      \n      - name: AI Code Analysis\n        run: |\n          # AI analiza el código para issues comunes\n          npm run ai:code-analysis\n          # AI sugiere optimizaciones\n          npm run ai:optimize-suggestions\n      \n      - name: Visual Regression Testing\n        run: npm run test:visual\n        env:\n          CHROMATIC_PROJECT_TOKEN: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}\n      \n      - name: Accessibility Testing\n        run: npm run test:a11y\n      \n      - name: Performance Audit\n        run: npm run test:perf\n        env:\n          LIGHTHOUSE_SERVER_URL: ${{ secrets.LIGHTHOUSE_SERVER_URL }}\n      \n      - name: AI Summary Report\n        run: |\n          # AI genera resumen de todos los tests\n          npm run ai:generate-report\n          # AI sugiere próximos pasos\n          npm run ai:next-steps</code></pre></div>',
              "</div>",
              "<p><strong>Workflow 2: A/B Testing Automático con IA</strong></p>",
              "<ul class='list-disc pl-6 space-y-2'>",
              "<li><strong>🎯 Hypothesis Generation:</strong> IA sugiere variantes a testear</li>",
              "<li><strong>🎨 Variant Creation:</strong> v0.dev genera versiones alternativas</li>",
              "<li><strong>📊 Test Setup:</strong> Configuración automática de experimentos</li>",
              "<li><strong>📈 Results Analysis:</strong> IA analiza métricas y sugiere ganadores</li>",
              "</ul>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code>// lib/ai-ab-testing.ts\ninterface ABTestConfig {\n  name: string;\n  variants: {\n    control: React.ComponentType;\n    treatment: React.ComponentType;\n  };\n  metrics: string[];\n  audienceSegments?: string[];\n}\n\nexport class AIABTestManager {\n  async generateVariants(component: string, goal: string) {\n    // IA genera múltiples variantes basadas en el goal\n    const prompt = `\n      Genera 3 variantes del componente ${component} optimizadas para ${goal}.\n      Incluye: copy variations, color schemes, layout changes.\n      Mantén funcionalidad idéntica, solo cambia elementos visuales/UX.\n    `;\n    \n    return await this.aiService.generateVariants(prompt);\n  }\n  \n  async analyzeResults(testResults: TestResults) {\n    // IA analiza resultados y sugiere próximos experimentos\n    const insights = await this.aiService.analyzeMetrics(testResults);\n    \n    return {\n      winner: insights.statisticallySignificant,\n      recommendations: insights.nextExperiments,\n      confidenceLevel: insights.confidence\n    };\n  }\n}</code></pre></div>',
              "<p><strong>Workflow 3: Content Optimization Continua</strong></p>",
              "<ul class='list-disc pl-6 space-y-2'>",
              "<li><strong>📝 Content Audit:</strong> IA analiza performance de copy actual</li>",
              "<li><strong>🎯 SEO Optimization:</strong> Generación automática de meta tags</li>",
              "<li><strong>🌐 Localization:</strong> Traducción y adaptación cultural automática</li>",
              "<li><strong>📊 Performance Tracking:</strong> Monitoring de engagement automático</li>",
              "</ul>",
              "<p><strong>Workflow 4: Performance Monitoring Inteligente</strong></p>",
              '<div class="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">',
              '<p class="font-medium text-blue-800">Real User Monitoring con IA:</p>',
              "<div class=\"bg-gray-900 rounded p-2 mt-2\"><pre><code class=\"text-sm\">// lib/ai-performance-monitor.ts\nexport class AIPerformanceMonitor {\n  constructor() {\n    this.observer = new PerformanceObserver((list) => {\n      list.getEntries().forEach(entry => {\n        this.analyzeMetric(entry);\n      });\n    });\n    \n    this.observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });\n  }\n  \n  async analyzeMetric(entry: PerformanceEntry) {\n    const analysis = await this.aiService.analyzePerformance({\n      metric: entry.name,\n      value: entry.startTime,\n      context: this.getPageContext()\n    });\n    \n    if (analysis.isRegression) {\n      await this.createPerformanceAlert(analysis);\n    }\n    \n    if (analysis.optimizationSuggestions.length > 0) {\n      await this.queueOptimizations(analysis.optimizationSuggestions);\n    }\n  }\n  \n  async createPerformanceAlert(analysis: PerformanceAnalysis) {\n    // IA genera alertas específicas con contexto\n    const alert = {\n      severity: analysis.impact,\n      description: `Performance regression detected: ${analysis.metric} increased by ${analysis.change}%`,\n      recommendations: analysis.quickFixes,\n      affectedUsers: analysis.impactedSegments\n    };\n    \n    await this.notificationService.send(alert);\n  }\n}</code></pre></div>",
              "</div>",
              "<p><strong>Workflow 5: Deployment Inteligente</strong></p>",
              "<ul class='list-disc pl-6 space-y-2'>",
              "<li><strong>🔍 Pre-Deploy Validation:</strong> IA verifica readiness para producción</li>",
              "<li><strong>🚀 Progressive Rollout:</strong> Deploy gradual con monitoring IA</li>",
              "<li><strong>📊 Health Monitoring:</strong> IA detecta issues post-deploy</li>",
              "<li><strong>🔄 Auto-Rollback:</strong> Revert automático si IA detecta problemas</li>",
              "</ul>",
              "<p><strong>Casos de Uso Avanzados:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li>🎯 <strong>Personalization:</strong> UI adaptativa basada en user behavior</li>",
              "<li>🔍 <strong>Smart Search:</strong> Búsqueda inteligente con AI suggestions</li>",
              "<li>💬 <strong>AI Chatbots:</strong> Soporte integrado en la interfaz</li>",
              "<li>📊 <strong>Predictive Analytics:</strong> Anticipar needs del usuario</li>",
              "<li>🛡️ <strong>Security Monitoring:</strong> Detección automática de amenazas</li>",
              "</ul>",
              '<div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">',
              '<p class="font-medium text-yellow-800">🚀 El Futuro es IA-First:</p>',
              '<p class="text-yellow-700 mt-2">Estos workflows representan el futuro del desarrollo frontend. La IA no es solo una herramienta más, es el core que potencia todo el proceso de desarrollo, testing, y deployment.</p>',
              "</div>",
            ],
          },
          {
            title: "9.9 Casos de Uso Avanzados: Proyectos Reales IA-Driven",
            content: [
              "<p><strong>🚀 Proyectos Profesionales: Portfolio de Casos de Uso IA</strong></p>",
              "<p><em>Casos reales de implementación IA-driven. Desde startups hasta enterprise, estos proyectos demuestran el potencial completo del desarrollo frontend asistido por IA.</em></p>",
              "<p><strong>Caso 1: SaaS Dashboard - FinanceAI Analytics 💼</strong></p>",
              '<div class="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">',
              '<p class="font-medium text-blue-800">Proyecto: Dashboard Financiero con Predicciones IA</p>',
              '<ul class="text-blue-700 mt-2 space-y-1">',
              "<li>• <strong>Stack:</strong> Next.js 14, TypeScript, TailwindCSS, Recharts, OpenAI API</li>",
              "<li>• <strong>Generado con v0.dev:</strong> 85% de componentes UI base</li>",
              "<li>• <strong>GitHub Copilot:</strong> Lógica de charts y integraciones API</li>",
              "<li>• <strong>Timeline:</strong> 1 semana (vs 6 semanas tradicional)</li>",
              "<li>• <strong>Resultado:</strong> Performance 96/100, Revenue +300%</li>",
              "</ul>",
              "</div>",
              "<p><strong>Caso 2: E-commerce Personalizado - ShopSmart AI 🛍️</strong></p>",
              "<ul class='list-disc pl-6 space-y-2'>",
              "<li><strong>🎯 Personalización IA:</strong> Productos recomendados en tiempo real</li>",
              "<li><strong>🤖 Chatbot Inteligente:</strong> Soporte de ventas conversacional</li>",
              "<li><strong>📊 Dynamic Pricing:</strong> Precios optimizados por IA</li>",
              "<li><strong>🎨 Content Generation:</strong> Descriptions automáticas de productos</li>",
              "<li><strong>📈 A/B Testing:</strong> Optimización continua de conversión</li>",
              "</ul>",
              "<p><strong>Caso 3: Healthcare Portal - MedAI Patient Dashboard 🏥</strong></p>",
              '<div class="bg-green-50 border border-green-200 rounded-lg p-4 my-4">',
              '<p class="font-medium text-green-800">Cumplimiento Crítico: HIPAA + WCAG 2.1 AAA</p>',
              '<ul class="text-green-700 mt-2 space-y-1">',
              "<li>• <strong>Accesibilidad IA:</strong> axe-core automático + screen reader optimization</li>",
              "<li>• <strong>Security First:</strong> Validación automática de vulnerabilidades</li>",
              "<li>• <strong>Performance:</strong> Core Web Vitals 100/100 (crítico para accesibilidad)</li>",
              "<li>• <strong>Content IA:</strong> Explicaciones médicas en lenguaje simple</li>",
              "</ul>",
              "</div>",
              "<p><strong>Métricas de Éxito Medibles:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li>⚡ <strong>Velocidad de Desarrollo:</strong> 5-10x más rápido vs desarrollo tradicional</li>",
              "<li>📊 <strong>Performance Scores:</strong> 95+ promedio en Lighthouse</li>",
              "<li>♿ <strong>Accessibility:</strong> 100% WCAG 2.1 AA compliance automático</li>",
              "<li>🎯 <strong>User Engagement:</strong> +40% average increase</li>",
              "<li>💰 <strong>ROI:</strong> 300-500% retorno de inversión en herramientas IA</li>",
              "<li>🔄 <strong>Maintenance:</strong> 60% reducción en bugs post-deploy</li>",
              "</ul>",
            ],
          },
          {
            title: "9.10 Herramientas Especializadas y Integraciones Avanzadas",
            content: [
              "<p><strong>🛠️ Arsenal Completo: Herramientas IA Profesionales 2025</strong></p>",
              "<p><em>Stack completo de herramientas especializadas para cada fase del desarrollo. Como tener un equipo senior de frontend working 24/7.</em></p>",
              "<p><strong>Categoría 1: AI Code Generation & Assistance 💻</strong></p>",
              '<div class="bg-gray-900 rounded p-4 my-4"><pre><code># Herramientas de Generación de Código\n\n## Tier 1: Esenciales (Must-Have)\n- GitHub Copilot ($10/mes) - Pair programming IA\n- v0.dev (Gratis) - Component generation\n- Cursor IDE ($20/mes) - AI-first code editor\n- Codeium (Gratis) - Alternative a Copilot\n\n## Tier 2: Especializadas\n- Tabnine ($12/mes) - Context-aware completions\n- Amazon CodeWhisperer (Gratis) - AWS-optimized\n- Replit Ghostwriter ($7/mes) - Web-based coding\n- Sourcegraph Cody ($9/mes) - Enterprise code understanding</code></pre></div>',
              "<p><strong>Categoría 2: AI Testing & Quality Assurance 🧪</strong></p>",
              '<div class="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">',
              '<p class="font-medium text-blue-800">Testing Suite Automatizado con IA:</p>',
              '<ul class="text-blue-700 mt-2 space-y-1">',
              "<li>• <strong>Visual Testing:</strong> Chromatic + Storybook AI</li>",
              "<li>• <strong>E2E Testing:</strong> Playwright con AI test generation</li>",
              "<li>• <strong>Accessibility:</strong> axe-core con AI reporting</li>",
              "<li>• <strong>Performance:</strong> Lighthouse CI con AI insights</li>",
              "</ul>",
              "</div>",
              "<p><strong>ROI y Justificación Empresarial:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li>💰 <strong>Inversión Inicial:</strong> $50-200/mes en herramientas IA</li>",
              "<li>⏱️ <strong>Ahorro de Tiempo:</strong> 60-80% reducción en desarrollo</li>",
              "<li>👥 <strong>Reduce Team Size:</strong> 1 developer IA-powered = 3-4 traditional</li>",
              "<li>🎯 <strong>Quality Improvement:</strong> 90% menos bugs en producción</li>",
              "<li>📈 <strong>Revenue Impact:</strong> 200-400% faster time-to-market</li>",
              "<li>🔄 <strong>Maintenance:</strong> 70% reducción en costos de mantenimiento</li>",
              "</ul>",
            ],
          },
          {
            title: "9.11 Proyecto Final: E-commerce Completo IA-Driven",
            content: [
              "<p><strong>🏆 Capstone Project: TechStore Pro - E-commerce Enterprise IA-First</strong></p>",
              "<p><em>Proyecto integrador que demuestra todo el stack IA aprendido. E-commerce enterprise-grade built 100% con herramientas IA en 2-3 semanas.</em></p>",
              "<p><strong>📋 Especificaciones del Proyecto:</strong></p>",
              '<div class="bg-indigo-50 border border-indigo-200 rounded-lg p-4 my-4">',
              '<p class="font-medium text-indigo-800">🎯 TechStore Pro - Especificaciones Técnicas</p>',
              '<ul class="text-indigo-700 mt-2 space-y-1">',
              "<li>• <strong>Frontend:</strong> Next.js 14, TypeScript, Tailwind CSS, Framer Motion</li>",
              "<li>• <strong>IA Tools:</strong> v0.dev, GitHub Copilot, Midjourney, OpenAI API</li>",
              "<li>• <strong>Testing:</strong> Playwright, Chromatic, axe-core, Lighthouse CI</li>",
              "<li>• <strong>Performance:</strong> Core Web Vitals 95+, Accessibility AAA</li>",
              "<li>• <strong>Features:</strong> 20+ páginas, 50+ componentes, IA-powered</li>",
              "</ul>",
              "</div>",
              "<p><strong>Fase 1: Arquitectura y Setup (Día 1) ⚙️</strong></p>",
              "<p><strong>Fase 2: Design System con v0.dev (Día 2-3) 🎨</strong></p>",
              "<p><strong>Fase 3: Feature Development con Copilot (Día 4-8) 💻</strong></p>",
              "<p><strong>Fase 4: Content & Assets con IA (Día 9-10) 🖼️</strong></p>",
              "<p><strong>Fase 5: Testing & QA con IA (Día 11-12) 🧪</strong></p>",
              "<p><strong>Fase 6: Deployment & Monitoring (Día 13-14) 🚀</strong></p>",
              "<p><strong>📊 Resultados Esperados del Proyecto:</strong></p>",
              "<ul class='list-disc pl-6 space-y-1'>",
              "<li>🎯 <strong>Performance:</strong> Lighthouse Score 95+ (vs 70-80 typical)</li>",
              "<li>♿ <strong>Accessibility:</strong> WCAG 2.1 AAA compliance (vs AA typical)</li>",
              "<li>⚡ <strong>Core Web Vitals:</strong> LCP <2s, FID <100ms, CLS <0.1</li>",
              "<li>📱 <strong>Mobile Score:</strong> 95+ (responsive perfecto)</li>",
              "<li>🔍 <strong>SEO Score:</strong> 95+ (content IA optimizado)</li>",
              "<li>🛡️ <strong>Security:</strong> A+ grade (best practices automáticos)</li>",
              "<li>⏱️ <strong>Development Time:</strong> 14 días (vs 3-4 meses tradicional)</li>",
              "<li>💰 <strong>Cost Efficiency:</strong> 80% reducción vs equipo tradicional</li>",
              "</ul>",
              '<div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">',
              '<p class="font-medium text-yellow-800">🏆 Portfolio Impact:</p>',
              '<p class="text-yellow-700 mt-2">Este proyecto demuestra dominio completo del stack IA-driven frontend. Es evidence convincente para employers de que puedes deliver enterprise-grade applications usando modern AI tools con velocity y quality excepcionales.</p>',
              "</div>",
            ],
          },
        ],
      },
    ],

    aiPrompts: [
      {
        title: "1. Analizar Backend para Frontend",
        description: "Extraer información del backend para planificar el frontend",
        prompt: `Analiza este backend/API para planificar el frontend correspondiente:

**Información que necesito del backend:**
- Endpoints disponibles y métodos HTTP
- Estructura de datos (request/response schemas)
- Autenticación y autorización (JWT, roles, permisos)
- Websockets o real-time features
- File upload capabilities
- Rate limiting y paginación
- Error handling patterns

**Backend info/documentation:** [PEGAR_DOCUMENTACION_O_CODIGO_BACKEND]

**Genera para el frontend:**
1. TypeScript interfaces para todas las entities
2. API client structure recommendations
3. State management needs (global vs local)
4. Required environment variables
5. Authentication flow design
6. Error handling strategy
7. Data fetching patterns recommendation

**Considera:**
- Separación entre frontend y backend repos
- CORS configuration needs
- API versioning strategy
- Development vs production endpoints`,
      },
      {
        title: "2. Setup Inicial de Proyecto Frontend",
        description: "Crear y configurar proyecto frontend desde cero",
        prompt: `Configura un proyecto frontend completo conectado a backend existente:

**Especificaciones:**
- Next.js 14 con App Router + TypeScript strict
- Tailwind CSS con design system personalizado
- Configuración para conectar con backend en: [URL_BACKEND]
- Autenticación: [JWT/OAuth/Auth0/etc]
- State management: [Redux Toolkit/Zustand/Context]

**Incluye configuración completa de:**
- package.json con todas las dependencias necesarias
- next.config.js optimizado para producción
- tailwind.config.js con tokens personalizados
- ESLint + Prettier + Husky pre-commit hooks
- Estructura de carpetas escalable
- Variables de entorno (.env.local, .env.production)
- API client setup (axios/fetch wrapper)
- Authentication context/provider
- Error boundary global
- Layout components base

**Consideraciones especiales:**
- CORS handling if different domains
- Proxy configuration for development
- Build optimization for deployment`,
      },
      {
        title: "3. Crear API Client y Conectividad",
        description: "Implementar capa de comunicación con el backend",
        prompt: `Crea un API client robusto para conectar con el backend:

**Backend endpoints:** [LISTAR_ENDPOINTS_PRINCIPALES]
**Authentication type:** [JWT/Bearer/etc]
**Base URL:** [URL_BACKEND]

**Implementa:**
- API client con interceptors para auth y errors
- TypeScript interfaces para requests/responses
- Custom hooks para cada endpoint principal
- Error handling centralizado con toast notifications
- Loading states management
- Retry logic para requests fallidos
- Cache strategy con Tanstack Query
- Optimistic updates donde sea apropiado

**Estructura requerida:**
\`\`\`
/lib
  /api
    client.ts       // Axios/fetch configuration
    types.ts        // TypeScript interfaces
    endpoints.ts    // API endpoints constants
  /hooks
    useAuth.ts      // Authentication logic
    useUsers.ts     // Users CRUD operations
    useProducts.ts  // Products operations
    [otros hooks según entidades]
\`\`\`

**Features específicos:**
- Automatic token refresh
- Request/response logging in development
- Network error handling
- Timeout configuration
- Request cancellation on component unmount`,
      },
      {
        title: "4. Integración Completa de Módulos Backend-Frontend",
        description: "Mapear y conectar todos los módulos backend con frontend",
        prompt: `Implementa integración completa de módulos backend con frontend:

**Backend Analysis:** [ANALIZAR_ESTRUCTURA_BACKEND_COMPLETA]
**Modules Detected:** [LISTAR_TODOS_LOS_MODULOS: auth, users, products, orders, etc]
**API Endpoints:** [DOCUMENTAR_TODOS_LOS_ENDPOINTS_POR_MODULO]
**Entity Relationships:** [MAPEAR_RELACIONES_ENTRE_ENTIDADES]

**Full Module Integration Strategy:**

**1. Backend Module Mapping:**
- Analyze backend folder structure y identify all modules
- Document all API endpoints por cada módulo
- Map entity relationships y data dependencies
- Identify CRUD operations disponibles
- Document authentication/authorization requirements per endpoint

**2. Frontend Module Structure Creation:**
- Create corresponding frontend modules para cada backend module
- Implement service layer para cada grupo de endpoints
- Create TypeScript interfaces para todas las entities
- Setup API client methods con proper typing
- Implement error handling específico por módulo

**3. Page Implementation Strategy:**
- List pages para cada entity (con pagination, filtering, sorting)
- Detail/view pages para individual entities
- Create/edit forms para cada entity
- Dashboard pages con entity overviews
- Admin pages para entity management

**4. Component Library per Module:**
- Entity cards para list displays
- Entity forms con proper validation
- Entity tables con actions
- Entity modals/drawers para quick actions
- Entity-specific widgets para dashboards

**5. Navigation & Routing Integration:**
- Create complete route structure para todos los módulos
- Implement breadcrumb navigation
- Setup module-based navigation menus
- Configure role-based route access
- Implement search across all entities

**6. State Management per Module:**
- Setup Zustand stores para cada módulo
- Implement Tanstack Query hooks para all endpoints
- Create optimistic updates para CRUD operations
- Setup cross-module data synchronization
- Implement global state para shared data

**Implementation Approach:**
\`\`\`typescript
// Example structure per module
/src/modules/[module-name]/
  /api/           // API client methods
  /components/    // Module-specific components
  /hooks/         // Module-specific hooks
  /pages/         // Module pages
  /store/         // Module state management
  /types/         // Module TypeScript types
  /utils/         // Module utilities
\`\`\``,
      },
      {
        title: "5. Arquitectura de Componentes y Estado",
        description: "Diseñar la estructura de componentes basada en datos del backend",
        prompt: `Diseña la arquitectura de componentes para esta aplicación:

**Datos del backend:** [DESCRIBIR_ENTIDADES_Y_RELACIONES]
**Funcionalidades principales:** [LISTAR_FEATURES_PRINCIPALES]

**Genera arquitectura completa:**

**1. Component Hierarchy:**
- Layout components (Header, Sidebar, Footer)
- Page components (Home, Dashboard, Profile, etc)
- Feature components (UserList, ProductCard, OrderForm)
- UI primitives (Button, Input, Modal, etc)

**2. State Management Strategy:**
- Global state: [User session, app settings, notifications]
- Server state: [API data con Tanstack Query]
- Local state: [Form data, UI state, component state]
- State flow diagrams entre componentes

**3. Props Interfaces (TypeScript):**
- Definir interfaces para cada componente
- Composition patterns y compound components
- Render props vs children patterns

**4. Folder Structure:**
\`\`\`
/components
  /ui           // Primitivos reutilizables
  /forms        // Form components
  /layouts      // Layout components
  /features     // Business logic components
/hooks          // Custom hooks
/contexts       // React contexts
/store          // Global state (si usas Redux/Zustand)
\`\`\`

**5. Component Communication Patterns:**
- Parent-child props flow
- Context providers para shared state
- Custom hooks para business logic
- Event handling patterns`,
      },
      {
        title: "6. Implementar Autenticación y Autorización",
        description: "Setup completo de auth conectado con backend",
        prompt: `Implementa sistema de autenticación completo:

**Backend auth info:** [JWT/OAuth/tipo_de_auth]
**Endpoints de auth:** [login, register, refresh, logout]
**Roles/permisos:** [admin, user, etc]

**Implementa:**

**1. Auth Context/Provider:**
- Login/logout functionality
- Token management (storage, refresh)
- User session persistence
- Role-based access control

**2. Protected Routes:**
- Route guards based on authentication
- Role-based route protection
- Redirect logic (login -> intended page)
- Loading states during auth checks

**3. Auth Components:**
- LoginForm con validación
- RegisterForm si aplica
- PasswordReset flow
- UserProfile management

**4. Security Best Practices:**
- Secure token storage (httpOnly cookies vs localStorage)
- XSS protection
- CSRF protection if needed
- Session timeout handling
- Automatic logout on token expiry

**5. Integration con API Client:**
- Automatic token attachment to requests
- Token refresh interceptors
- Logout on 401/403 responses
- Auth error handling

**Código TypeScript con:**
- Auth interfaces y types
- Custom hooks (useAuth, usePermissions)
- HOC o wrapper para protected components
- Error boundaries para auth errors`,
      },
      {
        title: "7. Formularios y Validación de Datos",
        description: "Implementar forms conectados con validación backend",
        prompt: `Crea sistema de formularios robusto:

**Backend validation rules:** [DESCRIBIR_REGLAS_DE_VALIDACION]
**Forms requeridos:** [Login, Register, UserProfile, CreateProduct, etc]

**Implementa con React Hook Form + Zod:**

**1. Validation Schemas:**
- Zod schemas que coincidan con backend validation
- Custom validators para business rules
- Async validation (email exists, username available)
- Cross-field validation

**2. Form Components:**
- Reusable form controls (Input, Select, Checkbox, etc)
- Form layouts responsivos
- Error display patterns
- Loading states durante submission

**3. Form Submission:**
- Optimistic updates donde sea apropiado
- Error handling (validation vs server errors)
- Success feedback (toast, redirect, etc)
- Form reset después de éxito

**4. Advanced Features:**
- Multi-step forms con progress indicator
- Autosave/draft functionality
- File upload con progress
- Conditional fields basados en otros valores

**Estructura de archivos:**
\`\`\`
/forms
  /schemas        // Zod validation schemas
  /components     // Form components
  /hooks          // useForm custom hooks
  /utils          // Form utilities
\`\`\`

**Ejemplo TypeScript completo para:**
- UserProfileForm
- ProductCreateForm
- Validation error handling
- Integration con API mutations`,
      },
      {
        title: "8. Gestión de Estado Servidor con Tanstack Query",
        description: "Implementar cache y sincronización con backend",
        prompt: `Configura gestión de estado servidor profesional:

**Backend endpoints:** [LISTAR_ENDPOINTS_PRINCIPALES]
**Data relationships:** [user->orders, product->reviews, etc]

**Implementa Tanstack Query setup:**

**1. Query Configuration:**
- QueryClient setup con defaults optimizados
- Query keys organization y patterns
- Stale time y cache time apropiados
- Error handling global

**2. Data Fetching Patterns:**
- useQuery para data fetching
- Infinite queries para paginación
- Dependent queries (fetch B after A)
- Parallel queries con useQueries

**3. Mutations y Updates:**
- useMutation para CREATE/UPDATE/DELETE
- Optimistic updates para mejor UX
- Query invalidation strategies
- Rollback en caso de errores

**4. Advanced Features:**
- Background refetching
- Window focus refetching
- Network status handling
- Retry logic personalizado
- Prefetching para rutas anticipadas

**5. Integration Patterns:**
\`\`\`typescript
// Ejemplo de estructura
const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
};

const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};
\`\`\`

**Performance optimizations:**
- Selective query invalidation
- Data normalization strategies
- Memory management para large datasets`,
      },
      {
        title: "9. Custom Hooks y Lógica Reutilizable",
        description: "Crear hooks personalizados para la aplicación",
        prompt: `Crea custom hooks TypeScript para esta aplicación:

**Funcionalidades de la app:** [DESCRIBIR_FEATURES_PRINCIPALES]
**Datos que maneja:** [user, products, orders, etc]

**Custom Hooks requeridos:**

**1. Data Hooks:**
- useAuth() - Authentication state y methods
- useUser(id) - Single user with caching
- useUsers(filters) - Users list con filtering
- useProducts(category) - Products by category
- useCart() - Shopping cart management

**2. UI/UX Hooks:**
- useLocalStorage<T>() - Persistent local state
- useDebounce<T>() - Debounced values para search
- useToggle() - Boolean state toggle
- useDisclosure() - Modal/drawer open/close state
- usePagination() - Pagination logic

**3. Form Hooks:**
- useFormPersist() - Auto-save form data
- useFieldValidation() - Real-time field validation
- useMultiStepForm() - Multi-step form navigation

**4. Performance Hooks:**
- useVirtualList() - Virtualization para large lists
- useIntersectionObserver() - Lazy loading
- useThrottle() - Throttled functions

**Requirements:**
- Full TypeScript support con generics
- Error handling robusto
- Cleanup en useEffect donde sea necesario
- JSDoc documentation
- Unit tests examples
- Integration con existing API layer

**Ejemplo de estructura:**
\`\`\`typescript
interface UseUserReturn {
  user: User | null;
  loading: boolean;
  error: Error | null;
  updateUser: (data: Partial<User>) => Promise<void>;
  refreshUser: () => void;
}

const useUser = (userId: string): UseUserReturn => {
  // Implementation
};
\`\`\``,
      },
      {
        title: "10. Funcionalidades de Dominio Específico",
        description: "Implementar features avanzadas del negocio y características específicas del dominio",
        prompt: `Implementa funcionalidades de dominio específico y características avanzadas:

**Domain Context:** [DESCRIBIR_DOMINIO_DEL_NEGOCIO]
**Core Entities:** [LISTAR_ENTIDADES_PRINCIPALES_Y_RELACIONES]
**Business Rules:** [REGLAS_DE_NEGOCIO_ESPECÍFICAS]

**Domain-Specific Features Implementation:**

**1. Business Logic Layer:**
- Domain services para business rules complejas
- Validation rules específicas del dominio
- Data transformation utilities
- Business workflow implementations
- Domain-specific error handling

**2. Advanced Search & Filtering:**
- Multi-criteria search implementation
- Faceted search con dynamic filters
- Search suggestions y autocomplete
- Advanced sorting capabilities
- Search result highlighting
- Filter persistence y URL state sync

**3. Data Visualization & Analytics:**
- Interactive charts para business metrics
- Dashboard widgets personalizables
- Export functionality (PDF, Excel, CSV)
- Real-time data visualization
- Comparative analytics features
- Custom report generation

**4. Real-time Features:**
- WebSocket integration para live updates
- Real-time notifications system
- Live data synchronization
- Presence indicators
- Real-time collaboration features
- Push notification implementation

**5. Media & File Management:**
- File upload con drag & drop
- Image processing y optimization
- Multi-file upload con progress
- File type validation y security
- Media gallery components
- Document preview functionality

**6. Advanced UX Features:**
- Bulk operations interface
- Keyboard shortcuts implementation
- Advanced tooltips y help system
- Contextual actions y quick actions
- Undo/redo functionality
- User preferences y customization

**Integration Requirements:**
- Seamless integration con existing architecture
- Performance optimization para large datasets
- Error handling robusto para complex workflows
- Accessibility compliance para advanced features
- Mobile optimization para complex interactions
- Offline capability donde sea apropiado

**Expected Deliverables:**
- Domain service layer implementation
- Advanced UI components library
- Real-time communication setup
- Analytics dashboard framework
- File management system
- Comprehensive error handling
- Performance monitoring para complex features`,
      },
      {
        title: "11. Testing Strategy Frontend-Backend",
        description: "Implementar testing completo incluyendo integración con backend",
        prompt: `Crea estrategia de testing completa para app frontend-backend:

**Backend endpoints:** [LISTAR_ENDPOINTS_PRINCIPALES]
**Funcionalidades críticas:** [auth, payments, data CRUD, etc]

**Testing Pyramid Implementation:**

**1. Unit Tests (Vitest):**
- Utility functions
- Custom hooks con @testing-library/react-hooks
- Components aislados con mocking
- Validation schemas (Zod)
- API client functions

**2. Integration Tests:**
- Components + API calls con MSW (Mock Service Worker)
- Form submission flows
- Authentication flows
- State management integration
- Error boundary testing

**3. E2E Tests (Playwright):**
- Critical user journeys
- Authentication flow completo
- Payment/checkout process
- Admin workflows
- Cross-browser compatibility

**4. API Contract Testing:**
- Schema validation contra backend real
- API response structure verification
- Error handling verification

**Setup Configuration:**
\`\`\`
/tests
  /unit          // Component y utility tests
  /integration   // Integration tests
  /e2e          // Playwright tests
  /mocks        // MSW handlers
  /fixtures     // Test data
  /utils        // Testing utilities
\`\`\`

**MSW Setup para API mocking:**
- Handlers para todos los endpoints principales
- Realistic error responses
- Authentication mocking
- Data persistence durante tests

**CI/CD Integration:**
- GitHub Actions workflow
- Parallel test execution
- Test coverage reporting
- Visual regression testing con Chromatic`,
      },
      {
        title: "12. Componentes UI con v0.dev",
        description: "Generar componentes de interfaz usando v0.dev",
        prompt: `Crea prompts optimizados para v0.dev para generar componentes UI:

**Datos del backend:** [DESCRIBIR_ENTITIES_Y_RELATIONSHIPS]
**Brand/Design requirements:** [colors, typography, style guide]

**Componentes a generar con v0.dev:**

**1. Data Display Components:**
Prompt: "Create a [UserCard/ProductCard/OrderCard] component showing:
- [específicos data fields del backend]
- Interactive actions: [edit, delete, view details]
- Loading and error states
- Responsive design mobile-first
- Accessible WCAG 2.1 AA
- Style: [modern/clean/professional]
- Colors: [brand colors or palette]"

**2. Form Components:**
Prompt: "Generate [UserForm/ProductForm] with:
- Fields: [listar campos específicos del backend]
- Validation states and error messages
- Submit button with loading state
- Multi-step layout if complex
- Auto-save functionality visual feedback
- Responsive form layout"

**3. Layout Components:**
Prompt: "Create dashboard layout for [tipo de usuario]:
- Sidebar navigation with [menu items específicos]
- Header with user profile and notifications
- Main content area with [específicos widgets]
- Mobile responsive with hamburger menu
- Dark/light mode support
- Role-based navigation visibility"

**4. Data Table Components:**
Prompt: "Build data table for [entity name]:
- Columns: [específicos fields del backend]
- Sorting, filtering, and pagination
- Bulk actions: [delete, export, etc]
- Row actions: [edit, view, delete]
- Loading states and empty states
- Export functionality
- Mobile-responsive table design"

**Refinement Strategy:**
1. Generate base component con v0.dev
2. Refine con GitHub Copilot para logic
3. Add TypeScript interfaces
4. Connect con backend API
5. Add error handling y loading states`,
      },
      {
        title: "13. Diseño UI/UX y Design System",
        description: "Crear design system completo basado en la funcionalidad backend",
        prompt: `Crea design system completo para esta aplicación:

**App context:** [tipo de aplicación: dashboard, e-commerce, etc]
**User types:** [admin, customer, vendor, etc]
**Key features:** [login, products, orders, analytics, etc]

**Design System Components:**

**1. Design Tokens:**
- Color palette (primary, secondary, success, error, warning)
- Typography scale (headings, body, captions)
- Spacing system (4px base grid)
- Border radius values
- Shadow/elevation system
- Responsive breakpoints

**2. Component Library:**
- Button variants (primary, secondary, ghost, danger)
- Input controls (text, select, checkbox, radio, file)
- Navigation (sidebar, tabs, breadcrumbs, pagination)
- Feedback (alerts, toasts, loading states, empty states)
- Layout (container, grid, card, modal, drawer)
- Data display (table, list, stats cards, charts)

**3. Patterns y Templates:**
- Dashboard layouts para different user roles
- Form layouts (single column, two column, multi-step)
- List/grid patterns para data display
- Detail page layouts
- Error page templates

**4. Implementación Tailwind:**
- tailwind.config.js con custom tokens
- Component classes con @apply directives
- Responsive utility classes
- Dark mode configuration

**5. Storybook Documentation:**
- Component stories con all variants
- Interactive props controls
- Usage guidelines
- Accessibility notes
- Code examples

**6. Figma Integration:**
- Design tokens sync
- Component documentation
- Handoff specifications
- Responsive behavior documentation

**Consideraciones especiales:**
- Accessibility (WCAG 2.1 AA minimum)
- Performance (optimized CSS bundle)
- Maintainability (clear naming conventions)
- Scalability (easy to extend)
- Brand consistency (matches company identity)`,
      },
      {
        title: "14. Performance y Optimización Final",
        description: "Optimizar la aplicación completa frontend-backend",
        prompt: `Optimiza la aplicación completa para máximo performance:

**Current stack:** [Next.js, TypeScript, Tailwind, etc]
**Backend info:** [API response times, data sizes, etc]

**Performance Optimization Strategy:**

**1. Bundle Optimization:**
- Code splitting estratégico por rutas
- Dynamic imports para heavy components
- Tree shaking optimization
- Bundle analyzer insights y recommendations

**2. Data Fetching Optimization:**
- Request batching donde sea posible
- Prefetching para rutas anticipadas
- Infinite scrolling vs pagination analysis
- Caching strategy optimization

**3. Image y Asset Optimization:**
- Next.js Image component optimization
- WebP/AVIF format conversion
- Responsive image strategies
- CDN integration recommendations

**4. Core Web Vitals Optimization:**
- LCP improvement strategies
- FID optimization techniques
- CLS prevention patterns
- Performance monitoring setup

**5. Lighthouse Audit Implementation:**
- Automated performance testing
- CI/CD integration para performance budgets
- Progressive Web App features
- SEO optimization

**6. Monitoring y Analytics:**
- Real User Monitoring (RUM) setup
- Performance tracking dashboard
- Error tracking con Sentry
- User behavior analytics

**Configuration files:**
- next.config.js optimizado
- webpack optimizations
- Performance budgets
- Monitoring setup

**Expected Results:**
- Lighthouse score 95+
- Core Web Vitals passing
- Bundle size < [target size]
- API response times < 200ms
- Time to Interactive < 3s`,
      },
    ],

    projectTasks: [
      { name: "📋 Definir funcionalidades del e-commerce", completed: false },
      { name: "🎨 Crear mockups y wireframes", completed: false },
      { name: "🏗️ Configurar proyecto Next.js + TypeScript", completed: false },
      { name: "💅 Instalar y configurar Tailwind CSS", completed: false },
      { name: "📦 Crear componente ProductCard", completed: false },
      { name: "🛒 Implementar carrito de compras", completed: false },
      { name: "🔍 Crear página de productos", completed: false },
      { name: "📱 Hacer diseño responsive", completed: false },
      { name: "🔐 Implementar autenticación", completed: false },
      { name: "💳 Crear proceso de checkout", completed: false },
      { name: "🌐 Conectar con API backend", completed: false },
      { name: "🧪 Escribir tests unitarios", completed: false },
      { name: "♿ Validar accesibilidad", completed: false },
      { name: "⚡ Optimizar performance", completed: false },
      { name: "🚀 Configurar CI/CD", completed: false },
      { name: "📊 Implementar analytics", completed: false },
      { name: "🌍 Desplegar en Vercel", completed: false },
      { name: "📝 Documentar el proyecto", completed: false },
      { name: "🤖 Configurar herramientas IA (v0.dev, Copilot)", completed: false },
      { name: "🎨 Generar assets con IA (imágenes, iconos)", completed: false },
      { name: "🧪 Implementar AI Visual Testing", completed: false },
      { name: "⚡ Configurar AI Performance Monitoring", completed: false },
      { name: "📊 Setup AI Analytics y Insights", completed: false },
      { name: "🔄 Optimizar workflow con IA", completed: false },
      // === TAREAS AVANZADAS IA (PASO 2) ===
      { name: "🎯 Configurar AI Content Generation Pipeline", completed: false },
      { name: "🤖 Setup GitHub Copilot Workflows Personalizados", completed: false },
      { name: "🎨 Implementar AI Asset Optimization Pipeline", completed: false },
      { name: "📐 Crear Templates de Componentes con IA", completed: false },
      { name: "🧪 Configurar AI Testing Suite Completa", completed: false },
      { name: "⚡ Implementar AI Performance Optimization", completed: false },
      { name: "📊 Setup Real User Monitoring con IA", completed: false },
      { name: "🎯 Configurar A/B Testing con IA", completed: false },
      { name: "🔍 Implementar AI SEO Optimization", completed: false },
      { name: "🚀 Setup CI/CD con validaciones IA", completed: false },
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
      localStorage.setItem("frontend-course-progress", JSON.stringify(progressData));
    },

    loadProgress() {
      const saved = localStorage.getItem("frontend-course-progress");
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
        localStorage.removeItem("frontend-course-progress");

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
        course: "Frontend Esencial",
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
      a.download = "frontend-course-progress.json";
      a.click();
      URL.revokeObjectURL(url);
    },

    // Dark Mode Functions
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      this.saveDarkMode();
    },

    loadDarkMode() {
      const saved = localStorage.getItem("frontend-course-dark-mode");
      if (saved) {
        this.darkMode = JSON.parse(saved);
      } else {
        // Check system preference
        this.darkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
    },

    saveDarkMode() {
      localStorage.setItem("frontend-course-dark-mode", JSON.stringify(this.darkMode));
    },
  };
}
