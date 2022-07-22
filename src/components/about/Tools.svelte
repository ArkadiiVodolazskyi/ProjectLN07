<script>
	export let tools = [];
	import Tool from "./Tool.svelte";
</script>

<section class="tools">
	<div class="wrapper">
		{#each tools as tool}
			<Tool {tool} />
		{/each}
	</div>
</section>