<script>
	export let tools_categorized = [];
	import ToolsBlock from "./ToolsBlock.svelte";
</script>

<div class="tools_blocks">
	{#each tools_categorized as tools_block}
		<ToolsBlock {tools_block} />
	{/each}
</div>

<section class="tools">
	<div class="wrapper">

	</div>
</section>

<style lang="sass">
.tools_blocks

</style>