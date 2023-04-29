import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
      short_name: "notes",
      name: "Apple Notes",
      start_url: ".",
      display: "standalone",
      scope: '/',
      icons: [
        {
          "src": "/icon-72x72.png",
          "sizes": "72x72",
          "type": "image/png",
          purpose: 'any maskable',
        },
        {
          "src": "/icon-96x96.png",
          "sizes": "96x96",
          "type": "image/png",
          purpose: 'any maskable',
        },
        {
          "src": "/icon-128x128.png",
          "sizes": "128x128",
          "type": "image/png",
          purpose: 'any maskable',
        },
        {
          "src": "/icon-144x144.png",
          "sizes": "144x144",
          "type": "image/png",
          purpose: 'any maskable',
        },
        {
          "src": "/icon-152x152.png",
          "sizes": "152x152",
          "type": "image/png",
          purpose: 'any maskable',
        },
        {
          "src": "/icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png",
          purpose: 'any maskable',
        },
        {
          "src": "/icon-384x384.png",
          "sizes": "384x384",
          "type": "image/png",
          purpose: 'any maskable',
        },
        {
          "src": "icons/icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png",
          purpose: 'any maskable',
        }
      ],
      
      theme_color: "#000000",
      background_color: "#ffffff"
      }
    })
  ],
});
