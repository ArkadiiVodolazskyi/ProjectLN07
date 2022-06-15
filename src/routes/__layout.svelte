<script>
  import '../css/sanitize/assets.css'
  import '../css/sanitize/forms.css'
  import '../css/sanitize/reduce-motion.css'
  import '../css/sanitize/sanitize.css'
  import '../css/sanitize/system-ui.css'
  import '../css/sanitize/typography.css'
  import '../css/sanitize/ui-monospace.css'

  import '../css/fonts/Bellota_Text.css'
  import '../css/fonts/Rubik.css'
  import '../css/fonts/Montserrat.css'

  import '../css/global/variables.css'

  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<Header />

<main>
  <slot />
</main>

<Footer />

<style lang="sass">
  // TODO: layout and some default global CSS variables
  // (maybe it will be nice to place all the global CSS variables into a separate CSS file. Or no.)

  :global

    html
      font-size: var(--font-size-primary)
      font-family: var(--font-family-general)

    body
      background-color: var(--color-bg-primary)

    h1, h2, h3
      font-family: var(--font-family-accent)
    h4, h5, h6
      font-family: var(--font-family-semiaccent)

</style>
