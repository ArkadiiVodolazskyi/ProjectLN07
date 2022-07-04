<script>
  import {urlFor} from './sanityClient';
  import {PortableText} from '@portabletext/svelte';
  export let post;
  const post_thumbnail_url = post.image ? urlFor(post.image) : null; // TODO: тут должна быть заглушка для изображения

  // TODO: add two-three fields into Sanity post for gradient colors and angle
  // instead of this
  const hexString = "0123456789abcdef";
  const randomColor = () => {
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
      hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
  }

  const generateGrad = () => {
    const colorOne = randomColor();
    const colorTwo = randomColor();
    const angle = Math.floor(Math.random() * 360);
    return `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
  }

  const gradient = generateGrad();
</script>

<a class="post_card" rel="prefetch" href="/blog/{post.slug.current}">
  {#if post_thumbnail_url}
    <div
      class="thumnail_wrapper"
      style="background: {gradient};"
    >
      <img class="tumbnail_img" src="{post_thumbnail_url}" alt="{post.title}">
    </div>
  {/if}
  <div class="card_info">
    <h4 class="card_title">{post.title}</h4>

    {#if post.short_description}
      <div class="card_short_description">
        <PortableText
          value={post.short_description}
        />
      </div>
    {/if}
  </div>
</a>

<style lang="sass">
  .post_card
    background-color: var(--color-bg-primary-inveted)
    box-shadow: 0 .1rem .2rem .2rem var(--color-bg-primary-d)
    border-radius: var(--radius)
    overflow: hidden
    transition: all .2s ease-out
    box-shadow: 0 0 .1rem .1rem var(--color-bg-primary-o)
    &:hover
      transform: scale(1.02)
      .card_title
        color: var(--color-text-link)
    .thumnail_wrapper
      border-radius: var(--radius)
      overflow: hidden
      box-shadow: 0 .2rem .3rem .1rem var(--color-bg-primary-o)
      position: relative
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
      padding: 1.5rem
      color: var(--color-text-secondary)
    .card_title
      font-size: 1.3rem
      line-height: 1.1
      text-align: center
      transition: color .2s ease-out
    .card_short_description
      margin: 1rem 0 0
      font-weight: 600
</style>
