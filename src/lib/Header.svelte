<script context="module">
  import {page} from '$app/stores';
</script>

<script>
  let path
  $: ({pathname} = $page)
</script>

<header>
  <div class="wrapper">
    <a class="logo logo_ln" data-selected={pathname === '/'} href='/'>
      <svg width="50" height="50">
        <use xlink:href="../src/img/icons.svg#bookshelf"></use>
      </svg>
      <h1>Literary Note</h1>
    </a>
    <nav class="nav">
      <ul class="link_items">
        <li class="link_item"><a class="link" data-selected={pathname === '/blog'} href="/blog">Блог</a></li>
        <li class="link_item"><a class="link" data-selected={pathname === '/contacts'} href="/contacts">Контакты</a></li>
      </ul>
    </nav>
  </div>
</header>

<style lang="sass">
  header
    font-family: var(--font-family-accent)
    a
      padding: 1rem
    svg
      fill: var(--color-text-primary)
    .wrapper
      display: flex
      align-items: center
      justify-content: space-between
    .logo
      display: inline-flex
      align-items: center
</style>
