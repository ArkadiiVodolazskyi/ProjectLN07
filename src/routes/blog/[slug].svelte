<script>
  import {urlFor} from '$src/service/sanityClient.js';
  import {PortableText} from '@portabletext/svelte';
  import Link from '$components/general/Link.svelte';
  import ImageBlock from '$components/general/ImageBlock.svelte';

  export let post;
  const thumbnail_url = post.image ? urlFor(post.image) : null;
  const title = post.title;
  const authors = post.authors.length ? (
    post.authors.reduce((prev_author, author) => `<li><h2>${author}</h2></li>`, '')
  ) : null;
  const date_published = new Date(post.publishedAt);
  const date_published_formatted = Intl.DateTimeFormat('ru', {dateStyle: 'full'}).format(date_published);
  const content = post.body;
  const build_css_gradient = `linear-gradient(${post.gradient.angle}deg, ${post.gradient.color_1} 0%, ${post.gradient.color_2} 100%);`;
  console.log(content);
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<article>
  <div class="wrapper">
    {#if thumbnail_url}
      <div class="intro">
        <div class="backdrop" style="background: {build_css_gradient};"></div>
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
    grid-template-rows: 100%
    align-items: center
    position: relative
    z-index: 10
    padding: 2rem
  .backdrop
    position: absolute
    z-index: -1
    left: 0
    top: 0
    right: 0
    bottom: 0
    opacity: .7
    border-radius: var(--radius)
  .image_wrapper
    padding: 1rem 2em
    width: 100%
    height: 100%
    .image
      display: block
      width: auto
      height: auto
      max-width: 100%
      max-height: 100%
      box-shadow: 0 0 .5rem .2rem var(--color-bg-primary-d)
  .title
    text-align: right
  .authors
    text-align: left
</style>