import adapter from '@sveltejs/adapter-auto'
import path from 'path'
import preprocess from 'svelte-preprocess'

// TODO: add postcss autoprefixer, cssnano, csso and other - https://github.com/sveltejs/svelte-preprocess/blob/main/docs/getting-started.md#3-configuring-preprocessors

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
      scss: {
        prependData: `@import './src/sass/variables.sass'\n@import './src/sass/_portable_text.sass'`
      }
   }),

  kit: {
    adapter: adapter(),
    vite: {
      server: {
        fs: {
          allow: ['studio']
        }
      },
      resolve: {
        alias: {
          $src: path.resolve('./src/'),
          $img: path.resolve('./src/img'),
          $components: path.resolve('./src/components'),
        }
      }
    }
  }
}

export default config
