<script>
  import {urlFor} from '$src/service/sanityClient.js';
  import {PortableText} from '@portabletext/svelte';

  export let post;
  const post_thumbnail_url = post.image ? urlFor(post.image) : null; // TODO: default 'blank' image
  const date_post_published = new Date(post.publishedAt);
  const options = {dateStyle: 'full'};
  const date_post_published_formatted = Intl.DateTimeFormat('ru', options).format(date_post_published);
  const content = post.body;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<article>
  <div class="wrapper">
    {#if post.image}
      <div class="post_image_wrapper">
        <img class="post_image" src="{post_thumbnail_url}" alt="{post.title}">
      </div>
    {/if}

    <h1>{post.title}</h1>

    {#if date_post_published_formatted}
      <p>
        Дата публикации: {date_post_published_formatted}
      </p>
    {/if}

    {#if content}
      <PortableText
        value={post.body}
      />
    {/if}
  </div>
</article>

<style lang="sass">
  .post_image
    max-height: 70vh
    width: auto
</style>