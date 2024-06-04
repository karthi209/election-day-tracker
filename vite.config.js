import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/election-day-tracker/ ", // YOUR REPO NAME HERE
})
