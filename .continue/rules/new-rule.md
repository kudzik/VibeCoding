# Zasady AI Assistant - VibeCoding (max skrót)

## Wybór technologii

- Małe: lekkie biblioteki, duże: frameworki.
- Znane technologie, dobra dokumentacja.
- Priorytet: Open Source > Freemium > Płatne.

| Typ      | Open Source                     |
| -------- | ------------------------------- |
| Frontend | React, Vue, Svelte, Angular     |
| Backend  | Node (Express, Fastify), Python |
| Mobile   | React Native, Flutter           |
| Desktop  | Electron, Tauri                 |
| Bazy     | PostgreSQL, MySQL, MongoDB      |

## Optymalizacja AI/LLM

- Używaj najtańszych modeli (GPT-3.5-turbo).
- Cache i minimalizuj długość promptów.

## Dokumentacja

- Aktualizuj Timeline, CHANGELOG.
- Pliki: README, LICENSE, CONTRIBUTING, SECURITY.

## Styl kodu

- Czytelny, max 120 znaków.
- Separation of Concerns, Single Responsibility.
- Komentuj „dlaczego”, nie „co”.

## Błędy i bezpieczeństwo

- Fail Fast, walidacja, HTTPS, security headers.
- Używaj SAST, dependency scanning.

## Testy i wydajność

- Testuj jednostkowo, integracyjnie, E2E.
- Lazy loading, caching, code splitting.

## Git i wersjonowanie

- Jasne commity, 1 zmiana = 1 commit.
- Conventional Commits.

## Zarządzanie zadaniami

- Aktualizuj TODO, ISSUE, BUGS.
- Dokumentuj ADR, taguj wersje.

## UX i dostępność

- Mobile First, ARIA, keyboard navigation.
- Kontrast ≥4.5:1, testy screen readerami.

## SEO i Web Performance

- LCP < 2.5s, FID < 100ms, CLS < 0.1.
- Semantic markup, sitemap, preload.
