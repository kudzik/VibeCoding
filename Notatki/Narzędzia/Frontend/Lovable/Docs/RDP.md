# Dokument Wymagań Produktowych (PRD)

## Przegląd

Jednoplanszowy menedżer zadań w stylu Kanban z czystym, nowoczesnym interfejsem użytkownika i płynnymi interakcjami typu „przeciągnij i upuść”. Aplikacja zostanie zbudowana z wykorzystaniem **Vite**, **dnd-kit**, **Supabase** jako backendowego magazynu danych oraz **Tailwind CSS** do stylowania.

---

## Cele

- Umożliwić użytkownikom zarządzanie zadaniami na jednej tablicy Kanban bez konieczności logowania.
- Obsługa podstawowych operacji CRUD dla kolumn i kart.
- Zapewnić płynną i intuicyjną funkcjonalność przeciągania i upuszczania.
- Trwałe przechowywanie wszystkich danych za pomocą Supabase.
- Zapewnić responsywny i przyjazny dla urządzeń mobilnych interfejs.

---

## Stos technologiczny

- **Frontend:** Vite + React
- **Przeciąganie i upuszczanie:** `@dnd-kit/core`, `@dnd-kit/sortable`
- **Stylowanie:** Tailwind CSS
- **Backend/Magazyn danych:** Supabase (tylko baza danych)
- **Hosting:** Do ustalenia (np. Vercel, Netlify)

---

## Funkcje

### 1. Kolumny

- Wyświetlanie wielu kolumn (domyślnie: „Do zrobienia”, „W trakcie”, „Zrobione”)
- Dodawanie nowych kolumn
- Zmiana nazwy istniejących kolumn
- Usuwanie kolumn (z potwierdzeniem)
- Zmiana kolejności kolumn poprzez przeciąganie

### 2. Karty

- Wyświetlanie kart zadań w kolumnach
- Dodawanie nowych kart do dowolnej kolumny
- Edycja tytułów kart bezpośrednio w miejscu
- Usuwanie kart
- Zmiana kolejności kart w obrębie kolumny
- Przenoszenie kart między kolumnami poprzez przeciąganie

### 3. Przeciąganie i upuszczanie

- Płynne i dostępne interakcje typu drag-and-drop
- Wizualne wskaźniki stanu przeciągania (np. cień, podświetlenie)

### 4. Przechowywanie danych

- Wszystkie dane (kolumny i karty) zapisywane i ładowane przez Supabase
- Synchronizacja w czasie rzeczywistym **nie jest wymagana**

### 5. Design i UX

- Responsywny układ dla urządzeń mobilnych i komputerów
- Czysta, nowoczesna estetyka
- Płynne przejścia w interfejsie

---

## Zakres wykluczony

- Obsługa wielu tablic
- Konta użytkowników i logowanie
- Współpraca w czasie rzeczywistym
- Metadane kart (np. terminy, etykiety)

---

## Model danych

### Tabela kolumn

| Pole         | Typ       | Uwagi                    |
| ------------ | --------- | ------------------------ |
| `id`         | UUID      | Klucz główny             |
| `title`      | Text      | Nazwa kolumny            |
| `order`      | Integer   | Pozycja na tablicy       |
| `created_at` | Timestamp | Generowane automatycznie |

### Tabela kart

| Pole         | Typ       | Uwagi                      |
| ------------ | --------- | -------------------------- |
| `id`         | UUID      | Klucz główny               |
| `column_id`  | UUID      | Klucz obcy do `columns.id` |
| `title`      | Text      | Tytuł karty                |
| `order`      | Integer   | Pozycja w kolumnie         |
| `created_at` | Timestamp | Generowane automatycznie   |

---
