<script>
  import {onMount} from 'svelte';
  import {PortableText} from '@portabletext/svelte';
  import Link from '$components/general/Link.svelte';
  import ImageBlock from '$components/general/ImageBlock.svelte';
  import Chapter from '$components/general/Chapter.svelte';
	import Footnote from '$components/general/Footnote.svelte';

  export let contents_list;
  export let body_chaptered;
	$: active_chapter_index = null;
	const scroll_padding = -200;
	let footnote;
	let close_footnote;

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

				for (let i = 0; i < chapters_list.length; i++) {
					if (scroll > chapters_list[0].offsetTop && i === chapters_list.length - 1) {
						active_chapter_index = chapters_list.length - 1;
						break;
					}
					if (scroll >= chapters_list[i].offsetTop - scroll_padding && scroll <= chapters_list[i + 1].offsetTop - scroll_padding) {
						active_chapter_index = i;
						chapters_list[active_chapter_index].node.classList.add('active');
						break;
					}
				}
			}, 100);
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
		display: grid
		grid-template-columns: 1fr var(--block-width-content) 1fr
		grid-template-rows: auto
	.contents
		margin: 2em auto 0
		line-height: 1.5rem
		padding-inline: 2rem
		position: relative
	.contents_list
		display: flex
		flex-direction: column
		padding-top: 3rem
		position: sticky
		top: 0
	.contents_item
		transition: all .25s ease
		opacity: .4
		&:hover, &.active
			opacity: 1
		a
			display: flex
			align-items: center
			justify-content: space-between
			padding: .3rem 0
			position: relative
	.content
		text-align: justify
		margin: 2em auto 0
		border-radius: var(--radius)
		line-height: 1.5rem
		padding-inline: 3rem
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
		background-color: var(--color-bg-primary-do)
		box-shadow: 0 0 .3rem .2rem var(--color-bg-primary-d)
		transition: all .25s ease
		transform: translate(-50%, -15%) scale(.95)
		&:hover
			border-color: var(--color-accent-primary-d)
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
			background-color: var(--color-bg-primary)
			border: 2px solid var(--trs)
			svg
				width: 100%
				height: 100%
				fill: var(--color-text-primary-o)
			&:hover
				border-color: var(--color-accent-primary)
				svg
					fill: var(--color-accent-primary)
					transform: rotate(90deg) scale(1.3)
</style>
