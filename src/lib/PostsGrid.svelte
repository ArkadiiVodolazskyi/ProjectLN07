<script>
  import PostCard from '$lib/PostCard.svelte';
  export let posts = [];
</script>

<section>
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
    grid-template-columns: repeat(4, 1fr)
    gap: 3rem 2rem
    margin-top: 3rem
</style>
