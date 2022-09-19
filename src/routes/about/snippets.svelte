<script>
	import Snippets from "$components/about/Snippets.svelte";
	export let snippets;
</script>

<svelte:head>
  <title>Сниппеты</title>
</svelte:head>

<section class="snippets">
	<div class="wrapper">
		<h2>Сниппеты - кастомные блоки кода или техники написания кода</h2>
		<div class="wrapper">
			<Snippets {snippets} />
		</div>
	</div>
</section>

<style lang="sass">
	.snippets
	h2
		text-align: center
		font-size: 1.2rem
</style>