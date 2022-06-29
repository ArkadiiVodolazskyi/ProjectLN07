<script>
  // Import sanitize css
  import '../css/sanitize/assets.css'
  import '../css/sanitize/forms.css'
  import '../css/sanitize/reduce-motion.css'
  import '../css/sanitize/sanitize.css'
  import '../css/sanitize/system-ui.css'
  import '../css/sanitize/typography.css'
  import '../css/sanitize/ui-monospace.css'

  // Import fonts
  import '../css/fonts/Bellota_Text.css'
  import '../css/fonts/Rubik.css'
  import '../css/fonts/Montserrat.css'

  // Import components
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<Header />

<main>
  <slot />
</main>

<Footer />

<style lang="sass" global>

  // Colors
  $tsp: #00000000
  $color-bg-primary: hsl(0, 0%, 18%)
  $color-bg-primary-d: hsl(0, 0%, 13%)
  $color-accent-primary: #5E3281
  $color-text-primary: #D2D2D2
  $color-text-link: hsl(220, 65%, 60%)
  $color-text-link-hover: hsl(220, 65%, 70%)

  // Interesting variants for #5E3281 (https://mycolor.space/?hex=%235E3281&sub=1)
  // #00c9b0 #005b5f #8b0073 #307ea6  #e15871

  // Fonts
  $font-size-primary: 16px
  $font-family-general: 'Bellota Text', sans-serif
  $font-family-semiaccent: 'Rubik', sans-serif
  $font-family-accent: 'Montserrat', sans-serif

  // Sizes
  $block-width-wrapper: 1200px
  $links-padding: .8rem

  :root
    // Colors
    --tsp: #{$tsp}
    --color-bg-primary: #{$color-bg-primary}
    --color-bg-primary-d: #{$color-bg-primary-d}
    --color-accent-primary: #{$color-accent-primary}
    --color-text-primary: #{$color-text-primary}
    --color-text-link: #{$color-text-link}
    --color-text-link-hover: #{darken($color-text-link, 10%)}
    // Fonts
    --font-size-primary: #{$font-size-primary}
    --font-family-general: #{$font-family-general}
    --font-family-semiaccent: #{$font-family-semiaccent}
    --font-family-accent: #{$font-family-accent}
    // Sizes
    --block-width-wrapper: #{$block-width-wrapper}
    --links-padding: #{$links-padding}

  html
    font-size: var(--font-size-primary)
    font-family: var(--font-family-general)
    color: var(--color-text-primary)
  body
    background-color: var(--color-bg-primary)
    min-height: 100vh
    display: flex
    flex-direction: column
    justify-content: space-between
  main
    padding: 2.5rem 0
    flex-grow: 1
  h1, h2, h3
    font-family: var(--font-family-accent)
    margin: 0
  h4, h5, h6
    font-family: var(--font-family-semiaccent)
    margin: 0
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
