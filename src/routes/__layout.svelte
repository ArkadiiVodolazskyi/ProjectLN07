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
  :global
    html
      font-size: var(--font-size-primary)
      font-family: var(--font-family-general)
      color: var(--color-text-primary)
    body
      background-color: var(--color-bg-primary)
    h1, h2, h3
      font-family: var(--font-family-accent)
    h4, h5, h6
      font-family: var(--font-family-semiaccent)
    svg
      fill: inherit
      stroke: inherit
      *
        fill: inherit
        stroke: inherit
    a
      text-decoration: none
      color: var(--color-text-link)
      transition: color .2s ease-out
      &:hover
        color: var(--color-text-link-hover)
    .wrapper
      max-width: var(--block-width-wrapper)
      margin: 0 auto
</style>
