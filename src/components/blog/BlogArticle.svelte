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

<style lang="sass">
	// TODO: mobile version
	// at 1024px and less: side contents and footnotes become fixed: contents - to the left, footnotes - to the bottom
	.main_content
		padding-top: 1em
		display: grid
		grid-template-columns: 1fr $w-content 1fr
		grid-template-rows: auto
		--contents-padding: 2em
	.content
		width: 100% // fix bug - otherwise ignores box-sizing inside grid
		text-align: justify
		margin: 2em auto 0
		border-radius: $rad
		line-height: 1.5em
		padding-inline: 4em
		background-color: rgba($bg-1, 0.5)
		box-shadow: $shd-1

	@media (max-width: 1440px)
		.main_content
			--contents-padding: 1em
</style>
