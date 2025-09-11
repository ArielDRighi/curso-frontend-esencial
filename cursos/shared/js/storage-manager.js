/**
 * 💾 StorageManager - Sistema de Gestión de Almacenamiento
 *
 * Maneja el almacenamiento persistente de datos del curso usando localStorage
 * con fallbacks, compresión, migración de versiones y gestión de cuota.
 *
 * @version 1.0.0
 * @author GitHub Copilot + Supervisión
 * @created 2025-09-11
 */

class StorageManager {
  constructor(courseEngine) {
    this.courseEngine = courseEngine;
    this.config = courseEngine.config;

    // Configuración de almacenamiento
    this.storageConfig = {
      prefix: "curso_",
      version: "1.0.0",
      compression: true,
      autoBackup: true,
      maxBackups: 5,
      quotaWarning: 0.8, // Advertir al 80% de la cuota
      fallbackToMemory: true,
    };

    // Estado interno
    this.memoryFallback = new Map();
    this.isStorageAvailable = this.checkStorageAvailability();
    this.compressionSupported = this.checkCompressionSupport();

    // Claves de almacenamiento
    this.keys = {
      progress: `${this.storageConfig.prefix}progress_${this.config.id}`,
      preferences: `${this.storageConfig.prefix}preferences_${this.config.id}`,
      backup: `${this.storageConfig.prefix}backup_${this.config.id}`,
      metadata: `${this.storageConfig.prefix}metadata_${this.config.id}`,
    };
  }

  /**
   * Inicializar el sistema de almacenamiento
   */
  async init() {
    console.log("💾 Inicializando StorageManager...");

    // Verificar disponibilidad de almacenamiento
    this.isStorageAvailable = this.checkStorageAvailability();

    if (!this.isStorageAvailable) {
      console.warn("⚠️ LocalStorage no disponible, usando fallback en memoria");
    }

    // Verificar cuota de almacenamiento
    await this.checkStorageQuota();

    // Migrar datos si es necesario
    await this.migrateIfNeeded();

    // Configurar limpieza automática
    this.setupAutoCleanup();

    console.log("💾 StorageManager inicializado correctamente");
  }

