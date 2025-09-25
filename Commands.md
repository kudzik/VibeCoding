# Commands - Lista komend projektu

## Formatowanie Markdown

### Prettier

```bash
# Zainstaluj zależności
npm install

# Formatuj wszystkie pliki markdown
npm run format

# Sprawdź formatowanie bez zmian
npm run format:check
```

### PowerShell

```powershell
# Uruchom skrypt
.\format-markdown.ps1
```

### markdownlint-cli

```bash
# Zainstaluj globalnie
npm install -g markdownlint-cli

# Formatuj i napraw
markdownlint --fix "**/*.md"
```

## Git Hooks

### Husky Setup

```bash
# Zainstaluj zależności
npm install

# Inicjalizuj husky
npm run prepare

# Sprawdź konfigurację
git config user.name
git config user.email
```

### Konfiguracja Git User

```bash
# Ustaw nazwę użytkownika
git config user.name "Twoje Imię"

# Ustaw email
git config user.email "twoj@email.com"

# Sprawdź konfigurację
git config --list
```

### Commitlint

```bash
# Zainstaluj commitlint
npm install

# Przykłady poprawnych commit messages
git commit -m "feat: dodaj nową funkcję"
git commit -m "fix: napraw błąd w logice"
git commit -m "docs: aktualizuj dokumentację"

# Wyłącz commitlint dla jednego commita
git commit -m "dowolna wiadomość" --no-verify
```
