/**
 * 📄 ContentLoader - Cargador de Contenido Dinámico
 *
 * Maneja la carga de contenido desde archivos Markdown, JSON y otros formatos.
 * Soporta lazy loading, cache y procesamiento de contenido.
 *
 * @version 1.0.0
 * @author GitHub Copilot + Supervisión
 * @created 2025-09-11
 */

class ContentLoader {
  constructor(courseEngine) {
    this.courseEngine = courseEngine;
    this.config = courseEngine.config;

    // Cache para contenido cargado
    this.contentCache = new Map();

    // Configuración de rutas
    this.basePath = this.config.basePath || "";
    this.dataPath = this.config.dataPath || "data";

    // Parsers disponibles
    this.parsers = new Map();
    this.setupParsers();
  }

  /**
   * Configurar parsers para diferentes tipos de contenido
   */
  setupParsers() {
    // Parser para Markdown
    this.parsers.set("md", this.parseMarkdown.bind(this));
    this.parsers.set("markdown", this.parseMarkdown.bind(this));

    // Parser para JSON
    this.parsers.set("json", this.parseJSON.bind(this));

    // Parser para texto plano
    this.parsers.set("txt", this.parseText.bind(this));

    // Parser para JavaScript modules
    this.parsers.set("js", this.parseJavaScript.bind(this));
  }

  /**
   * Cargar módulos del curso desde el directorio especificado
   */
  async loadModules(modulesPath) {
    try {
      console.log(`📚 Cargando módulos desde: ${modulesPath}`);

      // Por ahora retornamos datos de ejemplo
      // En implementación real, escanearía el directorio de módulos
      const exampleModules = await this.getExampleModules();

      console.log(`✅ Cargados ${exampleModules.length} módulos`);
      return exampleModules;
    } catch (error) {
      console.error("❌ Error cargando módulos:", error);
      throw error;
    }
  }

  /**
   * Obtener módulos de ejemplo (placeholder)
   */
  async getExampleModules() {
    return [
      {
        id: "module-01-introduccion",
        title: "Módulo 1: Introducción a Go",
        shortTitle: "Introducción",
        emoji: "🚀",
        objective: "Comprender los fundamentos de Go y la migración desde JavaScript/TypeScript",
        completed: false,
        sections: [
          { id: "01-por-que-go", title: "¿Por qué Go?", file: "sections/01-por-que-go.md" },
          { id: "02-configuracion", title: "Configuración", file: "sections/02-configuracion.md" },
        ],
      },
      {
        id: "module-02-fundamentos",
        title: "Módulo 2: Fundamentos del Backend",
        shortTitle: "Fundamentos",
        emoji: "🌐",
        objective: "Dominar el desarrollo de APIs REST con Go",
        completed: false,
        sections: [
          { id: "01-http-basics", title: "HTTP Básico", file: "sections/01-http-basics.md" },
          { id: "02-fiber-framework", title: "Framework Fiber", file: "sections/02-fiber-framework.md" },
        ],
      },
      {
        id: "module-03-postgresql",
        title: "Módulo 3: PostgreSQL y Persistencia",
        shortTitle: "PostgreSQL",
        emoji: "🗄️",
        objective: 'Gestionar datos con PostgreSQL y el enfoque "SQL First"',
        completed: false,
        sections: [
          { id: "01-database-sql", title: "database/sql", file: "sections/01-database-sql.md" },
          { id: "02-sql-first", title: "Enfoque SQL First", file: "sections/02-sql-first.md" },
        ],
      },
      {
        id: "module-04-seguridad",
        title: "Módulo 4: Seguridad y Autenticación",
        shortTitle: "Seguridad",
        emoji: "🔐",
        objective: "Implementar autenticación JWT y mejores prácticas de seguridad",
        completed: false,
        sections: [
          { id: "01-jwt-auth", title: "Autenticación JWT", file: "sections/01-jwt-auth.md" },
          { id: "02-middleware", title: "Middleware de Seguridad", file: "sections/02-middleware.md" },
        ],
      },
      {
        id: "module-05-testing",
        title: "Módulo 5: Testing y Calidad",
        shortTitle: "Testing",
        emoji: "🧪",
        objective: "Crear pruebas unitarias y de integración robustas",
        completed: false,
        sections: [
          { id: "01-unit-testing", title: "Testing Unitario", file: "sections/01-unit-testing.md" },
          { id: "02-integration-testing", title: "Testing Integración", file: "sections/02-integration-testing.md" },
        ],
      },
      {
        id: "module-06-ia-direccion",
        title: "Módulo 6: Dirección de IA",
        shortTitle: "IA Direction",
        emoji: "🤖",
        objective: "Dirigir y supervisar asistentes de IA en desarrollo Go",
        completed: false,
        sections: [
          { id: "01-ia-prompts", title: "Prompts Efectivos", file: "sections/01-ia-prompts.md" },
          { id: "02-code-review", title: "Review de Código IA", file: "sections/02-code-review.md" },
        ],
      },
    ];
  }

