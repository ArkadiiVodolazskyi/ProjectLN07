<script>
  import { page } from '$app/stores';
  import Icon from '$components/general/Icon.svelte';

  const links = [
    {
      title: 'Главная',
      path: '/'
    },
    {
      title: 'Блог',
      path: '/blog'
    },
    // {
    //   title: 'Обо мне',
    //   path: '/about',
    // }
  ];
</script>

<header>
  <div class="wrapper">
    <div class="logo_wrapper">
      <a class="logo logo_ln" href='/'>
        <!-- Create favicon from logo -->
        <Icon type={'logo_ln_1'} />
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
    --links-padding: 1rem
    padding: calc( var(--links-padding) * .2 ) 0
    font-family: $ff-accent
    background-color: hsl(0, 0%, 10%, .5)
    backdrop-filter: blur(5px)
    a
      padding: var(--links-padding)
      fill: $tx-1
    .wrapper
      display: flex
      align-items: center
      justify-content: space-between
      max-width: calc( $w-wrapper + var(--links-padding) * 2 )
      > *
        flex: 1 0 calc( 100% / 3 )
    .logo
      display: inline-flex
      align-items: center
      fill: $tx-1
      h1
        font-size: 1.15em
        font-weight: 500
        text-transform: uppercase
      :global(svg)
        width: 2.2em
        height: 2.2em
        margin-right: .6em
        fill: inherit
      &:hover
        fill: $accent-1
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
        color: $tx-2
</style>
