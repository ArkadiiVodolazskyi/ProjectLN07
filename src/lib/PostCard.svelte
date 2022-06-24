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
    .thumnail_wrapper
    .tumbnail_img
      object-fit: contain
    .card_title
    .card_description
</style>
