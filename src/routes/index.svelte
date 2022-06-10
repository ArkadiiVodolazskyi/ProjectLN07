<script>
  import PostsGrid from '$lib/PostsGrid.svelte'

  export let posts
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts 123</h1>

<PostsGrid {posts} />