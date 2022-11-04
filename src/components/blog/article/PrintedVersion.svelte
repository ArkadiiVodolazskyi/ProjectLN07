<script>
	import Icon from "$components/general/Icon.svelte";
	export let printed_version, filename;
</script>

<div class="printed_wrapper">
	<a
		class="download_printed"
		href={`${printed_version}?dl=<${filename}.pdf>`}
		data-action="download_printed_version"
	>
		<span>Скачать PDF версию</span>
		<Icon type={'download'} />
	</a>
</div>

<style lang="sass">
.printed_wrapper
	text-align: center
	margin: 0 0 2em
	font-family: $ff-semiaccent
	font-weight: 300
.download_printed
	display: flex
	align-items: center
	justify-content: center
	:global(svg)
		margin-left: .4em
		width: 1em
		height: 1em
		stroke: $tx-2
</style>