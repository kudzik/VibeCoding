# ✅ Aplikacja z Fiszkami do Nauki Języka Angielskiego — Lista TODO Funkcji (od Łatwych do Trudnych)

## 🟢 Faza 1: Konfiguracja Projektu i Strony Statyczne

- [x] Zainicjuj projekt z Vite + React + TypeScript  
  ✅ *Kryteria akceptacji:* Polecenie `npm run dev` uruchamia serwer deweloperski Vite z działającym projektem React+TS.

- [x] Ustaw strukturę plików (`/components`, `/data`, `/pages`)  
  ✅ *Kryteria akceptacji:* Istnieje struktura katalogów z logicznym podziałem na komponenty, dane statyczne i widoki stron.

- [x] Stwórz statyczny plik JSON lub TS z fiszkami pogrupowanymi według kategorii (zwierzęta, jedzenie, czasowniki)  
  ✅ *Kryteria akceptacji:* Plik eksportuje co najmniej 3 fiszki na kategorię z odpowiednim formatem: `english`, `polish`, `category` i `quiz`.

- [x] Utwórz Stronę Główną z przyciskami nawigacyjnymi:  
  - [x] Tryb nauki  
    ✅ *Kryteria akceptacji:* Przycisk/link prowadzi do wyboru kategorii w trybie nauki.  
  - [x] Tryb quizu  
    ✅ *Kryteria akceptacji:* Przycisk/link prowadzi do wyboru kategorii do quizu.  
  - [x] Strona ze statystykami  
    ✅ *Kryteria akceptacji:* Przycisk/link prowadzi do strony ze statystykami.

## 🟢 Faza 2: Tryb nauki fiszek (podstawowy)

- [x] Stwórz `CategorySelectionPage` do wyboru kategorii  
  ✅ *Kryteria akceptacji:* Lista zawiera wszystkie 3 kategorie; kliknięcie przechodzi do trybu Nauka lub Quiz w zależności od wybranego trybu.

- [x] Stwórz komponent `Flashcard` pokazujący:  
  - [x] Słowo po angielsku (przód)  
    ✅ *Kryteria akceptacji:* Słowo po angielsku jest wyświetlane domyślnie.  
  - [x] Słowo po polsku (tył)  
    ✅ *Kryteria akceptacji:* Fiszka odwraca się i pokazuje tłumaczenie po polsku.  
  - [x] Interakcja odwracania (kliknij, aby odwrócić)  
    ✅ *Kryteria akceptacji:* Kliknięcie powoduje animację odwrócenia kartki.

- [ ] Pokaż przyciski "✅ Poprawnie" i "❌ Źle" po odwróceniu  
  ✅ *Kryteria akceptacji:* Przyciski pojawiają się tylko po odwróceniu i pozwalają oznaczyć odpowiedź jako poprawną lub błędną. Po kliknięciu pojawia się kolejna fiszka.

- [ ] Śledź błędne odpowiedzi w stanie React  
  ✅ *Kryteria akceptacji:* Fiszki oznaczone jako "Źle" są zapisywane w stanie komponentu lub aplikacji do późniejszego wykorzystania.

- [ ] Pozwól użytkownikowi przechodzić przez wszystkie fiszki w wybranej kategorii  
  ✅ *Kryteria akceptacji:* Użytkownik może przejrzeć fiszki po kolei do końca.

## 🟡 Faza 3: Tryb powtórek (tylko błędne fiszki)

- [ ] Dodaj przycisk "Powtórz błędne fiszki" na stronie głównej lub po zakończeniu nauki  
  ✅ *Kryteria akceptacji:* Przycisk pojawia się po sesji nauki, jeśli były błędne fiszki; kliknięcie rozpoczyna sesję powtórkową.

- [ ] Pokaż tylko błędne fiszki w trybie powtórek  
  ✅ *Kryteria akceptacji:* Komponent fiszki jest ponownie użyty, ale wyświetla tylko błędne karty z poprzedniej rundy.

- [ ] Pozwól zresetować listę błędnych fiszek  
  ✅ *Kryteria akceptacji:* Użytkownik może wyczyścić listę błędów przyciskiem lub w ustawieniach.

## 🟡 Faza 4: Tryb quizu

- [ ] Stwórz `QuizSelectionPage` do wyboru kategorii i typu quizu  
  ✅ *Kryteria akceptacji:* Strona pokazuje typy quizów (wielokrotny wybór, uzupełnij lukę) i dostępne kategorie do rozpoczęcia quizu.

- [ ] Implementuj quiz wielokrotnego wyboru:  
  - [ ] Pokaż słowo po angielsku  
    ✅ *Kryteria akceptacji:* Słowo jest wyraźnie wyświetlone na górze.  
  - [ ] Pokaż 4 opcje po polsku (1 poprawna, 3 odwracacze)  
    ✅ *Kryteria akceptacji:* Dokładnie 4 opcje, jedna poprawna zgodna z danymi fiszki.  
  - [ ] Informacja zwrotna o poprawności wyboru  
    ✅ *Kryteria akceptacji:* Użytkownik od razu widzi, czy odpowiedź jest poprawna, czy nie.

- [ ] Implementuj quiz uzupełnianie luk:  
  - [ ] Pokaż słowo po angielsku  
    ✅ *Kryteria akceptacji:* Słowo jest widoczne jako pytanie.  
  - [ ] Pole tekstowe do wpisania słowa po polsku  
    ✅ *Kryteria akceptacji:* Użytkownik może wpisać tłumaczenie w polu tekstowym.  
  - [ ] Porównanie bez uwzględniania wielkości liter  
    ✅ *Kryteria akceptacji:* Odpowiedź jest uznawana za poprawną niezależnie od wielkości liter.  
  - [ ] Informacja zwrotna, czy odpowiedź jest prawidłowa  
    ✅ *Kryteria akceptacji:* Aplikacja informuje wyraźnie ("Poprawnie!" lub "Źle — poprawna odpowiedź to: ...").

## 🔴 Faza 5: Śledzenie statystyk

- [ ] Śledź liczbę przerobionych fiszek w każdej kategorii  
  ✅ *Kryteria akceptacji:* Przy każdym przerobieniu fiszki liczba jest zapisywana w stanie aplikacji według kategorii.

- [ ] Śledź liczbę poprawnych i błędnych odpowiedzi  
  ✅ *Kryteria akceptacji:* Sesje nauki i quizu odpowiednio zwiększają liczniki dla poprawnych i błędnych odpowiedzi.

- [ ] Przechowuj dane w `localStorage` (lub w pamięci, jeśli nie jest potrzebna trwałość)  
  ✅ *Kryteria akceptacji:* Statystyki przetrwają odświeżenie przeglądarki (przy localStorage), w przeciwnym razie resetują się.

- [ ] Stwórz `StatsPage` do wyświetlania:  
  - [ ] Całkowitej liczby przerobionych fiszek  
    ✅ *Kryteria akceptacji:* Pokazuje sumę przerobionych fiszek ze wszystkich kategorii.  
  - [ ] Liczby/procentu poprawnych odpowiedzi  
    ✅ *Kryteria akceptacji:* Wyświetla ilość poprawnych, błędnych i procent skuteczności.  
  - [ ] Podział statystyk według kategorii  
    ✅ *Kryteria akceptacji:* Statystyki są pogrupowane i opisane według kategorii (np. Zwierzęta: 80% poprawnych).