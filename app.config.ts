import civetVitePlugin from '@danielx/civet/vite'
import { defineConfig } from '@solidjs/start/config'

export default defineConfig({
  extensions: ['civet', 'tsx', 'ts'],
  vite: {
    plugins: [
      civetVitePlugin({
        ts: 'civet',
      }),
    ]
  }
});
