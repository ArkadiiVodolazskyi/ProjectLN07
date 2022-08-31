<script></script>

<footer class='blog'>
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

</footer>

<style lang="sass">
  footer
    border-radius: var(--radius) var(--radius) 0 0
    background-color: var(--color-bg-primary-d)
    height: 7rem
    display: flex
    align-items: flex-end
    &.blog
      background-color: var(--tsp)
      position: relative
      background-image: url('../../img/opened_book.png')
      background-size: 100% 100%
      background-position: center bottom
  .wrapper
    padding: 0 1rem .6rem
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
