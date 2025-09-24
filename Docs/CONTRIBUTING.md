# 🤝 Przewodnik współpracy - VibeCoding

## 🎯 Jak możesz pomóc

Dziękujemy za zainteresowanie współpracą! Oto sposoby, w jakie możesz przyczynić się do rozwoju VibeCoding:

### 📝 Dokumentacja

- Poprawianie i rozszerzanie dokumentacji
- Tłumaczenia na inne języki
- Dodawanie przykładów użycia
- Tworzenie tutoriali

### 🐛 Zgłaszanie błędów

- Używaj szablonu z [ISSUE_TEMPLATE.md](./ISSUE_TEMPLATE.md)
- Sprawdź czy problem nie został już zgłoszony
- Dołącz szczegółowe informacje o reprodukcji

### ✨ Nowe funkcjonalności

- Przedyskutuj pomysł w Issues przed implementacją
- Sprawdź [ROADMAP.md](./ROADMAP.md) czy funkcja jest planowana
- Zachowaj zgodność z [Rules.md](./Rules.md)

## 🔄 Proces współpracy

### 1. Fork i Clone

```bash
git clone https://github.com/twoj-username/VibeCoding.git
cd VibeCoding
```

### 2. Utwórz branch

```bash
git checkout -b feature/nazwa-funkcji
# lub
git checkout -b fix/nazwa-poprawki
```

### 3. Wprowadź zmiany

- Przestrzegaj zasad z [Rules.md](./Rules.md)
- Dodaj testy jeśli to możliwe
- Aktualizuj dokumentację
- Dodaj wpis do Timeline.log

### 4. Commit

Używaj formatu Conventional Commits:

```bash
git commit -m "feat(docs): dodaj przewodnik współpracy

- Dodano instrukcje dla kontrybutorów
- Opisano proces review
- Dodano szablony Issues i PR"
```

### 5. Push i Pull Request

```bash
git push origin feature/nazwa-funkcji
```

Następnie utwórz Pull Request z opisem:

- Co zostało zmienione i dlaczego
- Jak przetestować zmiany
- Linki do powiązanych Issues

## 📋 Standardy kodu

### Formatowanie

- Używaj automatycznych formaterów (Prettier, Black, etc.)
- Maksymalna długość linii: 80-120 znaków
- Spójne wcięcia i nazewnictwo

### Dokumentacja

- Komentuj "dlaczego", nie "co"
- Aktualizuj README przy znaczących zmianach
- Dodawaj JSDoc/docstrings dla API

### Testy

- Minimum 80% coverage dla nowego kodu
- Testy jednostkowe dla logiki biznesowej
- Testy integracyjne dla API

## 🔍 Code Review

### Kryteria akceptacji

- ✅ Zgodność z Rules.md
- ✅ Testy przechodzą
- ✅ Dokumentacja zaktualizowana
- ✅ Brak konfliktów merge
- ✅ Performance nie pogorszona

### Proces review

1. **Automated checks** - CI/CD pipeline
2. **Manual review** - kod, architektura, testy
3. **Approval** - minimum 1 maintainer
4. **Merge** - squash commits

## 🏷️ Labeling

### Issues

- `bug` - błędy do naprawienia
- `enhancement` - nowe funkcjonalności
- `documentation` - zmiany w dokumentacji
- `good first issue` - dla początkujących
- `help wanted` - potrzebna pomoc społeczności

### Pull Requests

- `ready for review` - gotowe do przeglądu
- `work in progress` - w trakcie pracy
- `needs changes` - wymaga poprawek

## 🚫 Co nie jest akceptowane

- Kod bez testów (dla funkcji krytycznych)
- Zmiany łamiące backward compatibility bez dyskusji
- Dodawanie płatnych zależności bez uzasadnienia
- Kod nie zgodny z zasadami bezpieczeństwa
- Spam lub treści off-topic

## 💬 Komunikacja

- **Issues** - dla bugów i feature requests
- **Discussions** - dla pytań i pomysłów
- **Email** - dla kwestii bezpieczeństwa

## 🎉 Uznanie

Wszyscy kontrybutorzy będą dodani do sekcji Contributors w README. Dziękujemy za każdy wkład!

---

**Pamiętaj**: Każdy commit powinien być atomowy i zawierać jedną logiczną zmianę.
