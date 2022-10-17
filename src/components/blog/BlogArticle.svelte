<script>
  // import {onMount} from 'svelte';
  // import {PortableText} from '@portabletext/svelte';
  // import Link from '$components/general/Link.svelte';
  // import ImageBlock from '$components/general/ImageBlock.svelte';
	// import Icon from '$components/general/Icon.svelte';

  // import Chapter from './article/Chapter.svelte';
	// import Footnote from './article/Footnote.svelte';
	import Contents from './article/Contents.svelte'

  export let body, printed_version, authors, title;
	let active_chapter_index = null;
	const handle_click_chapter = event => active_chapter_index = event.detail.index;

	// const scroll_padding = -300;
	// let footnote, close_footnote;
	// const filename = `Рецензия - ${title} - ${authors.reduce((sum, author) => sum += author.name, '')}`;

	// const update_active_chapter = chapters_list => {
	// 	const scroll = window.pageYOffset;
	// 	active_chapter_index = null;
	// 	chapters_list.forEach(chapter => chapter.node.classList.remove('active'));

	// 	for (let i = chapters_list.length - 1; i >= 0; i--) {
	// 		if (scroll >= chapters_list[i].offsetTop - scroll_padding) {
	// 			active_chapter_index = i;
	// 			chapters_list[i].node.classList.add('active');
	// 			break;
	// 		}
	// 	}
	// }

	// const free_footnotes = () => {
	// 	footnote?.classList.remove('active');
	// 	document.querySelector('.active[data-action="show_footnote"]')?.classList.remove('active');
	// }

  // onMount(() => {

	// 	if (!body_chaptered) { return; }

	// 	// Chapters
	// 	const chapters_list = [...document.querySelectorAll('.content .chapter_title')].map(node => {
	// 		return { node: node, offsetTop: node.offsetTop }
	// 	});
	// 	let scroll_check = null;

	// 	// Watch scroll: chapters + footnotes
  //   window.addEventListener('scroll', e => {
	// 		clearInterval(scroll_check);
	// 		scroll_check = setInterval(() => {
	// 			clearInterval(scroll_check);
	// 			update_active_chapter(chapters_list);
	// 			free_footnotes();
	// 		}, 50);
	// 	});

	// 	// Footnotes
	// 	(() => {
	// 		document.body.addEventListener('click', e => {
	// 			if (
	// 				e.target.closest('.footnote') !== footnote &&
	// 				e.target.closest('[data-action="close_footnote"]') !== close_footnote
	// 			) { return; }
	// 			footnote?.classList.remove('active');
	// 			document.querySelector('.active[data-action="show_footnote"]')?.classList.remove('active');
	// 		});

	// 		footnote.addEventListener('click', e => footnote.classList.remove('active'));
	// 		close_footnote.addEventListener('click', e => footnote.classList.remove('active'));
	// 	})();

  // })
</script>

<div class="main_content">

	<Contents
		{body}
		on:click_chapter={handle_click_chapter}
	/>

  <!-- <div class="portable_text content" data-watch="scroll">
		{#if printed_version}
			<div class="printed_wrapper">
				<a
					class="download_printed"
					href={`${printed_version}?dl=<${filename}.pdf>`}
					data-action="download_printed_version"
				>
					<span>Скачать PDF версию</span>
					<Icon type={'download'} />
				</a>
			</div>
		{/if}

    {#if body_chaptered}
      <PortableText
        value={body_chaptered}
        components={{
          types: {
            image: ImageBlock
          },
          marks: {
            link: Link,
						code: Footnote
          },
          block: {
            h4: Chapter
          }
        }}
      />
    {/if}
  </div>

	<div class="footnotes">
		<div class="footnote" bind:this={footnote}>
			<button class="close" data-action="close_footnote" bind:this={close_footnote}>
				<Icon type={'cross'} />
			</button>
			<div class="text"></div>
		</div>
	</div> -->

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
	.printed_wrapper
		text-align: center
		margin: 0 0 2em
		font-family: $ff-semiaccent
		font-weight: 300
	.download_printed
		display: flex
		align-items: center
		justify-content: center
		:global(svg)
			margin-left: .4em
			width: 1em
			height: 1em
			stroke: $tx-2
	.footnotes
		font-size: .9em
		margin-top: var(--contents-padding)
		line-height: 1.3em
		position: relative
	.footnote
		position: absolute
		z-index: 5
		width: calc( 100% - calc(var(--contents-padding) * 2) )
		left: 50%
		border-radius: calc($rad * .2)
		padding: 1em 1em 1em 1.2em
		cursor: pointer
		background-color: rgba($bg-1, 0.5)
		box-shadow: $shd-4
		transition: opacity $tr-2, background-color $tr-2, transform $tr-2
		transform: translate(-50%, -15%) scale(.95)
		&:hover
			border-color: darken($accent-1, 10%)
			background-color: rgba($bg-1, 0.25)
		.close
			margin: 0 0 .5em .5em
			float: right
			display: flex
			align-items: center
			justify-content: center
			width: 1.5em
			height: 1.5em
			border-radius: 50%
			border: 1px solid rgba($tx-1, 0.5)
			transition: border-color $tr-2, transform $tr-2
			:global(svg)
				width: 90%
				height: 90%
				fill: rgba($tx-1, 0.5)
				transition: fill $tr-2
			&:hover
				border-color: $accent-1
				transform: scale(1.1)
				:global(svg)
					fill: lighten($accent-1, 10%)

	@media (max-width: 1440px)
		.main_content
			--contents-padding: 1em
</style>
