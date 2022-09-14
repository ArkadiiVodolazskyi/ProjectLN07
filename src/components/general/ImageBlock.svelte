<script>
  import SanityImage from '$components/general/SanityImage.svelte';
  import { overlay } from '$src/service/helpers.js';
  import { onMount } from 'svelte';

  export let portableText;
  $: ({value} = portableText);

  const toggle_preview = e => {
    if (e.target.classList.contains('main')) {
      e.target.closest('.image_figure').querySelector('.preview')?.classList.add('active');
      overlay();
    } else if (e.target.classList.contains('preview')) {
      e.target.closest('.image_figure').querySelector('.preview')?.classList.remove('active');
      overlay(false);
    }
  }
  onMount(() => {
    document.querySelector("[data-action='image_preview']")?.addEventListener('click', toggle_preview);
  });
</script>

{#if value.asset}
  <figure class="image_figure" data-action="image_preview">
    <div class="image_wrapper">
      <SanityImage image={value} />
      <svg class="icon" data-action="maximize">
        <use xlink:href="../src/img/icons.svg#maximize"></use>
      </svg>
    </div>
    {#if value.caption}
      <figcaption>{value.caption}</figcaption>
    {/if}

    <SanityImage image={value} preview={true} />
  </figure>
{/if}