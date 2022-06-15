<script>
  import Wrapper from '$lib/Wrapper.svelte'
  import PostCard from '$lib/PostCard.svelte'
  export let posts = []
</script>

<section>
  <Wrapper>
    <h2>Последние публикации</h2>
    <div class="posts">
      {#each posts as post (post.slug.current)}
        <PostCard {post} />
      {/each}
    </div>
  </Wrapper>
</section>

<style lang="sass">
  .posts
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
    gap: 3rem 2rem
    margin-top: 3rem
</style>
