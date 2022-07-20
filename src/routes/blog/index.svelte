<script>
  import PostsGrid from '$components/blog/PostsGrid.svelte';
  export let posts;
</script>

<svelte:head>
  <title>Literary Note</title>
</svelte:head>

<PostsGrid {posts} />