# 🤖 Zasady dla AI Assistant - VibeCoding

**ZAWSZE odpowiadaj po polsku**

## 📝 Dokumentacja i śledzenie zmian

### Timeline

- Za każdym razem, gdy generujesz lub modyfikujesz plik w projekcie dodaj wpis do `History/Timeline.log`
- **Format:** `[YYYY-MM-DD HH:MM:SS] [Dodano|Zmieniono] plik <nazwa_pliku> - <krótki opis zmiany>`

### Changelog

- Aktualizuj `History/CHANGELOG.md` zgodnie z [Keep a Changelog](https://keepachangelog.com/pl/1.1.0/)
- Używaj wersjonowania semantycznego
- Kategoryzuj zmiany: Dodano ✅, Zmieniono 🛠️, Usunięto 🗑️, Naprawiono 🐛

### README i dokumentacja

- Aktualizuj `README.md` przy znaczących zmianach
- Dodawaj instrukcje instalacji, uruchomienia i przykłady użycia
- W `FEATURES.md` dokumentuj nowe funkcje z opisem celu i sposobu użycia
- Dla API dołączaj specyfikację endpointów

## 💻 Styl i struktura kodu

### Formatowanie

- Stosuj czytelny i spójny styl (wcięcia, spacje, nawiasy)
- Używaj konwencji języka (PEP8, ESLint, Prettier)
- Nadawaj opisowe nazwy zmiennym, funkcjom, klasom
- Unikaj skrótów i ogólnych nazw

### Architektura

- Dziel kod na małe, jednozadaniowe funkcje
- Zasada DRY (Don't Repeat Yourself)
- Logiczny układ plików i modułów
- Oddzielaj logikę od konfiguracji (MVC, service layers)

## 📚 Komentarze i dokumentacja kodu

- Komentuj nietrywialne fragmenty z wyjaśnieniem celu
- Stosuj standardy dokumentacji (docstringi, Javadoc)
- Unikaj oczywistych komentarzy
- Oznaczaj kod eksperymentalny jako `# EXPERIMENTAL`

## 🛡️ Obsługa błędów i bezpieczeństwo

### Błędy

- Dodawaj odpowiednią obsługę wyjątków
- Jasne komunikaty błędów dla debugowania
- Unikaj "cichej" obsługi błędów
- Loguj krytyczne błędy (ERROR, WARN, INFO)

### Bezpieczeństwo

- Waliduj wszystkie dane wejściowe
- Unikaj SQL injection, XSS
- Nie zapisuj haseł/kluczy w repo - używaj `.env`
- Aktualizuj zależności regularnie

## ⚡ Wydajność i testowanie

### Optymalizacja

- Wybieraj optymalne struktury danych i algorytmy
- Unikaj niepotrzebnych obliczeń
- Optymalizuj po potwierdzeniu problemu
- Testuj wydajność krytycznych fragmentów

### Testy

- Kod modułowy, łatwy do testowania
- Generuj testy jednostkowe dla ważnych funkcji
- Dodawaj testy integracyjne
- Integruj z CI/CD (GitHub Actions)

## 🔄 Git i wersjonowanie

### Commity

- Czytelne i zwięzłe opisy
- 1 commit = 1 spójna zmiana
- Unikaj commitów typu "update", "fix"

### Commit Messages (Conventional Commits)

**Format:** `<typ>(<zakres>): <opis>`

**Typy:**

- `feat`: nowa funkcjonalność
- `fix`: poprawka błędu
- `docs`: dokumentacja
- `style`: formatowanie
- `refactor`: refaktoryzacja
- `test`: testy
- `chore`: zadania pomocnicze

**Przykład:**

```
feat(auth): dodaj logowanie przez Google

- Integracja z Google OAuth 2.0
- Walidacja tokenów
- Przekierowanie po logowaniu
```

## 📋 Zarządzanie zadaniami

### TODO

- Aktualizuj `TODO.md` o nowe zadania
- Oznaczaj wykonane checkboxem ✅
- Dodawaj nowe zadania w trakcie pracy

## 🎯 Dodatkowe zasady

### Clean Code

- Kod zrozumiały bez dodatkowych wyjaśnień
- Usuwaj martwy kod zamiast komentować
- Regularnie refaktoryzuj małymi krokami
- Myśl o przyszłym utrzymaniu przez innych

### Wzorce i konwencje

- Używaj wzorców typowych dla języka
- Dokumentuj niestandardowe rozwiązania
- Stosuj stałe i enumy zamiast "magic numbers"

---

## 🚀 Workflow

1. **Analiza zadania** - zrozum wymagania
2. **Planowanie** - określ strukturę i podejście
3. **Implementacja** - pisz kod zgodnie z zasadami
4. **Dokumentacja** - aktualizuj pliki dokumentacyjne
5. **Timeline** - dodaj wpis do Timeline.log
6. **Commit** - zaproponuj message zgodny z Conventional Commits

---

**Na końcu każdej odpowiedzi zawsze proponuj commit message zgodny z powyższymi zasadami.**
