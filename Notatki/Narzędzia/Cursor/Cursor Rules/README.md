# Cursor - AI Code Editor

Cursor to nowoczesny edytor kodu napędzany sztuczną inteligencją, który wyznacza nowy standard w pracy programisty i jest sercem technicznym podejścia pipe coding (vibecoding). Przypomina Visual Studio Code, ale z wbudowaną AI wspierającą tworzenie, rozumienie, refaktoryzację i tłumaczenie kodu w czasie rzeczywistym.

## Czym jest Cursor i jak działa?

- Zainstalowanie jest łatwe — program dostępny na główne systemy operacyjne automatycznie wykrywa środowisko użytkownika i przeprowadza przez intuicyjną konfigurację oraz logowanie.
- Interfejs oraz większość skrótów i motywów jest niemal identyczna z VSCode, a migracja własnych ustawień następuje jednym kliknięciem.
- Po uruchomieniu wybierasz tryb działania AI:
  - **Agent**: AI może tworzyć pliki, refaktoryzować i realizować złożone polecenia (pełna automatyzacja).
  - **Always Ask**: idealny do zadawania pytań o kod, wyjaśniania funkcji, analizowania fragmentów.
  - **Manual**: pozwala modyfikować wybrany kod na żądanie (np. poprawianie czytelności, dodawanie obsługi błędów).
- Wyróżnia się interaktywną konsolą czatu, gdzie piszesz prompt, a AI generuje kod, tłumaczy go lub udoskonala, na bieżąco tworząc i edytując pliki projektu.

### Najważniejsze funkcje Cursor

- **AI Autocomplete**: podpowiada całe bloki funkcji zgodnie z kontekstem projektu.
- **Refaktoryzacja kodu jednym poleceniem**: wybierasz kod i wpisujesz, co chcesz poprawić, zmienić, zoptymalizować, a AI wykonuje całość.
- **Natychmiastowa detekcja błędów**: błędy i niezgodności pojawiają się w trakcie pisania, co pozwala uniknąć długiego debugowania.
- **Wielojęzyczny support**: działa z Pythonem, JS, TS, Java, C#, Go i wieloma innymi językami oraz frameworkami.
- **Edytowanie przez prompt**: Command+K (Ctrl+K) pozwala zmieniać, zamieniać, generować kod nawet z poziomu terminala, także w języku naturalnym.
- **Zrozumienie kodu całego projektu**: AI analizuje repozytorium i daje sensowne, kontekstowe sugestie — można zadawać pytania o funkcje, pliki, zależności, a także korzystać z symboli „@” do odwołań między plikami.
- **Tryb agenta**: automatyzuje całe zadania (np. dodaje feature do aplikacji, przebudowuje projekt), tworzy/zmienia pliki, uruchamia komendy (po zatwierdzeniu przez użytkownika).
- **Praca z repozytoriami i serwerami zdalnymi**: umożliwia klonowanie repozytoriów GitHub, pracę przez SSH i korzystanie z AI w chmurze czy na serwerach.

### Przykładowe zastosowania

- Tworzenie MVP, prototypów, refaktoryzacja kodu, uczenie się nowych technologii poprzez praktyczne działanie.
- Automatyczne generowanie dokumentacji, testów, wyjaśnień oraz audytu bezpieczeństwa na podstawie poleceń w języku naturalnym.
- Błyskawiczne przeszukiwanie baz kodu, debugowanie i wdrażanie rozwiązań bez wychodzenia z edytora.

### Podsumowanie

Cursor to wszechstronne, wyjątkowo elastyczne narzędzie integrujące wszystkie możliwości AI bezpośrednio w środowisku pracy programisty. Ułatwia tworzenie, testowanie, analizę i optymalizację kodu – zwłaszcza w projektach edukacyjnych, prototypowych oraz przy nauce nowoczesnych technologii.
CLI

## Cursor Agent

```bash
cursor-agent
```

Profil WSL

```text
C:\WINDOWS\system32\wsl.exe --distribution-id {f5e5a08e-4a9d-4048-950f-4dcc2be095c4} --cd ~ bash -c "~/.local/bin/cursor-agent"
```
