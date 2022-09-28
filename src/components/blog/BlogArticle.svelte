<script>
  import {onMount} from 'svelte';
  import {PortableText} from '@portabletext/svelte';
  import Link from '$components/general/Link.svelte';
  import ImageBlock from '$components/general/ImageBlock.svelte';
  import Chapter from '$components/general/Chapter.svelte';
	import Footnote from '$components/general/Footnote.svelte';

  export let contents_list,
						body_chaptered,
						printed_version,
						authors,
						title;
	$: active_chapter_index = null;
	let footnote, close_footnote;
	const scroll_padding = -300;
	const filename = `Рецензия - ${title} - ${authors.reduce((sum, author) => sum += author.name, '')}`;

  onMount(() => {
		const chapters_list = [...document.querySelectorAll('.content .chapter_title')].map(node => {
			return {
				node: node,
				offsetTop: node.offsetTop
			}
		});

		footnote.addEventListener('click', e => e.target.closest('.footnote').classList.remove('active'));
		close_footnote.addEventListener('click', e => e.target.closest('.footnote').classList.remove('active'));

		let scroll_check = null;
    window.addEventListener('scroll', e => {
			clearInterval(scroll_check);
			scroll_check = setInterval(() => {
				clearInterval(scroll_check);
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
			}, 50);
		});
  })
</script>

<div class="main_content">
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
					<svg><use xlink:href="../src/img/icons.svg#download"></use></svg>
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
			<div class="text"></div>
			<button class="close" data-action="close_footnote" bind:this={close_footnote}>
				<svg><use xlink:href="../src/img/icons.svg#cross"></use></svg>
			</button>
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
		svg
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
		padding: .8rem
		cursor: pointer
		background-color: var(--bg-1-o50)
		box-shadow: var(--shd-4)
		transition: opacity var(--tr-2)
		transform: translate(-50%, -15%) scale(.95)
		&:hover
			border-color: var(--accent-1-d10)
		.close
			position: absolute
			z-index: 6
			top: 0
			right: 0
			width: 1.6rem
			height: 1.6rem
			transform: translate(50%, -50%)
			display: inline-flex
			align-items: center
			justify-content: center
			border-radius: 50%
			background-color: var(--bg-1)
			border: 2px solid var(--trs)
			transform-origin: center
			svg
				width: 100%
				height: 100%
				fill: var(--tx-1-o50)
			&:hover
				border-color: var(--accent-1)
				transform: translate(50%, -50%) scale(1.2)
				svg
					fill: var(--accent-1-l10)
</style>
