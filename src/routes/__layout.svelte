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

  // TODO: interacting with CSS variables through JS - https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#values_in_javascript
  // TODO: good way to generate and use CSS variables - https://blog.jim-nielsen.com/2019/generating-shades-of-color-using-css-variables/
</script>

<Header />

<main>
  <slot />
</main>

<Footer />

<style lang="sass" global>

  // ----------- Tags -----------

  html
    font-size: var(--font-size-primary)
    font-family: var(--font-family-general)
    color: hsl(var(--rtx-1))
    line-height: 1.4
    scroll-behavior: smooth
  body
    // TODO: maybe use relief pattern, like crumpled paper or something
    // TODO: style scrollbar, check in Chrome
    background-color: var(--bg-1)
    background: linear-gradient(to top, var(--gr-1))
    background-position: center
    min-height: 100vh
    display: flex
    flex-direction: column
    justify-content: space-between
    max-width: 100vw
    overflow-x: hidden
    overflow-y: auto
    position: relative
    z-index: 1
    &::before
      content: ''
      position: fixed
      z-index: 95
      left: 0
      top: 0
      right: 0
      bottom: 0
      width: 100%
      height: 100%
      background-color: var(--tsp)
      backdrop-filter: blur(2px)
      transition: opacity var(--tr-1)
      opacity: 0
      visibility: hidden
    &::after
      content: ''
      position: fixed
      z-index: 100
      left: 0
      top: 0
      right: 0
      bottom: 0
      width: 100vw
      height: 100vh
      background: linear-gradient(to top, var(--gr-1))
      transition: opacity var(--tr-1)
      box-shadow: var(--shd-2)
      opacity: 0
      visibility: hidden
    &.overlay
      &::before
        opacity: 1
        visibility: visible
      &::after
        opacity: .8
        visibility: visible
      .close_overlay
        opacity: 1
        visibility: visible
  main
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
    transform-origin: center
    transition: all var(--tr-2)
    *
      fill: inherit
      stroke: inherit
  a
    text-decoration: none
    color: inherit
    transition: color var(--tr-3)
    &.link:hover
      color: var(--tx-2)
      fill: var(--accent-1)
      stroke: var(--accent-1)
  img
    display: block
    margin: 0 auto
  button
    cursor: pointer
    transition: all var(--tr-2)

  // Classes

  .wrapper
    max-width: var(--block-width-wrapper)
    margin: 0 auto

  .close_overlay
    position: fixed
    z-index: 500
    top: 0
    right: 0
    width: 1.5rem
    height: 1.5rem
    padding: 2.5rem
    box-sizing: content-box
    display: inline-flex
    align-items: center
    justify-content: center
    transform-origin: center
    border: none
    opacity: 0
    visibility: hidden
    svg
      width: 100%
      height: 100%
      fill: var(--tx-1-o70)
    &:hover
      transform: scale(1.2)
      svg
        fill: var(--accent-1-l10)

  // Portable text

  // TODO: work with colors
  .portable_text
    padding-block: 3rem
    position: relative
    > :where(:not(:first-child))
      margin-top: 1.3em
    .image_figure
      position: relative
      z-index: 150
      border-radius: var(--radius)
      .image_wrapper
        width: max-content
        max-width: 100%
        margin: 0 auto
        position: relative
        transition: box-shadow var(--tr-2), transform .2s ease-in
        border-radius: inherit
        img
          max-width: 45vw
          max-height: 45vh
          position: relative
          z-index: 2
    a
      color: var(--tx-2)
      transition: color var(--tr-1)
      display: inline-block
      position: relative
      &::after
        content: ''
        position: absolute
        z-index: -1
        left: 50%
        bottom: 0
        transform: translate(-50%, 0)
        width: calc(100% + .3em)
        height: 100%
        background-color: var(--accent-1)
        border-radius: calc(var(--radius) * .4)
        transition: max-height var(--tr-1) // TODO: fix - no transition shown
        max-height: 0
      &:hover
        color: var(--tx-2)
        &::after
          max-height: 100%
    h4, h5
      font-size: 1.5rem
      font-weight: bold
      position: relative
      padding: .2em 0
      --lh: 1.3em
      line-height: var(--lh)
      &::before
        content: ''
        position: absolute
        z-index: 5
        left: 0
        top: calc(var(--lh) * 0.6)
        width: 1.25rem
        height: .15rem
        border-radius: var(--radius)
        transform: translate( calc( -100% - 2rem ) , 0)
        background-color: var(--tx-1)
        transition: all .3s ease
        opacity: 0
      &.active::before
        opacity: .75
        transform: translate( -2rem, 0)
    .chapter_title
      scroll-margin-top: 2rem
    blockquote
      width: 95%
      margin-inline: auto
      padding: 1.2em 1.5em
      background-color: var(--accent-1-o15)
      border-radius: calc( var(--radius) * .4 )
      line-height: 1.35em
      box-shadow: inset 0px 0px 2px 2px hsl(0, 0%, 10%, .35)
    ul, ol
      padding-left: 1em
      line-height: 1.4em
      li
        display: list-item
        list-style-position: outside
        &:not(:first-child)
          margin-top: .75em
        > ul, ol
          padding: .75em 0 0 1.5em
          list-style-type: disc
    ul
      list-style-type: square
</style>
