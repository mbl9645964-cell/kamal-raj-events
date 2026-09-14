import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  // Project page lives at /kamal-raj-events/ on GitHub Pages.
  base: command === 'build' ? '/kamal-raj-events/' : '/',
  plugins: [react()],
  server: {
    port: 5178,
    host: true,
  },
}))
