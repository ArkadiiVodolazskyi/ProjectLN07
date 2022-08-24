<script>
  import {onMount} from 'svelte'
  import {PortableText} from '@portabletext/svelte'
  import Link from '$components/general/Link.svelte'
  import ImageBlock from '$components/general/ImageBlock.svelte'
  import CustomH4 from '$components/general/CustomH4.svelte'

  export let contents_list;
  export let body_chaptered;
	let content = null;

  onMount(() => {
		const chapters_list = [...document.querySelectorAll('.content .chapter_title')].map(node => {
			return {
				node: node,
				offsetTop: node.offsetTop
			}
		});
		console.log(contents_list, chapters_list);

    window.addEventListener('scroll', e => {
			const scroll = window.pageYOffset;
			chapters_list.forEach(chapter => chapter.node.classList.remove('active'));
			// TODO: finish onscroll toggle active anchor
		});
  })
</script>

<div class="main_content">
  <div class="contents">
    {#if contents_list.length}
      <ul class="contents_list">
        {#each contents_list as contents_item}
          <li class="contents_item" bind:this={contents_item.node}>
            <a href={`#${contents_item.chapter_id}`}>
              {contents_item.text}
            </a>
          </li>
        {/each}
      </ul>
    {/if}
  </div>

  <div class="portable_text content" data-watch="scroll" bind:this={content}>
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
	.contents_item a
		display: flex
		align-items: center
		justify-content: space-between
		padding: .3rem 0
		position: relative
		transition: all .25s ease
		opacity: .5
		&:hover, &.active
			opacity: 1
</style>
