<script>
  // Import sanitize css
  import '../css/sanitize/assets.css';
  import '../css/sanitize/forms.css';
  import '../css/sanitize/reduce-motion.css';
  import '../css/sanitize/sanitize.css';
  import '../css/sanitize/system-ui.css';
  import '../css/sanitize/typography.css';
  import '../css/sanitize/ui-monospace.css';

  // Import fonts
  import '../css/fonts/Bellota_Text.css';
  import '../css/fonts/Rubik.css';
  import '../css/fonts/Montserrat.css';

  // Import variables
  import '../css/variables.css';

  // Import components
  import Header from '$components/general/Header.svelte';
  import Footer from '$components/general/Footer.svelte';
</script>

<Header />

<main>
  <slot />
</main>

<Footer />

<style lang="sass" global>

  // Interesting variants for #5E3281 (https://mycolor.space/?hex=%235E3281&sub=1)
  // #00c9b0 #005b5f #8b0073 #307ea6  #e15871

  // Tags

  html
    font-size: var(--font-size-primary)
    font-family: var(--font-family-general)
    color: var(--color-text-primary)
    line-height: 1.4
    scroll-behavior: smooth
  body
    background-color: var(--color-bg-primary)
    min-height: 100vh
    display: flex
    flex-direction: column
    justify-content: space-between
  main
    padding: 3rem 0
    flex-grow: 1
  ul
    margin: 0
    padding: 0
    li
      display: inline-block
  h1, h2, h3
    font-family: var(--font-family-accent)
    margin: 0
    font-weight: inherit
    font-size: inherit
  h4, h5
    font-family: var(--font-family-semiaccent)
    margin: 0
    font-weight: inherit
    font-size: inherit
  h6
    font-family: var(--font-family-general)
    margin: 0
    font-weight: inherit
    font-size: inherit
  p
    margin: 0
  svg
    fill: inherit
    stroke: inherit
    transition: all .3s ease
    *
      fill: inherit
      stroke: inherit
  a
    text-decoration: none
    color: inherit
    transition: color .2s ease-out
    &.link:hover
      color: var(--color-text-link-hover)
      fill: var(--color-accent-primary)
      stroke: var(--color-accent-primary)
  img
    display: block
    margin: 0 auto

  // Classes

  .wrapper
    max-width: var(--block-width-wrapper)
    margin: 0 auto

  // Portable text

  .portable_text
    padding-block: 3rem
    background-color: var(--color-bg-primary-d)
    > *:not(:first-child)
      margin-top: 1.3rem
    .image_figure img
      max-width: 50vw
      max-height: 50vh
      border-radius: var(--radius)
      box-shadow: 0 0 .3rem .2rem var(--color-bg-primary-do)
    a
      color: var(--color-text-link)
    h4
      font-size: 1.5rem
      font-weight: bold
      position: relative
      &::before
        content: ''
        position: absolute
        z-index: 10
        left: 0
        top: 50%
        width: 1rem
        height: .15rem
        transform: translate(-2rem, -50%)
        background-color: var(--color-text-primary)
        transition: all .25s ease
        opacity: 0
      &.active::before
        opacity: 1
    .chapter_title
      scroll-margin-top: 2rem
    blockquote
      margin-left: 0
      padding: 1rem 1.2rem
      position: relative
      background-color: var(--color-bg-primary)
      border-radius: calc( var(--radius) * .4 )
      &::after
        content: ''
        position: absolute
        z-index: 10
        left: 0
        top: 50%
        width: .2rem
        height: calc( 100% - 1.5rem )
        background-color: rgba(#000, 0.2)
        background: var(--gradient)
        opacity: .5
        transform: translate(-50%, -50%)
</style>
