# 🔀 1.3 Migración de código JavaScript a Go

> **🎯 Concepto:** Comparar un script JavaScript/TypeScript con su equivalente en Go permite observar diferencias sintácticas y conceptuales clave para acelerar el aprendizaje.

## 🤔 Por qué (para tu dirección a la IA)

Como gerente técnico, debes dirigir a tu IA hacia una **migración sistemática**. La **comparación lado a lado** de patrones comunes acelera la comprensión y reduce la curva de aprendizaje para tu equipo.

## 🤖 Prompt de Instrucción

```
"Genia, toma este código JavaScript/TypeScript [pegar código] y migralo a Go manteniendo la misma funcionalidad. Explica cada diferencia sintáctica, conceptual y de paradigma. Resalta las ventajas del enfoque Go."
```

---

## 🔄 **Comparativas Prácticas: JS/TS → Go**

### 🌐 **1. Servidor HTTP Básico**

#### **🟨 JavaScript (Express.js)**

```javascript
// server.js
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Hello from Express!",
    timestamp: new Date().toISOString(),
  });
});

app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  if (isNaN(userId)) {
    return res.status(400).json({ error: "ID debe ser un número" });
  }

  res.json({
    id: userId,
    name: `Usuario ${userId}`,
    active: true,
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Algo salió mal!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
```

#### **🟦 Go (net/http nativo)**

```go
// main.go
package main

import (
    "encoding/json"
    "fmt"
    "log"
    "net/http"
    "strconv"
    "strings"
    "time"
)

// Estructuras para respuestas JSON
type Response struct {
    Message   string `json:"message"`
    Timestamp string `json:"timestamp"`
}

type User struct {
    ID     int    `json:"id"`
    Name   string `json:"name"`
    Active bool   `json:"active"`
}

type ErrorResponse struct {
    Error string `json:"error"`
}

// Middleware CORS
func corsMiddleware(next http.HandlerFunc) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Access-Control-Allow-Origin", "*")
        w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

        if r.Method == "OPTIONS" {
            w.WriteHeader(http.StatusOK)
            return
        }

        next(w, r)
    }
}

// Middleware de logging
func loggingMiddleware(next http.HandlerFunc) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        start := time.Now()
        next(w, r)
        log.Printf("%s %s - %v", r.Method, r.URL.Path, time.Since(start))
    }
}

// Handler para ruta raíz
func homeHandler(w http.ResponseWriter, r *http.Request) {
    if r.Method != http.MethodGet {
        http.Error(w, "Método no permitido", http.StatusMethodNotAllowed)
        return
    }

    response := Response{
        Message:   "Hello from Go!",
        Timestamp: time.Now().Format(time.RFC3339),
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(response)
}

// Handler para usuarios
func userHandler(w http.ResponseWriter, r *http.Request) {
    if r.Method != http.MethodGet {
        http.Error(w, "Método no permitido", http.StatusMethodNotAllowed)
        return
    }

    // Extraer ID del path /users/{id}
    pathParts := strings.Split(r.URL.Path, "/")
    if len(pathParts) != 3 || pathParts[1] != "users" {
        http.Error(w, "Ruta no válida", http.StatusBadRequest)
        return
    }

    userID, err := strconv.Atoi(pathParts[2])
    if err != nil {
        w.Header().Set("Content-Type", "application/json")
        w.WriteHeader(http.StatusBadRequest)
        json.NewEncoder(w).Encode(ErrorResponse{Error: "ID debe ser un número"})
        return
    }

    user := User{
        ID:     userID,
        Name:   fmt.Sprintf("Usuario %d", userID),
        Active: true,
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(user)
}

func main() {
    // Configurar rutas con middleware
    http.HandleFunc("/", corsMiddleware(loggingMiddleware(homeHandler)))
    http.HandleFunc("/users/", corsMiddleware(loggingMiddleware(userHandler)))

    port := "3000"
    fmt.Printf("🚀 Servidor Go corriendo en puerto %s\n", port)
    fmt.Println("💡 Presiona Ctrl+C para parar")

    log.Fatal(http.ListenAndServe(":"+port, nil))
}
```

### 📊 **2. Manejo de Datos y Validación**

#### **🟨 TypeScript**

