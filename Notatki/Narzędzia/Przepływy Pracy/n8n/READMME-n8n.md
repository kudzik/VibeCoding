# n8n

**n8n** (czytane jako "n-eight-n" lub "node-eight-n") to zaawansowana platforma do **automatyzacji przepływów pracy** (workflow automation) i **integracji aplikacji**.

Mówiąc prościej, n8n pozwala **łączyć ze sobą różne usługi i aplikacje** (takie jak Slack, Google Sheets, bazy danych, CRM-y czy LLM-y AI) i automatyzować powtarzalne, wieloetapowe zadania, **bez konieczności pisania kodu** (lub z opcją dodawania niestandardowego kodu).

---

## Kluczowe Cechy i Funkcjonalności n8n

### 1. Wizualne Budowanie Przepływów Pracy (Workflows)

Zamiast pisać kod, automatyzacje tworzysz, przeciągając i upuszczając **węzły** (nodes) na graficznym interfejsie. Każdy węzeł reprezentuje konkretną akcję lub aplikację. Łącząc węzły, tworzysz **łańcuchy** zadań (workflow).

- **Węzły:** Są to gotowe moduły do integracji (np. Google Sheets Node, Slack Node, HTTP Request Node) lub do transformacji danych (np. Filter Node, Code Node).
- **Logika:** Pozwala na dodawanie logiki do przepływów, takiej jak warunki (`IF/ELSE`), pętle (`Loops`) i łączenie danych (`Merge`).

### 2. Elastyczność: No-code + Code

n8n łączy prostotę narzędzi **no-code/low-code** z elastycznością programowania.

- **No-code:** Możesz budować złożone automatyzacje bez pisania ani jednej linijki kodu, korzystając z gotowych węzłów i wizualnego edytora.
- **Code Fallback:** Dla zaawansowanych użytkowników dostępny jest **Code Node**, który pozwala na pisanie niestandardowych operacji w **JavaScript** lub **Pythonie**, co daje nieograniczoną kontrolę nad danymi i logiką.

### 3. Integracja z AI

n8n jest platformą **AI-Native**, co oznacza, że jest projektowany z myślą o łatwej integracji z dużymi modelami językowymi (LLM), takimi jak GPT-4.

- Można tworzyć zaawansowane **agenty AI** i systemy, które analizują, podsumowują i generują treści na podstawie danych z różnych źródeł, często wykorzystując frameworki takie jak **LangChain**.

### 4. Opcje Hostingu (Fair-Code License)

Jedną z największych zalet n8n jest jego model licencyjny, który daje użytkownikom wybór i pełną kontrolę nad danymi:

- **Self-hosted (Wersja darmowa):** Możesz zainstalować i uruchomić n8n na własnym serwerze (np. Docker, VPS), zyskując **pełną kontrolę nad bezpieczeństwem i danymi**.
- **n8n Cloud (Usługa płatna):** Wygodna, hostowana przez twórców usługa w chmurze, bez konieczności martwienia się o infrastrukturę.

---
