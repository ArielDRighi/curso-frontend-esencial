/**
 * 📊 ProgressTracker - Sistema de Seguimiento de Progreso
 *
 * Maneja el seguimiento del progreso del estudiante a través del curso.
 * Calcula estadísticas, guarda estado y proporciona métricas de avance.
 *
 * @version 1.0.0
 * @author GitHub Copilot + Supervisión
 * @created 2025-09-11
 */

class ProgressTracker {
  constructor(courseEngine) {
    this.courseEngine = courseEngine;
    this.config = courseEngine.config;

    // Estado del progreso
    this.moduleProgress = new Map();
    this.sectionProgress = new Map();
    this.projectTasks = new Map();

    // Metadatos del progreso
    this.startDate = null;
    this.lastActivity = null;
    this.totalTimeSpent = 0;

    // Configuración de progreso
    this.progressConfig = {
      autoSave: true,
      saveInterval: 30000, // 30 segundos
      trackTimeSpent: true,
      trackDetailedStats: true,
    };
  }

  /**
   * Inicializar el sistema de progreso
   */
  init() {
    this.startDate = new Date();
    this.lastActivity = new Date();

    // Configurar tracking de tiempo si está habilitado
    if (this.progressConfig.trackTimeSpent) {
      this.setupTimeTracking();
    }

    console.log("📊 ProgressTracker inicializado");
  }

  /**
   * Configurar seguimiento de tiempo
   */
  setupTimeTracking() {
    // Actualizar last activity en interacciones
    document.addEventListener("click", () => this.updateActivity());
    document.addEventListener("keydown", () => this.updateActivity());
    document.addEventListener("scroll", () => this.updateActivity());

    // Tracking de tiempo de sesión
    this.sessionStartTime = Date.now();
    this.setupSessionTracking();
  }

