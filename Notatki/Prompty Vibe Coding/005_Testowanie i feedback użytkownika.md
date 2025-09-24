# Testowanie i feedback użytkownika

**Prompt:**  
Przygotuj kompleksowy plan iteracyjnego testowania aplikacji, obejmujący testy A/B, beta testy oraz metody zbierania i analizowania feedbacku użytkowników. Dodaj strategie automatyzacji raportowania błędów oraz narzędzia do monitorowania jakości i satysfakcji użytkowników, jeśli jeszcze jakieś testy mają sens dla tej aplikacji to je dodaj.”

---

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

---

Zawsze po wprowadzeniu nowej funkcjonalności lub zmian w projekcie, automatycznie uruchamiaj testy używając odpowiedniej komendy testowej dla projektu.

**Jeśli projekt ma skonfigurowane testy:**

Sprawdź package.json aby znaleźć dostępne skrypty testowe
Użyj odpowiedniej komendy (np. npm test, npm run test, yarn test, itp.)

**Jeśli projekt nie ma jeszcze skonfigurowanych testów:**

Uruchom linter (npm run lint) jako alternatywę
Zasugeruj dodanie frameworka testowego (np. Vitest, Jest) jeśli to konieczne

---

Testy jednostkowe (Unit Tests):

Sprawdzenie poprawności działania komponentów React/Vue/Angular (lub innej biblioteki/frameworka użytego w SPA).
Weryfikacja logiki biznesowej w izolowanych jednostkach kodu (np. funkcje, hooks, reducery w Redux).
Narzędzia: Jest, Mocha, Chai, Vitest.
Przykład: Testowanie, czy funkcja sortująca listę produktów zwraca poprawne wyniki dla różnych danych wejściowych.

Testy integracyjne:

Weryfikacja współpracy między komponentami (np. czy komponent nadrzędny poprawnie przekazuje dane do komponentu potomnego).
Testowanie interakcji z API (mockowanie odpowiedzi z backendu).
Narzędzia: Jest, Testing Library, Cypress (dla testów end-to-end z integracją).
Przykład: Testowanie, czy formularz logowania poprawnie komunikuje się z API i wyświetla błędy w przypadku niepoprawnych danych.

Testy end-to-end (E2E):

Symulacja rzeczywistych scenariuszy użytkownika (np. rejestracja, logowanie, dodanie produktu do koszyka, złożenie zamówienia).
Weryfikacja pełnych przepływów użytkownika w aplikacji.
Narzędzia: Cypress, Playwright, Selenium.
Przykład: Test scenariusza zakupu produktu od strony głównej do potwierdzenia zamówienia.

2.2. Testy niefunkcjonalne
Testy niefunkcjonalne koncentrują się na wydajności, dostępności i użyteczności aplikacji.

Testy wydajnościowe:

Pomiar czasu ładowania strony (initial load, lazy loading).
Testowanie szybkości renderowania komponentów przy dużej ilości danych.
Weryfikacja wydajności przy wielu użytkownikach (stress testing).
Narzędzia: Lighthouse, WebPageTest, JMeter.
Przykład: Sprawdzenie, czy strona główna ładuje się w czasie poniżej 2 sekund.

Testy dostępności (Accessibility):

Weryfikacja zgodności z WCAG 2.1 (np. kontrast kolorów, nawigacja klawiaturą, wsparcie dla czytników ekranu).
Testowanie etykiet ARIA i semantyki HTML.
Narzędzia: Axe, WAVE, screen reader (NVDA, VoiceOver).
Przykład: Sprawdzenie, czy wszystkie przyciski mają odpowiednie atrybuty ARIA dla czytników ekranu.

Testy użyteczności (Usability):

Ocena intuicyjności interfejsu użytkownika (np. czy przyciski są łatwe do odnalezienia).
Testy z użytkownikami (user testing) w celu zebrania opinii na temat UX.
Przykład: Obserwacja, czy użytkownicy mogą bez problemu przejść przez proces rejestracji.

2.3. Testy kompatybilności
Celem jest zapewnienie, że aplikacja działa poprawnie na różnych urządzeniach, przeglądarkach i systemach operacyjnych.

Testy przeglądarkowe:

Weryfikacja działania aplikacji w popularnych przeglądarkach: Chrome, Firefox, Safari, Edge (w najnowszych i starszych wersjach).
Testowanie obsługi funkcji specyficznych dla przeglądarek (np. WebGL, Service Workers).
Narzędzia: BrowserStack, Sauce Labs.
Przykład: Sprawdzenie, czy animacje CSS działają poprawnie w Safari.

Testy responsywności:

Weryfikacja poprawności wyświetlania na różnych rozdzielczościach ekranu (desktop, tablet, smartfon).
Testowanie orientacji urządzenia (pionowa/pozioma).
Narzędzia: DevTools w przeglądarkach, Responsively App.
Przykład: Sprawdzenie, czy menu nawigacyjne jest czytelne na ekranach o szerokości 320px.

