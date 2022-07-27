<script>
	export let portfolios = [];
	import Work from "./Work.svelte";
</script>

<div class="cards">
	{#each portfolios as portfolio}
		<Work {portfolio} />
	{/each}
</div>

<style lang="sass">
.cards
	display: grid
	grid-template-columns: repeat(5, 1fr)
</style>