```typescript
// types.ts
interface User {
  id: number;
  email: string;
  name: string;
  age?: number;
  createdAt: Date;
  isActive: boolean;
}

interface CreateUserRequest {
  email: string;
  name: string;
  age?: number;
}

// validation.ts
import Joi from "joi";

const createUserSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().min(2).max(50).required(),
  age: Joi.number().min(18).max(120).optional(),
});

export function validateUser(data: any): { value?: CreateUserRequest; error?: string } {
  const { error, value } = createUserSchema.validate(data);

  if (error) {
    return { error: error.details[0].message };
  }

  return { value };
}

// userService.ts
import { User, CreateUserRequest } from "./types";
import { validateUser } from "./validation";

class UserService {
  private users: User[] = [];
  private nextId = 1;

  async createUser(data: CreateUserRequest): Promise<User | { error: string }> {
    const validation = validateUser(data);

    if (validation.error) {
      return { error: validation.error };
    }

    // Simular validación async
    const emailExists = this.users.some((u) => u.email === data.email);
    if (emailExists) {
      return { error: "El email ya existe" };
    }

    const user: User = {
      id: this.nextId++,
      email: data.email,
      name: data.name,
      age: data.age,
      createdAt: new Date(),
      isActive: true,
    };

    this.users.push(user);
    return user;
  }

  async getUserById(id: number): Promise<User | null> {
    return this.users.find((u) => u.id === id) || null;
  }

  async getAllUsers(): Promise<User[]> {
    return this.users.filter((u) => u.isActive);
  }
}

export default UserService;
```

#### **🟦 Go**

```go
// types.go
package main

import (
    "errors"
    "regexp"
    "strings"
    "time"
)

// User representa un usuario en el sistema
type User struct {
    ID        int       `json:"id"`
    Email     string    `json:"email"`
    Name      string    `json:"name"`
    Age       *int      `json:"age,omitempty"` // Pointer para valores opcionales
    CreatedAt time.Time `json:"createdAt"`
    IsActive  bool      `json:"isActive"`
}

// CreateUserRequest representa los datos para crear un usuario
type CreateUserRequest struct {
    Email string `json:"email"`
    Name  string `json:"name"`
    Age   *int   `json:"age,omitempty"`
}

// ValidationError representa un error de validación
type ValidationError struct {
    Field   string `json:"field"`
    Message string `json:"message"`
}

func (ve ValidationError) Error() string {
    return ve.Message
}

// validation.go
var emailRegex = regexp.MustCompile(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`)

// ValidateUser valida los datos de un usuario
func ValidateUser(req CreateUserRequest) error {
    // Validar email
    if req.Email == "" {
        return ValidationError{Field: "email", Message: "El email es requerido"}
    }

    if !emailRegex.MatchString(req.Email) {
        return ValidationError{Field: "email", Message: "El email no es válido"}
    }

    // Validar nombre
    if req.Name == "" {
        return ValidationError{Field: "name", Message: "El nombre es requerido"}
    }

    name := strings.TrimSpace(req.Name)
    if len(name) < 2 {
        return ValidationError{Field: "name", Message: "El nombre debe tener al menos 2 caracteres"}
    }

    if len(name) > 50 {
        return ValidationError{Field: "name", Message: "El nombre no puede tener más de 50 caracteres"}
    }

    // Validar edad (opcional)
    if req.Age != nil {
        if *req.Age < 18 {
            return ValidationError{Field: "age", Message: "La edad debe ser mayor a 17"}
        }
        if *req.Age > 120 {
            return ValidationError{Field: "age", Message: "La edad debe ser menor a 121"}
        }
    }

    return nil
}

// userService.go
type UserService struct {
    users  []User
    nextID int
}

// NewUserService crea una nueva instancia del servicio
func NewUserService() *UserService {
    return &UserService{
        users:  make([]User, 0),
        nextID: 1,
    }
}

