<script>
  import { page } from '$app/stores';

  // TODO: make more space for Header

  const links = [
    {
      title: 'Главная',
      path: '/'
    },
    {
      title: 'Блог',
      path: '/blog'
    },
    {
      title: 'Обо мне',
      path: '/about',
    }
  ];
</script>

<header>
  <div class="wrapper">
    <div class="logo_wrapper">
      <a class="logo logo_ln" href='/'>
        <h1>Literary Note</h1>
      </a>
    </div>
    <nav class="nav">

      {#if links.length}
        <ul class="link_items">
          {#each links as link}
            <li class="link_item">
              <a
                href={link.path}
                class="link {$page.url.pathname === link.path ? 'active' : ''}"
              >
                {link.title}
              </a>
            </li>
          {/each}
        </ul>
      {/if}

    </nav>
  </div>
</header>

<style lang="sass">
  header
    --links-padding: .8rem
    padding: calc( var(--links-padding) * .2 ) 0
    background-color: var(--color-bg-primary-d)
    font-family: var(--font-family-accent)
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
    .site_title_wrapper
      text-transform: uppercase
      text-align: center
    .link_items
      display: flex
      align-items: center
      justify-content: flex-end
      font-size: .9rem
      font-weight: 500
    .link_item
      display: inline-flex
      &:not(:first-child)
        margin-left: .5rem
    .link
      text-transform: uppercase
      position: relative
      &:hover, &.active
        color: var(--color-text-link-hover)
</style>
