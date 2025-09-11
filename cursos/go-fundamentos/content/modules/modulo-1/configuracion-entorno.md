# 📋 1.2 Configuración del entorno de desarrollo Go

> **🎯 Concepto:** El entorno de Go requiere la instalación del lenguaje, y una comprensión de GOPATH y Go Modules para la gestión de dependencias.

## 🤔 Por qué (para tu dirección a la IA)

Como gerente, debes asegurar una configuración correcta. Los **Go Modules** son fundamentales para una gestión de dependencias moderna y reproducible. La **estructura de directorios** es una convención clave para importaciones canónicas y legibilidad.

## 🤖 Prompt de Instrucción

```
"Genia, prepara instrucciones detalladas para configurar un entorno de desarrollo Go en Linux, macOS y Windows. Incluye: descarga, instalación, configuración de $GOPATH, inicialización de un nuevo proyecto con go mod init, y un programa 'Hello, World!' con el comando para ejecutarlo."
```

---

## 🛠️ **Instalación Multi-Plataforma**

### 🐧 **Linux**

#### Opción 1: Descarga oficial (Recomendada)

```bash
# Descargar la última versión
wget https://go.dev/dl/go1.21.5.linux-amd64.tar.gz

# Remover instalación previa (si existe)
sudo rm -rf /usr/local/go

# Instalar
sudo tar -C /usr/local -xzf go1.21.5.linux-amd64.tar.gz

# Configurar PATH
echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
source ~/.bashrc
```

#### Opción 2: Gestor de paquetes

```bash
# Ubuntu/Debian (versión puede ser antigua)
sudo apt update
sudo apt install golang-go

# Arch Linux
sudo pacman -S go

# Fedora/CentOS
sudo dnf install golang
```

### 🍎 **macOS**

#### Opción 1: Descarga oficial (Recomendada)

```bash
# Descargar desde https://go.dev/dl/
# Abrir el archivo .pkg y seguir el instalador

# O usando Terminal:
curl -LO https://go.dev/dl/go1.21.5.darwin-amd64.pkg
sudo installer -pkg go1.21.5.darwin-amd64.pkg -target /
```

#### Opción 2: Homebrew

```bash
# Instalar Homebrew si no lo tienes
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Instalar Go
brew install go
```

### 🪟 **Windows**

#### Opción 1: Instalador oficial (Recomendada)

