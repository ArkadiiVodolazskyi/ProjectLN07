<script>
	// TODO: get two arrays: taxonomies and tools
	// TODO: for each taxonomy form an array -> pass as component prop (component 'ToolsBlock')
	export let tools;

	import Tools from "$components/about/Tools.svelte";
</script>

<svelte:head>
  <title>Инструменты</title>
</svelte:head>

<Tools {tools} />