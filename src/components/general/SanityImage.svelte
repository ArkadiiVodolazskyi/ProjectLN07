<script>
  import {urlFor} from '$src/service/sanityClient.js';
  import {onMount} from 'svelte';
  import {browser} from '$app/env';

  export let image;
  export let maxWidth = 1200;
  export let alt = undefined;

  $: dimensions = image?.asset?._ref?.split('-')[2];
  $: [width, height] = dimensions.split('x').map(Number);

  $: aspectRatio = width / height;

  let imageRef;
  let loaded = false;

  onMount(() => {
    imageRef.onload = () => {
      loaded = true
    }
  })
</script>

{#if browser && image}
  <img
    class:loaded
    loading='lazy'
    src={urlFor(image).width(maxWidth).fit('fillmax')}
    alt={alt || image.alt || ''}
    bind:this={imageRef}
    style="aspect-ratio: {aspectRatio};"
  />
{/if}

<style lang="sass">
  img
    transition: all var(--tr-2)
    opacity: 0
    &.loaded
      opacity: 1
</style>
