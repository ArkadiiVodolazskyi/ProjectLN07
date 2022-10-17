<script>
  import {urlFor} from '$src/service/sanityClient.js';
  import {onMount} from 'svelte';
  import {browser} from '$app/env';

  export let image, maxWidth, alt, className;

  $: dimensions = image?.asset?._ref?.split('-')[2];
  $: [width, height] = dimensions.split('x').map(Number);
  $: aspectRatio = width / height;

  let imageRef;
  let loaded = false;

  onMount(() => {
    imageRef.onload = () => loaded = true;
  })
</script>

{#if browser && image}
  <img
    class={`${loaded ? 'loaded' : 'not_loaded'} ${className || ''}`}
    loading='lazy'
    src={urlFor(image).width(maxWidth || 1200).fit('fillmax')}
    width={width}
    height={height}
    alt={alt || image.alt || ''}
    bind:this={imageRef}
    style="aspect-ratio: {aspectRatio};"
  />
{/if}

<style lang="sass">
  img
    opacity: 0
    &.loaded
      opacity: 1
</style>