// CreateUser crea un nuevo usuario
func (s *UserService) CreateUser(req CreateUserRequest) (*User, error) {
    // Validar datos
    if err := ValidateUser(req); err != nil {
        return nil, err
    }

    // Verificar email único
    for _, user := range s.users {
        if user.Email == req.Email && user.IsActive {
            return nil, ValidationError{
                Field:   "email",
                Message: "El email ya existe",
            }
        }
    }

    // Crear usuario
    user := User{
        ID:        s.nextID,
        Email:     req.Email,
        Name:      strings.TrimSpace(req.Name),
        Age:       req.Age,
        CreatedAt: time.Now(),
        IsActive:  true,
    }

    s.users = append(s.users, user)
    s.nextID++

    return &user, nil
}

// GetUserById obtiene un usuario por ID
func (s *UserService) GetUserById(id int) (*User, error) {
    for _, user := range s.users {
        if user.ID == id && user.IsActive {
            return &user, nil
        }
    }
    return nil, errors.New("usuario no encontrado")
}

// GetAllUsers obtiene todos los usuarios activos
func (s *UserService) GetAllUsers() []User {
    activeUsers := make([]User, 0, len(s.users))

    for _, user := range s.users {
        if user.IsActive {
            activeUsers = append(activeUsers, user)
        }
    }

    return activeUsers
}
```

### 🔄 **3. Manejo Asíncrono y Concurrencia**

#### **🟨 JavaScript (Async/Await)**

```javascript
// asyncOperations.js
const axios = require("axios");
const fs = require("fs").promises;

// Operación asíncrona simple
async function fetchUserData(userId) {
  try {
    const response = await axios.get(`https://api.ejemplo.com/users/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error obteniendo usuario ${userId}: ${error.message}`);
  }
}

// Múltiples operaciones paralelas
async function fetchMultipleUsers(userIds) {
  try {
    const promises = userIds.map((id) => fetchUserData(id));
    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    console.error("Error en operaciones paralelas:", error);
    throw error;
  }
}

// Operación con timeout
async function fetchWithTimeout(userId, timeoutMs = 5000) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Timeout")), timeoutMs);
  });

  const fetchPromise = fetchUserData(userId);

  return Promise.race([fetchPromise, timeoutPromise]);
}

// Procesamiento de archivos
async function processFiles(filePaths) {
  const results = [];

  for (const filePath of filePaths) {
    try {
      const content = await fs.readFile(filePath, "utf8");
      const processed = content.toUpperCase();

      const outputPath = filePath.replace(".txt", "_processed.txt");
      await fs.writeFile(outputPath, processed);

      results.push({ filePath, success: true, outputPath });
    } catch (error) {
      results.push({ filePath, success: false, error: error.message });
    }
  }

  return results;
}

module.exports = {
  fetchUserData,
  fetchMultipleUsers,
  fetchWithTimeout,
  processFiles,
};
```

#### **🟦 Go (Goroutines y Channels)**

```go
// asyncOperations.go
package main

import (
    "context"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
    "os"
    "strings"
    "sync"
    "time"
)

// Estructura para respuesta de usuario
type UserData struct {
    ID    int    `json:"id"`
    Name  string `json:"name"`
    Email string `json:"email"`
}

// Estructura para resultados
type FetchResult struct {
    UserID int
    Data   *UserData
    Error  error
}

type FileResult struct {
    FilePath   string `json:"filePath"`
    Success    bool   `json:"success"`
    OutputPath string `json:"outputPath,omitempty"`
    Error      string `json:"error,omitempty"`
}

// Operación asíncrona simple con contexto
func fetchUserData(ctx context.Context, userID int) (*UserData, error) {
    url := fmt.Sprintf("https://api.ejemplo.com/users/%d", userID)

    // Crear request con contexto
    req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
    if err != nil {
        return nil, fmt.Errorf("error creando request para usuario %d: %w", userID, err)
    }

    // Realizar request
    client := &http.Client{Timeout: 10 * time.Second}
    resp, err := client.Do(req)
    if err != nil {
        return nil, fmt.Errorf("error obteniendo usuario %d: %w", userID, err)
    }
    defer resp.Body.Close()

    if resp.StatusCode != http.StatusOK {
        return nil, fmt.Errorf("error HTTP %d para usuario %d", resp.StatusCode, userID)
    }

    var userData UserData
    if err := json.NewDecoder(resp.Body).Decode(&userData); err != nil {
        return nil, fmt.Errorf("error decodificando usuario %d: %w", userID, err)
    }

    return &userData, nil
}

