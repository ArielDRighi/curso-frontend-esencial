#!/bin/bash

# 🚀 Script para servir el curso Go localmente
# Evita problemas de CORS al abrir archivos directamente

echo "🚀 Iniciando servidor local para Curso Go..."
echo "📁 Directorio: $(pwd)"

# Verificar si Python está disponible
if command -v python3 &> /dev/null; then
    echo "🐍 Usando Python 3 para servidor HTTP"
    echo "🌐 Abriendo en: http://localhost:8000"
    echo "💡 Presiona Ctrl+C para parar"
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "🐍 Usando Python 2 para servidor HTTP"
    echo "🌐 Abriendo en: http://localhost:8000"
    echo "💡 Presiona Ctrl+C para parar"
    python -m SimpleHTTPServer 8000
elif command -v node &> /dev/null; then
    # Verificar si npx está disponible
    if command -v npx &> /dev/null; then
        echo "📦 Usando Node.js con npx http-server"
        echo "🌐 Abriendo en: http://localhost:8000"
        echo "💡 Presiona Ctrl+C para parar"
        npx http-server -p 8000 -c-1
    else
        echo "❌ Node.js encontrado pero npx no disponible"
        echo "💡 Instala http-server: npm install -g http-server"
        exit 1
    fi
else
    echo "❌ No se encontró Python ni Node.js"
    echo "💡 Instala uno de estos para servir el curso:"
    echo "   - Python: https://python.org"
    echo "   - Node.js: https://nodejs.org"
    exit 1
fi
