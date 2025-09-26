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

w# Wyłącz commitlint dla jednego commita
git commit -m "dowolna wiadomość" --no-verify
```

### Troubleshooting Husky

```bash
# Sprawdź czy husky jest zainstalowany
ls -la .husky

# Reinstaluj husky
rm -rf .husky
npm run prepare

# Sprawdź uprawnienia (Linux/Mac)
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg

# Wyłącz wszystkie hooki tymczasowo
git commit --no-verify
```

### Sprawdzanie i naprawa przed commitem

```bash
# Sprawdź formatowanie przed commitem
npm run format:check

# Napraw formatowanie ręcznie
npm run format

# Sprawdź status po naprawie
git status
git diff

# Dodaj naprawione pliki
git add .

# Spróbuj commit ponownie
git commit -m "feat: opis zmian"
```

### Po nieudanym commicie

```bash
# Sprawdź co zostało zmienione przez hooki
git status
git diff

# Dodaj automatyczne poprawki
git add .

# Commit z tymi samymi zmianami
git commit -m "feat: opis zmian"

# Lub użyj --amend jeśli chcesz poprawić ostatni commit
git commit --amend -m "feat: poprawiony opis"
```

### Automatyczne naprawy (już skonfigurowane)

```bash
# Husky automatycznie:
# 1. Formatuje markdown (prettier --write)
# 2. Naprawia błędy markdown (markdownlint --fix)
# 3. Dodaje naprawione pliki (git add)
# 4. Sprawdza format commit message (commitlint)

# Po commicie sprawdź co zostało naprawione:
git log --oneline -1
git show --name-only
```

### Lepszy workflow - widoczne błędy

```bash
# Sprawdź problemy przed commitem
npm run precommit-check

# Jeśli są błędy - napraw automatycznie
npm run precommit-fix

# Lub napraw ręcznie konkretne pliki
# Prettier pokaże które pliki mają złe formatowanie
npm run format:check

# Markdownlint pokaże konkretne błędy
npm run lint:md

# Po naprawie:
git add .
git commit -m "feat: opis zmian"
```

### Teraz widzisz dokładnie

```bash
# Commit pokazuje:
# ✅ plik.md - formatowanie OK
# ❌ plik2.md - wymaga formatowania
# ❌ plik3.md - błędy markdown: linia 15, linia 23

# Szybka naprawa konkretnego pliku:
npx prettier --write "problematyczny-plik.md"
npx markdownlint --fix "problematyczny-plik.md"
```
