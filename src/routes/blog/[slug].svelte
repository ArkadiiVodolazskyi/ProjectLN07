<script>
  import {urlFor} from '$src/service/sanityClient.js';
  import {slugify} from '$src/service/helpers.js';
  import BlogArticle from '$components/blog/BlogArticle.svelte';

  export let post;
  const {
    authors,
    body,
    book_first_published,
    categories,
    contents,
    gradient,
    image,
    publishedAt,
    slug,
    title,
    printed_version
  } = post;

  const date_published = new Date(publishedAt);
  const date_published_formatted = Intl.DateTimeFormat('ru', {dateStyle: 'full'}).format(date_published);
  const build_css_gradient = `linear-gradient(${gradient.angle}deg, ${gradient.color_1} 0%, ${gradient.color_2} 100%)`;

  const contents_list = [];
  const body_chaptered = body.map(item => {
    if (item.style === 'h4') {
      const text = (item.children.reduce((sum, child) => sum + child.text, '')).split('[')[0];
      const chapter_id = `ch-${slugify(text)}`;

      item.chapter_id = chapter_id;
      contents_list.push({
        text,
        chapter_id,
        node: null
      });
    }
    return item;
  });
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<article class="blog_article" style="--gradient: {build_css_gradient};">

  <!-- TODO: add button 'back to all posts' -->
  <!-- TODO: simplify the intro, try to think about mobile versions -->
  <div class="intro">
    <div class="wrapper">
      <a class="back_to_posts" href="/blog">
        <svg class="arrow"><use xlink:href="../src/img/icons.svg#arrow_left"></use></svg>
        <span>Все посты</span>
      </a>

      <!-- Add hover-shatterring effect -->
      <div class="image_wrapper">
        <img class="image" src="{urlFor(image)}" alt="{title}">
      </div>

      <h2 class="title">
        {title}
      </h2>

      <ul class="authors">
        {@html authors.map(author => `<li>${author.name}</li>`)}
      </ul>

      <time class="book_first_published">
        {book_first_published}
      </time>
    </div>
  </div>

  <BlogArticle
    contents_list={contents_list}
    body_chaptered={body_chaptered}
    printed_version={printed_version}
    authors={authors}
    title={title}
  />

  <div class="meta">
    <!-- TODO: add spaces between categories -->
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

</article>

<style lang="sass">
  .blog_article
    padding-bottom: 2rem
  .intro
    position: relative
    z-index: 10
    box-shadow: inset 0 0 .5rem .5rem hsl(0deg, 0%, 10%, .5)
    &::before
      content: ''
      position: absolute
      z-index: -1
      left: 0
      top: 0
      right: 0
      bottom: 0
      opacity: .5
      background: var(--gradient)
    .wrapper
      font-size: 1.7rem
      display: grid
      grid-template-rows: 2rem 1fr 2rem
      grid-template-columns: 25% 50% 25%
      align-items: center
      font-family: var(--font-family-semiaccent)
      font-weight: 500
      padding: 2rem 0
      .back_to_posts
        grid-row: 1
        grid-column: 1 / span 3
        font-family: var(--font-family-accent)
        font-weight: 400
        font-size: 1.1rem
        display: flex
        align-items: center
        text-transform: uppercase
        background-color: hsl(0, 0%, 10%, .6  )
        width: max-content
        max-width: 25%
        padding: .4em .5em
        border-radius: calc( var(--radius) * .4 )
        .arrow
          margin-right: .5em
          width: .8em
          height: .8em
          stroke-width: 2em
          stroke: hsl(0deg, 0%, 82%)
      .image_wrapper
        grid-row: 1 / span 2
        grid-column: 2
        display: flex
        align-items: center
        justify-content: center
        padding: 0 3rem
        .image
          display: block
          width: auto
          height: auto
          max-width: 100%
          max-height: 30rem
          box-shadow: 0 0 .5rem .2rem hsl(0, 0%, 10%)
    .title
      grid-row: 2
      grid-column: 1
      text-align: right
      font-size: inherit
      font-family: inherit
    .authors
      grid-row: 2
      grid-column: 3
      text-align: left
      font-size: inherit
    .book_first_published
      padding-top: 2rem
      grid-row: 3
      grid-column: 2
      text-align: center
      font-size: .85em
      font-weight: 400

  .meta
    margin: 2em auto 0
    border-radius: var(--radius)
    line-height: 1.5rem
    padding-inline: 2rem
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