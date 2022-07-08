<script>
  import {urlFor} from './sanityClient';
  import {PortableText} from '@portabletext/svelte';
  export let post;
  const post_thumbnail_url = post.image ? urlFor(post.image) : null; // TODO: default 'blank' image
  const gradient = post.gradient;
  const build_css_gradient = `linear-gradient(${gradient.angle}deg, ${gradient.color_1} 0%, ${gradient.color_2} 100%);`;
</script>

<div class="post_card">
  {#if post_thumbnail_url}
    <a
      rel="prefetch"
      href="/blog/{post.slug.current}"
      class="thumnail_wrapper"
      style="background: {build_css_gradient};"
    >
      <img class="tumbnail_img" src="{post_thumbnail_url}" alt="{post.title}">
    </a>
  {/if}
  <div class="card_info">
    <h4 class="card_title">
      <a rel="prefetch" href="/blog/{post.slug.current}">
        {post.title}
        <!-- TODO: add author -->
        <!-- TODO: add date published -->
      </a>
    </h4>

    <!-- TODO: remove short description - not needed since single post loads fast or we can use modal window -->
    {#if post.short_description}
      <div class="card_short_description">
        <PortableText
          value={post.short_description}
        />
      </div>
    {/if}
  </div>
</div>

<style lang="sass">
  .post_card
    box-shadow: 0 .1rem .2rem .2rem var(--color-bg-primary-d)
    border-radius: calc( var(--radius) + .3rem )
    position: relative
    transition: all .2s ease-out
    box-shadow: 0 0 .1rem .1rem var(--color-bg-primary-o)
    &:hover
      .card_info
        opacity: 1
        visibility: visible
    .thumnail_wrapper
      display: block
      border-radius: var(--radius)
      overflow: hidden
      box-shadow: 0 .2rem .3rem .1rem var(--color-bg-primary-o)
      position: relative
      z-index: 20
      padding-top: 100%
    .tumbnail_img
      position: absolute
      z-index: 10
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      max-width: 85%
      max-height: 85%
      width: auto
      height: auto
      box-shadow: 0 0 .3rem .2rem var(--color-bg-primary-do)
    .card_info
      position: absolute
      z-index: 10
      width: 100%
      top: 100%
      left: 50%
      transform: translate(-50%, calc(-1 * var(--radius)))
      padding: calc( 1.5rem + var(--radius) ) 1.5rem 1.5rem
      border-radius: 0 0 var(--radius) var(--radius)
      background-color: var(--color-bg-primary-inveted)
      color: var(--color-text-secondary)
      transition: all .3s ease
      opacity: 0
      visibility: hidden
    .card_title
      font-size: 1.2rem
      line-height: 1.1
      text-align: center
      transition: color .2s ease-out
      a
        color: inherit
      &:hover
        color: var(--color-text-link)
    .card_short_description
      margin: 1rem 0 0
      font-weight: 600
</style>
