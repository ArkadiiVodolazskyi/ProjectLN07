<script>
  import {PortableText} from '@portabletext/svelte';
  import SanityImage from '$components/SanityImage.svelte';

  export let post;

  const date_post_published = new Date(post.publishedAt);
  const options = {dateStyle: 'full'};
  const date_post_published_formatted = Intl.DateTimeFormat('ru', options).format(date_post_published);
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<article>
  <div class="wrapper">
    <h1>{post.title}</h1>
    <p>
      Дата публикации: {date_post_published_formatted}
    </p>

    {#if post.image}
      <SanityImage image={post.image} />
    {/if}

    <PortableText
      value={post.body}
    />
  </div>
</article>
