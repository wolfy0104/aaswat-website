import { defineConfig } from 'astro/config';
import staticAdapter from '@astrojs/static';

export default defineConfig({
  adapter: staticAdapter(),
  output: 'static',
  base: '/astro-ai-showcase/', // important for GitHub Pages subpath
});
