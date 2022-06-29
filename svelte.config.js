import adapter from '@sveltejs/adapter-auto'
import path from 'path'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
      scss: {
        prependData: `@import './src/sass/variables.sass'`
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
          $lib: path.resolve('./src/lib'),
          $img: path.resolve('./src/img')
        }
      }
    }
  }
}

export default config
