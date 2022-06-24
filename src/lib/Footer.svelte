<footer>
  <div class="wrapper">


    <ul class="socials">
      <li class="socials_item">
        <a class="socials_link" href="https://www.instagram.com/literary_note/">
          <svg width="30" height="30">
            <use xlink:href="../src/img/icons.svg#int"></use>
          </svg>
        </a>
      </li>
      <li class="socials_item">
        <a class="socials_link logo logo_av" href='https://github.com/ArkadiiVodolazskyi'>
          <svg width="60" height="60">
            <use xlink:href="../src/img/icons.svg#av"></use>
          </svg>
        </a>
      </li>
      <li class="socials_item">
        <a class="socials_link" href="https://www.linkedin.com/in/vodolazskyi/">
          <svg width="30" height="30">
            <use xlink:href="../src/img/icons.svg#linkedin"></use>
          </svg>
        </a>
      </li>
    </ul>
  </div>
</footer>

<style lang="sass">
  footer
    background-color: var(--color-bg-primary-d)
    .wrapper
      padding: .5rem 0
      display: flex
      flex-direction: column
      align-items: center
    .socials
      margin: 0
      padding: 0
      display: flex
      align-items: center
    .socials_item
      display: inline-flex
      align-items: center
      justify-content: center
      a
        padding: 1rem
      svg
        fill: var(--color-text-primary)
</style>
