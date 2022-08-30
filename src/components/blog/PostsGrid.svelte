<script>
  import PostCard from '$components/blog/PostCard.svelte';
  export let posts = [];
</script>

<section class="section_posts">
  <div class="wrapper">
    <div class="posts">
      {#each posts as post (post.slug.current)}
        <PostCard {post} />
      {/each}
    </div>
  </div>
</section>

<style lang="sass">
  .posts
    display: grid
    grid-template-columns: repeat(3, 1fr)
    gap: 3rem 2rem

  @media (max-width: 1280px)
    .posts
      grid-template-columns: repeat(2, 1fr)
</style>
