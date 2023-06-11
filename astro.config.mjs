import tailwind from '@astrojs/tailwind';
import vercelStatic from '@astrojs/vercel/static';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://peterbartha.com',
  integrations: [tailwind()],
  output: 'static',
  adapter: vercelStatic(),
});
