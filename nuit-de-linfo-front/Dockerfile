# Étape de construction
FROM node:22.6.0 AS builder

# Répertoire de travail
WORKDIR /app

# Copiez les fichiers nécessaires
COPY package*.json ./
COPY vite.config.* ./

# Installer les dépendances
RUN npm install

# Copiez le reste des fichiers sources
COPY . .

# Exécuter la construction
RUN npm run build

# Étape de production
FROM nginx:1.23-alpine

# Copier les fichiers générés par Vite vers Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copier la configuration Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port par défaut de Nginx
EXPOSE 80

