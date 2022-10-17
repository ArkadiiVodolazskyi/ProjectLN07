<script>
	export let body_chaptered;

	const contents_list = [];
  body_chaptered = !body ? null : (
    body.map(item => {
      if (item.style === 'h4') {
        const text = (item.children.reduce((sum, child) => sum + child.text, '')).split('[')[0];
        const chapter_id = `ch-${slugify(text)}`;

        item.chapter_id = chapter_id;
        contents_list.push({
          text,
          chapter_id,
          node: null
        });
      }
      return item;
    })
  );

	$: show_contents = true;
</script>

<!-- TODO: fix flash while skipping 6-8+ chapters -->
<div
	class="contents"
	data-show={show_contents}
	bind:this={contents_block}
>
	{#if contents_list && contents_list.length}

		<div class="contents_wrapper">
			<button
				class="btn_contents"
				data-action="toggle_contents"
				on:click={show_contents = !show_contents}
				title={`${show_contents ? 'Скрыть' : 'Показать'} содержание`}></button>

			<ul class="contents_list">
				{#each contents_list as contents_item, index}
					<li class={`contents_item ${index === active_chapter_index ? 'active' : ''}`} bind:this={contents_item.node}>
						<a href={`#${contents_item.chapter_id}`}>
							{contents_item.text}
						</a>
					</li>
				{/each}
			</ul>

		</div>
	{/if}
</div>

<style lang="sass">
.contents
	margin: var(--contents-padding) auto 0
	padding-left: var(--contents-padding)
	position: relative
	&[data-show='false']
		.btn_contents
			max-width: 2em
			&::after
				transform: rotate(1turn)
		.contents_list
			opacity: 0
			visibility: hidden
.contents_wrapper
	position: sticky
	top: 1em
	display: flex
	flex-direction: column
.btn_contents
	padding: 0
	display: flex
	width: calc(100% - var(--contents-padding))
	max-width: 100%
	align-items: center
	justify-content: center
	border-radius: $rad * 0.4
	border-color: rgba($tx-1, 0.25)
	color: rgba($tx-1, 0.25)
	&::after
		content: '\279C'
		font-size: 1.3em
		transition: transform $tr-2
		transform: rotate(0.5turn)
	&:hover
		color: $accent-1
		border-color: $accent-1
.contents_list
	display: flex
	flex-direction: column
	margin: calc(var(--contents-padding) * 0.3) 0
	padding: 0 var(--contents-padding) 0 0
	font-size: .95em
	max-height: calc(100vh - 4.5em)
	overflow-y: auto
	overflow-x: hidden
	list-style-position: outside
	transition: opacity $tr-2
	opacity: 1
	visibility: visible
.contents_item
	border-radius: $rad * 0.4
	line-height: 1.2em
	transition: all $tr-2
	opacity: .6
	position: relative
	z-index: 1
	&::after
		content: ''
		position: absolute
		z-index: -1
		left: 0
		top: 0
		right: 0
		bottom: 0
		width: 100%
		height: 100%
		border-radius: inherit
		transition: opacity $tr-1
		opacity: 0
		background: linear-gradient(to right, $gr-2)
	&:not(:first-child)
		margin-top: .3em
	&:hover, &.active
		opacity: 1
		&::after
			opacity: 1
	a
		display: flex
		align-items: center
		justify-content: space-between
		position: relative
		padding: .4em
</style>