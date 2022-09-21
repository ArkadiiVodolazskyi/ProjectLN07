<script>
  import {urlFor} from '$src/service/sanityClient.js';

  export let post;
  const {
    gradient,
    title,
    authors
  } = post;

  const post_thumbnail_url = post.image ? urlFor(post.image) : null;
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
  {#if post_thumbnail_url}
    <img class='tumbnail_img' src='{post_thumbnail_url}' alt='{post.title}'>
  {:else}
    <h3 class='title_authors'>
      <p class='title'>{title}</p>
      <p class='authors'>{authors.map(author => author.name)}</p>
    </h3>
  {/if}
</a>

<style lang='sass'>
  .post_card
    box-shadow: var(--shd-1)
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    border-radius: var(--radius)
    overflow: hidden
    position: relative
    aspect-ratio: 1
    background: linear-gradient((calc(var(--angle) * 1deg)), var(--grad1) 0%, var(--grad2) 100%)
    filter: grayscale(.75)
    transition: filter .25s ease-in-out
    &:hover
      filter: grayscale(0)
      .tumbnail_img
        transform: scale(1.02)
      .title_authors
        transform: scale(1.08)
  .tumbnail_img
    max-width: 85%
    max-height: 85%
    width: auto
    height: auto
    box-shadow: 0 0 .3rem .2rem hsla(0, 0%, 13%, .6)
    position: relative
    z-index: 1
    transition: transform 1s ease
  .title_authors
    padding: 2rem
    text-align: center
    transition: transform 1s ease
    .title
      font-size: 1.5em
</style>
