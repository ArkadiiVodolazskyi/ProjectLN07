<script>
  import {onMount} from 'svelte';
	import Icon from '$components/general/Icon.svelte';
  import SanityImage from '$components/general/SanityImage.svelte';
	export let title, image, authors, book_first_published;
</script>

<div class="intro">
	<div class="wrapper">
		<a class="back_to_posts" href="/blog">
			<Icon type={'arrow_left'} />
			<span>Все посты</span>
		</a>

		<div class="main_info">
			<h2 class="title">
				{title}
			</h2>

			{#if image}
				<div class="image_wrapper">
					<SanityImage image={image} maxWidth={600} className={'post_thumb'} />
				</div>
			{/if}

			{#if authors.length}
				<ul class="authors">
					{@html authors.map(author => `<li>${author.name}</li>`)}
				</ul>
			{/if}
		</div>

		<time class="book_first_published">
			{book_first_published}
		</time>
	</div>
</div>

<style lang="sass">
	.intro
    position: relative
    z-index: 10
    box-shadow: $shd-3
    text-align: center
    &::before
      content: ''
      position: absolute
      z-index: -1
      left: 0
      top: 0
      right: 0
      bottom: 0
      opacity: .5
      background: linear-gradient(var(--gr-angle), var(--gr-color-1) 0%, var(--gr-color-2) 100%)
    .wrapper
      font-size: 1.7em
      font-family: $ff-semiaccent
      font-weight: 500
      padding: 1em 0
      .main_info
        display: flex
        align-items: center
        justify-content: center
      .back_to_posts
        font-family: $ff-accent
        font-weight: 400
        font-size: 1.1rem
        display: flex
        align-items: center
        text-transform: uppercase
        background-color: hsl(0, 0%, 10%, .6)
        width: max-content
        max-width: 25%
        padding: .4em .5em
        border-radius: calc( $rad * .4 )
        box-shadow: $shd-4
        transition: background-color .2s ease
        :global(svg)
          margin-right: .5em
          width: .8em
          height: .8em
          fill: none
          stroke-width: 2em
          stroke: $tx-1
        &:hover
          background-color: $accent-1
      .title
        flex-basis: 25%
        font-size: inherit
        font-family: inherit
      .image_wrapper
        flex-basis: 50%
        display: flex
        align-items: center
        justify-content: center
        padding: 0 2em
        height: 15em
        :global(.post_thumb)
          display: block
          width: auto
          height: auto
          max-width: 100%
          max-height: 100%
          box-shadow: $shd-5
    .authors
      flex-basis: 25%
      font-size: inherit
    .book_first_published
      display: block
      padding-top: 1em
      font-size: .85em
      font-weight: 400
</style>