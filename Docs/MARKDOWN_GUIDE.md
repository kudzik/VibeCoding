# 📝 Przewodnik po standardach Markdown w VibeCoding

## 🎯 Cel dokumentu

Ten dokument opisuje standardy i narzędzia do automatycznego sprawdzania i poprawiania plików Markdown w projekcie VibeCoding.

## 🛠️ Zainstalowane narzędzia

### Główne narzędzia

- **markdownlint-cli** - Linter dla plików Markdown
- **prettier** - Formatter kodu i dokumentacji
- **GitHub Actions** - Automatyczne sprawdzanie w CI/CD

### Rozszerzenia VS Code

- `davidanson.vscode-markdownlint` - Linting w edytorze
- `esbenp.prettier-vscode` - Formatowanie
- `yzhang.markdown-all-in-one` - Wsparcie dla Markdown
- `bierner.markdown-preview-github-styles` - Podgląd GitHub

## 🚀 Instalacja i konfiguracja

### Automatyczna instalacja

```bash
# Uruchom skrypt instalacyjny
tools\scripts\setup-markdown-tools.bat
```

### Manualna instalacja

```bash
# Zainstaluj zależności
npm install

# Sprawdź pliki Markdown
npm run check:md

# Popraw automatycznie błędy
npm run fix:md
```

## 📋 Dostępne komendy

| Komenda                 | Opis                                 |
| ----------------------- | ------------------------------------ |
| `npm run lint:md`       | Sprawdź i popraw błędy lintingu      |
| `npm run lint:md-check` | Tylko sprawdź błędy (bez poprawek)   |
| `npm run format:md`     | Formatuj pliki Prettier              |
| `npm run check:md`      | Pełne sprawdzenie jakości            |
| `npm run fix:md`        | Popraw wszystkie błędy automatycznie |

## ⚙️ Konfiguracja

### .markdownlint.json

```json
{
  "default": true,
  "MD013": {
    "line_length": 120,
    "code_blocks": false,
    "tables": false
  },
  "MD033": {
    "allowed_elements": ["details", "summary", "br", "kbd", "sub", "sup"]
  },
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

## 🔄 Workflow

### Lokalne sprawdzanie

1. **Przed commitem** - uruchom `npm run check:md`
2. **Automatyczne poprawki** - `npm run fix:md`
3. **VS Code** - automatyczne formatowanie przy zapisie

### CI/CD Pipeline

- **GitHub Actions** sprawdza każdy PR
- **Automatyczne komentarze** w PR przy błędach
- **Blokada merge** przy niepoprawnych plikach

## 📏 Standardy jakości

### Wymagania

- ✅ Maksymalna długość linii: 120 znaków
- ✅ Spójne formatowanie nagłówków
- ✅ Poprawne listy i tabele
- ✅ Brak pustych linków
- ✅ Spójne wcięcia

### Dozwolone elementy HTML

- `<details>` i `<summary>` - dla rozwijanych sekcji
- `<br>` - łamanie linii
- `<kbd>` - klawisze
- `<sub>` i `<sup>` - indeksy

## 🐛 Rozwiązywanie problemów

### Częste błędy

**MD013 - Line too long**

```bash
# Automatyczna poprawka
npm run format:md
```

**MD032 - Lists should be surrounded by blank lines**

```markdown
# Źle

Tekst przed listą

- Element 1
- Element 2
  Tekst po liście

# Dobrze

Tekst przed listą

- Element 1
- Element 2

Tekst po liście
```

**MD025 - Multiple top level headings**

```markdown
# Źle - dwa główne nagłówki

# Nagłówek 1

# Nagłówek 2

# Dobrze - jeden główny nagłówek

# Główny nagłówek

## Podnagłówek 1

## Podnagłówek 2
```

### Debug

```bash
# Szczegółowe informacje o błędach
npx markdownlint "**/*.md" --verbose

# Sprawdź konkretny plik
npx markdownlint docs/README.md
```

## 🎯 Najlepsze praktyki

### Struktura dokumentu

```markdown
# Główny tytuł (tylko jeden na dokument)

## Sekcja główna

### Podsekcja

#### Szczegóły (maksymalnie 4 poziomy)
```

### Formatowanie kodu

````markdown
# Inline code

Użyj `npm install` do instalacji.

# Bloki kodu z językiem

```bash
npm run build
```
````

# Długie komendy

```bash
npm run very-long-command-name \
  --with-many-options \
  --and-parameters
```

````

### Linki i obrazy

```markdown
# Linki
[Tekst linku](https://example.com)

# Obrazy z alt text
![Opis obrazu](path/to/image.png)

# Referencyjne linki
[Tekst linku][ref]

[ref]: https://example.com
````

## 🔍 Monitorowanie jakości

### Metryki

- **Pokrycie lintingu**: 100% plików .md
- **Automatyczne poprawki**: >90% błędów
- **Czas sprawdzania**: <30s w CI/CD
- **False positives**: <5%

### Raporty

GitHub Actions generuje raporty jakości dostępne w zakładce Actions każdego PR.

---

**Commit message**: `docs(markdown): dodaj kompletny system sprawdzania jakości Markdown

- Konfiguracja markdownlint i prettier
- GitHub Actions dla CI/CD
- Skrypty automatyzacji
- Integracja z VS Code
- Przewodnik użytkownika`