// Múltiples operaciones paralelas con goroutines
func fetchMultipleUsers(ctx context.Context, userIDs []int) ([]FetchResult, error) {
    results := make([]FetchResult, len(userIDs))

    // Channel para sincronización
    done := make(chan struct{}, len(userIDs))

    // WaitGroup para esperar todas las goroutines
    var wg sync.WaitGroup

    // Lanzar goroutine para cada usuario
    for i, userID := range userIDs {
        wg.Add(1)
        go func(index, id int) {
            defer wg.Done()

            data, err := fetchUserData(ctx, id)
            results[index] = FetchResult{
                UserID: id,
                Data:   data,
                Error:  err,
            }

            done <- struct{}{}
        }(i, userID)
    }

    // Goroutine para cerrar el channel cuando terminen todas
    go func() {
        wg.Wait()
        close(done)
    }()

    // Esperar a que terminen todas o se cancele el contexto
    for i := 0; i < len(userIDs); i++ {
        select {
        case <-done:
            // Una operación terminó
        case <-ctx.Done():
            return nil, ctx.Err()
        }
    }

    return results, nil
}

// Operación con timeout usando contexto
func fetchWithTimeout(userID int, timeout time.Duration) (*UserData, error) {
    ctx, cancel := context.WithTimeout(context.Background(), timeout)
    defer cancel()

    return fetchUserData(ctx, userID)
}

// Procesamiento de archivos con goroutines
func processFiles(filePaths []string, maxConcurrency int) []FileResult {
    results := make([]FileResult, len(filePaths))

    // Channel para controlar concurrencia
    semaphore := make(chan struct{}, maxConcurrency)

    var wg sync.WaitGroup

    for i, filePath := range filePaths {
        wg.Add(1)

        go func(index int, path string) {
            defer wg.Done()

            // Adquirir semáforo
            semaphore <- struct{}{}
            defer func() { <-semaphore }()

            result := processFile(path)
            results[index] = result
        }(i, filePath)
    }

    wg.Wait()
    return results
}

// Función auxiliar para procesar un archivo
func processFile(filePath string) FileResult {
    // Leer archivo
    content, err := os.ReadFile(filePath)
    if err != nil {
        return FileResult{
            FilePath: filePath,
            Success:  false,
            Error:    err.Error(),
        }
    }

    // Procesar contenido
    processed := strings.ToUpper(string(content))

    // Generar path de salida
    outputPath := strings.Replace(filePath, ".txt", "_processed.txt", 1)

    // Escribir archivo procesado
    err = os.WriteFile(outputPath, []byte(processed), 0644)
    if err != nil {
        return FileResult{
            FilePath: filePath,
            Success:  false,
            Error:    err.Error(),
        }
    }

    return FileResult{
        FilePath:   filePath,
        Success:    true,
        OutputPath: outputPath,
    }
}

// Ejemplo de uso con channels para comunicación
func processWithProgress(filePaths []string) <-chan FileResult {
    resultChan := make(chan FileResult, len(filePaths))

    go func() {
        defer close(resultChan)

        var wg sync.WaitGroup
        semaphore := make(chan struct{}, 3) // Máximo 3 archivos simultáneos

        for _, filePath := range filePaths {
            wg.Add(1)

            go func(path string) {
                defer wg.Done()

                semaphore <- struct{}{}
                defer func() { <-semaphore }()

                result := processFile(path)
                resultChan <- result
            }(filePath)
        }

        wg.Wait()
    }()

    return resultChan
}

