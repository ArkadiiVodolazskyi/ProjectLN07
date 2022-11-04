<script>
  import '../css/sanitize.css';
  import '../css/fonts.css';

  // Import components
  import Header from '$components/general/Header.svelte';
  import Footer from '$components/general/Footer.svelte';
</script>

<div class="relief"></div>

<Header />

<main>
  <slot />
</main>

<Footer />

<style lang="sass" global>

  // ----------- Tags -----------

  ::selection
    background-color: $accent-1
    text-shadow: 0 0 3px $bg-1

  html
    @include scrollbar
    font-size: $fs-primary
    font-family: $ff-general
    color: $tx-1
    line-height: 1.4
    scroll-behavior: smooth
  body
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
      background-color: $tsp
      backdrop-filter: blur(2px)
      transition: opacity $tr-1
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
      background: linear-gradient(to top, $gr-1)
      transition: opacity $tr-1
      box-shadow: $shd-2
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
  .relief
    position: absolute
    z-index: -1
    inset: 0
    &::after
      content: ''
      display: block
      position: absolute
      z-index: inherit
      inset: 0
      background-image: url(../img/paper_texture.jpg)
      background-repeat: repeat
      filter: brightness(0.5)
      opacity: .15
    &::before
      content: ''
      display: block
      position: absolute
      z-index: inherit
      inset: 0
      background-color: $bg-1
      background: linear-gradient(to top, $gr-1)
  main
    flex-grow: 1
    padding: 3em 0
  ul
    margin: 0
    padding: 0
    li
      display: inline-block
  h1, h2, h3
    font-family: $ff-accent
    margin: 0
    font-weight: inherit
    font-size: inherit
  h4, h5
    font-family: $ff-semiaccent
    margin: 0
    font-weight: inherit
    font-size: inherit
  h6
    font-family: $ff-general
    margin: 0
    font-weight: inherit
    font-size: inherit
  p
    margin: 0
  svg
    fill: inherit
    stroke: inherit
    transform-origin: center
    transition: all $tr-2
    *
      fill: inherit
      stroke: inherit
  a
    text-decoration: none
    color: inherit
    transition: color $tr-3
    &.link:hover
      color: $tx-2
      fill: $accent-1
      stroke: $accent-1
  img
    display: block
    margin: 0 auto
    transition: all $tr-2
  button
    cursor: pointer
    transition: all $tr-2

  // Classes

  .wrapper
    max-width: $w-wrapper
    margin: 0 auto

  .close_overlay
    position: fixed
    z-index: 500
    top: 0
    right: 0
    width: 1.5em
    height: 1.5em
    padding: 2.5em
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
      fill: rgba($tx-1, 0.7)
    &:hover
      transform: scale(1.2)
      svg
        fill: lighten($accent-1, 10%)
</style>
