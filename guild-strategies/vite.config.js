import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                averzian: resolve(__dirname, 'boss-averzian.html'),
                vorasius: resolve(__dirname, 'boss-vorasius.html'),
                salhadaar: resolve(__dirname, 'boss-salhadaar.html'),
                vaelgor: resolve(__dirname, 'boss-vaelgor-ezzorak.html'),
                lightblinded: resolve(__dirname, 'boss-lightblinded.html'),
                chimaerus: resolve(__dirname, 'boss-chimaerus.html'),
            },
        },
    },
});
