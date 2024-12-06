# Utilise l'image officielle Node.js version 22.6.0
FROM node:22.6.0 AS builder

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers nécessaires pour la construction
COPY package*.json ./
COPY vite.config.* ./
COPY src ./src
COPY public ./public

# Installer les dépendances
RUN npm install

# Construire le projet
RUN npm run build

# Étape 2 : Serveur de production
FROM nginx:1.23-alpine AS production

# Copier les fichiers construits dans le répertoire de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copier un fichier de configuration Nginx personnalisé si nécessaire
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Commande de démarrage
CMD ["nginx", "-g", "daemon off;"]

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie les fichiers package.json et package-lock.json
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste de l'application
COPY . .


