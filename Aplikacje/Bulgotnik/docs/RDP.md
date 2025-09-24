# Product Requirements Document (PRD)

## Aplikacja: Bulgotnik

---

## 1. Cel produktu

Aplikacja „Bulgotnik” ma na celu dostarczenie użytkownikom intuicyjnej i nowoczesnej platformy mobilnej umożliwiającej wyszukiwanie, przeglądanie i zarządzanie przepisami kulinarnymi opartymi na sezonowych składnikach dostępnych lokalnie. Aplikacja umożliwi personalizację preferencji dietetycznych, dodawanie własnych przepisów oraz wykorzystanie funkcji społecznościowych. Produkt ma wspierać zdrowe i świadome gotowanie, a także promować korzystanie z lokalnych, sezonowych produktów.

---

## 2. Grupa docelowa

- Osoby dorosłe (18-55 lat) zainteresowane zdrowym stylem życia i sezonowym gotowaniem.
- Użytkownicy smartfonów z Android i iOS z podstawową wiedzą technologiczną.
- Osoby dbające o dietę lub posiadające alergie pokarmowe (weganie, bezglutenowcy itp.).
- Entuzjaści kulinarni chcący dzielić się własnymi przepisami i angażować się w społeczność.

---

## 3. Wymagania funkcjonalne

### 3.1. Funkcje MVP

- Automatyczne pobieranie sezonowych składników na podstawie geolokalizacji z integracją z zewnętrznymi API (np. OpenFoodFacts).
- Przeglądanie listy przepisów z podziałem na kategorie i prezentacją zdjęć potraw.
- Ustawienia preferencji dietetycznych (wegańska, bezglutenowa, itp.) i filtracja przepisów na ich podstawie.
- Dodawanie własnych przepisów przez użytkowników z ręczną akceptacją przed publikacją.
- System oceniania i komentowania przepisów.
- Tryb offline – możliwość korzystania z ostatnio pobranych danych bez internetu.
- Powiadomienia push informujące o nowych sezonowych składnikach oraz przepisach.
- Logowanie i rejestracja kont użytkowników z Firebase Authentication.
- Podstawowy nowoczesny interfejs użytkownika z obsługą motywów jasny/ciemny.

### 3.2. Funkcje przyszłościowe

- Integracja z serwisami zakupów online (generowanie i synchronizacja list zakupów).
- Profile użytkowników, rankingi przepisów i funkcje społecznościowe.
- Możliwość dodawania przepisów w formie filmów z YouTube (aspekt multimedialny).
- Zaawansowana automatyczna moderacja treści i społecznościowa weryfikacja.
- System rekomendacji oparty na AI lub ML dostosowujący przepisy do stylu użytkownika.
- Integracja kalendarza i planera posiłków z przypomnieniami.

---

## 4. Wymagania niefunkcjonalne

- **Wydajność:** Aplikacja powinna działać płynnie na urządzeniach średniej klasy, z szybkim czasem ładowania i responsywnym UI.
- **Bezpieczeństwo:** Zabezpieczenie danych użytkowników, uwierzytelnianie i zgodność z RODO dotycząca danych osobowych i lokalizacji.
- **Dostępność:** Obsługa języka polskiego z możliwością rozbudowy o inne wersje językowe, wsparcie motywów jasny/ciemny.
- **Skalowalność:** Architektura umożliwiająca łatwe dodawanie nowych funkcji i wzrost bazy użytkowników bez utraty jakości.
- **Tryb offline:** Logika cache’owania danych, aby zapewnić dostęp do kluczowych funkcji bez połączenia internetowego.

---

## 5. User Experience (UX) i Interfejs (UI)

- Intuicyjny i przejrzysty interfejs zgodny z najnowszymi trendami UX/UI.
- Jasny i ciemny motyw do wyboru przez użytkownika.
- Łatwo dostępna nawigacja z podziałem na kategorie przepisów i składników.
- Duże, atrakcyjne zdjęcia i czytelna typografia.
- Minimalistyczne i spójne animacje poprawiające doświadczenie użytkownika.

---

## 6. Technologie i architektura

- **Frontend:** Flutter (Dart) – aplikacja na Android i iOS z jednego kodu.
- **Backend:** Firebase (Firestore, Authentication, Cloud Messaging, Analytics, Crashlytics).
- **Integracje:** API OpenFoodFacts, lokalne bazy danych sezonowości (zaimplementowane w kolejnych iteracjach).
- **Analityka:** Firebase Analytics do monitorowania użytkowników i poprawek produktu.
- **Powiadomienia:** Firebase Cloud Messaging dla push notifications.
- **Tryb offline:** Cache’owanie danych lokalnie z synchronizacją po połączeniu.

---

## 7. Plan wdrożenia i etapowanie projektu

- Etap 1 (MVP): Fundamenty + podstawowe funkcje (logowanie, przeglądanie i dodawanie przepisów, powiadomienia).
- Etap 2: Rozszerzenie personalizacji i filtrów, funkcje społecznościowe, ulepszone powiadomienia.
- Etap 3: Integracja rozszerzonych funkcji multimedialnych i AI, zakupów online, planera posiłków.

---

## 8. Mierniki sukcesu (KPI)

- Liczba aktywnych użytkowników dziennie/miesięcznie (DAU/MAU).
- Liczba pobrań i instalacji aplikacji.
- Zaangażowanie: czas spędzony w aplikacji, liczba ocen i komentarzy.
- Liczba dodanych i zatwierdzonych przepisów użytkowników.
- Stopień retencji użytkowników po 1, 7, 30 dniach od instalacji.
- Konwersja na płatną wersję premium (w przyszłości).

---

## 9. Ograniczenia i ryzyka

- Możliwość niedokładności danych o sezonowości z zależnych od zewnętrznych API.
- Potrzeba ręcznej moderacji przepisów na start – ograniczenia skalowalności przed wdrożeniem automatyzacji.
- Potencjalne ryzyko niepełnej implementacji trybu offline na wszystkich urządzeniach.
- Wymagania zgodności z RODO mogą wpłynąć na funkcjonalności związane z lokalizacją.

---

## 10. Załączniki i diagramy

- Diagram architektury systemu (frontend, backend, integracje).
- Schemat bazy danych Firestore (kolekcje, relacje).
- Przykładowe makiety UI (ekran główny, dodawanie przepisu, ustawienia).

---