1. Descargar desde [https://go.dev/dl/](https://go.dev/dl/)
2. Ejecutar el archivo `.msi`
3. Seguir el asistente de instalación
4. Go se instalará en `C:\Program Files\Go`

#### Opción 2: Chocolatey

```powershell
# Instalar Chocolatey si no lo tienes
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Instalar Go
choco install golang
```

#### Opción 3: Winget

```powershell
winget install GoLang.Go
```

## ⚙️ **Configuración de Variables de Entorno**

### 🔧 **Variables Principales**

```bash
# Verificar instalación
go version

# Ver configuración actual
go env

# Variables importantes:
# GOROOT: Dónde está instalado Go
# GOPATH: Workspace (legacy, ahora usa módulos)
# GOPROXY: Proxy para descargar módulos
# GOSUMDB: Database de checksums
```

### 📁 **Configuración Moderna con Go Modules**

```bash
# Desde Go 1.16+, no necesitas configurar GOPATH
# Go Modules manejan todo automáticamente

# Configuración recomendada:
go env -w GOPROXY=https://proxy.golang.org,direct
go env -w GOSUMDB=sum.golang.org
go env -w GOPRIVATE="" # Para repos privados si es necesario
```

### 🛡️ **Configuración para Entornos Corporativos**

```bash
# Si tu empresa usa un proxy:
go env -w GOPROXY=https://internal-proxy.company.com,https://proxy.golang.org,direct

# Para repositorios privados:
go env -w GOPRIVATE=github.com/tu-empresa/*,gitlab.empresa.com/*

# Configurar Git para autenticación:
git config --global url."ssh://git@github.com/".insteadOf "https://github.com/"
```

## 🚀 **Tu Primer Proyecto Go**

### 📦 **Inicialización de Proyecto**

```bash
# Crear directorio del proyecto
mkdir mi-primera-app-go
cd mi-primera-app-go

# Inicializar módulo Go
go mod init mi-primera-app-go
# O con nombre completo:
go mod init github.com/tu-usuario/mi-primera-app-go
```

### 📄 **Estructura de Archivos**

```
mi-primera-app-go/
├── go.mod          # Archivo de dependencias
├── go.sum          # Checksums de dependencias (generado automáticamente)
├── main.go         # Archivo principal
├── internal/       # Código privado de tu aplicación
│   └── handlers/
├── pkg/           # Código que puede ser usado por otros
│   └── models/
└── cmd/           # Puntos de entrada de aplicaciones
    └── server/
```

### 💻 **Tu Primer Programa**

```go
// main.go
package main

import (
    "fmt"
    "log"
    "net/http"
    "os"
    "time"
)

func main() {
    // Hello World básico
    fmt.Println("🚀 ¡Hola desde Go!")

    // Variables y tipos
    var nombre string = "Desarrollador TypeScript"
    edad := 30 // Inferencia de tipos

    fmt.Printf("Hola %s, tienes %d años\n", nombre, edad)

    // Manejo de errores explícito
    archivo, err := os.Create("test.txt")
    if err != nil {
        log.Fatal("Error creando archivo:", err)
    }
    defer archivo.Close() // Se ejecuta al final

    // Escribir al archivo
    _, err = archivo.WriteString("¡Mi primera app Go!")
    if err != nil {
        log.Fatal("Error escribiendo:", err)
    }

    // Servidor HTTP básico
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "🐹 ¡Servidor Go funcionando! Hora: %s", time.Now().Format("15:04:05"))
    })

    fmt.Println("🌐 Servidor iniciado en http://localhost:8080")
    fmt.Println("💡 Presiona Ctrl+C para parar")

    log.Fatal(http.ListenAndServe(":8080", nil))
}
```

### ▶️ **Ejecutar el Programa**

```bash
# Opción 1: Ejecutar directamente
go run main.go

# Opción 2: Compilar y ejecutar
go build -o mi-app
./mi-app        # Linux/macOS
mi-app.exe      # Windows

# Opción 3: Instalar globalmente
go install
```

## 🛠️ **IDEs y Herramientas Recomendadas**

### 🥇 **VS Code (Recomendado)**

```bash
# Extensiones esenciales:
# 1. Go (oficial de Google)
# 2. Go Outliner
# 3. Go Test Explorer
# 4. GitHub Copilot (para el curso)
```

**Configuración VS Code (`settings.json`):**

```json
{
  "go.useLanguageServer": true,
  "go.formatTool": "gofmt",
  "go.lintTool": "golangci-lint",
  "go.vetOnSave": "package",
  "go.testOnSave": true,
  "go.coverOnSave": true,
  "editor.formatOnSave": true,
  "go.toolsManagement.autoUpdate": true
}
```

### 🏆 **GoLand (JetBrains)**

```bash
# IDE profesional específico para Go
# Excelente para proyectos grandes
# Debugging avanzado
# Refactoring inteligente
```

### 🐧 **Alternativas Ligeras**

```bash
# Vim/Neovim con vim-go
# Emacs con go-mode
# Sublime Text con GoSublime
```

## 🔧 **Herramientas Esenciales**

### 📦 **Gestión de Dependencias**

```bash
# Agregar dependencia
go get github.com/gin-gonic/gin

# Agregar versión específica
go get github.com/gin-gonic/gin@v1.9.1

# Actualizar dependencias
go get -u ./...

# Limpiar dependencias no usadas
go mod tidy

# Verificar dependencias
go mod verify
```

### 🧹 **Herramientas de Calidad**

```bash
# Formatear código (obligatorio en Go)
go fmt ./...

# Análisis estático
go vet ./...

# Linter avanzado
go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest
golangci-lint run

# Tests
go test ./...
go test -v ./...        # Verbose
go test -cover ./...    # Con cobertura
```

### 🔍 **Debugging y Profiling**

```bash
# Profiling integrado
go tool pprof

# Debugging con Delve
go install github.com/go-delve/delve/cmd/dlv@latest
dlv debug
```

## 🤖 **Dirigir a la IA en Configuración**

### **Prompt para Instalación:**

```
"Genia, verifica que mi instalación de Go esté correcta. Necesito un script que:
1. Verifique la versión de Go
2. Confirme que Go Modules estén habilitados
3. Pruebe creando un proyecto 'hello-world'
4. Compile y ejecute el programa
5. Reporte cualquier problema encontrado"
```

### **Prompt para Estructura de Proyecto:**

```
"Genia, crea la estructura de directorios para una aplicación web Go siguiendo las mejores prácticas. Incluye:
- Estructura de módulos
- Directorios para handlers, models, middleware
- Archivo main.go con servidor HTTP básico
- Dockerfile para containerización"
```

### **Prompt para Configuración IDE:**

```
"Genia, proporciona la configuración completa de VS Code para desarrollo Go, incluyendo:
- Extensiones recomendadas
- settings.json optimizado
- Tasks para build y test
- Launch configuration para debugging"
```

## ✅ **Verificación de Instalación**

### 🧪 **Script de Verificación**

```bash
#!/bin/bash
# check-go-setup.sh

echo "🔍 Verificando instalación de Go..."

# Verificar Go
if command -v go &> /dev/null; then
    echo "✅ Go instalado: $(go version)"
else
    echo "❌ Go no encontrado"
    exit 1
fi

# Verificar variables
echo "📁 GOROOT: $(go env GOROOT)"
echo "📁 GOPATH: $(go env GOPATH)"
echo "🌐 GOPROXY: $(go env GOPROXY)"

# Test básico
echo "🧪 Creando proyecto de prueba..."
mkdir -p /tmp/go-test
cd /tmp/go-test

cat > main.go << EOF
package main
import "fmt"
func main() {
    fmt.Println("✅ Go configurado correctamente!")
}
EOF

go mod init test-go
if go run main.go; then
    echo "🎉 ¡Configuración exitosa!"
else
    echo "❌ Error en la configuración"
    exit 1
fi

# Limpiar
cd - > /dev/null
rm -rf /tmp/go-test
```

### 🐧 **Para Windows (PowerShell):**

```powershell
# check-go-setup.ps1

Write-Host "🔍 Verificando instalación de Go..." -ForegroundColor Yellow

# Verificar Go
if (Get-Command go -ErrorAction SilentlyContinue) {
    Write-Host "✅ Go instalado: $(go version)" -ForegroundColor Green
} else {
    Write-Host "❌ Go no encontrado" -ForegroundColor Red
    exit 1
}

# Test básico
Write-Host "🧪 Creando proyecto de prueba..." -ForegroundColor Yellow
$testDir = "$env:TEMP\go-test"
New-Item -ItemType Directory -Path $testDir -Force | Out-Null
Set-Location $testDir

@"
package main
import "fmt"
func main() {
    fmt.Println("✅ Go configurado correctamente!")
}
"@ | Out-File -FilePath "main.go" -Encoding UTF8

go mod init test-go
if (go run main.go) {
    Write-Host "🎉 ¡Configuración exitosa!" -ForegroundColor Green
} else {
    Write-Host "❌ Error en la configuración" -ForegroundColor Red
    exit 1
}

# Limpiar
Set-Location -
Remove-Item $testDir -Recurse -Force
```

## 🎯 **Checklist de Configuración**

- [ ] **Go instalado y en PATH**
- [ ] **go version muestra versión correcta (1.21+)**
- [ ] **go mod init funciona correctamente**
- [ ] **IDE configurado con extensión Go**
- [ ] **go fmt, go vet, go test funcionan**
- [ ] **Primer programa 'Hello World' ejecuta**
- [ ] **Variables de entorno configuradas**
- [ ] **Proxy y checksums configurados**

## 🔗 **Recursos Adicionales**

- 📚 [Documentación oficial de instalación](https://golang.org/doc/install)
- 🛠️ [Configuración de editors](https://golang.org/doc/editors.html)
- 📦 [Go Modules Reference](https://golang.org/ref/mod)
- 🔧 [VS Code Go extension](https://marketplace.visualstudio.com/items?itemName=golang.Go)

---

**⏱️ Tiempo estimado:** 180 minutos  
**📊 Dificultad:** Principiante  
**🎯 Objetivo:** Entorno Go completamente configurado y funcional

---

## 🎯 **Próximo Paso**

En el siguiente módulo aprenderás **Fundamentos del Desarrollo Backend con Go**, donde dirigirás a tu IA para migrar de Express/NestJS a net/http y frameworks Go.

> **💡 Recuerda:** Una configuración correcta es fundamental. Tu IA será más efectiva con un entorno bien establecido.
