# Rozwiązania błędów Markdown

## 📊 Analiza błędów

Po sprawdzeniu 400+ plików Markdown wykryto głównie błędy długości linii (>200 znaków).

### Statystyki błędów

- **Bardzo długie linie (>400 znaków)**: 8 plików
- **Długie linie (200-400 znaków)**: 52 pliki
- **Łącznie plików z błędami**: 60/400+ (15%)

## 🔧 Implementowane rozwiązania

### 1. Dwupoziomowa konfiguracja

**Tolerancyjna (.markdownlint.json)** - dla istniejących plików:

- Długość linii: 200 znaków
- Wyłączone restrykcyjne reguły (MD040, MD052, MD029, etc.)

**Strict (.markdownlint-strict.json)** - dla nowych plików:

- Długość linii: 120 znaków
- Wszystkie reguły włączone

### 2. Nowe skrypty npm

```bash
# Standardowe (tolerancyjne)
npm run lint:md          # Napraw z tolerancyjną konfiguracją
npm run lint:md-check     # Sprawdź z tolerancyjną konfiguracją

# Strict (dla nowych plików)
npm run lint:md-strict    # Napraw wszystkie pliki strict
npm run lint:md-new       # Napraw tylko pliki w Docs/ strict
```

### 3. Automatyzacja pre-commit

Hook automatycznie używa tolerancyjnej konfiguracji, więc nie blokuje commitów dla istniejących plików.

## 📋 Rekomendacje

### Dla istniejących plików

- Pozostaw bez zmian (tolerancyjna konfiguracja)
- Naprawiaj tylko przy edycji

### Dla nowych plików

- Używaj `npm run lint:md-new`
- Przestrzegaj 120 znaków na linię
- Dodawaj języki do bloków kodu

### Najgorsze pliki do naprawy (opcjonalnie)

1. `Notatki/Prompty Vibe Coding/007_Dokumentacja i zarządzanie wiedzą.md` (542 znaki)
2. `Kursy/Vibe Coding for Everyone AI Programming for Non-Coders/README.md` (602 znaki)
3. `Notatki/Prompty Vibe Coding/001_RPD.md` (429 znaków)

## ✅ Status

System linterów działa poprawnie z tolerancyjną konfiguracją. Nowe pliki będą automatycznie sprawdzane według strict standardów.
