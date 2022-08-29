import adapter from '@sveltejs/adapter-auto'
import path from 'path'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

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
