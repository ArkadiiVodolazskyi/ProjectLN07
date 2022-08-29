<script>
  import {onMount} from 'svelte'
  import {PortableText} from '@portabletext/svelte'
  import Link from '$components/general/Link.svelte'
  import ImageBlock from '$components/general/ImageBlock.svelte'
  import CustomH4 from '$components/general/CustomH4.svelte'

  export let contents_list;
  export let body_chaptered;
	$: active_chapter_index = null;
	const scroll_padding = 250;

  onMount(() => {
		const chapters_list = [...document.querySelectorAll('.content .chapter_title')].map(node => {
			return {
				node: node,
				offsetTop: node.offsetTop
			}
		});

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
            link: Link
          },
          block: {
            h4: CustomH4
          }
        }}
      />
    {/if}
  </div>
</div>

<style lang="sass">
	.main_content
		display: grid
		grid-template-columns: 1fr var(--block-width-content) 1fr
		grid-template-rows: auto
	.contents,
	.portable_text
		margin: 2em auto 0
		border-radius: var(--radius)
		line-height: 1.5rem
		padding-inline: 2rem
	.contents
		position: relative
		font-size: 1.1rem
	.contents_list
		display: flex
		flex-direction: column
		padding-top: 3rem
		position: sticky
		top: 0
	.contents_item
		transition: all .25s ease
		opacity: .5
		&:hover, &.active
			opacity: 1
		a
			display: flex
			align-items: center
			justify-content: space-between
			padding: .3rem 0
			position: relative
</style>