  /**
   * Cargar contenido de un archivo específico
   */
  async loadContent(filePath) {
    const cacheKey = filePath;

    // Verificar cache primero
    if (this.contentCache.has(cacheKey)) {
      console.log(`📋 Contenido desde cache: ${filePath}`);
      return this.contentCache.get(cacheKey);
    }

    try {
      console.log(`📥 Cargando contenido: ${filePath}`);

      // Construir URL completa
      const fullPath = this.buildContentPath(filePath);

      // Cargar contenido raw
      const response = await fetch(fullPath);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const rawContent = await response.text();

      // Procesar contenido según el tipo
      const extension = this.getFileExtension(filePath);
      const processedContent = await this.processContent(rawContent, extension);

      // Guardar en cache
      this.contentCache.set(cacheKey, processedContent);

      console.log(`✅ Contenido cargado y procesado: ${filePath}`);
      return processedContent;
    } catch (error) {
      console.error(`❌ Error cargando contenido ${filePath}:`, error);

      // Retornar contenido de fallback
      return this.getFallbackContent(filePath, error);
    }
  }

  /**
   * Construir ruta completa del contenido
   */
  buildContentPath(filePath) {
    // Si ya es una URL completa, usar tal como está
    if (filePath.startsWith("http")) {
      return filePath;
    }

    // Construir ruta relativa
    const cleanPath = filePath.startsWith("/") ? filePath.slice(1) : filePath;
    return `${this.basePath}/${this.dataPath}/${cleanPath}`;
  }

  /**
   * Obtener extensión del archivo
   */
  getFileExtension(filePath) {
    const parts = filePath.split(".");
    return parts.length > 1 ? parts.pop().toLowerCase() : "";
  }

  /**
   * Procesar contenido según su tipo
   */
  async processContent(rawContent, extension) {
    const parser = this.parsers.get(extension);

    if (parser) {
      return await parser(rawContent);
    } else {
      console.warn(`⚠️ No hay parser para extensión: ${extension}`);
      return rawContent;
    }
  }

  /**
   * Parser para archivos Markdown
   */
  async parseMarkdown(content) {
    try {
      // Verificar si marked está disponible (lo cargaremos dinámicamente si es necesario)
      if (typeof marked === "undefined") {
        await this.loadMarkdownParser();
      }

      // Configurar marked para resaltado de sintaxis
      const processedContent = marked.parse(content, {
        highlight: (code, lang) => {
          if (typeof Prism !== "undefined" && Prism.languages[lang]) {
            return Prism.highlight(code, Prism.languages[lang], lang);
          }
          return code;
        },
        gfm: true,
        breaks: true,
      });

      return {
        type: "markdown",
        raw: content,
        html: processedContent,
        metadata: this.extractMarkdownMetadata(content),
      };
    } catch (error) {
      console.error("❌ Error parseando Markdown:", error);
      return {
        type: "markdown",
        raw: content,
        html: `<pre>${content}</pre>`,
        error: error.message,
      };
    }
  }

  /**
   * Cargar parser de Markdown dinámicamente
   */
  async loadMarkdownParser() {
    try {
      // Cargar marked.js dinámicamente
      if (!document.querySelector('script[src*="marked"]')) {
        await this.loadScript("https://cdn.jsdelivr.net/npm/marked/marked.min.js");
      }

      console.log("✅ Parser de Markdown cargado");
    } catch (error) {
      console.error("❌ Error cargando parser de Markdown:", error);
      throw error;
    }
  }

