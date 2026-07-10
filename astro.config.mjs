import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ucyuhou.vercel.app',
  output: 'static', // 完全静的出力（SSG）
  integrations: [sitemap()],
});