  /**
   * Configurar tracking de sesión
   */
  setupSessionTracking() {
    // Guardar tiempo al salir
    window.addEventListener("beforeunload", () => {
      this.saveSessionTime();
    });

    // Pausar tiempo cuando la pestaña no está activa
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.pauseTimeTracking();
      } else {
        this.resumeTimeTracking();
      }
    });

    // Actualizar tiempo periódicamente
    setInterval(() => {
      this.updateSessionTime();
    }, 60000); // Cada minuto
  }

  /**
   * Actualizar actividad del usuario
   */
  updateActivity() {
    this.lastActivity = new Date();
  }

  /**
   * Marcar módulo como completado
   */
  completeModule(moduleId) {
    const currentProgress = this.moduleProgress.get(moduleId) || {
      completed: false,
      completedSections: new Set(),
      startDate: null,
      completeDate: null,
      timeSpent: 0,
    };

    currentProgress.completed = true;
    currentProgress.completeDate = new Date();

    this.moduleProgress.set(moduleId, currentProgress);

    console.log(`✅ Módulo completado: ${moduleId}`);
    this.updateActivity();

    // Trigger eventos
    this.triggerProgressEvent("module-completed", { moduleId, progress: currentProgress });
  }

  /**
   * Marcar sección como completada
   */
  completeSection(moduleId, sectionId) {
    // Actualizar progreso del módulo
    const moduleProgress = this.moduleProgress.get(moduleId) || {
      completed: false,
      completedSections: new Set(),
      startDate: new Date(),
      completeDate: null,
      timeSpent: 0,
    };

    moduleProgress.completedSections.add(sectionId);
    this.moduleProgress.set(moduleId, moduleProgress);

    // Actualizar progreso de la sección
    this.sectionProgress.set(`${moduleId}-${sectionId}`, {
      completed: true,
      completeDate: new Date(),
      moduleId,
      sectionId,
    });

    console.log(`✅ Sección completada: ${moduleId} > ${sectionId}`);
    this.updateActivity();

    // Verificar si el módulo está completamente terminado
    this.checkModuleCompletion(moduleId);

    // Trigger eventos
    this.triggerProgressEvent("section-completed", { moduleId, sectionId });
  }

  /**
   * Verificar si un módulo está completamente terminado
   */
  checkModuleCompletion(moduleId) {
    const module = this.courseEngine.modules.get(moduleId);
    if (!module) return;

    const moduleProgress = this.moduleProgress.get(moduleId);
    if (!moduleProgress) return;

    const totalSections = module.sections ? module.sections.length : 0;
    const completedSections = moduleProgress.completedSections.size;

    // Si todas las secciones están completadas, marcar módulo como completado
    if (totalSections > 0 && completedSections >= totalSections && !moduleProgress.completed) {
      this.completeModule(moduleId);
    }
  }

  /**
   * Marcar tarea de proyecto como completada
   */
  completeProjectTask(taskId) {
    this.projectTasks.set(taskId, {
      completed: true,
      completeDate: new Date(),
    });

    console.log(`✅ Tarea de proyecto completada: ${taskId}`);
    this.updateActivity();

    // Trigger eventos
    this.triggerProgressEvent("task-completed", { taskId });
  }

  /**
   * Desmarcar completado
   */
  uncompleteModule(moduleId) {
    const progress = this.moduleProgress.get(moduleId);
    if (progress) {
      progress.completed = false;
      progress.completeDate = null;
      this.moduleProgress.set(moduleId, progress);
    }

    this.triggerProgressEvent("module-uncompleted", { moduleId });
  }

  uncompleteSection(moduleId, sectionId) {
    const moduleProgress = this.moduleProgress.get(moduleId);
    if (moduleProgress) {
      moduleProgress.completedSections.delete(sectionId);
      moduleProgress.completed = false; // Un módulo no puede estar completo si le falta una sección
      this.moduleProgress.set(moduleId, moduleProgress);
    }

    this.sectionProgress.delete(`${moduleId}-${sectionId}`);

    this.triggerProgressEvent("section-uncompleted", { moduleId, sectionId });
  }

  uncompleteProjectTask(taskId) {
    this.projectTasks.delete(taskId);
    this.triggerProgressEvent("task-uncompleted", { taskId });
  }

  /**
   * Obtener estadísticas completas del progreso
   */
  getStats() {
    const modules = Array.from(this.courseEngine.modules.values());
    const totalModules = modules.length;

    // Calcular módulos completados
    const completedModules = Array.from(this.moduleProgress.values()).filter((progress) => progress.completed).length;

    // Calcular secciones completadas
    const totalSections = modules.reduce((total, module) => {
      return total + (module.sections ? module.sections.length : 0);
    }, 0);

    const completedSections = this.sectionProgress.size;

    // Calcular tareas de proyecto completadas
    const completedTasks = this.projectTasks.size;
    const totalTasks = this.getTotalProjectTasks();

    // Calcular progreso general
    const overallProgress = this.calculateOverallProgress();

    // Calcular tiempo estimado restante
    const estimatedHours = this.calculateEstimatedTime();

    return {
      // Módulos
      totalModules,
      completedModules,
      moduleProgress: (completedModules / totalModules) * 100,

      // Secciones
      totalSections,
      completedSections,
      sectionProgress: totalSections > 0 ? (completedSections / totalSections) * 100 : 0,

      // Proyecto
      totalTasks,
      completedTasks,
      projectProgress: totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0,

      // General
      overallProgress,
      estimatedHours,

      // Tiempo
      timeSpent: this.totalTimeSpent,
      startDate: this.startDate,
      lastActivity: this.lastActivity,

      // Métricas adicionales
      ...this.getDetailedStats(),
    };
  }

  /**
   * Calcular progreso general ponderado
   */
  calculateOverallProgress() {
    const stats = {
      modules: this.getModuleProgressPercentage(),
      sections: this.getSectionProgressPercentage(),
      project: this.getProjectProgressPercentage(),
    };

    // Ponderación: módulos 40%, secciones 40%, proyecto 20%
    const weights = {
      modules: 0.4,
      sections: 0.4,
      project: 0.2,
    };

    const overallProgress =
      stats.modules * weights.modules + stats.sections * weights.sections + stats.project * weights.project;

    return Math.round(overallProgress);
  }

  /**
   * Obtener porcentaje de progreso de módulos
   */
  getModuleProgressPercentage() {
    const totalModules = this.courseEngine.modules.size;
    if (totalModules === 0) return 0;

    const completedModules = Array.from(this.moduleProgress.values()).filter((progress) => progress.completed).length;

    return (completedModules / totalModules) * 100;
  }

  /**
   * Obtener porcentaje de progreso de secciones
   */
  getSectionProgressPercentage() {
    const modules = Array.from(this.courseEngine.modules.values());
    const totalSections = modules.reduce((total, module) => {
      return total + (module.sections ? module.sections.length : 0);
    }, 0);

    if (totalSections === 0) return 0;

    return (this.sectionProgress.size / totalSections) * 100;
  }

  /**
   * Obtener porcentaje de progreso del proyecto
   */
  getProjectProgressPercentage() {
    const totalTasks = this.getTotalProjectTasks();
    if (totalTasks === 0) return 0;

    return (this.projectTasks.size / totalTasks) * 100;
  }

  /**
   * Obtener total de tareas del proyecto
   */
  getTotalProjectTasks() {
    // Placeholder - en implementación real vendría de la configuración del proyecto
    return 30;
  }

  /**
   * Calcular tiempo estimado restante
   */
  calculateEstimatedTime() {
    const totalEstimatedHours = this.config.estimatedHours || 35;
    const progressPercentage = this.calculateOverallProgress();

    const remainingHours = totalEstimatedHours * (1 - progressPercentage / 100);
    return Math.max(0, Math.round(remainingHours));
  }

  /**
   * Obtener estadísticas detalladas
   */
  getDetailedStats() {
    if (!this.progressConfig.trackDetailedStats) {
      return {};
    }

    return {
      // Progreso por módulo
      moduleDetails: this.getModuleDetails(),

      // Métricas de tiempo
      timeMetrics: this.getTimeMetrics(),

      // Patrones de uso
      usagePatterns: this.getUsagePatterns(),
    };
  }

  /**
   * Obtener detalles de progreso por módulo
   */
  getModuleDetails() {
    const details = {};

    this.courseEngine.modules.forEach((module, moduleId) => {
      const progress = this.moduleProgress.get(moduleId) || {
        completed: false,
        completedSections: new Set(),
        startDate: null,
        completeDate: null,
      };

      details[moduleId] = {
        title: module.title,
        completed: progress.completed,
        sectionsTotal: module.sections ? module.sections.length : 0,
        sectionsCompleted: progress.completedSections.size,
        startDate: progress.startDate,
        completeDate: progress.completeDate,
        progressPercentage: module.sections ? (progress.completedSections.size / module.sections.length) * 100 : 0,
      };
    });

    return details;
  }

  /**
   * Obtener métricas de tiempo
   */
  getTimeMetrics() {
    const now = Date.now();
    const sessionTime = this.sessionStartTime ? now - this.sessionStartTime : 0;

    return {
      totalTimeSpent: this.totalTimeSpent,
      currentSessionTime: Math.round(sessionTime / 1000 / 60), // minutos
      averageSessionTime: this.calculateAverageSessionTime(),
      timePerModule: this.calculateTimePerModule(),
    };
  }

  /**
   * Obtener patrones de uso
   */
  getUsagePatterns() {
    return {
      daysActive: this.calculateActiveDays(),
      mostActiveTimeOfDay: this.getMostActiveTimeOfDay(),
      averageProgressPerSession: this.calculateAverageProgressPerSession(),
    };
  }

  /**
   * Cargar progreso desde datos guardados
   */
  loadProgress(savedData) {
    try {
      if (savedData.moduleProgress) {
        this.moduleProgress = new Map(savedData.moduleProgress);
      }

      if (savedData.sectionProgress) {
        this.sectionProgress = new Map(savedData.sectionProgress);
      }

      if (savedData.projectTasks) {
        this.projectTasks = new Map(savedData.projectTasks);
      }

      if (savedData.startDate) {
        this.startDate = new Date(savedData.startDate);
      }

      if (savedData.totalTimeSpent) {
        this.totalTimeSpent = savedData.totalTimeSpent;
      }

      console.log("📊 Progreso cargado desde almacenamiento");
    } catch (error) {
      console.error("❌ Error cargando progreso:", error);
    }
  }

  /**
   * Obtener datos de progreso para guardar
   */
  getProgressData() {
    return {
      moduleProgress: Array.from(this.moduleProgress.entries()),
      sectionProgress: Array.from(this.sectionProgress.entries()),
      projectTasks: Array.from(this.projectTasks.entries()),
      startDate: this.startDate,
      lastActivity: this.lastActivity,
      totalTimeSpent: this.totalTimeSpent,
      version: "1.0.0",
      courseId: this.config.id,
      savedAt: new Date(),
    };
  }

  /**
   * Disparar eventos de progreso
   */
  triggerProgressEvent(eventType, data) {
    const event = new CustomEvent(`course-progress-${eventType}`, {
      detail: { ...data, stats: this.getStats() },
    });

    document.dispatchEvent(event);
  }

  // Métodos de tiempo (stubs por implementación futura)
  saveSessionTime() {
    if (this.sessionStartTime) {
      const sessionTime = Date.now() - this.sessionStartTime;
      this.totalTimeSpent += Math.round(sessionTime / 1000 / 60); // minutos
    }
  }

  pauseTimeTracking() {
    this.saveSessionTime();
    this.sessionStartTime = null;
  }

  resumeTimeTracking() {
    this.sessionStartTime = Date.now();
  }

  updateSessionTime() {
    if (this.sessionStartTime) {
      const inactiveTime = Date.now() - this.lastActivity.getTime();
      // Si ha estado inactivo más de 5 minutos, pausar tracking
      if (inactiveTime > 5 * 60 * 1000) {
        this.pauseTimeTracking();
      }
    }
  }

  calculateAverageSessionTime() {
    return 0;
  }
  calculateTimePerModule() {
    return {};
  }
  calculateActiveDays() {
    return 0;
  }
  getMostActiveTimeOfDay() {
    return "N/A";
  }
  calculateAverageProgressPerSession() {
    return 0;
  }
}

// Exportar para uso en CourseEngine
export { ProgressTracker };
