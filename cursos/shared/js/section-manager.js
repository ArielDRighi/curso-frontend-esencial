/**
 * 🗂️ SectionManager - Gestor de Secciones del Curso
 *
 * Maneja la carga, renderizado y navegación entre diferentes secciones del curso.
 * Cada sección (dashboard, módulos, referencia, etc.) tiene su propia lógica de renderizado.
 *
 * @version 1.0.0
 * @author GitHub Copilot + Supervisión
 * @created 2025-09-11
 */

class SectionManager {
  constructor(courseEngine) {
    this.courseEngine = courseEngine;
    this.config = courseEngine.config;
    this.sections = new Map();
    this.templates = new Map();

    // Cache para contenido renderizado
    this.renderCache = new Map();
  }

  /**
   * Cargar secciones especiales del curso
   */
  async loadSpecialSections(sectionsPath) {
    try {
      // Cargar configuración de secciones especiales
      const sectionsConfig = await this.loadSectionsConfig(sectionsPath);

      // Guardar configuración
      this.sections = new Map(sectionsConfig.map((section) => [section.id, section]));

      console.log(`📁 Cargadas ${this.sections.size} secciones especiales`);
    } catch (error) {
      console.error("❌ Error cargando secciones especiales:", error);
      throw error;
    }
  }

  /**
   * Cargar configuración de secciones desde el directorio del curso
   */
  async loadSectionsConfig(sectionsPath) {
    // Por ahora retornamos configuración básica
    // En implementación real, cargaría desde archivos de configuración
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

  /**
   * Renderizar dashboard con estadísticas del curso
   */
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
          <h3 class="text-xl font-semibold mb-2">🎯 ${this.config.objective?.title || "Objetivo General"}</h3>
          <p class="text-blue-100">
            ${this.config.objective?.description || this.config.description}
          </p>
        </div>
      </div>

      <!-- Estadísticas del Curso -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        ${this.renderStatsCards(stats)}
      </div>

      <!-- Progreso Visual -->
      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md mb-8">
        <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          📊 Progreso del Curso
        </h3>
        ${this.renderProgressChart(stats)}
      </div>

      <!-- Vista Rápida de Módulos -->
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

  /**
   * Renderizar cards de estadísticas
   */
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

  /**
   * Renderizar gráfico de progreso
   */
  renderProgressChart(stats) {
    const progress = stats.overallProgress || 0;
    const circumference = 2 * Math.PI * 45; // radio 45
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

  /**
   * Renderizar overview de módulos
   */
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
                  ${module.shortTitle || module.title}
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

  /**
   * Renderizar vista de módulos
   */
  async renderModules(modules) {
    const modulesList = Array.from(modules.values());

    return `
      <div class="flex flex-col lg:flex-row gap-6">
        <!-- Lista de Módulos -->
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

        <!-- Contenido del Módulo -->
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

  /**
   * Renderizar item individual de módulo
   */
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
              ${module.shortTitle || module.title}
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
              ${module.objective || "Objetivo del módulo"}
            </p>
            <div class="flex items-center justify-between">
              <span class="text-xs text-gray-500 dark:text-gray-500">
                ${module.sections?.length || 0} secciones
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

  /**
   * Renderizar sección de referencia
   */
  async renderReference(currentTab = "cheatsheet") {
    const tabs = this.getReferenceTabsConfig();

    return `
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <!-- Tabs de Referencia -->
        <div class="border-b border-gray-200 dark:border-gray-700">
          <nav class="flex space-x-8 px-6">
            ${tabs
              .map(
                (tab) => `
              <button
                class="py-4 px-2 font-medium whitespace-nowrap transition-colors ${
                  currentTab === tab.id
                    ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                    : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                }"
                onclick="courseEngine.switchReferenceTab('${tab.id}')"
              >
                ${tab.icon} ${tab.title}
              </button>
            `
              )
              .join("")}
          </nav>
        </div>

        <!-- Contenido del Tab -->
        <div class="p-6">
          <div id="reference-tab-content">
            ${await this.renderReferenceTabContent(currentTab)}
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Obtener configuración de tabs de referencia
   */
  getReferenceTabsConfig() {
    return [
      { id: "cheatsheet", title: "Cheatsheet", icon: "📋" },
      { id: "architecture", title: "Arquitectura", icon: "🏗️" },
      { id: "migration", title: "Migración", icon: "🔄" },
    ];
  }

  /**
   * Renderizar contenido de tab de referencia
   */
  async renderReferenceTabContent(tabId) {
    // Placeholder - en implementación real cargaría desde archivos Markdown
    switch (tabId) {
      case "cheatsheet":
        return `
          <h3 class="text-xl font-semibold mb-4">📋 Cheatsheet de ${this.config.language || "Go"}</h3>
          <div class="prose dark:prose-invert max-w-none">
            <p>⏳ Cargando contenido del cheatsheet...</p>
          </div>
        `;
      case "architecture":
        return `
          <h3 class="text-xl font-semibold mb-4">🏗️ Arquitectura de Proyectos</h3>
          <div class="prose dark:prose-invert max-w-none">
            <p>⏳ Cargando contenido de arquitectura...</p>
          </div>
        `;
      case "migration":
        return `
          <h3 class="text-xl font-semibold mb-4">🔄 Guía de Migración</h3>
          <div class="prose dark:prose-invert max-w-none">
            <p>⏳ Cargando guía de migración...</p>
          </div>
        `;
      default:
        return "<p>❌ Contenido no encontrado</p>";
    }
  }

  /**
   * Renderizar prompts de IA
   */
  async renderAIPrompts() {
    return `
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 class="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
          🤖 Prompts para IA - ${this.config.title}
        </h3>
        
        <div id="prompts-content">
          <div class="text-center py-12">
            <div class="text-6xl mb-4">🤖</div>
            <h4 class="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Prompts Especializados
            </h4>
            <p class="text-gray-500 dark:text-gray-500">
              ⏳ Cargando biblioteca de prompts para ${this.config.language || "Go"}...
            </p>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Renderizar proyecto
   */
  async renderProject() {
    return `
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 class="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
          🚀 Proyecto Integrador - ${this.config.title}
        </h3>
        
        <div id="project-content">
          <div class="text-center py-12">
            <div class="text-6xl mb-4">🚀</div>
            <h4 class="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Proyecto Guiado
            </h4>
            <p class="text-gray-500 dark:text-gray-500">
              ⏳ Cargando tareas del proyecto...
            </p>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Limpiar cache de renderizado
   */
  clearRenderCache() {
    this.renderCache.clear();
    console.log("🧹 Cache de renderizado limpiado");
  }

  /**
   * Obtener información de las secciones
   */
  getSectionsInfo() {
    return {
      loaded: this.sections.size,
      cached: this.renderCache.size,
      sections: Array.from(this.sections.keys()),
    };
  }
}

// Exportar para uso en CourseEngine
export { SectionManager };
