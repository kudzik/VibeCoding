# Refaktoryzacja kodu

**Prompt:**  
Przygotuj kompleksowy plan refaktoryzacji kodu aplikacji //TODO:[nazwa aplikacji], uwzględniając następujące kroki:

- Zidentyfikuj duplikaty kodu i zredukuj powtarzające się fragmenty bez zmiany funkcjonalności.
- Użyj reasoning model do wykrycia nieczytelnych lub złożonych fragmentów kodu i zaproponuj ich uproszczenie.
- Zastosuj regułę komentowania Cursor – dodaj objaśniające komentarze do każdej funkcji, klasy i istotnego fragmentu logiki.
- Wprowadź techniki refaktoryzacji takie jak: _Extract Method_, _Inline Method_, _Refactoring by Abstraction_, _Collapsing Hierarchy_.
- Po każdej zmianie uruchom testy jednostkowe i E2E, aby upewnić się, że aplikacja działa zgodnie z oczekiwaniami.
- Wprowadź regułę Cursor, która automatycznie uruchamia testy po każdej zmianie w kodzie.
- Dokumentuj zmiany w commitach jako pojedyncze, logiczne jednostki, aby ułatwić śledzenie i ewentualne cofanie.
- Zastosuj narzędzia do analizy jakości kodu odpowiednie dla tego projektu i uwzględnij ich wyniki w procesie refaktoryzacji.
- Po zakończeniu refaktoryzacji wygeneruj raport porównujący jakość kodu przed i po zmianach.

## Reguły Cursor

Zrefaktoryzuj cały kod projektu zgodnie z regułą komentowania – dodaj objaśniające komentarze.
Zidentyfikuj duplikaty i zredukuj powtarzające się fragmenty kodu, bez zmiany funkcji aplikacji.
Po refaktoryzacji upewnij się, że wszystkie testy przechodzą.
Użyj reasoning model do wyszukania nieczytelnych fragmentów kodu i ich poprawy.

## Przed Refactor

```text
Wyjaśnij strukturę obecnego kodu w pliku @nazwa_pliku.js.

Zidentyfikuj fragmenty kodu wymagające refaktoryzacji w projekcie.

Wskaż funkcje lub moduły o zbyt dużej odpowiedzialności w @plik.js.

Zaproponuj podział pliku @plik.js na mniejsze, wyspecjalizowane części.

Wygeneruj testy jednostkowe dla krytycznych funkcji przed refaktoryzacją.

Sprawdź, czy obecne wdrożenie wymaga aktualizacji bibliotek lub zależności.

Podsumuj techniczne zadania do wykonania przed refaktoryzacją kodu.

Przedstaw listę potencjalnych problemów do rozwiązania w procesie refaktoryzacji.

Oceń jakość i czytelność kodu w @plik.js pod kątem przyszłej refaktoryzacji.

Sporządź short audit dot. stylu kodu i spójności w projekcie.- Wyjaśnij strukturę i zależności obecnego kodu w @plik.js.

Wygeneruj listę funkcji o złożonej logice wymagającej podziału.

Oceń fragmenty kodu pod kątem czytelności i wydajności przed refaktoryzacją.

Przygotuj testy jednostkowe dla kluczowych funkcji w @plik.js.

Zidentyfikuj powtarzające się fragmenty do wydzielenia jako osobne moduły.

Sprawdź zgodność projektu z obowiązującym styleguide.

Ustal główne cele refaktoryzacji dla kodu w projekcie.

Zrób szybki audit bezpieczeństwa wybranych funkcji przed zmianami.

Wskaż potencjalne problemy mogące wystąpić po refaktoryzacji.

Podsumuj istniejącą dokumentację kodu w @plik.js.
```

## Refactor

```text
Rozdziel logikę API i interfejs użytkownika @page.js na osobne pliki.

Zrefaktoruj funkcję @getUserData zgodnie z zasadą Single Responsibility Principle.

Podziel plik @auth.js na moduły: uwierzytelnianie, walidacja, sesja.

Wygeneruj testy jednostkowe dla @addKey.

Zmień pętle for na .map w całym pliku @users.js.

Zaktualizuj wszystkie wywołania API do wersji 2 w projekcie.

Przenieś logikę operacji CRUD do osobnego modułu @crud.js.

Zrefaktoruj kod, stosując wzorzec Strategia wszędzie, gdzie występuje switch.

Przeanalizuj kod pod kątem wydajności i zaproponuj optymalizacje.

Znajdź i napraw potencjalne problemy bezpieczeństwa w funkcji @login.

Zmień nazwę modułu Users na Members w projekcie.

Wygeneruj opis zmian do commita git po refaktoryzacji.

Podsumuj refaktoryzację i wskaż najważniejsze zmiany.

Oceń architekturę API i zaproponuj bardziej RESTful nazewnictwo.

Dodaj brakujące komentarze do wszystkich publicznych funkcji w @api.js.
```
