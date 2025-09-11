/**
 * 🎯 CourseEngine - Motor Principal del Curso (Standalone Version)
 *
 * Versión standalone que incluye todos los managers sin ES6 modules
 * para compatibilidad con file:// y GitHub Pages
 *
 * @version 1.0.0
 * @author GitHub Copilot + Supervisión
 * @created 2025-09-11
 */

// =============================================================================
// SECTION MANAGER
// =============================================================================
class SectionManager {
  constructor(courseEngine) {
    this.courseEngine = courseEngine;
    this.config = courseEngine.config;
    this.sections = new Map();
    this.templates = new Map();
    this.renderCache = new Map();
  }

  async loadSpecialSections(sectionsPath) {
    try {
      const sectionsConfig = await this.loadSectionsConfig(sectionsPath);
      this.sections = new Map(sectionsConfig.map((section) => [section.id, section]));
      console.log(`📁 Cargadas ${this.sections.size} secciones especiales`);
    } catch (error) {
      console.error("❌ Error cargando secciones especiales:", error);
      throw error;
    }
  }

  async loadSectionsConfig(sectionsPath) {
    return [
      {
        id: "reference",
        title: "Referencia Rápida",
        tabs: ["cheatsheet", "architecture", "migration"],
      },
      {
        id: "ai-prompts",
        title: "Prompts IA",
        categories: ["setup", "development", "testing", "deployment"],
      },
      {
        id: "project",
        title: "Proyecto Integrador",
        phases: ["basic", "advanced"],
      },
    ];
  }

  async renderDashboard(stats) {
    const cacheKey = `dashboard-${JSON.stringify(stats)}`;
    if (this.renderCache.has(cacheKey)) {
      return this.renderCache.get(cacheKey);
    }

    const html = `
      <div class="mb-8">
        <h2 class="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Dashboard del Curso
        </h2>
        <div class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white mb-8">
          <h3 class="text-xl font-semibold mb-2">🎯 ${this.config.title || "Objetivo General"}</h3>
          <p class="text-blue-100">
            ${this.config.subtitle || this.config.description}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        ${this.renderStatsCards(stats)}
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md mb-8">
        <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          📊 Progreso del Curso
        </h3>
        ${this.renderProgressChart(stats)}
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
        <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          📚 Vista Rápida de Módulos
        </h3>
        ${this.renderModulesOverview()}
      </div>
    `;

    this.renderCache.set(cacheKey, html);
    return html;
  }

  renderStatsCards(stats) {
    const cards = [
      {
        title: "Módulos Completados",
        value: `${stats.completedModules || 0}/${stats.totalModules || 6}`,
        icon: "📚",
        color: "blue",
      },
      {
        title: "Progreso General",
        value: `${Math.round(stats.overallProgress || 0)}%`,
        icon: "🎯",
        color: "green",
      },
      {
        title: "Tiempo Estimado",
        value: `${stats.estimatedHours || 35}h restantes`,
        icon: "⏱️",
        color: "purple",
      },
    ];

    return cards
      .map(
        (card) => `
      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-colors duration-300">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400">${card.title}</p>
            <p class="text-2xl font-bold text-gray-900 dark:text-gray-100">${card.value}</p>
          </div>
          <div class="text-3xl">${card.icon}</div>
        </div>
      </div>
    `
      )
      .join("");
  }

  renderProgressChart(stats) {
    const progress = stats.overallProgress || 0;
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = `${(progress / 100) * circumference} ${circumference}`;

    return `
      <div class="flex items-center justify-center">
        <div class="relative">
          <svg class="w-32 h-32 transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="45"
              stroke="currentColor"
              stroke-width="8"
              fill="transparent"
              class="text-gray-300 dark:text-gray-600"
            />
            <circle
              cx="64"
              cy="64"
              r="45"
              stroke="currentColor"
              stroke-width="8"
              fill="transparent"
              stroke-dasharray="${strokeDasharray}"
              stroke-linecap="round"
              class="text-blue-500 transition-all duration-300"
            />
          </svg>
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-2xl font-bold text-gray-800 dark:text-gray-200">
              ${Math.round(progress)}%
            </span>
          </div>
        </div>
      </div>
    `;
  }

