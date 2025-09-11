/**
 * 🚀 CourseEngine - Motor Principal de Cursos Interactivos
 *
 * Sistema base para manejar cursos modulares con arquitectura escalable.
 * Diseñado para ser reutilizable entre múltiples cursos (Frontend, Java, Go, etc.)
 *
 * @version 1.0.0
 * @author GitHub Copilot + Supervisión
 * @created 2025-09-11
 */

class CourseEngine {
  constructor(courseConfig) {
    this.config = courseConfig;
    this.currentView = "dashboard";
    this.selectedModule = null;
    this.darkMode = false;
    this.referenceTab = "cheatsheet";

    // Managers
    this.sectionManager = null;
    this.progressTracker = null;
    this.storageManager = null;
    this.contentLoader = null;

    // Data stores
    this.modules = new Map();
    this.sections = new Map();
    this.isInitialized = false;

    // Event listeners
    this.eventListeners = new Map();

    this.init();
  }

  /**
   * Inicialización del sistema de curso
   */
  async init() {
    try {
      console.log(`🚀 Iniciando CourseEngine para: ${this.config.title}`);

      // Cargar managers
      await this.loadManagers();

      // Cargar configuración del curso
      await this.loadCourseData();

      // Configurar interfaz
      this.setupUI();

      // Cargar progreso guardado
      this.loadSavedProgress();

      // Setup auto-save
      this.setupAutoSave();

      this.isInitialized = true;
      console.log(`✅ CourseEngine inicializado correctamente`);
    } catch (error) {
      console.error("❌ Error inicializando CourseEngine:", error);
      throw error;
    }
  }

  /**
   * Cargar todos los managers necesarios
   */
  async loadManagers() {
    // Importar dinámicamente los managers
    const [{ SectionManager }, { ProgressTracker }, { StorageManager }, { ContentLoader }] = await Promise.all([
      import("./section-manager.js"),
      import("./progress-tracker.js"),
      import("./storage-manager.js"),
      import("./content-loader.js"),
    ]);

    this.sectionManager = new SectionManager(this);
    this.progressTracker = new ProgressTracker(this);
    this.storageManager = new StorageManager(this);
    this.contentLoader = new ContentLoader(this);
  }

  /**
   * Cargar datos específicos del curso
   */
  async loadCourseData() {
    try {
      // Cargar módulos del curso
      if (this.config.modulesPath) {
        const modulesData = await this.contentLoader.loadModules(this.config.modulesPath);
        this.modules = new Map(modulesData.map((module) => [module.id, module]));
      }

      // Cargar secciones especiales (referencia, prompts, proyecto)
      if (this.config.sectionsPath) {
        await this.sectionManager.loadSpecialSections(this.config.sectionsPath);
      }
    } catch (error) {
      console.error("❌ Error cargando datos del curso:", error);
      throw error;
    }
  }

  /**
   * Configurar la interfaz de usuario
   */
  setupUI() {
    // Configurar navegación entre vistas
    this.setupViewNavigation();

    // Configurar tema oscuro/claro
    this.setupThemeToggle();

    // Configurar eventos de módulos
    this.setupModuleEvents();

    // Configurar responsive
    this.setupResponsiveHandlers();
  }

  /**
   * Configurar navegación entre vistas principales
   */
  setupViewNavigation() {
    const views = ["dashboard", "modules", "reference", "ai-prompts", "project"];

    views.forEach((view) => {
      const button = document.querySelector(`[data-view="${view}"]`);
      if (button) {
        this.addEventListener(button, "click", () => this.switchView(view));
      }
    });
  }

  /**
   * Cambiar vista principal
   */
  async switchView(viewName) {
    if (this.currentView === viewName) return;

    console.log(`🔄 Cambiando vista: ${this.currentView} → ${viewName}`);

    // Ocultar vista actual
    this.hideCurrentView();

    // Actualizar estado
    this.currentView = viewName;

    // Cargar nueva vista
    await this.loadView(viewName);

    // Mostrar nueva vista
    this.showCurrentView();

    // Actualizar navegación
    this.updateNavigationState();
  }

  /**
   * Cargar contenido de una vista específica
   */
  async loadView(viewName) {
    try {
      switch (viewName) {
        case "dashboard":
          await this.loadDashboard();
          break;
        case "modules":
          await this.loadModules();
          break;
        case "reference":
          await this.loadReference();
          break;
        case "ai-prompts":
          await this.loadAIPrompts();
          break;
        case "project":
          await this.loadProject();
          break;
        default:
          console.warn(`⚠️ Vista desconocida: ${viewName}`);
      }
    } catch (error) {
      console.error(`❌ Error cargando vista ${viewName}:`, error);
    }
  }

  /**
   * Cargar dashboard con estadísticas
   */
  async loadDashboard() {
    const dashboardContainer = document.getElementById("dashboard-content");
    if (!dashboardContainer) return;

    // Obtener estadísticas actuales
    const stats = this.progressTracker.getStats();

    // Generar contenido del dashboard
    const dashboardHTML = await this.sectionManager.renderDashboard(stats);

    dashboardContainer.innerHTML = dashboardHTML;

    // Configurar eventos específicos del dashboard
    this.setupDashboardEvents();
  }

