<script>
	import SnippetBlock from "./SnippetBlock.svelte";
	export let snippets = [];
</script>

<div class="snippets_blocks">
	{#each snippets as snippet (snippet.slug.current)}
		<SnippetBlock {snippet} />
	{/each}
</div>

<style lang="sass">
	.snippets_blocks
		display: grid
		grid-template-columns: repeat(4, 1fr)
</style>