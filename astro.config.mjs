import image from '@astrojs/image';
import tailwind from '@astrojs/tailwind';
import vercelStatic from '@astrojs/vercel/static';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://peterbartha.com',
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
  output: 'static',
  compressHTML: true,
  adapter: vercelStatic(),
});
