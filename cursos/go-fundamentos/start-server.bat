@echo off
REM 🚀 Script para servir el curso Go localmente en Windows
REM Evita problemas de CORS al abrir archivos directamente

echo 🚀 Iniciando servidor local para Curso Go...
echo 📁 Directorio: %cd%

REM Verificar si Python está disponible
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo 🐍 Usando Python para servidor HTTP
    echo 🌐 Abriendo en: http://localhost:8000
    echo 💡 Presiona Ctrl+C para parar
    python -m http.server 8000
    goto :end
)

REM Verificar si Node.js está disponible
node --version >nul 2>&1
if %errorlevel% == 0 (
    echo 📦 Verificando npx...
    npx --version >nul 2>&1
    if %errorlevel% == 0 (
        echo 📦 Usando Node.js con npx http-server
        echo 🌐 Abriendo en: http://localhost:8000
        echo 💡 Presiona Ctrl+C para parar
        npx http-server -p 8000 -c-1
    ) else (
        echo ❌ Node.js encontrado pero npx no disponible
        echo 💡 Instala http-server: npm install -g http-server
        pause
        exit /b 1
    )
    goto :end
)

REM Si no se encuentra ninguno
echo ❌ No se encontró Python ni Node.js
echo 💡 Instala uno de estos para servir el curso:
echo    - Python: https://python.org
echo    - Node.js: https://nodejs.org
pause
exit /b 1

:end
