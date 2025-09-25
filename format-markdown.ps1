# Formatowanie wszystkich plików markdown w projekcie
Write-Host "Formatowanie plików markdown..." -ForegroundColor Green

# Sprawdź czy prettier jest zainstalowany
if (!(Get-Command "npx" -ErrorAction SilentlyContinue)) {
    Write-Host "Node.js nie jest zainstalowany. Zainstaluj Node.js aby użyć Prettier." -ForegroundColor Red
    exit 1
}

# Zainstaluj prettier jeśli nie istnieje
if (!(Test-Path "node_modules")) {
    Write-Host "Instalowanie Prettier..." -ForegroundColor Yellow
    npm install
}

# Formatuj wszystkie pliki markdown
Write-Host "Formatowanie plików..." -ForegroundColor Yellow
npx prettier --write "**/*.md"

Write-Host "Formatowanie zakończone!" -ForegroundColor Green