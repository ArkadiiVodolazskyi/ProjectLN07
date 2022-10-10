<script>
	import {PortableText} from '@portabletext/svelte';
	import {urlFor} from '$src/service/sanityClient.js';

	export let portfolio;
  const {
    title,
		link,
		image,
		short_description
  } = portfolio;

	const post_thumbnail_url = image ? urlFor(image) : null;
</script>

<a class="card work" href={link.current}>
	{#if post_thumbnail_url}
		<img src={post_thumbnail_url} alt={title}>
	{/if}

	<h4>{title}</h4>

	<div class="short_description">
		<PortableText value={short_description} />
	</div>
</a>

<style lang="sass">
.card
	padding: .5em
	border-radius: calc( $rad / 3 )
	&:hover
		background-color: hsl(0, 0%, 42%)
</style>