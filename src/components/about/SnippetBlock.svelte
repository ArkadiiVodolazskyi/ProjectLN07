<script>
	import {urlFor} from '$src/service/sanityClient.js';
	export let snippet;
  const {
    title,
		slug,
    description,
		tags
  } = snippet;
	const thumbnail_url = tags[0].image ? urlFor(tags[0].image) : null;
</script>

<a
	class="card snippet"
	rel="prefetch"
	href="/snippets/{snippet.slug.current}"
	style="--color: {tags[0].color};"
>
	{#if thumbnail_url}
		<div class="image_wrapper" style="background-image: url('{thumbnail_url}');"></div>
	{/if}
	<h6 class="card_title">{title}</h6>
</a>

<style lang="sass">
	.image_wrapper
		height: 7rem
		background-size: contain
		background-position: center
</style>