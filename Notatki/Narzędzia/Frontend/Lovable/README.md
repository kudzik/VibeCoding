# Lovable

[Lovable]("https://lovable.dev/")

Tworzenie skutecznych promptów w Lovable jest kluczowe, aby otrzymać wysokiej jakości i precyzyjne rezultaty. Podstawowa zasada to **jasność, szczegółowość i struktura**. Im lepszy prompt, tym lepsza jakość wygenerowanego kodu i mniejsze ryzyko błędów.  

***

## Najważniejsze zasady inżynierii promptów w Lovable

- **Bądź konkretny** – opisz dokładnie, co chcesz zbudować, np. jakie funkcje, wygląd, technologię.  
- **Twórz specyfikacje i dokumenty wymagań** (PRD) na początku – to baza dla AI, by wiedziało, co ma realizować.  
- **Dziel projekt na etapy** – przemyśl kolejność zadań, np. najpierw setup, potem podstawowe funkcje, na końcu zaawansowane.  
- **Zachowuj kontekst i podsumowania** – w nowych promptach przypominaj AI, co zostało już zrobione.  
- **Iteruj i testuj** – pierwsza wersja promptu nie musi być idealna, poprawiaj i rozwijaj w kolejnych rozmowach.  
- **Używaj prostego języka i unikaj ambiwalencji** – AI lepiej reaguje na jasne polecenia.  
- **Wykorzystuj dostępne obrazy i przykłady** – pomagają AI lepiej zrozumieć zadanie, np. załącz projekt graficzny.  
- **Rozważ prompt chaining (łącznie promptów etapami)** – dziel złożone zadania na kolejne kroki (walidacja, generacja, optymalizacja).  
- **Ustal jasne oczekiwania dotyczące formatu odpowiedzi** – np. kod w markdown, wyjaśnienia, testy.  
- **Czasem warto określić rolę AI, np. “Jesteś doświadczonym programistą React”**.  

***

## Przykładowy schemat użycia promptów dla GPT tworzenia projektu w Lovable

### Tworzenie RDP za pomocą GPT

1. **Specyfikacja (PRD)**

    ```text
    Potrzebuję napisać specyfikację oprogramowania (PRD) i potrzebuję Twojej pomocy przy jej tworzeniu. Wynik powinien być sformatowany jako Markdown i nie powinien zawierać emotikonów.

    Chcę zbudować tablicę kanban w stylu Trello, używając Vite i dnd-kit, z funkcjonalnością przeciągania i upuszczania oraz estetycznym wyglądem.

    Oto funkcje, które moim zdaniem będą potrzebne:

    - Wiele kolumn (Do zrobienia, W trakcie, Zrobione), które mogą zawierać karty z zadaniami
    - Płynna funkcjonalność przeciągania i upuszczania między kolumnami
    - Możliwość dodawania nowych kart do dowolnej kolumny
    - Możliwość edycji nazwy karty bezpośrednio na miejscu
    - Możliwość dodawania nowych kolumn
    - Możliwość zmiany nazwy kolumn
    - Możliwość usuwania kolumn
    - Przechowywanie danych z wykorzystaniem Supabase

    Zadaj pytania uzupełniające, jeśli coś jest niejasne, ZANIM zaczniesz generować.
    ```

2. **Lista zadań do wykonania (to-do list)**
   - „Stwórz listę kroków do zbudowania tej aplikacji w kolejności od setupu, przez dodawanie kart, po finalny deployment.”

    ```text
    Na podstawie tej specyfikacji potrzebuję również, abyś stworzył listę zadań (todo list), która pomoże budować funkcje w logicznej kolejności.

    Przykład faz i zadań:

    1. Konfiguracja
    - wstępna konfiguracja projektu z użyciem Vite
    - instalacja zależności projektowych
    - stworzenie układu interfejsu
    - stworzenie funkcjonalnego prototypu z działającą funkcją przeciągania i upuszczania
    2. Konfiguracja projektu i bazy danych w Supabase
    3. Podstawowa funkcjonalność (dodawanie, przenoszenie kart)
    4. Zaawansowana funkcjonalność (dodawanie/edycja/usuwanie kolumn)
    ```

3. **Wykonanie zadania z listy TODO**

    ```text
    Weź pierwsze zadanie z fazy „Konfiguracja” i przekształć je w prompt, który można wykorzystać do rozpoczęcia projektu i stworzenia wstępnego projektu interfejsu. Dodaj trochę kontekstu na temat aplikacji, którą chcemy zbudować.
    ```

### Prompty w Lovable

1. **Start projektu z inicjalnym promptem**
   - „Stwórz pusty projekt Kanban z prostą stroną główną zawierającą nagłówek i miejsce na karty...”  
2. **Edycje i rozszerzenia funkcji**
   - „Dodaj możliwość przenoszenia kart między kolumnami.”  
3. **Poprawki i debugowanie**
   - „Popraw błąd importu, który pojawił się w podglądzie aplikacji.”  

## Dodatkowe wskazówki

- Warto dodać do promptu informacje o używanych technologiach i narzędziach (np. React, Supabase).  
- Opisz szczególnie jak ma działać UI oraz UX (np. animacje, responsywność).  
- Ustal priorytety funkcji (podstawowe vs zaawansowane).  
- Może warto założyć osobne prompty dla testów i dokumentacji.  

***

## Przydatne prompty startowe (polskie)

- „Napisz specyfikację techniczną prostego projektu Kanban w formacie markdown.”  
- „Stwórz listę kroków do zbudowania tej aplikacji w kolejności wykonań.”  
- „Zacznij projekt w Lovable od utworzenia strony głównej z nagłówkiem i miejscem na karty.”  
- „Dodaj funkcję przeciągania kart między kolumnami.”  
- „Napraw błąd importu, jeśli taki wyświetla się w podglądzie aplikacji.”  

***

Czy chcesz, bym pomógł stworzyć przykładowy PRD i to-do listę na bazie Twojego projektu Kanban?

[1](https://docs.lovable.dev/tips-tricks/best-practice)
[2](https://lovable.dev/blog/2025-01-16-lovable-prompting-handbook)
[3](https://docs.lovable.dev/prompting)
[4](https://blog.loveableapps.ai/best-practices-for-prompt-engineering-on-lovable-dev/)
[5](https://www.rapidevelopers.com/blog/the-lovable-prompting-bible-complete-guide-to-ai-prompting-in-lovable-2025)
[6](https://the-system-prompt-engineering-guide.lovable.app)
[7](https://www.youtube.com/watch?v=IqWfKj4mUIo)
[8](https://docs.lovable.dev/prompting/prompting-library)
[9](https://www.linkedin.com/posts/loveableapps-ai_best-practices-for-prompt-engineering-on-activity-7322347814842163200-cSXP)
[10](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api)
