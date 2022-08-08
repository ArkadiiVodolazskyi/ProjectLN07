<script>
	import {urlFor} from '$src/service/sanityClient.js';

	export let tool;
  const {
    title,
		link,
		image,
		description
  } = tool;

	const post_thumbnail_url = image ? urlFor(image) : null;
</script>

<a class="card tool" href={link.current} title={description}>
	<!-- TODO: Conditional tag -->
	<img class="card_image" src={post_thumbnail_url} alt={title}>
	<h6 class="card_title">{title}</h6>
</a>

<style lang="sass">
.card
	text-align: center
	padding: .5rem
	border-radius: calc( var(--radius) / 3 )
	&:hover
		background-color: var(--color-bg-primary-inverted-50)
	.card_image
		height: 3rem
		width: auto
	.card_title
		margin-top: .5rem
		font-size: 1.1rem
</style>