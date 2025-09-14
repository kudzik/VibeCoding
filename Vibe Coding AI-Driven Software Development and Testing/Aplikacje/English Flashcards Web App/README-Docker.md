# English Flashcards App - Docker Setup

Aplikacja do nauki angielskiego z fiszkami, uruchamiana w kontenerze Docker.

## 🐳 Uruchamianie z Docker

### Tryb produkcyjny

```bash
# Zbuduj i uruchom aplikację
docker-compose up --build

# Uruchom w tle
docker-compose up -d --build

# Zatrzymaj aplikację
docker-compose down
```

Aplikacja będzie dostępna pod adresem: http://localhost:3000

### Tryb deweloperski

```bash
# Uruchom w trybie deweloperskim z hot-reload
docker-compose -f docker-compose.dev.yml up --build

# Uruchom w tle
docker-compose -f docker-compose.dev.yml up -d --build
```

Aplikacja będzie dostępna pod adresem: http://localhost:5173

## 🔧 Komendy Docker

### Budowanie obrazu

```bash
# Zbuduj obraz produkcyjny
docker build -t english-flashcards .

# Zbuduj obraz deweloperski
docker build -f Dockerfile.dev -t english-flashcards-dev .
```

### Uruchamianie kontenera

```bash
# Uruchom kontener produkcyjny
docker run -p 3000:80 english-flashcards

# Uruchom kontener deweloperski
docker run -p 5173:5173 -v $(pwd):/app -v /app/node_modules english-flashcards-dev
```

## 📁 Struktura plików Docker

- `Dockerfile` - Obraz produkcyjny z nginx
- `Dockerfile.dev` - Obraz deweloperski z hot-reload
- `docker-compose.yml` - Konfiguracja produkcyjna
- `docker-compose.dev.yml` - Konfiguracja deweloperska
- `nginx.conf` - Konfiguracja serwera nginx
- `.dockerignore` - Pliki ignorowane podczas budowania

## 🌐 Dostęp do aplikacji

- **Produkcja**: http://localhost:3000
- **Deweloperka**: http://localhost:5173

## 🛠️ Rozwiązywanie problemów

### Sprawdź status kontenerów
```bash
docker-compose ps
```

### Zobacz logi
```bash
docker-compose logs -f
```

### Zatrzymaj i usuń wszystko
```bash
docker-compose down -v --rmi all
```

### Wyczyść cache Docker
```bash
docker system prune -a
```
