<script>
  import Icon from './Icon.svelte';
</script>

<footer>

  <div class="bg_shadow">
    <Icon type={'opened_book'} />
  </div>

  <div class="content">
    <div class="wrapper">
      <ul class="socials">
        <li class="socials_item">
          <a class="socials_link" href="https://www.instagram.com/literary_note/" target="_blank" title="Открыть профиль Instagram в новой вкладке">
            <Icon type={'int'} />
          </a>
        </li>
        <li class="socials_item centered">
          <a class="socials_link logo logo_av" href="https://github.com/ArkadiiVodolazskyi" target="_blank" title="Открыть профиль GitHub в новой вкладке">
            <Icon type={'av'} />
          </a>
        </li>
        <li class="socials_item">
          <a class="socials_link" href="https://www.linkedin.com/in/vodolazskyi/" target="_blank" title="Написать мне в LinkedIn">
            <Icon type={'linkedin'} />
          </a>
        </li>
      </ul>
    </div>
  </div>

</footer>

<style lang="sass">
  footer
    --bg-opacity: .6
    display: grid
  .bg_shadow, .content
    grid-row: 1 / -1
    grid-column: 1 / -1
  .bg_shadow
    position: relative
    z-index: 0
    backdrop-filter: blur(10px)
    :global(.ico_opened_book)
      fill: hsl(0, 0%, 7%, var(--bg-opacity))
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
      fill: var(--tx-1)
      stroke: none
      &:hover
        fill: var(--accent-1)
    :global(svg)
      width: var(--iconsize)
      height: var(--iconsize)
    &.centered :global(svg)
      width: calc(var(--iconsize) * 1.7)
      height: calc(var(--iconsize) * 1.7)
</style>