// Ejemplo de uso
func main() {
    // Ejemplo 1: Fetch múltiple con timeout
    ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
    defer cancel()

    userIDs := []int{1, 2, 3, 4, 5}
    results, err := fetchMultipleUsers(ctx, userIDs)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }

    for _, result := range results {
        if result.Error != nil {
            fmt.Printf("Usuario %d: Error - %v\n", result.UserID, result.Error)
        } else {
            fmt.Printf("Usuario %d: %s (%s)\n", result.UserID, result.Data.Name, result.Data.Email)
        }
    }

    // Ejemplo 2: Procesamiento de archivos con progreso
    filePaths := []string{"file1.txt", "file2.txt", "file3.txt"}

    fmt.Println("\nProcesando archivos...")
    for result := range processWithProgress(filePaths) {
        if result.Success {
            fmt.Printf("✅ %s -> %s\n", result.FilePath, result.OutputPath)
        } else {
            fmt.Printf("❌ %s: %s\n", result.FilePath, result.Error)
        }
    }
}
```

## 🔍 **Diferencias Clave Identificadas**

### 1. **🏗️ Tipado y Estructuras**

| Aspecto            | JavaScript/TypeScript | Go                        |
| ------------------ | --------------------- | ------------------------- |
| **Tipos**          | Opcional, runtime     | Obligatorio, compile-time |
| **Estructuras**    | Interfaces opcionales | Structs obligatorias      |
| **Null/Undefined** | `null`, `undefined`   | `nil`, zero values        |
| **Opcionales**     | `property?`           | Pointers `*type`          |

### 2. **🔄 Manejo de Errores**

| Aspecto             | JavaScript/TypeScript | Go                         |
| ------------------- | --------------------- | -------------------------- |
| **Método**          | try/catch, Promises   | Explicit error returns     |
| **Propagación**     | Automática            | Manual con `if err != nil` |
| **Personalización** | Error objects         | Error interface            |

### 3. **⚡ Concurrencia**

| Aspecto          | JavaScript/TypeScript   | Go                   |
| ---------------- | ----------------------- | -------------------- |
| **Modelo**       | Event loop, async/await | Goroutines, channels |
| **Paralelismo**  | Limited (single thread) | True parallelism     |
| **Comunicación** | Promises, callbacks     | Channels             |
| **Control**      | Promise.all/race        | WaitGroups, select   |

### 4. **📦 Gestión de Dependencias**

| Aspecto     | JavaScript/TypeScript | Go         |
| ----------- | --------------------- | ---------- |
| **Sistema** | npm/yarn/pnpm         | Go modules |
| **Archivo** | package.json          | go.mod     |
| **Lock**    | package-lock.json     | go.sum     |
| **Import**  | require()/import      | import     |

## 🤖 **Prompts para Dirigir Migración**

### **Migración de API REST:**

```
"Genia, migra esta API Express a Go:
[pegar código Express]

Necesito:
1. Equivalente con net/http o Gin
2. Middleware de autenticación
3. Validación de datos
4. Manejo de errores consistente
5. Documentación de cada cambio significativo"
```

### **Migración de Lógica de Negocio:**

```
"Genia, convierte esta clase TypeScript a Go:
[pegar código TypeScript]

Mantén:
- La misma funcionalidad
- Patrones de error handling Go
- Interfaces apropiadas
- Tests unitarios equivalentes"
```

### **Migración de Operaciones Asíncronas:**

```
"Genia, transforma estas operaciones async/await a goroutines:
[pegar código async]

Usa:
- Goroutines para paralelización
- Channels para comunicación
- Context para cancelación/timeout
- WaitGroups para sincronización"
```

## ✅ **Checklist de Migración**

- [ ] **Identificar tipos de datos equivalentes**
- [ ] **Mapear manejo de errores JS → Go**
- [ ] **Convertir operaciones async → goroutines**
- [ ] **Adaptar middleware Express → Go**
- [ ] **Migrar validaciones**
- [ ] **Actualizar tests**
- [ ] **Verificar performance**
- [ ] **Documentar cambios**

## 🎯 **Ejercicios Prácticos**

### **Ejercicio 1: API Simple**

Migra una API Express con 3 endpoints a Go usando net/http.

### **Ejercicio 2: Worker Pool**

Convierte un sistema de workers con Promise.all a goroutines con channels.

### **Ejercicio 3: Middleware Chain**

Migra middleware de autenticación y logging de Express a Go.

---

**⏱️ Tiempo estimado:** 240 minutos  
**📊 Dificultad:** Intermedio  
**🎯 Objetivo:** Migración fluida de patrones JavaScript/TypeScript a Go

---

## 🎯 **Próximo Paso**

En el siguiente módulo profundizaremos en **Fundamentos del Desarrollo Backend con Go**, donde dirigirás a tu IA para construir APIs robustas con Go.

> **💡 Consejo de Director:** La migración sistemática con comparativas lado a lado acelera el aprendizaje. Tu IA será más efectiva con ejemplos claros de equivalencias.
