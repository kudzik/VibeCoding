# Spanish Flashcards App 🎯

Aplikacja do nauki hiszpańskiego przez fiszki, zbudowana z React, TypeScript i Vite.

## 🚀 Funkcje

- **Interaktywne fiszki** - Kliknij kartę, aby zobaczyć odpowiedź
- **Kategorie słówek** - Organizacja według tematów (podstawowe, kolory, liczby, rodzina, miejsca)
- **System oceniania** - Oznaczaj odpowiedzi jako prawidłowe lub nieprawidłowe
- **Statystyki sesji** - Śledź postęp i dokładność
- **Responsywny design** - Działa na wszystkich urządzeniach
- **Lokalne przechowywanie** - Dane zapisywane w przeglądarce

## 🛠️ Technologie

- **React 19** - Nowoczesny framework UI
- **TypeScript** - Bezpieczeństwo typów
- **Vite** - Szybki bundler i dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Ikony
- **Local Storage** - Przechowywanie danych

## 📦 Instalacja

1. Sklonuj repozytorium:

```bash
git clone <repository-url>
cd Vibe_Fiszki
```

2. Zainstaluj zależności:

```bash
npm install
```

3. Uruchom serwer deweloperski:

```bash
npm run dev
```

4. Otwórz przeglądarkę i przejdź do `http://localhost:5173`

## 🎮 Jak używać

1. **Wybierz kategorię** - Na stronie głównej wybierz kategorię słówek do nauki
2. **Rozpocznij naukę** - Kliknij "Rozpocznij naukę"
3. **Przeglądaj fiszki** - Kliknij kartę, aby zobaczyć polskie tłumaczenie
4. **Oceń odpowiedź** - Kliknij "Prawidłowa" lub "Nieprawidłowa"
5. **Zobacz wyniki** - Po ukończeniu sesji zobaczysz statystyki

## 📁 Struktura projektu

```
src/
├── components/          # Komponenty React
│   ├── Flashcard.tsx   # Komponent fiszki
│   ├── Header.tsx      # Nagłówek aplikacji
│   └── CategorySelector.tsx # Selektor kategorii
├── data/               # Dane aplikacji
│   ├── flashcards.ts   # Słownictwo hiszpańskie
│   └── categories.ts   # Kategorie słówek
├── hooks/              # Custom hooks
│   └── useFlashcards.ts # Logika aplikacji
├── types/              # Definicje TypeScript
│   └── index.ts        # Typy aplikacji
├── utils/              # Funkcje pomocnicze
│   └── cn.ts          # Utility do klas CSS
└── App.tsx            # Główny komponent
```

## 🎨 Kategorie słówek

- **Podstawowe** - Często używane słowa i zwroty
- **Kolory** - Nazwy kolorów
- **Liczby** - Liczby od 1 do 10
- **Rodzina** - Członkowie rodziny
- **Miejsca** - Miejsca w mieście

## 🔧 Dostępne skrypty

- `npm run dev` - Uruchom serwer deweloperski
- `npm run build` - Zbuduj aplikację do produkcji
- `npm run preview` - Podgląd zbudowanej aplikacji
- `npm run lint` - Sprawdź kod ESLint

## 📱 Responsywność

Aplikacja jest w pełni responsywna i działa na:

- Komputerach stacjonarnych
- Tabletach
- Telefonach komórkowych

## 🚀 Deployment

### Wersja Live
Aplikacja jest dostępna online na: **https://vibe-fiszki-uxtfh9kf5-fiszki-vibes-projects.vercel.app**

### Lokalny Build
Aby zbudować aplikację do produkcji:

```bash
npm run build
```

Pliki zostaną wygenerowane w folderze `dist/`, które można wdrożyć na dowolnym serwerze statycznym.

### Deployment na Vercel
Aplikacja jest automatycznie wdrażana na Vercel. Aby zaktualizować wersję produkcyjną:

```bash
# Zaloguj się do Vercel
vercel login

# Wdróż aplikację
vercel --prod
```

### Automatyczne Deployment
Każdy push do głównej gałęzi repozytorium automatycznie wdraża nową wersję aplikacji.

## 🤝 Wkład w projekt

1. Forkuj repozytorium
2. Utwórz branch dla nowej funkcji (`git checkout -b feature/AmazingFeature`)
3. Commit zmiany (`git commit -m 'Add some AmazingFeature'`)
4. Push do branch (`git push origin feature/AmazingFeature`)
5. Otwórz Pull Request

## 📄 Licencja

Ten projekt jest dostępny na licencji MIT. Zobacz plik `LICENSE` dla szczegółów.

## 🎯 Przyszłe funkcje

- [ ] Dodawanie własnych fiszek
- [ ] Tryb ciemny
- [ ] Audio z wymową
- [ ] System powtórek (spaced repetition)
- [ ] Statystyki długoterminowe
- [ ] Eksport/import danych
- [ ] Tryb wieloosobowy
