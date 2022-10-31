<script>
  import {urlFor} from '$src/service/sanityClient.js';
  import {onMount} from 'svelte';
  import {browser} from '$app/env';
    import Spinner from './Spinner.svelte'

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
  <!-- <div class="image_box {loaded ? 'loaded' : ''}"> -->
  <div class="image_box">
    <Spinner />
    <!-- <img
      class={`${loaded ? 'loaded' : 'not_loaded'} ${className || ''}`}
      loading='lazy'
      src={urlFor(image).width(maxWidth || 1200).fit('fillmax')}
      width={width}
      height={height}
      alt={alt || image.alt || ''}
      bind:this={imageRef}
      style="aspect-ratio: {aspectRatio};"
    /> -->
  </div>
{/if}

<style lang="sass">
  .image_box
    position: relative
    z-index: 1
    min-width: 100px
    min-height: 100px
    --spinner: 1
    &.loaded
      --spinner: 0
    :global(.spinner)
      position: absolute
      z-index: inherit
      left: 50%
      top: 50%
      transform: translate(-50%, -50%)
      transition: opacity $tr-2
      opacity: var(--spinner)
  img
    opacity: 0
    &.loaded
      opacity: 1
</style>
