<script>
	import Tool from "./Tool.svelte";
	export let tools_block = [];
	const {
		title,
		tools
	} = tools_block;
</script>

<div class="tools_block">
	<h4 class="category_title">{title}</h4>
	<div class="cards">
		{#each tools as tool}
			<Tool {tool} />
		{/each}
	</div>
</div>

<style lang="sass">
.tools_block
	padding: 1.5rem 2rem
	background-color: var(--color-bg-primary-do)
	box-shadow: inset 0px 0px 8px 5px var(--color-bg-primary-d)
	border-radius: calc( var(--radius) / 2 )
	&:not(:first-of-type)
		margin-top: 2rem
.category_title
	text-transform: uppercase
	font-size: 1.3em
.cards
	margin-top: 1rem
	display: flex
	flex-wrap: wrap
	gap: 1rem
</style>