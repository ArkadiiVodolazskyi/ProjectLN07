<script>
  import {urlFor} from '$src/service/sanityClient.js';

  export let post;
  const {
    book_first_published,
    gradient,
    cats: categories,
    authors
  } = post;

  const post_thumbnail_url = post.image ? urlFor(post.image) : null;

  // TODO: add post views counter
</script>

<div
  class="post_card"
  style={`
    --grad1: ${gradient.color_1};
    --grad2: ${gradient.color_2};
    --angle: ${gradient.angle};
  `}
>
  {#if post_thumbnail_url}
    <a
      rel="prefetch"
      href="/blog/{post.slug.current}"
      class="thumnail_wrapper"
    >
      <div class="backgrop"></div>
      <img class="tumbnail_img" src="{post_thumbnail_url}" alt="{post.title}">
    </a>
  {/if}
</div>

<style lang="sass">
  .post_card
    border-radius: calc( var(--radius) + .3rem )
    position: relative
    transition: all .2s ease-out
    box-shadow: 0 0 .1rem .1rem var(--color-bg-primary-o)
    &:hover .backgrop
      transform: translate(-50%, -30%)
    .thumnail_wrapper
      display: block
      border-radius: var(--radius)
      overflow: hidden
      box-shadow: 0 .2rem .3rem .1rem var(--color-bg-primary-o)
      position: relative
      z-index: 20
      padding-top: 100%
      background-color: var(--color-bg-primary-d)
    .backgrop
      position: absolute
      z-index: 30
      top: 50%
      left: 50%
      width: 200%
      height: 200%
      transform-origin: center
      transition: all .3s ease
      transform: translate(-50%, -50%)
      background: linear-gradient((calc(var(--angle) * 1deg)), var(--grad1) 0%, var(--grad2) 100%)
    .tumbnail_img
      position: absolute
      z-index: 50
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      max-width: 85%
      max-height: 85%
      width: auto
      height: auto
      box-shadow: 0 0 .3rem .2rem var(--color-bg-primary-do)
</style>
