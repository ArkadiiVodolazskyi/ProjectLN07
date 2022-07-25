<script>
	export let tools;
	export let tool_categories;

	const tools_categorized = tool_categories.map(category => {
		return {
			category_title: category.title,
			tools_of_category: tools.filter(tool => tool.subcategory[0]._ref === category._id)
		}
	});

	import Tools from "$components/about/Tools.svelte";
</script>

<svelte:head>
  <title>Инструменты</title>
</svelte:head>

<Tools {tools_categorized} />