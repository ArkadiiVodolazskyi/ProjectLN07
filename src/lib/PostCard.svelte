<script>
  import {urlFor} from './sanityClient'
  export let post;
  const post_thumbnail_url = post.image ? urlFor(post.image) : null; // TODO: тут должна быть заглушка для изображения
</script>

<a class="post_card" rel="prefetch" href="/blog/{post.slug.current}">
  {#if post_thumbnail_url}
    <div class="thumnail_wrapper">
      <img class="tumbnail_img" src="{post_thumbnail_url}" alt="{post.title}">
    </div>
  {/if}
  <h2 class="card_title">{post.title}</h2>
  <p class="card_description"></p>
</a>

<style lang="sass">
  .post_card
    background-color: var(--color-bg-primary-inveted)
    box-shadow: 0 .1rem .2rem .2rem var(--color-bg-primary-d)
    border-radius: var(--radius)
    overflow: hidden
    .thumnail_wrapper
      border-radius: var(--radius)
      overflow: hidden
      box-shadow: 0 .2rem .25rem .1rem var(--color-bg-primary-o)
    .tumbnail_img
      object-fit: contain
      aspect-ratio: 1 / 1
    .card_title
    .card_description
</style>
