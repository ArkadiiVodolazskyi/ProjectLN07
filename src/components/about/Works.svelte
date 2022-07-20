<script>
	export let portfolios = [];
	import Work from "./Work.svelte";
</script>

<section class="portfolio">
	<div class="wrapper">
		{#each portfolios as portfolio}
			<Work {portfolio} />
		{/each}
	</div>
</section>