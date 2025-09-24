@echo off
echo 🚀 Instalowanie narzędzi do obsługi Markdown...

REM Sprawdź czy Node.js jest zainstalowany
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js nie jest zainstalowany. Pobierz z https://nodejs.org/
    exit /b 1
)

REM Instaluj zależności
echo 📦 Instalowanie zależności...
npm install

REM Sprawdź wszystkie pliki Markdown
echo 🔍 Sprawdzanie plików Markdown...
npm run check:md

if %errorlevel% neq 0 (
    echo ⚠️  Znaleziono problemy w plikach Markdown
    echo 🔧 Czy chcesz automatycznie poprawić błędy? (y/n)
    set /p choice=
    if /i "%choice%"=="y" (
        echo 🛠️  Poprawianie błędów...
        npm run fix:md
        echo ✅ Błędy zostały poprawione
    )
) else (
    echo ✅ Wszystkie pliki Markdown są poprawne
)

echo 📋 Dostępne komendy:
echo   npm run lint:md        - Sprawdź i popraw linting
echo   npm run format:md      - Formatuj pliki
echo   npm run check:md       - Sprawdź jakość
echo   npm run fix:md         - Popraw wszystkie błędy

pause