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
        <h2 class="title">
          {title}
        </h2>
        <div class="image_wrapper">
          <img class="image" src="{urlFor(image)}" alt="{title}">
        </div>
        <ul class="authors">
          {@html authors.map(author => `<li>${author.name}</li>`)}
        </ul>
        <time class="book_first_published">
          {book_first_published}
        </time>
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

    <div class="meta">
      {#if categories.length}
        <div class="categories">
          <h6>Категории: </h6>
          <ul class="categories">
            {@html categories.map(category => `<li>${category.title}</li>`)}
          </ul>
        </div>
      {/if}

      {#if date_published_formatted}
        <div class="post_publish_date">
          <h6>Дата публикации: </h6>
          <time datetime={publishedAt}>
            {date_published_formatted}
          </time>
        </div>
      {/if}
    </div>

  </div>
</article>

<style lang="sass">
  .intro
    font-size: 1.7rem
    height: 70vh
    display: grid
    grid-template-columns: 25% 50% 25%
    grid-template-rows: 95% 5%
    align-items: center
    position: relative
    z-index: 10
    padding: 1rem
    &::before
      content: ''
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
    padding: 1rem
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
    font-size: inherit
  .authors
    text-align: left
    font-size: inherit
  .book_first_published
    grid-column: span 3
    text-align: center
  .meta
    text-align: center
    > *:not(:first-child)
      margin-top: .5rem
  .categories, .post_publish_date
    display: flex
    align-items: center
    justify-content: center
    h6
      margin-right: 0.5rem
</style>