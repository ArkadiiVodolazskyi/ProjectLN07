<script>
	import {urlFor} from '$src/service/sanityClient.js';

	export let tool;
  const {
    description,
    image,
    link,
    title
  } = tool;

	const post_thumbnail_url = image ? urlFor(image) : null;
</script>

<a class="card tool" href={link.current} title={description}>

	{#if post_thumbnail_url}
		<img class="card_image" src={post_thumbnail_url} alt={title}>
	{/if}

	<h6 class="card_title">{title}</h6>
</a>

<style lang="sass">
.card
	text-align: center
	padding: .5rem
	border-radius: calc( $rad / 3 )
	&:hover
		background-color: hsl(0, 0%, 42%)
	.card_image
		height: 3rem
		width: auto
	.card_title
		margin-top: .5rem
		font-size: 1.1rem
</style>