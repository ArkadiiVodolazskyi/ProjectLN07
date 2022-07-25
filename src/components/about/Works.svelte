<script>
	export let portfolios = [];
	import Work from "./Work.svelte";
</script>

<section class="portfolio">
	<div class="wrapper">
		<div class="cards">
			{#each portfolios as portfolio}
				<Work {portfolio} />
			{/each}
		</div>
	</div>
</section>

<style lang="sass">
.cards
	display: grid
	grid-template-columns: repeat(5, 1fr)
</style>