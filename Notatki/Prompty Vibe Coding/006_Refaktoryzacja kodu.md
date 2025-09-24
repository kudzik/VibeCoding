# Refaktoryzacja kodu

**Prompt:**  
Przygotuj kompleksowy plan refaktoryzacji kodu aplikacji //TODO:[nazwa aplikacji], uwzględniając następujące kroki:

- Zidentyfikuj duplikaty kodu i zredukuj powtarzające się fragmenty bez zmiany funkcjonalności.
- Użyj reasoning model do wykrycia nieczytelnych lub złożonych fragmentów kodu i zaproponuj ich uproszczenie.
- Zastosuj regułę komentowania Cursor – dodaj objaśniające komentarze do każdej funkcji, klasy i istotnego fragmentu logiki.
- Wprowadź techniki refaktoryzacji takie jak: _Extract Method_, _Inline Method_, _Refactoring by Abstraction_, _Collapsing Hierarchy_.
- Po każdej zmianie uruchom testy jednostkowe i E2E, aby upewnić się, że aplikacja działa zgodnie z oczekiwaniami.
- Wprowadź regułę Cursor, która automatycznie uruchamia testy po każdej zmianie w kodzie.
- Dokumentuj zmiany w commitach jako pojedyncze, logiczne jednostki, aby ułatwić śledzenie i ewentualne cofanie.
- Zastosuj narzędzia do analizy jakości kodu odpowiednie dla tego projektu i uwzględnij ich wyniki w procesie refaktoryzacji.
- Po zakończeniu refaktoryzacji wygeneruj raport porównujący jakość kodu przed i po zmianach.

## Reguły Cursor

Zrefaktoryzuj cały kod projektu zgodnie z regułą komentowania – dodaj objaśniające komentarze.
Zidentyfikuj duplikaty i zredukuj powtarzające się fragmenty kodu, bez zmiany funkcji aplikacji.
Po refaktoryzacji upewnij się, że wszystkie testy przechodzą.
Użyj reasoning model do wyszukania nieczytelnych fragmentów kodu i ich poprawy.
