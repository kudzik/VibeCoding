# 🛠️ Tablica Kanban – Lista zadań developerskich

## 1. Konfiguracja

- [ ] Inicjalizacja projektu z **Vite + React + TypeScript**
- [ ] Instalacja i konfiguracja **Tailwind CSS**
- [ ] Instalacja zależności **dnd-kit**:
  - `@dnd-kit/core`
  - `@dnd-kit/sortable`
  - `@dnd-kit/modifiers`
- [ ] Utworzenie struktury plików projektu (`components/`, `hooks/`, `utils/`, itd.)
- [ ] Stworzenie statycznego układu Kanban z 3 zakodowanymi kolumnami („Do zrobienia”, „W trakcie”, „Zrobione”)
- [ ] Implementacja podstawowych komponentów kart (statyczne tytuły)
- [ ] Dodanie podstawowej funkcji przeciągania kart między kolumnami (bez zapisu danych)
- [ ] Implementacja sortowania kart w obrębie kolumny poprzez przeciąganie

---

## 2. Konfiguracja Supabase

- [ ] Utworzenie projektu Supabase
- [ ] Utworzenie tabel `columns` i `cards` zgodnie z modelem danych
- [ ] Konfiguracja klienta Supabase w frontendzie
- [ ] Implementacja funkcji API do:
  - Pobierania kolumn i kart
  - Tworzenia/aktualizacji/usuwania rekordów
- [ ] Opcjonalne zasilenie danych początkowych

---

## 3. Podstawowa funkcjonalność

- [ ] Ładowanie kolumn i kart z Supabase
- [ ] Możliwość dodania nowej karty do dowolnej kolumny
- [ ] Przeciąganie kart między kolumnami i aktualizacja danych w Supabase
- [ ] Implementacja zmiany kolejności kart (aktualizacja pola `order` w bazie)

---

## 4. Zarządzanie kolumnami

- [ ] Dodawanie nowych kolumn
- [ ] Edycja tytułu kolumny bezpośrednio w miejscu
- [ ] Usuwanie kolumny (z potwierdzeniem i opcjonalnym usunięciem jej kart)
- [ ] Zmiana kolejności kolumn poprzez przeciąganie i aktualizacja pola `order` w bazie

---

## 5. Edycja kart

- [ ] Edycja tytułu karty bezpośrednio w miejscu
- [ ] Usuwanie karty

---

## 6. UI/UX i responsywność

- [ ] Stylowanie układu i komponentów za pomocą Tailwind dla nowoczesnego wyglądu
- [ ] Dodanie wizualnych efektów podczas przeciągania (np. strefy upuszczania, podniesienie)
- [ ] Zapewnienie responsywności na urządzeniach mobilnych
- [ ] Obsługa stanów ładowania, błędów i pustych danych

---

## 7. Finalne szlify

- [ ] Czyszczenie i optymalizacja kodu
- [ ] Dodanie pomocniczych hooków (np. useSortableList, useColumns)
- [ ] Potwierdzenie wydajności i użyteczności
- [ ] Wdrożenie projektu (np. Vercel lub Netlify)

---
