/**
 * 🚀 Aplicación Principal del Curso Go
 *
 * Inicializa y configura el motor del curso sin módulos ES6
 * para compatibilidad con file:// y GitHub Pages
 */

// Variables globales
let courseEngine;

/**
 * Inicializar la aplicación cuando el DOM esté listo
 */
document.addEventListener("DOMContentLoaded", async () => {
  try {
    console.log("🚀 Iniciando aplicación del curso...");

    // Verificar que la configuración esté disponible
    if (typeof courseConfig === "undefined") {
      throw new Error("Configuración del curso no encontrada");
    }

    // Verificar que CourseEngine esté disponible
    if (typeof CourseEngine === "undefined") {
      throw new Error("CourseEngine no encontrado");
    }

    // Crear instancia del motor del curso
    courseEngine = new CourseEngine(courseConfig);

    // Hacer disponible globalmente para debugging
    window.courseEngine = courseEngine;
    window.courseConfig = courseConfig;

    // Inicializar el curso
    await courseEngine.initialize();

    // Configurar eventos específicos
    setupCourseEventListeners();

    console.log("✅ Curso inicializado exitosamente");
  } catch (error) {
    console.error("❌ Error inicializando el curso:", error);
    showErrorFallback(error);
  }
});

/**
 * Configurar event listeners específicos del curso
 */
function setupCourseEventListeners() {
  // Navegación por teclado
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.metaKey) return; // Evitar conflictos con atajos del navegador

    switch (e.key) {
      case "1":
        courseEngine.switchView("dashboard");
        break;
      case "2":
        courseEngine.switchView("modules");
        break;
      case "3":
        courseEngine.switchView("project");
        break;
      case "4":
        courseEngine.switchView("reference");
        break;
      case "5":
        courseEngine.switchView("prompts");
        break;
    }
  });

  // Event listeners para acciones específicas del dashboard
  document.querySelectorAll(".action-card").forEach((card) => {
    card.addEventListener("click", () => {
      const action = card.getAttribute("data-action");
      handleActionCard(action);
    });
  });
}

/**
 * Manejar clicks en las tarjetas de acción
 */
function handleActionCard(action) {
  switch (action) {
    case "continue-learning":
      courseEngine.switchView("modules");
      break;
    case "go-playground":
      window.open("https://play.golang.org/", "_blank");
      break;
    case "project-overview":
      courseEngine.switchView("project");
      break;
    case "go-docs":
      window.open("https://golang.org/doc/", "_blank");
      break;
  }
}

/**
 * Mostrar pantalla de error
 */
function showErrorFallback(error) {
  const loadingScreen = document.getElementById("loadingScreen");
  if (loadingScreen) {
    loadingScreen.style.display = "none";
  }

  const mainContent = document.getElementById("cursoContainer") || document.body;
  mainContent.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; padding: 2rem; text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
      <div style="font-size: 4rem; margin-bottom: 1rem;">❌</div>
      <h2 style="color: #dc2626; margin-bottom: 1rem;">Error al cargar el curso</h2>
      <p style="color: #6b7280; margin-bottom: 2rem; max-width: 500px;">${error.message}</p>
      <button onclick="location.reload()" 
              style="background: #3b82f6; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 0.5rem; cursor: pointer; font-size: 1rem;">
        � Recargar página
      </button>
      <details style="margin-top: 2rem; text-align: left;">
        <summary style="cursor: pointer; color: #6b7280;">Detalles técnicos</summary>
        <pre style="background: #f3f4f6; padding: 1rem; border-radius: 0.25rem; overflow: auto; margin-top: 0.5rem; font-size: 0.875rem;">${
          error.stack || error.message
        }</pre>
      </details>
    </div>
  `;
}

/**
 * Manejar errores globales
 */
window.addEventListener("error", (event) => {
  console.error("❌ Error global:", event.error);
});

window.addEventListener("unhandledrejection", (event) => {
  console.error("❌ Promise rechazada:", event.reason);
});
