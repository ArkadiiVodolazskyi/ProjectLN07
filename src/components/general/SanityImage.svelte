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
  <div class="image_box {loaded ? 'loaded' : ''}">
    <Spinner />
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
  </div>
{/if}

<style lang="sass">
  .image_box
    width: 100%
    height: 100%
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
  img
    opacity: 0
    &.loaded
      animation: fade_in 0.4s ease-in forwards
      animation-delay: calc(var(--index) * 25ms)

  @keyframes fade_in
    from
      opacity: 0
    to
      opacity: 1
</style>
