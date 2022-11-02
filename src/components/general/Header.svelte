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
      <a class="logo" href='/'>
        <div class="logo_icon_wrapper">
          <div class="logo_ln"><i></i><i></i><i></i><i></i><i></i><i></i></div>
        </div>
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
  .logo_icon_wrapper
    --size: 4em
    --color: black
    --shiftb: -1px
    --shiftf: 1px
    width: 2em
    height: 2em
    padding: 2px
    margin-right: .8em
    border-radius: 0.05em
    transition: background-color $tr-2
    background-color: rgba($tx-1, 0.9)
  .logo_ln
    aspect-ratio: 1
    position: relative
    i
      position: absolute
      background-color: var(--color)
      transition: transform 0.3s ease-out
      &:nth-of-type(1)
        width: 18.4%
        height: 76.1%
        left: 0
        top: 0
      &:nth-of-type(2)
        width: 18.4%
        height: 18%
        left: 0
        top: 82%
      &:nth-of-type(3)
        width: 18.4%
        height: 18%
        left: 24.7%
        top: 82%
      &:nth-of-type(4)
        clip-path: polygon(0 0, 100% 50%, 100% 100%, 0% 100%)
        width: 18.4%
        height: 83%
        left: 42%
        top: 17%
      &:nth-of-type(5)
        clip-path: polygon(50% 0, 100% 50%, 100% 100%, 0 0)
        width: 41.2%
        height: 100%
        left: 42%
        top: 0
      &:nth-of-type(6)
        width: 18.4%
        height: 100%
        right: 0
        top: 0

  header
    --links-padding: 0.6em
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
      fill: darken($bg-1, 10%)
      &:hover
        color: $tx-2
        fill: darken($tx-2, 10%)
        .logo_icon_wrapper
          background-color: rgba($tx-1, 0.7)
        .logo_ln i
          &:nth-of-type(1)
            transform: translate(var(--shiftb), var(--shiftb))
          &:nth-of-type(2)
            transform: translate(var(--shiftb), var(--shiftf))
          &:nth-of-type(3)
            transform: translate(0, var(--shiftf))
          &:nth-of-type(4)
            transform: translate(0, var(--shiftf))
          &:nth-of-type(5)
            transform: translate(0, var(--shiftb))
          &:nth-of-type(6)
            transform: translate(var(--shiftf), 0)
      h1
        font-size: 1em
        font-weight: 500
        text-transform: uppercase
    .site_title_wrapper
      text-transform: uppercase
      text-align: center
    .link_items
      display: flex
      align-items: center
      justify-content: flex-end
      font-size: .9em
      font-weight: 500
    .link_item
      display: inline-flex
      &:not(:first-child)
        margin-left: .5em
    .link
      text-transform: uppercase
      position: relative
      &:hover, &.active
        color: $tx-2
</style>
