# 🧪 1.4 Evaluación práctica: primer proyecto en Go

> **🎯 Concepto:** Una evaluación práctica permite aplicar todos los conceptos del módulo en un proyecto real, consolidando el aprendizaje y identificando áreas de mejora.

## 🤔 Por qué (para tu dirección a la IA)

Como gerente, necesitas **evidencia tangible** del progreso. Una evaluación práctica te permite **medir competencias específicas** y **identificar gaps** antes de avanzar a conceptos más complejos.

## 🤖 Prompt de Instrucción

```
"Genia, ayúdame a evaluar mi comprensión de Go creando un proyecto completo. Guíame paso a paso, revisa mi código, sugiere mejoras y confirma que cumplo con las mejores prácticas antes de continuar al siguiente módulo."
```

---

## 🚀 **Proyecto: API de Gestión de Tareas (TODO API)**

### 📋 **Especificaciones del Proyecto**

Vas a construir una **API REST completa** para gestión de tareas que demuestre:

1. **Configuración de entorno Go**
2. **Servidor HTTP con múltiples endpoints**
3. **Validación de datos**
4. **Manejo de errores**
5. **Operaciones CRUD**
6. **Middleware básico**
7. **Tests unitarios**

### 🏗️ **Arquitectura Objetivo**

```
todo-api/
├── main.go              # Punto de entrada
├── go.mod              # Gestión de dependencias
├── go.sum              # Checksums
├── handlers/           # Controladores HTTP
│   ├── task.go
│   └── health.go
├── models/             # Estructuras de datos
│   └── task.go
├── middleware/         # Middleware personalizado
│   └── logging.go
├── storage/            # Capa de datos (memoria)
│   └── memory.go
├── utils/              # Utilidades
│   └── response.go
├── tests/              # Tests
│   ├── handlers_test.go
│   └── models_test.go
└── README.md           # Documentación
```

## 🎯 **Fase 1: Configuración Inicial (15 min)**

### **🛠️ Prompt para tu IA:**

```
"Genia, ayúdame a inicializar un proyecto Go llamado 'todo-api'. Necesito:
1. Crear la estructura de directorios
2. Inicializar go.mod con 'todo-api'
3. Crear un main.go básico que confirme que todo funciona
4. Verificar que go run main.go ejecute sin errores"
```

### **✅ Criterios de Evaluación Fase 1:**

- [ ] Directorio creado correctamente
- [ ] `go.mod` inicializado
- [ ] `main.go` ejecuta sin errores
- [ ] Estructura de carpetas creada

## 🏗️ **Fase 2: Modelos y Estructuras (20 min)**

### **Especificación de Tarea:**

```go
type Task struct {
    ID          int       `json:"id"`
    Title       string    `json:"title"`
    Description string    `json:"description"`
    Completed   bool      `json:"completed"`
    CreatedAt   time.Time `json:"createdAt"`
    UpdatedAt   time.Time `json:"updatedAt"`
}
```

### **🛠️ Prompt para tu IA:**

```
"Genia, crea el modelo Task en models/task.go con:
1. Estructura Task con validaciones JSON
2. Función NewTask para crear tareas
3. Método MarkCompleted para marcar como completada
4. Validación que Title no esté vacío
5. Tests unitarios para el modelo"
```

### **✅ Criterios de Evaluación Fase 2:**

- [ ] Estructura `Task` bien definida
- [ ] Tags JSON correctos
- [ ] Función constructora `NewTask`
- [ ] Método `MarkCompleted`
- [ ] Validaciones implementadas
- [ ] Tests para el modelo

## 💾 **Fase 3: Capa de Almacenamiento (25 min)**

### **Especificación de Storage:**

```go
type TaskStorage interface {
    Create(task *Task) error
    GetAll() []Task
    GetByID(id int) (*Task, error)
    Update(id int, task *Task) error
    Delete(id int) error
}
```

### **🛠️ Prompt para tu IA:**

```
"Genia, implementa la capa de almacenamiento en memory storage/memory.go:
1. Interface TaskStorage
2. Implementación MemoryStorage con slice de tareas
3. Manejo thread-safe con mutex
4. Generación automática de IDs
5. Manejo de errores para casos no encontrados"
```

### **✅ Criterios de Evaluación Fase 3:**

