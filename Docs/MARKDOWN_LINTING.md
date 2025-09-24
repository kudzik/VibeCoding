# Konfiguracja Linterów Markdown

## Zainstalowane narzędzia

### Lintery i formatery

- **markdownlint-cli** - linter dla plików Markdown
- **prettier** - formater kodu z obsługą Markdown
- **husky** - Git hooks do automatyzacji
- **lint-staged** - uruchamianie linterów tylko na zmienionych plikach
- **commitlint** - walidacja commit messages

## Konfiguracja

### .markdownlint.json

```json
{
  "default": true,
  "MD013": {
    "line_length": 120,
    "code_blocks": false,
    "tables": false
  },
  "MD033": false,
  "MD041": false,
  "MD024": {
    "siblings_only": true
  }
}
```

### .prettierrc

```json
{
  "printWidth": 120,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "proseWrap": "preserve",
  "overrides": [
    {
      "files": "*.md",
      "options": {
        "proseWrap": "preserve",
        "printWidth": 120
      }
    }
  ]
}
```

## Dostępne skrypty

```bash
# Sprawdź pliki Markdown (bez naprawy)
npm run lint:md-check

# Napraw automatycznie błędy Markdown
npm run lint:md

# Sformatuj pliki Prettier
npm run format:md

# Sprawdź formatowanie (bez naprawy)
npm run check:md

# Napraw wszystkie błędy (lint + format)
npm run fix:md
```

## Automatyzacja przed commitami

### Pre-commit hook

- Automatycznie uruchamia `markdownlint --fix` i `prettier --write` na zmienionych plikach .md
- Blokuje commit jeśli są błędy, które nie mogą być automatycznie naprawione

### Commit message validation

- Waliduje commit messages zgodnie z Conventional Commits

- Dozwolone typy: feat, fix, docs, style, refactor, test, chore, build, ci

## Ignorowane pliki

Pliki w `.markdownlintignore`:

- node_modules/
- .git/
- dist/
- build/

## Przykład użycia

```bash
# Przed commitem - automatyczne uruchomienie
git add .
git commit -m "docs: aktualizacja dokumentacji Markdown"

# Ręczne uruchomienie
npm run fix:md
```