  renderModulesOverview() {
    const modules = Array.from(this.courseEngine.modules.values());

    if (modules.length === 0) {
      return `
        <div class="text-center py-8">
          <p class="text-gray-500 dark:text-gray-400">
            ⏳ Cargando módulos del curso...
          </p>
        </div>
      `;
    }

    return `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${modules
          .map(
            (module) => `
          <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
               onclick="courseEngine.switchView('modules'); courseEngine.selectModule('${module.id}')">
            <div class="flex items-center space-x-3">
              <span class="text-2xl">${module.emoji || "📖"}</span>
              <div>
                <h4 class="font-medium text-gray-800 dark:text-gray-200">
                  ${module.title.replace(/^\d+\.\d+\s*/, "")}
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  ${module.sections?.length || 0} secciones
                </p>
              </div>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }

  async renderModules(modules) {
    const modulesList = Array.from(modules.values());

    return `
      <div class="flex flex-col lg:flex-row gap-6">
        <div class="lg:w-1/3">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
                📚 Módulos del Curso
              </h3>
            </div>
            <div class="divide-y divide-gray-200 dark:divide-gray-700">
              ${modulesList.map((module) => this.renderModuleItem(module)).join("")}
            </div>
          </div>
        </div>

        <div class="lg:w-2/3">
          <div id="module-content" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div class="text-center py-12">
              <div class="text-6xl mb-4">📖</div>
              <h3 class="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                Selecciona un Módulo
              </h3>
              <p class="text-gray-500 dark:text-gray-500">
                Elige un módulo de la lista para ver su contenido
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderModuleItem(module) {
    const isCompleted = module.completed || false;

    return `
      <div class="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"
           data-module-id="${module.id}"
           onclick="courseEngine.selectModule('${module.id}')">
        <div class="flex items-start space-x-3">
          <span class="text-2xl">${module.emoji || "📖"}</span>
          <div class="flex-1">
            <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-1">
              ${module.title}
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
              ${module.description || "Descripción del módulo"}
            </p>
            <div class="flex items-center justify-between">
              <span class="text-xs text-gray-500 dark:text-gray-500">
                ${module.sections?.length || 0} secciones • ${module.estimatedHours || 0}h
              </span>
              ${
                isCompleted
                  ? '<span class="text-xs text-green-600 dark:text-green-400">✅ Completado</span>'
                  : '<span class="text-xs text-yellow-600 dark:text-yellow-400">⏳ Pendiente</span>'
              }
            </div>
          </div>
        </div>
      </div>
    `;
  }

  clearRenderCache() {
    this.renderCache.clear();
    console.log("🧹 Cache de renderizado limpiado");
  }
}

// =============================================================================
// PROGRESS TRACKER
// =============================================================================
class ProgressTracker {
  constructor(courseEngine) {
    this.courseEngine = courseEngine;
    this.stats = {
      overallProgress: 0,
      completedModules: 0,
      totalModules: 0,
      estimatedHours: 0,
      studyTime: 0,
    };
  }

  updateProgress() {
    const modules = Array.from(this.courseEngine.modules.values());
    this.stats.totalModules = modules.length;
    this.stats.completedModules = modules.filter((m) => m.completed).length;
    this.stats.overallProgress =
      this.stats.totalModules > 0 ? (this.stats.completedModules / this.stats.totalModules) * 100 : 0;
    this.stats.estimatedHours = modules.reduce((total, module) => total + (module.estimatedHours || 0), 0);
  }

  getStats() {
    this.updateProgress();
    return { ...this.stats };
  }

  markModuleCompleted(moduleId) {
    const module = this.courseEngine.modules.get(moduleId);
    if (module) {
      module.completed = true;
      this.updateProgress();
    }
  }
}

// =============================================================================
// STORAGE MANAGER
// =============================================================================
class StorageManager {
  constructor(courseEngine) {
    this.courseEngine = courseEngine;
    this.storageKey = `course_${courseEngine.config?.id || "default"}`;
  }

  save(data) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(data));
      return true;
    } catch (error) {
      console.warn("❌ No se pudo guardar en localStorage:", error);
      return false;
    }
  }

  load() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.warn("❌ No se pudo cargar desde localStorage:", error);
      return null;
    }
  }

  clear() {
    localStorage.removeItem(this.storageKey);
  }
}

// =============================================================================
// CONTENT LOADER
// =============================================================================
class ContentLoader {
  constructor(courseEngine) {
    this.courseEngine = courseEngine;
    this.cache = new Map();
  }

  async loadMarkdownContent(filePath) {
    if (this.cache.has(filePath)) {
      return this.cache.get(filePath);
    }

    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const content = await response.text();
      this.cache.set(filePath, content);
      return content;
    } catch (error) {
      console.error(`❌ Error cargando ${filePath}:`, error);
      return `# Error\n\nNo se pudo cargar el contenido: ${error.message}`;
    }
  }

  parseMarkdown(content) {
    // Conversión básica de Markdown a HTML
    return content
      .replace(/^# (.*$)/gim, "<h1>$1</h1>")
      .replace(/^## (.*$)/gim, "<h2>$1</h2>")
      .replace(/^### (.*$)/gim, "<h3>$1</h3>")
      .replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>")
      .replace(/\*(.*)\*/gim, "<em>$1</em>")
      .replace(/```(\w+)?\n([\s\S]*?)```/gim, '<pre><code class="language-$1">$2</code></pre>')
      .replace(/`([^`]+)`/gim, "<code>$1</code>")
      .replace(/\n/gim, "<br>");
  }
}

// =============================================================================
// COURSE ENGINE MAIN CLASS
// =============================================================================
class CourseEngine {
  constructor(config) {
    this.config = config;
    this.modules = new Map();
    this.currentView = "dashboard";
    this.currentModule = null;
    this.currentSection = null;
    this.isInitialized = false;

    // Managers
    this.sectionManager = null;
    this.progressTracker = null;
    this.storageManager = null;
    this.contentLoader = null;
  }

  async initialize() {
    try {
      console.log("🚀 Inicializando CourseEngine...");

      this.loadManagers();
      this.loadModules();
      await this.renderInitialView();
      this.setupEventListeners();

      this.isInitialized = true;
      console.log("✅ CourseEngine inicializado correctamente");
    } catch (error) {
      console.error("❌ Error inicializando CourseEngine:", error);
      throw error;
    }
  }

  loadManagers() {
    this.sectionManager = new SectionManager(this);
    this.progressTracker = new ProgressTracker(this);
    this.storageManager = new StorageManager(this);
    this.contentLoader = new ContentLoader(this);
  }

  loadModules() {
    if (this.config.modules) {
      this.config.modules.forEach((moduleConfig) => {
        this.modules.set(moduleConfig.id, {
          ...moduleConfig,
          emoji: this.getModuleEmoji(moduleConfig.title),
          completed: false,
        });
      });

      console.log(`📚 Cargados ${this.modules.size} módulos`);
    }
  }

  getModuleEmoji(title) {
    if (title.includes("Introducción")) return "📋";
    if (title.includes("Backend")) return "🌐";
    if (title.includes("PostgreSQL") || title.includes("Datos")) return "🗄️";
    if (title.includes("Seguridad")) return "🔐";
    if (title.includes("Despliegue")) return "🚀";
    if (title.includes("Genia") || title.includes("IA")) return "🤖";
    return "📖";
  }

  async renderInitialView() {
    // Ocultar pantalla de carga
    const loadingScreen = document.getElementById("loadingScreen");
    if (loadingScreen) {
      loadingScreen.style.display = "none";
    }

    // Mostrar contenedor principal
    const cursoContainer = document.getElementById("cursoContainer");
    if (cursoContainer) {
      cursoContainer.style.display = "block";
    }

    // El HTML ya tiene secciones predefinidas, solo necesitamos activar el dashboard
    const dashboardSection = document.getElementById("dashboardSection");
    if (dashboardSection) {
      // Asegurar que solo el dashboard esté visible
      document.querySelectorAll(".content-section").forEach((section) => {
        section.classList.remove("active");
      });
      dashboardSection.classList.add("active");

      // Configurar navegación
      this.setupNavigationButtons();

      console.log("✅ Vista inicial renderizada (Dashboard)");
      return;
    }

    throw new Error("❌ No se encontró la sección del dashboard");
  }

  setupNavigationButtons() {
    console.log("🔧 Configurando botones de navegación...");

    // Configurar botones de navegación
    const navButtons = document.querySelectorAll(".nav-btn[data-section]");
    console.log(`📱 Encontrados ${navButtons.length} botones de navegación`);

    navButtons.forEach((button) => {
      const section = button.getAttribute("data-section");
      console.log(`🔘 Configurando botón: ${section}`);

      button.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(`🖱️ Click en botón: ${section}`);
        this.switchView(section);
      });
    });

    // Configurar botón de comenzar aprendizaje
    const startBtn = document.getElementById("startLearningBtn");
    if (startBtn) {
      console.log("🚀 Configurando botón de comenzar aprendizaje");
      startBtn.addEventListener("click", () => {
        console.log("🖱️ Click en comenzar aprendizaje");
        this.switchView("modules");
      });
    }

    // Marcar dashboard como activo
    navButtons.forEach((btn) => btn.classList.remove("active"));
    const dashboardBtn = document.querySelector('.nav-btn[data-section="dashboard"]');
    if (dashboardBtn) {
      dashboardBtn.classList.add("active");
      console.log("✅ Dashboard marcado como activo");
    }
  }

  async switchView(viewName) {
    console.log(`🔄 Cambiando a vista: ${viewName}`);
    this.currentView = viewName;

    // Ocultar todas las secciones
    document.querySelectorAll(".content-section").forEach((section) => {
      section.classList.remove("active");
    });

    // Actualizar navegación
    document.querySelectorAll(".nav-btn").forEach((btn) => {
      btn.classList.remove("active");
    });

    const activeButton = document.querySelector(`.nav-btn[data-section="${viewName}"]`);
    if (activeButton) {
      activeButton.classList.add("active");
      console.log(`✅ Botón ${viewName} marcado como activo`);
    }

    // Mostrar la sección correspondiente
    const targetSection = document.getElementById(`${viewName}Section`);
    if (targetSection) {
      targetSection.classList.add("active");
      console.log(`✅ Sección ${viewName}Section mostrada`);

      // Renderizar contenido específico si es necesario
      switch (viewName) {
        case "modules":
          console.log("📚 Renderizando contenido de módulos...");
          await this.renderModulesContent();
          break;
        case "reference":
          console.log("📖 Renderizando contenido de referencia...");
          await this.renderReferenceContent();
          break;
        case "prompts":
          console.log("🤖 Renderizando contenido de prompts...");
          await this.renderPromptsContent();
          break;
        case "project":
          console.log("🚀 Renderizando contenido de proyecto...");
          await this.renderProjectContent();
          break;
      }
    } else {
      console.warn(`❌ Sección ${viewName}Section no encontrada`);
    }
  }

  updateActiveTab(viewName) {
    // Actualizar tabs activos
    document.querySelectorAll("[data-tab]").forEach((tab) => {
      const tabView = tab.getAttribute("data-tab");
      if (tabView === viewName) {
        tab.classList.add("border-blue-500", "text-blue-600");
        tab.classList.remove("text-gray-600", "hover:text-blue-600");
      } else {
        tab.classList.remove("border-blue-500", "text-blue-600");
        tab.classList.add("text-gray-600", "hover:text-blue-600");
      }
    });
  }

  async renderModulesContent() {
    const modulesGrid = document.getElementById("modulesGrid");
    if (!modulesGrid) return;

    const modules = Array.from(this.modules.values());

    if (modules.length === 0) {
      modulesGrid.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
          <h3>📚 Cargando módulos...</h3>
          <p>Por favor espera mientras se cargan los módulos del curso.</p>
        </div>
      `;
      return;
    }

    const modulesHtml = modules
      .map(
        (module, index) => `
      <div style="
        border: 1px solid #e2e8f0;
        border-radius: 0.5rem;
        padding: 1.5rem;
        margin-bottom: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        background: white;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      " 
      onmouseover="this.style.boxShadow='0 4px 12px rgba(0,0,0,0.15)'; this.style.transform='translateY(-2px)'"
      onmouseout="this.style.boxShadow='0 1px 3px rgba(0,0,0,0.1)'; this.style.transform='translateY(0)'"
      onclick="courseEngine.selectModule('${module.id}')">
        
        <div style="display: flex; align-items: start; gap: 1rem;">
          <div style="font-size: 2.5rem;">${module.emoji || "📖"}</div>
          <div style="flex: 1;">
            <h3 style="font-size: 1.25rem; font-weight: 600; margin: 0 0 0.5rem 0; color: #1f2937;">
              ${module.title}
            </h3>
            <p style="color: #6b7280; margin: 0 0 1rem 0; line-height: 1.5;">
              ${module.description}
            </p>
            <div style="display: flex; gap: 1rem; font-size: 0.875rem; color: #9ca3af; margin-bottom: 1rem;">
              <span>📚 ${module.sections?.length || 0} secciones</span>
              <span>⏱️ ${module.estimatedHours || 0}h estimadas</span>
            </div>
            <div style="background: #f3f4f6; border-radius: 0.25rem; height: 8px; overflow: hidden;">
              <div style="
                background: #00ADD8; 
                height: 100%; 
                width: ${module.completed ? 100 : 0}%; 
                transition: width 0.3s ease;
              "></div>
            </div>
            <div style="margin-top: 0.5rem; font-size: 0.875rem; color: #6b7280;">
              ${module.completed ? "✅ Completado" : "⏳ Pendiente"}
            </div>
          </div>
        </div>
      </div>
    `
      )
      .join("");

    modulesGrid.innerHTML = modulesHtml;
  }

  async renderReferenceContent() {
    const referenceContent = document.getElementById("referenceContent");
    if (!referenceContent) return;

    referenceContent.innerHTML = `
      <div class="reference-tabs">
        <button class="tab-btn active" data-tab="cheatsheet">📋 Cheatsheet</button>
        <button class="tab-btn" data-tab="architecture">🏗️ Arquitectura</button>
        <button class="tab-btn" data-tab="migration">🔄 Migración</button>
      </div>
      <div class="reference-content">
        <h3>📋 Cheatsheet de Go</h3>
        <p>⏳ Contenido de referencia en desarrollo...</p>
      </div>
    `;
  }

  async renderPromptsContent() {
    const promptsContent = document.getElementById("promptsContent");
    if (!promptsContent) return;

    promptsContent.innerHTML = `
      <div class="prompts-grid">
        <div class="prompt-category">
          <h3>🔄 Migración desde TypeScript</h3>
          <div class="prompt-card">
            <h4>Comparativa Técnica</h4>
            <p>"Genia, necesito un informe técnico comparativo entre Node.js/TypeScript y Go..."</p>
          </div>
        </div>
        <div class="prompt-category">
          <h3>🏗️ Arquitectura de Proyectos</h3>
          <div class="prompt-card">
            <h4>Estructura de Proyecto</h4>
            <p>"Genia, diseña una estructura de proyecto Go para una aplicación backend..."</p>
          </div>
        </div>
      </div>
    `;
  }

  async renderProjectContent() {
    const projectContent = document.getElementById("projectContent");
    if (!projectContent) return;

    projectContent.innerHTML = `
      <div class="project-phases">
        <div class="phase-card">
          <h3>🏗️ Fase 1: Arquitectura y Configuración</h3>
          <p>Dirigir a la IA en diseño de arquitectura y configuración del proyecto</p>
        </div>
        <div class="phase-card">
          <h3>🔐 Fase 2: Autenticación con IA</h3>
          <p>Instruir implementación JWT y supervisar middleware de autenticación</p>
        </div>
        <div class="phase-card">
          <h3>📊 Fase 3: CRUD con Supervisión</h3>
          <p>Dirigir creación de modelos y supervisar endpoints REST</p>
        </div>
        <div class="phase-card">
          <h3>🧪 Fase 4: Testing y Deployment</h3>
          <p>Instruir pruebas y dirigir configuración de deployment</p>
        </div>
      </div>
    `;
  }

  async selectModule(moduleId) {
    const module = this.modules.get(moduleId);
    if (!module) {
      console.error(`❌ Módulo ${moduleId} no encontrado`);
      return;
    }

    this.currentModule = moduleId;
    console.log(`📖 Seleccionado módulo: ${module.title}`);

    // Buscar el contenedor de contenido del módulo
    let moduleContentSection = document.getElementById("moduleContentSection");
    if (!moduleContentSection) {
      // Si no existe, crearlo dinámicamente
      moduleContentSection = document.createElement("div");
      moduleContentSection.id = "moduleContentSection";
      moduleContentSection.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        z-index: 1000;
        overflow-y: auto;
        padding: 2rem;
      `;
      document.body.appendChild(moduleContentSection);
    }

    try {
      const content = await this.renderModuleDetail(module);
      moduleContentSection.innerHTML = content;
      moduleContentSection.style.display = "block";
    } catch (error) {
      console.error(`❌ Error cargando módulo ${moduleId}:`, error);
      moduleContentSection.innerHTML = `
        <div style="text-align: center; padding: 3rem;">
          <h3 style="color: #dc2626; font-size: 1.5rem; margin-bottom: 1rem;">❌ Error</h3>
          <p style="color: #6b7280;">No se pudo cargar el módulo</p>
          <button onclick="courseEngine.closeModule()" style="
            margin-top: 1rem;
            padding: 0.5rem 1rem;
            background: #3b82f6;
            color: white;
            border: none;
            border-radius: 0.25rem;
            cursor: pointer;
          ">← Volver a Módulos</button>
        </div>
      `;
    }
  }

  closeModule() {
    const moduleContentSection = document.getElementById("moduleContentSection");
    if (moduleContentSection) {
      moduleContentSection.style.display = "none";
    }
    this.currentModule = null;
  }

  async renderModuleDetail(module) {
    const sectionsHtml = module.sections
      ? module.sections
          .map((section, index) => {
            return `
            <div style="
              border: 1px solid #e5e7eb;
              border-radius: 0.5rem;
              padding: 1.5rem;
              margin-bottom: 1rem;
              cursor: pointer;
              transition: all 0.3s ease;
              background: white;
            "
            onmouseover="this.style.boxShadow='0 4px 12px rgba(0,0,0,0.1)'"
            onmouseout="this.style.boxShadow='none'"
            onclick="courseEngine.selectSection('${module.id}', '${section.id}')">
              
              <div style="display: flex; align-items: start; gap: 1rem;">
                <div style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: 2rem;
                  height: 2rem;
                  border-radius: 50%;
                  background: #dbeafe;
                  color: #2563eb;
                  font-weight: 600;
                  font-size: 0.875rem;
                ">
                  ${index + 1}
                </div>
                <div style="flex: 1;">
                  <h4 style="
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: #1f2937;
                    margin: 0 0 0.5rem 0;
                  ">
                    ${section.title}
                  </h4>
                  <p style="
                    color: #6b7280;
                    margin: 0 0 0.75rem 0;
                    line-height: 1.5;
                  ">
                    ${section.concepts || "Conceptos del módulo"}
                  </p>
                  <div style="
                    display: flex;
                    gap: 1rem;
                    font-size: 0.875rem;
                    color: #9ca3af;
                  ">
                    <span>📖 ${section.type || "content"}</span>
                    <span>⏱️ ${section.duration || "60 min"}</span>
                  </div>
                </div>
              </div>
            </div>
          `;
          })
          .join("")
      : '<p style="color: #9ca3af; text-align: center; padding: 2rem;">No hay secciones disponibles</p>';

    return `
      <div style="max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 2rem;">
          <button onclick="courseEngine.closeModule()" style="
            margin-bottom: 1rem;
            padding: 0.5rem 1rem;
            background: #f3f4f6;
            border: 1px solid #d1d5db;
            border-radius: 0.25rem;
            cursor: pointer;
            font-size: 0.875rem;
          ">← Volver a Módulos</button>
          
          <h2 style="
            font-size: 1.875rem;
            font-weight: 700;
            color: #111827;
            margin: 0 0 0.5rem 0;
          ">
            ${module.emoji} ${module.title}
          </h2>
          <p style="
            color: #6b7280;
            margin: 0 0 1rem 0;
            line-height: 1.6;
          ">
            ${module.description}
          </p>
          <div style="
            display: flex;
            gap: 1rem;
            font-size: 0.875rem;
            color: #9ca3af;
          ">
            <span>📚 ${module.sections?.length || 0} secciones</span>
            <span>⏱️ ${module.estimatedHours || 0} horas estimadas</span>
          </div>
        </div>

        <div>
          <h3 style="
            font-size: 1.25rem;
            font-weight: 600;
            color: #111827;
            margin: 0 0 1rem 0;
          ">📋 Secciones del Módulo</h3>
          ${sectionsHtml}
        </div>
      </div>
    `;
  }

  async selectSection(moduleId, sectionId) {
    const module = this.modules.get(moduleId);
    if (!module) return;

    const section = module.sections?.find((s) => s.id === sectionId);
    if (!section) return;

    this.currentSection = sectionId;
    console.log(`📄 Cargando sección: ${section.title}`);

    const moduleContent = document.getElementById("module-content");
    if (!moduleContent) return;

    try {
      let content = "";

      if (section.contentFile) {
        const contentPath = `content/${section.contentFile}`;
        const markdownContent = await this.contentLoader.loadMarkdownContent(contentPath);
        content = `
          <div>
            <div class="mb-6">
              <button onclick="courseEngine.selectModule('${moduleId}')" 
                      class="text-blue-600 hover:text-blue-800 mb-4">
                ← Volver al módulo
              </button>
              <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                ${section.title}
              </h2>
              <div class="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-500 mb-4">
                <span>📖 ${section.type || "content"}</span>
                <span>⏱️ ${section.duration || "60 min"}</span>
              </div>
            </div>
            
            <div class="prose dark:prose-invert max-w-none">
              ${this.contentLoader.parseMarkdown(markdownContent)}
            </div>
          </div>
        `;
      } else {
        content = `
          <div class="text-center py-12">
            <h3 class="text-xl font-semibold text-gray-600 dark:text-gray-400">
              📄 ${section.title}
            </h3>
            <p class="text-gray-500 dark:text-gray-500 mt-2">
              Contenido en desarrollo...
            </p>
          </div>
        `;
      }

      moduleContent.innerHTML = content;
    } catch (error) {
      console.error(`❌ Error cargando sección ${sectionId}:`, error);
      moduleContent.innerHTML = `
        <div class="text-center py-12">
          <h3 class="text-xl font-semibold text-red-600">❌ Error</h3>
          <p class="text-gray-500 mt-2">No se pudo cargar la sección</p>
        </div>
      `;
    }
  }

  setupEventListeners() {
    // Event listeners para navegación y UI
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.currentSection) {
        this.selectModule(this.currentModule);
      }
    });
  }

  getSystemInfo() {
    return {
      version: "1.0.0",
      modules: this.modules.size,
      currentView: this.currentView,
      progress: this.progressTracker?.getStats(),
      isInitialized: this.isInitialized,
    };
  }
}
