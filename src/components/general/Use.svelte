<script>
	export let type = '';
	const resolved_url = new URL('./icons.svg', import.meta.url).href;
</script>

<use xlink:href={`${resolved_url}#${type}`}></use>