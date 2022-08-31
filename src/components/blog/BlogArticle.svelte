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
	const scroll_padding = -400;

  onMount(() => {
		const chapters_list = [...document.querySelectorAll('.content .chapter_title')].map(node => {
			return {
				node: node,
				offsetTop: node.offsetTop
			}
		});

		// TODO: reduce number of scroll triggers with intervals

    window.addEventListener('scroll', e => {
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
		<div class="footnote">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iste, dignissimos, omnis, mollitia voluptatem ipsa odit consequuntur quibusdam doloribus quod assumenda officia perferendis vel vero blanditiis sit voluptatibus earum officiis culpa voluptate sed soluta dolore. Sequi, suscipit repellendus pariatur quos optio natus dolore dignissimos totam! Molestias doloremque deserunt recusandae unde!
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
	// TODO: add line, animate while active in Footnote.svelte
	.footnotes
		width: 100%
		font-size: .95rem
		margin-top: 2em
		line-height: 1.25rem
		position: relative
	.footnote
		position: absolute
		width: calc( 100% - 4rem )
		left: 50%
		transform: translate(-50%, -25%)
		border: 1px solid var(--color-accent-primary)
		border-radius: calc(var(--radius) * .2)
		padding: .5rem
</style>
