# Multi-stage build dla aplikacji React
FROM node:18-alpine AS builder

# Ustaw katalog roboczy
WORKDIR /app

# Skopiuj pliki package.json i package-lock.json
COPY package*.json ./

# Zainstaluj wszystkie zależności (w tym deweloperskie)
RUN npm ci

# Skopiuj kod źródłowy
COPY . .

# Zbuduj aplikację
RUN npm run build

# Etap produkcyjny z nginx
FROM nginx:alpine

# Skopiuj zbudowaną aplikację z etapu builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Skopiuj konfigurację nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Ustaw port
EXPOSE 80

# Uruchom nginx
CMD ["nginx", "-g", "daemon off;"]
