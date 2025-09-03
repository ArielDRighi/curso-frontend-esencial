# 📋 PLAN DE IMPLEMENTACIÓN - CURSO JAVA WEB

## 🎯 OBJETIVO PRINCIPAL

Crear una versión web del curso "Java Spring Boot para Desarrolladores Backend" copiando exactamente la estructura funcional del curso Frontend existente y reemplazando únicamente los contenidos.

## 📂 ARCHIVOS FUENTE (CURSO FRONTEND)

- `d:\Cursos\Frontend\index.html` (2710 líneas) - Dashboard principal funcional
- `d:\Cursos\Frontend\app.js` (2412 líneas) - Lógica Alpine.js completa
- `d:\Cursos\Frontend\styles.css` - Estilos personalizados (si existe)
- `d:\Cursos\Frontend\CURSO_FRONTEND_ESENCIAL.md` - Contenido del curso

## 📂 ARCHIVOS DESTINO (CURSO JAVA)

- `d:\Cursos\Frontend\curso-java-web\` - Nueva carpeta
- Documentación fuente: `CURSO_JAVA_SPRING_BOOT.md`

---

## 🚀 SUBTAREAS DE IMPLEMENTACIÓN

### **SUBTAREA 1: Copia exacta de la estructura base**

**Objetivo:** Crear copia idéntica funcional del dashboard Frontend

**Acciones:**

1. Crear directorio `curso-java-web/`
2. Copiar `index.html` → `curso-java-web/index.html`
3. Copiar `app.js` → `curso-java-web/app.js`
4. Copiar `styles.css` → `curso-java-web/styles.css` (si existe)

**Verificación:**

- [ ] Dashboard se abre correctamente
- [ ] Todas las pestañas funcionan (Dashboard, Módulos, Referencia, Prompts IA, Proyecto)
- [ ] Alpine.js funciona sin errores
- [ ] Navegación entre módulos funciona
- [ ] Modo oscuro funciona

**Resultado esperado:** Dashboard idéntico al Frontend con contenido Frontend

---

### **SUBTAREA 2: Cambiar branding y identidad visual**

**Objetivo:** Adaptar la interfaz visual para Java sin romper funcionalidad

**Acciones en `index.html`:**

1. Cambiar título: "Frontend Esencial" → "Java Spring Boot para Desarrolladores Backend"
2. Cambiar colores principales: azul (#2563eb) → rojo (#dc2626) y naranja (#ea580c)
3. Cambiar emoji principal: 🎨 → ☕
4. Actualizar meta tags y descripción
5. Cambiar clase CSS `gradient-bg` a tema Java

**Acciones en `app.js`:**

1. Cambiar keys de localStorage: "frontend-course" → "java-course"
2. Actualizar títulos en funciones de progreso
3. Cambiar nombre del curso en exportaciones

**Verificación:**

- [ ] Colores cambiados correctamente (rojo/naranja)
- [ ] Título actualizado en header
- [ ] Emoji Java visible
- [ ] localStorage independiente del curso Frontend

**Resultado esperado:** Dashboard con identidad visual Java pero contenido Frontend

---

### **SUBTAREA 3: Reemplazar módulos de contenido**

**Objetivo:** Sustituir los 9 módulos Frontend por los 10 módulos Java

**Acciones en `app.js`:**

1. Reemplazar array `modules` completo con los 10 módulos de `CURSO_JAVA_SPRING_BOOT.md`:

   - Módulo 0: Mindset Java para Desarrolladores Backend
   - Módulo 1: Setup y Configuración Spring Boot
   - Módulo 2: Fundamentos Java para Backend Developers
   - Módulo 3: Spring Framework Core (IoC, DI, AOP)
   - Módulo 4: Spring Boot Web & REST APIs
   - Módulo 5: Spring Data JPA & Base de Datos
   - Módulo 6: Spring Security & Autenticación
   - Módulo 7: Testing en Spring Boot
   - Módulo 8: Deployment & Production
   - Módulo 9: Proyecto Final: API REST Completa

2. Mantener estructura exacta:
   ```javascript
   {
     emoji: "☕",
     title: "Módulo X: ...",
     shortTitle: "...",
     objective: "...",
     completed: false,
     sections: [...]
   }
   ```

**Verificación:**

- [ ] 10 módulos Java visibles en la interfaz
- [ ] Navegación entre módulos funciona
- [ ] Contenido se muestra correctamente
- [ ] Progreso se guarda por módulo
- [ ] Emojis apropiados para cada módulo

**Resultado esperado:** Dashboard con módulos Java completos

---

### **SUBTAREA 4: Adaptar pestaña Referencias**

**Objetivo:** Reemplazar cheat sheets y referencias Frontend por Java/Spring Boot

**Acciones en `app.js`:**

1. Reemplazar contenido de `referenceTab` secciones:

   - "cheatsheet" → Cheat sheet Java/Spring Boot
   - "guides" → Guías migración Node.js a Java
   - "tools" → Herramientas Java/Spring Boot
   - "troubleshooting" → Solución problemas Java/Spring

2. Actualizar contenido HTML para referencias Java

**Verificación:**

- [ ] Cheat sheet Java/Spring Boot visible
- [ ] Guías de migración Node.js → Java
- [ ] Herramientas Java listadas
- [ ] Troubleshooting específico Java

**Resultado esperado:** Referencias específicas para desarrolladores Java

---

### **SUBTAREA 5: Adaptar pestaña Prompts IA**

**Objetivo:** Reemplazar prompts Frontend por prompts migración Node.js a Java

**Acciones en `app.js`:**

1. Reemplazar array de prompts IA con los 6 prompts de migración:
   - Prompt 1: Migración de API Express a Spring Boot
   - Prompt 2: Conversión de middleware Node.js a Spring Filters
   - Prompt 3: Migración de autenticación JWT Node.js a Spring Security
   - Prompt 4: Conversión de TypeORM a Spring Data JPA
   - Prompt 5: Migración de tests Jest/Supertest a JUnit/MockMVC
   - Prompt 6: Conversión de deployment Node.js a Spring Boot

**Verificación:**

- [ ] 6 prompts de migración visibles
- [ ] Botones de copia funcionan
- [ ] Contenido específico para transición Node.js → Java

**Resultado esperado:** Prompts IA para migración backend

---

### **SUBTAREA 6: Adaptar pestaña Proyecto**

**Objetivo:** Reemplazar proyecto Frontend por proyecto Spring Boot

**Acciones en `app.js`:**

1. Reemplazar `projectTasks` con tareas del proyecto Java:

   - Setup del proyecto Spring Boot
   - Configuración de base de datos
   - Implementación de entidades JPA
   - Creación de repositorios
   - Desarrollo de controllers REST
   - Implementación de seguridad
   - Testing completo
   - Deployment

2. Actualizar descripción del proyecto
3. Cambiar tecnologías del stack

**Verificación:**

- [ ] Tareas del proyecto Java visibles
- [ ] Progreso de tareas se guarda
- [ ] Stack tecnológico Java mostrado
- [ ] Descripción del proyecto actualizada

**Resultado esperado:** Proyecto final Spring Boot

---

### **SUBTAREA 7: Ajustes finales y optimización**

**Objetivo:** Pulir detalles y asegurar funcionamiento independiente

**Acciones:**

1. Verificar todas las keys de localStorage son independientes
2. Ajustar textos y mensajes de la interfaz
3. Verificar funciones de exportación de progreso
4. Probar funcionalidad completa
5. Crear README.md para el curso Java

**Verificación:**

- [ ] Curso Java totalmente independiente del Frontend
- [ ] Todas las funciones operativas
- [ ] Progreso se guarda correctamente
- [ ] Exportación de progreso funciona
- [ ] No hay referencias al curso Frontend

**Resultado esperado:** Curso Java web completamente funcional e independiente

---

## ✅ CRITERIOS DE ÉXITO

### Funcionalidad técnica:

- [ ] Dashboard se carga sin errores JavaScript
- [ ] Todas las pestañas navegables
- [ ] Progreso se guarda en localStorage
- [ ] Modo oscuro funciona
- [ ] Responsive design mantiene funcionalidad

### Contenido:

- [ ] 10 módulos Java completos con contenido técnico
- [ ] Referencias específicas Java/Spring Boot
- [ ] Prompts IA para migración Node.js → Java
- [ ] Proyecto final Spring Boot

### Independencia:

- [ ] No interfiere con curso Frontend existente
- [ ] localStorage independiente
- [ ] Branding Java consistente

---

## 🔄 ORDEN DE EJECUCIÓN RECOMENDADO

1. **SUBTAREA 1** → Base funcional
2. **SUBTAREA 2** → Identidad visual
3. **SUBTAREA 3** → Contenido principal
4. **SUBTAREA 4** → Referencias
5. **SUBTAREA 5** → Prompts IA
6. **SUBTAREA 6** → Proyecto
7. **SUBTAREA 7** → Ajustes finales

**Estimación total:** 7 subtareas, cada una verificable independientemente.

---

_Plan creado el 2 de septiembre de 2025_
_Objetivo: Curso Java web funcional copiando exactamente la estructura del curso Frontend_
