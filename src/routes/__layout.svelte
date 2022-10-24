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
    font-size: $fs-primary
    font-family: $ff-general
    color: $tx-1
    line-height: 1.4
    scroll-behavior: smooth
  body
    // TODO: maybe use relief pattern, like crumpled paper or something
    // TODO: style scrollbar, check in Chrome
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

  // Portable text

  // TODO: work with colors
  .portable_text
    padding-block: 3em
    position: relative
    text-indent: 1.5em
    > :where(:not(:first-child))
      margin-top: 1.3em
    .image_figure
      position: relative
      z-index: 150
      border-radius: $rad
      .image_wrapper
        width: max-content
        max-width: 100%
        margin: 0 auto
        position: relative
        transition: box-shadow $tr-2, transform .2s ease-in
        border-radius: inherit
        img
          max-width: 45vw
          max-height: 45vh
          position: relative
          z-index: 2
    a
      color: $tx-2
      transition: color $tr-1
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
        background-color: $accent-1
        border-radius: calc($rad * .4)
        transition: max-height $tr-1 // TODO: fix - no transition shown
        max-height: 0
      &:hover
        color: $tx-2
        &::after
          max-height: 100%
    h4, h5
      text-indent: 0
      font-size: 1.5em
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
        width: 1.25em
        height: .2em
        border-radius: $rad * 2
        background: linear-gradient(to right, $gr-2)
        transition: all .3s ease
        opacity: 0
        transform: translate( calc( -100% - 2em ) , 0) scale(0)
      &.active::before
        opacity: .75
        transform: translate( -2em, 0) scale(1)
    .chapter_title
      scroll-margin-top: 2em
    blockquote
      width: 95%
      margin-inline: auto
      padding: 1.2em 1.5em
      border-radius: calc( $rad * .4 )
      line-height: 1.35em
      box-shadow: inset 0px 0px 2px 2px hsl(0, 0%, 10%, .35)
      position: relative
      mix-blend-mode: difference
      // TODO: create mixin to add gradient with pseudo-class
      &::before
        content: ''
        position: absolute
        z-index: -1
        left: 0
        top: 0
        right: 0
        bottom: 0
        width: 100%
        height: 100%
        background: linear-gradient(135deg, $gr-2)
        border-radius: inherit
        opacity: 0.5
    // TODO: squash lists a bit
    // TODO: use additional highlight of the list, like aside line, etc.
    ul, ol
      padding-left: 1em
      line-height: 1.4em
      text-indent: 0.2em
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
