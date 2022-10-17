<script>
	export let portfolios;
	import Works from "$components/about/Works.svelte";
</script>

<svelte:head>
  <title>Портфолио</title>
</svelte:head>

<section class="portfolio">
	<div class="wrapper">
		<Works {portfolios} />
	</div>
</section>