- [ ] Interface `TaskStorage` definida
- [ ] Implementación `MemoryStorage`
- [ ] Thread-safety con mutex
- [ ] Generación automática de IDs
- [ ] Manejo correcto de errores

## 🌐 **Fase 4: Handlers HTTP (30 min)**

### **Endpoints Requeridos:**

| Método | Endpoint      | Función                 |
| ------ | ------------- | ----------------------- |
| GET    | `/health`     | Health check            |
| GET    | `/tasks`      | Listar todas las tareas |
| GET    | `/tasks/{id}` | Obtener tarea por ID    |
| POST   | `/tasks`      | Crear nueva tarea       |
| PUT    | `/tasks/{id}` | Actualizar tarea        |
| DELETE | `/tasks/{id}` | Eliminar tarea          |

### **🛠️ Prompt para tu IA:**

```
"Genia, crea los handlers HTTP en handlers/:
1. health.go con endpoint de health check
2. task.go con todos los endpoints CRUD
3. Validación de JSON en requests
4. Respuestas HTTP apropiadas (200, 201, 400, 404, 500)
5. Manejo de errores consistente
6. Extracción de ID del path"
```

### **✅ Criterios de Evaluación Fase 4:**

- [ ] Health check funcional
- [ ] CRUD completo implementado
- [ ] Validación de inputs
- [ ] Códigos HTTP correctos
- [ ] Manejo de errores
- [ ] Parsing de parámetros URL

## 🔧 **Fase 5: Middleware y Utilidades (20 min)**

### **🛠️ Prompt para tu IA:**

```
"Genia, implementa:
1. middleware/logging.go con logging de requests
2. utils/response.go con helpers para respuestas JSON
3. Middleware CORS básico
4. Recuperación de panics"
```

### **✅ Criterios de Evaluación Fase 5:**

- [ ] Middleware de logging
- [ ] Utilidades para respuestas JSON
- [ ] CORS implementado
- [ ] Recuperación de panics

## 🔗 **Fase 6: Integración (15 min)**

### **🛠️ Prompt para tu IA:**

```
"Genia, integra todo en main.go:
1. Configurar storage
2. Crear handlers con dependencias
3. Configurar rutas con middleware
4. Servidor en puerto configurable
5. Graceful shutdown con señales"
```

### **✅ Criterios de Evaluación Fase 6:**

- [ ] Todo integrado en `main.go`
- [ ] Inyección de dependencias
- [ ] Puerto configurable
- [ ] Graceful shutdown

## 🧪 **Fase 7: Testing (25 min)**

### **🛠️ Prompt para tu IA:**

```
"Genia, crea tests completos:
1. tests/models_test.go para el modelo Task
2. tests/handlers_test.go para endpoints HTTP
3. Tests de casos exitosos y de error
4. Mocks para storage si es necesario
5. Coverage de al menos 80%"
```

### **✅ Criterios de Evaluación Fase 7:**

- [ ] Tests unitarios para modelos
- [ ] Tests de integración para handlers
- [ ] Tests de casos error
- [ ] Coverage > 80%
- [ ] Tests pasan con `go test -v`

## 📝 **Fase 8: Documentación (10 min)**

### **🛠️ Prompt para tu IA:**

```
"Genia, crea README.md completo con:
1. Descripción del proyecto
2. Instrucciones de instalación
3. Endpoints de la API con ejemplos
4. Comandos para ejecutar tests
5. Estructura del proyecto explicada"
```

## 🔍 **Testing de la API**

### **Ejemplos de Requests:**

```bash
# Health check
curl http://localhost:8080/health

# Crear tarea
curl -X POST http://localhost:8080/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Aprender Go", "description": "Completar el módulo 1"}'

# Listar tareas
curl http://localhost:8080/tasks

# Obtener tarea específica
curl http://localhost:8080/tasks/1

# Actualizar tarea
curl -X PUT http://localhost:8080/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Aprender Go", "description": "Completar el módulo 1", "completed": true}'

# Eliminar tarea
curl -X DELETE http://localhost:8080/tasks/1
```

## 📊 **Rúbrica de Evaluación**

### **🥇 Excelente (90-100 puntos)**

- ✅ Todas las fases completadas
- ✅ Código bien estructurado y comentado
- ✅ Manejo de errores robusto
- ✅ Tests con coverage > 90%
- ✅ Documentación completa
- ✅ Mejores prácticas Go aplicadas

### **🥈 Bueno (75-89 puntos)**

