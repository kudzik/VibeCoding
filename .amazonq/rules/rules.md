# Zasady pisania kodu dla AI – Najlepsze praktyki

ZAWSZE odpowiadaj po polsku

## Styl kodu

* Stosuj czytelny i spójny styl formatowania kodu (wcięcia, spacje, nawiasy).
* Nadaj sensowne i opisowe nazwy zmiennym, funkcjom, klasom i modułom.
* Unikaj nadmiernych skrótów i zbyt ogólnych nazw.
* W miarę możliwości korzystaj z konwencji przyjętych w danym języku (np. PEP8 w Pythonie).
* Włącz automatyczne narzędzia lintujące/formatujące (np. ESLint, Prettier, Black).

## Struktura kodu

* Dziel kod na małe, jednozadaniowe funkcje lub klasy.
* Unikaj duplikacji kodu (DRY – Don't Repeat Yourself).
* Używaj logicznego i przejrzystego układu plików i modułów.
* Oddzielaj logikę aplikacji od konfiguracji i warstw technicznych (np. MVC, service layers).

## Komentarze i dokumentacja

* Komentuj nietrywialne fragmenty kodu, wyjaśniając cel i działanie.
* Stosuj standardy dokumentacji (np. docstringi w Pythonie, Javadoc w Javie).
* Unikaj komentarzy oczywistych lub zbędnych.
* W README.md dodawaj przykłady użycia oraz instrukcję uruchomienia projektu.
* W pliku FEATURES.md dokumentuj nowe funkcje i zmiany w projekcie. Objasniaj ich cel i sposób użycia.

## Obsługa błędów

* Dodawaj odpowiednią obsługę wyjątków i błędów.
* Zapewniaj jasne komunikaty błędów ułatwiające debugowanie.
* Unikaj „cichej” obsługi błędów (np. pustych `except`).
* Zapisuj krytyczne błędy w logach z odpowiednim poziomem (ERROR, WARN, INFO).

## Wydajność i optymalizacja

* Wybieraj optymalne struktury danych i algorytmy.
* Unikaj niepotrzebnych obliczeń i nadmiarowych alokacji.
* Optymalizuj kod dopiero po potwierdzeniu problemu z wydajnością.
* Testuj wydajność krytycznych fragmentów kodu (np. benchmarki).

## Testowalność

* Pisząc kod, stosuj podejście umożliwiające łatwe testowanie (modułowość, wstrzykiwanie zależności).
* Generuj przykładowe testy jednostkowe dla ważnych funkcji.
* Dodawaj także testy integracyjne obejmujące cały przepływ aplikacji.
* Jeśli projekt korzysta z CI/CD (np. GitHub Actions), uruchamiaj testy przy każdej zmianie.

## Bezpieczeństwo

* Unikaj podatności na ataki (np. SQL injection, XSS).
* Waliduj wszystkie dane wejściowe.
* Nie zapisuj w repozytorium haseł ani kluczy API – używaj zmiennych środowiskowych (`.env`).
* Aktualizuj zależności i unikaj używania nieutrzymywanych bibliotek.

## Przykłady i konwencje

* W kodzie korzystaj ze wzorców i konwencji typowych dla danego języka programowania.
* Dokumentuj i tłumacz niestandardowe rozwiązania lub wzorce projektowe.
* Stosuj stałe i enumy zamiast „magic numbers” lub przypadkowych stringów.

## Git i historia zmian

* Twórz czytelne i zwięzłe opisy commitów.
* Grupuj zmiany logicznie (1 commit = 1 spójna zmiana).
* Unikaj commitów typu „update” czy „fix”.
* Za każdym razem, gdy generujesz lub modyfikujesz plik w projekcie dodaj wpis do pliku `History/Timeline.log`.

**Format wpisu:**

```text
[YYYY-MM-DD HH:MM:SS] [Dodano|Zmieniono] plik <nazwa_pliku> - <krótki opis zmiany>.
```

## Plik README.md

* Uzupełnij plik `README.md` w głównym katalogu projektu o nową funkcjonalność lub zmiany.
* Dodaj instrukcję instalacji, uruchomienia oraz przykłady użycia.
* W przypadku API – dołącz krótką specyfikację endpointów.

## TODO

* Jeśli istnieje plik `TODO.md` w projekcie, zaktualizuj go o nowe zadania.
* Oznaczaj wykonane zadania checkboxem.
* Dodawaj nowe, jeśli pojawiły się w trakcie pracy.

## Dodatkowe wskazówki

* Stosuj zasadę „Clean Code”: pisz kod tak, aby był zrozumiały bez dodatkowych wyjaśnień.
* Usuwaj martwy kod zamiast go zakomentowywać.
* Oznaczaj fragmenty eksperymentalne jako `# EXPERIMENTAL`.
* Regularnie refaktoryzuj – małymi krokami.
* Zawsze myśl o przyszłym utrzymaniu kodu przez innych programistów (lub przez AI).

---

Proponuj na końcu tekst commita do Git z podsumowaniem zmian wprowadzonych w kodzie zgodnie z powyższymi zasadami.