Testy na różnych systemach operacyjnych:

Weryfikacja na Windows, macOS, iOS, Android.
Przykład: Testowanie powiadomień push na urządzeniach z Androidem i iOS.

2.4. Testy bezpieczeństwa
Celem jest zapewnienie, że aplikacja jest odporna na typowe zagrożenia.

Testy podatności:

Skanowanie w poszukiwaniu luk typu XSS, CSRF, SQL Injection.
Weryfikacja zabezpieczeń API (np. autentykacja tokenów JWT, OAuth).
Narzędzia: OWASP ZAP, Burp Suite.
Przykład: Testowanie, czy dane wejściowe w formularzach są odpowiednio filtrowane.

Testy uwierzytelniania i autoryzacji:

Weryfikacja poprawności logowania (np. obsługa błędnych haseł, blokada po nieudanych próbach).
Sprawdzenie, czy użytkownicy mają dostęp tylko do uprawnionych zasobów.
Przykład: Test, czy użytkownik bez roli admina może uzyskać dostęp do panelu administracyjnego.

Testy bezpieczeństwa danych:

Weryfikacja szyfrowania danych (HTTPS, dane wrażliwe w localStorage).
Sprawdzenie, czy dane użytkownika są odpowiednio anonimizowane w logach.
Przykład: Testowanie, czy hasła są przechowywane w bezpieczny sposób (np. bcrypt).

2.5. Testy regresyjne

Weryfikacja, czy nowe zmiany nie zepsuły istniejących funkcjonalności.
Automatyzacja testów regresyjnych przy użyciu testów E2E i integracyjnych.
Narzędzia: Cypress, Playwright.
Przykład: Po dodaniu nowej funkcjonalności (np. filtrowania produktów), sprawdzenie, czy koszyk nadal działa poprawnie.

2.6. Testy obciążeniowe i skalowalności

Symulacja dużego ruchu na stronie (np. 1000 jednoczesnych użytkowników).
Weryfikacja, czy aplikacja i backend skalują się poprawnie.
Narzędzia: LoadRunner, Gatling, Locust.
Przykład: Testowanie, czy aplikacja utrzymuje stabilność przy 500 równoczesnych żądaniach do API.

2.7. Testy API

Weryfikacja poprawności odpowiedzi API (statusy HTTP, format JSON, dane).
Testowanie scenariuszy błędów (np. 404, 500).
Narzędzia: Postman, Insomnia, Jest (z mockowaniem).
Przykład: Sprawdzenie, czy endpoint /products zwraca poprawną listę produktów przy różnych parametrach zapytania.

2.8. Testy konfiguracyjne

Weryfikacja poprawności zmiennych środowiskowych (np. klucze API, adresy URL).
Sprawdzenie, czy aplikacja działa poprawnie w różnych środowiskach (dev, staging, prod).
Przykład: Testowanie, czy aplikacja poprawnie przełącza się na API produkcyjne po wdrożeniu.

1. Proces testowania

Przygotowanie środowiska testowego:

Skonfigurowanie środowisk (lokalne, staging).
Przygotowanie danych testowych (np. konta testowe, dane mockowe).

Wykonanie testów automatycznych:

Uruchomienie testów jednostkowych, integracyjnych i E2E w środowisku CI/CD (np. GitHub Actions, Jenkins).
Analiza raportów z testów (pokrycie kodu, błędy).

Testy manualne:

Przeprowadzenie testów użyteczności, dostępności i kompatybilności.
Weryfikacja scenariuszy, które trudno zautomatyzować (np. testy UX).

Raportowanie wyników:

Zebranie wyników testów (błędy, metryki wydajności).
Przygotowanie raportu z rekomendacjami poprawek.

Poprawki i retest:

Wdrożenie poprawek na podstawie wyników testów.
Ponowne wykonanie testów regresyjnych.

4. Kryteria akceptacji

Wszystkie testy jednostkowe i integracyjne przechodzą (min. 90% pokrycia kodu).
Testy E2E pokrywają 100% kluczowych przepływów użytkownika.
Strona spełnia wymagania WCAG 2.1 na poziomie AA.
Czas ładowania strony < 2 sekundy (dla 90% użytkowników).
Brak krytycznych luk bezpieczeństwa.
Aplikacja działa poprawnie na wszystkich wspieranych przeglądarkach i urządzeniach.

5. Narzędzia i zasoby

Testy automatyczne: Jest, Cypress, Playwright, Testing Library.
Wydajność: Lighthouse, WebPageTest.
Dostępność: Axe, WAVE.
Bezpieczeństwo: OWASP ZAP, Burp Suite.
Kompatybilność: BrowserStack, Sauce Labs.
API: Postman, Insomnia.
CI/CD: GitHub Actions, Jenkins, CircleCI.
