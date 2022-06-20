<script context="module">
  import {page} from '$app/stores';
  import Wrapper from './Wrapper.svelte';
</script>

<script>
  let path
  $: ({pathname} = $page)
</script>

<header>
  <Wrapper>
    <a class="logo" data-selected={pathname === '/'} href="/">
      <!-- TODO: 1. Show gradient in imported SVG.
      2. Give gradient to imported SVG through Sass. -->
      <svg class="svg_icon" width="50" height="50">
        <linearGradient id="linGrad1">
          <stop stop-color="#7f00ff" offset=".3"></stop>
          <stop stop-color="#e100ff" offset="1"></stop>
        </linearGradient>
        <use xlink:href="../src/img/icons.svg#bookshelf"></use>
      </svg>
    </a>
    <nav class="nav">
      <ul class="link_items">
        <li class="link_item"><a class="link" data-selected={pathname === '/blog'} href="/blog">Блог</a></li>
        <li class="link_item"><a class="link" data-selected={pathname === '/contacts'} href="/contacts">Контакты</a></li>
      </ul>
    </nav>
  </Wrapper>
</header>

<style lang="sass">
  svg
    border: 3px solid red
    fill: url(#linGrad1)
    path, g, use, symbol
      fill: inherit
</style>
