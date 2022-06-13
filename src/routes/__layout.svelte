<script>
  import '../css/sanitize/assets.css'
  import '../css/sanitize/forms.css'
  import '../css/sanitize/reduce-motion.css'
  import '../css/sanitize/sanitize.css'
  import '../css/sanitize/system-ui.css'
  import '../css/sanitize/typography.css'
  import '../css/sanitize/ui-monospace.css'

  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<Header />

<main>
  <slot />
</main>

<Footer />

<style>
  /* TODO: use Sass inside svelte components */

  /* Default Variables */
  :root {

  }
  /* Dark Mode Variables */
  @media (prefers-color-scheme: dark) {
    :root {

    }
  }
</style>
