<script>
  import PostsGrid from '$lib/PostsGrid.svelte';
  export let posts, authors, categories;

  const extend_posts = (posts) => {
    const extended_posts = [...posts];

    extended_posts.forEach(post => {

      if (post.hasOwnProperty('author')) {
        const authors_array = [];
        post.author.forEach(single_author => {
          for (let i = 0; i < authors.length; i++) {
            if (single_author._ref === authors[i]._id) {
              authors_array.push(authors[i].title);
              break;
            }
          }
        });
        post.authors_array = authors_array;
      }

      if (post.hasOwnProperty('categories')) {
        const categories_array = [];
        post.categories.forEach(category => {
          for (let i = 0; i < categories.length; i++) {
            if (category._ref === categories[i]._id) {
              categories_array.push(categories[i].title);
              break;
            }
          }
        });
        post.categories_array = categories_array;
      }

    });

    return extended_posts;
  }

  const extended_posts = extend_posts(posts);
</script>

<svelte:head>
  <title>Literary Note</title>
</svelte:head>

<PostsGrid {extended_posts} />