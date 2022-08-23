<script>
	export let tools_categories = [];
	import ToolsBlock from "./ToolsBlock.svelte";
</script>

<div class="tools_blocks">
	{#each tools_categories as tools_block}
		<ToolsBlock {tools_block} />
	{/each}
</div>