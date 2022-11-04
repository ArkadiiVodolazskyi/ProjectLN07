<script>
  import BlogArticle from '$components/blog/BlogArticle.svelte';
  import Meta from '$components/blog/Meta.svelte';
  import ArticleIntro from '$components/blog/ArticleIntro.svelte';

  export let post;
  const {
    authors,
    body,
    book_first_published,
    categories,
    gradient,
    image,
    publishedAt,
    title,
    printed_version
  } = post;

  const date_published = new Date(publishedAt);
  const date_published_formatted = Intl.DateTimeFormat('ru', {dateStyle: 'full'}).format(date_published);
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<article
  class="blog_article"
  style="
    --gr-angle: {gradient.angle}deg;
    --gr-color-1: {gradient.color_1};
    --gr-color-2: {gradient.color_2};
  ">

  <ArticleIntro
    {title}
    {image}
    {authors}
    {book_first_published}
  />

  {#if body}
    <BlogArticle
      {body}
      {printed_version}
      {authors}
      {title}
    />
  {/if}

  <Meta
    categories={categories}
    date_published_formatted={date_published_formatted}
    publishedAt={publishedAt}
  />

</article>

<style lang="sass">
  .blog_article
    margin-top: -3em
</style>