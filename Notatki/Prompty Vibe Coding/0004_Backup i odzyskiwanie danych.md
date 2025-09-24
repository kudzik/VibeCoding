# Backup i odzyskiwanie danych

## Kopie zapasowe

**Prompt:**  
Stwórz politykę tworzenia regularnych kopii zapasowych danych aplikacji i plan procedur odzyskiwania danych po awarii lub utracie. Uwzględnij techniczne i organizacyjne aspekty bezpieczeństwa danych na różnych poziomach systemu. Uwzględnij prace z repozytoruim kodu i systemem kontroli wersji.

## Git i kontrola wersji

### pre-commit hook

Co to są pre-commit hooki? ⚓
Pre-commit hooki to mechanizm w systemie kontroli wersji Git, który pozwala automatycznie uruchamiać skrypty lub narzędzia przed dokonaniem commita. Myśl o nich jak o bramkarzach, którzy sprawdzają kod, zanim trafi on do repozytorium. Jeśli któryś z testów zawiedzie, commit jest automatycznie zatrzymywany, co zapobiega dodawaniu błędnego, niesformatowanego lub niezgodnego ze standardami kodu do głównej gałęzi projektu.

Kluczową zaletą tego podejścia jest automatyzacja i wczesne wykrywanie błędów. Zamiast czekać na uwagi w przeglądzie kodu (code review) lub na błędy w systemie CI/CD (Continuous Integration/Continuous Deployment), programista otrzymuje natychmiastową informację zwrotną i może od razu poprawić problem.

**Prompt**

Pomóż mi zaimplementować i skonfigurować pre-commit hooki w nowym projekcie. Nie narzucam konkretnego stacku technologicznego — wybierz najlepsze narzędzia i konfigurację na podstawie charakterystyki projektu, jego struktury i plików.

Założenia:

- Projekt jest nowy, ale zawiera już podstawowe pliki backendowe i frontendowe.
- Chcę, by pre-commit hooki automatycznie sprawdzały jakość kodu, formatowanie, typy, importy, błędy bezpieczeństwa i inne typowe problemy.
- Zależy mi na stabilnej, łatwej w utrzymaniu konfiguracji, która działa na różnych systemach (Windows/macOS/Linux).
- Preferuję narzędzia, które dobrze integrują się z Git i CI/CD, ale nie muszą być wyłącznie pythonowe, JS-owe czy inne — wybierz optymalne.
- Jeśli projekt zawiera pliki konfiguracyjne (np. pyproject.toml, package.json, tsconfig.json), uwzględnij je w analizie.
- Uwzględnij też typowe problemy (np. konflikty między formatterami, długość linii, ignorowane błędy) i zaproponuj ich rozwiązanie.
- Pokaż jak zainstalować i aktywować hooki (`pre-commit install`, `run`, `migrate`, itd.).
-
- Dodaj checklistę wdrożeniową i podsumowanie działania hooków.

Dodatkowo:

- Jeśli projekt zawiera testy, uwzględnij hooki do ich uruchamiania.

- Jeśli projekt jest monorepo, uwzględnij konfigurację wielomodułową.

- Wygeneruj wymagane pliki, zależnie od wybranych narzędzi.
- Wyjaśnij, dlaczego wybrałeś dane technologie i jak je dostosowałeś do projektu.
