Oto poprawiona wersja specyfikacji, gdzie języki zostały dostosowane do nauki angielskiego z polskim jako tłumaczeniem:  

# Aplikacja Webowa z Fiszkami do Nauki Angielskiego — Specyfikacja Oprogramowania

## Przegląd

Frontendowa aplikacja webowa z fiszkami, pomagająca użytkownikom w nauce słownictwa angielskiego. Zbudowana przy użyciu **Vite**, **React** i **TypeScript**. Aplikacja korzysta z **statycznych danych** do wyświetlania fiszek pogrupowanych w kategorie. Obsługuje tryby nauki, quizu i powtórek, ze śledzeniem wyników w pamięci przeglądarki.

***

## Stos Technologiczny

- **Aplikacja w kontenerze docker** nie zalezna od systemu operacyjnego 
- **Framework frontendowy:** React (z Vite + TypeScript)  
- **Przechowywanie danych:** statyczne pliki JSON/TypeScript (bez backendu)  
- **Zarządzanie stanem:** React `useState` / `useReducer`, opcjonalnie `useContext` lub Zustand  
- **Stylowanie:** CSS Modules, TailwindCSS lub dowolna preferowana metoda CSS  
- **Utrwalanie danych:** opcjonalne localStorage (do zapamiętywania błędnych odpowiedzi lub statystyk)  

***

## Funkcje

### 1. Tryb nauki fiszek

- Fiszki domyślnie pokazują słowo po angielsku.  
- Kliknięcie na fiszkę odwraca ją, ujawniając tłumaczenie po polsku.  
- Po odwróceniu pojawiają się dwa przyciski:  
  - ✅ „Odpowiedziałem poprawnie”  
  - ❌ „Odpowiedziałem źle”  
- Aplikacja zapamiętuje, które fiszki zostały oznaczone jako błędne.  

### 2. Tryb powtórek

- Możliwość nauki tylko fiszek oznaczonych jako **„błędne”** podczas poprzedniej sesji.  
- Działa jak tryb nauki, ale obejmuje wyłącznie fiszki błędne.  
- Użytkownik może w każdej chwili zresetować tę listę.  

### 3. Kategorie

- Fiszki pogrupowane są w następujące kategorie:  
  - Zwierzęta  
  - Jedzenie  
  - Czasowniki  
- Użytkownik wybiera, którą kategorię chce przerabiać lub quizować.  

### 4. Tryb quizu

- Dwa typy quizów:  
  - **Wielokrotny wybór**  
    - Jedno słowo po angielsku, 4 opcje po polsku (1 poprawna + 3 odwracacze uwagi)  
    - Opcje odwracaczy są statycznie zdefiniowane dla każdego pytania  
  - **Uzupełnij lukę**  
    - Pokazywane słowo po angielsku, użytkownik wpisuje słowo po polsku  
    - Wymagana ścisła zgodność (bez uwzględniania wielkości liter)  

### 5. Strona ze statystykami

- Śledzi następujące dane (w pamięci przeglądarki lub localStorage):  
  - Liczbę przerobionych fiszek w każdej kategorii  
  - Liczbę poprawnych i błędnych odpowiedzi  
  - Procentową skuteczność  

***

## Strony UI / Komponenty

### 1. Strona główna  
- Powitanie użytkownika  
- Przycisk/odnośniki do:  
  - Trybu nauki  
  - Trybu quizu  
  - Strony ze statystykami  

### 2. Strona wyboru kategorii  
- Wyświetla dostępne kategorie: Zwierzęta, Jedzenie, Czasowniki  
- Możliwość wyboru trybu (Nauka / Quiz)  
- Przejście do fiszek lub quizu  

### 3. Komponent nauki fiszek  
- Pokazuje jedną fiszkę na raz  
- Animacja odwracania (opcjonalna)  
- Przyciski „Poprawnie” i „Źle”  

### 4. Komponent powtórek  
- Ten sam interfejs co w nauce fiszek, ale wyświetla wyłącznie błędne fiszki  

### 5. Komponent quizu  
- Quiz wielokrotnego wyboru lub uzupełniania luk  
- Informacja zwrotna po każdej odpowiedzi (poprawna/błędna)  

### 6. Strona statystyk  
- Podsumowanie wszystkich sesji  
- Opcjonalne wsparcie dla localStorage do trwałego przechowywania danych  

***

## Przykład formatu danych

### JSON fiszki (lub obiekt TypeScript)
```ts
{
  category: "zwierzeta",
  english```cat",
  polish```kot",
  quiz```
    type:```ultiple-choice```    options```"pies", "dom", "kot", "ptak"]
```
}
```

***

## Poza zakresem  
- Brak kont użytkowników czy uwierzytelniania  
- Brak dynamicznego backendu lub API  
- Brak edytora fiszek czy panelu administratora