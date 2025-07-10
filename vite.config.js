// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/WebTagVault1/', // ← bu sizning GitHub repo nomingiz bilan bir xil bo‘lishi kerak!
  optimizeDeps: {
    include: ['@mui/icons-material', '@mui/material']
  }
});

