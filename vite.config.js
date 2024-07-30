import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    css: {
        preprocessorOptions: {
            // Configuration des préprocesseurs si nécessaire
        },
    },
    server: {
        historyApiFallback: true, // Permet de rediriger les requêtes vers l'application React
    },
});
