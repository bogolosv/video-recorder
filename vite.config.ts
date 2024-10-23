import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
import { PAGES } from "./src/CONST";

export default defineConfig({
  plugins: [
      react(),
      Sitemap({
          hostname: 'https://video-recorder-blue.vercel.app/',
          dynamicRoutes: [PAGES.Recorder],
          generateRobotsTxt: true,
          robots: [
              {
                  userAgent: '*',
                  allow: '/',
                  disallow: '',
              }
          ]
      })
  ],
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})
