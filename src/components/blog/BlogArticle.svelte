<script>
  import {onMount} from 'svelte';
	import Article from '$components/blog/article/Article.svelte'
	import Contents from '$components/blog/article/Contents.svelte'
	import PrintedVersion from '$components/blog/article/PrintedVersion.svelte'
	import Footnotes from '$components/blog/article/Footnotes.svelte'

  export let body, printed_version, authors, title;
	let active_chapter_index = null;
	const handle_click_chapter = event => active_chapter_index = event.detail.index;

	let scroll_check = null;
	const scroll_padding = -300;

	const update_active_chapter = (contents_list, chapters_list) => {
		const scroll = window.pageYOffset;
		active_chapter_index = null;

		contents_list.forEach(chapter => chapter.classList.remove('active'));
		chapters_list.forEach(chapter => chapter.node.classList.remove('active'));

		for (let i = chapters_list.length - 1; i >= 0; i--) {
			if (scroll >= chapters_list[i].offsetTop - scroll_padding) {
				active_chapter_index = i;
				contents_list[i].classList.add('active');
				chapters_list[i].node.classList.add('active');
				break;
			}
		}
	}

  onMount(() => {
		// TODO: add narrow progress track on the bottom of the page

		if (!body) { return; }

		const contents_list = document.querySelectorAll('.contents .contents_item');
		const chapters_list = [...document.querySelectorAll('.content .chapter_title')].map(node => {
			return { node: node, offsetTop: node.offsetTop }
		});

    window.addEventListener('scroll', e => {
			clearInterval(scroll_check);
			scroll_check = setInterval(() => {
				clearInterval(scroll_check);
				update_active_chapter(contents_list, chapters_list);
			}, 50);
		});

  })
</script>

<div class="main_content">

	<Contents {body} on:click_chapter={handle_click_chapter} />

  <div class="portable_text content" data-watch="scroll">
		{#if printed_version}
			{@const filename = `Рецензия - ${title} - ${authors.reduce((sum, author) => sum += author.name, '')}`}
			<PrintedVersion {printed_version} {filename} />
		{/if}

    {#if body}
			<Article {body} />
    {/if}
  </div>

	<Footnotes />

</div>

<style lang="sass" global>
	// TODO: mobile version
	// at 1024px and less: side contents and footnotes become fixed: contents - to the left, footnotes - to the bottom

	.main_content
		padding-top: 1em
		display: grid
		grid-template-columns: 1fr $w-content 1fr
		grid-template-rows: auto
		--contents-padding: 2em

	.portable_text
		width: 100% // fix bug - otherwise ignores box-sizing inside grid
		text-align: justify
		margin: 2em auto 0
		border-radius: $rad
		line-height: 1.5em
		padding-inline: calc(var(--contents-padding) * 2)
		background-color: rgba($bg-1, 0.5)
		box-shadow: $shd-1
		padding-block: 3em
		position: relative
		text-indent: 1.5em
		> :where(:not(:first-child))
			margin-top: 1.3em
		.image_figure
			position: relative
			z-index: 150
			border-radius: $rad
			.image_wrapper
				width: max-content
				max-width: 100%
				margin: 0 auto
				position: relative
				transition: box-shadow $tr-2, transform .2s ease-in
				border-radius: inherit
				img
					position: relative
					z-index: 2
		a
			color: $tx-2
			transition: all $tr-2
			text-decoration: underline
			text-underline-offset: .3em
			text-decoration-thickness: .05em
			text-decoration-color: $tsp
			&:hover
				text-decoration-color: inherit
				text-underline-offset: .25em
		h4, h5
			text-indent: 0
			font-size: 1.5em
			font-weight: bold
			position: relative
			padding: .2em 0
			--lh: 1.3em
			line-height: var(--lh)
			&::before
				content: ''
				position: absolute
				z-index: 5
				left: 0
				top: calc(var(--lh) * 0.6)
				width: 1.25em
				height: .2em
				border-radius: $rad * 2
				background: linear-gradient(to right, $gr-2)
				transition: all .3s ease
				opacity: 0
				transform: translate( calc( -100% - 2em ) , 0) scale(0)
			&.active::before
				opacity: .75
				transform: translate( -2em, 0) scale(1)
		.chapter_title
			scroll-margin-top: 2em
		blockquote
			width: 95%
			margin-inline: auto
			padding: 1em 1.4em
			border-radius: calc( $rad * .4 )
			line-height: 1.4em
			box-shadow: inset 0px 0px 2px 2px hsl(0, 0%, 10%, .35)
			position: relative
			background-color: darken($bg-1, 6%)
		ul, ol
			padding-left: 1em
			line-height: 1.4em
			text-indent: 0.2em
			li
				display: list-item
				list-style-position: outside
				&:not(:first-child)
					margin-top: .75em
				> ul, ol
					padding: .75em 0 0 1.5em
					list-style-type: disc
		ul
			list-style-type: square

	@media (max-width: 1440px)
		.main_content
			--contents-padding: 1em
</style>