- ✅ CRUD completo funcional
- ✅ Estructura básica correcta
- ✅ Tests principales implementados
- ⚠️ Algunas mejores prácticas faltantes
- ⚠️ Documentación básica

### **🥉 Suficiente (60-74 puntos)**

- ✅ Endpoints básicos funcionan
- ✅ Estructura mínima presente
- ⚠️ Tests limitados
- ⚠️ Manejo de errores básico
- ❌ Documentación incompleta

### **❌ Insuficiente (<60 puntos)**

- ❌ Funcionalidad incompleta
- ❌ Errores en estructura
- ❌ Sin tests o no funcionan
- ❌ Sin documentación

## 🤖 **Prompts de Revisión Final**

### **Revisión de Código:**

```
"Genia, revisa mi código completo del proyecto TODO API:
1. ¿Sigue las convenciones de Go?
2. ¿El manejo de errores es correcto?
3. ¿Hay problemas de concurrencia?
4. ¿Qué mejoras recomiendas?
5. ¿Estoy listo para el siguiente módulo?"
```

### **Optimización:**

```
"Genia, ayúdame a optimizar este código:
1. ¿Hay memory leaks potenciales?
2. ¿La estructura es escalable?
3. ¿Cómo puedo mejorar el performance?
4. ¿Qué patrones Go puedo aplicar mejor?"
```

### **Preparación para Producción:**

```
"Genia, ¿qué le falta a mi API para estar lista para producción?
1. Configuración por environment
2. Logging estructurado
3. Métricas y monitoring
4. Rate limiting
5. Validaciones adicionales"
```

## 🎯 **Bonus: Funcionalidades Avanzadas**

Si completas la evaluación básica, intenta estas mejoras:

### **🔧 Configuración Avanzada**

- Variables de entorno
- Archivo de configuración
- Múltiples ambientes

### **📊 Observabilidad**

- Logging estructurado con logrus
- Métricas con Prometheus
- Health checks detallados

### **🔒 Seguridad**

- Validación de inputs estricta
- Rate limiting básico
- Headers de seguridad

### **⚡ Performance**

- Connection pooling
- Caching en memoria
- Paginación de resultados

## ✅ **Checklist Final**

- [ ] **Proyecto inicializado correctamente**
- [ ] **Todos los endpoints funcionan**
- [ ] **Tests pasan y coverage > 80%**
- [ ] **Código sigue convenciones Go**
- [ ] **Manejo de errores implementado**
- [ ] **Documentación completa**
- [ ] **API probada con curl/Postman**
- [ ] **Código versionado en Git**

## 🎓 **Criterio de Aprobación**

Para avanzar al **Módulo 2: Fundamentos Backend**, debes:

1. **✅ Completar mínimo 7/8 fases**
2. **✅ API funcionando con todos los endpoints**
3. **✅ Tests básicos pasando**
4. **✅ Código estructurado correctamente**

## 🔄 **¿No pasaste la evaluación?**

### **Plan de Remediación:**

1. **Revisión con IA:**

   ```
   "Genia, identifica exactamente qué me falta en mi proyecto TODO API para cumplir los criterios mínimos"
   ```

2. **Refactoring Guiado:**

   ```
   "Genia, ayúdame a refactorizar paso a paso las partes problemáticas"
   ```

3. **Practice Session:**
   ```
   "Genia, dame ejercicios específicos para mejorar las áreas débiles identificadas"
   ```

---

**⏱️ Tiempo estimado:** 160 minutos (2.7 horas)  
**📊 Dificultad:** Intermedio  
**🎯 Objetivo:** Proyecto Go completo y funcional  
**🎓 Requisito:** Aprobación para Módulo 2

---

## 🎉 **¡Felicitaciones!**

Si completaste esta evaluación exitosamente, has demostrado:

- ✅ **Configuración efectiva de entorno Go**
- ✅ **Comprensión de sintaxis y estructuras Go**
- ✅ **Capacidad para dirigir IA en desarrollo Go**
- ✅ **Implementación de API REST completa**
- ✅ **Aplicación de mejores prácticas**

**🚀 Estás listo para el Módulo 2: Fundamentos del Desarrollo Backend con Go**

> **💡 Consejo de Director:** Guarda este proyecto como referencia. Lo extenderemos en módulos posteriores con bases de datos, autenticación y deployment.