  /**
   * Cargar script dinámicamente
   */
  loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  /**
   * Extraer metadata del Markdown (frontmatter)
   */
  extractMarkdownMetadata(content) {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
    const match = content.match(frontmatterRegex);

    if (match) {
      try {
        // Parser simple para YAML frontmatter
        const yamlContent = match[1];
        const metadata = {};

        yamlContent.split("\n").forEach((line) => {
          const [key, ...valueParts] = line.split(":");
          if (key && valueParts.length) {
            metadata[key.trim()] = valueParts.join(":").trim();
          }
        });

        return metadata;
      } catch (error) {
        console.warn("⚠️ Error parseando frontmatter:", error);
      }
    }

    return {};
  }

  /**
   * Parser para archivos JSON
   */
  async parseJSON(content) {
    try {
      const data = JSON.parse(content);
      return {
        type: "json",
        raw: content,
        data: data,
      };
    } catch (error) {
      console.error("❌ Error parseando JSON:", error);
      return {
        type: "json",
        raw: content,
        error: error.message,
      };
    }
  }

  /**
   * Parser para texto plano
   */
  async parseText(content) {
    return {
      type: "text",
      raw: content,
      html: `<pre>${content}</pre>`,
    };
  }

  /**
   * Parser para módulos JavaScript
   */
  async parseJavaScript(content) {
    try {
      // Para módulos JS, intentamos evaluarlos de forma segura
      // En un contexto real, esto sería más sofisticado
      return {
        type: "javascript",
        raw: content,
        html: `<pre><code class="language-javascript">${content}</code></pre>`,
      };
    } catch (error) {
      console.error("❌ Error parseando JavaScript:", error);
      return {
        type: "javascript",
        raw: content,
        error: error.message,
      };
    }
  }

  /**
   * Obtener contenido de fallback en caso de error
   */
  getFallbackContent(filePath, error) {
    return {
      type: "error",
      error: error.message,
      html: `
        <div class="bg-red-50 border border-red-200 rounded-lg p-4">
          <div class="flex items-center space-x-2">
            <span class="text-red-500">❌</span>
            <h4 class="text-red-800 font-semibold">Error cargando contenido</h4>
          </div>
          <p class="text-red-700 mt-2">
            No se pudo cargar: <code>${filePath}</code>
          </p>
          <p class="text-red-600 text-sm mt-1">
            ${error.message}
          </p>
        </div>
      `,
    };
  }

  /**
   * Precargar contenido de manera anticipada
   */
  async preloadContent(filePaths) {
    const promises = filePaths.map((path) => this.loadContent(path));

    try {
      const results = await Promise.allSettled(promises);
      const successful = results.filter((r) => r.status === "fulfilled").length;
      const failed = results.filter((r) => r.status === "rejected").length;

      console.log(`📦 Preload completado: ${successful} exitosos, ${failed} fallidos`);
    } catch (error) {
      console.error("❌ Error en preload de contenido:", error);
    }
  }

  /**
   * Limpiar cache de contenido
   */
  clearCache() {
    this.contentCache.clear();
    console.log("🧹 Cache de contenido limpiado");
  }

  /**
   * Obtener estadísticas del cache
   */
  getCacheStats() {
    return {
      size: this.contentCache.size,
      keys: Array.from(this.contentCache.keys()),
      memoryUsage: this.estimateMemoryUsage(),
    };
  }

  /**
   * Estimar uso de memoria del cache
   */
  estimateMemoryUsage() {
    let totalSize = 0;

    this.contentCache.forEach((content) => {
      if (content.raw) {
        totalSize += content.raw.length * 2; // Estimación rough (UTF-16)
      }
      if (content.html) {
        totalSize += content.html.length * 2;
      }
    });

    return {
      bytes: totalSize,
      kb: Math.round(totalSize / 1024),
      mb: Math.round(totalSize / (1024 * 1024)),
    };
  }
}

// Exportar para uso en CourseEngine
export { ContentLoader };
