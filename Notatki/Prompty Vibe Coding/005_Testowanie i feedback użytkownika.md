# Testowanie i feedback użytkownika

**Prompt:**  
Przygotuj kompleksowy plan iteracyjnego testowania aplikacji, obejmujący testy A/B, beta testy oraz metody zbierania i analizowania feedbacku użytkowników. Dodaj strategie automatyzacji raportowania błędów oraz narzędzia do monitorowania jakości i satysfakcji użytkowników, jeśli jeszcze jakieś testy mają sens dla tej aplikacji to je dodaj.”

***

Jakie testy powinienem dodać do tej aplikacji, aby były zgodne z piramidą testów?
Napisz testy jednostkowe dla funkcji X w mojej aplikacji.
Wygeneruj testy end-to-end w Playwright dla głównych funkcji aplikacji.
Znajdź i popraw błąd w tej funkcji oraz napisz test, który go wychwyci.
Dodaj wpisy do .gitignore, aby nie commitować wyników testów i raportów.
Celowo wprowadź błąd w aplikacji, aby sprawdzić, czy testy E2E go wykryją.
Pokaż jak odrzucić zmiany wprowadzające błąd i przywrócić ostatni commit w Git.
Przywróć wersję aplikacji z wcześniejszego commita.
Wyjaśnij różnicę między git reset, git revert i git checkout w kontekście cofania zmian.

## Reguły Cursor

Dodaj nową regułę Cursor, aby zawsze uruchamiać testy po zmianach.
Załaduj przykładowe reguły Cursor dla tej aplikacji
Jak napisać regułę projektową Cursor ograniczającą stack do Vibecoding?

***

Zawsze po wprowadzeniu nowej funkcjonalności lub zmian w projekcie, automatycznie uruchamiaj testy używając odpowiedniej komendy testowej dla projektu.

**Jeśli projekt ma skonfigurowane testy:**

Sprawdź package.json aby znaleźć dostępne skrypty testowe
Użyj odpowiedniej komendy (np. npm test, npm run test, yarn test, itp.)

**Jeśli projekt nie ma jeszcze skonfigurowanych testów:**

Uruchom linter (npm run lint) jako alternatywę
Zasugeruj dodanie frameworka testowego (np. Vitest, Jest) jeśli to konieczne
