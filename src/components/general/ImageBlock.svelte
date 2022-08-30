<script>
  import SanityImage from '$components/general/SanityImage.svelte';

  export let portableText;
  $: ({value} = portableText);

  // TODO: better scripts and animation of fullscreen
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

<style lang="sass">
  .image_figure
    position: relative
    z-index: 10
  .image_wrapper
    width: max-content
    max-width: 100%
    margin: 0 auto
    position: relative
    .icon
      position: absolute
      z-index: 7
      top: 0
      right: 0
      width: 1.5rem
      height: 1.5rem
      stroke: var(--color-text-primary)
      transform-origin: center
      transition: opacity .3s ease
      opacity: 0
      transform: translate(-1rem, 1rem) rotate(180deg)
    &:hover .icon
      opacity: 1
      transform: translate(-1rem, 1rem) rotate(0deg)
</style>