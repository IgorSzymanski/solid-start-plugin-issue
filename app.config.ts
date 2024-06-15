import { defineConfig } from '@solidjs/start/config'
import { VitePluginRadar } from 'vite-plugin-radar'

export default defineConfig({
  vite: {
    plugins: [
      VitePluginRadar({
      enableDev: true,
      gtm: [
        {
          id: 'GTM-AAAAAA',
        },
      ],
    }),
    ]
  }
});
