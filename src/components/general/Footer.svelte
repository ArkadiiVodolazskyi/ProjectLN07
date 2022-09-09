<script></script>

<footer>

  <div class="bg_shadow">
    <svg class="opened_book" width="100%">
      <use xlink:href="../src/img/icons.svg#opened_book"></use>
    </svg>
  </div>

  <div class="content">
    <div class="wrapper">
      <ul class="socials">
        <li class="socials_item">
          <a class="socials_link" href="https://www.instagram.com/literary_note/" target="_blank" title="Открыть профиль Instagram в новой вкладке">
            <svg>
              <use xlink:href="../src/img/icons.svg#int"></use>
            </svg>
          </a>
        </li>
        <li class="socials_item centered">
          <a class="socials_link logo logo_av" href="https://github.com/ArkadiiVodolazskyi" target="_blank" title="Открыть профиль GitHub в новой вкладке">
            <svg>
              <use xlink:href="../src/img/icons.svg#av"></use>
            </svg>
          </a>
        </li>
        <li class="socials_item">
          <a class="socials_link" href="https://www.linkedin.com/in/vodolazskyi/" target="_blank" title="Написать мне в LinkedIn">
            <svg>
              <use xlink:href="../src/img/icons.svg#linkedin"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>

</footer>

<style lang="sass">
  footer
    --bg-opacity: .4
    display: grid
  .bg_shadow, .content
    grid-row: 1 / -1
    grid-column: 1 / -1
  .bg_shadow
    position: relative
    z-index: 0
    backdrop-filter: blur(10px)
    svg
      fill: hsl(0, 0%, 7%, .3)
  .content
    position: relative
    z-index: 5
    display: flex
    align-items: flex-end
    justify-content: center
    padding-bottom: 1rem
  .wrapper
    display: flex
    flex-direction: column
    align-items: center
  .socials
    margin: 0
    padding: 0
    display: flex
    align-items: center
    --iconsize: 1.6rem
  .socials_item
    display: inline-flex
    align-items: center
    justify-content: center
    &:not(:first-child)
      margin-left: .8rem
    a
      fill: var(--color-text-primary)
      stroke: none
      &:hover
        fill: var(--color-accent-primary)
    svg
      width: var(--iconsize)
      height: var(--iconsize)
    &.centered svg
      width: calc(var(--iconsize) * 1.7)
      height: calc(var(--iconsize) * 1.7)
</style>
