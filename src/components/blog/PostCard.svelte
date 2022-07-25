<script>
  import {urlFor} from '$src/service/sanityClient.js';

  export let post;
  const {
    book_first_published,
    gradient,
    cats: categories,
    authors
  } = post;

  const post_thumbnail_url = post.image ? urlFor(post.image) : null; // TODO: default 'blank' image
  const build_css_gradient = `linear-gradient(${gradient.angle}deg, ${gradient.color_1} 0%, ${gradient.color_2} 100%);`;

  // TODO: add post views counter
</script>

<div class="post_card">
  {#if post_thumbnail_url}
    <a
      rel="prefetch"
      href="/blog/{post.slug.current}"
      class="thumnail_wrapper"
      style="background: {build_css_gradient};"
    >
      <img class="tumbnail_img" src="{post_thumbnail_url}" alt="{post.title}">

      {#if book_first_published}
        <time class="tag book_publish_date">{book_first_published}</time>
      {/if}

      {#if categories && categories.length}
        <div class="tag post_categoies">{categories.join(', ')}</div>
      {/if}

    </a>
  {/if}
  <div class="card_info">

    {#if authors && authors.length}
      <p class="card_authors">
        {authors.join(', ')}
      </p>
    {/if}

    <a class="card_title" rel="prefetch" href="/blog/{post.slug.current}">
      <h4>{post.title}</h4>
    </a>

  </div>
</div>

<style lang="sass">
  @keyframes show_card_info
    0%
      transform: translate(-50%, calc(-2 * var(--radius)))
      opacity: 0
      visibility: hidden
    40%
      transform: translate(-50%, calc(-1.5 * var(--radius)))
      opacity: .7
      visibility: visible
    70%
      transform: translate(-50%, calc(-.9 * var(--radius)))
      opacity: 1
      visibility: visible
    100%
      transform: translate(-50%, calc(-1 * var(--radius)))
      opacity: 1
      visibility: visible

  .post_card
    box-shadow: 0 .1rem .2rem .2rem var(--color-bg-primary-d)
    border-radius: calc( var(--radius) + .3rem )
    position: relative
    transition: all .2s ease-out
    box-shadow: 0 0 .1rem .1rem var(--color-bg-primary-o)
    &:hover
      .tag
        opacity: .92
        visibility: visible
      .card_info
        animation: show_card_info .3s linear forwards
    .thumnail_wrapper
      display: block
      border-radius: var(--radius)
      overflow: hidden
      box-shadow: 0 .2rem .3rem .1rem var(--color-bg-primary-o)
      position: relative
      z-index: 20
      padding-top: 100%
      background-color: var(--color-bg-primary-d)
    .tumbnail_img
      position: absolute
      z-index: 10
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      max-width: 85%
      max-height: 85%
      width: auto
      height: auto
      box-shadow: 0 0 .3rem .2rem var(--color-bg-primary-do)
    .tag
      background-color: var(--color-bg-primary-inverted)
      color: var(--color-text-secondary)
      user-select: none
      border-radius: var(--radius)
      padding: .1rem .7rem
      font-weight: 600
      transition: opacity .2s linear
      opacity: 0
      visibility: hidden
    .book_publish_date
      position: absolute
      z-index: 15
      bottom: 0
      left: 50%
      transform: translate(-50%, -.5rem)
    .post_categoies
      position: absolute
      z-index: 15
      left: 0
      top: 0
      transform: translate(1rem, 1rem)
    .card_info
      position: absolute
      z-index: 10
      width: 100%
      top: 100%
      left: 50%
      padding: calc( 1.5rem + var(--radius) ) 1.5rem 1.5rem
      border-radius: 0 0 var(--radius) var(--radius)
      background-color: var(--color-bg-primary-inverted)
      color: var(--color-text-secondary)
      transform: translate(-50%, calc(-2 * var(--radius)))
      opacity: 0
      visibility: hidden
    .card_authors,
    .card_title
      font-size: 1.2rem
      line-height: 1.2
      text-align: center
      text-transform: uppercase
    .card_authors
      font-family: var(--font-family-semiaccent)
      font-size: 1.1rem
      margin-bottom: .3rem
    .card_title
      h4
        font-weight: 500
        transition: color .2s ease-out
        color: var(--color-text-link)
      &:hover h4
        color: var(--color-text-link-hover)
    .card_short_description
      margin: 1rem 0 0
      font-weight: 600
</style>
