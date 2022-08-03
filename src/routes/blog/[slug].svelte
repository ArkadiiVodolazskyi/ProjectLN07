<script>
  import {urlFor} from '$src/service/sanityClient.js';
  import {PortableText} from '@portabletext/svelte';
  import Link from '$components/general/Link.svelte';
  import ImageBlock from '$components/general/ImageBlock.svelte';

  export let post;
  const thumbnail_url = post.image ? urlFor(post.image) : null; // TODO: default 'blank' image
  const title = post.title;
  const authors = post.authors.length ? (
    post.authors.reduce((prev_author, author) => `<li><h2>${author}</h2></li>`, '')
  ) : null;
  const date_published = new Date(post.publishedAt);
  const date_published_formatted = Intl.DateTimeFormat('ru', {dateStyle: 'full'}).format(date_published);
  const content = post.body;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<article>
  <div class="wrapper">
    {#if thumbnail_url}
      <div class="intro">
        <h2 class="title">
          {title}
        </h2>
        <div class="image_wrapper">
          <img class="image" src="{thumbnail_url}" alt="{title}">
        </div>
        <ul class="authors">
          {@html authors}
        </ul>
      </div>
    {/if}

    {#if content}
      <div class="portable_text content">
        <PortableText
          value={content}
          components={{
            types: {
              image: ImageBlock
            },
            marks: {
              link: Link
            }
          }}
        />
      </div>
    {/if}

    {#if date_published_formatted}
      <p>
        Дата публикации: {date_published_formatted}
      </p>
    {/if}
  </div>
</article>

<style lang="sass">
  .intro
    height: 70vh
    display: grid
    grid-template-columns: 25% 50% 25%
    align-items: center
  .title
    text-align: right
  .image_wrapper
    padding: 0 5em
    .image
      display: block
      width: auto
      height: auto
      max-width: 100%
      max-height: 100%
  .authors
    text-align: left
</style>