<script>
	export let tools;
	export let tool_categories;

	const tools_categorized = {};
	tool_categories.forEach(category => {
		const tools_of_category = tools.filter(tool => tool.subcategory[0]._ref === category._id);
		tools_categorized[category.title] = [...tools_of_category];
	});
	console.log(tools, tool_categories, tools_categorized);

	import Tools from "$components/about/Tools.svelte";
</script>

<svelte:head>
  <title>Инструменты</title>
</svelte:head>

<Tools {tools} />