import adapter from '@sveltejs/adapter-auto'
import path from 'path'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    sass: {
      prependData: "@import './static/variables.sass'",
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
          $icons: path.resolve('./src/img/icons.svg'),
        }
      }
    }
  }
}

export default config
