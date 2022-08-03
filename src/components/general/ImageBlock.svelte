<script>
  import SanityImage from '$components/general/SanityImage.svelte'

  export let portableText
  $: ({value} = portableText)
</script>

{#if value.asset}
  <figure class="image_figure">
    <SanityImage image={value} />
    {#if value.caption}
      <figcaption>{value.caption}</figcaption>
    {/if}
  </figure>
{/if}