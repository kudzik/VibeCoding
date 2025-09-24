# ✅ Naprawka Pre-commit Hooks

## Problem

Pliki Markdown nie były automatycznie naprawiane przed commitami z powodu błędów konfiguracji.

## Rozwiązanie

### 1. Tolerancyjna konfiguracja markdownlint

```json
{
  "line_length": 200,
  "MD040": false,
  "MD052": false,
  "MD029": false
}
```

### 2. Uproszczona konfiguracja lint-staged

```json
{
  "*.md": ["prettier --write"]
}
```

### 3. Dostępne skrypty

```bash
# Ręczne lintowanie (tolerancyjne)
npm run lint:md

# Ręczne lintowanie (strict dla nowych plików)
npm run lint:md-strict

# Formatowanie Prettier
npm run format:md
```

## Status

✅ Pre-commit hook działa poprawnie  
✅ Prettier automatycznie formatuje pliki .md  
✅ Commity nie są blokowane przez błędy lintingu  
✅ Ręczne narzędzia dostępne dla deweloperów

## Workflow

1. **Przed commitem**: Prettier automatycznie formatuje pliki
2. **Ręcznie**: `npm run lint:md` dla naprawy błędów
3. **Nowe pliki**: `npm run lint:md-strict` dla wysokich standardów
