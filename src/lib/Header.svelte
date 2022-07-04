<script context="module">
  import {page} from '$app/stores';
</script>

<script>
  let path
  $: ({pathname} = $page)
</script>

<header>
  <div class="wrapper">
    <div class="logo_wrapper">
      <a class="logo logo_ln" data-selected={pathname === '/'} href='/'>
        <svg width="20" height="20">
          <use xlink:href="../src/img/icons.svg#bookshelf"></use>
        </svg>
      </a>
    </div>
    <div class="site_title_wrapper">
      <a class="site_title" data-selected={pathname === '/'} href='/'>
        <h1>Literary Note</h1>
      </a>
    </div>
    <nav class="nav">
      <ul class="link_items">
        <li class="link_item"><a class="link" data-selected={pathname === '/'} href="/">Главная</a></li>
        <li class="link_item"><a class="link" data-selected={pathname === '/blog'} href="/blog">Блог</a></li>
        <li class="link_item"><a class="link" data-selected={pathname === '/contacts'} href="/contacts">Контакты</a></li>
      </ul>
    </nav>
  </div>
</header>

<style lang="sass">
  header
    background-color: var(--color-bg-primary-d)
    font-family: var(--font-family-accent)
    box-shadow: 0 5px 5px 0 var(--color-bg-primary)
    a
      padding: var(--links-padding)
      fill: var(--color-text-primary)
    .wrapper
      display: flex
      align-items: center
      justify-content: space-between
      max-width: calc( var(--block-width-wrapper) + var(--links-padding) * 2 )
      > *
        flex: 1 0 calc( 100% / 3 )
    .logo
      display: inline-flex
      align-items: center
      h1
        font-size: 1.2rem
        text-transform: uppercase
      svg
        width: 3.5rem
        height: 3.5rem
        margin-right: .5rem
    .site_title h1
      font-size: 1.2rem
      text-transform: uppercase
      text-align: center
    .link_items
      display: flex
      align-items: center
      justify-content: flex-end
      font-weight: 500
    .link_item
      display: inline-flex
      &:not(:first-child)
        margin-left: .5rem
    .link
      text-transform: uppercase
      position: relative
      &::after
        content: ''
        position: absolute
        z-index: 10
        inset: calc( 100% - .8rem ) 0 0 50%
        width: calc( 100% - var(--links-padding) * 2 )
        max-width: 0
        height: .1rem
        transform: translate(-50%, 0)
        background-color: var(--tsp)
        transition: background-color .2s ease-out, max-width .45s ease
      &:hover::after
        max-width: 100%
        background-color: var(--color-text-link-hover)
</style>
