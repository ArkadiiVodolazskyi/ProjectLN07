<script>
  import SanityImage from '$components/general/SanityImage.svelte';

  export let portableText;
  $: ({value} = portableText);

  const toggle_preview = e => {
    if (e.target.classList.contains('main')) {
      e.target.closest('.image_figure').querySelector('.preview')?.classList.add('active');
    } else if (e.target.classList.contains('preview')) {
      e.target.closest('.image_figure').querySelector('.preview')?.classList.remove('active');
    }
  }
</script>

{#if value.asset}
  <figure class="image_figure" on:click={toggle_preview}>
    <SanityImage image={value} />
    {#if value.caption}
      <figcaption>{value.caption}</figcaption>
    {/if}

    <SanityImage image={value} preview={true} />
  </figure>
{/if}

<style lang="sass">
  .image_figure
    position: relative
    z-index: 10
</style>