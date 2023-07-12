import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import million from 'million/compiler';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite(), svgr(), react()],
});
