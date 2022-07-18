<script>
  import {PortableText} from '@portabletext/svelte';
  import SanityImage from '$components/SanityImage.svelte';

  export let post;

  // TODO: create components:
  // 1 Cite or Cites
  // 2 Chapter / Section
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<article>
  <div class="wrapper">
    <h1>{post.title}</h1>
    <p>
      Дата публикации: {new Date(post.publishedAt).toLocaleDateString('ru', {
        month: 'long',
        day: '2-digit',
        year: 'numeric'
      })}
    </p>

    {#if post.image}
      <SanityImage image={post.image} />
    {/if}

    <PortableText
      value={post.body}
    />
  </div>
</article>
