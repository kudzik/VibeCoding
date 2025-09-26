# Rule: Efficient Model & Context Usage

## 1. Wybór modelu

- Zawsze wybieraj **najmniejszy model**, który rozwiąże zadanie poprawnie.
- Dopasuj model do złożoności:
  - **Proste** (refaktor, lint, krótkie podpowiedzi) → mały model (7B/8B, lokalny).
  - **Średnie** (generowanie funkcji, testy, API) → średni model (13B/14B).
  - **Złożone** (architektura, długi kontekst, wieloetapowe analizy) → duży model (34B+ lub chmurowy).
- **Fallback**: jeśli lokalny model nie daje poprawnej odpowiedzi → dopiero wtedy użyj chmurowego.

## 2. Zarządzanie kontekstem

- **Kompresuj historię** – używaj podsumowań zamiast pełnych logów.
- **Czyść kontekst** przy zmianie zadania (/clear).
- **Priorytetyzuj pliki** – najpierw bieżący plik i powiązane moduły, dopiero potem reszta repo.

## 3. Limity i kontrola usage

- **Limit promptu**: max 800 tokenów wejściowych (reszta streszczana).
- **Limit output**: max 400 tokenów (unikać „lania wody”).
- **Cache odpowiedzi** – jeśli pytanie się powtarza, użyj poprzedniego wyniku.
- **Stop generation** – zatrzymuj generację, gdy odpowiedź jest wystarczająca.

## 4. Izolacja agentów

- **Agent Code Review** – tylko analiza jakości i bezpieczeństwa kodu.
- **Agent Testowy** – tylko generowanie i uruchamianie testów.
- **Agent Architektoniczny** – tylko projektowanie struktur i dokumentacji.
- Dzięki temu nie marnujesz tokenów na „wszystko w jednym”.

## 5. Bezpieczeństwo i prywatność

- **Tryb lokalny jako domyślny** – zawsze najpierw lokalny LLM.
- **Explicit opt‑in** – nie wysyłaj kodu do API zewnętrznego bez zgody.

## 6. Priorytety

1. Minimalizacja kosztów i tokenów.
2. Poprawność i kompletność rozwiązania.
3. Dopasowanie modelu do złożoności.
4. Utrzymanie prywatności i kontroli nad danymi.