  /**
   * Cargar vista de módulos
   */
  async loadModules() {
    const modulesContainer = document.getElementById("modules-content");
    if (!modulesContainer) return;

    const modulesHTML = await this.sectionManager.renderModules(this.modules);
    modulesContainer.innerHTML = modulesHTML;

    this.setupModulesEvents();
  }

  /**
   * Cargar sección de referencia
   */
  async loadReference() {
    const referenceContainer = document.getElementById("reference-content");
    if (!referenceContainer) return;

    const referenceHTML = await this.sectionManager.renderReference(this.referenceTab);
    referenceContainer.innerHTML = referenceHTML;

    this.setupReferenceEvents();
  }

  /**
   * Cargar prompts de IA
   */
  async loadAIPrompts() {
    const promptsContainer = document.getElementById("ai-prompts-content");
    if (!promptsContainer) return;

    const promptsHTML = await this.sectionManager.renderAIPrompts();
    promptsContainer.innerHTML = promptsHTML;

    this.setupPromptsEvents();
  }

  /**
   * Cargar proyecto
   */
  async loadProject() {
    const projectContainer = document.getElementById("project-content");
    if (!projectContainer) return;

    const projectHTML = await this.sectionManager.renderProject();
    projectContainer.innerHTML = projectHTML;

    this.setupProjectEvents();
  }

  /**
   * Configurar toggle de tema oscuro/claro
   */
  setupThemeToggle() {
    const themeToggle = document.querySelector("[data-theme-toggle]");
    if (themeToggle) {
      this.addEventListener(themeToggle, "click", () => this.toggleDarkMode());
    }

    // Aplicar tema guardado
    this.applyTheme();
  }

  /**
   * Alternar modo oscuro
   */
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.applyTheme();
    this.storageManager.saveTheme(this.darkMode);
  }

  /**
   * Aplicar tema actual
   */
  applyTheme() {
    const body = document.body;
    if (this.darkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }

  /**
   * Cargar progreso guardado
   */
  loadSavedProgress() {
    const savedData = this.storageManager.loadProgress();
    if (savedData) {
      this.progressTracker.loadProgress(savedData);
    }

    const savedTheme = this.storageManager.loadTheme();
    if (savedTheme !== null) {
      this.darkMode = savedTheme;
      this.applyTheme();
    }
  }

  /**
   * Configurar auto-guardado
   */
  setupAutoSave() {
    // Guardar progreso cada 30 segundos
    setInterval(() => {
      this.saveProgress();
    }, 30000);

    // Guardar al cambiar de pestaña/cerrar ventana
    window.addEventListener("beforeunload", () => {
      this.saveProgress();
    });
  }

  /**
   * Guardar progreso actual
   */
  saveProgress() {
    const progressData = this.progressTracker.getProgressData();
    this.storageManager.saveProgress(progressData);
  }

  /**
   * Utilidad para agregar event listeners con cleanup
   */
  addEventListener(element, event, handler) {
    element.addEventListener(event, handler);

    // Guardar para cleanup posterior
    if (!this.eventListeners.has(element)) {
      this.eventListeners.set(element, []);
    }
    this.eventListeners.get(element).push({ event, handler });
  }

  /**
   * Limpiar todos los event listeners
   */
  cleanup() {
    this.eventListeners.forEach((listeners, element) => {
      listeners.forEach(({ event, handler }) => {
        element.removeEventListener(event, handler);
      });
    });
    this.eventListeners.clear();
  }

  /**
   * Ocultar vista actual
   */
  hideCurrentView() {
    const currentElement = document.querySelector(`[data-view-content="${this.currentView}"]`);
    if (currentElement) {
      currentElement.style.display = "none";
    }
  }

  /**
   * Mostrar vista actual
   */
  showCurrentView() {
    const currentElement = document.querySelector(`[data-view-content="${this.currentView}"]`);
    if (currentElement) {
      currentElement.style.display = "block";
    }
  }

  /**
   * Actualizar estado de navegación
   */
  updateNavigationState() {
    // Actualizar botones de navegación
    document.querySelectorAll("[data-view]").forEach((button) => {
      const view = button.getAttribute("data-view");
      if (view === this.currentView) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }

  // Métodos de configuración de eventos específicos (stubs por ahora)
  setupDashboardEvents() {
    console.log("📊 Configurando eventos del dashboard");
  }

  setupModulesEvents() {
    console.log("📚 Configurando eventos de módulos");
  }

  setupReferenceEvents() {
    console.log("🔍 Configurando eventos de referencia");
  }

  setupPromptsEvents() {
    console.log("🤖 Configurando eventos de prompts IA");
  }

  setupProjectEvents() {
    console.log("🚀 Configurando eventos de proyecto");
  }

  setupModuleEvents() {
    console.log("📖 Configurando eventos generales de módulos");
  }

  setupResponsiveHandlers() {
    console.log("📱 Configurando handlers responsive");
  }

  /**
   * Obtener información del curso
   */
  getCourseInfo() {
    return {
      id: this.config.id,
      title: this.config.title,
      currentView: this.currentView,
      progress: this.progressTracker?.getStats(),
      isInitialized: this.isInitialized,
    };
  }
}
