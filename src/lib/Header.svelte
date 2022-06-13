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
    <nav>
      <ul>
        <li><a data-selected={pathname === '/'} href="/">Literary Note</a></li>
      </ul>
    </nav>
  </Wrapper>
</header>