  /**
   * Verificar si localStorage está disponible
   */
  checkStorageAvailability() {
    try {
      const testKey = "__storage_test__";
      localStorage.setItem(testKey, "test");
      localStorage.removeItem(testKey);
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Verificar soporte de compresión
   */
  checkCompressionSupport() {
    // En un entorno real, verificaríamos si hay librerías de compresión disponibles
    // Por ahora, usamos compresión simple basada en JSON.stringify optimizations
    return true;
  }

  /**
   * Verificar cuota de almacenamiento
   */
  async checkStorageQuota() {
    if (!this.isStorageAvailable) return;

    try {
      // Estimar uso actual
      const currentUsage = this.estimateStorageUsage();
      const warningThreshold = 5 * 1024 * 1024 * this.storageConfig.quotaWarning; // 80% de ~5MB

      if (currentUsage > warningThreshold) {
        console.warn(`⚠️ Uso de almacenamiento alto: ${(currentUsage / 1024 / 1024).toFixed(2)}MB`);
        this.triggerQuotaWarning(currentUsage);
      }
    } catch (error) {
      console.error("❌ Error verificando cuota de almacenamiento:", error);
    }
  }

  /**
   * Estimar uso actual de almacenamiento
   */
  estimateStorageUsage() {
    if (!this.isStorageAvailable) return 0;

    let totalSize = 0;
    const prefixLength = this.storageConfig.prefix.length;

    for (let key in localStorage) {
      if (key.startsWith(this.storageConfig.prefix)) {
        const value = localStorage.getItem(key);
        totalSize += key.length + (value ? value.length : 0);
      }
    }

    return totalSize;
  }

  /**
   * Guardar progreso del curso
   */
  async saveProgress(progressData) {
    const dataToSave = {
      ...progressData,
      version: this.storageConfig.version,
      courseId: this.config.id,
      timestamp: Date.now(),
    };

    return await this.setItem(this.keys.progress, dataToSave, {
      compress: true,
      backup: true,
    });
  }

  /**
   * Cargar progreso del curso
   */
  async loadProgress() {
    try {
      const data = await this.getItem(this.keys.progress);

      if (!data) {
        console.log("📊 No hay progreso guardado, iniciando desde cero");
        return null;
      }

      // Verificar versión y migrar si es necesario
      if (data.version !== this.storageConfig.version) {
        console.log("🔄 Migrando progreso a nueva versión...");
        return await this.migrateProgress(data);
      }

      console.log("📊 Progreso cargado correctamente");
      return data;
    } catch (error) {
      console.error("❌ Error cargando progreso:", error);
      return null;
    }
  }

  /**
   * Guardar preferencias del usuario
   */
  async savePreferences(preferences) {
    const dataToSave = {
      ...preferences,
      version: this.storageConfig.version,
      courseId: this.config.id,
      timestamp: Date.now(),
    };

    return await this.setItem(this.keys.preferences, dataToSave, {
      compress: false, // Las preferencias son pequeñas
      backup: false,
    });
  }

  /**
   * Cargar preferencias del usuario
   */
  async loadPreferences() {
    try {
      const data = await this.getItem(this.keys.preferences);
      return data || this.getDefaultPreferences();
    } catch (error) {
      console.error("❌ Error cargando preferencias:", error);
      return this.getDefaultPreferences();
    }
  }

  /**
   * Obtener preferencias por defecto
   */
  getDefaultPreferences() {
    return {
      theme: "light",
      autoSave: true,
      notifications: true,
      animationsEnabled: true,
      fontSize: "medium",
      language: "es",
    };
  }

  /**
   * Guardar elemento con opciones avanzadas
   */
  async setItem(key, data, options = {}) {
    const finalOptions = {
      compress: this.storageConfig.compression,
      backup: this.storageConfig.autoBackup,
      ...options,
    };

    try {
      let processedData = data;

      // Comprimir si está habilitado
      if (finalOptions.compress && this.compressionSupported) {
        processedData = this.compressData(data);
      }

      // Serializar datos
      const serializedData = JSON.stringify({
        data: processedData,
        compressed: finalOptions.compress,
        timestamp: Date.now(),
        version: this.storageConfig.version,
      });

      // Guardar en localStorage o fallback
      if (this.isStorageAvailable) {
        localStorage.setItem(key, serializedData);

        // Crear backup si está habilitado
        if (finalOptions.backup) {
          this.createBackup(key, serializedData);
        }
      } else if (this.storageConfig.fallbackToMemory) {
        this.memoryFallback.set(key, serializedData);
      }

      return true;
    } catch (error) {
      console.error(`❌ Error guardando ${key}:`, error);

      // Intentar limpiar espacio y reintentar
      if (error.name === "QuotaExceededError") {
        console.log("🧹 Limpiando espacio de almacenamiento...");
        await this.cleanupStorage();

        // Reintentar sin compresión/backup
        return await this.setItem(key, data, { compress: false, backup: false });
      }

      return false;
    }
  }

  /**
   * Obtener elemento del almacenamiento
   */
  async getItem(key) {
    try {
      let serializedData;

      // Obtener de localStorage o fallback
      if (this.isStorageAvailable) {
        serializedData = localStorage.getItem(key);
      } else if (this.storageConfig.fallbackToMemory) {
        serializedData = this.memoryFallback.get(key);
      }

      if (!serializedData) {
        return null;
      }

      // Parsear datos
      const parsedData = JSON.parse(serializedData);
      let finalData = parsedData.data;

      // Descomprimir si es necesario
      if (parsedData.compressed && this.compressionSupported) {
        finalData = this.decompressData(finalData);
      }

      return finalData;
    } catch (error) {
      console.error(`❌ Error cargando ${key}:`, error);

      // Intentar recuperar desde backup
      if (this.isStorageAvailable) {
        console.log("🔄 Intentando recuperar desde backup...");
        return await this.restoreFromBackup(key);
      }

      return null;
    }
  }

  /**
   * Eliminar elemento del almacenamiento
   */
  async removeItem(key) {
    try {
      if (this.isStorageAvailable) {
        localStorage.removeItem(key);
        this.removeBackup(key); // Eliminar backup también
      } else if (this.storageConfig.fallbackToMemory) {
        this.memoryFallback.delete(key);
      }
      return true;
    } catch (error) {
      console.error(`❌ Error eliminando ${key}:`, error);
      return false;
    }
  }

  /**
   * Comprimir datos (implementación simple)
   */
  compressData(data) {
    // En una implementación real, usaríamos una librería como pako o lz-string
    // Por ahora, implementamos compresión básica eliminando espacios en JSON
    const stringified = JSON.stringify(data);

    // Simulamos compresión eliminando espacios innecesarios
    return stringified.replace(/\s+/g, " ").trim();
  }

  /**
   * Descomprimir datos
   */
  decompressData(compressedData) {
    try {
      return JSON.parse(compressedData);
    } catch (error) {
      console.error("❌ Error descomprimiendo datos:", error);
      return null;
    }
  }

  /**
   * Crear backup de datos
   */
  createBackup(key, data) {
    if (!this.isStorageAvailable) return;

    try {
      const backupKey = `${key}_backup_${Date.now()}`;
      localStorage.setItem(backupKey, data);

      // Limpiar backups antiguos
      this.cleanupOldBackups(key);
    } catch (error) {
      console.error("❌ Error creando backup:", error);
    }
  }

  /**
   * Limpiar backups antiguos
   */
  cleanupOldBackups(originalKey) {
    if (!this.isStorageAvailable) return;

    try {
      const backupKeys = [];
      const backupPrefix = `${originalKey}_backup_`;

      // Encontrar todas las claves de backup
      for (let key in localStorage) {
        if (key.startsWith(backupPrefix)) {
          const timestamp = parseInt(key.replace(backupPrefix, ""));
          backupKeys.push({ key, timestamp });
        }
      }

      // Ordenar por timestamp descendente
      backupKeys.sort((a, b) => b.timestamp - a.timestamp);

      // Eliminar backups excedentes
      if (backupKeys.length > this.storageConfig.maxBackups) {
        const toDelete = backupKeys.slice(this.storageConfig.maxBackups);
        toDelete.forEach((backup) => {
          localStorage.removeItem(backup.key);
        });
      }
    } catch (error) {
      console.error("❌ Error limpiando backups:", error);
    }
  }

  /**
   * Restaurar desde backup
   */
  async restoreFromBackup(originalKey) {
    if (!this.isStorageAvailable) return null;

    try {
      const backupPrefix = `${originalKey}_backup_`;
      let latestBackup = null;
      let latestTimestamp = 0;

      // Encontrar el backup más reciente
      for (let key in localStorage) {
        if (key.startsWith(backupPrefix)) {
          const timestamp = parseInt(key.replace(backupPrefix, ""));
          if (timestamp > latestTimestamp) {
            latestTimestamp = timestamp;
            latestBackup = key;
          }
        }
      }

      if (latestBackup) {
        const backupData = localStorage.getItem(latestBackup);
        console.log(`🔄 Datos restaurados desde backup: ${latestBackup}`);

        // Intentar parsear y devolver los datos
        const parsedBackup = JSON.parse(backupData);
        return parsedBackup.data;
      }

      return null;
    } catch (error) {
      console.error("❌ Error restaurando desde backup:", error);
      return null;
    }
  }

  /**
   * Remover backup específico
   */
  removeBackup(originalKey) {
    if (!this.isStorageAvailable) return;

    try {
      const backupPrefix = `${originalKey}_backup_`;

      for (let key in localStorage) {
        if (key.startsWith(backupPrefix)) {
          localStorage.removeItem(key);
        }
      }
    } catch (error) {
      console.error("❌ Error eliminando backups:", error);
    }
  }

  /**
   * Limpiar almacenamiento automáticamente
   */
  async cleanupStorage() {
    if (!this.isStorageAvailable) return;

    try {
      console.log("🧹 Iniciando limpieza de almacenamiento...");

      // 1. Eliminar datos expirados
      this.removeExpiredData();

      // 2. Limpiar backups antiguos
      this.cleanupAllOldBackups();

      // 3. Compactar datos existentes
      await this.compactExistingData();

      console.log("✅ Limpieza de almacenamiento completada");
    } catch (error) {
      console.error("❌ Error durante limpieza:", error);
    }
  }

  /**
   * Eliminar datos expirados
   */
  removeExpiredData() {
    const maxAge = 30 * 24 * 60 * 60 * 1000; // 30 días
    const now = Date.now();

    for (let key in localStorage) {
      if (key.startsWith(this.storageConfig.prefix)) {
        try {
          const data = JSON.parse(localStorage.getItem(key));
          if (data.timestamp && now - data.timestamp > maxAge) {
            localStorage.removeItem(key);
            console.log(`🗑️ Eliminado dato expirado: ${key}`);
          }
        } catch (error) {
          // Si no se puede parsear, probablemente esté corrupto - eliminar
          localStorage.removeItem(key);
        }
      }
    }
  }

  /**
   * Limpiar todos los backups antiguos
   */
  cleanupAllOldBackups() {
    for (let key in localStorage) {
      if (key.includes("_backup_") && key.startsWith(this.storageConfig.prefix)) {
        const originalKey = key.split("_backup_")[0];
        this.cleanupOldBackups(originalKey);
      }
    }
  }

  /**
   * Compactar datos existentes
   */
  async compactExistingData() {
    for (let key in localStorage) {
      if (key.startsWith(this.storageConfig.prefix) && !key.includes("_backup_")) {
        try {
          const data = await this.getItem(key);
          if (data) {
            await this.setItem(key, data, { compress: true, backup: false });
          }
        } catch (error) {
          console.error(`❌ Error compactando ${key}:`, error);
        }
      }
    }
  }

  /**
   * Configurar limpieza automática
   */
  setupAutoCleanup() {
    // Limpiar cada 24 horas
    setInterval(() => {
      this.cleanupStorage();
    }, 24 * 60 * 60 * 1000);

    // Limpiar al cerrar la ventana
    window.addEventListener("beforeunload", () => {
      this.cleanupStorage();
    });
  }

  /**
   * Migrar datos si es necesario
   */
  async migrateIfNeeded() {
    const metadata = await this.getItem(this.keys.metadata);

    if (!metadata || metadata.version !== this.storageConfig.version) {
      console.log("🔄 Realizando migración de datos...");
      await this.performMigration(metadata?.version || "0.0.0");

      // Actualizar metadata
      await this.setItem(this.keys.metadata, {
        version: this.storageConfig.version,
        migrationDate: Date.now(),
        courseId: this.config.id,
      });
    }
  }

  /**
   * Realizar migración de versión
   */
  async performMigration(fromVersion) {
    // Implementar lógica de migración específica según la versión
    console.log(`🔄 Migrando desde versión ${fromVersion} a ${this.storageConfig.version}`);

    // Por ahora, migración básica - en implementación real tendría lógica específica
    return true;
  }

  /**
   * Migrar progreso específicamente
   */
  async migrateProgress(oldProgressData) {
    // Implementar migración específica del progreso
    console.log("🔄 Migrando datos de progreso...");

    // Por ahora, retornar los datos tal como están
    // En implementación real, transformar según cambios en estructura
    return oldProgressData;
  }

  /**
   * Disparar advertencia de cuota
   */
  triggerQuotaWarning(currentUsage) {
    const event = new CustomEvent("storage-quota-warning", {
      detail: {
        usage: currentUsage,
        usageMB: (currentUsage / 1024 / 1024).toFixed(2),
      },
    });

    document.dispatchEvent(event);
  }

  /**
   * Obtener estadísticas de almacenamiento
   */
  getStorageStats() {
    if (!this.isStorageAvailable) {
      return {
        available: false,
        fallbackMode: true,
        memoryItems: this.memoryFallback.size,
      };
    }

    const usage = this.estimateStorageUsage();
    const courseKeys = Object.keys(localStorage).filter((key) => key.startsWith(this.storageConfig.prefix));

    return {
      available: true,
      usageBytes: usage,
      usageMB: (usage / 1024 / 1024).toFixed(2),
      courseKeys: courseKeys.length,
      compressionSupported: this.compressionSupported,
      autoBackupEnabled: this.storageConfig.autoBackup,
    };
  }

  /**
   * Exportar todos los datos del curso
   */
  async exportCourseData() {
    const exportData = {
      courseId: this.config.id,
      exportDate: new Date().toISOString(),
      version: this.storageConfig.version,
      progress: await this.loadProgress(),
      preferences: await this.loadPreferences(),
    };

    return exportData;
  }

  /**
   * Importar datos del curso
   */
  async importCourseData(importData) {
    try {
      if (importData.progress) {
        await this.saveProgress(importData.progress);
      }

      if (importData.preferences) {
        await this.savePreferences(importData.preferences);
      }

      console.log("📥 Datos importados correctamente");
      return true;
    } catch (error) {
      console.error("❌ Error importando datos:", error);
      return false;
    }
  }
}

// Exportar para uso en CourseEngine
export { StorageManager };
