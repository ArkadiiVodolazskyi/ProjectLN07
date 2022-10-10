<script>
  import SanityImage from '$components/general/SanityImage.svelte';

  export let post;
  const {
    gradient,
    title,
    authors
  } = post;
</script>

<a
  rel='prefetch'
  href='/blog/{post.slug.current}'
  class='post_card'
  style={`
    --grad1: ${gradient.color_1};
    --grad2: ${gradient.color_2};
    --angle: ${gradient.angle};
  `}
>
  <div class="backgrop"></div>

  {#if post.image}
    <SanityImage image={post.image} maxWidth={300} className={'post_card_thumb'} />
  {:else}
    <h3 class='title_authors'>
      <p class='title'>{title}</p>

      {#if authors && authors.length}
        <p class='authors'>{authors.map(author => author.name)}</p>
      {/if}

    </h3>
  {/if}
</a>

<style lang='sass'>
  .post_card
    box-shadow: $shd-1
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    border-radius: $rad
    overflow: hidden
    position: relative
    aspect-ratio: 1
    &:hover
      .backgrop
        transform: translate(-50%, -30%) rotate(-15deg)
      :global(img)
        transform: translate(-50%, -50%) scale(1.02)
        box-shadow: 0 0 .2em .1em hsla(0, 0%, 13%, .3)
      .title_authors
        transform: scale(1.08)
  .backgrop
    position: absolute
    z-index: 30
    top: 50%
    left: 50%
    width: 200%
    height: 200%
    transform-origin: center
    transition: transform .4s ease
    transform: translate(-50%, -50%)
    background: linear-gradient((calc(var(--angle) * 1deg)), var(--grad1) 0%, var(--grad2) 100%)
  :global(.post_card_thumb)
    position: absolute
    z-index: 50
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    max-width: 85%
    max-height: 85%
    width: auto
    height: auto
    box-shadow: 0 0 .3em .2em hsla(0, 0%, 13%, .6)
  .title_authors
    padding: 2em
    text-align: center
    position: relative
    z-index: 50
    font-weight: 500
    text-transform: uppercase
    transition: transform 1s ease
    .title
      font-size: 1.5em
      line-height: 1.1
      font-weight: 600
    .authors
      margin-top: 1em
</style>
