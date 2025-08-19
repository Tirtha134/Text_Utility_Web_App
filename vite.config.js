import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Text_Utility_Web_App/', // your repo name
  plugins: [react()],
});
