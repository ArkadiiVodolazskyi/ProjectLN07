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

  import {onMount} from 'svelte';

  let close_overlay;
  onMount(() => {
    close_overlay.addEventListener('click', e => e.target.closest('body').classList.remove('overlay'));
  });
</script>

<Header />

<main>
  <button class="close_overlay" data-action="close_overlay" bind:this={close_overlay}>
    <svg><use xlink:href="../src/img/icons.svg#cross"></use></svg>
  </button>
  <slot />
</main>

<Footer />

<style lang="sass" global>

  // Tags

  html
    font-size: var(--font-size-primary)
    font-family: var(--font-family-general)
    color: hsl(0, 0%, 82%)
    line-height: 1.4
    scroll-behavior: smooth
  body
    // TODO: maybe use relief pattern, like crumpled paper or something
    // TODO: style scrollbar, check in Chrome
    background-color: hsl(0, 0%, 18%)
    // background: radial-gradient(ellipse at bottom, hsl(273, 44%, 20%) 0%, hsl(213, 48%, 15%) 100%)
    background: linear-gradient(to top, hsl(273, 44%, 15%) 0%, hsl(213, 48%, 12%) 100%)
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
      transition: opacity .25 ease-in
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
      background: linear-gradient(to top, hsl(273, 44%, 15%) 0%, hsl(213, 48%, 12%) 100%)
      transition: opacity .25 ease-in
      box-shadow: inset 0 0 .25rem .4rem hsl(0, 0%, 0%, .5)
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
    transition: all .25s ease
    *
      fill: inherit
      stroke: inherit
  a
    text-decoration: none
    color: inherit
    transition: color .2s ease-out
    &.link:hover
      color: hsl(220, 65%, 70%)
      fill: hsl(273, 44%, 35%)
      stroke: hsl(273, 44%, 35%)
  img
    display: block
    margin: 0 auto
  button
    cursor: pointer
    transition: all .25s ease

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
      fill: hsla(0, 0%, 82%, 0.7)
    &:hover
      transform: scale(1.2)
      svg
        fill: hsl(273, 44%, 45%)

  // Portable text

  .portable_text
    padding-block: 3rem
    position: relative
    > *:not(:first-child)
      margin-top: 1.3rem
    .image_figure
      position: relative
      z-index: 150
      border-radius: var(--radius)
      .image_wrapper
        width: max-content
        max-width: 100%
        margin: 0 auto
        position: relative
        transition: box-shadow .25s ease, transform .2s ease-in
        border-radius: inherit
        &::before
          content: ''
          position: absolute
          z-index: 1
          left: 50%
          top: 50%
          transform: translate(-50%, -50%)
          width: calc( 100% + .15rem )
          height: calc( 100% + .15rem )
          background: var(--gradient)
          border-radius: inherit
          transition: opacity .25s ease
          opacity: 0
        .icon
          position: absolute
          z-index: 7
          top: 0
          right: 0
          width: 1.5rem
          height: 1.5rem
          stroke: hsl(0, 0%, 82%)
          transform-origin: center
          transition: opacity .25s ease-in-out
          opacity: 0
          transform: translate(-1rem, 1rem) rotate(180deg)
        img
          max-width: 45vw
          max-height: 45vh
          position: relative
          z-index: 2
          border-radius: inherit
          border-radius: var(--radius)
        &:hover
          transform: scale(1.02)
          box-shadow: 0 0 .3rem .2rem hsl(0, 0%, 10%)
          &::before
            opacity: 1
          .icon
            opacity: 1
            transform: translate(-1rem, 1rem) rotate(0deg)
    a
      color: hsl(220, 65%, 60%)
      text-decoration: underline
      text-decoration-thickness: .08em
      text-underline-offset: .3em
      transition: all .3s ease
      text-decoration-color: #00000000
      &:hover
        color: hsl(220, 65%, 70%)
        text-decoration-color: hsl(220, 65%, 70%)
    h4
      font-size: 1.5rem
      font-weight: bold
      position: relative
      &::before
        content: ''
        position: absolute
        z-index: 5
        left: 0
        top: 50%
        width: 1.25rem
        height: .15rem
        border-radius: var(--radius)
        transform: translate( calc( -100% - 2rem ) , -50%)
        background-color: hsl(0, 0%, 82%)
        transition: all .3s ease
        opacity: 0
      &.active::before
        opacity: .75
        transform: translate( -2rem, -50%)
    .chapter_title
      scroll-margin-top: 2rem
    blockquote
      margin-inline: 0
      padding: 1rem 1.2rem
      background-color: hsl(0, 0%, 18%)
      border-radius: calc( var(--radius) * .4 )
    ul, ol
      padding-left: 1rem
      line-height: 1.4rem
      li
        display: list-item
        list-style-position: inside
        &:not(:first-child)
          margin-top: .5rem
    ul
      list-style-type: square
</style>
