// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Écoute sur toutes les interfaces
    port: 3000, // Définit le port du serveur
    hmr: {
      host: 'localhost', // Nom d’hôte pour la connexion HMR
      clientPort: 3000,  // Port utilisé par le client HMR
    },
    watch: {
      usePolling: true, // Utilise le polling pour la détection des changements
    },
  },
});
