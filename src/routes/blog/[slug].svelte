<script>
  import {urlFor} from '$src/service/sanityClient.js';
  import {PortableText} from '@portabletext/svelte';
  import Link from '$components/general/Link.svelte';
  import ImageBlock from '$components/general/ImageBlock.svelte';

  export let post;
  const {
    authors,
    body,
    book_first_published,
    categories,
    gradient,
    image,
    publishedAt,
    slug,
    title
  } = post;

  const date_published = new Date(publishedAt);
  const date_published_formatted = Intl.DateTimeFormat('ru', {dateStyle: 'full'}).format(date_published);
  const build_css_gradient = `linear-gradient(${gradient.angle}deg, ${gradient.color_1} 0%, ${gradient.color_2} 100%)`;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<article style="--gradient: {build_css_gradient};">
  <div class="wrapper">
    {#if image}
      <div class="intro">
        <div class="backdrop"></div>
        <h2 class="title">
          {title}
        </h2>
        <div class="image_wrapper">
          <img class="image" src="{urlFor(image)}" alt="{title}">
        </div>
        <ul class="authors">
          {@html authors.map(author => `<li>${author.name}</li>`)}
        </ul>
      </div>
    {/if}

    {#if body}
      <div class="portable_text content">
        <PortableText
          value={body}
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
      <time class='post_publush_date' datetime={publishedAt}>
        Дата публикации: {date_published_formatted}
      </time>
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
    background: var(--gradient)
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