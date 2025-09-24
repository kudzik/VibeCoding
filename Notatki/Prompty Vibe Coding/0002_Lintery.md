Pomóż mi zaimplementować i skonfigurować pre-commit hooki w projekcie backendowym opartym na Pythonie 3.11 i FastAPI. Projekt używa następujących narzędzi:

- flake8 (linting)
- black (formatowanie kodu)
- isort (sortowanie importów)
- mypy (sprawdzanie typów)
- pre-commit (zarządzanie hookami)
- opcjonalnie: bandit, pylint (jeśli da się je bezkonfliktowo zintegrować)

Struktura projektu:

- katalog główny: `/backend`
- główny plik aplikacji: `/backend/app/main.py`
- środowisko wirtualne aktywowane lokalnie

Zadania:

1. Wygeneruj plik `.pre-commit-config.yaml` z poprawną konfiguracją hooków.
2. Ujednolić ustawienia (np. `max-line-length=100`) między flake8, black i isort.
3. Uwzględnij ignore-missing-imports dla mypy.
4. Dodaj podstawowe hooki z `pre-commit-hooks` (np. trailing-whitespace, end-of-file-fixer).
5. Pokaż komendy do instalacji zależności i aktywacji hooków (`pre-commit install`, `pre-commit run`).
6. Uwzględnij typowe problemy konfiguracyjne i ich rozwiązania (np. konflikt długości linii, błędy dekoratorów FastAPI).
7. Zadbaj o kompatybilność z systemem Windows (np. brak `&&` w PowerShell).
8. Jeśli bandit lub pylint powodują konflikty, zaproponuj ich tymczasowe wyłączenie.

Dodatkowo:

- Wyjaśnij każdy krok konfiguracji.
- Pokaż jak przetestować hooki ręcznie (`pre-commit run --all-files`) i automatycznie (`git commit`).
- Zadbaj o to, by konfiguracja była gotowa do pracy zespołowej (czytelna, stabilna, bez fałszywych błędów).

Na końcu wygeneruj checklistę wdrożenia i podsumowanie działania hooków.
