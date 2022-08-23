<script>
	export let tools_categories;
	import Tools from "$components/about/Tools.svelte";
</script>

<svelte:head>
  <title>Инструменты</title>
</svelte:head>

<section class="tools">
	<div class="wrapper">
		<Tools {tools_categories} />
	</div>
</section>