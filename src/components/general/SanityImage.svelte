<script>
  import {urlFor} from '$src/service/sanityClient.js';
  import {onMount} from 'svelte';
  import {browser} from '$app/env';

  export let image;
  export let maxWidth = 1200;
  export let alt = undefined;
  export let preview = null;

  $: dimensions = image?.asset?._ref?.split('-')[2];
  $: [width, height] = dimensions.split('x').map(Number);

  $: aspectRatio = width / height;

  let imageRef;
  // Once loaded, the image will transition to full opacity
  let loaded = false;

  onMount(() => {
    imageRef.onload = () => {
      loaded = true
    }
  })
</script>

{#if browser && image}
  <img
    class={`${loaded && !preview ? 'loaded' : ''} ${preview ? 'preview' : 'main'}`}
    loading={!preview ? 'lazy' : ''}

    src={urlFor(image).width(maxWidth).fit('fillmax')}
    alt={alt || image.alt || ''}
    bind:this={imageRef}
    style="aspect-ratio: {aspectRatio};"
  />
{/if}

<style lang="sass">
  img
    transition: opacity .3s ease-out
    opacity: 0
    cursor: pointer
    &.loaded
      opacity: 1
    &.preview
      position: fixed
      z-index: 20
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      visibility: hidden
      max-width: 80vw
      max-height: 80vh
      box-shadow: 0 0 20rem 20rem var(--color-bg-primary-do)
    &.active
      opacity: 1
      visibility: visible
</style>
