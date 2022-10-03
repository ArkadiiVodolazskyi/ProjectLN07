<script>
  import {onMount} from 'svelte';
  import {PortableText} from '@portabletext/svelte';
  import Link from '$components/general/Link.svelte';
  import ImageBlock from '$components/general/ImageBlock.svelte';
  import Chapter from '$components/general/Chapter.svelte';
	import Footnote from '$components/general/Footnote.svelte';
	import Icon from '$components/general/Icon.svelte';

  export let contents_list,
						body_chaptered,
						printed_version,
						authors,
						title;
	$: active_chapter_index = null;
	const scroll_padding = -300;
	let footnote, close_footnote;
	const filename = `Рецензия - ${title} - ${authors.reduce((sum, author) => sum += author.name, '')}`;

	const update_active_chapter = chapters_list => {
		const scroll = window.pageYOffset;
		active_chapter_index = null;
		chapters_list.forEach(chapter => chapter.node.classList.remove('active'));

		for (let i = chapters_list.length - 1; i >= 0; i--) {
			if (scroll >= chapters_list[i].offsetTop - scroll_padding) {
				active_chapter_index = i;
				chapters_list[i].node.classList.add('active');
				break;
			}
		}
	}

	const free_footnotes = () => {
		footnote.classList.remove('active');
		document.querySelector('.active[data-action="show_footnote"]')?.classList.remove('active');
	}

  onMount(() => {

		// Chapters
		const chapters_list = [...document.querySelectorAll('.content .chapter_title')].map(node => {
			return { node: node, offsetTop: node.offsetTop }
		});
		let scroll_check = null;

		// Watch scroll: chapters + footnotes
    window.addEventListener('scroll', e => {
			clearInterval(scroll_check);
			scroll_check = setInterval(() => {
				clearInterval(scroll_check);
				update_active_chapter(chapters_list);
				free_footnotes();
			}, 50);
		});

		// Footnotes
		(() => {
			document.body.addEventListener('click', e => {
				if (
					e.target.closest('.footnote') !== footnote &&
					e.target.closest('[data-action="close_footnote"]') !== close_footnote
				) { return; }
				footnote?.classList.remove('active');
				document?.querySelector('.active[data-action="show_footnote"]').classList.remove('active');
			});

			footnote.addEventListener('click', e => footnote.classList.remove('active'));
			close_footnote.addEventListener('click', e => footnote.classList.remove('active'));
		})();

  })
</script>

<div class="main_content">

	<!-- TODO: fix flash while skipping 6-8+ chapters -->
  <div class="contents">
    {#if contents_list.length}
      <ul class="contents_list">
        {#each contents_list as contents_item, index}
          <li class={`contents_item ${index === active_chapter_index ? 'active' : ''}`} bind:this={contents_item.node}>
            <a href={`#${contents_item.chapter_id}`}>
              {contents_item.text}
            </a>
          </li>
        {/each}
      </ul>
    {/if}
  </div>

  <div class="portable_text content" data-watch="scroll">
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
	</div>

</div>

<style lang="sass">
	.main_content
		padding-top: 1rem
		display: grid
		grid-template-columns: 1fr var(--block-width-content) 1fr
		grid-template-rows: auto
	.contents
		margin: 2em auto 0
		padding-left: 2em
		position: relative
	.contents_list
		display: flex
		flex-direction: column
		padding: 1em 2em 0 0
		position: sticky
		top: 0
		font-size: .95rem
		max-height: 100vh
		overflow-y: auto
		overflow-x: hidden
		list-style-position: outside
	.contents_item
		border-radius: calc(var(--radius) / 3)
		line-height: 1.2em
		transition: all var(--tr-2)
		opacity: .6
		&:not(:first-child)
			margin-top: .3em
		&:hover, &.active
			opacity: 1
			background-color: var(--accent-1)
		a
			display: flex
			align-items: center
			justify-content: space-between
			position: relative
			padding: .4em
	.content
		text-align: justify
		margin: 2em auto 0
		border-radius: var(--radius)
		line-height: 1.5rem
		padding-inline: 4rem
		background-color: var(--bg-1-o50)
		box-shadow: var(--shd-1)
	.printed_wrapper
		text-align: center
		margin: 0 0 2rem
		font-family: var(--font-family-semiaccent)
		font-weight: 300
	.download_printed
		display: flex
		align-items: center
		justify-content: center
		:global(svg)
			margin-left: .4rem
			width: 1rem
			height: 1rem
			stroke: var(--tx-2)
	.footnotes
		width: 100%
		font-size: .9rem
		margin-top: 2em
		line-height: 1.3rem
		position: relative
	.footnote
		position: absolute
		z-index: 5
		width: calc( 100% - 4rem )
		left: 50%
		border-radius: calc(var(--radius) * .2)
		padding: 1em 1em 1em 1.2em
		cursor: pointer
		background-color: var(--bg-1-o50)
		box-shadow: var(--shd-4)
		transition: opacity var(--tr-2), background-color var(--tr-2), transform var(--tr-2)
		transform: translate(-50%, -15%) scale(.95)
		&:hover
			border-color: var(--accent-1-d10)
			background-color: var(--bg-1-o25)
		.close
			margin: 0 0 .5em .5em
			float: right
			display: flex
			align-items: center
			justify-content: center
			width: 1.5rem
			height: 1.5rem
			border-radius: 50%
			border: 1px solid hsl(var(--rtx-1) / .5)
			transition: border-color var(--tr-2), transform var(--tr-2)
			:global(svg)
				width: 90%
				height: 90%
				fill: hsl(var(--rtx-1) / .5)
				transition: fill var(--tr-2)
			&:hover
				border-color: var(--accent-1)
				transform: scale(1.1)
				:global(svg)
					fill: var(--accent-1-l10)
</style>
